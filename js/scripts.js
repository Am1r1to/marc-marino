


  document.addEventListener('DOMContentLoaded', function(){
    let contact = document.querySelector('.lien-contact');
    let close = document.querySelector('.close');

    let menu = document.querySelector ('.contact');
 
    contact.addEventListener('click', function(){
        menu.classList.add('closed');
       
    })

    close.addEventListener('click', function(){
      menu.classList.remove('closed');
     
  })
 })

