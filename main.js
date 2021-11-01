function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6JBuX1EHu/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
function gotResults(error, results){
    if(error){
        console.error("error");
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255)+1;
        random_number_g = Math.floor(Math.random() * 255)+1;
        random_number_b = Math.floor(Math.random() * 255)+1;
        document.getElementById("animal_shown_label").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
        document.getElementById("sound_label").innerHTML = "Detected voice is of - "+results[0].label;
        document.getElementById("animal_shown_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("sound_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        if (results[0].label == "Barking") {
            image.src = 'https://shravaripatil.github.io/Sound_controlled_animals/bark.gif';
            dog = dog+1;
          } else if (results[0].label == "Meowing") {
            image.src = 'https://shravaripatil.github.io/Sound_controlled_animals/meow.gif';
            cat = cat + 1;
          } else{
            image.src = 'https://shravaripatil.github.io/Sound_controlled_animals/listen.gif';
          }
    }
}