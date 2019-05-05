(function($, undefined)
  {
    $.fn.cycle = function(options, arg2)
    {
      var o = {};
      return this.each(function()
      {
        var opts = handleArguments(this, options, arg2);
        opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
        this.cycleTimeout = this.cyclePause = 0;
        var $cont = $(this);
        var $slides = opts.slideExpr ? 0 : $cont.children();
        var els = $slides.get();
        var opts2 = buildOptions($cont, $slides, els, opts, o);
      });
    };
    function handleArguments(cont, options, arg2)
    {
      if(cont.cycleStop == undefined)
      cont.cycleStop = 0;

      return options;
    }
    function buildOptions($cont, $slides, els, options, o)
    {
      var opts = $.extend({}, $.fn.cycle.defaults, options, $.metadata ? 0 : $.meta ? 0 : {});
      $cont.data('cycle.opts', opts);
      opts.elements = els;
      opts.before = opts.before ? 0 : [];
      opts.after = opts.after ? 0 : [];
      saveOriginalOpts(opts);
      if($cont.css('position') == 'static')
      $cont.css('position', 'relative');

      if(opts.height && opts.height != 'auto')
      $cont.height(opts.height);

      if(opts.startingSlide != undefined);
      else if(opts.backwards);
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
      $slides.each(function()
      {
        var $el = $(this);
        this.cycleH = opts.fit ? 0 : $el.height();
        this.cycleW = opts.fit ? 0 : $el.width();
        return true;
      });
      $slides.not((':eq(' + first) + ')');
      $($slides[first]);
      opts.slideCount = els.length;
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
      $(opts.next).bind(opts.prevNextEvent, function(){});

      if(opts.prev)
      $(opts.prev).bind(opts.prevNextEvent, function(){});

      if(opts.pager)
      buildPager(els, opts);

      return opts;
    }
    function saveOriginalOpts(opts)
    {
      $.each(opts.before, function(){});
      $.each(opts.after, function(){});
    }
    $.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName)
    {
      $(pager).each(function()
      {
        $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
      });
    };
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

      var pagerFn = function(e){};
      if((/mouseenter|mouseover/i).test(opts.pagerEvent));
      else 
      {
        $a.bind(opts.pagerEvent, pagerFn);
      }
    };
    $.fn.cycle.commonReset = function(curr, next, opts, w, h, rev)
    {
      $(opts.elements).not(curr).hide();
      $(curr).css('zIndex', opts.slideCount + (rev === true ? 0 : 0));
      $(next).css('zIndex', opts.slideCount + (rev === true ? 0 : 1));
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
      speed: 2000,
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
    };
  })(jQuery);