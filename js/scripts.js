$(document).ready(function() {
  $("form#information").submit(function(event) {
    var age = parseInt($("input#age").val());
    var allergies = $("select#allergies").val();
    var activity = $("select#activity").val();
