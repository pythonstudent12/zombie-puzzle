//Зомби для githubpages
 
var slides = document.getElementsByClassName("item");
slides[0].style.display = "none";
slides[1].style.display = "none";
slides[2].style.display = "none";
slides[3].style.display = "none";


var again = document.getElementById("again");
again.hidden = true;
document.getElementsByClassName('header')[1].hidden = true;

again.onclick = function() {

    again.hidden = true;
   
    document.getElementById('hider').hidden = true;
    document.getElementsByClassName('header')[1].hidden = true;


    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
    
    var slideIndex = randomInteger(1,4);
    console.log(slideIndex);
    
    
    showSlides(slideIndex);
    
    
    /* Основная функция сладера */
    function showSlides(n) {
    
        var i;
    
    
        //if (n > slides.length) {
        //  slideIndex = 1;
        //}
       // if (n < 1) {
       //     slideIndex = slides.length;
       // }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
      
        slides[n - 1].style.display = "block";

    }
    
    setTimeout(() => {again.hidden = false;
        document.getElementsByClassName('header')[1].hidden = false;
        slides[0].style.display = "none";
        slides[1].style.display = "none";
        slides[2].style.display = "none"; 
        slides[3].style.display = "none";
        
     }, 3000);
}

document.getElementsByClassName('main')[0].onclick = function() {
    
    document.getElementById('hider').hidden = true;
    document.getElementsByClassName('header')[0].hidden = true;

    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    
    var slideIndex = randomInteger(1,4);
           
    showSlides(slideIndex);
        
    /* Основная функция сладера */
    function showSlides(n) {
      var i;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[n - 1].style.display = "block";
    }
    
    setTimeout(() => {again.hidden = false;
        document.getElementsByClassName('header')[1].hidden = false;
        slides[0].style.display = "none";
        slides[1].style.display = "none";
        slides[2].style.display = "none"; 
        slides[3].style.display = "none";
        
     }, 3000);

    

}

//спасибо, что побывали в мире зомби
//дописать функцию
