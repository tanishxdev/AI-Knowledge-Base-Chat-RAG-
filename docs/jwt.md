# JWT Notes (JSON Web Token)

## 1) What Is JWT?
JWT is a compact, URL-safe token format used to securely transfer claims between parties.

Most common use:
- Authentication (who the user is)
- Authorization (what user can do)

JWT is just a token format. Security depends on:
- strong secret/private key
- short expiry
- proper validation on every protected request

## 2) JWT Structure

JWT has 3 parts separated by dots:

`header.payload.signature`

1. Header
- token type (JWT)
- algorithm (example: HS256, RS256)

2. Payload
- claims (data), such as:
	- sub (subject/user id)
	- role
	- iat (issued at)
	- exp (expiry)

3. Signature
- verifies token integrity
- generated from header + payload + secret/key

Important:
- JWT payload is Base64Url encoded, not encrypted.
- Never store passwords or sensitive personal data in token payload.

## 3) Common Terms

- Access Token: short-lived token sent with API requests.
- Refresh Token: longer-lived token used to get new access tokens.
- Stateless Auth: server does not store session per user (token carries claims).

## 4) Install and Basic Usage (Node.js)

```bash
npm install jsonwebtoken
```

Create token:

```js
const jwt = require("jsonwebtoken");

const payload = { sub: "user_123", role: "admin" };
const secret = process.env.JWT_SECRET;

const token = jwt.sign(payload, secret, {
	expiresIn: "15m",
	issuer: "my-app",
});
```

Verify token:

```js
try {
	const decoded = jwt.verify(token, process.env.JWT_SECRET, {
		issuer: "my-app",
	});
	console.log(decoded);
} catch (err) {
	console.error("Invalid token:", err.message);
}
```

## 5) JWT in Express Middleware

```js
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).json({ message: "Missing or invalid Authorization header" });
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(401).json({ message: "Invalid or expired token" });
	}
}

module.exports = authMiddleware;
```

Use it:

```js
app.get("/profile", authMiddleware, (req, res) => {
	res.json({ user: req.user });
});
```

## 6) Security Best Practices

- Use HTTPS only.
- Keep access token expiry short (for example 5-15 minutes).
- Store refresh tokens securely and rotate them.
- Keep `JWT_SECRET` in environment variables, never hardcode.
- Validate issuer (`iss`) and audience (`aud`) when needed.
- Implement logout strategy (token blacklist or refresh token revocation).
- Protect against XSS and CSRF based on storage strategy.

## 7) Where to Store Tokens

Option A: HttpOnly secure cookie
- Better protection from JavaScript access.
- Needs CSRF protection strategy.

Option B: In-memory (frontend runtime)
- Good for SPAs with silent refresh.
- Token lost on page refresh unless renewed.

Avoid:
- localStorage for high-security apps, because XSS can expose tokens.

## 8) Common JWT Errors

- `invalid signature`: wrong secret or key.
- `jwt expired`: token expired.
- `jwt malformed`: bad token format.
- `invalid audience/issuer`: claim mismatch.

## 9) JWT vs Session

- Session auth: server stores session state.
- JWT auth: token carries claims, usually stateless.

JWT is good for distributed APIs, but requires strong token lifecycle management.

## 10) Quick Interview Revision

- JWT = Header + Payload + Signature.
- Payload is encoded, not encrypted.
- Access token should be short-lived.
- Always verify token signature and expiry.
- Prefer secure cookies or in-memory strategy with proper protection.

