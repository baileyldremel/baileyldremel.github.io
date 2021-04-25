
//A lot of the javascript is just changing the source of an image, which is what was most important to me anyway.


//Hovering over the home image.
  //Changes the home page image to a gif of a blinking icon.
    function mouseOverHome() {
      document.getElementById("homeImage").src = "/Images/bldMarkGif.gif";
    }
  //Changes it back to the default SVG when not hovering over the icon.
    function mouseOutHome(){
      document.getElementById("homeImage").src = "/Images/bldMark.svg";
    }

//Hovering over a link on the work page.
  //For 'Over the Rainbow - Intersect'
    function mouseOverOtR() {
      document.getElementById("image").src = "Images/Otr.png";
    }

  //For 'Playfully Rigid'
    function mouseOverPlR() {
      document.getElementById("image").src = "Images/Playfully.png";
    }

  //For 'PlusArts presents - EmergenceFest'
    function mouseOverPAE() {
      document.getElementById("image").src = "Images/Emerg.png";
    }

  //For 'Futura Type Sampler'
    function mouseOverFuT() {
      document.getElementById("image").src = "Images/Futura.png";
    }

  //For 'Allied Mental Health'
    function mouseOverAMH() {
      document.getElementById("image").src = "Images/Allied.png";
    }

  //When you hover out of a link.
    function mouseOut() {
      document.getElementById("image").src = "Images/bldMark.svg";
    }
