# + =====================================================================================================================
# +
# + 6 kyu - Don't rely on luck.  [ ID: 5268af3872b786f006000228 ] (dont-rely-on-luck)
# + URL: https://www.codewars.com/kata/5268af3872b786f006000228
# + Category: GAMES  |  Tags: GAMES | PUZZLES
# +
# + =====================================================================================================================

import codewars_test as test
from dont_rely_on_luck import UNKNOWN


lucky_number = randint(1, 100)
test.assert_equals(guess, lucky_number, "Sorry. Unlucky this time.")
