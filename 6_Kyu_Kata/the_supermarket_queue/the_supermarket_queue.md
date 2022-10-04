# 6 kyu - The Supermarket Queue

##### **ID**: [57b06f90e298a7b53d000a86](https://www.codewars.com/kata/57b06f90e298a7b53d000a86) | **Slug**: [the-supermarket-queue](https://www.codewars.com/kata/57b06f90e298a7b53d000a86) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-08-14 ***by*** [mattlub](https://www.codewars.com/users/mattlub) | **Approved**: 2016-08-20 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: javascript, python, ruby, cpp, csharp, java, haskell, fsharp, c, cobol, julia, rust, d, go

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2021-11-27

---

## Kata Description


There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!



### input

```if-not:c

* customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.

* n: a positive integer, the number of checkout tills.

```

```if:c

* customers: a pointer to an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.

* customers_length: the length of the array that `customers` points to.

* n: a positive integer, the number of checkout tills.

```



### output

The function should return an integer, the total time required.



-------------------------------------------



## Important

**Please look at the examples and clarifications below, to ensure you understand the task correctly :)**



-------



### Examples



```javascript

queueTime([5,3,4], 1)

// should return 12

// because when there is 1 till, the total time is just the sum of the times



queueTime([10,2,3,3], 2)

// should return 10

// because here n=2 and the 2nd, 3rd, and 4th people in the 

// queue finish before the 1st person has finished.



queueTime([2,3,10], 2)

// should return 12

```

```haskell

queueTime [5,3,4] 1

-- should return 12

-- because when there is 1 till, the total time is just the sum of the times



queueTime [10,2,3,3] 2

-- should return 10

-- because here n=2 and the 2nd, 3rd, and 4th people in the 

-- queue finish before the 1st person has finished.



queueTime [2,3,10] 2

-- should return 12

```

```python

queue_time([5,3,4], 1)

# should return 12

# because when n=1, the total time is just the sum of the times



queue_time([10,2,3,3], 2)

# should return 10

# because here n=2 and the 2nd, 3rd, and 4th people in the 

# queue finish before the 1st person has finished.



queue_time([2,3,10], 2)

# should return 12

```

```ruby

queue_time([5,3,4], 1)

# should return 12

# because when n=1, the total time is just the sum of the times



queue_time([10,2,3,3], 2)

# should return 10

# because here n=2 and the 2nd, 3rd, and 4th people in the 

# queue finish before the 1st person has finished.



queue_time([2,3,10], 2)

# should return 12

```

```cpp

queueTime(std::vector<int>{5,3,4}, 1)

// should return 12

// because when n=1, the total time is just the sum of the times



queueTime(std::vector<int>{10,2,3,3}, 2)

// should return 10

// because here n=2 and the 2nd, 3rd, and 4th people in the 

// queue finish before the 1st person has finished.



queueTime(std::vector<int>{2,3,10}, 2)

// should return 12

```

```fsharp

queueTime [5;3;4] 1

// should return 12

// because when there is 1 till, the total time is just the sum of the times



queueTime [10;2;3;3] 2

// should return 10

// because here n=2 and the 2nd, 3rd, and 4th people in the 

// queue finish before the 1st person has finished.



queueTime [2;3;10] 2

// should return 12

```

```c

int customers1[] = {5, 3, 4};

int customers1_length = 3;

int n1 = 1;

queueTime(customers1, customers1_length, n1)

// should return 12

// because when n=1, the total time is just the sum of the times



int customers2[] = {10, 2, 3, 3};

int customers2_length = 4;

int n2 = 2;

queueTime(customers2, customers2_length, n2)

// should return 10

// because here n=2 and the 2nd, 3rd, and 4th people in the 

// queue finish before the 1st person has finished.



int customers3[] = {2, 3, 10};

int customers3_length = 3;

int n3 = 2;

queueTime(customers3, customers3_length, n3)

// should return 12

```

```cobol

      QueueTime [5,3,4] 1 => 12

      * because when there is 1 till, the total time is just the sum of the times



      QueueTime [10,2,3,3] 2 => 10

      *  because here n=2 and the 2nd, 3rd, and 4th people in the 

      * queue finish before the 1st person has finished.



      QueueTime [2,3,10] 2 => 12

```



### Clarifications



 * There is only ONE queue serving many tills, and

 * The order of the queue NEVER changes, and

 * The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.



N.B. You should assume that all the test input will be valid, as specified above.



P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool



---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57b06f90e298a7b53d000a86)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
