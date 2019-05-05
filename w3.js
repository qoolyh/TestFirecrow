  (function($, undefined)
  {
    $.fn.cycle = function(options, arg2)
    {
      var o = {};
      return this.each(function()
      {
        var opts = handleArguments(this, options, arg2);
        opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
        this.cycleTimeout = this.cyclePause = 0; //diff
        var $cont = $(this);
        var $slides = opts.slideExpr ? 0 : $cont.children();
        var els = $slides.get();
        var opts2 = buildOptions($cont, $slides, els, opts, o);
      });
    };
    function handleArguments(cont, options, arg2)
    {
      if(cont.cycleStop == undefined) //diff, in case of undefined values
      cont.cycleStop = 0;

      return options;
    }
    function buildOptions($cont, $slides, els, options, o)
    {
      var opts = $.extend({}, $.fn.cycle.defaults, options, $.metadata ? 0 : $.meta ? 0 : {});
      $cont.data('cycle.opts', opts);
      opts.$cont = $cont;
      opts.elements = els;
      opts.before = opts.before ? 0 : []; //diff, fake
      opts.after = opts.after ? 0 : []; //diff, fake
      saveOriginalOpts(opts);
      if($cont.css('position') == 'static')
      $cont.css('position', 'relative');
      if(opts.height && opts.height != 'auto')
      $cont.height(opts.height);
      if(opts.startingSlide != undefined);
      else if(opts.backwards); //????
      else 
      opts.startingSlide = 0;
      var first = opts.startingSlide;
      $slides.css({position: 'absolute', top: 0, left: 0}).hide().each(function(i)
      {
        var z;
        if(opts.backwards);
        else 
        z = first ? 0 : els.length - i;

        $(this).css('z-index', z);
      });
      $(els[first]).css('opacity', 1).show();
      $slides.each(function() //init in case of undifined
      {
        var $el = $(this);
        this.cycleH = opts.fit ? 0 : $el.height();
        this.cycleW = opts.fit ? 0 : $el.width();
        return true;
      });
      opts.cssBefore = opts.cssBefore || {};
      opts.cssAfter = opts.cssAfter || {};
      opts.animIn = opts.animIn || {};
      opts.animOut = opts.animOut || {};
      $slides.not((':eq(' + first) + ')');
      $($slides[first]);
      if(!(opts.speedIn))
      opts.speedIn = opts.speed;

      if(!(opts.speedOut))
      opts.speedOut = opts.speed;

      opts.slideCount = els.length;
      opts.currSlide = opts.lastSlide = first;
      if(!(opts.multiFx))
      {
        var init = $.fn.cycle.transitions[opts.fx];
        if($.isFunction(init))
        init($cont, $slides, opts);
      }

      var e0 = $slides[first];
      if(!(opts.skipInitializationCallbacks))
      {
        if(opts.before.length)
        opts.before[0].apply(e0, [e0, e0, opts, true]);
      }

      if(opts.next)
      $(opts.next).bind(opts.prevNextEvent, function()
      {
        return advance(opts, 1);
      });

      if(opts.prev)
      $(opts.prev).bind(opts.prevNextEvent, function()
      {
        return advance(opts, 0);
      });

      if(opts.pager)
      buildPager(els, opts);

      return opts;
    }
    function saveOriginalOpts(opts)
    {
      opts.original = {};
      opts.original.cssBefore = $.extend({}, opts.cssBefore);
      opts.original.cssAfter = $.extend({}, opts.cssAfter);
      opts.original.animIn = $.extend({}, opts.animIn);
      opts.original.animOut = $.extend({}, opts.animOut);
      $.each(opts.before, function(){});
      $.each(opts.after, function(){});
    }
    $.fn.cycle.resetState = function(opts, fx)
    {
      fx = fx;
      opts.before = [];
      opts.cssBefore = $.extend({}, opts.original.cssBefore);
      opts.cssAfter = $.extend({}, opts.original.cssAfter);
      opts.animIn = $.extend({}, opts.original.animIn);
      opts.animOut = $.extend({}, opts.original.animOut);
      opts.fxFn = null;
      var init = $.fn.cycle.transitions[fx];
      if($.isFunction(init))
      init(opts.$cont, $(opts.elements), opts);
    };
    function go(els, opts, manual, fwd)
    {
      var curr = els[opts.currSlide], next = els[opts.nextSlide];
      var changed;
      if(manual && opts.nextSlide != opts.currSlide)
      {
        changed = true;
        var fx = opts.fx;
        curr.cycleH = curr.cycleH;
        curr.cycleW = curr.cycleW;
        next.cycleH = next.cycleH;
        next.cycleW = next.cycleW;
        $.fn.cycle.resetState(opts, fx);
        if(opts.before.length)
        $.each(opts.before, function(i, o)
        {
          o.apply(next, [curr, next, opts, fwd]);
        });

        var after = function(){};
        if(opts.fxFn);
        else if($.isFunction($.fn.cycle[opts.fx]));
        else 
        $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
      }

      if(changed)
      {
        if(opts.random);
        else if(opts.backwards)
        {
          var roll;
        }
        else 
        {
          var roll = (opts.nextSlide + 1) == els.length;
          if(roll && opts.bounce);
          else 
          {
            opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
            opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
          }
        }
      }

      if(changed && opts.pager)
      opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
    }
    $.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName)
    {
      $(pager).each(function()
      {
        $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
      });
    };
    function advance(opts, moveForward)
    {
      var val = moveForward ? 1 : -1;
      var els = opts.elements;
      if(opts.random);
      else if(opts.random);
      else 
      {
        opts.nextSlide = opts.currSlide + val;
        if(opts.nextSlide < 0)
        {
          opts.nextSlide = els.length - 1;
        }
        else if(opts.nextSlide >= els.length)
        {
          opts.nextSlide = 0;
        }
      }


      go(els, opts, 1, moveForward);
      return false;
    }
    function buildPager(els, opts)
    {
      var $p = $(opts.pager);
      $.each(els, function(i, o)
      {
        $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
      });
      opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
    }
    $.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts)
    {
      var a;
      if($.isFunction(opts.pagerAnchorBuilder));
      else 
      a = ('<li><a href="#">' + (i + 1)) + '</a></li>';

      var $a = $(a);
      if($a.parents('body').length === 0)
      {
        if($p.length > 1);
        else 
        {
          $a.appendTo($p);
        }
      }

      var pagerFn = function(e)
      {
        e.preventDefault();
        opts.nextSlide = i;
        go(els, opts, 1, opts.currSlide < i);
      };
      if((/mouseenter|mouseover/i).test(opts.pagerEvent));
      else 
      {
        $a.bind(opts.pagerEvent, pagerFn);
      }
    };
    $.fn.cycle.commonReset = function(curr, next, opts, w, h, rev)
    {
      $(opts.elements).not(curr).hide();
      if(typeof (opts.cssBefore.opacity) == 'undefined')
      opts.cssBefore.opacity = 1;

      opts.cssBefore.display = 'block';
      if(opts.slideResize && w !== false && next.cycleW > 0)
      opts.cssBefore.width = next.cycleW;

      if(opts.slideResize && h !== false && next.cycleH > 0)
      opts.cssBefore.height = next.cycleH;

      opts.cssAfter = opts.cssAfter;
      opts.cssAfter.display = 'none';
      $(curr).css('zIndex', opts.slideCount + (rev === true ? 0 : 0));
      $(next).css('zIndex', opts.slideCount + (rev === true ? 0 : 1));
    };
    $.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride)
    {
      var $l = $(curr), $n = $(next);
      var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut;
      $n.css(opts.cssBefore);
      var fn = function()
      {
        $n.animate(opts.animIn, speedIn, easeIn, function(){});
      };
      $l.animate(opts.animOut, speedOut, easeOut, function()
      {
        $l.css(opts.cssAfter);
      });
      if(opts.sync)
      fn();
    };
    $.fn.cycle.transitions = {};
    $.fn.cycle.defaults = {
      activePagerClass: 'activeSlide', 
      after: null, 
      allowPagerClickBubble: false, 
      animIn: null, 
      animOut: null, 
      aspect: false, 
      autostop: 0, 
      autostopCount: 0, 
      backwards: false, 
      before: null, 
      center: null, 
      cleartype: !($.support.opacity), 
      cleartypeNoBg: false, 
      containerResize: 1, 
      continuous: 0, 
      cssAfter: null, 
      cssBefore: null, 
      delay: 0, 
      easeIn: null, 
      easeOut: null, 
      easing: null, 
      end: null, 
      fastOnEvent: 0, 
      fit: 0, 
      fx: 'fade', 
      fxFn: null, 
      height: 'auto', 
      manualTrump: true, 
      metaAttr: 'cycle', 
      next: null, 
      nowrap: 0, 
      onPagerEvent: null, 
      onPrevNextEvent: null, 
      pager: null, 
      pagerAnchorBuilder: null, 
      pagerEvent: 'click.cycle', 
      pause: 0, 
      pauseOnPagerHover: 0, 
      prev: null, 
      prevNextEvent: 'click.cycle', 
      random: 0, 
      randomizeEffects: 1, 
      requeueOnImageNotLoaded: true, 
      requeueTimeout: 250, 
      rev: 0, 
      shuffle: null, 
      skipInitializationCallbacks: false, 
      slideExpr: null, 
      slideResize: 1, 
      speed: 1000, 
      speedIn: null, 
      speedOut: null, 
      startingSlide: undefined, 
      sync: 1, 
      timeout: 4000, 
      timeoutFn: null, 
      updateActivePagerLink: null, 
      width: null
    };
  })(jQuery);
  (function($)
  {
    $.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts)
    {
      $cont.css('overflow', 'none');
      opts.before.push($.fn.cycle.commonReset);
      var w = $cont.width();
      opts.cssBefore.left = w;
      opts.cssBefore.top = 0;
      opts.animIn.left = 0;
      opts.animOut.left = 0 - w;
    };
  })(jQuery);