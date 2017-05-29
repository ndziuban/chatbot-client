'use strict';
// const Company = require('company');

exports.test = function() {
  console.log("First ajax!")
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    headers: {"Access-Control-Allow-Origin": "*"},
    url: 'http://www.lutionbot.com/api/company/tan%20intensa?company=true&searchUrl=true&startConfig=true&greetingMsg=true',
    success: function(data) {
      console.log('Respuesta: ', JSON.stringify(data));
      // $('#respuesta').text(JSON.stringify(data, null, 2));
    },
    error: function() {
      console.log('ERROR EN FIRST AJAX');

    }
  });
}

expots.test2 = function() {
  var company = new Company();
  $(".chat-box").append('<br><span class="chat-line">'+company.getText()+'</span>');
}
