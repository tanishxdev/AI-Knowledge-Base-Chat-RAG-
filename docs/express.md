# Express.js Notes

## 1) What Is Express?
Express.js is a minimal and flexible web framework for Node.js.
It helps you build APIs and web servers faster by giving clean routing and middleware patterns.

Core idea:
- Node.js gives runtime and low-level HTTP modules.
- Express gives a simpler developer experience on top of HTTP.

## 2) Install and Setup

```bash
npm init -y
npm install express
```

Basic server:

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello from Express");
});

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
```

## 3) Request and Response

- req: incoming request data (params, query, body, headers).
- res: outgoing response (status, json, send, set headers).

Example:

```js
app.get("/users/:id", (req, res) => {
	const userId = req.params.id;
	const active = req.query.active;
	res.status(200).json({ userId, active });
});
```

## 4) Middleware

Middleware functions run before the final route handler.
They can:
- read/modify req and res
- end response
- pass control with next()

Common middleware:
- express.json() for JSON body parsing
- logging middleware
- auth middleware
- error handling middleware

Example:

```js
app.use(express.json());

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});
```

## 5) Routing

HTTP method helpers:
- app.get()
- app.post()
- app.put()
- app.patch()
- app.delete()

Router module pattern:

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({ message: "All users" }));
router.post("/", (req, res) => res.status(201).json({ message: "User created" }));

module.exports = router;
```

Attach router in main app:

```js
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);
```

## 6) Error Handling

Create centralized error middleware at the end of all routes.

```js
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(err.status || 500).json({
		message: err.message || "Internal Server Error",
	});
});
```

Tip:
- In async handlers, wrap logic with try/catch or use an async wrapper.

## 7) Useful Response Methods

- res.send("text")
- res.json({ key: "value" })
- res.status(201).json(...)
- res.sendStatus(204)
- res.redirect("/login")

## 8) Express Project Structure (Simple)

```text
src/
	app.js
	routes/
	controllers/
	services/
	middlewares/
```

## 9) Best Practices

- Keep routes thin, move business logic to services/controllers.
- Validate input (for example with zod or joi).
- Handle errors consistently.
- Use environment variables for config and secrets.
- Add security middleware (helmet, cors, rate-limit).
- Log requests and important failures.

## 10) Quick Interview Revision

- Express is not part of Node core; it is a third-party framework.
- Middleware order matters.
- Error middleware has 4 args: (err, req, res, next).
- Use Router to split route modules.
- Use express.json() to parse JSON bodies.

