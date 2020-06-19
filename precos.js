function process(quant){
    var value = parseInt(document.getElementById("quant").value);
    value+=quant;
    if(value < 1){
	  document.getElementById("quant").value = 0;}
	  else{
	  document.getElementById("quant").value = value;
	  
    }
  }