# let's be fancy and use variables
min = 1
max = 100

for num in range(min, max+1):
  msg = ""
  if num % 3 != 0 and num %5 != 0:
    msg += str(num)
  else:
    if num % 3 == 0:
      msg += "Fizz"
    if num % 5 == 0:
      msg += "Buzz"

  print(msg)
