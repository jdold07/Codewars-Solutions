# 7 kyu - Sort Numbers

##### **ID**: [5174a4c0f2769dd8b1000003](https://www.codewars.com/kata/5174a4c0f2769dd8b1000003) | **Slug**: [sort-numbers](https://www.codewars.com/kata/5174a4c0f2769dd8b1000003) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2013-04-22 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, coffeescript, ruby, python, csharp, rust, haskell, typescript, r, cpp, clojure, julia, php, go, cobol, c, lambdacalc

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-04-23

---

## Kata Description


Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.



For example:



```r

solution(c(1, 2, 3, 10, 5)) # should return c(1, 2, 3, 5, 10)

solution(NULL)              # should return NULL

```

```php

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]

solution(null); // should return []

```

```javascript

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]

solution(null); // should return []

```

```typescript

solution([1, 2, 10, 50, 5]); // should return [1, 2, 5, 10, 50]

solution([]); // should return []

```

```coffeescript

solution([1, 2, 10, 50, 5]) # should return [1,2,5,10,50]

solution(null) # should return []

```

```ruby

solution([1, 2, 10, 50, 5]) # should return [1,2,5,10,50]

solution(nil) # should return []

```

```python

solution([1,2,3,10,5]) # should return [1,2,3,5,10]

solution(None) # should return []

```

```julia

solution([1, 2, 10, 50, 5]) # should return [1,2,5,10,50]

solution(nothing) # should return []

```

```csharp

SortNumbers(new int[] { 1, 2, 10, 50, 5 }); // should return new int[] { 1, 2, 5, 10, 50 }

SortNumbers(null); // should return new int[] { }

```

```rust

sort_numbers(&vec![1, 2, 3, 10, 5]); // should return vec![1, 2, 3, 5, 10]

sort_numbers(&vec![]); // should return !vec[]

```

```haskell

sortNumbers [1, 2, 10, 50, 5] = Just [1, 2, 5, 10, 50]

sortNumbers [] = Nothing

```

```lambdacalc

# (Note in Lambda Calculus we have lists instead of arrays.)

nums = cons 1 (cons 2 (cons 10 (cons 50 (cons 5 nil))))

sort nums # cons 1 (cons 2 (cons 5 (cons 10 (cons 50 nil))))

```

```cpp

sortNumbers({1, 2, 10, 50, 5}) // sholud return {1, 2, 5, 10, 50}

sortNumbers({}) // should return {}

```

```c

int array[5] = {1, 2, 10, 50, 5};

sort_ascending(5, array); // array is now {1, 2, 5, 10, 50}

sort_ascending(0, NULL); // nothing to do for empty array

```

```cobol

      SortNumbers([1, 2, 10, 50, 5])

      *  -> res = [1, 2, 5, 10, 50]

      SortNumbers([])

      *  -> res = []

```



~~~if:lambdacalc

## Lambda Calculus



- Purity: LetRec

- Num encoding: BinaryScott

- For LC, there won't be `null` inputs.

- Instead of arrays, we have cons lists. Define the following, which the tests will use to construct inputs and test outputs:

  - `nil : List a` (empty list)

  - `cons : a -> List a -> List a` (add to head)

  - `foldr : (a -> b -> b) -> b -> List a -> b` (right-associative fold / reduce)



### Optional Performance Check



By default the tests are lenient with respect to performance. If you would like to demonstrate that your solution is fast, you can opt in to a stricter test suite ( more lists, longer lists, higher numbers ). Just change `perf-tests = Low` to `perf-tests = High`.

~~~

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5174a4c0f2769dd8b1000003)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
