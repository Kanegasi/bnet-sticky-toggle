/* globals jQuery, $, waitForKeyElements */
// ==UserScript==
// @name         Battle.net Sticky Thread Toggle
// @namespace    https://github.com/Kanegasi/bnet-sticky-toggle
// @version      2.10
// @author       Kanegasi
// @description  Hides sticky threads in all Battle.net forums with toggle button
// @icon         http://i.imgur.com/uWVXKdv.png
// @updateURL    https://github.com/Kanegasi/bnet-sticky-toggle/raw/master/bnet-sticky-toggle.meta.js
// @downloadURL  https://github.com/Kanegasi/bnet-sticky-toggle/raw/master/bnet-sticky-toggle.user.js
// @match        https://*.forums.blizzard.com/*/*/c/*
// @require      https://releases.jquery.com/git/jquery-3.x-git.min.js
// @grant        none
// ==/UserScript==

$(document).ready(function () {

  $('.Navbar-items').append(
    $('<a class="Navbar-item Navbar-link is-noSelect Navbar-stickytoggle stickytoggle" id="stickyhidden" data-index="4" data-name="stickytoggle" tabindex="0" data-analytics="global-nav" data-analytics-placement="Nav - StickyToggle"></a>').html(
      $('<div class="Navbar-label">Show Stickies</div>')
    )
  );

  $('.stickytoggle').click(function() {
    var stickystatus = document.getElementById("stickyhidden");
    if (stickystatus) {
      $('.stickytoggle').attr({ id: 'stickyshown' }).html(
        $('<div class="Navbar-label">Hide Stickies</div>')
      );
      $('.pinned').attr({ style: 'visibility:visible' });
    } else {
      $('.stickytoggle').attr({ id: 'stickyhidden' }).html(
        $('<div class="Navbar-label">Show Stickies</div>')
      );
      $('.pinned').attr({ style: 'visibility:collapse' });
    }
  });

  setTimeout(function() { 
    $('.pinned').attr({ style: 'visibility:collapse' });
  }, 1000);

});
