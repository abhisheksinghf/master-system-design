---
title: Database Replication – Interview Questions
sidebar_label: Interview Questions
---

# Database Replication – Interview Questions

---

## 1. What is database replication?

### Expected Answer
Database replication is the process of maintaining multiple copies of the same data across different database nodes to improve availability, fault tolerance, and read scalability.

### Interview One-Liner ⭐
> Replication copies data; it does not split data.

---

## 2. Why is database replication needed?

### Expected Points
- Avoid Single Point of Failure (SPOF)
- Improve read scalability
- Enable failover and disaster recovery

---

## 3. What is primary–replica (master–slave) replication?

### Expected Answer
In primary–replica replication, all writes go to the primary database, and replicas asynchronously or synchronously copy data from the primary and usually serve read requests.

---

## 4. Does replication improve write scalability?

### Correct Answer
No.

### Explanation
Writes still go to a single primary, which remains the write bottleneck.

### Interview Line ⭐
> Replication scales reads, not writes.

---

## 5. What is replication lag?

### Expected Answer
Replication lag is the delay between when data is written to the primary and when it becomes visible on replicas.

### Why It Matters
- Causes stale reads
- Leads to eventual consistency

---

## 6. How do you handle stale reads caused by replication lag?

### Expected Strategies
- Read from primary for critical data
- Use read-after-write consistency
- Accept eventual consistency where possible

---

## 7. Difference between synchronous and asynchronous replication?

### Asynchronous Replication
- Primary does not wait for replicas
- Faster writes
- Possible data lag

### Synchronous Replication
- Primary waits for replica confirmation
- Stronger consistency
- Higher latency

---

## 8. Which replication type is more commonly used and why?

### Correct Answer
Asynchronous replication.

### Reason
It provides better performance and availability with acceptable eventual consistency.

---

## 9. What is failover in database replication?

### Expected Answer
Failover is the process of promoting a replica to primary when the primary database fails.

---

## 10. What are challenges during failover?

### Expected Points
- Data loss due to replication lag
- Split-brain scenarios
- Downtime during promotion

---

## 11. What is split-brain in replication?

### Expected Answer
Split-brain occurs when multiple database nodes believe they are the primary and accept writes, leading to data inconsistency.

---

## 12. What is multi-primary (multi-master) replication?

### Expected Answer
A replication model where multiple nodes accept writes and synchronize changes with each other.

### Drawback
- Write conflicts
- Complex conflict resolution

---

## 13. Why is multi-primary replication rarely used for transactions?

### Expected Answer
Because resolving write conflicts while maintaining strong consistency is complex and error-prone.

---

## 14. Replication vs sharding?

### Expected Answer
- **Replication** → copies the same data to multiple nodes
- **Sharding** → splits data across nodes

### Interview Gold Line ⭐
> Replication improves availability; sharding improves scalability.

---

## 15. How does replication relate to CAP theorem?

### Expected Answer
Replication improves availability, but during network partitions the system must choose between consistency and availability, often resulting in eventual consistency.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why doesn’t replication scale writes?
2. Why does replication introduce eventual consistency?
3. Which node should handle critical reads?
4. What happens if primary crashes with lagging replicas?
5. Why is replication easier than sharding?

---

## ⭐ Keywords Interviewers Like to Hear

- Primary–replica
- Replication lag
- Failover
- Eventual consistency
- SPOF
- Read scalability

---

## ✅ You’re Strong in 3.4 If You Can:
- Explain replication clearly
- Discuss replication lag confidently
- Differentiate replication vs sharding
- Talk about failover risks and trade-offs

---
