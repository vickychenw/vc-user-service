# User Service

API to hold all user related services.

## Getting started

```bash
npm install
npm run dev
```

The server runs on port 4000.

There are () routes:

- http://localhost:4000/ - default

The server persists using MongoDB and

## Development

This project uses EditorCofnig to standardize text editor configuration. Visit https://editorconfig.org for details.

This project uses ESLint to detect suspicious code in Javascript files. Visit https://eslint.org for details.

### Debugging

## Application setup

```
+-- src/
| +-- server.js - server config loading and setup
| +-- app.js - Application setup, e.g cors, swagger, etc.
| +-- constants/
| +-- controllers/ - validations should be done within the controllers
| | +-- __tests__/
| | +-- sql/
| | | +-- connect.js
| +-- middleware/
| +-- models/ - db schema
| +-- routes/
| | +-- v1.0/
| | | +-- userRoute.js
```

## Unit Tests

--silent to prevent npm to print error messages to the console

To run all tests, use either of the following commands:

```
npm test
npm test -- --silent
npx test
```

To run a specific test:

- add .only to the suite or test
- fit is an alias for .only

```
describe.only('...', ()=>{})

it.only('...',()=>{})
fit('...',()=>{})
```
