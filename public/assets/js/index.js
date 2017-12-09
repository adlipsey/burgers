$(document).ready(function(){

	$("#burgerList").on("click", ".devour", function(event) {
    var id = $(this).data("id");

    var colsEqualsVals ={data: ["devoured", 1, "date", new Date().toLocaleDateString()]};

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: colsEqualsVals
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".newBurger").on("submit", function(event) {
    console.log("click event working");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#newBurger").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});