/*
*   Author: beshleyua
*   Author URL: http://themeforest.net/user/beshleyua
*/

/*
	Preloader
*/

$(window).on('load', () => {
  const preload = $('.preloader');
  preload.find('.spinner').fadeOut(() => {
    preload.fadeOut();
  });
});

$(() => {
  /*
		Vars
	*/

  const width = $(window).width();
  const height = $(window).height();

  /*
		Header Menu Desktop
	*/

  const container = $('.container');
  const card_items = $('.card-inner');
  const animation_in = container.data('animation-in');
  const animation_out = container.data('animation-out');

  $('.top-menu').on('click', 'a', function () {
    /* vars */
    const id = $(this).attr('href');
    const h = parseFloat($(id).offset().top);
    const card_item = $(id);
    const menu_items = $('.top-menu li');
    const menu_item = $(this).closest('li');
    const d_lnk = $('.lnks .lnk.discover');

    /* if desktop */
    if (
      !menu_item.hasClass('active') &
      (width > 1023) &
      $('#home-card').length
    ) {
      /* close card items */
      menu_items.removeClass('active');
      container.find(card_items).removeClass(`animated ${animation_in}`);

      if ($(container).hasClass('opened')) {
        container.find(card_items).addClass(`animated ${animation_out}`);
      }

      /* open card item */
      menu_item.addClass('active');
      container.addClass('opened');
      container.find(card_item).removeClass(`animated ${animation_out}`);
      container.find(card_item).addClass(`animated ${animation_in}`);

      $(card_items).addClass('hidden');

      $(card_item).removeClass('hidden');
      $(card_item).addClass('active');
    }

    /* if mobile */
    if ((width < 1024) & $('#home-card').length) {
      /* scroll to section */
      $('body,html').animate(
        {
          scrollTop: h - 76,
        },
        800,
      );
    }

    return false;
  });

  /*
		Smoothscroll
	*/

  if ((width < 1024) & $('#home-card').length) {
    $(window).on('scroll', () => {
      const scrollPos = $(window).scrollTop();
      $('.top-menu ul li a').each(function () {
        const currLink = $(this);
        const refElement = $(currLink.attr('href'));
        if (refElement.offset().top - 76 <= scrollPos) {
          $('.top-menu ul li').removeClass('active');
          currLink.closest('li').addClass('active');
        }
      });
    });
  }

  /*
		slimScroll
	*/

  if (width > 1024) {
    $('.card-inner .card-wrap').slimScroll({
      height: '570px',
    });
  }

  /*
		Hire Button
	*/

  $('.lnks').on('click', '.lnk.discover', () => {
    $('.top-menu a[href="#contacts-card"]').trigger('click');
  });

  /*
		Initialize masonry items
	*/

  const $container = $('.grid-items');

  $container.imagesLoaded(() => {
    $container.multipleFilterMasonry({
      itemSelector: '.grid-item',
      filtersGroupSelector: '.filter-button-group',
      percentPosition: true,
      gutter: 0,
    });
  });

  /*
		12. Initialize masonry filter
	*/

  $('.filter-button-group').on('change', 'input[type="radio"]', function () {
    if ($(this).is(':checked')) {
      $('.f_btn').removeClass('active');
      $(this)
        .closest('.f_btn')
        .addClass('active');
    }
    /* popup image */
    $('.has-popup-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'popup-box',
      image: {
        verticalFit: true,
      },
    });

    /* popup video */
    $('.has-popup-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      disableOn: 0,
      mainClass: 'popup-box',
    });

    /* popup music */
    $('.has-popup-music').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      disableOn: 0,
      mainClass: 'popup-box',
    });

    /* popup media */
    $('.has-popup-media').magnificPopup({
      type: 'inline',
      overflowY: 'auto',
      closeBtnInside: true,
      mainClass: 'popup-box-inline',
    });
  });

  /*
		Popups
	*/

  /* popup image */
  $('.has-popup-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'popup-box',
    image: {
      verticalFit: true,
    },
  });

  /* popup video */
  $('.has-popup-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    disableOn: 0,
    mainClass: 'popup-box',
  });

  /* popup music */
  $('.has-popup-music').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    disableOn: 0,
    mainClass: 'popup-box',
  });

  /* popup media */
  $('.has-popup-media').magnificPopup({
    type: 'inline',
    overflowY: 'auto',
    closeBtnInside: true,
    mainClass: 'popup-box-inline',
    callbacks: {
      open() {
        $('.popup-box-inline .popup-box').slimScroll({
          height: `${height}px`,
        });
      },
    },
  });

  /*
		Validate Contact Form
	*/

  $('#cform').validate({
    ignore: '.ignore',
    rules: {
      name: {
        required: true,
      },
      message: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      hiddenRecaptcha: {
        required() {
          if (grecaptcha.getResponse() == '') {
            return true;
          }
          return false;
        },
      },
    },
    success: 'valid',
    submitHandler() {
      $.ajax({
        url: 'mailer/feedback.php',
        type: 'post',
        dataType: 'json',
        data: `name=${$('#cform')
          .find('input[name="name"]')
          .val()}&email=${$('#cform')
          .find('input[name="email"]')
          .val()}&message=${$('#cform')
          .find('textarea[name="message"]')
          .val()}`,
        beforeSend() {},
        complete() {},
        success(data) {
          $('#cform').fadeOut();
          $('.alert-success')
            .delay(1000)
            .fadeIn();
        },
      });
    },
  });

  /*
		Validate Commect Form
	*/

  $('#comment_form').validate({
    rules: {
      name: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    success: 'valid',
    submitHandler() {},
  });

  /*
		Google Maps
	*/

  if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initMap);
  }
});

/*
	Google Map Options
*/

function initMap() {
  const myLatlng = new google.maps.LatLng(12.9716, 77.5946); // <- Your latitude and longitude
  const styles = [
    {
      featureType: 'water',
      stylers: [
        {
          color: '#d8dee9',
        },
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'landscape',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
  ];

  const mapOptions = {
    zoom: 14,
    center: myLatlng,
    mapTypeControl: false,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    styles,
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: 'We are here!',
  });
}
