window.addEventListener("resize", handleResize);

function handleResize() {
    var c = document.getElementById("myCanvas");
    c.width = window.innerWidth-2;
    var ctx = c.getContext("2d");
    
    // Create gradient
    var grd = ctx.createLinearGradient(0,0,window.innerWidth/2,window.innerWidth/2);
    grd.addColorStop(0,"#00e1ff");   
    grd.addColorStop(1,"#ff992f");
    
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,window.innerWidth,window.innerWidth);
    
    /* Text in canvas */
    var canvas = document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    if (window.innerWidth < 270) {
        ctx.font="10px Perpetua";
    } else if (window.innerWidth < 360) {
        ctx.font="15px Perpetua";
    } else if (window.innerWidth < 532) {
        ctx.font="20px Perpetua";
    } else {
        ctx.font="30px Perpetua";
    }
    
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Make your stay a wonderful stay at Floripa", canvas.width/2, canvas.height/2);
}

handleResize();
