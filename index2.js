
const changebutton= document.getElementById('button');
const hex= document.querySelector(".hex");
const hexValue= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

changebutton.addEventListener('click',()=>{
  let hexSymble='#'
  for(let i=0;i<6;i++){
    hexSymble += hexValue[getRandomNumber()]
    }
    hex.textContent=hexSymble
    document.body.style.background=hexSymble
});
const getRandomNumber=()=>{
  return Math.floor(Math.random()*hexValue.length)
}
