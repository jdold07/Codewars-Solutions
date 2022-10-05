# 7 kyu - Maximum Multiple  [ ID: 5aba780a6a176b029800041c  (maximum-multiple) ]
# URL: https://www.codewars.com/kata/5aba780a6a176b029800041c
# Category: BUG_FIXES  |  Tags: FUNDAMENTALS
# ******************************************************************************
def max_multiple(divisor, bound):
    for n in range(bound, divisor - 1, -1):
        if not n % divisor:
            return n


# ******************************************************************************
# ******************************************************************************
def max_multiple(divisor, bound):
    for n in range(bound, 0, -1):
        if not n % divisor:
            return n
