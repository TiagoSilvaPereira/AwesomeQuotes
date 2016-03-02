'use strict';

var fs = require('fs');

module.exports = {

    getQuote: function (collection, language, callback) {
        
        var filename = './node_modules/awesome-quotes/quotes/' + collection.toLowerCase() + '/' 
                       + language.toLowerCase() + '.json';

        var quotes_file = fs.readFile(filename, 'utf-8', function(err, data) {

            if (err) throw err;

            try{
                
                var quotes_obj  = JSON.parse(data);
                var quotes      = quotes_obj.quotes;
                var max_quotes  = quotes.length - 1;

                var select      = Math.floor(Math.random() * max_quotes) + 0;

                callback(false, quotes[select]);

            }catch(e){

                callback(e, {});
            
            }

        });

    }

}