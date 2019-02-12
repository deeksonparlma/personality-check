var name=prompt("Enter your names?");
alert("Welcome"+" "+name+".You'll know your personality after you answer some simple questions in this session.Use one word answers and they SHOULD be in small letters.Click 'OK' to continue");
var user=name;
function personality(){
  var animal=prompt("Do you prefer getting a dog or a cat");
  var type=prompt("Are you an introvert or an extrovert");
  var anim=animal;
  var trait=type;
  if(animal=="dog" && type==="introvert"){
     alert(name+" "+"Your personality is at 60%");
  }
  else if(animal==="dog" && type==="extrovert"){
     alert(name+" "+"Your personality is at 80%");
  }
  else if(animal==="cat" && type==="introvert"){
     alert(name+" "+"Your personality is at 94%");
  }
  else if(animal==="cat" && type==="extrovert"){
     alert(name+" "+"Your personality is 75%");
  }
  else {
    alert("Details not captured,check your answers.Observe small letters");
  }
  document.getElementById("animal").innerHTML=anim;
  document.getElementById("type").innerHTML=trait;
  document.getElementById("user").innerHTML=user;
  document.getElementById("us").innerHTML=user;
}
