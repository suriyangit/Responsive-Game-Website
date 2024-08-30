
function menu(){
  let m=document.querySelector(".side-navbar");
  m.style.left="0";
}


document.querySelector("#close-btn").addEventListener("click",()=>{
  let c=document.querySelector(".side-navbar");
  c.style.left="-60%";
})


let s=document.querySelector(".soon");
s.addEventListener("click",()=>{
  let image1=document.getElementById("gi1");
  image1.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/dragon-age-the-veilguard-packshot-01-en-01july24")
  let image2=document.getElementById("gi2");
  image2.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/the-plucky-squire-store-artwork-02-en-18jan23")
  let image3=document.getElementById("gi3");
  image3.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/sonic-x-shadow-generations-packshot-01-en-11june24")
  let image4=document.getElementById("gi4");
  image4.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/monster-hunter-wilds-packshot-01-en-15may24")
  let image5=document.getElementById("gi5");
  image5.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/silent-hill-2-pack-01-en-14nov22")
  let image6=document.getElementById("gi6");
  image6.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/death-stranding-2-packshot-01-en-22jan24")
  let image7=document.getElementById("gi7");
  image7.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/until-dawn-packshot-01-en-22jan24")
  let image8=document.getElementById("gi8");
  image8.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/astro-bot-store-art-01-en-04jul24")
  let image9=document.getElementById("gi9");
  image9.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/horizon-adventures-keyart-01-en-17may24")
  let image10=document.getElementById("gi10");
  image10.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-black-ops-6-keyart-01-en-21may24")
  let image11=document.getElementById("gi11");
  image11.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-shadows-packshot-01-en-08may24")
  let image12=document.getElementById("gi12");
  image12.setAttribute("src","https://gmedia.playstation.com/is/image/SIEPDC/star-wars-outlaws-store-artwork-03-en-18jan23")
})


let load=document.querySelector(".new-btn");
load.addEventListener("click",()=>{
  location.reload();
})