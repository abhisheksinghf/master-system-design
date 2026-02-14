---
title: Networking Basics – Interview Questions
sidebar_label: Interview Questions
---

# Module 0.1 – Networking Basics  
## Quick Recap & Interview Questions

---

## 1️⃣ What happens when you type a URL in the browser?

### Expected Answer (High Level)
1. DNS resolution (domain → IP)
2. TCP connection setup
3. TLS handshake (for HTTPS)
4. HTTP request sent
5. Server processes request
6. Response returned and rendered

### Interview Tip ⭐
Don’t go too deep unless asked.  
**Mention latency sources** → DNS, TCP, TLS.

---

## 2️⃣ Why does DNS matter in system design?

### Key Points
- DNS adds latency
- DNS failure = system unreachable
- Cached using TTL
- Used for traffic routing (Geo-DNS)

### Sample Answer
> DNS converts domain names to IPs and is a critical dependency. Large-scale systems use caching and Geo-DNS to reduce latency and route users to the nearest data center.

---

## 3️⃣ Difference between HTTP and HTTPS?

| Aspect | HTTP | HTTPS |
|----|----|----|
| Encryption | ❌ No | ✅ Yes |
| Security | Low | High |
| Port | 80 | 443 |

### Interview Keyword
> **TLS handshake**

---

## 4️⃣ Why is HTTPS mandatory for modern systems?

### Expected Points
- Prevents man-in-the-middle attacks
- Protects sensitive data
- Ensures server authenticity

### Bonus Line ⭐
> HTTPS is mandatory for any system handling authentication, payments, or personal data.

---

## 5️⃣ What is statelessness and why is it important?

### Stateless
- Server stores no client state
- Each request is independent

### Why Important
- Easy horizontal scaling
- Load balancers can route to any server
- Better fault tolerance

### Interview One-Liner
> Stateless services scale better and are easier to maintain.

---

## 6️⃣ TCP vs UDP — when do you use which?

### TCP
- Reliable
- Ordered
- Slower
- Used for payments, APIs, databases

### UDP
- Fast
- Unreliable
- Used for video streaming, gaming

### Interview Example
> Payment systems use TCP because reliability matters more than speed.

---

## 7️⃣ What is latency vs throughput?

### Latency
- Time taken for a single request

### Throughput
- Number of requests processed per second

### Interview Example
- Payment system → low latency
- Analytics system → high throughput

---

## 8️⃣ What is a port and why is it needed?

### Expected Answer
- Port identifies the application on a machine
- Multiple services can run on the same IP using different ports

Example:
```

IP = machine
Port = application

```

---

## 9️⃣ What does REST mean in system design?

### Key Principles
- Resource-based URLs
- Stateless
- Uses HTTP methods

### Interview Line
> REST works well with stateless services and scales easily.

---

## 🔟 Common Traps Interviewers Set

❌ Saying HTTPS = encryption only  
✅ Mention authentication + integrity

❌ Forgetting DNS  
✅ Always mention DNS first

❌ Over-explaining TCP internals  
✅ Keep it high-level unless asked

---

## 🔁 Rapid Fire Questions (Practice)

Answer in **one sentence**:

1. Why is DNS caching important?
2. Why are stateless services preferred?
3. What adds more latency: TCP or TLS?
4. Can HTTP work without TCP?
5. Why is UDP not used for payments?

---

## ⭐ Key Interview Keywords to Remember

- DNS TTL
- Stateless services
- TLS handshake
- Latency vs throughput
- Reliability vs speed trade-off

---

## 🎯 If You Can Answer These, You’re Solid:
- Explain request flow clearly
- Justify protocol choices
- Relate networking to scalability

---
