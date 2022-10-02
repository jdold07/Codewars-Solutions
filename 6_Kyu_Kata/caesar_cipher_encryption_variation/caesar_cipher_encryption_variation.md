# 6 kyu - Caesar Cipher Encryption - Variation

##### **ID**: [55ec55323c89fc5fbd000019](https://www.codewars.com/kata/55ec55323c89fc5fbd000019) | **Slug**: [caesar-cipher-encryption-variation](https://www.codewars.com/kata/55ec55323c89fc5fbd000019) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2015-09-06 ***by*** [patrickwalkowicz](https://www.codewars.com/users/patrickwalkowicz) | **Approved**: 2017-08-03 ***by*** [dcieslak](https://www.codewars.com/users/dcieslak)

##### **Languages Available**: javascript, python, ruby

##### **My Completed Languages**: javascript ***as at*** 2022-10-02 | **Originally completed**: 2022-09-19

---

## Kata Description


#About Caesar Cipher



Caesar Cipher is a simple encryption technique based on shifting each character by a fixed number of positions in the alphabet.



For example, if the shift is 3, an encoded version of phrase "kata" will be:

```

k + 3 = n

a + 3 = d

t + 3 = w

a + 3 = d

```

In a case when "z" is reached, the algorithm wraps back to "a".

Example: "zen", key 3

```

z + 3 = c

e + 3 = h

n + 3 = q

```

The key for this cipher can be any non-negative integer. However, because there are 26 letters in English alphabet, any key larger than 26 can be thought about as key = key % 26.



#What to do



Your task is to write a function that will *encrypt* a phrase using Caesar Cipher and a given shift key and return it as a string. However, **the key should be increased by 1 with every word in a phrase**. For example, if the function is called with a phrase "divide et impera" and key 3, the encoding should be as follows:

```

- Shift the word "divide" by the key of 3

- Shift the word "et" by the key of 3 + 1 = 4

- Shift the word "impera" by the key of 3 + 2 = 5

```





#Important things to note:

- Guaranteed input will be of type string, **lowercase characters and spaces only**.

- Key can be any non-negative integer.



To read more about Caesar Cipher, visit https://en.wikipedia.org/wiki/Caesar_cipher

---


🏷 `ALGORITHMS | CRYPTOGRAPHY`


[View this Kata on Codewars.com](https://www.codewars.com/kata/55ec55323c89fc5fbd000019)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
