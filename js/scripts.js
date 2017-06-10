$(document).ready(function() {
  $("form#user-prefs").submit(function(event) {
    var userName = parseInt($("input#userName").val());
    var travelerAges = $("select#travelerAges").val();
    var destination = $("select#destination").val();
    var location = $("select#location").val();
    var weather = $("select#weather").val();
    var pace = $("select#pace").val();
    var accomodation = $("select#accomodation").val();

    if (age < 18 && allergies === 'yes' && activity === 'high') {
          $("#doodle").show();
          $("#pug").hide();
          $("#lab").hide();
        } else if (age >= 18 && allergies === 'no' && activity === 'high') {
          $("#lab").show();
          $("#doodle").hide();
          $("#pug").hide();
        } else if (age >= 18 && allergies === 'yes') {
          $("#lab").hide();
          $("#doodle").show();
          $("#pug").hide();
        } else {
          $("#pug").show();
          $("#lab").hide();
          $("#doodle").hide();
        }
    console.log("name: " + userName);
    console.log(travelerAges);
    console.log(destination);
        event.preventDefault();
      });
    });
