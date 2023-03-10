(function(window, document) {
  var menu = document.getElementById("menu"),
    menuLink = document.getElementById("menuLink"),
    layout = document.getElementById("layout"),
    content = document.getElementById("content");

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      length = classes.length,
      i = 0;

    for (; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(" ");
  }

  function toggleAll(e) {
    var active = "active";

    e.preventDefault();
    toggleClass(menu, active);
    toggleClass(menuLink, active);
    toggleClass(layout, active);
  }

  menuLink.onclick = function(e) {
    toggleAll(e);
  };

  content.onclick = function(e) {
    if (menu.className.indexOf("active") !== -1) {
      toggleAll(e);
    }
  };
})(this, this.document);
