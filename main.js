// PATH TO API: https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en

$("document").ready(function(){

var quote;
var author; 

    function getNewQuote(){
        $.ajax({
            url: 'https://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',

            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },

            success: function(value){
                quote = value.quoteText;
                author = value.quoteAuthor;
                $('#quote').hide().fadeIn(1000).html('"'+quote+'"');
                $('#author').html('- ' + author);
                
                $('h3').fadeOut(500).fadeIn(500);

                if(!value.quoteAuthor){
                    $('#author').html('- Anonymous');                    
                }
            }
        });
    };
    getNewQuote();

    $('.get-quote').on('click', function(event){
        event.preventDefault();
        getNewQuote();
    });

    $('.share-quote').on('click', function(){
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " — " + author));
    })
});