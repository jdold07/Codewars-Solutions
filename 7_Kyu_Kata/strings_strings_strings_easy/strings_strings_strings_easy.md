# 7 kyu - Strings, strings, strings (Easy)

##### **ID**: [56d6b921c9ae3fd926000601](https://www.codewars.com/kata/56d6b921c9ae3fd926000601) | **Slug**: [strings-strings-strings-easy](https://www.codewars.com/kata/56d6b921c9ae3fd926000601) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2016-03-02 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung) | **Approved**: 2016-05-18 ***by*** [joh_pot](https://www.codewars.com/users/joh_pot)

##### **Languages Available**: javascript, coffeescript

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-17

---

## Kata Description


*Note to Kata translators: Please carefully consider the suitability of your chosen language with regards to implementing the idea proposed by this Kata before authoring and submitting a translation.  "Inappropriate" language translations (such as* **Python** *which has already been proven to be a poor candidate for this Kata) will be rejected by the author of this Kata even if it is well-written (i.e. contains suitable Kata Description edits, plenty of fixed and random tests, etc.).*



# Strings, strings, strings (Easy)



## Background



Oh no, there were some problems with your computer and now you cannot convert any data type to `string`s!



## Task



The `toString()` method has been disabled for `boolean`s, `number`s, `array`s and `object`s.  Your goal is to retrive `toString()` for the following data types.



### I. Booleans



For booleans:



1. `true` should be converted to `"true"`

2. `false` should be converted to `"false"`



### II. Numbers



For numbers, conversion should be as follows:



```javascript

// e.g.

(3).toString() === "3"

(3.14).toString() === "3.14"

(-78).toString() === "-78"

Math.PI.toString() === "3.141592653589793"

```

```coffeescript

# e.g.

(3).toString() === "3"

(3.14).toString() === "3.14"

(-78).toString() === "-78"

Math.PI.toString() === "3.141592653589793"

```



### III. Arrays



For the purposes of this Kata, you will only be expected to convert arrays with **numbers only** into strings.  However, on top of fixing it, we would also like to **improve** it as well.  We would like to **keep** the square brackets (`[]`) around the "stringified" array as it would be seen in Javascript code.  For example:



```javascript

// e.g.

[].toString() === "[]"

[1].toString() === "[1]"

[2,4,8,17].toString() === "[2, 4, 8, 17]"

[Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"

```

```coffeescript

# e.g.

[].toString() === "[]"

[1].toString() === "[1]"

[2,4,8,17].toString() === "[2, 4, 8, 17]"

[Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"

```



As you may have noticed in the examples above, when the array has more than one element, some of the strings have spaces as well as commas separating each item but some strings do not.  For the purposes of this Kata **whether there are whitespaces or not does not matter for stringified arrays** - before conducting the tests your input is stripped of all whitespace.



## Final Note - IMPORTANT



Your recovered `toString()` methods should only `return` the stringified version of the input - it should **NOT** alter the original value.  Test cases have been created to confirm this.



## Kata in this Series



1. Strings, strings, strings (Easy) - this Kata

2. [Strings, strings, strings (Hard)](http://www.codewars.com/kata/56d9439813f38853b40000e4)

---


🏷 `FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/56d6b921c9ae3fd926000601)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
