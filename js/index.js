$(window).scroll(function() {
   if ($("#menu").offset().top > 56) {
       $("#menu").addClass('bg-dark');
   } else {
       $("#menu").removeClass('bg-dark');
   }
 });

const togglePadding = () =>{
   let element = document.getElementById('title_banner');
   element.classList.toggle('pt-6');
}

const over = (element) =>{
   element.classList.add('show_link');  
}

const out = (element) => {
   element.classList.remove('show_link');
}

