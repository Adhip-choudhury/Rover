var canvas_my=document.getElementById("myCanvas");
var ctx=canvas_my.getContext("2d");
var rover_width=100;
var rover_height=90;
var rover_x=10;
var rover_y=10;
var NASA_IMG=["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631270305224E03_DXXX.jpg", "mars.jpg"];
var random_number=Math.floor(Math.random()*4);
var background_image=NASA_IMG[random_number];
var rover_image="rover.png";

var background_img;
var rover_img;

function add(){

background_img=new Image();
background_img.onload=upLoadBackground;
background_img.src=background_image;


rover_img=new Image();
rover_img.onload=upLoadRover;
rover_img.src=rover_image;
}
 
function upLoadBackground(){

    ctx.drawImage(background_img, 0, 0, canvas_my.width, canvas_my.height);
}

function upLoadRover(){

    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){

    var key_pressed=e.keyCode;
    console.log(key_pressed);

    if (key_pressed=="37"){

        Left();
        console.log("left");
    }

    if (key_pressed=="38"){

        Up();
        console.log("Up");
    }

    if (key_pressed=="39"){

        Right();
        console.log("Right");
    }

    if (key_pressed=="40"){

        Down();
        console.log("Down");
    }
    
}

function Down(){
if (rover_y<=500){

    rover_y=rover_y+10;
    console.log(rover_x+", "+rover_y);
    upLoadBackground();
    upLoadRover();
}


}



function Up(){
    
    if (rover_y>=10){

        rover_y=rover_y-10;
        console.log(rover_x+", "+rover_y);
        upLoadBackground();
        upLoadRover();
    }
}



function Right(){

    if (rover_x<=690){

        rover_x=rover_x+10;
        console.log(rover_x+", "+rover_y);
        upLoadBackground();
        upLoadRover();
    }

}



function Left(){
    
    if (rover_x>=10){

        rover_x=rover_x-10;
        console.log(rover_x+", "+rover_y);
        upLoadBackground();
        upLoadRover();
    }
}