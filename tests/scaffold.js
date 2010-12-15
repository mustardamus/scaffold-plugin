$(document).ready(function() {
  var body = $('body');
  
  $.each([
    { tag: 'h2',  html: 'Scaffold Test' },
    { tag: 'h3',  html: 'Your HTML' },
    { tag: 'pre', html: '<code>&lt;div id="scaffold-test"&gt;&lt;/div&gt;</code>' },
    { tag: 'h3',  html: 'Your Javascript' },
    { tag: 'pre', html: '<code>$("body").data("works", true);</code>' },
    { tag: 'h3',  html: 'Your CSS' },
    { tag: 'pre', html: '<code>body { z-index: 999; }</code>' }
  ], function(index, el) {
    $('<' + el.tag +'/>', { html: el.html }).hide().appendTo(body);
  });
  
  module('Scaffold Tests');
  
  test('Generates and execute Javascript', function() {
    equals(body.data('works'), true, 'Body has "works" data.');
  });
  
  test('Generates the HTML', function() {
    equals($('#scaffold-test').length, 1, 'Has #scaffold-test DIV.');
  });
  
  test('Apply the CSS', function() {
    equals(body.css('z-index'), 999, 'Body has a z-index of 999');
  });
});