document.addEventListener('DOMContentLoaded', function(){
  let imgH = document.querySelectorAll('.revealable');
  let vh = window.innerHeight; // hauteur viewport
  
  console.log(vh);
  
  
  window.addEventListener('scroll', function(){

      
      let alreadyScrolled = window.pageYOffset;
      console.log(alreadyScrolled);

      for (let i=0; i<imgH.length;i++){

      
          let elementH = imgH[i].offsetHeight;
          // console.log(elementH);

          let topImg=  imgH[i].getBoundingClientRect();
          console.log(topImg.y);

          // if (alreadyScrolled > (topImg.y) ){
          //     imgH[4].classList.add('revealed');

          
          
          // }
          
          if (topImg.y < vh -(elementH/4) ){
            imgH[i].classList.add('revealed');

        
        
        }

      
      }
 
  })

  
})