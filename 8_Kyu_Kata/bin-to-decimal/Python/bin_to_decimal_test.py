# [object Object] - Bin to Decimal  [ ID: 57a5c31ce298a7e6b7000334  (bin-to-decimal) ]
# URL: https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
# Category: REFERENCE  |  Tags: BINARY | FUNDAMENTALS
# ******************************************************************************
test.describe("Basic Tests")

tests = (
    ("1", 1),
    ("0", 0),
    ("1001001", 73),
)

for t in tests:
    inp, exp = t
    test.assert_equals(bin_to_decimal(inp), exp)
    
test.describe("Random Tests")

from random import randint

for _ in range(100):
    n = randint(1, 5000000)
    b = bin(n)[2:]
    test.assert_equals(bin_to_decimal(b), n) 
