module.exports = {

    fs = require('fs');

    getQuote: function (collection, language) {

        quotes_file     = fs.readFileSync('./quotes/' + collection + '-' + language + '.json');
        
        if(quotes_file) {

            quotes_obj      = JSON.parse(quotes_file);

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