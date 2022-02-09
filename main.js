function preload() {}
var tint_color = "";

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(435, 290);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    tint(tint_color);
    image(video, 0, 0, 640, 480);
    fill(0, 112, 192);
    stroke(0, 112, 192);
    rect(50, 40, 500, 20)
    rect(50, 420, 550, 20)
    rect(40, 30, 20, 380)
    rect(580, 30, 20, 380)
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    circle(590, 50, 80);
    circle(50, 430, 80);
    circle(590, 430, 80);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = String(document.getElementById("color_name").value);
    console.log(tint_color);
}