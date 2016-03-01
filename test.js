fs = require('fs');

getQuote = function (language) {

    quotes_file     = fs.readFileSync('./quotes/' + language + '.json');
        
    if(quotes_file) {

        quotes_obj      = JSON.parse(quotes_file);

        var quotes      = quotes_obj.quotes;
        var max_quotes  = quotes.length - 1;

        var select      = Math.floor(Math.random() * max_quotes) + 0;

        console.log (quotes[select]);

    }

    return {};  

}

getQuote('pt-br');

