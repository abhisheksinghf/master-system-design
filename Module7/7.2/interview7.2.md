---
title: Distributed Locks – Interview Questions
sidebar_label: Interview Questions
---

# Distributed Locks – Interview Questions

---

## 1️⃣ Why can’t we use a local mutex in distributed systems?

### Expected Answer
Because local mutexes only work within a single process or machine. In distributed systems, multiple machines do not share memory.

### Interview One-Liner ⭐
> Local locks don’t work across machines.

---

## 2️⃣ What is a distributed lock?

### Expected Answer
A distributed lock ensures that only one node in a distributed system can access a shared resource at a time.

---

## 3️⃣ What properties should a distributed lock provide?

### Expected Points
- Mutual exclusion
- Deadlock avoidance
- Fault tolerance
- Lock expiration (TTL)

---

## 4️⃣ Why is lock expiration important?

### Expected Answer
If a process crashes after acquiring a lock, the lock must eventually expire to prevent permanent deadlock.

---

## 5️⃣ What problem occurs if lock TTL expires too early?

### Expected Answer
Another process may acquire the lock while the first process is still working, leading to race conditions.

---

## 6️⃣ What is the risk of using a database row as a lock?

### Expected Answer
If a server crashes after acquiring the lock, the lock may remain forever unless properly handled.

---

## 7️⃣ What challenges arise in distributed locking?

### Expected Points
- Network partitions
- Process crashes
- Clock skew
- Split-brain scenarios
- Lock expiration issues

---

## 8️⃣ What is Redlock (conceptually)?

### Expected Answer
A distributed locking algorithm using multiple Redis instances where a lock is considered valid only if acquired in the majority of nodes.

---

## 9️⃣ Why are consensus systems like Zookeeper or etcd better for locking?

### Expected Answer
They provide strong consistency and reliable coordination using consensus algorithms.

---

## 🔟 When should you avoid distributed locks?

### Expected Answer
When idempotency or unique constraints can solve the problem more safely and scalably.

---

## 1️⃣1️⃣ Why do distributed locks reduce scalability?

### Expected Answer
Because they serialize access to resources, limiting parallelism.

---

## 1️⃣2️⃣ Give a real-world example where distributed locks are used.

### Expected Answer
- Preventing double payment processing
- Leader election
- Scheduled job execution

---

## 1️⃣3️⃣ What is a split-brain problem?

### Expected Answer
A scenario where multiple nodes believe they hold the lock due to network partition or coordination failure.

---

## 1️⃣4️⃣ Why is idempotency often preferred over locking?

### Expected Answer
Because idempotent operations allow safe retries without strict coordination, improving scalability and reliability.

---

## 1️⃣5️⃣ What happens if network partition occurs during lock acquisition?

### Expected Answer
Multiple nodes may believe they acquired the lock, leading to inconsistency.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why must distributed locks have TTL?
2. What problem does locking solve?
3. Why are network partitions dangerous for locks?
4. What is mutual exclusion?
5. Why should locks be used carefully?

---

## ⭐ Keywords Interviewers Like to Hear

- Mutual exclusion
- Lock expiration (TTL)
- Network partition
- Split-brain
- Redlock
- Consensus
- Idempotency
- Fault tolerance

---

## ✅ You’re Strong in 7.2 If You Can:
- Explain why local locks don’t work
- Discuss TTL and crash scenarios
- Identify partition-related risks
- Recommend idempotency over locking when possible

---
