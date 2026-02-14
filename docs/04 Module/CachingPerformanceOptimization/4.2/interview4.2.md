---
title: Cache Placement – Interview Questions
sidebar_label: Interview Questions
---

# Cache Placement – Interview Questions

---

## 1. What is cache placement?

### Expected Answer
Cache placement refers to where caching is implemented in a system architecture, such as client-side, CDN, application-level, or database-level caching.

### Interview One-Liner ⭐
> Cache placement determines latency, scalability, and consistency trade-offs.

---

## 2. What are the different layers where caching can be placed?

### Expected Answer
- Client-side cache
- CDN (edge cache)
- Application-level cache
- Database cache

---

## 3. What is client-side caching?

### Expected Answer
Caching data directly in the browser or mobile app to reduce repeated server calls.

### Benefit
Zero network latency.

### Limitation
Hard to invalidate and device-specific.

---

## 4. What is a CDN and how is it related to caching?

### Expected Answer
A CDN caches static content at globally distributed edge servers to reduce latency and origin server load.

---

## 5. What type of data should be cached at the CDN layer?

### Expected Answer
- Static assets (images, CSS, JS)
- Public content
- Read-heavy resources

---

## 6. What is application-level caching?

### Expected Answer
A caching layer between the application and database, typically using systems like Redis or Memcached.

### Purpose
Reduce database load and improve response time.

---

## 7. What is database caching?

### Expected Answer
Databases internally cache frequently accessed data in memory (e.g., buffer pool) to reduce disk I/O.

---

## 8. Why do modern systems use multi-level caching?

### Expected Answer
To reduce load progressively at each layer and optimize latency and scalability.

---

## 9. Which cache layer provides the lowest latency?

### Expected Answer
Client-side cache (since no network request is required).

---

## 10. Which cache layer is most important for backend scalability?

### Expected Answer
Application-level cache.

---

## 11. Should you use CDN for personalized API responses?

### Correct Answer
No.

### Explanation
CDNs are best for static or public content, not highly personalized data.

---

## 12. How does cache placement affect consistency?

### Expected Answer
The closer cache is to the user, the harder it becomes to maintain strong consistency.

---

## 13. How would you choose where to place a cache?

### Expected Points
- Data volatility
- User specificity
- Latency requirements
- Scalability needs

---

## 14. Give an example of cache placement in an e-commerce system.

### Expected Answer
- CDN → product images
- Application cache → product metadata
- No cache → payment processing

---

## 15. What are common mistakes related to cache placement?

### Expected Points
- Caching personalized data at CDN
- Ignoring invalidation complexity
- Treating cache as source of truth

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Which cache layer reduces global latency?
2. Which cache layer reduces database load?
3. Why is client cache difficult to control?
4. Why is multi-level caching common?
5. Why shouldn’t financial balances be cached at CDN?

---

## ⭐ Keywords Interviewers Like to Hear

- Multi-level caching
- Edge cache
- Application cache
- Database buffer pool
- Latency reduction
- Scalability

---

## ✅ You’re Strong in 4.2 If You Can:
- Explain each cache layer clearly
- Choose correct cache placement for a use case
- Discuss trade-offs between layers
- Avoid misusing CDN for dynamic data

---
