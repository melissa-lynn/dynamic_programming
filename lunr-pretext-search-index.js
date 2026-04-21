var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-intro-fibonacci",
  "level": "1",
  "url": "sec-intro-fibonacci.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Fibonacci Sequence",
  "body": " The Fibonacci Sequence  The Fibonacci Sequence is a famous sequence of numbers from mathematics. The rules for generating the Fibonacci sequence are simple:  The first Fibonacci number is 1.  The second Fibonacci number is 1.  The third Fibonacci number is the sum of the first and second Fibonacci numbers, so is .  The fourth Fibonacci number is the sum of the second and third Fibonacci numbers, so is .  The fifth Fibonacci number is the sum of the third and fourth Fibonacci numbers, so is .  This pattern continues.     Now, let's explore how we can write a function that takes an integer , and returns the th Fibonacci number. Our first attempt will use recursion.  Immitating the recursive definition of Fibonacci numbers, we have base cases when and when . Otherwise, we recursive call our function on and and add the results.   Using recursion to compute the Fibonacci Sequence   def fibonacci(n): if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) print(fibonacci(10))      20th Fibonacci Number   Using the code above, what is the 20th Fibonacci number?       Correct!      Incorrect, try again. Call the function fibonacci on 20.        The function that we've defined works and correctly finds the th Fibonacci number. However, if you try to compute the 100th Fibonacci number, you'll find that the function becomes impractically slow. To figure out why this happens, let's explore the recursive calls made when we call fibonacci .  The function below adds a print statement to our previous recursive function, reporting every time the function fibonacci is called. This will allow us to see all recursive calls made when we call fibonacci(10) .   Tracking the number of recursive calls   def fibonacci(n): print(\"Calling fibonacci on \", n) if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) fibonacci(10)    From this, we can see that there are a lot of recursive calls being made just to compute fibonacci(10) ! There would be many more required for the call fibonacci(100) , and this explains why the computation was so slow.  We also see that there is a lot of repetition in the recursive calls being made. For instance, we see that fibonacci is called on 3 many times. Let's modify our function again, to count these repetitions.   Tracking the number of recursive calls   num_calls = 0 def fibonacci(n): global num_calls if n == 3: num_calls += 1 if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) fibonacci(10) print(\"Total number of calls fibonacci(3):\", num_calls)      Counting Recursive Calls   Using the code above, when we call fibonacci(10) , how many calls fibonacci(3) does this make?       Correct!      Incorrect, try again.        Counting Recursive Calls   Using the code above, when we call fibonacci(10) , how many calls fibonacci(4) does this make?       Correct!      Incorrect, try again. Be sure to modify the code to count when n is 4.        Counting Recursive Calls   Using the code above, when we call fibonacci(10) , how many calls fibonacci(5) does this make?       Correct!      Incorrect, try again. Be sure to modify the code to count when n is 5.        You may have noticed an interesting pattern: the counts that show up are themselves Fibonacci numbers! This is a cool property of the Fibonacci sequence, but not our focus right now.  We've seen that we're repeating the same recursive calls over and over again to compute Fibonacci numbers, and that leads us to an important idea:   Key Idea of Dynamic Programming  Rather than repeating the same computation over and over again, record the result and use the recorded result whenever we need it.   For the Fibonacci sequence, this means that we will only compute fibonacci(5) once, for example, and store the result somewhere. Then, the rest of the times that we need this number, we look up the stored result instead of recomputing the value. This approach will save us a lot of recursive calls! This general approach is called dynamic programming.  In the following function, we fill in a Python list of Fibonacci numbers. We compute the next Fibonacci number by adding together the last two entries in the list.   Fibonacci Sequence with Dynamic Programming   def fibonacci(n): fib_array = [0,1,1] for i in range(3, n+1): fib_array.append(fib_array[-1]+fib_array[-2]) return fib_array[n] print(fibonacci(10))      100th Fibonacci Number   Using the code above, what is the 100th Fibonacci number?       Correct!      Incorrect, try again. Call the function fibonacci on 100.        With this modification, we have drastically improved the speed of our function to compute Fibonacci numbers. In general, dynamic programming is a powerful method to improve the speed of algorithms that would otherwise be impractically slow.  "
},
{
  "id": "sec-intro-fibonacci-6",
  "level": "2",
  "url": "sec-intro-fibonacci.html#sec-intro-fibonacci-6",
  "type": "Listing",
  "number": "1.1.1",
  "title": "Using recursion to compute the Fibonacci Sequence",
  "body": " Using recursion to compute the Fibonacci Sequence   def fibonacci(n): if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) print(fibonacci(10))   "
},
{
  "id": "fibonacci20",
  "level": "2",
  "url": "sec-intro-fibonacci.html#fibonacci20",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "20th Fibonacci Number.",
  "body": " 20th Fibonacci Number   Using the code above, what is the 20th Fibonacci number?       Correct!      Incorrect, try again. Call the function fibonacci on 20.      "
},
{
  "id": "sec-intro-fibonacci-10",
  "level": "2",
  "url": "sec-intro-fibonacci.html#sec-intro-fibonacci-10",
  "type": "Listing",
  "number": "1.1.2",
  "title": "Tracking the number of recursive calls",
  "body": " Tracking the number of recursive calls   def fibonacci(n): print(\"Calling fibonacci on \", n) if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) fibonacci(10)   "
},
{
  "id": "sec-intro-fibonacci-13",
  "level": "2",
  "url": "sec-intro-fibonacci.html#sec-intro-fibonacci-13",
  "type": "Listing",
  "number": "1.1.3",
  "title": "Tracking the number of recursive calls",
  "body": " Tracking the number of recursive calls   num_calls = 0 def fibonacci(n): global num_calls if n == 3: num_calls += 1 if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) fibonacci(10) print(\"Total number of calls fibonacci(3):\", num_calls)   "
},
{
  "id": "fib-count-3",
  "level": "2",
  "url": "sec-intro-fibonacci.html#fib-count-3",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "Counting Recursive Calls.",
  "body": " Counting Recursive Calls   Using the code above, when we call fibonacci(10) , how many calls fibonacci(3) does this make?       Correct!      Incorrect, try again.      "
},
{
  "id": "fib-count-4",
  "level": "2",
  "url": "sec-intro-fibonacci.html#fib-count-4",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "Counting Recursive Calls.",
  "body": " Counting Recursive Calls   Using the code above, when we call fibonacci(10) , how many calls fibonacci(4) does this make?       Correct!      Incorrect, try again. Be sure to modify the code to count when n is 4.      "
},
{
  "id": "fib-count-5",
  "level": "2",
  "url": "sec-intro-fibonacci.html#fib-count-5",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "Counting Recursive Calls.",
  "body": " Counting Recursive Calls   Using the code above, when we call fibonacci(10) , how many calls fibonacci(5) does this make?       Correct!      Incorrect, try again. Be sure to modify the code to count when n is 5.      "
},
{
  "id": "sec-intro-fibonacci-17",
  "level": "2",
  "url": "sec-intro-fibonacci.html#sec-intro-fibonacci-17",
  "type": "Insight",
  "number": "1.1.4",
  "title": "Key Idea of Dynamic Programming.",
  "body": " Key Idea of Dynamic Programming  Rather than repeating the same computation over and over again, record the result and use the recorded result whenever we need it.  "
},
{
  "id": "sec-intro-fibonacci-18",
  "level": "2",
  "url": "sec-intro-fibonacci.html#sec-intro-fibonacci-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dynamic programming. "
},
{
  "id": "sec-intro-fibonacci-20",
  "level": "2",
  "url": "sec-intro-fibonacci.html#sec-intro-fibonacci-20",
  "type": "Listing",
  "number": "1.1.5",
  "title": "Fibonacci Sequence with Dynamic Programming",
  "body": " Fibonacci Sequence with Dynamic Programming   def fibonacci(n): fib_array = [0,1,1] for i in range(3, n+1): fib_array.append(fib_array[-1]+fib_array[-2]) return fib_array[n] print(fibonacci(10))   "
},
{
  "id": "fibonacci100",
  "level": "2",
  "url": "sec-intro-fibonacci.html#fibonacci100",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "100th Fibonacci Number.",
  "body": " 100th Fibonacci Number   Using the code above, what is the 100th Fibonacci number?       Correct!      Incorrect, try again. Call the function fibonacci on 100.      "
},
{
  "id": "sec-intro-memo-tab",
  "level": "1",
  "url": "sec-intro-memo-tab.html",
  "type": "Section",
  "number": "1.2",
  "title": "Tabulation and Memoization",
  "body": " Tabulation and Memoization  This section discusses the difference between tabulation and memoization, using the Fibonacci sequence as an example.  "
},
{
  "id": "sec-intro-tiling",
  "level": "1",
  "url": "sec-intro-tiling.html",
  "type": "Section",
  "number": "1.3",
  "title": "Tiling Problems",
  "body": " Tiling Problems  Suppose we have a board that we wish to cover completely with tiles, without having any tiles overlap. The tiles that we have available are blue tiles and red tiles. How many ways can we tile our board using these tiles?  For example, let's count how many ways we can tile a board. The combinations are pictured below.                                        We can tile our board in the following ways:  5 blue tiles.  3 blue tiles, 1 red tile.  2 blue tiles, 1 red tile, 1 blue tile.  1 blue tile, 1 red tile, 2 blue tiles.  1 red tile, 3 blue tiles.  1 blue tile, 2 red tiles.  1 red tile, 1 blue tile, 1 red tile.  2 red tiles, 1 blue tile.  This gives us a total of 8 ways to tile our board.  Now, how can we find the number of ways to tile an board with blue tiles and red tiles? For large values of , it would become very difficult to count the possibilities, so we would like a better way.  Here, we'll use a common algorithmic design strategy: reduce the problem to smaller problems. This is done using the following key observation.   Key Insight to Tiling Problems  When we tile a board with blue tiles and red tiles, every tiling will end with either a blue tile or a red tile.   This means that to find the total number of tilings for a board, we find the number of tilings that end with a blue tile and add that to the number of tilings that end with a red tile.  How do we find the number of tilings that end with a blue tile? A blue tile fills in the last slot on the board, leaving open slots for tiles. This means that the number of tilings that end with a blue tile is the same as the number of ways to tile a board with blue tiles and red tiles.  Similarly, to find the number of tilings that end with a red tile, notice that a red tile fills in the last two slots on the board, leaving open slots for tiles. This means that the number of tilings that end with a red tile is the same as the number of ways to tile a board with blue tiles and red tiles.  Putting these together, if we write for the number of ways to tile a board, we have discovered the following relationship: We can use this recursive relationship to compute the number of ways to tile a board, once we figure out our base cases.   Base Case:   When , how many ways are there to tile a board with blue tiles and red tiles?       Correct! The only way to tile a board is using 1 blue tile.      Incorrect, try again.        Base Case:   When , how many ways are there to tile a board with blue tiles and red tiles?       Correct! We can tile a board using 2 blue tiles, or using 1 red tile.      Incorrect, try again.       When , we can use , so the base cases and are sufficient.  Putting all of these together, we can use the following formulas to find the number of ways to tile a board with blue tiles and red tiles.        for  We can use these to define a function to compute the number of tilings.  def num_tilings(n): if n <= 1: return 1 if n == 2: return 2 return num_tilings(n-1) + num_tilings(n-2)    The function is above is not ideal. What is wrong with it?      It does not always produce the correct results.    Incorrect, try again.      It runs slowly for large inputs.    Correct! It repeats the same recursive calls, making it unnecessarily slow.      It sometimes results in infinite recursion.    Incorrect, try again.      We can improve the function above by using dynamic programming to avoid repeating the same recursive calls over and over again.   Counting Tilings with Dynamic Programming   def num_tilings(n): tiling_array = [1,1,2] for i in range(3, n+1): tiling_array.append(tiling_array[-1]+tiling_array[-2]) return tiling_array[n] print(num_tilings(10))     Tiling a Board   Using the code above, how many ways can you tile a board using blue tiles and red tiles?       Correct!      Incorrect, try again. Call the function num_tilings on 50.       "
},
{
  "id": "sec-intro-tiling-8",
  "level": "2",
  "url": "sec-intro-tiling.html#sec-intro-tiling-8",
  "type": "Insight",
  "number": "1.3.1",
  "title": "Key Insight to Tiling Problems.",
  "body": " Key Insight to Tiling Problems  When we tile a board with blue tiles and red tiles, every tiling will end with either a blue tile or a red tile.  "
},
{
  "id": "tiling_base1",
  "level": "2",
  "url": "sec-intro-tiling.html#tiling_base1",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "Base Case: <span class=\"process-math\">\\(n=1\\)<\/span>.",
  "body": " Base Case:   When , how many ways are there to tile a board with blue tiles and red tiles?       Correct! The only way to tile a board is using 1 blue tile.      Incorrect, try again.      "
},
{
  "id": "tiling_base2",
  "level": "2",
  "url": "sec-intro-tiling.html#tiling_base2",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "Base Case: <span class=\"process-math\">\\(n=2\\)<\/span>.",
  "body": " Base Case:   When , how many ways are there to tile a board with blue tiles and red tiles?       Correct! We can tile a board using 2 blue tiles, or using 1 red tile.      Incorrect, try again.      "
},
{
  "id": "tiling_mc",
  "level": "2",
  "url": "sec-intro-tiling.html#tiling_mc",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": "  The function is above is not ideal. What is wrong with it?      It does not always produce the correct results.    Incorrect, try again.      It runs slowly for large inputs.    Correct! It repeats the same recursive calls, making it unnecessarily slow.      It sometimes results in infinite recursion.    Incorrect, try again.     "
},
{
  "id": "sec-intro-tiling-20",
  "level": "2",
  "url": "sec-intro-tiling.html#sec-intro-tiling-20",
  "type": "Listing",
  "number": "1.3.5",
  "title": "Counting Tilings with Dynamic Programming",
  "body": " Counting Tilings with Dynamic Programming   def num_tilings(n): tiling_array = [1,1,2] for i in range(3, n+1): tiling_array.append(tiling_array[-1]+tiling_array[-2]) return tiling_array[n] print(num_tilings(10))   "
},
{
  "id": "tiling50",
  "level": "2",
  "url": "sec-intro-tiling.html#tiling50",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "Tiling a <span class=\"process-math\">\\(1\\times 50\\)<\/span> Board.",
  "body": " Tiling a Board   Using the code above, how many ways can you tile a board using blue tiles and red tiles?       Correct!      Incorrect, try again. Call the function num_tilings on 50.      "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
