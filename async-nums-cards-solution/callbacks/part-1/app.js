let favNumber = 5;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
  console.log(data);
});

// 2.
let favfacts = [];
let favNumbers = [7, 11, 22];
for (n in favNumbers) {
  $.getJSON(`${baseURL}/${n}?json`, function(data) {
    favfacts.push(data.text);
});
}
favfacts.forEach(f => {
  $("body").append(`<p>${f}</p>`);
});


// 3.
let facts = [];
$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
  facts.push(data.text);
  $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
      facts.push(data.text);
      $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
        facts.push(data.text);
        facts.forEach(fact => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});
