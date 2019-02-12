var name=prompt("What's your name?");
alert("Welcome"+" "+name+".You'll know your personality after you answer some simple questions in this session.Use one word answers and they SHOULD Click 'OK' to continue");
function personality(){
  var animal=prompt("Do you prefer getting a dog or a cat");
  var type=prompt("Are you an introvert or an extrovert");
  if(animal=="dog" && type==="introvert"){
     alert(name+" "+"Your personality is at 40%");
  }
  else if(animal==="dog" && type==="introvert"){
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
}
