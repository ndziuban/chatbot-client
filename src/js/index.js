'use strict';

function initBot() {
  console.log("First ajax!")
  $.ajax({
    type: "GET",
    url: 'https://www.lutionbot.com/api/company/tan%20intensa',
    success: function(data) {
      console.log('Respuesta: ', data);
      initCompany(data);
      $(".chat-window").removeClass("dont-show");
      $(".chat-box").append('<br><span class="chat-line">'+companyFirstGreeting()+'</span>');
    },
    error: function(err) {

      console.log('ERROR EN FIRST AJAX 1234', err);

    }
  });
}

function chooseSearchType() {
  var company = new Company();
  $(".chat-box").append('<br><span class="chat-line">'+company.getText()+'</span>');
}
