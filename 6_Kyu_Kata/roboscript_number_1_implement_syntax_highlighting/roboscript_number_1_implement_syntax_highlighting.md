# 6 kyu - RoboScript #1 - Implement Syntax Highlighting

##### **ID**: [58708934a44cfccca60000c4](https://www.codewars.com/kata/58708934a44cfccca60000c4) | **Slug**: [roboscript-number-1-implement-syntax-highlighting](https://www.codewars.com/kata/58708934a44cfccca60000c4) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2017-01-07 ***by*** [donaldsebleung](https://www.codewars.com/users/donaldsebleung) | **Approved**: 2017-01-15 ***by*** [damjan](https://www.codewars.com/users/damjan)

##### **Languages Available**: javascript, php, csharp, python, coffeescript, rust, java, elixir, ruby, kotlin

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-17

---

## Kata Description


# RoboScript #1 - Implement Syntax Highlighting



## Disclaimer



The story presented in this Kata Series is purely fictional; any resemblance to actual programming languages, products, organisations or people should be treated as purely coincidental.



## About this Kata Series



This Kata Series is based on a fictional story about a computer scientist and engineer who owns a firm that sells a toy robot called MyRobot which can interpret its own (esoteric) programming language called RoboScript.  Naturally, this Kata Series deals with the software side of things (I'm afraid Codewars cannot test your ability to build a physical robot!).



## Story



You are a computer scientist and engineer who has recently founded a firm which sells a toy product called MyRobot which can move by receiving a set of instructions by reading a file containing a script.  Initially you have planned the robot to be able to interpret JavaScript files for its movement instructions but you later decided that it would make MyRobot too hard to operate for most customers out there who aren't even computer programmers in the first place.  For this reason, you have decided to invent a new (esoteric) scripting language called RoboScript which has a much simpler syntax so non-computer programmers can easily learn how to write scripts in this language which would enable them to properly operate MyRobot.  However, you are currently at the initial stage of inventing this new Esolang.  The first step to popularize this (esoteric) scripting language is naturally to invent a new editor for it which provides syntax highlighting for this language so your customers feel like they are writing a proper program when they are writing scripts for MyRobot.



## Task



Your MyRobot-specific (esoteric) scripting language called RoboScript only ever contains the following characters: `F`, `L`, `R`, the digits `0-9` and brackets (`(` and `)`).  Your goal is to write a function `highlight` which accepts 1 required argument `code` which is the RoboScript program passed in as a string and returns the script with syntax highlighting.  The following commands/characters should have the following colors:



- `F` - Wrap this command around `<span style="color: pink">` and `</span>` tags so that it is highlighted pink in our editor

- `L` - Wrap this command around `<span style="color: red">` and `</span>` tags so that it is highlighted red in our editor

- `R` - Wrap this command around `<span style="color: green">` and `</span>` tags so that it is highlighted green in our editor

- Digits from `0` through `9` - Wrap these around `<span style="color: orange">` and `</span>` tags so that they are highlighted orange in our editor

- Round Brackets - Do not apply any syntax highlighting to these characters



For example:



```javascript

highlight("F3RF5LF7"); // => "<span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>"

```

```coffeescript

highlight("F3RF5LF7"); # => "<span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>"

```

```php

highlight("F3RF5LF7"); // => "<span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>"

```

```ruby

highlight("F3RF5LF7") # => "<span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>"

```

```java

RoboScript.highlight("F3RF5LF7"); // => "<span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>"

```

```elixir

assert highlight("F3RF5LF7") == "<span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>"

```



And for multiple characters with the same color, simply wrap them with a **single** `<span>` tag of the correct color:



```javascript

highlight("FFFR345F2LL"); // => "<span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span style=\"color: orange\">345</span><span style=\"color: pink\">F</span><span style=\"color: orange\">2</span><span style=\"color: red\">LL</span>"

```

```coffeescript

highlight("FFFR345F2LL"); # => "<span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span style=\"color: orange\">345</span><span style=\"color: pink\">F</span><span style=\"color: orange\">2</span><span style=\"color: red\">LL</span>"

```

```php

highlight("FFFR345F2LL"); // => "<span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span style=\"color: orange\">345</span><span style=\"color: pink\">F</span><span style=\"color: orange\">2</span><span style=\"color: red\">LL</span>"

```

```ruby

highlight("FFFR345F2LL") # => "<span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span style=\"color: orange\">345</span><span style=\"color: pink\">F</span><span style=\"color: orange\">2</span><span style=\"color: red\">LL</span>"

```

```java

RoboScript.highlight("FFFR345F2LL"); // => "<span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span style=\"color: orange\">345</span><span style=\"color: pink\">F</span><span style=\"color: orange\">2</span><span style=\"color: red\">LL</span>"

```

```elixir

assert highlight("FFFR345F2LL") == "<span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span style=\"color: orange\">345</span><span style=\"color: pink\">F</span><span style=\"color: orange\">2</span><span style=\"color: red\">LL</span>"

```



Note that the use of `<span>` tags must be **exactly** the same format as demonstrated above.  Even if your solution produces the same visual result as the expected answers, if you miss a space betwen `"color:"` and `"green"`, for example, you will fail the tests.



## Kata in this Series



1. **RoboScript #1 - Implement Syntax Highlighting**

2. [RoboScript #2 - Implement the RS1 Specification](https://www.codewars.com/kata/5870fa11aa0428da750000da)

3. [RoboScript #3 - Implement the RS2 Specification](https://www.codewars.com/kata/58738d518ec3b4bf95000192)

4. [RoboScript #4 - RS3 Patterns to the Rescue](https://www.codewars.com/kata/594b898169c1d644f900002e)

5. [RoboScript #5 - The Final Obstacle (Implement RSU)](https://www.codewars.com/kata/5a12755832b8b956a9000133)

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/58708934a44cfccca60000c4)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
