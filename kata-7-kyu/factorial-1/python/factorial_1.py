# + =====================================================================================================================
# +
# + 7 kyu - Factorial  [ ID: 57a049e253ba33ac5e000212 ] (factorial-1)
# + URL: https://www.codewars.com/kata/57a049e253ba33ac5e000212
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================


def factorial(n):
    result = 1
    for x in range(1, n + 1):
        result *= x
    return result
