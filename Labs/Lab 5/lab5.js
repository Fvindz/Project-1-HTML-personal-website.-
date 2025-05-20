function changeWcolor(color) {
    document.body.style.backgroundColor = color;
  }
  
  function changeHeadercolor(color) {
    document.getElementById('site-header').style.color = color;
  }
  
  function changeNavcolor(color) {
    document.getElementById('mainnav').style.color = color;
  }
  
  function changeMaincolor(color) {
    document.getElementById('site-main').style.color = color;
  }
  
  function changeFootercolor(color) {
    document.getElementById('site-footer').style.color = color;
  }
  
  function changeTheme() {
    var season = document.getElementById("season").value;
  
    if (season === "spring") {
      changeWcolor("#e6ffe6");
      changeHeadercolor("#cc3366");
      changeNavcolor("#cc3366");
      changeMaincolor("#336600");
      changeFootercolor("#cc3366");
  
    } else if (season === "summer") {
      changeWcolor("#fffacd");
      changeHeadercolor("#ff8c00");
      changeNavcolor("#1e90ff");
      changeMaincolor("#ff4500");
      changeFootercolor("#1e90ff");
  
    } else if (season === "fall") {
      changeWcolor("#fff0e1");
      changeHeadercolor("#8b4513");
      changeNavcolor("#b22222");
      changeMaincolor("#a0522d");
      changeFootercolor("#b22222");
  
    } else if (season === "winter") {
      changeWcolor("#e6f0ff");
      changeHeadercolor("#4682b4");
      changeNavcolor("#5f9ea0");
      changeMaincolor("#708090");
      changeFootercolor("#5f9ea0");
  
    } else {
      changeWcolor("white");
      changeHeadercolor("black");
      changeNavcolor("blue");
      changeMaincolor("black");
      changeFootercolor("black");
    }
  }
  