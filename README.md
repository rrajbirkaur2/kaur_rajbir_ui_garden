# UC Component Library -- Assignment 13

**Author:** Rajbir Kaur

This project is a React UI Component Library demonstrating code quality
checks, CI/CD practices, and Docker containerization. The application
uses Storybook to display reusable UI components.

## Project Overview

This project integrates modern development tools to ensure code quality
and reliable deployment.

Tools used in this project:

- React + TypeScript
- Storybook
- Prettier (code formatting)
- ESLint (linting)
- Husky (pre‑commit hooks)
- GitHub Actions (CI/CD pipeline)
- Docker (containerized deployment)
- Jest + React Testing Library (unit tests)

These tools ensure that all code pushed to the repository follows
formatting rules, passes linting checks, and successfully runs tests.

## Components Included

The UI component library includes:

- Button
- Card
- Dropdown
- HeroImage
- Img
- Label
- RadioButton
- Table
- Text

Each component is documented and displayed using Storybook.

## Running the Project Locally

Install dependencies:

    npm install

Run Storybook locally:

    npm run storybook

Open:

    http://localhost:6006

Build the Storybook static site:

    npm run build-storybook

This creates the **storybook-static** folder.

## Code Quality Tools

### Prettier

Check formatting:

    npx prettier --check .

Format code:

    npm run format/ npx prettier --write .

### ESLint

Run lint check:

    npm run lint

### Run Tests

    npm test

Run all tests:

    npm test -- --watchAll=false / npm test then press a for all tests of all the components

## Demo Workflow

1. Husky Pre-Commit Hooks

Husky runs Prettier, ESLint, and test checks before any commit:

Make changes that intentionally break formatting, ESLint rules, or tests.
Example:

export function Button(){return<div>Click me</div> } // Bad formatting
const unusedVar = 5; // ESLint violation

Try to commit:

git add .
git commit -m "Intentional broken code"
Husky will block the commit, showing errors from Prettier/ESLint or failing tests.

2. GitHub Actions CI/CD

Even if a commit is bypassed (for demo purposes):

git commit --no-verify -m "Force broken code commit"
git push origin main
The CI/CD pipeline will detect issues in Prettier, ESLint, or failing tests.
GitHub Actions build will fail, ensuring code quality is enforced.

3. Fix Code Locally
   Automatically format and lint the code:
   npx prettier --write .
   npx eslint . --fix
   Run tests to ensure they pass:
   npm test

4. Commit & Push Fixed Code
   git add .
   git commit -m "Fix formatting, ESLint errors, and tests"
   git push origin main
   GitHub Actions build will now succeed, demonstrating CI/CD validation.

## Docker Setup

Docker is used to serve the Storybook static build.

### Build Docker Image

    docker build -t kaur_rajbir_coding_assignment13 .

### Run Docker Container

    docker run -p 8018:80 --name kaur_rajbir_coding_assignment13 kaur_rajbir_coding_assignment13

Open in browser:

    http://localhost:8018

This displays the UI Component Library from the Docker container.

## GitHub Repository

https://github.com/rrajbirkaur2/kaur_rajbir_ui_garden
