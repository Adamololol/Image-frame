function preload(){

}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}
function draw() {
    image(video, 0, 0, 440, 280);

    circle(580, 59, 70);
    circle(580, 460, 70);
    circle(60, 460, 70);
    circle(60, 59, 70);

    fill(255, 13, 0);
    stroke(255, 13, 0);

    rect(63, 27, 500, 25)
    rect(63, 450, 500, 25)
    rect(575, 50, 25, 475)
    rect(60, 50, 25, 475)

}
function take_snapshot(){
    save('student_name.png')
}
