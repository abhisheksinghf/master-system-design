---
title: Leader Election & Consensus – Interview Questions
sidebar_label: Interview Questions
---

# Leader Election & Consensus – Interview Questions

---

## 1. Why do distributed systems need leader election?

### Expected Answer
Leader election is needed to coordinate operations that require a single authority, such as log replication, scheduling tasks, or primary database writes.

### Interview One-Liner ⭐
> Leader election ensures only one node coordinates critical operations.

---

## 2. What is consensus in distributed systems?

### Expected Answer
Consensus is the process by which multiple distributed nodes agree on a single value or decision despite failures.

---

## 3. Why is consensus difficult?

### Expected Points
- Network partitions
- Node crashes
- Message delays
- No global clock
- Asynchronous communication

---

## 4. What problem does majority voting solve?

### Expected Answer
Majority voting prevents split-brain and ensures only one valid decision is accepted across the cluster.

---

## 5. What happens if the leader fails?

### Expected Answer
The system detects failure and elects a new leader through a consensus process.

---

## 6. What is split-brain?

### Expected Answer
Split-brain occurs when a network partition causes multiple nodes to believe they are leaders, leading to conflicting decisions.

---

## 7. How does requiring majority prevent split-brain?

### Expected Answer
Only the partition containing the majority of nodes can elect a leader, preventing multiple valid leaders.

---

## 8. What is Paxos (high level)?

### Expected Answer
Paxos is a consensus algorithm that ensures distributed nodes agree on a value using majority voting, even in the presence of failures.

---

## 9. Why is Paxos considered complex?

### Expected Answer
Because its protocol is mathematically rigorous and difficult to understand and implement correctly.

---

## 10. What is Raft?

### Expected Answer
Raft is a consensus algorithm designed to be easier to understand than Paxos while providing the same safety guarantees.

---

## 11. What are the states in Raft?

### Expected Answer
- Leader
- Follower
- Candidate

---

## 12. How does Raft elect a leader?

### Expected Answer
If a follower does not receive a heartbeat, it becomes a candidate, requests votes from other nodes, and becomes leader if it receives majority votes.

---

## 13. Why is majority important in a 5-node cluster?

### Expected Answer
At least 3 nodes are required for a valid majority, ensuring only one leader exists.

---

## 14. Where is leader election commonly used?

### Expected Answer
- Distributed databases
- Kubernetes control plane
- Zookeeper / etcd
- Task schedulers

---

## 15. What is the difference between replication and consensus?

### Expected Answer
- Replication copies data.
- Consensus ensures agreement on what data should be replicated and in what order.

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. What prevents split-brain?
2. What does consensus guarantee?
3. Which is easier to explain: Raft or Paxos?
4. What triggers a Raft election?
5. Why is majority required?

---

## ⭐ Keywords Interviewers Like to Hear

- Leader election
- Consensus
- Majority vote
- Split-brain
- Paxos
- Raft
- Log replication
- Heartbeat

---

## ✅ You’re Strong in 7.3 If You Can:
- Explain why leader election is needed
- Describe consensus at a high level
- Explain majority concept clearly
- Differentiate Raft and Paxos conceptually

---
