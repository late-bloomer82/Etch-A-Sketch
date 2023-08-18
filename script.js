


 const container = document.querySelector(".grid-container")
 
 function buildGrid(){


for(h=0;h<256;h++){
    let square = document.createElement('div')
    square.className = 'square';
   
    container.appendChild(square)
    
}
}
buildGrid()

    

 const button = document.querySelector(".user-prompt")
 

    button.addEventListener("click",function(){

        const userInput = prompt("Please enter the size for the new grid.")
        

       
        if(userInput>100){
            alert("The grid size cannot exceed 100 squares.")
        }
        else{
            container.innerHTML= "";
            for(h=0;h<userInput*userInput;h++){
                let square = document.createElement('div')
                square.className = 'square';
                container.appendChild(square)
               
                
               
            }
            mouseoverTrail();
        }

    })
function mouseoverTrail(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'blue';
        });
    
       
    });
}
mouseoverTrail();