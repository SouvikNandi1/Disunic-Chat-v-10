function buttoniopi() {
    $.getJSON("responses.json", function (data) {
        // 
        // btn.disabled = true;
        // if (e.which == 13) {
        // 
        var divs = document.querySelectorAll('.sent'); // Replace with your actual class name
        var lastDiv = divs[divs.length - 1];

        var userInput = localStorage.getItem("jsks").toString();
        $(lastDiv).append("<div class='user'><i style='font-size:30px' class='bi bi-person'></i><p style='margin-left:10px'>" + userInput + "</p></div>");
        localStorage.getItem("jsks").toString();

        // Loop through responses to find a match
        var foundResponse = false;
        for (var i = 0; i < data.responses.length; i++) {
            var keywords = data.responses[i].keywords;
            var link = data.responses[i].link;
            var linktitle = data.responses[i].linktitle;
            for (var j = 0; j < keywords.length; j++) {
                if (userInput.toLowerCase().indexOf(keywords[j]) != -1) {

                    if (link == undefined) {
                        $(lastDiv).append("<div class='bot'><p class=''>" + data.responses[i].response + "</p></div>");
                    }
                    else {
                        $(lastDiv).append("<div class='bot'><p class=''>" + data.responses[i].response + "</p><div class='link'><a target='_blank' href='" + link + "'>Go to " + linktitle + "</a></div></div>");
                    }



                    foundResponse = true;
                    break;
                }
            }
            if (foundResponse) {
                break;
            }
        }
        // If no response is found
        if (!foundResponse) {
            tyyy()
        }

        function tyyy() {

            var wikiApiUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&?redirect=fals&gsrnamespace=0&gsrlimit=1&prop=pageimages|extracts&pilimit=max&exintro&pithumbsize=400&explaintext&exsentences=8&exlimit=max&gsrsearch=' + userInput + '&callback=?';
            $.getJSON(wikiApiUrl, function (articles) {
                renderArticlesMarkup(articles);
            });
            function renderArticlesMarkup(articles) {
                var articlesMarkup = '';
                if (articles.query === undefined) {
                    articlesMarkup += '<div class="error"><p class="p1">Your Keyword did not match our Database 🤖</p> <p class="p2">Suggestions:</p><li>Make sure that all words are spelled correctly.</li><li>Try different keywords.</li><li>Try more general keywords.</li></div>';

                    $(lastDiv).append("<p class='bot'>I'm sorry, I don't understand your question. Can you rephrase it or provide more information?</p>")
                }
                else {
                    var pages = articles.query.pages;
                    for (var property in pages) {
                        if (pages.hasOwnProperty(property)) {
                            articlesMarkup += '<div class="article" id="artical"><a id="ra" href="https://en.wikipedia.org/wiki/' + pages[property].title + '" target="_blank">' + '<h2 class="rah" id="rah">' + pages[property].title + '</h2><div class="snippet" id="ras">';
                            if (pages[property].thumbnail !== undefined) {
                                articlesMarkup += '<img src="' + pages[property].thumbnail.source + '">';
                                $(lastDiv).append("<div class='hgj'><img src=" + pages[property].thumbnail.source +"></div>");
                            }
                            articlesMarkup += '<p>' + pages[property].extract + '</p></div></div></a>';

                            var opoo = pages[property].extract;

                            $(lastDiv).append("<div class='bot'><p id='div_'></div>");

                            function chatappend() {
                                console.log(opoo)
                                let newId = "div_";
                                let counter = 1;
                                while (document.getElementById(newId)) {
                                    newId = "div_" + counter;
                                    counter++;
                                }
                                const myDiv = document.getElementById("div_");
                                myDiv.setAttribute("id", newId);
                                var i = 0;
                                var speed = 20;
                                typeWriter()
                                function typeWriter() {
                                    if (i < opoo.length) {
                                        myDiv.innerHTML += opoo.charAt(i);
                                        ncbvh()
                                        i++;
                                        setTimeout(typeWriter, speed);

                                    }
                                }
                                return;
                                // enddd()
                            }
                            chatappend()

                        }
                    }
                }
                $('.result').html(articlesMarkup);

            }
        }
    });
}
function ncbvh() {
    var messageContainer = document.querySelector('.message-container');
    messageContainer.scrollTop = messageContainer.scrollHeight;
}