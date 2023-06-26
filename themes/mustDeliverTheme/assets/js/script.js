$(document).ready(function () {
  $(".Offer_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow:
      '<span class="Slick-Prev"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow:
      '<span class="Slick-Next"><i class="fa-solid fa-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".accordion-panel").on("click", ".accordion__header", function () {
    $(".accordion__body").slideUp().removeClass("flipInX");
    if ($(this).next().is(":hidden")) {
      $(this).next().slideDown().addClass("flipInX");
    } else {
      $(this).next().slideUp();
    }
  });
  $(".accordion-panel").click(function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
    } else {
      $(this).addClass("open").siblings().removeClass("open");
    }
  });
  $(".video-btn").click(function () {
    $(this).parent().remove();
  });

  $(".cus-drop").click(function(){
    $(this).next().slideToggle()
  })
  $(".navbar-toggler").click(function(){
    $(this).toggleClass("open")
  })
  $(".read-btn").click(function(){
    $(".read-text").toggleClass("read")
    if($(".read-text").hasClass("read")){
      $(this).html("Show less")
    }
    else{
      $(this).html("Read more")
    }
  })

  const next = document.querySelectorAll(".next-btn");
  const steps = Array.from(document.querySelectorAll(".signup_step"));
  const nav = document.querySelectorAll(".steps-nav ul > .nav_item");
  const prev = document.querySelectorAll(".back-btn");
  let currentStep = 0;

  const myNav = (nBar) => {
    nav.forEach((navs, index) => {
      if (nBar === index) {
        navs.classList.add("active");
        navs.classList.remove("step_visited");
        navs.children[0].innerHTML = currentStep+1;
      } 
      
     else if (navs.classList.contains("active")) {
        navs.classList.add("step_visited");
        navs.classList.remove("active")
        navs.children[0].innerHTML = `✓`;
      }
      else if(navs.classList.contains("step_visited")){
        navs.classList.remove("step_visited")
      }

      else {
        navs.classList.remove("active");

      }
    });
  };

  const mySteps = (nStep) => {
    steps.forEach((step, index) => {
      if (nStep === index) {
        step.classList.remove("hidden");
      } else {
        step.classList.add("hidden");
      }
    });
  };
  next.forEach((nbtns) => {
    nbtns.addEventListener("click", function (e) {
      e.preventDefault();
      currentStep++;
      mySteps(currentStep);
      myNav(currentStep);
    });
  });

  prev.forEach((pbtns) => {
    pbtns.addEventListener("click", function (e) {
      e.preventDefault();

      if (currentStep >= 0) {
        currentStep--;
        mySteps(currentStep);
      
      }
      myNav(currentStep);
      nav.forEach((navs) => {
        navs.nextElementSibling.classList.remove("step_visited");
        navs.nextElementSibling.children[0].innerHTML = currentStep+2;
      });
    });
  });


  const eye = document.querySelector("#togglePassword")

  eye.addEventListener("click" , function(){
  const type =  this.parentElement.children[0].getAttribute('type') === 'password' ? 'text' : 'password';
   this.parentElement.children[0].setAttribute('type', type)
   this.classList.toggle('fa-eye-slash');
  })
});






