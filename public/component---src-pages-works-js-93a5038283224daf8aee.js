(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[137],{1190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(7294),r=m(a),i=n(3935),l=n(5697),s=m(n(7882)),c=n(538),u=n(2748);function m(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.portal=(0,c.createPortalContainer)("div"),e.unzoom=e.unzoom.bind(e),e._handleScroll=e._handleScroll.bind(e),e._handleKeyDown=e._handleKeyDown.bind(e),e._handleResize=e._handleResize.bind(e),e._handleTouchStart=e._handleTouchStart.bind(e),e._handleTouchMove=e._handleTouchMove.bind(e),e._handleTouchEnd=e._handleTouchEnd.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this;this.pageYOffset=window.pageYOffset,this.loadTimeout=setTimeout((function(){window.addEventListener("scroll",e._handleScroll),window.addEventListener("keydown",e._handleKeyDown),window.addEventListener("ontouchstart",e._handleTouchStart),window.addEventListener("ontouchmove",e._handleTouchMove),window.addEventListener("ontouchend",e._handleTouchEnd),window.addEventListener("ontouchcancel",e._handleTouchEnd),window.addEventListener("resize",e._handleResize)}),s.default.transitionDuration)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.loadTimeout),window.removeEventListener("scroll",this._handleScroll),window.removeEventListener("keydown",this._handleKeyDown),window.removeEventListener("ontouchstart",this._handleTouchStart),window.removeEventListener("ontouchmove",this._handleTouchMove),window.removeEventListener("ontouchend",this._handleTouchEnd),window.removeEventListener("ontouchcancel",this._handleTouchEnd),window.removeEventListener("resize",this._handleResize),(0,c.removePortalContainer)(this.portal)}},{key:"render",value:function(){return this.portal?(0,i.createPortal)(r.default.createElement("div",{onClick:this.unzoom},this._cloneChild()),this.portal):null}},{key:"unzoom",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.force,n=e.allowRefocus;return this.props.controlledEventFn&&!t?this.props.controlledEventFn():this.child.unzoom(n)}},{key:"_cloneChild",value:function(){var e=this;return r.default.cloneElement(r.default.Children.only(this.props.children),{ref:function(t){e.child=t}})}},{key:"_handleKeyDown",value:function(e){if((0,u.isTabKey)(e))e.preventDefault();else{var t=this.props.allowAccessibilityClose&&(0,u.isEnterOrSpaceBarKey)(e),n=(0,u.isEscapeKey)(e);t&&e.preventDefault(),(t||n)&&this.unzoom({allowRefocus:!0})}}},{key:"_handleResize",value:function(){this.forceUpdate()}},{key:"_handleScroll",value:function(){this.forceUpdate(),Math.abs(window.pageYOffset-this.pageYOffset)>10&&this.unzoom()}},{key:"_handleTouchStart",value:function(e){this.yTouchPosition=e.touches[0].clientY}},{key:"_handleTouchMove",value:function(e){this.forceUpdate(),Math.abs(e.touches[0].clientY-this.yTouchPosition)>10&&this.unzoom()}},{key:"_handleTouchEnd",value:function(){delete this.yTouchPosition}}]),t}(a.Component);t.default=d,d.propTypes={children:l.element.isRequired,getControlledEventFn:l.func}},3674:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(7294),i=h(r),l=n(5697),s=h(n(7882)),c=n(538),u=n(2748),m=h(n(1190)),d=h(n(6996));function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){return null!=e},f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isDisabled:!1,isZoomed:!1,wasZoomed:!1,src:e.image.src,prevSrc:e.image.src,isClosing:!1},n._handleKeyDown=n._handleKeyDown.bind(n),n._handleLoad=n._handleLoad.bind(n),n._handleLoadError=n._handleLoadError.bind(n),n._handleUnzoom=n._handleUnzoom.bind(n),n._handleZoom=n._handleZoom.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e,t){if(!p(e.isZoomed)&&p(this.props.isZoomed))throw new Error(s.default.errors.uncontrolled);if(p(e.isZoomed)&&!p(this.props.isZoomed))throw new Error(s.default.errors.controlled);var n=p(e.isZoomed)?e.isZoomed:t.isZoomed,o=p(this.props.isZoomed)?this.props.isZoomed:this.state.isZoomed;n!==o&&!o&&this.portalInstance&&this.portalInstance.unzoom({force:!0})}},{key:"render",value:function(){var e=this,t=this.props,n=t.defaultStyles,a=t.image,l=t.isZoomed,s=t.shouldRespectMaxDimension,c=t.zoomImage,u=t.zoomMargin,h=this.state,f=h.isDisabled,g=h.isZoomed,y=h.src,v=h.isClosing,b=o({},!f&&{tabIndex:0},a,{src:y,style:this._getImageStyle()},!f&&{onMouseDown:this._preventFocus,onClick:this._handleZoom,onKeyDown:this._handleKeyDown}),_=p(l)?l:g;return i.default.createElement(r.Fragment,null,i.default.createElement("img",o({},b,{key:"image",ref:function(t){e.image=t},onLoad:this._handleLoad,onError:this._handleLoadError})),this.image&&(_||v)?i.default.createElement(m.default,{key:"portal",ref:function(t){e.portalInstance=t},controlledEventFn:this._getControlledEventFn(),allowAccessibilityClose:this._allowTabNavigation()},i.default.createElement(d.default,{defaultStyles:n,image:this.image,shouldRespectMaxDimension:s,zoomImage:c,zoomMargin:Number(u),onUnzoom:this._handleUnzoom})):null)}},{key:"_checkShouldDisableComponent",value:function(){var e=this.props,t=e.shouldRespectMaxDimension,n=e.zoomImage,o=t&&!n&&(0,c.isMaxDimension)(this.image);this.setState({isDisabled:o})}},{key:"_getImageStyle",value:function(){var e=this.props,t=e.defaultStyles,n=e.image,a=e.isZoomed,r=this.state,i=r.isDisabled,l=r.isZoomed,c=r.isClosing,u=l||a||c;return o({},s.default.styles.image,u&&{visibility:"hidden"},t.image,n.style,i&&{cursor:"inherit"})}},{key:"_handleLoad",value:function(e){this._checkShouldDisableComponent(),(this.props.image.onLoad||Function.prototype)(e)}},{key:"_handleLoadError",value:function(e){this.setState({isDisabled:!0}),(this.props.image.onError||Function.prototype)(e)}},{key:"_handleKeyDown",value:function(e){(0,u.isEnterOrSpaceBarKey)(e)&&(e.preventDefault(),this._handleZoom(e))}},{key:"_preventFocus",value:function(e){e.preventDefault()}},{key:"_handleZoom",value:function(e){!p(this.props.isZoomed)&&this.props.shouldHandleZoom(e)?this.setState({isZoomed:!0},this.props.onZoom):this.props.onZoom()}},{key:"_handleUnzoom",value:function(e,t){var n=this;return function(){var a=o({isZoomed:!1,isClosing:!1},n.props.shouldReplaceImage&&{src:e});n.setState(a,n.props.onUnzoom),t&&n._allowTabNavigation()&&n.image.focus()}}},{key:"_getControlledEventFn",value:function(){return p(this.props.isZoomed)?this.props.onUnzoom:null}},{key:"_allowTabNavigation",value:function(){return this.image&&-1!==this.image.tabIndex}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.wasZoomed&&!e.isZoomed||t.isClosing;return{src:e.image.src!==t.prevSrc?e.image.src:t.src,isClosing:n,wasZoomed:e.isZoomed,prevSrc:e.image.src}}},{key:"defaultProps",get:function(){return{shouldReplaceImage:!0,shouldRespectMaxDimension:!1,zoomMargin:40,defaultStyles:{zoomContainer:{},overlay:{},image:{},zoomImage:{}},shouldHandleZoom:function(){return!0},onZoom:function(){},onUnzoom:function(){}}}}]),t}(r.Component);t.default=f,f.propTypes={image:(0,l.shape)({src:l.string.isRequired,alt:l.string,className:l.string,style:l.object}).isRequired,zoomImage:(0,l.shape)({src:l.string,alt:l.string,className:l.string,style:l.object}),defaultStyles:l.object,isZoomed:l.bool,shouldHandleZoom:l.func,shouldReplaceImage:l.bool,shouldRespectMaxDimension:l.bool,onZoom:l.func,onUnzoom:l.func}},1942:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(7294),i=c(r),l=n(5697),s=c(n(7882));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isMounted:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.setState({isMounted:!0})}},{key:"render",value:function(){return i.default.createElement("div",{style:this._getStyle()})}},{key:"_getStyle",value:function(){var e=1&(this.state.isMounted&&this.props.isVisible);return o({},s.default.styles.overlay,{opacity:e},this.props.defaultStyles.overlay)}}]),t}(r.PureComponent);t.default=u,u.propTypes={isVisible:l.bool.isRequired,defaultStyles:l.object.isRequired}},6996:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(7294),i=m(r),l=n(5697),s=m(n(7882)),c=n(538),u=m(n(1942));function m(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hasLoaded:!1,isZoomed:!0,src:e.image.currentSrc||e.image.src,tmpSrc:null},n.unzoom=n.unzoom.bind(n),n._handleImageLoad=n._handleImageLoad.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this.props.zoomImage,t=e.src,n=e.srcSet;this.setState({hasLoaded:!0}),(t||n)&&(0,c.fetchImage)(this.props.zoomImage,this._handleImageLoad)}},{key:"componentDidUpdate",value:function(e,t){var n=this;!t.tmpSrc&&this.state.tmpSrc&&setTimeout((function(){n.setState({src:n.state.tmpSrc,tmpSrc:null})}),100)}},{key:"render",value:function(){var e=this.props,t=e.defaultStyles,n=e.zoomImage,a=this.state,r=a.tmpSrc,l=a.isZoomed,s=a.src,c=this._getZoomImageStyle();return i.default.createElement("div",{style:this._getZoomContainerStyle()},i.default.createElement(u.default,{isVisible:l,defaultStyles:t}),i.default.createElement("img",o({},n,{src:s,style:c})),i.default.createElement(h,o({},n,{src:r,style:c})))}},{key:"unzoom",value:function(e){var t=this.props.onUnzoom(this.state.src,e);this.setState({isZoomed:!1},(function(){return setTimeout(t,s.default.transitionDuration)}))}},{key:"_handleImageLoad",value:function(e){this.state.isZoomed&&this.setState({tmpSrc:e.currentSrc||e.src})}},{key:"_getZoomContainerStyle",value:function(){return o({},s.default.styles.zoomContainer,this.props.defaultStyles.zoomContainer)}},{key:"_getZoomImageStyle",value:function(){var e=this.props,t=e.image,n=e.shouldRespectMaxDimension,a=e.src,r=e.zoomMargin,i=t.getBoundingClientRect(),l=i.top,u=i.left,m=t.width,d=t.height,h=t.naturalWidth,p=t.naturalHeight,f={top:l,left:u,width:m,height:d};if(!this.state.hasLoaded||!this.state.isZoomed)return o({},s.default.styles.zoomImage,this.props.defaultStyles.zoomImage,this.props.style,f);var g=document.body.clientWidth/2,y=window.innerHeight/2,v={transform:"translate3d("+(g-(i.left+m/2))+"px, "+(y-(i.top+d/2))+"px, 0) scale("+(n&&!a?(0,c.getMaxDimensionScale)({width:m,height:d,naturalWidth:h,naturalHeight:p,zoomMargin:r}):(0,c.getScale)({width:m,height:d,zoomMargin:r}))+")"};return o({},s.default.styles.zoomImage,this.props.defaultStyles.zoomImage,this.props.style,f,v)}}],[{key:"defaultProps",get:function(){return{zoomImage:{}}}}]),t}(r.Component);t.default=d,d.propTypes={defaultStyles:l.object.isRequired,image:l.object.isRequired,shouldRespectMaxDimension:l.bool,zoomImage:(0,l.shape)({src:l.string,alt:l.string,className:l.string,style:l.object}).isRequired,zoomMargin:l.number.isRequired,onUnzoom:l.func.isRequired};var h=function(e){var t=e.src,n=e.style,a=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["src","style"]);return t?i.default.createElement("img",o({},a,{src:t,style:f(n)})):null},p={position:"fixed",visibility:"hidden"},f=function(e){return o({},e,p)}},7882:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={errors:{controlled:"A component is changing a react-medium-image-zoom component from a controlled component to an uncontrolled one. ImageZoom elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled image zoom element for the lifetime of the component.",uncontrolled:"A component is changing a react-medium-image-zoom component from an uncontrolled component to a controlled one. ImageZoom elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled image zoom element for the lifetime of the component."},styles:{image:{cursor:"zoom-in"},zoomImage:{cursor:"zoom-out",position:"absolute",transition:"transform 300ms",transform:"translate3d(0, 0, 0) scale(1)",transformOrigin:"center center",willChange:"transform, top, left"},zoomContainer:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:999},overlay:{position:"absolute",top:0,right:0,bottom:0,left:0,backgroundColor:"#fff",opacity:0,transition:"opacity 300ms"}},transitionDuration:300};t.default=n},538:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createPortalContainer=function(e){var t=document.createElement(e);return document.body.appendChild(t),t},t.removePortalContainer=function(e){document.body.removeChild(e)},t.fetchImage=function(e,t){var n=e.src,o=e.srcSet,a=e.sizes,r=new Image;r.addEventListener("load",(function e(){t(r),r.removeEventListener("load",e)})),r.src=n,o&&(r.srcset=o),a&&(r.sizes=a)};var n=t.getScale=function(e){var t=e.width,n=e.height,o=e.zoomMargin,a=window.innerWidth/(t+o),r=window.innerHeight/(n+o);return Math.min(a,r)};t.getMaxDimensionScale=function(e){var t=e.width,o=e.height,a=e.naturalWidth,r=e.naturalHeight,i=e.zoomMargin,l=n({width:a,height:r,zoomMargin:i}),s=a>r?a/t:r/o;return l>1?s:l*s},t.isMaxDimension=function(e){return e.clientWidth>=e.naturalWidth||e.clientHeight>=e.naturalHeight}},3558:function(e,t,n){"use strict";var o,a=n(3674),r=(o=a)&&o.__esModule?o:{default:o};t.Z=r.default},2748:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={keys:["Enter"],keyCode:13},o=function(e){var t=e.keyCode,n=e.keys;return function(e){return e.keyCode?e.keyCode===t:-1!==n.indexOf(e.key)}},a=(t.isEnterOrSpaceBarKey=function(e){return o(n)(e)||a(e)},t.isTabKey=o({keys:["Tab"],keyCode:9}),t.isSpaceBarKey=o({keys:[" "],keyCode:32}));t.isEscapeKey=o({keys:["Escape","Esc"],keyCode:27})},5792:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(7294),a=n(3558),r=n(309),i=n(3751),l=n(1207);const s="works-module--skill_list--2-lVO",c="works-module--img_wrapper--2nJk1";var u=function(){return o.createElement(r.Z,null,o.createElement(i.Z,{title:"Works"}),o.createElement("section",{className:l.YS},o.createElement("h1",{id:"top"},"Works"),o.createElement("ul",{className:l.wo},o.createElement("li",null,o.createElement("a",{href:"#webapps"},"Web Applications")),o.createElement("li",null,o.createElement("a",{href:"#dtapps"},"Desktop Applications")),o.createElement("li",null,o.createElement("a",{href:"#designs"},"Designs")),o.createElement("li",null,o.createElement("a",{href:"#others"},"Others"))),o.createElement("article",{id:"webapps"},o.createElement("h2",null,"Web Applications"),o.createElement("section",null,o.createElement("h3",null,"Oshapport"),o.createElement("p",null,"2020.9 - (開発休止中)"),o.createElement("ul",{className:s},o.createElement("li",null,"Django"),o.createElement("li",null,"Python"),o.createElement("li",null,"PostgreSQL"),o.createElement("li",null,"HTML"),o.createElement("li",null,"CSS(SCSS)")),o.createElement("div",{className:c},o.createElement(a.Z,{image:{src:"/oshapport/oshapport_qanda.png",alt:"image of oshapport"},zoomImage:{className:""+l.YK},shouldReplaceImage:!1})),o.createElement("p",null,"「おしゃれ」＋「港(port)」というテーマで、ファッション関連の情報を扱うQ&Aサイトです。",o.createElement("br",null))),o.createElement("section",null,o.createElement("h3",null,"Gakusou"),o.createElement("div",{className:c},o.createElement(a.Z,{image:{src:"/gakusou/gakusou.png",alt:"renewed mail magazine"},zoomImage:{className:""+l.YK},shouldReplaceImage:!1})))),o.createElement("article",{id:"dtapps"},o.createElement("h2",null,"Desktop Applications"),o.createElement("section",null,o.createElement("h3",null,"task-management-app"),o.createElement("p",null,"2020.12 - 2021.3"),o.createElement("ul",{className:s},o.createElement("li",null,"Electron"),o.createElement("li",null,"NeDB"),o.createElement("li",null,"JavaScript"),o.createElement("li",null,"Node.js"),o.createElement("li",null,"HTML"),o.createElement("li",null,"CSS(SCSS)")),o.createElement("div",{className:c},o.createElement(a.Z,{image:{src:"/task-management-app/nedb_practice-02.png",alt:"image of task-management-app"},zoomImage:{className:""+l.YK},shouldReplaceImage:!1}),o.createElement(a.Z,{image:{src:"/task-management-app/nedb_practice-04.png",alt:"image of task-management-app"},zoomImage:{className:""+l.YK},shouldReplaceImage:!1}),o.createElement(a.Z,{image:{src:"/task-management-app/nedb_practice-05.png",alt:"image of task-management-app"},zoomImage:{className:""+l.YK},shouldReplaceImage:!1}),o.createElement(a.Z,{image:{src:"/task-management-app/nedb_practice-06.png",alt:"image of task-management-app"},zoomImage:{className:""+l.YK},shouldReplaceImage:!1})),o.createElement("p",null,"タスク管理アプリです。"))),o.createElement("article",{id:"designs"},o.createElement("h2",null,"Designs")),o.createElement("article",{id:"others"},o.createElement("h2",null,"Others"),o.createElement("section",null,o.createElement("h3",null,"つくばスタートアップパーク メールマガジン"),o.createElement("p",null,"2020.9 - 2021.3"),o.createElement("ul",{className:s},o.createElement("li",null,"HTML(HTMLメール)"),o.createElement("li",null,"CSS")),o.createElement("div",{className:c},o.createElement(a.Z,{image:{src:"/stapa_mailmagazine/new_mail.png",alt:"renewed mail magazine"},zoomImage:{className:""+l.YK},shouldReplaceImage:!1}),o.createElement(a.Z,{image:{src:"/stapa_mailmagazine/old_mail.png",alt:"old mail magazine"},zoomImage:{className:""+l.YK},shouldReplaceImage:!1})),o.createElement("details",null,o.createElement("summary",null,"受付のアルバイトとして採用されたコワーキングスペースにて、メールマガジンの制作を担当しました。"),"元々配信されていたメールマガジンの内容を整理、再分類し、読みやすく魅力的なレイアウトになるようデザイン、マークアップしました。")))))}},1207:function(e,t,n){"use strict";n.d(t,{YS:function(){return o},wo:function(){return a},YK:function(){return r}});const o="subpage-module--wrapper--19ZGh",a="subpage-module--contentlist--3yxG9",r="subpage-module--mediumzoom_image--3VUiV"}}]);
//# sourceMappingURL=component---src-pages-works-js-93a5038283224daf8aee.js.map