function getEvents() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "data/events.txt", false);
    xmlhttp.send();
    document.getElementById("events").innerHTML = xmlhttp.responseText;
}