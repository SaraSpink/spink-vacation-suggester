$(document).ready(function() {

  $("form#user-prefs").submit(function(event) {
    var userName = $("input#userName").val();
    $(".fillInName").text(userName);

    // $("#userName").show();
  });

  $("form#user-prefs").submit(function(event) {
    var userName = $("input#userName").val();
    var travelerDemo = $("select#travelerDemo").val();
    var destination = $("select#destination").val();
    var location = $("select#location").val();
    var weather = $("select#weather").val();
    var pace = $("select#pace").val();
    var accomodation = $("select#accomodation").val();

    if (travelerDemo === 'kids' && destination === 'cityMuseum') {
          $("#ireland").hide();
          $("#tahiti").hide();
          $("#amsterdam").fadeIn();
          $("#alaska").hide();
        } else if (travelerDemo === 'kids' && destination === 'active') {
          $("#ireland").hide();
          $("#tahiti").hide();
          $("#amsterdam").hide();
          $("#alaska").fadeIn();
        } else if (travelerDemo === 'kids') {
          $("#ireland").fadeIn();
          $("#tahiti").hide();
          $("#amsterdam").hide();
          $("#alaska").hide();
        } else if (weather === 'cool') {
          $("#ireland").hide();
          $("#tahiti").hide();
          $("#amsterdam").hide();
          $("#alaska").fadeIn();
        } else if (destination === 'cityMuseum' && location === 'culinary') {
          $("#ireland").hide();
          $("#tahiti").hide();
          $("#amsterdam").fadeIn();
          $("#alaska").hide();
        } else if (destination === 'cityMuseum' && location === 'sporty') {
          $("#ireland").fadeIn();
          $("#tahiti").hide();
          $("#amsterdam").hide();
          $("#alaska").hide();
        } else if (pace === 'slow' || destination === 'beach' || location === 'secluded') {
          $("#ireland").hide();
          $("#tahiti").fadeIn();
          $("#amsterdam").hide();
          $("#alaska").hide();
        } else if (weather === 'cool' && location === 'secluded') {
          $("#ireland").hide();
          $("#tahiti").hide();
          $("#amsterdam").hide();
          $("#alaska").fadeIn();
        } else if (weather === 'warm' || pace === 'slow') {
          $("#ireland").hide();
          $("#tahiti").fadeIn();
          $("#amsterdam").hide();
          $("#alaska").hide();
        } else if (weather === 'dry') {
          $("#ireland").hide();
          $("#tahiti").hide();
          $("#amsterdam").fadeIn();
          $("#alaska").hide();
        } else if (accomodation === 'luxe') {
          $("#ireland").hide();
          $("#tahiti").fadeIn();
          $("#amsterdam").hide();
          $("#alaska").hide();
        } else {
          $("#ireland").hide();
          $("#tahiti").hide();
          $("#amsterdam").fadeIn();
          $("#alaska").hide();
        }
    console.log(travelerDemo);

        event.preventDefault();
      });
    });
