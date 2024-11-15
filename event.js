// const val=document.getElementById("num1").value.map
// const val=document.getElementById("num2").value
  function sum(){
    const val1=document.getElementById("num1").value
    const val2=document.getElementById("num2").value

    const result = parseFloat(val1) + parseFloat(val2);
    const resField =document.getElementById("res");
    resField.innerText=result;
    
    
  }

  function mul(){
    const val1=document.getElementById("num1").value
    const val2=document.getElementById("num2").value

    const result = parseFloat(val1) * parseFloat(val2);
    const resField =document.getElementById("res");
    resField.innerText=result;
  }
  function sub(){
    const val1=document.getElementById("num1").value
    const val2=document.getElementById("num2").value

    const result = parseFloat(val1) - parseFloat(val2);
    const resField =document.getElementById("res");
    resField.innerText=result;
  }
  function div(){
    const val1=document.getElementById("num1").value
    const val2=document.getElementById("num2").value

    const result = parseFloat(val1) / parseFloat(val2);
    const resField =document.getElementById("res");
    resField.innerText=result;
  }
  