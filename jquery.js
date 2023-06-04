function setLightTheme() {
  $(".navbar.navbar-expand-lg.navbar-light").addClass("bg-light"); // Adds 'bg-light' class to the navbar element with specified class names
  $("#title1").css({ color: "black" }); // Sets the text color of an element with id 'title1' to black
  $("body").css({
    background:
      "linear-gradient(to right, rgb(34, 190, 195), rgba(253, 187, 45, 1))",
  }); // Sets the background of the body element to a linear gradient
  $(".digit").css({ color: "white" }); // Sets the text color of elements with class 'digit' to white
  $("#light").prop("checked", false); // Unchecks the element with id 'light'
}

function setDarkTheme() {
  $(".navbar.navbar-expand-lg.navbar-light").removeClass("bg-light"); // Removes 'bg-light' class from the navbar element with specified class names
  $(".navbar.navbar-expand-lg.navbar-light").css({
    "background-color": "black",
  }); // Sets the background color of the navbar element to black
  $("#title1").css({ color: "black" }); // Sets the text color of an element with id 'title1' to black
  $("body").css({ background: "#191212" }); // Sets the background of the body element to a specific color
  $(".digit").css({ color: "rgb(216 137 31)" }); // Sets the text color of elements with class 'digit' to a specific color
  $(".buttons").css({ "border-color": "white" }); // Sets the border color of elements with class 'buttons' to white
  $("#light").prop("checked", true); // Checks the element with id 'light'
}

var prefersDarkThemeMql = window.matchMedia("(prefers-color-scheme: dark)"); // Matches the user's preferred color scheme

prefersDarkThemeMql.addEventListener("change", function (mql) {
  if (localStorage.getItem("darkmode") === null && mql.matches) {
    setDarkTheme(); // If no preference is stored and user prefers dark theme, apply the dark theme
  } else {
    setLightTheme(); // Otherwise, apply the light theme
  }
});

$(document).ready(function () {
  if (
    localStorage.getItem("darkmode") == "true" ||
    (localStorage.getItem("darkmode") === null && prefersDarkThemeMql.matches)
  ) {
    setDarkTheme(); // If dark mode preference is stored as true or no preference is stored and user prefers dark theme, apply the dark theme
  }

  $("#light").on("change paste keyup", function (e) {
    if (!e.target.checked) {
      setLightTheme(); // If the element with id 'light' is unchecked, apply the light theme
      localStorage.setItem("darkmode", false); // Store the dark mode preference as false
    } else {
      setDarkTheme(); // If the element with id 'light' is checked, apply the dark theme
      localStorage.setItem("darkmode", true); // Store the dark mode preference as true
    }
  });
});
