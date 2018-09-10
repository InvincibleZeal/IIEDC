$(window).on("load",() => {
  $('#preloader').toggle();
  $('#side-nav, #showcase').removeClass('hidden');
  AOS.init();
});


$(function() {
  // animate on scroll for timeline headers

  // smooth scroll for side-nav btns
  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
  });

  // adds active class to side-nav btns on click event
  $('#anchors .btn').click((event) => {
    $('#anchors .btn').removeClass('active');
    if(event.target.classList[0] === 'btn'){
      $(event.target).addClass('active');
    } else {
      $(event.target).closest('li').addClass('active');
    }
  });

  // //checks for the first time which side-nav is active
  // $('.event .event-data').each((index, item) => {
  //   if(isElementInViewport(item)){
  //     var idx = item.parentElement.id.slice(-1);
  //     $('#anchors .btn').removeClass('active');
  //     $(`#anchors .btn-${idx}`).addClass('active');
  //   }
  // });

  // checks which side-nav is active on each scroll
  $(document).scroll(() => {
    $('.event .event-data').each((index, item) => {
      if(isElementInViewport(item)){
        var idx = item.parentElement.id.slice(-1);
        $('#anchors .btn').removeClass('active');
        $(`#anchors .btn-${idx}`).addClass('active');
      }
    });
  });

  // checks if an element is in viewport or not
  function isElementInViewport (el) {
      if (typeof jQuery === "function" && el instanceof jQuery) {
          el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
          rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
  }
});
