(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{671:function(e,t,r){"use strict";var n=r(6),a=r.n(n),o=r(0),c=r.n(o);t.a=function(e){var t=e.className,r=e.is_invisible,n=e.theme,o=e.id;return c.a.createElement("div",{id:o,className:a()("barspinner","barspinner--".concat(n||"dark"),{invisible:r},t)},Array.from(new Array(5)).map((function(e,t){return c.a.createElement("div",{key:t,className:"barspinner__rect barspinner__rect--".concat(t+1," rect").concat(t+1)})})))}},673:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(0),c=r.n(o),i=r(43),s=r.n(i),u=r(54),l=r(8),f=r(11);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=y(this,(e=b(t)).call.apply(e,[this].concat(a)))).onClickButton=function(){r.props.error.link?window.open(Object(u.urlFor)(r.props.error.link,void 0,void 0,!0)):"function"==typeof r.props.error.onClickButton&&r.props.error.onClickButton(),r.props.setErrorMessage("")},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return c.a.createElement("div",{className:"cashier__wrapper"},c.a.createElement(l.a,{icon:"IconCashierError",className:"cashier-error__icon"}),Array.isArray(this.props.error.message)?this.props.error.message.map((function(e,t){return c.a.createElement("p",{className:"cashier-error__text",key:t},e)})):c.a.createElement("p",{className:"cashier-error__text"},this.props.error.message),this.props.error.button_text&&c.a.createElement(s.a,{className:"btn--primary--default cashier-error__button",has_effect:!0,text:this.props.error.button_text,onClick:this.onClickButton}))}}])&&m(r.prototype,n),a&&m(r,a),t}(c.a.Component);h.propTypes={error:a.a.object,setErrorMessage:a.a.func},t.a=Object(f.b)((function(e){return{setErrorMessage:e.modules.cashier.setErrorMessage}}))(h)},680:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(0),c=r.n(o),i=r(43),s=r.n(i),u=(r(97),r(8)),l=r(7),f=r(107),p=r(3);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=y(this,(e=b(t)).call.apply(e,[this].concat(a)))).onClickDeposit=function(){r.props.setModalIndex(0)},r.render=function(){return c.a.createElement("div",{className:"cashier__wrapper account-transfer__no-balance"},c.a.createElement(u.a,{icon:"IconNoBalance",className:"account-transfer__no-balance-icon"}),c.a.createElement("h2",{className:"withdraw__header"},c.a.createElement(l.a,{i18n_default_text:"You have no funds in your {{website_name}} account",values:{website_name:f.website_name}})),c.a.createElement("p",{className:"cashier__text"},c.a.createElement(l.a,{i18n_default_text:"Please make a deposit to enable fund transfers."})),c.a.createElement(s.a,{className:"btn--primary--default account-transfer__no-balance-button",has_effect:!0,text:Object(p.localize)("Deposit now"),onClick:r.onClickDeposit}))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),t}(c.a.Component);h.propTypes={setModalIndex:a.a.func},t.a=h},728:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),o=r(0),c=r.n(o),i=r(11),s=r(6),u=r.n(s),l=r(43),f=r.n(l),p=(r(97),r(108)),m=r.n(p),y=(r(176),r(25)),b=r(16),_=r.n(b),h=r(7),d=r(3),g=r(8),v=r(140);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t,r,n,a,o,c){try{var i=e[o](c),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,a)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=function(e,t){var r=t.balance,n=t.currency,a=t.transfer_limit,o={};return e.loginid&&/^[A-Za-z]+[0-9]+$/.test(e.loginid)||(o.loginid=Object(d.localize)("Please enter a valid client login ID.")),e.amount?Object(v.b)(e.amount,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:"float",decimals:_.a.getDecimalPlaces(n)},a.min&&{min:a.min,max:a.max}))?+r<+e.amount&&(o.amount=Object(d.localize)("Insufficient balance.")):o.amount=Object(v.a)().number.message:o.amount=Object(d.localize)("This field is required."),e.description&&!/^[0-9A-Za-z .,'-]{0,250}$/.test(e.description.replace(/\n/g," "))&&(o.description=Object(d.localize)("Please enter a valid description.")),o},k=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=P(this,(e=x(t)).call.apply(e,[this].concat(a)))).validateTransferPassthrough=function(e){return T(e,{balance:r.props.balance,currency:r.props.currency,transfer_limit:r.props.transfer_limit})},r.onTransferPassthrough=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.requestPaymentAgentTransfer({amount:t.amount,currency:r.props.currency,description:t.description.replace(/\n/g," "),transfer_to:t.loginid});case 2:e.sent.error&&n.setSubmitting(!1);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){w(o,n,a,c,i,"next",e)}function i(e){w(o,n,a,c,i,"throw",e)}c(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"cashier__wrapper--align-left"},c.a.createElement("h2",{className:"cashier__header payment-agent-transfer__header"},c.a.createElement(h.a,{i18n_default_text:"Transfer to client"})),c.a.createElement(y.c,{initialValues:{loginid:"",amount:"",description:""},validate:this.validateTransferPassthrough,onSubmit:this.onTransferPassthrough},(function(t){var r=t.errors,n=t.isSubmitting,a=t.isValid,o=t.touched,i=t.handleChange;return c.a.createElement(y.b,{noValidate:!0},c.a.createElement(y.a,{name:"loginid"},(function(t){var n=t.field;return c.a.createElement(m.a,O({},n,{onChange:function(t){e.props.setErrorMessage(""),i(t)},className:"payment-agent-transfer__input",type:"text",label:Object(d.localize)("Client login ID"),error:o.loginid&&r.loginid,required:!0,autoComplete:"off",maxLength:"20"}))})),c.a.createElement(y.a,{name:"amount"},(function(t){var n=t.field;return c.a.createElement(m.a,O({},n,{onChange:function(t){e.props.setErrorMessage(""),i(t)},className:"payment-agent-transfer__input dc-input--no-placeholder",type:"text",label:Object(d.localize)("Amount"),error:o.amount&&r.amount,required:!0,leading_icon:c.a.createElement("span",{className:u()("cashier__amount-symbol","symbols","symbols--".concat((e.props.currency||"").toLowerCase()))}),autoComplete:"off",maxLength:"30"}))})),c.a.createElement(y.a,{name:"description"},(function(t){var n=t.field;return c.a.createElement(m.a,O({},n,{onChange:function(t){e.props.setErrorMessage(""),i(t)},type:"textarea",label:Object(d.localize)("Description"),error:o.description&&r.description,required:!0,autoComplete:"off",maxLength:"250"}))})),c.a.createElement("div",{className:"cashier__form-submit"},e.props.error_message&&c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{icon:"IconEmergency",className:"cashier__form-error-icon"}),c.a.createElement(g.a,{icon:"IconError",className:"cashier__form-error-small-icon"}),c.a.createElement("p",{className:"cashier__form-error"},e.props.error_message)),c.a.createElement(f.a,{className:"cashier__form-submit-button btn--primary--default",type:"submit",is_disabled:!a||n},c.a.createElement(h.a,{i18n_default_text:"Transfer"}))))})))}}])&&j(r.prototype,n),a&&j(r,a),t}(c.a.Component);k.propTypes={balance:a.a.string,currency:a.a.string,error:a.a.object,requestPaymentAgentTransfer:a.a.func,setErrorMessage:a.a.func,transfer_limit:a.a.object};var M=Object(i.b)((function(e){var t=e.client,r=e.modules;return{balance:t.balance,currency:t.currency,error_message:r.cashier.config.payment_agent_transfer.error.message,requestPaymentAgentTransfer:r.cashier.requestPaymentAgentTransfer,setErrorMessage:r.cashier.setErrorMessage,transfer_limit:r.cashier.config.payment_agent_transfer.transfer_limit}}))(k),A=r(30),I=r(55);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=q(this,(e=R(t)).call.apply(e,[this].concat(a)))).openStatement=function(){r.props.history.push(I.a.statement),r.props.resetPaymentAgentTransfer(),r.props.toggleCashierModal()},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return c.a.createElement("div",{className:"cashier__wrapper account-transfer__receipt"},c.a.createElement("div",{className:"cashier__success"},c.a.createElement("h2",{className:"cashier__header"},c.a.createElement(h.a,{i18n_default_text:"Your funds have been transferred to {{name}}.",values:{name:this.props.receipt.client_name}})),c.a.createElement("div",{className:"cashier__transferred-amount cashier__text--bold"},c.a.createElement("span",{className:u()("symbols","symbols--".concat(this.props.currency.toLowerCase()))}),_.a.formatMoney(this.props.currency,this.props.receipt.amount_transferred,!0)),c.a.createElement("div",{className:"cashier__transferred-details-wrapper"},c.a.createElement("span",{className:"account-transfer__transfer-details-from"},c.a.createElement(g.a,{icon:"IconAccountsCurrency",type:this.props.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"cashier__transferred-details"},c.a.createElement("span",{className:"cashier__text--bold"},this.props.currency.toUpperCase())," (",this.props.loginid,")")),c.a.createElement(g.a,{className:"cashier__transferred-icon",icon:"IconBack"}),c.a.createElement("span",{className:"account-transfer__transfer-details-to"},c.a.createElement(g.a,{icon:"IconUser"}),c.a.createElement("span",{className:"cashier__transferred-details"},c.a.createElement("span",{className:"cashier__text--bold"},this.props.receipt.client_name)," (",this.props.receipt.client_id,")"))),c.a.createElement("div",{className:"cashier__form-submit payment-agent-transfer__buttons"},c.a.createElement(f.a,{className:"btn--tertiary--default payment-agent__statement-button",has_effect:!0,text:Object(d.localize)("View in statement"),onClick:this.openStatement}),c.a.createElement(f.a,{className:"btn--primary--default payment-agent__done-button payment-agent-transfer__done-button",has_effect:!0,text:Object(d.localize)("Done"),onClick:this.props.resetPaymentAgentTransfer}))))}}])&&z(r.prototype,n),a&&z(r,a),t}(c.a.Component);L.propTypes={currency:a.a.string,loginid:a.a.string,receipt:a.a.object,resetPaymentAgentTransfer:a.a.func,toggleCashierModal:a.a.func};var U=Object(A.g)(Object(i.b)((function(e){var t=e.client,r=e.modules,n=e.ui;return{currency:t.currency,loginid:t.loginid,receipt:r.cashier.config.payment_agent_transfer.receipt,resetPaymentAgentTransfer:r.cashier.resetPaymentAgentTransfer,toggleCashierModal:n.toggleCashierModal}}))(L)),F=r(680),V=r(673),J=r(671);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),$(this,W(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.container),this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnMount()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.is_loading?c.a.createElement(J.a,{className:"cashier__loader"}):c.a.createElement(c.a.Fragment,null,this.props.error.button_text?c.a.createElement(V.a,{error:this.props.error}):this.props.has_no_balance?c.a.createElement(F.a,{setModalIndex:this.props.setModalIndex}):this.props.is_transfer_successful?c.a.createElement(U,null):c.a.createElement(M,{error:this.props.error})))}}])&&Z(r.prototype,n),a&&Z(r,a),t}(c.a.Component);H.propTypes={container:a.a.string,error:a.a.object,has_no_balance:a.a.bool,is_loading:a.a.bool,is_transfer_successful:a.a.bool,onMount:a.a.func,setActiveTab:a.a.func,setModalIndex:a.a.func};t.default=Object(i.b)((function(e){var t=e.modules,r=e.ui;return{container:t.cashier.config.payment_agent_transfer.container,error:t.cashier.config.payment_agent_transfer.error,has_no_balance:t.cashier.config.payment_agent_transfer.has_no_balance,is_loading:t.cashier.is_loading,is_transfer_successful:t.cashier.config.payment_agent_transfer.is_transfer_successful,onMount:t.cashier.onMountPaymentAgentTransfer,onUnMount:t.cashier.resetPaymentAgentTransfer,setActiveTab:t.cashier.setActiveTab,setModalIndex:r.setModalIndex}}))(H)}}]);
//# sourceMappingURL=4.95de6c85530d8bd9c237.js.map