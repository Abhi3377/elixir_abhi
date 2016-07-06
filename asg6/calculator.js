
window.onload = function() {
  setvalue = function(arg){
    var audio2 = document.getElementsByClassName("click")[0];
    audio2.play();
    if(arg=='c'){
      document.getElementById('name').value=" ";
    }
    else{
  document.getElementById('name').value+=arg;
}
};
setop = function(op) {
  var audio2 = document.getElementsByClassName("click")[0];
  audio2.play();
operator=op;
number1 = (document.getElementById('name').value*10)/10;
document.getElementById('name').value=" ";
};
answer =function(){
  var audio2 = document.getElementsByClassName("click")[0];
  audio2.play();
  switch (operator) {
    case'*':
     number2=(document.getElementById('name').value*10)/10;
     document.getElementById('name').value=(number1*number2).toFixed(2);
      break;
    case'/':
       number2=(document.getElementById('name').value*10)/10;
       document.getElementById('name').value=(number1/number2).toFixed(2);
        break;
    case'+':
         number2=(document.getElementById('name').value*10)/10;
         document.getElementById('name').value=(number1+number2).toFixed(2);
          break;
    case'-':
           number2=(document.getElementById('name').value*10)/10;
           document.getElementById('name').value=(number1-number2).toFixed(2);
            break;
    default:

  }
};
  };
