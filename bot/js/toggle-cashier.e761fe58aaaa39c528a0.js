(window.webpackJsonp=window.webpackJsonp||[]).push([["toggle-cashier"],{543:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),a=n(1),i=n.n(a),c=n(0),l=n.n(c),s=n(3),u=n(195),p=n(21),f=n(190),h=function(e){var t=e.id,n=e.is_slow_loading,r=e.status,o=e.theme;return l.a.createElement("div",{className:"initial-loader"},l.a.createElement("div",{id:t,className:"initial-loader__barspinner barspinner barspinner-".concat(o||"light")},Array.from(new Array(5)).map((function(e,t){return l.a.createElement("div",{key:t,className:"initial-loader__barspinner--rect barspinner__rect barspinner__rect--".concat(t+1," rect").concat(t+1)})}))),n&&r.map((function(e,t){return l.a.createElement("h3",{className:"initial-loader__text",key:t},e)})))};h.propTypes={id:i.a.oneOfType([i.a.string,i.a.number]),is_slow_loading:i.a.bool,status:i.a.array,theme:i.a.string};var m=h;function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,g(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.props.is_loading&&l.a.createElement(m,null),this.props.container_url&&l.a.createElement(f.Scrollbars,{autoHeight:!0,autoHide:!0,autoHeightMax:550,renderTrackHorizontal:function(e){return l.a.createElement("div",_({},e,{className:"track-horizontal",style:{display:"none"}}))},renderThumbHorizontal:function(e){return l.a.createElement("div",_({},e,{className:"thumb-horizontal",style:{display:"none"}}))}},l.a.createElement("iframe",{className:"cashier__content",height:this.props.container_height,src:this.props.container_url,frameBorder:"0",scrolling:"no"})))}}])&&b(n.prototype,r),o&&b(n,o),t}(l.a.Component);v.propTypes={className:i.a.string,container_height:i.a.oneOfType([i.a.number,i.a.string]),container_url:i.a.string,is_loading:i.a.bool,onMount:i.a.func};var O=v;function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,T(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.setActiveTab("deposit"),this.props.onMount()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.props.error_message?l.a.createElement("p",{className:"cashier__error"},this.props.error_message):l.a.createElement(O,{container_height:this.props.container_height,container_url:this.props.deposit_url,is_loading:this.props.is_loading}))}}])&&j(n.prototype,r),o&&j(n,o),t}(l.a.Component);N.propTypes={container_height:i.a.oneOfType([i.a.number,i.a.string]),deposit_url:i.a.string,error_message:i.a.string,is_loading:i.a.bool,onMount:i.a.func,setActiveTab:i.a.func};var k=Object(p.b)((function(e){var t=e.modules;return{container_height:t.cashier.container_height,deposit_url:t.cashier.container_urls.deposit,error_message:t.cashier.error_message,is_loading:t.cashier.is_loading,setActiveTab:t.cashier.setActiveTab,onMount:t.cashier.onMountDeposit}}))(N),M=n(18),x=n(61),C=n(12);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,B(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,this.props.error_message&&l.a.createElement("p",{className:"cashier__error"},this.props.error_message),l.a.createElement("div",{className:"withdraw__verify-container"},l.a.createElement("div",{className:"withdraw__verify-wrapper"},l.a.createElement(C.a,{icon:"IconAuthenticateWithdrawals",className:"withdraw__icon-authenticate"}),l.a.createElement("p",{className:"withdraw__text"},l.a.createElement(M.a,{i18n_default_text:"To protect your account, we need to authenticate withdrawals."})),l.a.createElement(x.a,{className:"btn--primary btn--primary--orange withdraw__verify-button",classNameSpan:"withdraw__verify-button-text",has_effect:!0,text:Object(s.localize)("Get authentication email"),onClick:function(){e.props.sendVerificationEmail(e.props.client_email)}}))),this.props.is_email_sent&&l.a.createElement("div",{className:"withdraw__verify-container"},l.a.createElement("div",{className:"withdraw__email-sent"},l.a.createElement(C.a,{icon:"IconEmailSent",className:"withdraw__icon-email-sent"}),l.a.createElement("p",{className:"withdraw__email-sent-title"},l.a.createElement(M.a,{i18n_default_text:"We've sent you an email."})),l.a.createElement("p",{className:"withdraw__email-sent-text"},l.a.createElement(M.a,{i18n_default_text:"Please click on the authentication link in the email to continue."})))))}}])&&F(n.prototype,r),o&&F(n,o),t}(l.a.Component);H.propTypes={client_email:i.a.string,error_message:i.a.string,is_email_sent:i.a.bool,sendVerificationEmail:i.a.func};var R=Object(p.b)((function(e){var t=e.client,n=e.modules;return{client_email:t.email,error_message:n.cashier.error_message,is_email_sent:n.cashier.is_verification_email_sent,sendVerificationEmail:n.cashier.sendVerificationEmail}}))(H);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),V(this,J(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.onMount(this.props.verification_code)}},{key:"render",value:function(){return l.a.createElement(O,{container_height:this.props.container_height,container_url:this.props.withdraw_url,is_loading:this.props.is_loading,onMount:this.props.onMount})}}])&&I(n.prototype,r),o&&I(n,o),t}(l.a.Component);q.propTypes={container_height:i.a.oneOfType([i.a.number,i.a.string]),is_loading:i.a.bool,onMount:i.a.func,verification_code:i.a.string,withdraw_url:i.a.string};var K=Object(p.b)((function(e){var t=e.client,n=e.modules;return{container_height:n.cashier.container_height,is_loading:n.cashier.is_loading,onMount:n.cashier.onMountWithdraw,verification_code:t.verification_code,withdraw_url:n.cashier.container_urls.withdraw}}))(q);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,X(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.setActiveTab("withdraw")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.props.verification_code||this.props.withdraw_url?l.a.createElement(K,null):l.a.createElement(R,null))}}])&&Q(n.prototype,r),o&&Q(n,o),t}(l.a.Component);Z.propTypes={error_message:i.a.string,setActiveTab:i.a.func,verification_code:i.a.string,withdraw_url:i.a.string};var $=Object(p.b)((function(e){var t=e.client,n=e.modules;return{error_message:n.cashier.error_message,setActiveTab:n.cashier.setActiveTab,verification_code:t.verification_code,withdraw_url:n.cashier.container_urls.withdraw}}))(Z),ee=l.a.lazy((function(){return n.e("wallet-information").then(n.bind(null,547))})),te={deposit:0,withdraw:1},ne=[{icon:"IconDepositSmall",label:Object(s.localize)("Deposit"),value:k},{icon:"IconWithdrawalSmall",label:Object(s.localize)("Withdrawal"),value:$}],re=function(e){var t=e.active_tab,n=e.className,r=e.hideFullBlur,a=e.is_cashier_visible,i=e.showFullBlur,c=e.toggleCashier;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{className:o()(n,"btn--primary btn--primary--orange"),has_effect:!0,text:Object(s.localize)("Deposit"),onClick:c}),l.a.createElement(u.a,{className:"cashier",modal_content:ne,header:l.a.createElement(ee,null),hideFullBlur:r,is_open:a,selected_index:te[t],showFullBlur:i,title:Object(s.localize)("Cashier"),toggleModal:c}))};re.propTypes={active_tab:i.a.string,className:i.a.string,hideFullBlur:i.a.func,is_open:i.a.bool,showFullBlur:i.a.func,toggleModal:i.a.func};t.default=re}}]);
//# sourceMappingURL=toggle-cashier.e761fe58aaaa39c528a0.js.map