
  $( function() {
 /*==================== Slider ====================*/
    $('.level-slider').slick({
        dots : true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
      });

   /*==================== SHOW SCROLL TOP ====================*/
    function scrollTop() {
      const scrollTop = document.getElementById('scroll-top');
      if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
      else scrollTop.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollTop)

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
 const li = document.querySelectorAll(".level-nav-link");
 const sec=document.querySelectorAll("section");

 function activeMenu(){
  let len = sec.length;
  while(--len && window.scrollY + 50 < sec[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
 }
 activeMenu();
 window.addEventListener("scroll", activeMenu);
 
  } );
