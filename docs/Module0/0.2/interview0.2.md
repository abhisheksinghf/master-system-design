# Module 0.2 – OS Basics  
## Interview Questions & Expected Answers

---

## 1️⃣ Why should a system designer care about OS concepts?

### Expected Answer
Because OS concepts like threads, blocking I/O, and context switching directly affect:
- Scalability
- Latency
- Throughput
- Resource utilization

### Interview One-Liner ⭐
> Even the best architecture can fail if OS-level concurrency is mishandled.

---

## 2️⃣ What is the difference between a process and a thread?

### Key Differences

| Aspect | Process | Thread |
|----|----|----|
| Memory | Separate | Shared |
| Weight | Heavy | Lightweight |
| Isolation | Strong | Weak |
| Context switch | Costly | Cheaper |

### Expected Mapping
- One backend service → one process
- Each request → handled by a thread

---

## 3️⃣ Why are threads considered “not free”?

### Expected Points
- Memory overhead
- Context switching cost
- Scheduling overhead

### Interview Line ⭐
> Creating too many threads can reduce performance instead of improving it.

---

## 4️⃣ What is context switching and why is it expensive?

### Expected Answer
Context switching happens when the CPU switches execution from one thread to another.  
It is expensive because the CPU must save and restore thread state and loses cache locality.

### Follow-up Trap
❓ *Is context switching bad?*  
✅ No, but **too much context switching is bad**.

---

## 5️⃣ Difference between concurrency and parallelism?

### Expected Answer
- **Concurrency**: Multiple tasks making progress (time slicing)
- **Parallelism**: Multiple tasks executing at the same time (multiple cores)

### Interview Example
> A single-core system can be concurrent but not parallel.

---

## 6️⃣ What is blocking I/O?

### Expected Answer
In blocking I/O, a thread waits until the I/O operation (DB call, network call) completes, making the thread unavailable during that time.

### Why Interviewers Care
- Blocking I/O limits scalability
- Threads get wasted waiting

---

## 7️⃣ What is non-blocking I/O and why is it better for scalable systems?

### Expected Answer
Non-blocking I/O allows a thread to initiate an I/O operation and continue processing other tasks, improving resource utilization and throughput.

### Interview One-Liner ⭐
> Non-blocking I/O enables handling more concurrent requests with fewer threads.

---

## 8️⃣ Are most backend systems CPU-bound or I/O-bound?

### Correct Answer
**I/O-bound**

### Why?
- Waiting on DB
- Waiting on APIs
- Waiting on disk/network

### Interview Tip ⭐
Say this confidently — interviewers love it.

---

## 9️⃣ What problems do locks introduce in systems?

### Expected Points
- Reduced concurrency
- Performance bottlenecks
- Risk of deadlocks

### Interview Line
> Excessive locking hurts scalability and should be avoided in distributed systems.

---

## 🔟 What is a deadlock?

### Expected Answer
A deadlock occurs when two or more threads are waiting indefinitely for resources held by each other.

### Conditions (Mention Any 2–3)
- Mutual exclusion
- Hold and wait
- Circular wait

---

## 1️⃣1️⃣ Why are thread pools used?

### Expected Answer
Thread pools:
- Limit maximum concurrency
- Reuse threads
- Prevent resource exhaustion

### Real-World Example
- Web server thread pool
- Database connection pool

---

## 1️⃣2️⃣ What happens if thread pool size is too small or too large?

### Too Small
- Requests queue up
- Increased latency

### Too Large
- Context switching
- Memory pressure

### Interview Line ⭐
> Thread pool sizing is a balance between throughput and resource limits.

---

## 1️⃣3️⃣ How does blocking I/O affect a thread pool?

### Expected Answer
Blocking I/O causes threads to stay occupied while waiting, reducing the number of concurrent requests the system can handle.

---

## 1️⃣4️⃣ How do OS concepts influence horizontal scaling?

### Expected Answer
- Stateless services reduce synchronization
- Fewer locks improve scalability
- Non-blocking I/O improves throughput per instance

---

## 🔁 Rapid-Fire Questions (Answer in One Line)

1. Why is statelessness preferred over shared state?
2. Why are deadlocks dangerous in production systems?
3. Can increasing threads always increase throughput?
4. Why do thread pools protect systems?
5. Why does blocking I/O reduce scalability?

---

## ⭐ Key Interview Keywords to Drop Naturally

- Context switching overhead
- I/O-bound workload
- Thread pool exhaustion
- Blocking vs non-blocking
- Resource contention

