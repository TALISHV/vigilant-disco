
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/muyp3w-26/', modelReady);

}

function  modelReady(){
    classifier.classify(gotResults);
}