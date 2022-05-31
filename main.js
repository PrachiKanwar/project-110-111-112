//https://teachablemachine.withgoogle.com/models/rv4YH3WXR/
prediction_1=""
prediction_2=""
Webcam.set({
    width:350,
    height:300,
image_format:"png",
png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach(camera)
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="catured_image" src="'+data_uri+'">'
    })
}
console.log("ml5 version: ",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rv4YH3WXR/model.json",modelloaded)
function modelloaded(){
    console.log("model is loaded")
}
function speak(){
    var synth=window.speechSynthesis
    speakdata1="the first prediction is "+prediction_1
    speakdata2="and the second prediction is "+prediction_2
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis)
}