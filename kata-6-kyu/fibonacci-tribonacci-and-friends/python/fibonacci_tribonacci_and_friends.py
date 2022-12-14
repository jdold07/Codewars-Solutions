# + =====================================================================================================================
# +
# + 6 kyu - Fibonacci, Tribonacci and friends  [ ID: 556e0fccc392c527f20000c5 ] (fibonacci-tribonacci-and-friends)
# + URL: https://www.codewars.com/kata/556e0fccc392c527f20000c5
# + Category: REFERENCE  |  Tags: ARRAYS | LISTS | NUMBER THEORY | FUNDAMENTALS
# +
# + =====================================================================================================================


def Xbonacci(signature, n):
    seed_len = len(signature)
    while len(signature) < n:
        signature += [sum(signature[-seed_len:])]
    return signature[:n]
