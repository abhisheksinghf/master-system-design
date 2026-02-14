---
title: URL Shortener – Interview Questions
sidebar_label: Interview Questions
---

# URL Shortener – Interview Questions

---

## 1. What are core requirements of a URL shortener?

### Expected Answer
- Shorten long URLs
- Redirect quickly
- Ensure uniqueness
- Maintain high availability

---

## 2. Why is this system read-heavy?

### Expected Answer
Links are created once but may be redirected millions of times.

---

## 3. How do you generate short codes?

### Expected Answer
Use Base62-encoded unique IDs or random strings with collision checks.

---

## 4. Why cache URL mappings?

### Expected Answer
To reduce DB lookups and keep redirect latency very low.

---

## 5. What happens if cache misses?

### Expected Answer
Fallback to DB and repopulate cache.

---

## 6. How do you prevent collisions?

### Expected Answer
Use unique DB constraint and retry generation on conflict.

---

## 7. Why use 302/301 redirects?

### Expected Answer
To instruct clients to navigate to the original URL.

---

## 8. How do you handle expired links?

### Expected Answer
Store `expires_at`; return 404/410 if expired.

---

## 9. Where should click analytics be processed?

### Expected Answer
Asynchronously via queue/stream to avoid slowing redirect path.

---

## 10. How would you mitigate abuse?

### Expected Answer
Rate limits, domain blocklist, CAPTCHA for suspicious traffic.

---

## 11. What DB index is most critical?

### Expected Answer
Unique index on short `code`.

---

## 12. Why separate read and write paths?

### Expected Answer
Read traffic dominates and needs independent scaling.

---

## 13. How do you make it highly available?

### Expected Answer
Load balancers, replicated DB, cache cluster, health checks.

---

## 14. What are key trade-offs in random vs deterministic codes?

### Expected Answer
Random is simple but collision-prone; deterministic is stable but may leak sequence.

---

## 15. What would you monitor?

### Expected Answer
Redirect latency, error rate, cache hit ratio, DB QPS, abuse rate.
