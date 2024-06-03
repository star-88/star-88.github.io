//NavBar Toggle Class
$(document).ready(function() {
  var navMenu = $('.nav-menu-open')
  var navContainer = $('.nav-container')
  var navItem = $('.nav-list li a')

    navMenu.click(function() {
        console.log('navMemu Click')
      navContainer.toggleClass("nav-show-menu")
    })

  window.addEventListener('scroll', () => {
    let header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY>750)
  })

  navItem.click(function() {
    navContainer.removeClass('nav-show-menu');
  });



  // Smooth scrolling for all links with hashes
  $('a[href="#top"]').on('click', function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
        scrollTop: 0
    }, 800);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 750) {
        $('.scrollTopBtn').fadeIn();
    } else {
        $('.scrollTopBtn').fadeOut();
    }
  });

});
