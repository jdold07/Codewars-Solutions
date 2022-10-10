# + =====================================================================================================================
# +
# + 6 kyu - Binary to Text (ASCII) Conversion  [ ID: 5583d268479559400d000064 ] (binary-to-text-ascii-conversion)
# + URL: https://www.codewars.com/kata/5583d268479559400d000064
# + Category: REFERENCE  |  Tags: BINARY | STRINGS | FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from binary_to_text_ascii_conversion import binary_to_string


import random

test.assert_equals(binary_to_string(""), "", "Must handle empty string")
test.assert_equals(binary_to_string("0100100001100101011011000110110001101111"), "Hello", "Must handle basic works")
test.assert_equals(binary_to_string("00110001001100000011000100110001"), "1011", "Must handle numeric characters")
test.assert_equals(
    binary_to_string(
        "0101001101110000011000010111001001101011011100110010000001100110011011000110010101110111001011100010111000100000011001010110110101101111011101000110100101101111011011100111001100100000011100100110000101101110001000000110100001101001011001110110100000100001"
    ),
    "Sparks flew.. emotions ran high!",
    "Must handle special charaters",
)
test.assert_equals(
    binary_to_string(
        "0010000101000000001000110010010000100101010111100010011000101010001010000010100101010001010101110100010101110010011101000111100101010101010010010100111101001100011001000110011001100111011000100110001001101000011011100110110101001001010010110100001001001010010010110100100001001001010101010100111100101000001111110011111000111111001111000111111001111110011111100111111001111110001010010010100000101010001001100010010101011110001110010011100000110111001100010011001100101111001011010010111100101010001011010010101000101111"
    ),
    "!@#$%^&*()QWErtyUIOLdfgbbhnmIKBJKHIUO(?>?<~~~~~)(*&%^98713/-/*-*/",
    "Must handle special charaters",
)

# Must handle random string
random_string = "".join(c for _ in range(12) for c in random.choice("qwertyuiopasdfghjklzxcvbnm0123456789"))
random_string_binary = "".join("{:08b}".format(ord(c)) for c in random_string)
test.assert_equals(binary_to_string(random_string_binary), random_string, "Must handle random string")
