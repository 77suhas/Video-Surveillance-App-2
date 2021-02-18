video = ""
status = ""
function preload() {
  video = createVideo('video.mp4')
  video.size(400, 400)
  video.hide()
}
function setup() {
  canvas = createCanvas(400, 400)
  canvas.center()
}
function draw() {
  image(video, 0, 0, 400, 400)
}
function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded)
  document.getElementById("status").innerHTML = "Status: Detecting objects"
}
function modelLoaded() {
  console.log("model is loaded")
  status = true
  video.loop()
  video.speed(1)
  video.volume(0)
}