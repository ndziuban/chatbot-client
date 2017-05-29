'use strict';

var self = {};

self.company = {};

function initCompany(data) {
  self.company = data;
}

function companyFirstGreeting() {
  return self.company.greetingMsg;
}
