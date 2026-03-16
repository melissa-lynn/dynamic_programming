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
  "id": "fibonacci",
  "level": "1",
  "url": "fibonacci.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Fibonacci Sequence",
  "body": " The Fibonacci Sequence  The Fibonacci Sequence is a famous sequence of numbers from mathematics. The rules for generating the Fibonacci sequence are simple:  The first Fibonacci number is 1.  The second Fibonacci number is 1.  The third Fibonacci number is the sum of the first and second Fibonacci numbers, so is .  The fourth Fibonacci number is the sum of the second and third Fibonacci numbers, so is .  The fifth Fibonacci number is the sum of the third and fourth Fibonacci numbers, so is .  This pattern continues.     Finding the average velocity of a moving object from data          "
},
{
  "id": "ez-1-1-doenet-1",
  "level": "2",
  "url": "fibonacci.html#ez-1-1-doenet-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "Finding the average velocity of a moving object from data.",
  "body": "Finding the average velocity of a moving object from data   "
},
{
  "id": "fib-ex-2",
  "level": "2",
  "url": "fibonacci.html#fib-ex-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " "
},
{
  "id": "fib-ex-3",
  "level": "2",
  "url": "fibonacci.html#fib-ex-3",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": " "
},
{
  "id": "ez-1-1-D",
  "level": "1",
  "url": "ez-1-1-D.html",
  "type": "Exercises",
  "number": "2.2",
  "title": "Exercises",
  "body": " Finding the average velocity of a moving object from data    "
},
{
  "id": "ez-1-1-doenet-2",
  "level": "2",
  "url": "ez-1-1-D.html#ez-1-1-doenet-2",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "Finding the average velocity of a moving object from data.",
  "body": "Finding the average velocity of a moving object from data   "
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
