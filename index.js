'use strict';

var fs = require('fs');

module.exports = {

    getQuote: function (collection, language) {
        
        var filename = './node_modules/awesome-quotes/quotes/' + collection.toLowerCase() + '/' 
                       + language.toLowerCase() + '.json';

        var quotes_file     = fs.readFileSync(filename, 'utf-8');
        
        if(quotes_file) {

            var quotes_obj  = JSON.parse(quotes_file);

            var quotes      = quotes_obj.quotes;
            var max_quotes  = quotes.length - 1;

            var select      = Math.floor(Math.random() * max_quotes) + 0;


            return (quotes[select]);

        }else{

            return {error: "Collection does not exist"};

        }

        return {};

    }

}