# Node.js Notes

## 1) What Is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 engine.
It allows running JavaScript outside the browser, mainly for backend development.

Good for:
- APIs and microservices
- real-time apps (chat, notifications)
- I/O-heavy workloads

## 2) Core Characteristics

- Single-threaded event loop model for JavaScript execution.
- Non-blocking I/O via async APIs.
- Fast startup and good performance for network apps.
- Huge package ecosystem through npm.

Important idea:
- CPU-heavy tasks can block the event loop.
- I/O operations are handled efficiently through async mechanisms.

## 3) Installation and Version Check

```bash
node -v
npm -v
```

Initialize project:

```bash
npm init -y
```

## 4) Module Systems

CommonJS (default in many projects):

```js
const fs = require("fs");
module.exports = { hello: "world" };
```

ES Modules:

```js
import fs from "fs";
export const hello = "world";
```

Use one system consistently in a project.

## 5) Event Loop Basics

Node handles async callbacks through event loop phases.

Common queue priorities to remember:
- `process.nextTick()` callbacks run before promise microtasks in many practical flows.
- Promise microtasks run before timer and I/O callbacks.
- `setTimeout(fn, 0)` runs later in timer phase.

Simple demo:

```js
console.log("A");

setTimeout(() => console.log("B - timeout"), 0);
Promise.resolve().then(() => console.log("C - promise"));
process.nextTick(() => console.log("D - nextTick"));

console.log("E");
```

Typical output:
`A, E, D, C, B`

## 6) Built-in Modules

Useful core modules:
- `fs`: file system
- `path`: file paths
- `http`: create HTTP server
- `os`: OS info
- `events`: event emitter
- `crypto`: hashing, encryption helpers
- `stream`: readable/writable streams

Example (fs async):

```js
const fs = require("fs");

fs.readFile("./notes.txt", "utf8", (err, data) => {
	if (err) return console.error(err);
	console.log(data);
});
```

## 7) Environment Variables

Use env vars for config and secrets.

```js
const port = process.env.PORT || 3000;
```

Common practice:
- `.env` for local development
- never commit secrets to git

## 8) Error Handling Patterns

Callback style:

```js
if (err) return callback(err);
```

Promise/async-await style:

```js
async function run() {
	try {
		// risky operation
	} catch (err) {
		console.error(err.message);
	}
}
```

Handle process-level errors carefully:
- `uncaughtException`
- `unhandledRejection`

## 9) Node.js Best Practices

- Keep functions small and focused.
- Avoid blocking APIs in request path.
- Use async/await for readability.
- Validate input at API boundaries.
- Add structured logging.
- Write tests for services and routes.
- Use linting and formatting tools.

## 10) Quick Interview Revision

- Node.js is runtime, not a framework.
- It is single-threaded for JS, but can use worker threads/processes.
- Non-blocking I/O is key performance strength.
- Event loop and callback queues are core concepts.
- npm is the package manager for Node ecosystem.

