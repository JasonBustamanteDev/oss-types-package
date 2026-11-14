The OneSecondSubmit project is composed of a few micro services
1. UI for users to save their personal data
2. API that queues long running jobs
3. Worker project that handles the jobs

Certain identical types and functions are used across them
Instead of manually making sure they remain consistent across all 3, I'm using an NPM package they all will have as a dependency
