difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initiated!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX +"rightWrist = " + rightWristX + "difference = " + difference);

    }
}

function draw() {
    background('#FF00FF')

    document.getElementById("text_side").innerHTML = "Width and Height of a text will be = " + difference + "px";
    textSize(difference);
    fill('#00FFFF');
    text('Siya', 50, 400);
}
