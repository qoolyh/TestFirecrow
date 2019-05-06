  (function(window, undefined)
  {
    var document = window.document;
    var jQuery = (function()
    {
      var jQuery = function(selector, context)
      {
        return new jQuery.fn.init(selector, context, rootjQuery);
      }, rootjQuery, quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, rdashAlpha = /-([a-z]|[0-9])/gi, rmsPrefix = /^-ms-/, fcamelCase = function(all, letter){}, readyList, DOMContentLoaded, toString = Object.prototype.toString, hasOwn = Object.prototype.hasOwnProperty, push = Array.prototype.push, trim = String.prototype.trim, class2type = {};
      jQuery.fn = jQuery.prototype = {
        constructor: jQuery, 
        init: function(selector, context, rootjQuery)
        {
          var match, elem;
          if(!selector)
          {
            return this;
          }

          if(selector.nodeType)
          {
            this[0] = selector;
            this.length = 1;
            return this;
          }

          if(typeof selector === 'string')
          {
            if(selector.charAt(0) === '<');
            else 
            {
              match = quickExpr.exec(selector);
            }

            if(match && (match[1] || !context))
            {
              if(match[1]);
              else 
              {
                elem = document.getElementById(match[2]);
                if(elem && elem.parentNode)
                {
                  this.length = 1;
                  this[0] = elem;
                }

                return this;
              }
            }
            else if(!context)
            {
              return (context || rootjQuery).find(selector);
            }
          }
          else if(jQuery.isFunction(selector))
          {
            return rootjQuery.ready(selector);
          }
        }, 
        jquery: '1.7.2', 
        length: 0, 
        pushStack: function(elems, name, selector)
        {
          var ret = this.constructor();
          if(jQuery.isArray(elems));
          else 
          {
            jQuery.merge(ret, elems);
          }

          return ret;
        }, 
        each: function(callback, args)
        {
          return jQuery.each(this, callback, args);
        }, 
        ready: function(fn)
        {
          jQuery.bindReady();
          readyList.add(fn);
          return this;
        }, 
        push: push
      };
      jQuery.fn.init.prototype = jQuery.fn;
      jQuery.extend = jQuery.fn.extend = function()
      {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0], i = 1, length = arguments.length, deep = false;
        if(typeof target === 'boolean')
        {
          deep = target;
          target = arguments[1];
          i = 2;
        }

        if(length === i)
        {
          target = this;
          --i;
        }

        for(;i < length;i++)
        {
          if((options = arguments[i]) != null)
          {
            for(name in options)
            {
              src = target[name];
              copy = options[name];
              if(deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))))
              {
                if(copyIsArray);
                else 
                {
                  clone = src && jQuery.isPlainObject(src) ? src : 0;
                }

                jQuery.extend(deep, clone, copy);
              }
              else if(copy !== undefined)
              {
                target[name] = copy;
              }
            }
          }
        }

        return target;
      };
      jQuery.extend({
        noConflict: function(deep){}, 
        isReady: false, 
        readyWait: 1, 
        holdReady: function(hold){}, 
        ready: function(wait)
        {
          if(wait === true || (wait !== true && !(jQuery.isReady)))
          {
            readyList.fireWith(document, [jQuery]);
            if(jQuery.fn.trigger)
            {
              jQuery(document);
            }
          }
        }, 
        bindReady: function()
        {
          if(readyList)
          {
            return ;
          }

          readyList = jQuery.Callbacks('once memory');
          if(document.addEventListener)
          {
            document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
          }
        }, 
        isFunction: function(obj)
        {
          return jQuery.type(obj) === 'function';
        }, 
        isArray: Array.isArray || function(obj)
        {
          return jQuery.type(obj) === 'array';
        }, 
        isWindow: function(obj)
        {
          return obj != null && obj == obj.window;
        }, 
        isNumeric: function(obj){}, 
        type: function(obj)
        {
          return obj == null ? 0 : class2type[toString.call(obj)] || 'object';
        }, 
        isPlainObject: function(obj)
        {
          if(!obj || jQuery.type(obj) !== 'object' || obj.nodeType || jQuery.isWindow(obj))
          {
            return false;
          }

          var key;
          for(key in obj)
;
          return key === undefined || hasOwn.call(obj, key);
        }, 
        isEmptyObject: function(obj){}, 
        error: function(msg){}, 
        parseJSON: function(data){}, 
        parseXML: function(data){}, 
        noop: function(){}, 
        globalEval: function(data){}, 
        camelCase: function(string)
        {
          return string.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase);
        }, 
        nodeName: function(elem, name){}, 
        each: function(object, callback, args)
        {
          var name, i = 0, length = object.length, isObj = length === undefined || jQuery.isFunction(object);
          if(args);
          else 
          {
            if(isObj)
            {
              for(name in object)
              {
                if(callback.call(object[name], name, object[name]) === false);
              }
            }
            else 
            {
              for(;i < length;)
              {
                if(callback.call(object[i], i, object[i++]) === false);
              }
            }
          }

          return object;
        }, 
        trim: trim ? function(text)
        {
          return text == null ? 0 : trim.call(text);
        } : 0, 
        makeArray: function(array, results)
        {
          var ret = results || [];
          if(array != null)
          {
            var type = jQuery.type(array);
            if(array.length == null || type === 'string' || type === 'function')
            {
              push.call(ret, array);
            }
          }

          return ret;
        }, 
        inArray: function(elem, array, i){}, 
        merge: function(first, second)
        {
          var i = first.length;
          first.length = i;
          return first;
        }, 
        grep: function(elems, callback, inv){}, 
        map: function(elems, callback, arg){}, 
        guid: 1, 
        proxy: function(fn, context){}, 
        access: function(elems, fn, key, value, chainable, emptyGet, pass)
        {
          var exec, i = 0, length = elems.length;
          if(key && typeof key === 'object');
          else if(value !== undefined)
          {
            exec = pass === undefined && jQuery.isFunction(value);
            if(fn)
            {
              for(;i < length;i++)
              {
                fn(elems[i], key, exec ? 0 : value, pass);
              }
            }

            chainable = 1;
          }


          return chainable ? elems : 0;
        }, 
        now: function()
        {
          return (new Date()).getTime();
        }, 
        uaMatch: function(ua){}, 
        sub: function(){}, 
        browser: {}
      });
      jQuery.each(('Boolean Number String Function Array Date RegExp Object').split(' '), function(i, name)
      {
        class2type[('[object ' + name) + ']'] = name.toLowerCase();
      });
      rootjQuery = jQuery(document);
      if(document.addEventListener)
      {
        DOMContentLoaded = function()
        {
          jQuery.ready();
        };
      }

      return jQuery;
    })();
    var flagsCache = {};
    function createFlags(flags)
    {
      var object = flagsCache[flags] = {}, i, length;
      flags = flags.split(/\s+/);
      for(i = 0, length = flags.length;i < length;i++)
      {
        object[flags[i]] = true;
      }

      return object;
    }
    jQuery.Callbacks = function(flags)
    {
      flags = flags ? flagsCache[flags] || createFlags(flags) : 0;
      var list = [], stack = [], memory, firing, firingStart, firingLength, firingIndex, add = function(args)
      {
        var i, length, elem, type;
        for(i = 0, length = args.length;i < length;i++)
        {
          elem = args[i];
          type = jQuery.type(elem);
          if(type === 'array');
          else if(type === 'function')
          {
            if(!(flags.unique))
            {
              list.push(elem);
            }
          }
        }
      }, fire = function(context, args)
      {
        args = args;
        firingIndex = firingStart || 0;
        firingLength = list.length;
        for(;list && firingIndex < firingLength;firingIndex++)
        {
          if(list[firingIndex].apply(context, args) === false);
        }
      }, self = {
        add: function()
        {
          if(list)
          {
            add(arguments);
          }

          return this;
        }, 
        fireWith: function(context, args)
        {
          if(stack)
          {
            if(firing);
            else if(!(flags.once && memory))
            {
              fire(context, args);
            }
          }

          return this;
        }
      };
      return self;
    };
    jQuery.extend({
      Deferred: function(func){}, 
      when: function(firstParam){}
    });
    jQuery.support = (function()
    {
      var support, tds, div;
      support = {};
      jQuery(function()
      {
        var container, outer, inner, td, offsetSupport, marginDiv, conMarginTop, style, html, positionTopLeftWidthHeight, paddingMarginBorderVisibility, paddingMarginBorder, body = document.getElementsByTagName('body')[0];
        conMarginTop = 1;
        paddingMarginBorder = 'padding:0;margin:0;border:';
        positionTopLeftWidthHeight = 'position:absolute;top:0;left:0;width:1px;height:1px;';
        paddingMarginBorderVisibility = paddingMarginBorder + '0;visibility:hidden;';
        style = (('style=\'' + positionTopLeftWidthHeight) + paddingMarginBorder) + '5px solid #000;';
        html = ((((((('<div ' + style) + 'display:block;\'><div style=\'') + paddingMarginBorder) + '0;display:block;overflow:hidden;\'></div></div>') + '<table ') + style) + '\' cellpadding=\'0\' cellspacing=\'0\'>') + '<tr><td></td></tr></table>';
        container = document.createElement('div');
        container.style.cssText = ((paddingMarginBorderVisibility + 'width:0;height:0;position:static;top:0;margin-top:') + conMarginTop) + 'px';
        body.insertBefore(container, body.firstChild);
        div = document.createElement('div');
        container.appendChild(div);
        div.innerHTML = ('<table><tr><td style=\'' + paddingMarginBorder) + '0;display:none\'></td><td>t</td></tr></table>';
        tds = div.getElementsByTagName('td');
        tds[0].style.display = '';
        tds[1].style.display = 'none';
        if(window.getComputedStyle)
        {
          div.innerHTML = '';
          marginDiv = document.createElement('div');
          marginDiv.style.width = '0';
          marginDiv.style.marginRight = '0';
          div.style.width = '2px';
          div.appendChild(marginDiv);
        }

        if(typeof (div.style.zoom) !== 'undefined')
        {
          div.innerHTML = '';
          div.style.width = div.style.padding = '1px';
          div.style.border = 0;
          div.style.overflow = 'hidden';
          div.style.display = 'inline';
          div.style.zoom = 1;
          div.style.display = 'block';
          div.style.overflow = 'visible';
          div.innerHTML = '<div style=\'width:5px;\'></div>';
        }

        div.style.cssText = positionTopLeftWidthHeight + paddingMarginBorderVisibility;
        div.innerHTML = html;
        outer = div.firstChild;
        inner = outer.firstChild;
        td = outer.nextSibling.firstChild.firstChild;
        offsetSupport = {
          doesNotAddBorder: inner.offsetTop !== 5, 
          doesAddBorderForTableAndCells: td.offsetTop === 5
        };
        inner.style.position = 'fixed';
        inner.style.top = '20px';
        offsetSupport.fixedPosition = inner.offsetTop === 20;
        inner.style.position = inner.style.top = '';
        offsetSupport.subtractsBorderForOverflowNotVisible = inner.offsetTop === -5;
        offsetSupport.doesNotIncludeMarginInBodyOffset = body.offsetTop !== conMarginTop;
        jQuery.extend(support, offsetSupport);
      });
      return support;
    })();
    jQuery.extend({
      cache: {}, 
      uuid: 0, 
      expando: 'jQuery' + (jQuery.fn.jquery + Math.random()).replace(/\D/g, ''), 
      noData: {}, 
      hasData: function(elem){}, 
      data: function(elem, name, data, pvt)
      {
        var thisCache, ret, internalKey = jQuery.expando, getByName = typeof name === 'string', isNode = elem.nodeType, cache = isNode ? jQuery.cache : 0, id = isNode ? elem[internalKey] : 0, isEvents = name === 'events';
        if((!id || !(cache[id]) || !isEvents && !pvt) && getByName && data === undefined)
        {
          return ;
        }

        if(!id)
        {
          if(isNode)
          {
            elem[internalKey] = id = ++jQuery.uuid;
          }
        }

        if(!(cache[id]))
        {
          cache[id] = {};
        }

        thisCache = cache[id];
        if(data !== undefined)
        {
          thisCache[jQuery.camelCase(name)] = data;
        }

        if(getByName)
        {
          ret = thisCache[name];
          if(ret == null)
          {
            ret = thisCache[jQuery.camelCase(name)];
          }
        }
        else 
        {
          ret = thisCache;
        }

        return ret;
      }, 
      removeData: function(elem, name, pvt){}, 
      _data: function(elem, name, data)
      {
        return jQuery.data(elem, name, data, true);
      }, 
      acceptData: function(elem){}
    });
    jQuery.fn.extend({
      data: function(key, value){}, 
      removeData: function(key){}
    });
    jQuery.extend({
      _mark: function(elem, type){}, 
      _unmark: function(force, elem, type){}, 
      queue: function(elem, type, data)
      {
        var q;
        if(elem)
        {
          type = type + 'queue';
          q = jQuery._data(elem, type);
          if(data)
          {
            if(!q || jQuery.isArray(data))
            {
              q = jQuery._data(elem, type, jQuery.makeArray(data));
            }
            else 
            {
              q.push(data);
            }
          }

          return q;
        }
      }, 
      dequeue: function(elem, type)
      {
        type = type;
        var queue = jQuery.queue(elem, type), fn = queue.shift(), hooks = {};
        if(fn === 'inprogress')
        {
          fn = queue.shift();
        }

        if(fn)
        {
          if(type === 'fx')
          {
            queue.unshift('inprogress');
          }

          fn.call(elem, function(){}, hooks);
        }
      }
    });
    jQuery.fn.extend({
      queue: function(type, data)
      {
        return data === undefined ? 0 : this.each(function()
        {
          var queue = jQuery.queue(this, type, data);
          if(type === 'fx' && queue[0] !== 'inprogress')
          {
            jQuery.dequeue(this, type);
          }
        });
      }, 
      dequeue: function(type){}, 
      delay: function(time, type){}, 
      clearQueue: function(type){}, 
      promise: function(type, object){}
    });
    var rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, nodeHook;
    jQuery.fn.extend({
      attr: function(name, value)
      {
        return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
      }, 
      removeAttr: function(name){}, 
      prop: function(name, value){}, 
      removeProp: function(name){}, 
      addClass: function(value){}, 
      removeClass: function(value){}, 
      toggleClass: function(value, stateVal){}, 
      hasClass: function(selector){}, 
      val: function(value){}
    });
    jQuery.extend({
      valHooks: {}, 
      attrFn: {}, 
      attr: function(elem, name, value, pass)
      {
        var hooks, notxml, nType = elem.nodeType;
        notxml = nType !== 1 || !(jQuery.isXMLDoc(elem));
        if(notxml)
        {
          name = name.toLowerCase();
          hooks = jQuery.attrHooks[name] || (rboolean.test(name) ? 0 : nodeHook);
        }

        if(value !== undefined)
        {
          if(value === null);
          else if(hooks);
          else 
          {
            elem.setAttribute(name, '' + value);
            return value;
          }
        }
      }, 
      removeAttr: function(elem, value){}, 
      attrHooks: {}, 
      propFix: {}, 
      prop: function(elem, name, value){}, 
      propHooks: {}
    });
    var rtypenamespace = /^([^\.]*)?(?:\.(.+))?$/, rhoverHack = /(?:^|\s)hover(\.\S+)?\b/, rmouseEvent = /^(?:mouse|contextmenu)|click/, hoverHack = function(events)
    {
      return jQuery.event.special.hover ? 0 : events.replace(rhoverHack, 'mouseenter$1 mouseleave$1');
    };
    jQuery.event = {
      add: function(elem, types, handler, data, selector)
      {
        var elemData, eventHandle, events, t, tns, type, handleObj, handleObjIn, handlers, special;
        if(elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data(elem)));

        events = elemData.events;
        if(!events)
        {
          elemData.events = events = {};
        }

        eventHandle = elemData.handle;
        if(!eventHandle)
        {
          eventHandle = function(e)
          {
            return typeof jQuery !== 'undefined' && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : 0;
          };
          eventHandle.elem = elem;
        }

        types = jQuery.trim(hoverHack(types)).split(' ');
        for(t = 0;t < types.length;t++)
        {
          tns = rtypenamespace.exec(types[t]);
          type = tns[1];
          special = jQuery.event.special[type] || {};
          type = (selector ? 0 : special.bindType) || type;
          special = jQuery.event.special[type] || {};
          handleObj = jQuery.extend({
            origType: tns[1], 
            handler: handler
          }, handleObjIn);
          handlers = events[type];
          if(!handlers)
          {
            handlers = events[type] = [];
            handlers.delegateCount = 0;
            if(!(special.setup))
            {
              if(elem.addEventListener)
              {
                elem.addEventListener(type, eventHandle, false);
              }
            }
          }

          if(selector);
          else 
          {
            handlers.push(handleObj);
          }
        }
      }, 
      dispatch: function(event)
      {
        event = jQuery.event.fix(event);
        var handlers = (jQuery._data(this, 'events'))[event.type], delegateCount = handlers.delegateCount, args = ([]).slice.call(arguments, 0), run_all = !(event.exclusive) && !(event.namespace), handlerQueue = [], i, j, ret, matched, handleObj;
        args[0] = event;
        if(handlers.length > delegateCount)
        {
          handlerQueue.push({
            elem: this, 
            matches: handlers.slice(delegateCount)
          });
        }

        for(i = 0;i < handlerQueue.length && !(event.isPropagationStopped());i++)
        {
          matched = handlerQueue[i];
          event.currentTarget = matched.elem;
          for(j = 0;j < matched.matches.length && !(event.isImmediatePropagationStopped());j++)
          {
            handleObj = matched.matches[j];
            if(run_all)
            {
              ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
              if(ret !== undefined)
              {
                event.result = ret;
                if(ret === false)
                {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
        }

        return event.result;
      }, 
      fixHooks: {}, 
      mouseHooks: {
        filter: function(event, original)
        {
          return event;
        }
      }, 
      fix: function(event)
      {
        var originalEvent = event, fixHook = jQuery.event.fixHooks[event.type];
        event = jQuery.Event(originalEvent);
        return fixHook.filter ? fixHook.filter(event, originalEvent) : 0;
      }, 
      special: {}
    };
    jQuery.Event = function(src, props)
    {
      if(!(this instanceof jQuery.Event))
      {
        return new jQuery.Event(src, props);
      }

      if(src && src.type)
      {
        this.originalEvent = src;
        this.type = src.type;
      }
    };
    function returnFalse()
    {
      return false;
    }
    jQuery.Event.prototype = {
      preventDefault: function()
      {
        var e = this.originalEvent;
        if(e.preventDefault)
        {
          e.preventDefault();
        }
      }, 
      stopPropagation: function()
      {
        var e = this.originalEvent;
        if(e.stopPropagation)
        {
          e.stopPropagation();
        }
      }, 
      isPropagationStopped: returnFalse, 
      isImmediatePropagationStopped: returnFalse
    };
    jQuery.fn.extend({
      on: function(types, selector, data, fn, one)
      {
        return this.each(function()
        {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }, 
      one: function(types, selector, data, fn){}, 
      off: function(types, selector, fn){}, 
      bind: function(types, data, fn){}, 
      unbind: function(types, fn){}, 
      live: function(types, data, fn){}, 
      die: function(types, fn){}, 
      delegate: function(selector, types, data, fn){}, 
      undelegate: function(selector, types, fn){}, 
      trigger: function(type, data){}, 
      triggerHandler: function(type, data){}, 
      toggle: function(fn){}, 
      hover: function(fnOver, fnOut){}
    });
    jQuery.each((('blur focus focusin focusout load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ') + 'change select submit keydown keypress keyup error contextmenu').split(' '), function(i, name)
    {
      jQuery.fn[name] = function(data, fn)
      {
        if(fn == null)
        {
          fn = data;
          data = null;
        }

        return arguments.length > 0 ? this.on(name, null, data, fn) : 0;
      };
      if(rmouseEvent.test(name))
      {
        jQuery.event.fixHooks[name] = jQuery.event.mouseHooks;
      }
    });
    (function()
    {
      var Sizzle = function(selector, context, results, seed){};
      var Expr = Sizzle.selectors = {
        find: {}
      };
      var makeArray = function(array, results)
      {
        array = Array.prototype.slice.call(array, 0);
        if(results)
        {
          results.push.apply(results, array);
          return results;
        }
      };
      try
      {
        (document.documentElement.childNodes, null).nodeType;
      }
      catch(e){}
      (function()
      {
        var form = document.createElement('div'), id = 'script' + (new Date()).getTime(), root = document.documentElement;
        form.innerHTML = ('<a name=\'' + id) + '\'/>';
        root.insertBefore(form, root.firstChild);
        root.removeChild(form);
      })();
      if(document.querySelectorAll)
      {
        (function()
        {
          Sizzle = function(query, context, extra, seed)
          {
            context = context;
            if(!seed && !(Sizzle.isXML(context)))
            {
              var match = (/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/).exec(query);
              if(match && (context.nodeType === 1 || context.nodeType === 9))
              {
                if(match[1]);
                else if(match[2] && Expr.find.CLASS && context.getElementsByClassName)
                {
                  return makeArray(context.getElementsByClassName(match[2]), extra);
                }
              }

              if(context.nodeType === 9)
              {
                try
                {
                  return makeArray(context.querySelectorAll(query), extra);
                }
                catch(qsaError){}
              }
            }
          };
        })();
      }

      (function()
      {
        Expr.find.CLASS = function(match, context, isXML){};
      })();
      Sizzle.isXML = function(elem)
      {
        var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;
        return documentElement ? documentElement.nodeName !== 'HTML' : 0;
      };
      jQuery.find = Sizzle;
      jQuery.isXMLDoc = Sizzle.isXML;
    })();
    jQuery.fn.extend({
      find: function(selector)
      {
        var i, l;
        var ret = this.pushStack('', 'find', selector);
        for(i = 0, l = this.length;i < l;i++)
        {
          jQuery.find(selector, this[i], ret);
        }

        return ret;
      }, 
      has: function(target){}, 
      not: function(selector){}, 
      filter: function(selector){}, 
      is: function(selector){}, 
      closest: function(selectors, context){}, 
      index: function(elem){}, 
      add: function(selector, context){}, 
      andSelf: function(){}
    });
    jQuery.extend({
      filter: function(expr, elems, not){}, 
      dir: function(elem, dir, until){}, 
      nth: function(cur, result, dir, elem){}, 
      sibling: function(n, elem){}
    });
    jQuery.fn.extend({
      text: function(value){}, 
      wrapAll: function(html){}, 
      wrapInner: function(html){}, 
      wrap: function(html){}, 
      unwrap: function(){}, 
      append: function(){}, 
      prepend: function(){}, 
      before: function(){}, 
      after: function(){}, 
      remove: function(selector, keepData){}, 
      empty: function(){}, 
      clone: function(dataAndEvents, deepDataAndEvents){}, 
      html: function(value){}, 
      replaceWith: function(value){}, 
      detach: function(selector){}, 
      domManip: function(args, table, callback){}
    });
    jQuery.extend({
      clone: function(elem, dataAndEvents, deepDataAndEvents){}, 
      clean: function(elems, context, fragment, scripts){}, 
      cleanData: function(elems){}
    });
    var rupper = /([A-Z]|^ms)/g, curCSS, getComputedStyle;
    jQuery.extend({
      cssHooks: {
        opacity: {
          get: function(elem, computed)
          {
            if(computed)
            {
              var ret = curCSS(elem, 'opacity');
              return ret === '' ? 0 : ret;
            }
            else 
            {
              return elem.style.opacity;
            }
          }
        }
      }, 
      cssNumber: {'opacity': true}, 
      cssProps: {}, 
      style: function(elem, name, value, extra)
      {
        var ret, origName = jQuery.camelCase(name), style = elem.style, hooks = jQuery.cssHooks[origName];
        name = jQuery.cssProps[origName] || origName;
        if(value !== undefined)
        {
          if(!hooks || !('set' in hooks))
          {
            try
            {
              style[name] = value;
            }
            catch(e){}
          }
        }
        else 
        {
          if(hooks && 'get' in hooks && (ret = hooks.get(elem, false, extra)) !== undefined)
          {
            return ret;
          }
        }
      }, 
      css: function(elem, name, extra)
      {
        var ret, hooks;
        name = jQuery.camelCase(name);
        hooks = jQuery.cssHooks[name];
        name = jQuery.cssProps[name] || name;
        if(hooks && 'get' in hooks && (ret = hooks.get(elem, true, extra)) !== undefined)
        {
          return ret;
        }
        else if(curCSS)
        {
          return curCSS(elem, name);
        }
      }, 
      swap: function(elem, options, callback){}
    });
    if(document.defaultView && document.defaultView.getComputedStyle)
    {
      getComputedStyle = function(elem, name)
      {
        var ret, defaultView, computedStyle;
        name = name.replace(rupper, '-$1').toLowerCase();
        if((defaultView = elem.ownerDocument.defaultView) && (computedStyle = defaultView.getComputedStyle(elem, null)))
        {
          ret = computedStyle.getPropertyValue(name);
        }

        return ret;
      };
    }

    curCSS = getComputedStyle;
    jQuery(function(){});
    var prefilters = {}, transports = {}, allTypes = ['*/'] + ['*'];
    function addToPrefiltersOrTransports(structure)
    {
      return function(dataTypeExpression, func){};
    }
    function ajaxExtend(target, src)
    {
      var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions;
      for(key in src)
      {
        if(src[key] !== undefined)
        {
          (flatOptions[key] ? 0 : deep || (deep = {}))[key] = src[key];
        }
      }

      if(deep)
      {
        jQuery.extend(true, target, deep);
      }
    }
    jQuery.fn.extend({
      load: function(url, params, callback){}, 
      serialize: function(){}, 
      serializeArray: function(){}
    });
    jQuery.extend({
      getScript: function(url, callback){}, 
      getJSON: function(url, data, callback){}, 
      ajaxSetup: function(target, settings)
      {
        if(settings);
        else 
        {
          settings = target;
          target = jQuery.ajaxSettings;
        }

        ajaxExtend(target, settings);
        return target;
      }, 
      ajaxSettings: {
        accepts: {
          xml: 'application/xml, text/xml', 
          '*': allTypes
        }, 
        contents: {xml: /xml/, json: /json/}, 
        converters: {
          '* text': window.String, 
          'text xml': jQuery.parseXML
        }, 
        flatOptions: {}
      }, 
      ajaxPrefilter: addToPrefiltersOrTransports(prefilters), 
      ajaxTransport: addToPrefiltersOrTransports(transports), 
      ajax: function(url, options){}, 
      param: function(a, traditional){}
    });
    jQuery.extend({
      active: 0, 
      lastModified: {}, 
      etag: {}
    });
    jQuery.ajaxSetup({
      jsonp: 'callback', 
      jsonpCallback: function(){}
    });
    jQuery.ajaxSetup({
      accepts: {script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'}, 
      contents: {script: /javascript|ecmascript/}, 
      converters: {
        'text script': function(text){}
      }
    });
    function createStandardXHR()
    {
      try
      {
        return new window.XMLHttpRequest();
      }
      catch(e){}
    }
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? 0 : createStandardXHR;
    (function(xhr)
    {
      jQuery.extend(jQuery.support, {
        ajax: !(!xhr), 
        cors: !(!xhr) && 'withCredentials' in xhr
      });
    })(jQuery.ajaxSettings.xhr());
    var rfxtypes = /^(?:toggle|show|hide)$/, timerId, fxAttrs = [['height', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'], ['width', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight'], ['opacity']], fxNow;
    jQuery.fn.extend({
      show: function(speed, easing, callback)
      {
        var elem, display;
        if(speed || speed === 0);
        else 
        {
          for(var i = 0, j = this.length;i < j;i++);
          for(i = 0;i < j;i++)
          {
            elem = this[i];
            if(elem.style)
            {
              display = elem.style.display;
              if(display === '' || display === 'none')
              {
                elem.style.display = jQuery._data(elem, 'olddisplay');
              }
            }
          }

          return this;
        }
      }, 
      hide: function(speed, easing, callback)
      {
        if(speed || speed === 0);
        else 
        {
          var elem, display, i = 0, j = this.length;
          for(;i < j;i++)
          {
            elem = this[i];
            if(elem.style)
            {
              display = jQuery.css(elem, 'display');
              if(display !== 'none' && !(jQuery._data(elem, 'olddisplay')))
              {
                jQuery._data(elem, 'olddisplay', display);
              }
            }
          }

          for(i = 0;i < j;i++)
          {
            if(this[i].style)
            {
              this[i].style.display = 'none';
            }
          }

          return this;
        }
      }, 
      _toggle: jQuery.fn.toggle, 
      toggle: function(fn, fn2, callback){}, 
      fadeTo: function(speed, to, easing, callback){}, 
      animate: function(prop, speed, easing, callback)
      {
        var optall = jQuery.speed(speed, easing, callback);
        prop = jQuery.extend({}, prop);
        function doAnimation()
        {
          var opt = jQuery.extend({}, optall), hidden = jQuery(this), name, val, p, e, method;
          opt.animatedProperties = {};
          for(name in prop)
          {
            val = prop[name];
            if(jQuery.isArray(val));
            else 
            {
              opt.animatedProperties[name] = opt.specialEasing || opt.easing || 'swing';
            }
          }

          for(p in prop)
          {
            e = new jQuery.fx(this, opt, p);
            val = prop[p];
            if(rfxtypes.test(val))
            {
              method = jQuery._data(this, 'toggle' + p) || (val === 'toggle' ? 0 : 0);
              if(method);
              else 
              {
                e[val]();
              }
            }
          }

          return true;
        }
        return optall.queue === false ? 0 : this.queue(optall.queue, doAnimation);
      }, 
      stop: function(type, clearQueue, gotoEnd){}
    });
    function createFxNow()
    {
      setTimeout(clearFxNow, 0);
      return fxNow = jQuery.now();
    }
    function clearFxNow()
    {
      fxNow = undefined;
    }
    function genFx(type, num)
    {
      var obj = {};
      return obj;
    }
    jQuery.each({
      slideDown: genFx('show', 1), 
      slideUp: genFx('hide', 1), 
      slideToggle: genFx('toggle', 1), 
      fadeIn: {opacity: 'show'}, 
      fadeOut: {opacity: 'hide'}, 
      fadeToggle: {}
    }, function(name, props)
    {
      jQuery.fn[name] = function(speed, easing, callback)
      {
        return this.animate(props, speed, easing, callback);
      };
    });
    jQuery.extend({
      speed: function(speed, easing, fn)
      {
        var opt = speed && typeof speed === 'object' ? 0 : {
          complete: fn || (!fn && easing) || jQuery.isFunction(speed), 
          duration: speed, 
          easing: fn || easing && !(jQuery.isFunction(easing))
        };
        opt.duration = jQuery.fx.off ? 0 : typeof (opt.duration) === 'number' ? opt.duration : 0;
        if(opt.queue == null)
        {
          opt.queue = 'fx';
        }

        opt.old = opt.complete;
        opt.complete = function(noUnmark)
        {
          if(jQuery.isFunction(opt.old))
          {
            opt.old.call(this);
          }

          if(opt.queue)
          {
            jQuery.dequeue(this, opt.queue);
          }
        };
        return opt;
      }, 
      easing: {
        swing: function(p)
        {
          return (-(Math.cos(p * Math.PI)) / 2) + 0.5;
        }
      }, 
      timers: [], 
      fx: function(elem, options, prop)
      {
        this.options = options;
        this.elem = elem;
        this.prop = prop;
        options.orig = options.orig || {};
      }
    });
    jQuery.fx.prototype = {
      update: function()
      {
        jQuery.fx.step[this.prop](this);
      }, 
      cur: function()
      {
        var parsed, r = jQuery.css(this.elem, this.prop);
        return isNaN(parsed = parseFloat(r)) ? 0 : parsed;
      }, 
      custom: function(from, to, unit)
      {
        var self = this, fx = jQuery.fx;
        this.startTime = fxNow || createFxNow();
        this.end = to;
        this.start = from;
        this.unit = unit || this.unit || (jQuery.cssNumber[this.prop] ? '' : 0);
        function t(gotoEnd)
        {
          return self.step(gotoEnd);
        }
        if(t() && jQuery.timers.push(t) && !timerId)
        {
          timerId = setInterval(fx.tick, fx.interval);
        }
      }, 
      show: function()
      {
        var dataShow = jQuery._data(this.elem, 'fxshow' + this.prop);
        this.options.orig[this.prop] = dataShow || jQuery.style(this.elem, this.prop);
        this.options.show = true;
        if(dataShow !== undefined);
        else 
        {
          this.custom(this.prop === 'width' || this.prop === 'height' ? 0 : 0, this.cur());
        }

        jQuery(this.elem).show();
      }, 
      hide: function()
      {
        this.options.orig[this.prop] = jQuery._data(this.elem, 'fxshow' + this.prop) || jQuery.style(this.elem, this.prop);
        this.options.hide = true;
        this.custom(this.cur(), 0);
      }, 
      step: function(gotoEnd)
      {
        var p, n, complete, t = fxNow || createFxNow(), done = true, elem = this.elem, options = this.options;
        if(gotoEnd || t >= (options.duration + this.startTime))
        {
          this.now = this.end;
          this.update();
          options.animatedProperties[this.prop] = true;
          if(done)
          {
            if(options.hide)
            {
              jQuery(elem).hide();
            }

            if(options.hide || options.show)
            {
              for(p in options.animatedProperties)
              {
                jQuery.style(elem, p, options.orig[p]);
              }
            }

            complete = options.complete;
            if(complete)
            {
              complete.call(elem);
            }
          }

          return false;
        }
        else 
        {
          if(options.duration == Infinity);
          else 
          {
            n = t - this.startTime;
            this.state = n / options.duration;
            this.pos = jQuery.easing[options.animatedProperties[this.prop]](this.state, n, 0, 1, options.duration);
            this.now = this.start + ((this.end - this.start) * this.pos);
          }

          this.update();
        }

        return true;
      }
    };
    jQuery.extend(jQuery.fx, {
      tick: function()
      {
        var timer, timers = jQuery.timers, i = 0;
        for(;i < timers.length;i++)
        {
          timer = timers[i];
          if(!(timer()) && timers[i] === timer)
          {
            timers.splice(i--, 1);
          }
        }

        if(!(timers.length))
        {
          jQuery.fx.stop();
        }
      }, 
      interval: 13, 
      stop: function()
      {
        clearInterval(timerId);
        timerId = null;
      }, 
      speeds: {}, 
      step: {}
    });
    jQuery.each(fxAttrs.concat.apply([], fxAttrs), function(i, prop)
    {
      if(prop.indexOf('margin'))
      {
        jQuery.fx.step[prop] = function(fx)
        {
          jQuery.style(fx.elem, prop, Math.max(0, fx.now) + fx.unit);
        };
      }
    });
    jQuery.fn.extend({
      position: function(){}, 
      offsetParent: function(){}
    });
    window.$ = jQuery;
  })(window);