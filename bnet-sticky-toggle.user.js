/* globals jQuery, $, waitForKeyElements */
// ==UserScript==
// @name         Blizzard.com Pinned Thread Toggle
// @namespace    https://github.com/Kanegasi/bnet-sticky-toggle
// @version      2.17
// @author       Kanegasi
// @description  Hides pinned threads in all Blizzard.com forums with toggle button
// @icon         http://i.imgur.com/uWVXKdv.png
// @updateURL    https://github.com/Kanegasi/bnet-sticky-toggle/raw/master/bnet-sticky-toggle.meta.js
// @downloadURL  https://github.com/Kanegasi/bnet-sticky-toggle/raw/master/bnet-sticky-toggle.user.js
// @match        https://*.forums.blizzard.com/*/*/c/*
// @require      https://releases.jquery.com/git/jquery-3.x-git.min.js
// @grant        none
// ==/UserScript==

$(document).ready(function () {

  $(".Navbar-items").append(
    $('<a class="Navbar-item Navbar-link is-noSelect Navbar-pintoggle pintoggle" id="pinhidden" data-index="4" data-name="pintoggle" tabindex="0" data-analytics="global-nav" data-analytics-placement="Nav - PinToggle"></a>').html(
      $('<div class="Navbar-label">Show Pins</div>')
    )
  );

  $(".pintoggle").click(function() {
    var pinstatus = document.getElementById("pinhidden");
    if (pinstatus) {
      $(".pintoggle").attr({ id: "pinshown" }).html(
        $('<div class="Navbar-label">Hide Pins</div>')
      );
      $(".pinned").attr({ style: "visibility:visible" });
    } else {
      $(".pintoggle").attr({ id: "pinhidden" }).html(
        $('<div class="Navbar-label">Show Pins</div>')
      );
      $(".pinned").attr({ style: "visibility:collapse" });
    }
  });

  $.fn.classChange = function(cb) {
    return $(this).each((_, el) => {
      new MutationObserver(mutations => {
        mutations.forEach(mutation => cb && cb(mutation.target, $(mutation.target).prop(mutation.attributeName)));
      }).observe(el, {
        attributes: true,
        attributeFilter: ["class"]
      });
    });
  }
  $("body").classChange((el, newClass) => {
    var pinstatus = document.getElementById("pinhidden");
    if (pinstatus) {
      $(".pinned").attr({ style: "visibility:collapse" });
    } else {
      $(".pinned").attr({ style: "visibility:visible" });
    }
  });

});
