# 6 kyu - Who likes it?

##### **ID**: [5266876b8f4bf2da9b000362](https://www.codewars.com/kata/5266876b8f4bf2da9b000362) | **Slug**: [who-likes-it](https://www.codewars.com/kata/5266876b8f4bf2da9b000362) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2013-10-22 ***by*** [BattleRattle](https://www.codewars.com/users/BattleRattle) | **Approved**: *not available* ***by*** [*not available*](*https://www.codewars.com*)

##### **Languages Available**: javascript, haskell, ruby, python, csharp, cpp, java, php, c, julia, prolog, rust, fsharp, typescript, cobol, factor, scala

##### **My Completed Languages**: javascript, typescript ***as at*** 2022-10-15 | **Originally completed**: 2021-11-14

---

## Kata Description


You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.



Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:



```

[]                                -->  "no one likes this"

["Peter"]                         -->  "Peter likes this"

["Jacob", "Alex"]                 -->  "Jacob and Alex like this"

["Max", "John", "Mark"]           -->  "Max, John and Mark like this"

["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

```





```if:c

* return must be an allocated string

* do not mutate input

```



Note: For 4 or more names, the number in `"and 2 others"` simply increases.



---


🏷 `STRINGS | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.*

###### *The solutions in each language code file associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are most often verbatim of those provided by the Kata.  However, in some cases it has been necessary to modify the test cases in order to have them function with my test runners and in my local environment.  On occasion, I may have added additional test cases to those provided.  Also, though I can't recall an instance, there may potentially have been reason to remove test cases for functional reasons.  Some Kata's also require (*or have*) code preloaded for their operation.  This code is included if it was required to make the tests work.  It is clearly identified under a **PRELOAD CODE** header if included.*

###### Most of my solutions are not commented (*though this will hopefully change*) as solutions are rarely submitted with comments on [Codewars.com](https://www.codewars.com).*
