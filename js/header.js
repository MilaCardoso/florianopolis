function openNav() {
    document.getElementById("menu").style.width = "250px";
    document.getElementsByClassName("backdrop")[0].style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("menu").style.width = null;
    document.getElementsByClassName("backdrop")[0].style.display =null;
  }