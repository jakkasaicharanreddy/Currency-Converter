const BASE_URL =
  "https://api.fastforex.io/fetch-all?api_key=c5420ff20c-dda9aab811-swlkg1";
let dropdowns = document.querySelectorAll("select");
let btn = document.querySelector("#btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
let msg =document.querySelector("#msg");




for(let select of dropdowns){
   for(countryCurr in countryList){
        let newOption = document.createElement("Option");
        newOption.value=countryCurr;
        newOption.innerText=countryCurr;
        select.append(newOption);
   }

   select.addEventListener("change",(event)=>{
    updateFlag(event.target);
   })
}

const updateFlag=(element)=>{
    currCode = element.value;
    country = countryList[currCode];
    let img = element.parentElement.querySelector("img");
    let newsrc =   `https://flagsapi.com/${country}/flat/64.png`;
    img.src = newsrc;
    // console.log(element.value,country,img.src);

}

btn.addEventListener("click",async ()=>{
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    
    // console.log(amountVal);
    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(BASE_URL);
    console.log(response);
    const data = await response.json();
    console.log(data.results)
    console.log(data.results[toCurr.value]);

    let finalAmount = data.results[toCurr.value] * amountVal

    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`

})
