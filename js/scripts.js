$(document).ready(function() {
  $("form#user-prefs").submit(function(event) {
    var pace = parseInt($("input#age").val());
    var destination = $("select#allergies").val();
    var activity = $("select#activity").val();

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
    console.log(activity);
    console.log(allergies);
    console.log(age);
        event.preventDefault();
      });
    });
