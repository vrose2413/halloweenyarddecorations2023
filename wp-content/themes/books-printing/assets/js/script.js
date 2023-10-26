/* ===============================================
  OPEN CLOSE Menu
============================================= */

function books_printing_open_menu() {
  jQuery('button.menu-toggle').addClass('close-panal');
  setTimeout(function(){
    jQuery('nav#main-menu').show();
  }, 100);

  return false;
}

jQuery( "button.menu-toggle").on("click", books_printing_open_menu);

function books_printing_close_menu() {
  jQuery('button.close-menu').removeClass('close-panal');
  jQuery('nav#main-menu').hide();
}

jQuery( "button.close-menu").on("click", books_printing_close_menu);

function books_printing_search_show() {
	jQuery(".outer-search").addClass('show');
	jQuery(".outer-search").fadeIn();
}
jQuery( ".search-cont-button").on("click", books_printing_search_show);

function books_printing_search_hide() {
	jQuery(".outer-search").removeClass('show');
	jQuery(".outer-search").fadeOut();
}
jQuery( ".search-cont-button-close").on("click", books_printing_search_hide);

/* ===============================================
  TRAP TAB FOCUS ON MODAL MENU
============================================= */

jQuery('button.close-menu').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('button.menu-toggle').focus();
  }
});
jQuery(document).ready(function() {
  window.addEventListener('load', (event) => {
      jQuery(".loader").delay(2000).fadeOut("slow");
    });
  })
/* ===============================================
  Scroll Top //
============================================= */

jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 100) {
      jQuery('.scroll-up').fadeIn();
  } else {
      jQuery('.scroll-up').fadeOut();
  }
});

jQuery('a[href="#tobottom"]').click(function () {
  jQuery('html, body').animate({scrollTop: 0}, 'slow');
  return false;
});
(function( $ ) {
  $(window).scroll(function(){
      var sticky = $('.sticky-header'),
      scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed-header');
      else sticky.removeClass('fixed-header');
    });
  })( jQuery );

/* ===============================================
  Search pop up
============================================= */

jQuery('.search-cont-button-close').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.inner-search form input').focus();
  }
});

jQuery('.inner-search form input').on('keydown', function (event) {
  if (event.shiftKey && event.keyCode == 9) {
    event.preventDefault();
    jQuery(this).blur();
    jQuery('.search-cont-button-close').focus()
  }
})