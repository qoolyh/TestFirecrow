(function ($, undefined) {
    $.fn.cycle = function (options, arg2) {
        var o = {};
        return this.each(function () {
            var opts = handleArguments(this, options, arg2);
            opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
            var $cont = $(this);
            var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
            var els = $slides.get();
            var opts2 = buildOptions($cont, $slides, els, opts, o);
        });
    };

    function handleArguments(cont, options, arg2) {
        return options;
    };

    function buildOptions($cont, $slides, els, options, o) {
        var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
        opts.$cont = $cont;
        opts.elements = els;
        opts.before = opts.before ? [opts.before] : [];
        if ($cont.css('position') == 'static')
            $cont.css('position', 'relative');
        if (opts.startingSlide != undefined) {
        } else if (opts.backwards)
            opts.startingSlide = els.length - 1;
        else
            opts.startingSlide = 0;
        var first = opts.startingSlide;
        $slides.css({
            position: 'absolute',
            top: 0,
            left: 0
        }).hide().each(function (i) {
            if (opts.backwards)
                z = first ? i <= first ? els.length + (i - first) : first - i : els.length - i;
            else
                z = first ? i >= first ? els.length - (i - first) : first - i : els.length - i;
            $(this).css('z-index', z)
        });
        $(els[first]).css('opacity', 1).show(); // opacity bit needed to handle restart use case
        opts.cssBefore = opts.cssBefore || {};
        opts.animIn = opts.animIn || {};
        opts.animOut = opts.animOut || {};
        opts.slideCount = els.length;
        opts.currSlide = opts.lastSlide = first;
        if (!opts.multiFx) {
            var init = $.fn.cycle.transitions[opts.fx];
            if ($.isFunction(init))
                init($cont, $slides, opts);
            else if (opts.fx != 'custom' && !opts.multiFx) {
            }
        }
        var e0 = $slides[first];
        if (!opts.skipInitializationCallbacks) {
            if (opts.before.length)
                opts.before[0].apply(e0, [e0, e0, opts, true]);
        }
        if (opts.next)
            $(opts.next).bind(opts.prevNextEvent, function () {
                return advance(opts, 1)
            });
        if (opts.prev)
            $(opts.prev).bind(opts.prevNextEvent, function () {
                return advance(opts, 0)
            });
        if (opts.pager || opts.pagerAnchorBuilder)
            buildPager(els, opts);
    };

    function go(els, opts, manual, fwd) {
// opts.busy is true if we're in the middle of an animation
        var p = opts.$cont[0],
            curr = els[opts.currSlide],
            next = els[opts.nextSlide];
        if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
            changed = true;
            next.cycleH = next.cycleH || $(next).height();
            next.cycleW = next.cycleW || $(next).width();
            if (opts.before.length)
                $.each(opts.before, function (i, o) {
                    o.apply(next, [curr, next, opts, fwd]);
                });
            var after = function () {
            };
            if (opts.fxFn) // fx function provided?
                opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
            else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
                $.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
            else
                $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
        } else {
        }
        if (changed || opts.nextSlide == opts.currSlide) {
// calculate the next slide
            if (opts.random) {
            } else if (opts.backwards) {
            } else { // sequence
                var roll = (opts.nextSlide + 1) == els.length;
                if (roll && opts.bounce) {
                } else {
                    opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
                    opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
                }
            }
        }
        if (changed && opts.pager)
            opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
    };
    $.fn.cycle.updateActivePagerLink = function (pager, currSlide, clsName) {
        $(pager).each(function () {
            $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
        });
    };

    function advance(opts, moveForward) {
        var val = moveForward ? 1 : -1;
        var els = opts.elements;
        if (opts.random && val < 0) {
// move back to the previously display slide
        } else if (opts.random) {
        } else {
            opts.nextSlide = opts.currSlide + val;
            if (opts.nextSlide < 0) {
                opts.nextSlide = els.length - 1;
            } else if (opts.nextSlide >= els.length) {
                opts.nextSlide = 0;
            }
        }
        go(els, opts, 1, moveForward);
    };

    function buildPager(els, opts) {
        var $p = $(opts.pager);
        $.each(els, function (i, o) {
            $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
        });
        opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
    };
    $.fn.cycle.createPagerAnchor = function (i, el, $p, els, opts) {
        if ($.isFunction(opts.pagerAnchorBuilder)) {
        } else
            a = '<li><a href="#">' + (i + 1) + '</a></li>';
        var $a = $(a);
        if ($a.parents('body').length === 0) {
            if ($p.length > 1) {
            } else {
                $a.appendTo($p);
            }
        }
        var pagerFn = function (e) {
            go(els, opts, 1, opts.currSlide < i); // trigger the trans
//		return false; // <== allow bubble
        }
        if (/mouseenter|mouseover/i.test(opts.pagerEvent)) {
        } else {
            $a.bind(opts.pagerEvent, pagerFn);
        }
    };
    $.fn.cycle.commonReset = function (curr, next, opts, w, h, rev) {
        if (typeof opts.cssBefore.opacity == 'undefined')
            opts.cssBefore.opacity = 1;
        opts.cssBefore.display = 'block';
        if (opts.slideResize && w !== false && next.cycleW > 0)
            opts.cssBefore.width = next.cycleW;
        if (opts.slideResize && h !== false && next.cycleH > 0)
            opts.cssBefore.height = next.cycleH;
        opts.cssAfter = opts.cssAfter || {};
        opts.cssAfter.display = 'none';
        $(curr).css('zIndex', opts.slideCount + (rev === true ? 1 : 0));
        $(next).css('zIndex', opts.slideCount + (rev === true ? 0 : 1));
    };
    $.fn.cycle.custom = function (curr, next, opts, cb, fwd, speedOverride) {
        var $l = $(curr),
            $n = $(next);
        var speedIn = opts.speedIn,
            speedOut = opts.speedOut,
            easeIn = opts.easeIn,
            easeOut = opts.easeOut;
        $n.css(opts.cssBefore);
        var fn = function () {
            $n.animate(opts.animIn, speedIn, easeIn, function () {
            });
        };
        $l.animate(opts.animOut, speedOut, easeOut, function () {
            $l.css(opts.cssAfter);
        });
        if (opts.sync) fn();
    };
    $.fn.cycle.transitions = {};
    $.fn.cycle.defaults = {
        activePagerClass: 'activeSlide', // class name used for the active pager link
        pagerEvent: 'click.cycle', // name of event which drives the pager navigation
        prevNextEvent: 'click.cycle', // event which drives the manual transition to the previous or next slide
        slideResize: 1, // force slide width/height to fixed size before every transition
        sync: 1, // true if in/out transitions should occur simultaneously
    };
})(jQuery);