$(document).ready(() => {
  //   $("img").animate({ left: "600px" }, 5000, function () {});
  // });

  // mover imagen
  var posicionX = 0;
  var posicionY = 0;

  $("#arriba").on("click", function () {
    posicionX = posicionX - 50;
    $("img").animate({ top: posicionX + "px" }, 1000, function () {});
  });
  $("#abajo").on("click", function () {
    posicionX = posicionX + 50;
    $("img").animate({ top: posicionX + "px" }, 1000, function () {});
  });
  $("#derecha").on("click", function () {
    posicionY = posicionY + 50;
    $("img").animate({ left: posicionY + "px" }, 1000, function () {});
  });
  $("#izquierda").on("click", function () {
    posicionY = posicionY - 50;
    $("img").animate({ left: posicionY + "px" }, 1000, function () {});
  });

  // Invisibilidad

  $("#aparece").on("click", function () {
    $("img").show();
  });

  $("#desaparece").on("click", function () {
    $("img").hide();
  });

  //tamaños

  $("#normal").click(function () {
    if ($("img").width() != 150) {
      $("img").width(150 + "px");
    } else {
      alert(
        "tu nave esta en su tamaño normal: " + $("img").width() + " pixels"
      );
    }
  });

  $("#ampliar").click(function () {
    if ($("img").width() <= 400) {
      $("img").width($("img").width() + 50 + "px");
    } else {
      alert(
        "Tu nave alcanzo su tamaño maximo: " + $("img").width() + " pixels"
      );
    }
  });

  $("#reducir").click(function () {
    if ($("img").width() >= 100) {
      $("img").width($("img").width() - 50 + "px");
    } else {
      alert(
        "Tu nave se redujo a su tamaño minimo: " + $("img").width() + " pixels"
      );
    }
  });
});
