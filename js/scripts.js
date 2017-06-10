$(document).ready(function() {
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
          $("#amsterdam").show();
          $("#alaska").hide();
        } else if (travelerDemo === 'kids' && destination === 'active') {
          $("#ireland").hide();
          $("#tahiti").hide();
          $("#amsterdam").hide();
          $("#alaska").show();
        } else if (travelerDemo === 'kids') {
          $("#ireland").show();
          $("#tahiti").hide();
          $("#amsterdam").hide();
          $("#alaska").hide();
        } else if (travelerDemo === 'freebird' || travelerDemo === 'friend') {
          $("#ireland").hide();
          $("#tahiti").hide();
          $("#amsterdam").show();
          $("#alaska").hide();
        } else {
          $("#ireland").hide();
          $("#tahiti").hide();
          $("#amsterdam").show();
          $("#alaska").hide();
        }
    console.log(travelerDemo);

        event.preventDefault();
      });
    });
