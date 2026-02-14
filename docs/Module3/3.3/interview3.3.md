---
title: Indexing – Interview Questions
sidebar_label: Interview Questions
---

# Indexing – Interview Questions

---

## 1️⃣ What is an index in a database?

### Expected Answer
An index is a data structure that improves query performance by allowing the database to locate rows faster without scanning the entire table.

### Interview One-Liner ⭐
> An index trades storage and write speed for faster reads.

---

## 2️⃣ Why are indexes important in system design?

### Expected Points
- Reduce query latency
- Improve scalability
- Prevent database bottlenecks

### Interview Line ⭐
> Indexing is the first optimization before scaling databases.

---

## 3️⃣ How does an index improve query performance?

### Expected Answer
Indexes reduce the search space from scanning all rows (`O(n)`) to logarithmic or constant time lookups (`O(log n)` or `O(1)`).

---

## 4️⃣ What are common index data structures?

### Expected Answer
- **B-Tree** (most common)
- **Hash index**

### Key Difference
- B-Tree → supports range queries  
- Hash → fast equality lookups only

---

## 5️⃣ Why are B-Tree indexes widely used?

### Expected Answer
Because they are balanced, maintain sorted order, and efficiently support range queries and sorting.

---

## 6️⃣ What is the downside of having too many indexes?

### Expected Points
- Slower writes (INSERT/UPDATE/DELETE)
- Higher memory and storage usage

### Interview Line ⭐
> Indexes speed up reads but slow down writes.

---

## 7️⃣ Which columns should be indexed?

### Expected Answer
- Primary keys
- Foreign keys
- Columns used in WHERE, JOIN, ORDER BY

---

## 8️⃣ Which columns should generally NOT be indexed?

### Expected Answer
- Low-cardinality columns (e.g., gender)
- Frequently updated columns

---

## 9️⃣ What is a composite index?

### Expected Answer
An index created on multiple columns.

Example:
```

INDEX(user_id, created_at)

```

---

## 🔟 Why does the order of columns matter in a composite index?

### Expected Answer
Because the index is sorted by the column order, and queries must use the leading column(s) to benefit from the index.

### Interview Gold Line ⭐
> Composite indexes follow the leftmost-prefix rule.

---

## 1️⃣1️⃣ What is a covering index?

### Expected Answer
A covering index contains all columns needed by a query, allowing the database to answer the query using only the index.

### Benefit
- No table lookup required
- Extremely fast reads

---

## 1️⃣2️⃣ How do indexes affect write performance?

### Expected Answer
Every write operation must update all relevant indexes, increasing write latency.

---

## 1️⃣3️⃣ Do NoSQL databases support indexing?

### Expected Answer
Yes, but differently:
- Key-value stores index keys
- Document databases index fields
- Column-family databases use storage-based access patterns

---

## 1️⃣4️⃣ When is indexing NOT enough?

### Expected Answer
When data size or traffic grows beyond a single machine’s limits.

### Next Steps
- Caching
- Read replicas
- Sharding

---

## 1️⃣5️⃣ What are common indexing mistakes?

### Expected Points
- Indexing everything blindly
- Ignoring write-heavy workloads
- Wrong column order in composite indexes
- Not monitoring index usage

---

## 🔁 Rapid-Fire Questions (1 Line Each)

1. Why does indexing increase storage usage?
2. Why are low-cardinality columns bad index candidates?
3. Which index supports range queries?
4. Why are writes slower with more indexes?
5. What is the leftmost-prefix rule?

---

## ⭐ Keywords Interviewers Like to Hear

- B-Tree index
- Hash index
- Composite index
- Covering index
- Read vs write trade-off
- Leftmost-prefix rule

---

## ✅ You’re Strong in 3.3 If You Can:
- Explain how indexes work
- Choose correct columns to index
- Discuss read/write trade-offs
- Explain composite and covering indexes clearly

---