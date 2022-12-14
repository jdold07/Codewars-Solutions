# 6 kyu - Sum of Digits / Digital Root

##### **ID**: [541c8630095125aba6000c00](https://www.codewars.com/kata/541c8630095125aba6000c00) | **Slug**: [sum-of-digits-slash-digital-root](https://www.codewars.com/kata/541c8630095125aba6000c00) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-09-19 ***by*** [user578387](https://www.codewars.com/users/user578387) | **Approved**: 2014-09-22 ***by*** [xcthulhu](https://www.codewars.com/users/xcthulhu)

##### **Languages Available**: ruby, javascript, coffeescript, python, clojure, haskell, java, csharp, swift, r, c, cpp, scala, nasm, go, ocaml, typescript, julia, prolog, nim, elixir, crystal, factor, elm, rust, pascal, fsharp, cobol, d

##### **My Completed Languages**: javascript, typescript ***as at*** 2022-10-15 | **Originally completed**: 2021-11-14

---

## Kata Description


[Digital root](https://en.wikipedia.org/wiki/Digital_root) is the _recursive sum of all the digits in a number._



Given `n`, take the sum of the digits of `n`. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.



## Examples

```

    16  -->  1 + 6 = 7

   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

```



---


🏷 `MATHEMATICS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/541c8630095125aba6000c00)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
