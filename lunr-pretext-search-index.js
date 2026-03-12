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
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "01-01-fibonacci",
  "level": "1",
  "url": "01-01-fibonacci.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Fibonacci Sequence",
  "body": " The Fibonacci Sequence  The Fibonacci Sequence is a famous sequence of numbers from mathematics. The rules for generating the Fibonacci sequence are simple:  The first Fibonacci number is 1.  The second Fibonacci number is 1.  The third Fibonacci number is the sum of the first and second Fibonacci numbers, so is .  The fourth Fibonacci number is the sum of the second and third Fibonacci numbers, so is .  The fifth Fibonacci number is the sum of the third and fourth Fibonacci numbers, so is .  This pattern continues.      Using recursion to compute the Fibonacci Sequence   def fibonacci(n): if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) print(fibonacci(10))     20th Fibonacci Number   Using the code above, what is the 20th Fibonacci number?       Correct!      Incorrect, try again. Call the function fibonacci on 20.        Tracking the number of recursive calls   def fibonacci(n): print(\"Calling fibonacci on \", n) if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) fibonacci(10)     Tracking the number of recursive calls   num_calls = 0 def fibonacci(n): global num_calls num_calls += 1 if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) fibonacci(10) print(\"Total number of calls to fibonacci:\", num_calls)    "
},
{
  "id": "01-01-fibonacci-4",
  "level": "2",
  "url": "01-01-fibonacci.html#01-01-fibonacci-4",
  "type": "Listing",
  "number": "2.1.1",
  "title": "Using recursion to compute the Fibonacci Sequence",
  "body": " Using recursion to compute the Fibonacci Sequence   def fibonacci(n): if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) print(fibonacci(10))   "
},
{
  "id": "fillin-integer",
  "level": "2",
  "url": "01-01-fibonacci.html#fillin-integer",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "20th Fibonacci Number.",
  "body": " 20th Fibonacci Number   Using the code above, what is the 20th Fibonacci number?       Correct!      Incorrect, try again. Call the function fibonacci on 20.      "
},
{
  "id": "01-01-fibonacci-6",
  "level": "2",
  "url": "01-01-fibonacci.html#01-01-fibonacci-6",
  "type": "Listing",
  "number": "2.1.3",
  "title": "Tracking the number of recursive calls",
  "body": " Tracking the number of recursive calls   def fibonacci(n): print(\"Calling fibonacci on \", n) if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) fibonacci(10)   "
},
{
  "id": "01-01-fibonacci-7",
  "level": "2",
  "url": "01-01-fibonacci.html#01-01-fibonacci-7",
  "type": "Listing",
  "number": "2.1.4",
  "title": "Tracking the number of recursive calls",
  "body": " Tracking the number of recursive calls   num_calls = 0 def fibonacci(n): global num_calls num_calls += 1 if n == 1 or n == 2: return 1 return fibonacci(n-1) + fibonacci(n-2) fibonacci(10) print(\"Total number of calls to fibonacci:\", num_calls)   "
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
