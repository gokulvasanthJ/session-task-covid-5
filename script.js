var div=document.createElement("div")
div.id=("div-container")
div.style.width="100%"
div.style.height="100vh"



var input=document.createElement("input")
input.setAttribute("type","text")
input.style.width="30%";
input.id="countryname"



var button=document.createElement("button")
button.setAttribute("type","button")
button.innerHTML="Click Me";
button.style.margin="5px";
button.addEventListener("click",getdata);

var active=document.createElement("div")
active.style.fontFamily="Arial"
active.style.fontsize="20px"


div.append(input,button,active);
document.body.append(div);


async function getdata(){
    let res=document.getElementById("countryname").value;
    console.log(res);

    try{
        let res1=await fetch(`https://api.covid19api.com/total/dayone/country/${res}`);
        let res2=await res1.json();
        console.log(res2);
        index=res2.length-1;
        console.log(`Active:$a{res2[index].Active}`);
        console.log(`Deaths:${res2[index].Deaths}`);
        console.log(`Recovered:${res2[index].Recovered}`);
        active.innerHTML=` Active:${res2[index].Active}<br>
          Deaths:${res2[index].Deaths}<br>
         Recovered:${res2[index].Recovered}`;
    }catch(err){
        console.log(err);

    }
 
    }

