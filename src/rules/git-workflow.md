# Git Workflow Guidelines

## Branching Strategy

- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: New features or enhancements
- `bugfix/*`: Bug fixes

## Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Be descriptive but concise
- Structure: `<type>(<scope>): <description>`
  - Types: feat, fix, docs, style, refactor, test, chore
  - Example: `feat(portfolio): add project cards component`

## Pull Requests

- Create descriptive titles
- Fill out PR template with details about changes
- Request reviews from appropriate team members
- Ensure all tests pass before merging

## Best Practices

- Commit often with small, logical changes
- Pull and rebase regularly to avoid merge conflicts
- Use interactive rebasing to clean up history before merging
- Never force push to shared branches
