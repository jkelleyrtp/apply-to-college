/// Jonathan Kelley
/*
Homepage 
* welcome
* how to use 
* login, list of forms appear
* Each form has a progress meter
* click to expand form
 - view individual wordcount on each essay
 - clicking on essay hyperlink takes to application page with all essays, # and expand select app
 - Clicking on form name takes to form
 - Boxes autosave, able to switch between different versions (saved manually)
 - 


Homepage
-----------------------
 logo Essay Builder
-----------------------
Your Colleges:

  (> Stanford )
  (> Duke     )
  (> Michigan )
  (< NCSU     )
   - E1: 50/200
   - E2: 100/100
   - E3: 0/50

  (Add college...)


Application Page
-----------------------
 logo Stanford stfdlogo
-----------------------
Stanford Application

Favorite movie?
  > notes
	[          ]
	[          ]
[            ]
[            ]
grammar | share as google doc | wordcount
[         ]
[         ]
[         ]
Grammer Ifrmae


tasks
- save data
- Home page
- save colleges
- save essays
- monitor and save wordcount







*/


counter = function() {
    var value = $('#text').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        $('#totalChars').html(0);
        $('#charCount').html(0);
        $('#charCountNoSpace').html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    var charCount = value.trim().length;
    var charCountNoSpace = value.replace(regex, '').length;

    $('#wordCount').html(wordCount);
    $('#totalChars').html(totalChars);
    $('#charCount').html(charCount);
    $('#charCountNoSpace').html(charCountNoSpace);
};


function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
};


//alert('boo!');

$(document).ready(function() {
	
    $('#count').click(counter);
	$('#text').change(counter);
	$('#text').keydown(counter);
    $('#text').keypress(counter);    
	$('#text').keyup(counter);
    $('#text').blur(counter);
	$('#text').focus(counter);

});
