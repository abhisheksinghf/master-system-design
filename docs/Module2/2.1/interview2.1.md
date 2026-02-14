---
title: Load Balancers – Interview Questions
sidebar_label: Interview Questions
---

# Load Balancers – Interview Questions

---

## 1️⃣ What is a load balancer?

### Expected Answer
A load balancer distributes incoming client requests across multiple backend servers to improve scalability, availability, and fault tolerance.

### Interview One-Liner ⭐
> Load balancers enable horizontal scaling and prevent single server overload.

---

## 2️⃣ Why do we need load balancers?

### Expected Points
- Prevent server overload
- Enable horizontal scaling
- Remove single points of failure
- Improve availability

---

## 3️⃣ Where is a load balancer placed in a system?

### Expected Answer
Between clients and backend servers. Clients never directly communicate with backend instances.

---

## 4️⃣ What problems occur if a system does not use a load balancer?

### Expected Answer
- Single Point of Failure
- Poor scalability
- Uneven traffic distribution
- Server overload

---

## 5️⃣ What is Layer 4 (L4) load balancing?

### Expected Answer
L4 load balancing operates at the transport layer (TCP/UDP) and routes traffic based on IP address and port.

### Key Point
- Fast but limited routing logic

---

## 6️⃣ What is Layer 7 (L7) load balancing?

### Expected Answer
L7 load balancing operates at the application layer (HTTP/HTTPS) and routes requests based on URLs, headers, or cookies.

### Key Point
- Slower than L4 but much more flexible

---

## 7️⃣ Difference between L4 and L7 load balancers?

### Expected Comparison
- L4 → Faster, protocol-agnostic
- L7 → Smarter routing, understands HTTP

### Interview Line ⭐
> L4 focuses on speed, L7 focuses on intelligence.

---

## 8️⃣ What are common load balancing algorithms?

### Expected List
- Round Robin
- Least Connections
- Hash-based routing

---

## 9️⃣ When would you use Round Robin?

### Expected Answer
When backend servers are identical and traffic is evenly distributed.

---

## 🔟 What is Least Connections algorithm?

### Expected Answer
Traffic is routed to the server with the fewest active connections to balance uneven load.

---

## 1️⃣1️⃣ What is hash-based routing?

### Expected Answer
Requests are routed based on a hash of client IP or request key, often used for session affinity.

---

## 1️⃣2️⃣ What are health checks and why are they important?

### Expected Answer
Health checks allow the load balancer to detect unhealthy servers and stop routing traffic to them.

### Interview Line ⭐
> Health checks prevent failed requests from reaching unhealthy servers.

---

## 1️⃣3️⃣ Can a load balancer be a single point of failure?

### Correct Answer
Yes, if only one load balancer exists.

### Follow-up
Use multiple load balancers with DNS or failover mechanisms.

---

## 1️⃣4️⃣ What are sticky sessions?

### Expected Answer
Sticky sessions ensure requests from a client are always routed to the same backend server.

---

## 1️⃣5️⃣ Why are sticky sessions discouraged?

### Expected Points
- Uneven load distribution
- Reduced fault tolerance
- Harder scaling

### Interview Line ⭐
> Stateless services eliminate the need for sticky sessions.

---

## 1️⃣6️⃣ How do load balancers work with stateless services?

### Expected Answer
Any request can be routed to any instance since no client state is stored on the server.

---

## 1️⃣7️⃣ What additional responsibilities can load balancers handle?

### Expected Examples
- SSL termination
- Rate limiting
- Request routing
- Failover

---

## 1️⃣8️⃣ Load balancer vs API Gateway?

### Expected Answer
- Load balancer → traffic distribution
- API gateway → routing, authentication, rate limiting, orchestration

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why do stateless services scale better behind a load balancer?
2. Why is a single load balancer risky?
3. Which load balancer type supports path-based routing?
4. Why are health checks mandatory?
5. When is hash-based routing useful?

---

## ⭐ Keywords Interviewers Like to Hear

- Horizontal scaling
- SPOF
- Health checks
- L4 vs L7
- Stateless services
- Session affinity

---

## ✅ You’re Strong in 2.1 If You Can:
- Explain why load balancers are needed
- Differentiate L4 vs L7
- Discuss algorithms confidently
- Talk about SPOF and fault tolerance

---