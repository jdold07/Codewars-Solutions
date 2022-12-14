# 8 kyu - Sum of differences in array

##### **ID**: [5b73fe9fb3d9776fbf00009e](https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e) | **Slug**: [sum-of-differences-in-array](https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">8 kyu</span>

##### **First Published**: 2018-08-15 ***by*** [kamilalew](https://www.codewars.com/users/kamilalew) | **Approved**: 2018-08-15 ***by*** [trincot](https://www.codewars.com/users/trincot)

##### **Languages Available**: javascript, cpp, haskell, java, c, nasm, ruby, csharp, lambdacalc, python, lua, julia, rust, typescript

##### **My Completed Languages**: javascript, typescript ***as at*** 2022-10-17 | **Originally completed**: 2022-09-10

---

## Kata Description


Your task is to sum the differences between consecutive pairs in the array in descending order.



## Example



```

[2, 1, 10]  -->  9

```



In descending order: `[10, 2, 1]`



Sum: `(10 - 2) + (2 - 1) = 8 + 1 = 9`



If the array is empty or the array has only one element the result should be `0` (`Nothing` in Haskell, `None` in Rust).



~~~if:lambdacalc

#### Encodings



purity: `LetRec`  

numEncoding: `BinaryScott`  

export constructors `nil, cons` for your `List` encoding  

~~~



---


🏷 `ARRAYS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
