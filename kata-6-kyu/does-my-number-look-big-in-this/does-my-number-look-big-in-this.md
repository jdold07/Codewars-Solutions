# 6 kyu - Does my number look big in this?

##### **ID**: [5287e858c6b5a9678200083c](https://www.codewars.com/kata/5287e858c6b5a9678200083c) | **Slug**: [does-my-number-look-big-in-this](https://www.codewars.com/kata/5287e858c6b5a9678200083c) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2013-11-16 ***by*** [JulianNicholls](https://www.codewars.com/users/JulianNicholls) | **Approved**: 2013-11-19 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, javascript, coffeescript, haskell, python, csharp, php, cpp, nasm, nim, scala, c, typescript, cobol, factor, lua

##### **My Completed Languages**: javascript, typescript ***as at*** 2022-10-25 | **Originally completed**: 2021-11-19

---

## Kata Description


A [Narcissistic Number](https://en.wikipedia.org/wiki/Narcissistic_number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).



For example, take 153 (3 digits), which is narcisstic:

```

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

```

and 1652 (4 digits), which isn't:

```

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

```



The Challenge:



Your code must return **true** or **false** (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. 

This may be **True** and **False** in your language, e.g. PHP. 



Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function. 



---


🏷 `ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5287e858c6b5a9678200083c)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
