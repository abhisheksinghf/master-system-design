---
title: Authentication & Authorization – Interview Questions
sidebar_label: Interview Questions
---

# Authentication & Authorization – Interview Questions

---

## 1️⃣ What is the difference between authentication and authorization?

### Expected Answer
- **Authentication** verifies identity (who you are).
- **Authorization** determines permissions (what you can do).

### Interview One-Liner ⭐
> Authentication answers who; authorization answers what.

---

## 2️⃣ Why does authentication happen before authorization?

### Expected Answer
Because the system must first verify identity before deciding what permissions the user has.

---

## 3️⃣ What is session-based authentication?

### Expected Answer
After login, the server creates a session and stores session data server-side. The client sends a session ID with each request.

---

## 4️⃣ What are the limitations of session-based authentication?

### Expected Points
- Requires server-side state
- Harder to scale
- Requires sticky sessions or shared storage

---

## 5️⃣ What is token-based authentication?

### Expected Answer
After login, the server generates a token (e.g., JWT), and the client sends it with each request. The server validates the token without storing session state.

---

## 6️⃣ What is JWT?

### Expected Answer
JWT (JSON Web Token) is a self-contained, signed token that contains user claims and can be verified without server-side session storage.

---

## 7️⃣ What are the three parts of a JWT?

### Expected Answer
- Header
- Payload
- Signature

---

## 8️⃣ Why should JWT tokens have expiration time?

### Expected Answer
To limit damage if a token is stolen and reduce long-term exposure.

---

## 9️⃣ What is OAuth?

### Expected Answer
OAuth is an authorization framework that allows third-party applications to access user resources without sharing passwords.

---

## 🔟 What is the difference between access token and refresh token?

### Expected Answer
- **Access Token** → Short-lived, used to access APIs.
- **Refresh Token** → Long-lived, used to obtain new access tokens.

---

## 1️⃣1️⃣ What is Role-Based Access Control (RBAC)?

### Expected Answer
An authorization model where permissions are assigned based on user roles (e.g., admin, user, support).

---

## 1️⃣2️⃣ Why must JWT signatures always be validated?

### Expected Answer
To ensure the token was issued by a trusted authority and has not been tampered with.

---

## 1️⃣3️⃣ What are common authentication security mistakes?

### Expected Points
- Storing tokens insecurely
- Not validating signatures
- Using long-lived tokens
- Weak password hashing
- Hardcoding secrets

---

## 1️⃣4️⃣ Why should APIs validate tokens on every request?

### Expected Answer
Because tokens can expire or be revoked, and each request must be authenticated independently.

---

## 1️⃣5️⃣ Why is HTTPS mandatory for authentication systems?

### Expected Answer
Because tokens and credentials transmitted over HTTP can be intercepted.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. What does authentication verify?
2. What does authorization control?
3. Why use JWT in microservices?
4. Why are refresh tokens needed?
5. Why should tokens expire?

---

## ⭐ Keywords Interviewers Like to Hear

- Authentication
- Authorization
- JWT
- OAuth
- Access token
- Refresh token
- RBAC
- Token validation
- HTTPS

---

## ✅ You’re Strong in 8.3 If You Can:
- Clearly explain AuthN vs AuthZ
- Describe JWT structure
- Explain OAuth flow at high level
- Discuss API security best practices confidently

---
