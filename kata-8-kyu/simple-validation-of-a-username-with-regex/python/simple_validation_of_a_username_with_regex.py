#+ =====================================================================================================================
#+
#+ 8 kyu - Simple validation of a username with regex  [ ID: 56a3f08aa9a6cc9b75000023 ] (simple-validation-of-a-username-with-regex)
#+ URL: https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
#+ Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
#+
#+ =====================================================================================================================

import re
  
  
  def validate_usr(username):
      return bool(re.match("^[a-z0-9_]{4,16}$", username))
