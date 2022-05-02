$(".txtb").on("keyup", function (e) {
  //13 means enter button
  if (e.keyCode == 13 && $(".txtb").val() != "") {
    const task = $("<div class='task'></div>").text($(".txtb").val());
    const del = $("<i class='fas fa-trash-alt'></i>").click(function () {
      const p = $(this).parent();
      p.fadeOut(function () {
        p.remove();
      });
    });
    const check = $("<i class='fas fa-check'></i>").click(function () {
      const p = $(this).parent();
      p.fadeOut(function () {
        $(".comp").append(p);
        p.fadeIn();
      });
      $(this).remove();
    });
    task.append(del, check);
    $(".notcomp").append(task);
    //To clear the input
    $(".txtb").val("");
  }
});
