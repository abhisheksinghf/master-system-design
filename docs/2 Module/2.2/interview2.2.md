---
title: Reverse Proxy & API Gateway – Interview Questions
sidebar_label: Interview Questions
---

# Reverse Proxy & API Gateway – Interview Questions

---

## 1. What is a reverse proxy?

### Expected Answer
A reverse proxy sits in front of backend servers, receives client requests, forwards them to appropriate backend services, and returns responses to clients.

### Interview One-Liner ⭐
> A reverse proxy hides backend servers from clients.

---

## 2. Reverse proxy vs forward proxy?

### Reverse Proxy
- Protects servers
- Used by backend systems

### Forward Proxy
- Protects clients
- Used to access the internet

### Interview Tip ⭐
Mention **who it protects** — clients vs servers.

---

## 3. Why do we use a reverse proxy?

### Expected Points
- Security (hide backend servers)
- SSL termination
- Centralized routing
- Caching and compression

---

## 4. Is a reverse proxy the same as a load balancer?

### Correct Answer
No.

### Explanation
- Reverse proxy → request handling and routing
- Load balancer → traffic distribution

### Interview Line ⭐
> A load balancer focuses on servers, a reverse proxy focuses on requests.

---

## 5. What is an API Gateway?

### Expected Answer
An API Gateway is a specialized reverse proxy designed for APIs and microservices that acts as a single entry point and enforces policies.

---

## 6. Why do microservices need an API Gateway?

### Expected Points
- Centralized authentication
- Rate limiting
- Logging and monitoring
- Simplified client interaction

### Interview Line ⭐
> API Gateways handle cross-cutting concerns in microservices.

---

## 7. API Gateway vs Reverse Proxy?

### Expected Comparison
- Reverse proxy → general HTTP traffic
- API Gateway → API-focused with policies

### Interview Gold Line ⭐
> An API Gateway is a reverse proxy with business awareness.

---

## 8. API Gateway vs Load Balancer?

### Expected Comparison
- Load balancer → distributes traffic
- API gateway → enforces auth, rate limits, routing

### Interview Line ⭐
> Load balancers don’t understand business logic; gateways do.

---

## 9. What responsibilities does an API Gateway handle?

### Expected List
- Authentication & authorization
- Rate limiting
- Routing
- Request/response transformation
- Logging & monitoring

---

## 10. Can an API Gateway become a bottleneck?

### Correct Answer
Yes.

### Why?
- All traffic passes through it

### Solution
- Multiple gateway instances
- Load balancer in front

---

## 11. What is SSL termination and where does it happen?

### Expected Answer
SSL termination is decrypting HTTPS traffic, often done at the reverse proxy or API Gateway to reduce backend overhead.

---

## 12. What is request aggregation in an API Gateway?

### Expected Answer
The gateway combines responses from multiple services into a single response for the client.

---

## 13. When should you NOT use an API Gateway?

### Expected Answer
- Simple monolith
- Low traffic system
- No cross-cutting concerns

---

## 14. What are common mistakes candidates make with API Gateways?

### Expected Points
- Treating it as a load balancer
- Ignoring SPOF risk
- Overusing it for business logic

---

## 15. How does an API Gateway improve security?

### Expected Answer
- Centralized auth
- Hides internal services
- Rate limits malicious traffic

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Can a reverse proxy do basic load balancing?
2. Why is an API Gateway needed in microservices?
3. What happens if the API Gateway goes down?
4. Should business logic live in the API Gateway?
5. Why is a load balancer usually placed before an API Gateway?

---

## ⭐ Keywords Interviewers Like to Hear

- Reverse proxy
- Single entry point
- Cross-cutting concerns
- Rate limiting
- SSL termination
- SPOF

---

## ✅ You’re Strong in 2.2 If You Can:
- Clearly differentiate proxy, gateway, and load balancer
- Explain why gateways exist
- Talk about bottlenecks and SPOF
- Use real microservice examples

---
