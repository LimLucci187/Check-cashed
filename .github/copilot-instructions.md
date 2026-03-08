# Copilot Instructions for check-cashed

## Project Overview

check-cashed is a TypeScript monorepo for checking and depositing checks. It contains both an Express backend and a React frontend, sharing a single `tsconfig.json` and `package.json`.

## Repository Structure

```
src/
  controllers/   # Express route handlers (e.g., check-deposit-controller.ts)
  services/      # Business logic and validation (e.g., check-deposit-service.ts)
  components/    # React UI components (e.g., check-deposit.tsx, check-deposit.css)
  types.ts       # Shared TypeScript interfaces and types
```

## Tech Stack

- **Language**: TypeScript (strict mode, CommonJS modules, ES6 target)
- **Backend**: Express
- **Frontend**: React (JSX with `react` preset)
- **Package manager**: npm

## Coding Conventions

- Use TypeScript strict mode — all code must type-check with `strict: true`.
- Define shared interfaces and types in `src/types.ts`.
- Backend controllers live in `src/controllers/` and should only handle HTTP request/response logic.
- Business logic belongs in `src/services/`.
- React components live in `src/components/` with co-located CSS files.
- Use named exports for controllers, default exports for services and components.
- Follow existing file naming: `kebab-case` for filenames (e.g., `check-deposit-controller.ts`).
- Do not commit secrets; use `.env.example` to document required environment variables.

## Environment Variables

See `.env.example` for required environment variable keys. Never commit real values.

## Building and Running

Install dependencies:
```bash
npm install
```

Compile TypeScript:
```bash
npx tsc
```

## Notes for Copilot

- When adding a new feature, create a controller in `src/controllers/`, a service in `src/services/`, and a component in `src/components/` as appropriate.
- Import shared types from `src/types.ts` rather than redefining them inline.
- Keep React components functional (no class components).
- Keep Express handlers thin — delegate logic to service functions.
