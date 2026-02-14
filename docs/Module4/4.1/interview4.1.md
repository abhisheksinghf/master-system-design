---
title: Caching Basics – Interview Questions
sidebar_label: Interview Questions
---

# Caching Basics – Interview Questions

---

## 1️⃣ What is caching?

### Expected Answer
Caching is the process of storing frequently accessed data in a fast storage layer (usually memory) to reduce latency and backend load.

### Interview One-Liner ⭐
> Cache is a performance optimization layer, not the source of truth.

---

## 2️⃣ Why is caching needed in scalable systems?

### Expected Points
- Reduces database load
- Improves response time
- Handles high traffic
- Increases throughput
- Reduces infrastructure cost

---

## 3️⃣ What is a cache hit and cache miss?

### Cache Hit
Data is found in cache → fast response.

### Cache Miss
Data not in cache → fetch from DB → store in cache.

---

## 4️⃣ What is cache hit ratio?

### Expected Answer
Cache hit ratio = (cache hits / total requests)

Higher hit ratio → better performance.

---

## 5️⃣ What kind of data should be cached?

### Expected Answer
- Frequently read
- Rarely updated
- Expensive to compute or fetch

Example:
- Product catalogs
- User profiles

---

## 6️⃣ What kind of data should NOT be cached?

### Expected Answer
- Highly volatile data
- Critical financial balances
- Real-time transactional data

---

## 7️⃣ What are common cache eviction strategies?

### Expected Answer
- LRU (Least Recently Used)
- LFU (Least Frequently Used)
- FIFO (First In First Out)

---

## 8️⃣ Why is LRU commonly used?

### Expected Answer
Because it balances simplicity and effectiveness by removing the least recently accessed items.

---

## 9️⃣ What is TTL in caching?

### Expected Answer
TTL (Time To Live) defines how long a cache entry remains valid before expiring automatically.

---

## 🔟 What are the trade-offs of caching?

### Expected Points
- Stale data risk
- Cache invalidation complexity
- Additional memory cost

---

## 1️⃣1️⃣ Why is cache not considered a source of truth?

### Expected Answer
Because cache data can expire, be evicted, or become stale. The database remains the authoritative source.

---

## 1️⃣2️⃣ What happens if cache crashes?

### Expected Answer
Data is lost from cache, but system falls back to the database.

---

## 1️⃣3️⃣ Does caching improve write performance?

### Expected Answer
Not directly. Caching primarily improves read performance.

---

## 1️⃣4️⃣ How does caching improve scalability?

### Expected Answer
By reducing database load and allowing the system to handle more concurrent users.

---

## 1️⃣5️⃣ Give a real-world example where caching is critical.

### Expected Answer
In an e-commerce system:
- Product pages are cached to handle high traffic.
- Without caching, the database would become a bottleneck.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why is high cache hit ratio important?
2. Why can caching lead to stale data?
3. Which eviction policy is most common?
4. What is the primary benefit of in-memory cache?
5. Why shouldn’t financial balances be cached?

---

## ⭐ Keywords Interviewers Like to Hear

- Cache hit ratio
- Eviction policy
- LRU
- TTL
- Stale data
- Source of truth

---

## ✅ You’re Strong in 4.1 If You Can:
- Explain caching clearly in simple terms
- Compare eviction strategies
- Identify what should and shouldn’t be cached
- Discuss trade-offs confidently

---
