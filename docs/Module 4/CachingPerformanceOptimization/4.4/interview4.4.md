---
title: Cache Invalidation – Interview Questions
sidebar_label: Interview Questions
---

# Cache Invalidation – Interview Questions

---

## 1. What is cache invalidation?

### Expected Answer
Cache invalidation is the process of removing or updating stale data in cache when the underlying data in the database changes.

### Interview One-Liner ⭐
> Cache invalidation ensures users don’t see stale data.

---

## 2. Why is cache invalidation considered hard?

### Expected Answer
Because caches are distributed, updates may happen concurrently, race conditions can occur, and ensuring consistency across multiple cache nodes is complex.

### Interview Gold Line ⭐
> Cache invalidation is one of the hardest problems in computer science.

---

## 3. What is TTL-based invalidation?

### Expected Answer
Each cache entry has a Time To Live. After TTL expires, the entry is automatically removed.

### Limitation
Data may remain stale until TTL expires.

---

## 4. Why is TTL alone not sufficient?

### Expected Answer
Because updates may require immediate consistency, and TTL does not guarantee freshness before expiration.

---

## 5. What is write-invalidate strategy?

### Expected Answer
After updating the database, the corresponding cache entry is deleted.

This forces the next read to fetch fresh data from the DB.

---

## 6. What is write-update strategy?

### Expected Answer
After updating the database, the cache is updated with the new value instead of being deleted.

---

## 7. What are the trade-offs between write-invalidate and write-update?

### Expected Answer
- Write-invalidate → simpler but causes cache miss on next read.
- Write-update → avoids cache miss but increases write complexity.

---

## 8. What is a race condition in cache invalidation?

### Expected Answer
A situation where concurrent reads and writes result in stale data being written back to cache due to timing issues.

---

## 9. What is versioned cache key strategy?

### Expected Answer
Including a version number in the cache key so that updated data uses a new key, preventing stale overwrites.

Example:
```

user:123:v2

```

---

## 10. What is event-driven cache invalidation?

### Expected Answer
When database updates trigger events that notify all cache nodes to invalidate or update specific keys.

---

## 11. What is cache stampede?

### Expected Answer
When many requests simultaneously experience a cache miss and overload the database.

---

## 12. How do you prevent cache stampede?

### Expected Techniques
- Lock per key
- Request coalescing
- Randomized TTL
- Early refresh

---

## 13. Why is cache consistency harder in distributed systems?

### Expected Answer
Because multiple cache nodes may exist and network delays can cause partial or delayed invalidation.

---

## 14. Should financial balances rely on cache invalidation?

### Correct Answer
No.

### Explanation
Critical financial data requires strong consistency and should not depend on cache.

---

## 15. What is the safest general approach to cache invalidation?

### Expected Answer
Update database first, then invalidate cache, and use TTL as a backup mechanism.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why can stale data occur in cache?
2. Which invalidation strategy is most common?
3. Why is TTL not a full solution?
4. What causes cache stampede?
5. Why is DB the source of truth?

---

## ⭐ Keywords Interviewers Like to Hear

- Write-invalidate
- TTL
- Race condition
- Event-driven invalidation
- Cache stampede
- Stale reads
- Source of truth

---

## ✅ You’re Strong in 4.4 If You Can:
- Explain why invalidation is hard
- Compare invalidation strategies
- Identify race condition scenarios
- Discuss stampede prevention confidently