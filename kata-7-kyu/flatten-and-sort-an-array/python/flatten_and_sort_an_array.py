# + =====================================================================================================================
# +
# + 7 kyu - Flatten and sort an array  [ ID: 57ee99a16c8df7b02d00045f ] (flatten-and-sort-an-array)
# + URL: https://www.codewars.com/kata/57ee99a16c8df7b02d00045f
# + Category: REFERENCE  |  Tags: ARRAYS | SORTING | FUNDAMENTALS
# +
# + =====================================================================================================================


def flatten_and_sort(array):
    return sorted(num for inner in array for num in inner)
