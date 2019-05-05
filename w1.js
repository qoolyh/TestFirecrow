/*!
* jQuery Cycle Plugin (with Transition Definitions)
* Examples and documentation at: http://jquery.malsup.com/cycle/
* Copyright (c) 2007-2010 M. Alsup
* Version: 2.9999 (13-NOV-2011)
* Dual licensed under the MIT and GPL licenses.
* http://jquery.malsup.com/license.html
* Requires: jQuery v1.3.2 or later
/*!
* jQuery Cycle Plugin Transition Definitions
* This script is a plugin for the jQuery Cycle Plugin
* Examples and documentation at: http://malsup.com/jquery/cycle/
* Copyright (c) 2007-2010 M. Alsup
* Version:	 2.73
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/ 
(function ($) {
//
// These functions define slide initialization and properties for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
})(jQuery);
/*/
//////////////////////////////////////////////////////////////////////
Ported to jquery from prototype by Joel Lisenby (joel.lisenby@gmail.com)
http://joellisenby.com
original prototype code by Aarron Walter (aarron@buildingfindablewebsites.com)
http://buildingfindablewebsites.com
Distrbuted under Creative Commons license
http://creativecommons.org/licenses/by-sa/3.0/us/
///////////////////////////////////////////////////////////////////////*/
var imageCount = 3;
var imagePosition = 0;
function setupLoop() {
intervalId = setInterval(function () {
slide(imagePosition + 1);
}, 1000);
}
function slide(pos) {
lastImagePosition = imagePosition;
imagePosition = pos;
if (imagePosition == imageCount) {
imagePosition = 0;
}
orient = imagePosition - lastImagePosition;
$(".pager_circle").removeClass("selected");
$(".pager_circle").eq(imagePosition).addClass("selected");
move = 257 * orient;
$('#ipad_img_container').animate({
marginLeft: '-=' + move
}, 10, function () {
// Animation complete.
});
move = 117 * orient;
$('#iphone_img_container').animate({
marginLeft: '-=' + move
}, 10, function () {
// Animation complete.
});
}
$(document).ready(function () {
//$('#wrapper').hide();
//$('#wrapper-background').preloadImages(function() { $('#wrapper').fadeIn(); $('#content, #header-images').preloadImages(); });
//    $('#content, #header-images').preloadImages();
$(".pager_circle").click(function () {
slide($(this).index());
});
setupLoop();
});