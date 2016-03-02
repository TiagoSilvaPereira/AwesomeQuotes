Awesome Quotes
=========

A small library providing awesome phrases and quotes to show in your application

## Installation

    npm install awesome-quotes --save

## Usage
    
    // Gets a random quote in the collection "computers" with the "english" language
    var quotes = require('awesome-quotes');
    var phrase = quotes.getQuote('computers','en');
    console.log(phrase);

### Other Example
    
    // Gets a random quote in the collection "computers" with the "brazilian portuguese" language
    var quotes = require('awesome-quotes');
    var phrase = quotes.getQuote('computers','pt-br');
    console.log(phrase);

## Using Collections
  To use a collection, you must write it in lowercase, followed by the supported language. Example:
      
      // Using the Computers Collection (a collection of programmers and computer scientists quotes)
      var phrase = quotes.getQuote('computers','pt-br');

## Supported Collections and Languages
    
    At this moment, the library supports these collections:
      Computers (en, pt, pt-br)
        
## Creating Collections

    1. Create a directory in /quotes with the lowercase name of the collection
    2. For each language, create a JSON file. Eg: en.json, pt-br.json, etc.


## Contributing

You can modify the json archives in the /quotes directory to add more phrases and quotes, and can optimize my code, because it is my first node module, and it is very simple.

## Release History

* 0.1.0 Initial release
* 0.1.2 Fix bugs
