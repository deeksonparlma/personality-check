var name=prompt("Enter your names?");
alert("Welcome"+" "+name+".You'll know your personality after you answer some simple questions in this session.Use one word answers and they SHOULD be in small letters.Click 'OK' to continue");
var user=name;
function personality(){
  var animal=prompt("Do you prefer getting a dog or a cat");
  var type=prompt("Are you an introvert or an extrovert");
  var birds=prompt("Which bird do you like? dove or eagle?")
  var anim=animal.toLowerCase();
  var trait=type.toLowerCase();
  var bird= birds.toLowerCase();
  if(animal=="dog" && type==="introvert" && birds==="dove"){
     alert(name+" "+"Your personality is at 60%");
  }
  else if(animal==="dog" && type==="introvert" && bird==="eagle"){
     alert(name+" "+"Your personality is at 65%");
  }
  else if(animal==="dog" && type==="extrovert" && bird==="dove"){
     alert(name+" "+"Your personality is at 79%");
  }
  else if(animal==="dog" && type==="extrovert" && bird==="eagle"){
     alert(name+" "+"Your personality is at 62%");
  }
  else if(animal==="cat" && type==="introvert" && bird==="eagle"){
     alert(name+" "+"Your personality is at 74%");
  }
  else if(animal==="cat" && type==="introvert" && bird==="dove"){
     alert(name+" "+"Your personality is 73%");
   }
  else if(animal==="cat" && type==="extrovert" && bird==="eagle"){
        alert(name+" "+"Your personality is 79%");
  }
  else if(animal==="cat" && type==="extrovert" && bird==="dove"){
        alert(name+" "+"Your personality is 75%");
  }
  else {
    alert("Details not captured,check your answers.Observe small letters");
  }
  document.getElementById("animal").innerHTML=anim;
  document.getElementById("type").innerHTML=trait;
  document.getElementById("us").innerHTML=user;
  document.getElementById("user").innerHTML=user;
  document.getElementById("bird").innerHTML=bird;
}
