I read the test files and determined that they were simplying trying to determine if a year, when input, was a leap year or not. 

Each test appeared to just be a variation of the same theme. 

I did a search and came up with the following explanation of math that can be used to determine leap years. It appears to match the test cases. 

I determined that there should be a way to write a small amount of code that would satisfy all test cases. 

    In the Gregorian calendar, every year which is divisible by 4 is a leap year, except for years which are divisible by 100; those years are only leap years if they're divisible by 400 . 

    (This may seem complicated, but the calendar is carefully designed to keep the average number of days per year very close to the number of days in one complete orbit of the Earth.)

The code tests first if the year is divisable 4 (whole numbers only - no modulus)

It then tests if the year is divisable by 100 (whole numbers only - no modulus)

And last it tests if the years that are divisible by 100 are also divisable by 400 (again whole numbers - no modulus)

Leap year started in 1582

*Least common denominator math method*