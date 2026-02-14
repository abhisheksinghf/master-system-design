---
title: SQL vs NoSQL – Interview Questions
sidebar_label: Interview Questions
---

# SQL vs NoSQL – Interview Questions

---

## 1️⃣ What is the difference between SQL and NoSQL databases?

### Expected Answer
- **SQL** databases use a fixed schema, support ACID transactions, and are strong in data consistency.
- **NoSQL** databases use flexible schemas, are designed for horizontal scaling, and often follow eventual consistency.

### Interview One-Liner ⭐
> SQL focuses on correctness; NoSQL focuses on scalability.

---

## 2️⃣ When would you choose an SQL database?

### Expected Use Cases
- Banking systems
- Payment systems
- Order management
- Systems with complex relationships

### Reason
Strong consistency and transactional guarantees are required.

---

## 3️⃣ When would you choose a NoSQL database?

### Expected Use Cases
- Social media feeds
- Logs and analytics
- Caching layers
- High-scale systems

### Reason
High throughput and flexible schema are more important than strict consistency.

---

## 4️⃣ What does ACID stand for?

### Expected Answer
- **Atomicity** – All or nothing
- **Consistency** – Valid state transitions
- **Isolation** – Concurrent transactions don’t interfere
- **Durability** – Data persists after commit

---

## 5️⃣ What does BASE stand for?

### Expected Answer
- **Basically Available**
- **Soft State**
- **Eventual Consistency**

### Interview Line ⭐
> BASE trades strict consistency for availability and scalability.

---

## 6️⃣ Can NoSQL databases support transactions?

### Correct Answer
Yes, but usually in a limited or scoped manner (e.g., single-document or partition-level transactions).

---

## 7️⃣ Is NoSQL always faster than SQL?

### Correct Answer
No.

### Explanation
Performance depends on access patterns, indexing, schema design, and workload type.

### Interview Line ⭐
> Database speed depends more on design than on SQL vs NoSQL.

---

## 8️⃣ Can SQL databases scale horizontally?

### Correct Answer
Yes, but it is harder and more complex than scaling NoSQL databases.

### Examples
- Read replicas
- Sharding

---

## 9️⃣ What is polyglot persistence?

### Expected Answer
Using multiple database technologies in the same system, each optimized for different use cases.

### Interview Gold Line ⭐
> Polyglot persistence is common in real-world systems.

---

## 🔟 Why are databases often the first bottleneck?

### Expected Points
- Centralized state
- Disk I/O limits
- Lock contention
- Coordination overhead

---

## 1️⃣1️⃣ What type of NoSQL database would you use for caching?

### Correct Answer
Key-value store (e.g., Redis).

---

## 1️⃣2️⃣ Which database is better for complex joins?

### Correct Answer
SQL databases.

---

## 1️⃣3️⃣ Which database is better for schema flexibility?

### Correct Answer
NoSQL databases.

---

## 1️⃣4️⃣ What are common misconceptions about SQL vs NoSQL?

### Expected Clarifications
- SQL cannot scale ❌
- NoSQL has no consistency ❌
- One database fits all ❌

---

## 1️⃣5️⃣ Give an example of using SQL and NoSQL together.

### Expected Answer
- SQL for transactions and core data
- NoSQL for caching, feeds, or analytics

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why is strong consistency important for payments?
2. Why is eventual consistency acceptable for feeds?
3. Which DB is easier to shard?
4. Can NoSQL databases be strongly consistent?
5. Why is database choice critical in system design?

---

## ⭐ Keywords Interviewers Like to Hear

- ACID
- BASE
- Strong consistency
- Eventual consistency
- Polyglot persistence
- Horizontal scaling

---

## ✅ You’re Strong in 3.1 If You Can:
- Clearly justify SQL vs NoSQL
- Explain ACID vs BASE
- Choose databases based on use cases
- Avoid “one DB fits all” thinking

---
