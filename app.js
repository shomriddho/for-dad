function myFunction(){let e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}function showSlides(e){let l=e,s=document.getElementsByClassName("mySlides"),n=document.getElementsByClassName("dot");e>s.length&&(l=1),e<1&&(l=s.length);for(let t=0;t<s.length;t++)s[t].style.display="none";for(let o=0;o<n.length;o++)n[o].className=n[o].className.replace(" active","");s[l-1].style.display="block",n[l-1].className+=" active"}function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function carousel(){let e=document.getElementsByClassName("mySlides");for(let l=0;l<e.length;l++)e[l].style.display="none";++slideIndex>e.length&&(slideIndex=1),e[slideIndex-1].style.display="block",setTimeout(carousel,12e3)}function scrollFunction(){let e=document.getElementById("myBtn");document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=scrollFunction;let slideIndex=1;showSlides(slideIndex),carousel();