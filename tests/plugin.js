$(document).ready(function() {
  module('Plugin Tests');
  
  test('Returns a jQuery Object (is chainable)', function() {
    var body = $('body');
    
    equals(typeof body.scaffold().data('chainable', true), 'object', 'Is a Object');
    equals(body.data('chainable'), true, 'Body has "chainable" data.');
  });
});