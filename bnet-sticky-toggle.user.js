// ==UserScript==
// @name          Battle.net Sticky Thread Toggle
// @namespace     https://github.com/Kanegasi/bnet-sticky-toggle
// @description   Hides sticky threads in all Battle.net forums with toggle button
// @version       1.53
// @downloadURL   https://github.com/Kanegasi/bnet-sticky-toggle/raw/master/bnet-sticky-toggle.user.js
// @updateURL     https://github.com/Kanegasi/bnet-sticky-toggle/raw/master/bnet-sticky-toggle.meta.js
// @include       /^https?://(\w+\.)?battle\.net/(\w+/)?\w+/forum/\d+/.*?$/
// @grant         none
// @icon          http://i.imgur.com/uWVXKdv.png
// ==/UserScript==

$('.stickied-topic').attr({ style: 'visibility:collapse' });

$('#nav-client-main-menu').append(
  $('<li class="stickytoggle-new" id="stickyhidden"></li>').html(
    $('<a class="nav-item nav-link needsclick">Show Stickies</a>')
  )
);

$('.stickytoggle-new').click(function() {
  var stickystatus = document.getElementById("stickyhidden");
  if (stickystatus) {
    $('.stickytoggle-new').attr({ id: 'stickyshown' }).html(
      $('<a class="nav-item nav-link needsclick">Hide Stickies</a>')
    );
    $('.stickied-topic').attr({ style: 'visibility:visible' });
  } else {
    $('.stickytoggle-new').attr({ id: 'stickyhidden' }).html(
      $('<a class="nav-item nav-link needsclick">Show Stickies</a>')
    );
    $('.stickied-topic').attr({ style: 'visibility:collapse' });
  }
});

$('.service-shop').before(
  $('<li class="service-cell stickytoggle-old" id="stickyhidden"></li>').html(
    $('<a class="service-link" style="cursor:pointer">Show Stickies</a>')
  )
);

$('.stickytoggle-old').click(function() {
  var stickystatus = document.getElementById("stickyhidden");
  if (stickystatus) {
    $('.stickytoggle-old').attr({ id: 'stickyshown' }).html(
      $('<a class="service-link" style="cursor:pointer">Hide Stickies</a>')
    );
    $('.stickied-topic').attr({ style: 'visibility:visible' });
  } else {
    $('.stickytoggle-old').attr({ id: 'stickyhidden' }).html(
      $('<a class="service-link" style="cursor:pointer">Show Stickies</a>')
    );
    $('.stickied-topic').attr({ style: 'visibility:collapse' });
  }
});
