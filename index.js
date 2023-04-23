let color = 'black';
let click =false;
document.addEventListener("DOMContentLoaded", function(){
 createBoard(16)
  document.querySelector('body').addEventListener("click",function(e){
   if(e.target.tagName != 'BUUTON'){
    click = !click
    let draw = document.querySelector('#draw')
    if(click){
     draw.innerHTMl = "now you can draw"
    }
    else{
     draw.innerHTMl = " you draw"
   }
  }
  })
 let btn_topup = document.querySelector("#topup")
 btn_topup.addEventListener("click",
 function(){
  let size = getSize()
  createBoard(size)

 })
}) 
function createBoard(size){
 let board = document.querySelector('.board');

 board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
 board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
 // create a div 
 let numDivs = size * size ;

 for(let i = 0 ; i < numDivs; i++){
  let div = document.createElement('div');
  div.addEventListener("mouseover",colorDiv)  
   board.insertAdjacentElement("beforeend", div);
 }

}
function getSize(){
 let input = prompt("what is the size of the board")
 let text = document.querySelector('#text')
 if(input == ""){
 text.innerHTML= 'please provide a number';
} 
else if(input < 0 || input > 100){
 text.innerHTML= 'please provide a number 1 to 100'
}
else{
 text.innerHTML = "now you can sketch"
 return input;
}
}
function colorDiv(){
 if(click){
if(color == 'random'){
  this.style.backgroundColor =`hsl(${Math.random()* 360 },100%,50%)`
 }
 else{
  this.style.backgroundColor = 'black'
 }
 }
}
function setColor(colorChoice){
 color = colorChoice

}
function resetBoard(){
 let div = document.querySelectorAll("div")
 div.forEach((div) => div.style.backgroundColor = 'white')
  
 
}