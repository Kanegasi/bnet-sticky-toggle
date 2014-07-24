// ==UserScript==
// @name          Battle.net Sticky Thread Toggle
// @namespace     https://github.com/Kanegasi/bnet-sticky-toggle
// @description   Hides sticky threads in all Battle.net forums with toggle button
// @version       1.2
// @downloadURL   https://github.com/Kanegasi/bnet-sticky-toggle/raw/master/bnet-sticky-toggle.user.js
// @updateURL     https://github.com/Kanegasi/bnet-sticky-toggle/raw/master/bnet-sticky-toggle.meta.js
// @include       /^https?://(\w+\.)?battle\.net/(\w+/)?\w+/forum/\d+/.*?$/
// @grant         none
// @icon          http://i.imgur.com/uWVXKdv.png
// ==/UserScript==

$('.stickied-topics').attr({ style: 'visibility:collapse' });

$('.service-shop').before(
    $('<li class="service-cell stickytoggle" id="stickyhidden"></li>').html(
        $('<a class="service-link" style="cursor:pointer">Show Stickies</a>')
    )
);

$('.stickytoggle').click(function() {
    var stickystatus = document.getElementById("stickyhidden");
    if (stickystatus) {
        $('.stickytoggle').attr({ id: 'stickyshown' }).html(
            $('<a class="service-link" style="cursor:pointer">Hide Stickies</a>')
        );
        $('.stickied-topics').attr({ style: 'visibility:visible' });
    } else {
        $('.stickytoggle').attr({ id: 'stickyhidden' }).html(
            $('<a class="service-link" style="cursor:pointer">Show Stickies</a>')
        );
        $('.stickied-topics').attr({ style: 'visibility:collapse' });
    }
});