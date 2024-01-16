const button = document.querySelector(".btn"); 
const inputOne = document.getElementById("input-1")
const inputTwo = document.getElementById("input-2"); 
const wrap = document.querySelector(".wrap"); 
const display = document.createElement("h3");
wrap.append(display); 
let delay; 
const debounceSumCalculate = function()
{
  clearTimeout(delay); 
  delay = setTimeout(sumCalculate,1000); 
}

async function sumCalculate()
{
  if(inputOne.value==="" || inputTwo.value==="")
  {
     display.textContent="Please input two numbers"; 
  }
  else 
  {
    // const result = +(inputOne.value) + +(inputTwo.value); 
    const valOne = inputOne.value; 
    const valTwo = inputTwo.value; 
    try{
    const result = await fetch(`http://localhost:3000/sum?a=${valOne}&b=${valTwo}`);
    display.textContent=await result.text(); 
    }
    catch(err)
    {
      console.log("Failed to fetch");
    }
  }
}
inputOne.addEventListener("input",debounceSumCalculate); 
inputTwo.addEventListener("input",debounceSumCalculate); 