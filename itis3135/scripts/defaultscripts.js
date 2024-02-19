const date = document.getElementById('datetime');
date.innerHTML= "Date : "+ Date();
function userGreeting(){
    let name = document.getElementById('usersName').value;
    let mood = document.getElementById('usersFeeling').value;
   let response;
   if(isNaN(name) === true ){
      response= "PointyJabbySabers welcomes you, "+name+"! We're glad you are doing "+ mood+"!";
   }
   else{
    response="Invalid inputs";
   }
   document.getElementById('firstresponse').innerText = response;
}
function printFavNum() {
    let sides = ["no", "henagon", "digon", "trigon", "tetragon", "pentagon",
        "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    let num = document.getElementById('favNum').value;
    let response;
    if (isNaN(x) || x > 10) {
        response = "invalid input bro."
    } else {
        response = "The name of the polygon with " + num + " sides is: " + sides[num];
    }
    alert(response);
}
function jackaltrain(){
    let j = document.getElementById('trained').value;
    if(j ==="No"){
        response= "I don't know there have been crazier pets just watch How to Train a Jackal.";
    }else{
        response= "Thank you!! Jackals aren't that bad.";
    }
    document.getElementById('jackalresponse').innerText= response;
}
function randomColor(){
    const color = ["Red (Sith)", "Green (Jedi)", 
    "Blue (Jedi) ", "Purple (Jedi/Sith)","Yellow (Rise of Skywalker)", "Black (Mandalorian)"];
    let response= color[getRandomInt(5)];
    alert(response);
    document.getElementById('Colorresponse').value = response;
}
function planetName(){
    let planet= document.getElementById('planetName').value;
    let response;
    if(isNaN(planet)){
        response= "Planet "+ planet+ ", is the new name you chose for its inhabitants!!";
    }else{
        response="Preferred planet name people can say";
    }
    alert(response);
    document.getElementById('planetresponse').value = response;
}
function saberMasters(){
    const color = ["Yoda (Jedi)","Obi-Wan (Jedi)", "Mace Windu (Jedi) ", "Chancellor Palpatine (Sith)"
    ,"Count Dooku (Sith)","General Grievous (Sith)","Anakin Skywalker (Jedi/Sith)"];
    let x = getRandomInt(6);
    let response= color[x];
    if (x<3){
        alert(response + ", a great Jedi Master who can be seen during the Clone Wars.");
    }
    if (x>=3 && x < 6){
       alert(response + ", a Sith who means to use their sabers for destruction.");
    }
    else{
        alert(response +", the chosen one himself who turned against the Jedi Order.");
    }
}