song="";
song1="";

scoreRWRIST=0;
scoreLWRIST=0;

LWRISTx=0;
LWRISTy=0;

RWRISTx=0;
RWRISTy=0;

function preload(){
    song=loadSound("./Marshmello - Alone (Lyrics).mp3");
    song1=loadSound("./Marshmello - Stars (Official Music Video).mp3");
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.position(350,210);
    camera=createCapture(VIDEO);
    camera.hide();
    posenet=ml5.poseNet(camera,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    alert("THE SUPER DJ HAS COME");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        LWRISTx=results[0].pose.leftWrist.x;
        RWRISTx=results[0].pose.rightWrist.x;
        LWRISTy=results[0].pose.leftWrist.y;
        RWRISTy=results[0].pose.rightWrist.y;
        scoreLWRIST=results[0].pose.keypoints[9].score;
        scoreRWRIST=results[0].pose.keypoints[10].score;
    }else{
        alert("MONSTER ERROR OCCOURED");
    }
   
}
function draw(){
    image(camera,0,0,600,400);
    if(song.isPlaying()){
        if(scoreRWRIST>0){
            fill('red');
            stroke('red');
            circle(RWRISTx,RWRISTy,20);
            if(RWRISTy>0 && RWRISTy<100){
                song.rate(0.5);
                document.getElementById("speed").innerHTML="SPEED : 0.5 X";
            }
            if(RWRISTy>=100 && RWRISTy<200){
                song.rate(1);
                document.getElementById("speed").innerHTML="SPEED : 1 X";
            }
            if(RWRISTy>=200 && RWRISTy<300){
                song.rate(1.5);
                document.getElementById("speed").innerHTML="SPEED : 1.5 X";
            }
            if(RWRISTy>=300 && RWRISTy<400){
                song.rate(2);
                document.getElementById("speed").innerHTML="SPEED : 2 X";
            }
            if( RWRISTy>400){
                song.rate(2.5);
                document.getElementById("speed").innerHTML="SPEED : 2.5 X";
            }
        }
        if(scoreLWRIST>0){
            fill('red');
            stroke('red');
            circle(LWRISTx,LWRISTy,20);
            var noLry=Number(LWRISTy);
            var remLry=floor(noLry);
            volume=remLry/500;
            song.setVolume(volume);
            $("#volume").html("VOLUME :"+volume);
        }
    }
    else if(song1.isPlaying()){
        if(scoreRWRIST>0){
            fill('red');
            stroke('red');
            circle(RWRISTx,RWRISTy,20);
            if(RWRISTy>0 && RWRISTy<100){
                song1.rate(0.5);
                document.getElementById("speed").innerHTML="SPEED : 0.5 X";
            }
            if(RWRISTy>=100 && RWRISTy<200){
                song1.rate(1);
                document.getElementById("speed").innerHTML="SPEED : 1 X";
            }
            if(RWRISTy>=200 && RWRISTy<300){
                song1.rate(1.5);
                document.getElementById("speed").innerHTML="SPEED : 1.5 X";
            }
            if(RWRISTy>=300 && RWRISTy<400){
                song1.rate(2);
                document.getElementById("speed").innerHTML="SPEED : 2 X";
            }
            if( RWRISTy>400){
                song1.rate(2.5);
                document.getElementById("speed").innerHTML="SPEED : 2.5 X";
            }
        }
        if(scoreLWRIST>0){
            fill('red');
            stroke('red');
            circle(LWRISTx,LWRISTy,20);
            var noLry=Number(LWRISTy);
            var remLry=floor(noLry);
            volume=remLry/500;
            song1.setVolume(volume);
            $("#volume").html("VOLUME :"+volume);
        }
    }
    


}
function play(){
    song.stop();
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function stop(){
    song.stop();
    song1.stop();
}
function changeSong(){
    if(song.isPlaying()){
        song.stop();
        song1.play();
    }
    else if(song1.isPlaying()){
        song1.stop();
        song.play();
    }
}