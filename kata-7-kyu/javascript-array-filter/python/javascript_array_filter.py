# + =====================================================================================================================
# +
# + 7 kyu - JavaScript Array Filter  [ ID: 514a6336889283a3d2000001 ] (javascript-array-filter)
# + URL: https://www.codewars.com/kata/514a6336889283a3d2000001
# + Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# +
# + =====================================================================================================================


def get_even_numbers(arr):
    return list(filter(lambda x: not x % 2, arr))
