Awesome Quotes
=========

A small library providing awesome phrases and quotes to show in your application

## Installation

  npm install awesome-quotes --save

## Usage

  var quotes = require('awesome-quotes');
  
  /*
    Get a ramdom quote in the collection "computers", and
    "english" language
  */
  var phrase = quotes.getQuote('computers','en');

  console.log(phrase);

## Other Example

  var quotes = require('awesome-quotes');
  
  /*
    Get a ramdom quote in the collection "computers", and
    "brazilian portuguese" language
  */
  var phrase = quotes.getQuote('computers','pt-br');

  console.log(phrase);

## Supported Collections and Languages

    At this moment, the library supports:
        ## Computers collection
            English - en
            Brazilian Portuguese - pt-br

## Contributing

You can modify the json archives in the /quotes directory to add more phrases and quotes, and can optimize my code, because it is my first node module, and it is very simple.

## Release History

* 0.1.0 Initial release