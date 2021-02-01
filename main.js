// Change the border color of the form when submit if the field is empty

// $("#mySelectBox");
//$(".confirmation").hide();

console.log($("button"));

$("button").on("click", (e) => {
  e.preventDefault();
  let selectOk = 0;
  let textareaOk = 0;
  $("#mySelectBox").removeClass("empty");
  $("#myTextarea").removeClass("empty");

  console.log($("#mySelectBox").val());
  console.log($("#myTextarea").val());
  console.log($("#myTextarea").val().length);

  if ($("#mySelectBox").val() === "") {
    $("#mySelectBox").addClass("empty");
  } else {
    selectOk = 1;
  }

  if ($("#myTextarea").val().length < 15) {
    $("#myTextarea").addClass("empty");
  } else {
    textareaOk = 1;
  }

  console.log(selectOk);

  //Bonus point
  if (selectOk && textareaOk) {
    $("form").hide();
    $(".confirmation").show();
  }
});
