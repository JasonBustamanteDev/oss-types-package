The OneSecondSubmit project is composed of a few micro services
1. UI for users to save their personal data
2. API that queues long running jobs
3. Worker project that handles the jobs

Certain identical types and functions are used across them
Instead of manually making sure they remain consistent across all 3, I'm using an NPM package they all will have as a dependency

==========================

DOCS
- Use npm run build to compile the TS to JS
- Commit the dist folder to the github repo
- We will not publish this package in npm. We'll save it to a public Github repo where anyone can install it as a package
- Do not save private code in here, or any secrets