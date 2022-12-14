# + =====================================================================================================================
# +
# + 6 kyu - N-th Fibonacci  [ ID: 522551eee9abb932420004a0 ] (n-th-fibonacci)
# + URL: https://www.codewars.com/kata/522551eee9abb932420004a0
# + Category: ALGORITHMS  |  Tags: ALGORITHMS
# +
# + =====================================================================================================================

import codewars_test as test
from n_th_fibonacci import nth_fib


test.assert_equals(nth_fib(1), 0, "1-st Fibo")
test.assert_equals(nth_fib(2), 1, "2-nd Fibo")
test.assert_equals(nth_fib(3), 1, "3-rd Fibo")
test.assert_equals(nth_fib(4), 2, "4-th Fibo")
test.assert_equals(nth_fib(5), 3, "5-th Fibo")
test.assert_equals(nth_fib(6), 5, "6-th Fibo")
test.assert_equals(nth_fib(7), 8, "7-th Fibo")
test.assert_equals(nth_fib(8), 13, "8-th Fibo")
test.assert_equals(nth_fib(9), 21, "9-th Fibo")
test.assert_equals(nth_fib(10), 34, "10-th Fibo")
test.assert_equals(nth_fib(11), 55, "11-th Fibo")
test.assert_equals(nth_fib(12), 89, "12-th Fibo")
test.assert_equals(nth_fib(13), 144, "13-th Fibo")
test.assert_equals(nth_fib(14), 233, "14-th Fibo")
test.assert_equals(nth_fib(15), 377, "15-th Fibo")
test.assert_equals(nth_fib(16), 610, "16-th Fibo")
test.assert_equals(nth_fib(17), 987, "17-th Fibo")
test.assert_equals(nth_fib(18), 1597, "18-th Fibo")
test.assert_equals(nth_fib(19), 2584, "19-th Fibo")
test.assert_equals(nth_fib(20), 4181, "20-th Fibo")
test.assert_equals(nth_fib(21), 6765, "21-st Fibo")
test.assert_equals(nth_fib(22), 10946, "22-nd Fibo")
test.assert_equals(nth_fib(23), 17711, "23-rd Fibo")
test.assert_equals(nth_fib(24), 28657, "24-th Fibo")
test.assert_equals(nth_fib(25), 46368, "25-th Fibo")
