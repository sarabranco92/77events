# 77events — project guide

React event-agency website with event data, slideshow, event cards and modals, plus component tests.

## Scope and source

This guide describes the default branch `main` reviewed on 3 October 2026. Commands were checked against committed manifests and configuration; applications and external integrations were not executed as part of this documentation update.

## Repository map

- `public/events.json`
- `src/contexts/DataContext/index.js`
- `src/containers/Events/index.js`
- `src/containers/Form/index.js`
- `src/helpers/Date/index.js`

## Prerequisites and local use

Clone the repository and enter its root directory:

```sh
git clone https://github.com/sarabranco92/77events.git
cd 77events
```

Install Node.js and npm compatible with the committed dependencies. A fresh install/build has not established an exact supported Node version for this repository. Keep the committed lockfile and do not mix npm and Yarn lockfile updates unintentionally.

```sh
npm install
npm start
```

The React development server normally opens http://localhost:3000. See the configuration notes below before trying integrations.

## Available npm scripts

From the repository root unless a directory is explicitly specified. These are existing commands, not evidence of a successful run.

| Command | Committed behavior |
| --- | --- |
| `npm run predeploy` | `npm run build` — publishes or prepares publishing; not a local check |
| `npm run deploy` | `gh-pages -d build` — publishes or prepares publishing; not a local check |
| `npm start` | `react-scripts start` |
| `npm run build` | `react-scripts build` |
| `npm test` | `react-scripts test` |
| `npm run lint` | `eslint .eslintrc.js ./src` |
| `npm run format` | `prettier ./src --write` |

## Configuration and implementation notes

Contact submission uses `mockContactApi`, a delayed promise that resolves successfully; it does not send email. Event data is fetched from the absolute `/events.json` path. Check this path when hosting beneath `/77events/`, as configured by package.json. The original README specifies Node >=16.14.1; this historical minimum is not a claim that that version remains supported.

## Verification checklist

Run the existing tests, then check slideshow order, event filtering and modal contents. Submit the form and confirm the simulated loading and success behavior.

The repository includes 16 file(s) named as tests/specs. Run the relevant configured test runner and review its actual result; this documentation update does not claim the tests pass.

## Maintenance

Keep this guide in sync when routes, commands, environment variables or hosting paths change. Use development databases/accounts for integration checks. Keep private credentials in server-side environment configuration and out of documentation. No new license or ownership terms are introduced by this guide; retain existing repository notices.
