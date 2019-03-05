function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){_defineProperty(e,t,n[t])})}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}!function(e){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}($);var Collapse=function(e){var t="collapse",n="bs.collapse",i=e.fn[t],r={toggle:!0,parent:""},o={toggle:"boolean",parent:"(string|element)"},s={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},a="show",l="collapse",h="collapsing",d="collapsed",c="width",f="height",u={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},_=function(){function i(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var i=e(u.DATA_TOGGLE),r=0;r<i.length;r++){var o=i[r],s=Util.getSelectorFromElement(o);null!==s&&e(s).filter(t).length>0&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var _=i.prototype;return _.toggle=function(){e(this._element).hasClass(a)?this.hide():this.show()},_.show=function(){var t,r,o=this;if(!this._isTransitioning&&!e(this._element).hasClass(a)&&(this._parent&&0===(t=e.makeArray(e(this._parent).find(u.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(r=e(t).not(this._selector).data(n))&&r._isTransitioning))){var c=e.Event(s.SHOW);if(e(this._element).trigger(c),!c.isDefaultPrevented()){t&&(i._jQueryInterface.call(e(t).not(this._selector),"hide"),r||e(t).data(n,null));var f=this._getDimension();e(this._element).removeClass(l).addClass(h),this._element.style[f]=0,this._triggerArray.length>0&&e(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var _="scroll"+(f[0].toUpperCase()+f.slice(1)),g=Util.getTransitionDurationFromElement(this._element);e(this._element).one(Util.TRANSITION_END,function(){e(o._element).removeClass(h).addClass(l).addClass(a),o._element.style[f]="",o.setTransitioning(!1),e(o._element).trigger(s.SHOWN)}).emulateTransitionEnd(g),this._element.style[f]=this._element[_]+"px"}}},_.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(a)){var n=e.Event(s.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",Util.reflow(this._element),e(this._element).addClass(h).removeClass(l).removeClass(a),this._triggerArray.length>0)for(var r=0;r<this._triggerArray.length;r++){var o=this._triggerArray[r],c=Util.getSelectorFromElement(o);if(null!==c)e(c).hasClass(a)||e(o).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var f=Util.getTransitionDurationFromElement(this._element);e(this._element).one(Util.TRANSITION_END,function(){t.setTransitioning(!1),e(t._element).removeClass(h).addClass(l).trigger(s.HIDDEN)}).emulateTransitionEnd(f)}}},_.setTransitioning=function(e){this._isTransitioning=e},_.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},_._getConfig=function(e){return(e=_objectSpread({},r,e)).toggle=Boolean(e.toggle),Util.typeCheckConfig(t,e,o),e},_._getDimension=function(){return e(this._element).hasClass(c)?c:f},_._getParent=function(){var t=this,n=null;Util.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0];var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(r).each(function(e,n){t._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},_._addAriaAndCollapsedClass=function(t,n){if(t){var i=e(t).hasClass(a);n.length>0&&e(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(t){var n=Util.getSelectorFromElement(t);return n?e(n)[0]:null},i._jQueryInterface=function(t){return this.each(function(){var o=e(this),s=o.data(n),a=_objectSpread({},r,o.data(),"object"==typeof t&&t?t:{});if(!s&&a.toggle&&/show|hide/.test(t)&&(a.toggle=!1),s||(s=new i(this,a),o.data(n,s)),"string"==typeof t){if(void 0===s[t])throw new TypeError('No method named "'+t+'"');s[t]()}})},_createClass(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return r}}]),i}();return e(document).on(s.CLICK_DATA_API,u.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var i=e(this),r=Util.getSelectorFromElement(this);e(r).each(function(){var t=e(this),r=t.data(n)?"toggle":i.data();_._jQueryInterface.call(t,r)})}),e.fn[t]=_._jQueryInterface,e.fn[t].Constructor=_,e.fn[t].noConflict=function(){return e.fn[t]=i,_._jQueryInterface},_}($),Util=function(e){var t="transitionend";function n(t){var n=this,r=!1;return e(this).one(i.TRANSITION_END,function(){r=!0}),setTimeout(function(){r||i.triggerTransitionEnd(n)},t),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||"");try{return e(document).find(n).length>0?n:null}catch(e){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration");return parseFloat(n)?(n=n.split(",")[0],1e3*parseFloat(n)):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(n){e(n).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=n[r],s=t[r],a=s&&i.isElement(s)?"element":(l=s,{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(a))throw new Error(e.toUpperCase()+': Option "'+r+'" provided type "'+a+'" but expected type "'+o+'".')}var l}};return e.fn.emulateTransitionEnd=n,e.event.special[i.TRANSITION_END]={bindType:t,delegateType:t,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},i}($);function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){_defineProperty(e,t,n[t])})}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Dropdown=function(e){var t="dropdown",n="bs.dropdown",i="."+n,r=e.fn[t],o=new RegExp("38|40|27"),s={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,CLICK:"click"+i,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},a="disabled",l="show",h="dropup",d="dropright",c="dropleft",f="dropdown-menu-right",u="position-static",_='[data-toggle="dropdown"]',g=".dropdown form",p=".dropdown-menu",m=".navbar-nav",v=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",b="top-start",y="top-end",E="bottom-start",C="bottom-end",S="right-start",w="left-start",D={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},I={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},T=function(){function r(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var g=r.prototype;return g.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(a)){var t=r._getParentFromElement(this._element),n=e(this._menu).hasClass(l);if(r._clearMenus(),!n){var i={relatedTarget:this._element},o=e.Event(s.SHOW,i);if(e(t).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof Popper)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var h=this._element;"parent"===this._config.reference?h=t:Util.isElement(this._config.reference)&&(h=this._config.reference,void 0!==this._config.reference.jquery&&(h=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(t).addClass(u),this._popper=new Popper(h,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(t).closest(m).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(l),e(t).toggleClass(l).trigger(e.Event(s.SHOWN,i))}}}},g.dispose=function(){e.removeData(this._element,n),e(this._element).off(i),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},g.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},g._addEventListeners=function(){var t=this;e(this._element).on(s.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},g._getConfig=function(n){return n=_objectSpread({},this.constructor.Default,e(this._element).data(),n),Util.typeCheckConfig(t,n,this.constructor.DefaultType),n},g._getMenuElement=function(){if(!this._menu){var t=r._getParentFromElement(this._element);this._menu=e(t).find(p)[0]}return this._menu},g._getPlacement=function(){var t=e(this._element).parent(),n=E;return t.hasClass(h)?(n=b,e(this._menu).hasClass(f)&&(n=y)):t.hasClass(d)?n=S:t.hasClass(c)?n=w:e(this._menu).hasClass(f)&&(n=C),n},g._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},g._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=_objectSpread({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},r._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(n);if(i||(i=new r(this,"object"==typeof t?t:null),e(this).data(n,i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]()}})},r._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var i=e.makeArray(e(_)),o=0;o<i.length;o++){var a=r._getParentFromElement(i[o]),h=e(i[o]).data(n),d={relatedTarget:i[o]};if(h){var c=h._menu;if(e(a).hasClass(l)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(a,t.target))){var f=e.Event(s.HIDE,d);e(a).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),e(c).removeClass(l),e(a).removeClass(l).trigger(e.Event(s.HIDDEN,d)))}}}},r._getParentFromElement=function(t){var n,i=Util.getSelectorFromElement(t);return i&&(n=e(i)[0]),n||t.parentNode},r._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||e(t.target).closest(p).length)):o.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!e(this).hasClass(a))){var n=r._getParentFromElement(this),i=e(n).hasClass(l);if((i||27===t.which&&32===t.which)&&(!i||27!==t.which&&32!==t.which)){var s=e(n).find(v).get();if(0!==s.length){var h=s.indexOf(t.target);38===t.which&&h>0&&h--,40===t.which&&h<s.length-1&&h++,h<0&&(h=0),s[h].focus()}}else{if(27===t.which){var d=e(n).find(_)[0];e(d).trigger("focus")}e(this).trigger("click")}}},_createClass(r,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return D}},{key:"DefaultType",get:function(){return I}}]),r}();return e(document).on(s.KEYDOWN_DATA_API,_,T._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API,p,T._dataApiKeydownHandler).on(s.CLICK_DATA_API+" "+s.KEYUP_DATA_API,T._clearMenus).on(s.CLICK_DATA_API,_,function(t){t.preventDefault(),t.stopPropagation(),T._jQueryInterface.call(e(this),"toggle")}).on(s.CLICK_DATA_API,g,function(e){e.stopPropagation()}),e.fn[t]=T._jQueryInterface,e.fn[t].Constructor=T,e.fn[t].noConflict=function(){return e.fn[t]=r,T._jQueryInterface},T}($,Popper);function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){_defineProperty(e,t,n[t])})}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Modal=function(e){var t="modal",n=".bs.modal",i=e.fn.modal,r={backdrop:!0,keyboard:!0,focus:!0,show:!0},o={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},s={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},a="modal-scrollbar-measure",l="modal-backdrop",h="modal-open",d="fade",c="show",f={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},u=function(){function i(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(f.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var u=i.prototype;return u.toggle=function(e){return this._isShown?this.hide():this.show(e)},u.show=function(t){var n=this;if(!this._isTransitioning&&!this._isShown){e(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=e.Event(s.SHOW,{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(h),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(s.CLICK_DISMISS,f.DATA_DISMISS,function(e){return n.hide(e)}),e(this._dialog).on(s.MOUSEDOWN_DISMISS,function(){e(n._element).one(s.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},u.hide=function(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var i=e.Event(s.HIDE);if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=e(this._element).hasClass(d);if(r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(s.FOCUSIN),e(this._element).removeClass(c),e(this._element).off(s.CLICK_DISMISS),e(this._dialog).off(s.MOUSEDOWN_DISMISS),r){var o=Util.getTransitionDurationFromElement(this._element);e(this._element).one(Util.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},u.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},u.handleUpdate=function(){this._adjustDialog()},u._getConfig=function(e){return e=_objectSpread({},r,e),Util.typeCheckConfig(t,e,o),e},u._showElement=function(t){var n=this,i=e(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&Util.reflow(this._element),e(this._element).addClass(c),this._config.focus&&this._enforceFocus();var r=e.Event(s.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(r)};if(i){var a=Util.getTransitionDurationFromElement(this._element);e(this._dialog).one(Util.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},u._enforceFocus=function(){var t=this;e(document).off(s.FOCUSIN).on(s.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},u._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(s.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(s.KEYDOWN_DISMISS)},u._setResizeEvent=function(){var t=this;this._isShown?e(window).on(s.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(s.RESIZE)},u._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(h),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(s.HIDDEN)})},u._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},u._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=l,i&&e(this._backdrop).addClass(i),e(this._backdrop).appendTo(document.body),e(this._element).on(s.CLICK_DISMISS,function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),i&&Util.reflow(this._backdrop),e(this._backdrop).addClass(c),!t)return;if(!i)return void t();var r=Util.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(Util.TRANSITION_END,t).emulateTransitionEnd(r)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(c);var o=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass(d)){var a=Util.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(Util.TRANSITION_END,o).emulateTransitionEnd(a)}else o()}else t&&t()},u._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},u._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},u._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},u._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){e(f.FIXED_CONTENT).each(function(n,i){var r=e(i)[0].style.paddingRight,o=e(i).css("padding-right");e(i).data("padding-right",r).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),e(f.STICKY_CONTENT).each(function(n,i){var r=e(i)[0].style.marginRight,o=e(i).css("margin-right");e(i).data("margin-right",r).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")}),e(f.NAVBAR_TOGGLER).each(function(n,i){var r=e(i)[0].style.marginRight,o=e(i).css("margin-right");e(i).data("margin-right",r).css("margin-right",parseFloat(o)+t._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=e(document.body).css("padding-right");e(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},u._resetScrollbar=function(){e(f.FIXED_CONTENT).each(function(t,n){var i=e(n).data("padding-right");void 0!==i&&e(n).css("padding-right",i).removeData("padding-right")}),e(f.STICKY_CONTENT+", "+f.NAVBAR_TOGGLER).each(function(t,n){var i=e(n).data("margin-right");void 0!==i&&e(n).css("margin-right",i).removeData("margin-right")});var t=e(document.body).data("padding-right");void 0!==t&&e(document.body).css("padding-right",t).removeData("padding-right")},u._getScrollbarWidth=function(){var e=document.createElement("div");e.className=a,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},i._jQueryInterface=function(t,n){return this.each(function(){var o=e(this).data("bs.modal"),s=_objectSpread({},r,e(this).data(),"object"==typeof t&&t?t:{});if(o||(o=new i(this,s),e(this).data("bs.modal",o)),"string"==typeof t){if(void 0===o[t])throw new TypeError('No method named "'+t+'"');o[t](n)}else s.show&&o.show(n)})},_createClass(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return r}}]),i}();return e(document).on(s.CLICK_DATA_API,f.DATA_TOGGLE,function(t){var n,i=this,r=Util.getSelectorFromElement(this);r&&(n=e(r)[0]);var o=e(n).data("bs.modal")?"toggle":_objectSpread({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var a=e(n).one(s.SHOW,function(t){t.isDefaultPrevented()||a.one(s.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});u._jQueryInterface.call(e(n),o,this)}),e.fn.modal=u._jQueryInterface,e.fn.modal.Constructor=u,e.fn.modal.noConflict=function(){return e.fn.modal=i,u._jQueryInterface},u}($);