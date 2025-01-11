$(document).ready(function() {
  var buttonLeft = $("#prjct-btn-lft");
  var buttonRight = $("#prjct-btn-rght");
  var contents = $("main > .sct-bg > .sct > .cntnt-bg > .cntnt > .lst-bg > .lst > .cmpnt-bg");
  var data = ["crsl-prvs", "crsl-slctd", "crsl-nxt"];
  var contentsID = [];

  function findPosition() {
    contentsID = [];

    for (var i=0; i < data.length; i++) {
      for (var e=0; e < contents.length; e++) {
        if (contents.eq(e).hasClass(data[i])) {
          contentsID.push(e);
          break;
        }
      }
    }
  }

  function scroll(position) {
    findPosition();
    
    for (var i=0; i < contentsID.length; i++) {
      if (position == "left" && i === Number(contentsID.length - 1)) {
        contents.eq(contentsID[i]).css("transition", "none");
      }
      else if (position == "right" && i === 0) {
        contents.eq(contentsID[i]).css("transition", "none");
      }

      contents.eq(contentsID[i]).removeClass(data[i]);
    }

    if (position === "left") {
      contents.eq(contentsID[0]).addClass(data[1]);
      contents.eq(contentsID[1]).addClass(data[2]);
      contents.eq(contentsID[2]).addClass(data[0]);
      setTimeout(function () {
        contents.removeAttr("style");
      }, 525);
    }
    else if (position === "right") {
      contents.eq(contentsID[2]).addClass(data[1]);
      contents.eq(contentsID[1]).addClass(data[0]);
      contents.eq(contentsID[0]).addClass(data[2]);
      setTimeout(function () {
        contents.removeAttr("style");
      }, 525);
    }
    
    return;
  }

  buttonLeft.on("click", function() {
    scroll(position="left");
  });

  $("main > .sct-bg > .sct > .cntnt-bg > .cntnt > .lst-bg > .lst > .cmpnt-bg.crsl-prvs").on("click", function(e) {
    e.preventDefault();
    scroll(position="left");
  });

  $("main > .sct-bg > .sct > .cntnt-bg > .cntnt > .lst-bg > .lst > .cmpnt-bg.crsl-nxt").on("click", function(e) {
    e.preventDefault();
    scroll(position="right");
  });

  buttonRight.on("click", function() {
    scroll(position="right");
  });
});