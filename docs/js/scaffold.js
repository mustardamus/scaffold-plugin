$(document).ready(function() {
  var extractCodeSegments = function(codeHeaders) {
    var ret     = {},
        headers = [
                    {
                      name: 'html',
                      text: 'Your HTML'
                    },
                    {
                      name: 'js',
                      text: 'Your Javascript'
                    },
                    {
                      name: 'css',
                      text: 'Your CSS'
                    }
                  ];
    
    for(i = 0; i < headers.length; i++) {
      var codeHeader = codeHeaders.filter(function() { return $(this).text() == headers[i].text; }),
          code       = codeHeader.next();

      if(code.length) {
        if(code.get(0).nodeName.toLowerCase() == 'p') {
          code = code.next();
        }

        ret[headers[i].name] = {
          element: code,
          code   : code.children().text()
        };
      }
    }
    
    return ret;
  }, good = eval; //>;)
  
  $('h2').each(function() {
    var codeHeaders = $(this).nextUntil('h2').filter('h3'),
        codes       = extractCodeSegments(codeHeaders),
        header      = $('head');

    if(codes.js && codes.html) {
      if(codes.css) {
        header.append('<style type="text/css">' + codes.css.code + '</style>');
      }
      
      $('<div/>', {
        'class': 'demo',
        html: codes.html.code
      }).insertAfter(codes.js.element);

      good(codes.js.code);
    }
  });
});