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
  "body": " The Fibonacci Sequence  The Fibonacci Sequence is a famous sequence of numbers from mathematics. The rules for generating the Fibonacci sequence are simple:  The first Fibonacci number is 1.  The second Fibonacci number is 1.  The third Fibonacci number is the sum of the first and second Fibonacci numbers, so is .  The fourth Fibonacci number is the sum of the second and third Fibonacci numbers, so is .  The fifth Fibonacci number is the sum of the third and fourth Fibonacci numbers, so is .  This pattern continues.     Now, let's explore how we can write a function that takes an integer , and returns the th Fibonacci number. Our first attempt will use recursion.  Immitating the recursive definition of Fibonacci numbers, we have base cases when and when . Otherwise, we recursive call our function on and and add the results.   Using recursion to compute the Fibonacci Sequence   def fibonacci(n): if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) print(fibonacci(10))      20th Fibonacci Number   Using the code above, what is the 20th Fibonacci number?       Correct!      Incorrect, try again. Call the function fibonacci on 20.        The function that we've defined works and correctly finds the th Fibonacci number. However, if you try to compute the 100th Fibonacci number, you'll find that the function becomes impractically slow. To figure out why this happens, let's explore the recursive calls made when we call fibonacci .  The function below adds a print statement to our previous recursive function, reporting every time the function fibonacci is called. This will allow us to see all recursive calls made when we call fibonacci(10) .   Tracking the number of recursive calls   def fibonacci(n): print(\"Calling fibonacci on \", n) if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) fibonacci(10)    From this, we can see that there are a lot of recursive calls being made just to compute fibonacci(10) ! There would be many more required for the call fibonacci(100) , and this explains why the computation was so slow.  We also see that there is a lot of repetition in the recursive calls being made. For instance, we see that fibonacci is called on 3 many times. Let's modify our function again, to count these repetitions.   Tracking the number of recursive calls   num_calls = 0 def fibonacci(n): global num_calls if n == 3: num_calls += 1 if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) fibonacci(10) print(\"Total number of calls fibonacci(3):\", num_calls)      Counting Recursive Calls   Using the code above, when we call fibonacci(10) , how many calls fibonacci(3) does this make?       Correct!      Incorrect, try again.        Counting Recursive Calls   Using the code above, when we call fibonacci(10) , how many calls fibonacci(4) does this make?       Correct!      Incorrect, try again. Be sure to modify the code to count when n is 4.        Counting Recursive Calls   Using the code above, when we call fibonacci(10) , how many calls fibonacci(5) does this make?       Correct!      Incorrect, try again. Be sure to modify the code to count when n is 5.        You may have noticed an interesting pattern: the counts that show up are themselves Fibonacci numbers! This is a cool property of the Fibonacci sequence, but not our focus right now.  We've seen that we're repeating the same recursive calls over and over again to compute Fibonacci numbers, and that leads us to an important idea:   Key Idea of Dynamic Programming  Rather than repeating the same computation over and over again, record the result and use the recorded result whenever we need it.   For the Fibonacci sequence, this means that we will only compute fibonacci(5) once, for example, and store the result somewhere. Then, the rest of the times that we need this number, we look up the stored result instead of recomputing the value. This approach will save us a lot of recursive calls! This general approach is called dynamic programming.  In the following function, we fill in a Python list of Fibonacci numbers. We compute the next Fibonacci number by adding together the last two entries in the list.   Fibonacci Sequence with Dynamic Programming   def fibonacci(n): fib_array = [0,1,1] for i in range(3, n+1): fib_array.append(fib_array[-1]+fib_array[-2]) return fib_array[n] print(fibonacci(10))      20th Fibonacci Number   Using the code above, what is the 100th Fibonacci number?       Correct!      Incorrect, try again. Call the function fibonacci on 100.        With this modification, we have drastically improved the speed of our function to compute Fibonacci numbers. In general, dynamic programming is a powerful method to improve the speed of algorithms that would otherwise be impractically slow.  "
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
  "title": "20th Fibonacci Number.",
  "body": " 20th Fibonacci Number   Using the code above, what is the 100th Fibonacci number?       Correct!      Incorrect, try again. Call the function fibonacci on 100.      "
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
  "body": " Tiling Problems  This section covers tiling problems.  "
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
