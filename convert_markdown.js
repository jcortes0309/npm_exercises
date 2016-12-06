// Marked - part 2
//
// Write a command line program that will take an input file and an output file argument, and convert the input file - which is assumed to be in markdown format - to HTML format and write to the output file. Example usage:
//
// $ node convert_markdown.js README.md README.html
// This should convert the README.md file to HTML and write the HTML version to README.html.
//
// Note: you must use async I/O to do this exercise, and all the proper error handling must be done.

var fs = require("fs");
var marked = require('marked');

var inputFile = process.argv[2];
var outputFile = process.argv[3];

fs.readFile(inputFile, function(error, content) {
  if (error) {
    console.log("\nSorry, there is no such file or directory: ");
    console.log(error.message, "\n");
    return;
  }
  var fileContent = content.toString();
  fileContent = marked(fileContent);
  fs.writeFile(outputFile, fileContent, function(error) {
    if (error) {
      console.log("\nSorry, there is no such file or directory: ");
      console.log(error.message, "\n");
      return;
    }
  });
});
