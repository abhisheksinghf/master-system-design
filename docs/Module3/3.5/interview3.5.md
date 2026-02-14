---
title: Database Sharding – Interview Questions
sidebar_label: Interview Questions
---

# Database Sharding – Interview Questions

---

## 1️⃣ What is database sharding?

### Expected Answer
Database sharding is the process of splitting data across multiple database nodes, where each shard stores only a subset of the data.

### Interview One-Liner ⭐
> Sharding splits data; replication copies data.

---

## 2️⃣ Why do we need sharding?

### Expected Answer
Sharding is needed to:
- Scale write throughput
- Handle very large datasets
- Avoid a single database becoming a bottleneck

### Interview Line ⭐
> Replication scales reads; sharding scales writes and data.

---

## 3️⃣ What is the difference between sharding and replication?

### Expected Answer

| Aspect | Replication | Sharding |
|---|---|---|
| Data | Same data copied | Data split |
| Purpose | Availability, reads | Scalability (writes) |
| Write scaling | ❌ No | ✅ Yes |

---

## 4️⃣ What is a shard key?

### Expected Answer
A shard key is the attribute used to determine which shard a record is stored on.

### Examples
- `user_id`
- `order_id`

### Interview Gold Line ⭐
> Choosing the right shard key is the most important sharding decision.

---

## 5️⃣ What makes a good shard key?

### Expected Points
- High cardinality
- Even data distribution
- Frequently used in queries
- Avoids hotspots

---

## 6️⃣ What are common sharding strategies?

### Expected Answer
- Range-based sharding
- Hash-based sharding
- Directory-based sharding

---

## 7️⃣ What is range-based sharding?

### Expected Answer
Data is partitioned based on ranges of the shard key (e.g., user_id 1–1000, 1001–2000).

### Drawback
- Hot shards
- Uneven load

---

## 8️⃣ What is hash-based sharding?

### Expected Answer
A hash function is applied to the shard key to determine the shard.

### Benefit
- Even data distribution

### Drawback
- Poor support for range queries

---

## 9️⃣ What is consistent hashing and why is it used?

### Expected Answer
Consistent hashing minimizes data movement when shards are added or removed by distributing keys on a hash ring.

### Interview Line ⭐
> Consistent hashing simplifies resharding.

---

## 🔟 What are hot shards?

### Expected Answer
Hot shards are shards that receive disproportionately high traffic due to poor shard key choice.

### Example
- Sharding by timestamp

---

## 1️⃣1️⃣ What are cross-shard queries?

### Expected Answer
Queries that need data from multiple shards.

### Why They’re Bad
- Slow
- Expensive
- Hard to scale

---

## 1️⃣2️⃣ How do you handle joins in a sharded database?

### Expected Answer
- Avoid cross-shard joins
- Denormalize data
- Perform joins at application level if needed

---

## 1️⃣3️⃣ What is resharding?

### Expected Answer
Resharding is the process of redistributing data when the number of shards changes or shards become imbalanced.

### Challenges
- Data migration
- Downtime risk
- Consistency issues

---

## 1️⃣4️⃣ Why is resharding difficult?

### Expected Points
- Large data movement
- Ongoing reads/writes
- Risk of inconsistency

### Interview Line ⭐
> Resharding is one of the hardest problems in distributed databases.

---

## 1️⃣5️⃣ Can you do transactions across shards?

### Correct Answer
Yes, but they are complex and expensive.

### Explanation
They require distributed transactions or application-level coordination and are often avoided.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why does sharding improve write scalability?
2. Why is sharding more complex than replication?
3. Why is timestamp a bad shard key?
4. What happens if a shard goes down?
5. Which sharding strategy is most common at scale?

---

## ⭐ Keywords Interviewers Like to Hear

- Shard key
- Hot shard
- Consistent hashing
- Cross-shard query
- Resharding
- Horizontal scaling

---

## ✅ You’re Strong in 3.5 If You Can:
- Clearly differentiate sharding and replication
- Explain shard key trade-offs
- Discuss resharding challenges
- Avoid cross-shard query pitfalls

---
