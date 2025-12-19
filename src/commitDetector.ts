import * as vscode from 'vscode';

export class CommitDetector {
    private lastCommitHash: string | undefined;
    private disposables: vscode.Disposable[] = [];

    constructor(private onCommit: () => void) {}

    async initialize(): Promise<void> {
        // Get the Git extension
        const gitExtension = vscode.extensions.getExtension('vscode.git');
        if (!gitExtension) {
            vscode.window.showWarningMessage('Git extension not found. Commit animations will not work.');
            return;
        }

        const git = gitExtension.isActive ? gitExtension.exports : await gitExtension.activate();
        const api = git.getAPI(1);

        if (api.repositories.length === 0) {
            // Wait for repository to be opened
            const repoDisposable = api.onDidOpenRepository((repository: any) => {
                this.watchRepository(repository);
                repoDisposable.dispose();
            });
            this.disposables.push(repoDisposable);
        } else {
            // Repository already available
            this.watchRepository(api.repositories[0]);
        }
    }

    private watchRepository(repository: any): void {
        // Store initial commit hash
        this.lastCommitHash = repository.state.HEAD?.commit;

        // Listen to repository state changes
        const stateDisposable = repository.state.onDidChange(() => {
            const currentCommit = repository.state.HEAD?.commit;

            // Check if a new commit was made
            // Only trigger if we had a previous commit hash
            if (currentCommit && this.lastCommitHash && currentCommit !== this.lastCommitHash) {
                this.lastCommitHash = currentCommit;
                // Trigger the animation!
                this.onCommit();
            } else if (currentCommit && !this.lastCommitHash) {
                this.lastCommitHash = currentCommit;
            }
        });

        this.disposables.push(stateDisposable);
    }

    dispose(): void {
        this.disposables.forEach(d => d.dispose());
        this.disposables = [];
    }
}
