# npm Exercises

## Use the marked module

Install the marked module, require it, and use the module to convert some hard-coded markdown to HTML, you may use the example code provided in marked's project page.

## Marked - part 2

Write a command line program that will take an input file and an output file argument, and convert the input file - which is assumed to be in markdown format - to HTML format and write to the output file. Example usage:

```
$ node convert_markdown.js README.md README.html
```

This should convert the ```README.md``` file to HTML and write the HTML version to ```README.html```.

_Note: you must use async I/O to do this exercise, and all the proper error handling must be done._


## Speed Test

Install the [Speed Test](https://github.com/sindresorhus/speed-test) module globally and run it. Read the documentation on the project page to figure out how to use it.


## Lodash

Lodash is a swiss army knife toolbelt of a module. For example, there's a [shuffle](https://lodash.com/docs/4.17.2#shuffle%20function) built in, and if you had known that, you could have used it for black jack and memory game.

1. Write a simple program that makes use of lodash's shuffle function.
2. Look through the lodash documentation for another function that is interesting to you, write a program that makes use of it.


## Bonus: Request and Cheerio

[Request](https://www.npmjs.com/package/request) and [Cheerio](https://www.npmjs.com/package/cheerio) are two useful modules and they can be combined to do some really cool stuff.

1. Figure out how to use both of these modules individually.
2. Use the modules together to grab the list of "packages people 'npm install' a lot" on the [npmjs.org front page](https://www.npmjs.com), store the results in an array, and print it out to the terminal.


## Bonus 2: Any module

Find any npm module and learn how to use it by reading its documentation. You can do a google search for something you might be interested in and add "npm" to the search term. Or you can look through [this list](https://github.com/sindresorhus/awesome-nodejs) for some inspiration.
