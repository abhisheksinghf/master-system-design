---
title: Backend Fundamentals – Interview Questions
sidebar_label: "0.3 Interview Questions"
description: Interview questions and expected answers for backend fundamentals in system design.
---

# Module 0.3 – Backend Fundamentals  
## Interview Questions & Expected Answers

---

## 1. What is a backend service?

### Expected Answer
A backend service exposes APIs, handles business logic, interacts with databases and other services, and runs continuously on a server.

### Interview Add-on ⭐
> Backend services are designed to be scalable, reliable, and secure.

---

## 2. Monolith vs Microservices – which is better?

### Expected Answer
Neither is universally better.

- **Monolith** → simple, easy to develop initially
- **Microservices** → scalable, independent deployments

### Interview Line ⭐
> Monoliths are good for early stages, microservices are better for large-scale systems.

---

## 3. What is statelessness and why is it important?

### Expected Answer
Stateless services do not store client-specific data between requests.

### Why Important
- Easy horizontal scaling
- Works well with load balancers
- Better fault tolerance

### Interview One-Liner ⭐
> Stateless services are easier to scale and recover from failures.

---

## 4. What problems do stateful services cause?

### Expected Points
- Session affinity required
- Harder to scale
- Data loss on instance failure

### Interview Line
> Stateful services introduce tight coupling between clients and servers.

---

## 5. What is REST and why is it popular?

### Expected Answer
REST is an architectural style using stateless, resource-based APIs over HTTP.

### Why Popular
- Simple
- Language agnostic
- Scales well

---

## 6. What is a good REST API design?

### Expected Points
- Nouns, not verbs
- Uses HTTP methods
- Proper status codes
- Versioning

Example:
```

GET /users/{id}
POST /payments

```

---

## 7. What is API versioning and why is it needed?

### Expected Answer
API versioning allows evolving APIs without breaking existing clients.

### Interview Example
```

/v1/orders
/v2/orders

```

---

## 8. Authentication vs Authorization?

### Authentication
> Who are you?

### Authorization
> What can you do?

### Interview Tip ⭐
Always explain both — never just one.

---

## 9. What is JWT and why is it used?

### Expected Answer
JWT is a self-contained token used for stateless authentication.

### Advantages
- No server-side session storage
- Scales well
- Easy to validate

### Trade-off
- Token revocation is hard

---

## 10. JWT vs Session-based authentication?

| Aspect | JWT | Session |
|----|----|----|
| Server state | Stateless | Stateful |
| Scalability | High | Lower |
| Revocation | Hard | Easy |

### Interview Line ⭐
> JWT trades revocation simplicity for scalability.

---

## 11. What is OAuth?

### Expected Answer
OAuth is an authorization framework that allows third-party access without sharing passwords.

### Example
- Login with Google

---

## 12. Sync vs Async APIs – when to use which?

### Synchronous
- Immediate response needed
- Simple workflows

### Asynchronous
- Long-running tasks
- High traffic systems

### Interview Example
> Notifications and emails are usually handled asynchronously.

---

## 13. How do services communicate with each other?

### Common Methods
- REST
- gRPC
- Message queues

### Trade-off Line ⭐
> REST is simple, messaging is scalable, gRPC is fast.

---

## 14. Why should backend services be stateless in distributed systems?

### Expected Answer
Stateless services simplify load balancing, scaling, and failure recovery.

---

## 15. How do you manage configuration and secrets?

### Expected Answer
- Config via environment variables or config servers
- Secrets via secure secret managers

### Interview Rule ⭐
> Never hardcode secrets in code or repositories.

---

## 🔁 Rapid-Fire Questions (1–2 Lines)

1. Why is stateless authentication preferred?
2. What problem does JWT solve?
3. Why is API versioning important?
4. When should you avoid microservices?
5. Why is async communication scalable?

---

## ⭐ Key Interview Keywords to Use Naturally

- Stateless services
- Horizontal scaling
- Backward compatibility
- Token-based authentication
- Loose coupling

---
