var heart=document.getElementsByClassName('fas fa-heart')
console.log(heart[0]);


for (let i= 0; i < heart.length; i++) {
    heart[i].addEventListener("click",function style(){
     if (heart[i].style.color=="black") {
        heart[i].style.color="red"
        
     }
     else{         heart[i].style.color="black"}

    })
    
}
