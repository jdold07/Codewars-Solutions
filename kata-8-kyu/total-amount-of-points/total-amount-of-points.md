# 8 kyu - Total amount of points

##### **ID**: [5bb904724c47249b10000131](https://www.codewars.com/kata/5bb904724c47249b10000131) | **Slug**: [total-amount-of-points](https://www.codewars.com/kata/5bb904724c47249b10000131) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2018-10-06 ***by*** [petrosernivka](https://www.codewars.com/users/petrosernivka) | **Approved**: 2018-10-10 ***by*** [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

##### **Languages Available**: python, javascript, c, nasm, haskell, ruby, java, csharp, go, reason, php, scala, cpp, elixir, julia, racket, factor, kotlin, cobol, rust, clojure, typescript

##### **My Completed Languages**: javascript, typescript ***as at*** 2022-10-16 | **Originally completed**: 2021-12-03

---

## Kata Description


Our football team has finished the championship.



Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format `"x:y"`, where `x` is our team's score and `y` is our opponents score.



For example:

```["3:1", "2:2", "0:1", ...]```



Points are awarded for each match as follows:

- if x > y: 3 points (win)

- if x < y: 0 points (loss)

- if x = y: 1 point  (tie)



We need to write a function that takes this collection and returns the number of points our team (`x`) got in the championship by the rules given above.



Notes:

- our team always plays 10 matches in the championship

- 0 <= x <= 4

- 0 <= y <= 4

---


🏷 `FUNDAMENTALS | MATHEMATICS | ARRAYS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5bb904724c47249b10000131)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
