import{d as e,r as t,c as n,S as r,U as o,V as a,W as s,f as l,P as i,X as u}from"./vendor.5c05fa4f.js";function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function v(e,t){if(e in t){for(var n=t[e],r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return"function"==typeof n?n.apply(void 0,o):n}var s=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(s,v),s}var h,y,b,m,S,g;function O(e){var t,n,r=e.visible,o=void 0===r||r,a=e.features,s=void 0===a?h.None:a,l=c(e,["visible","features"]);return o||s&h.Static&&l.props.static?w(l):s&h.RenderStrategy?v(null==(t=l.props.unmount)||t?b.Unmount:b.Hidden,((n={})[b.Unmount]=function(){return null},n[b.Hidden]=function(){return w(p({},l,{props:p({},l.props,{hidden:!0,style:{display:"none"}})}))},n)):w(l)}function w(e){var t,n=e.props,a=e.attrs,s=e.slots,l=e.slot,i=e.name,u=function(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),o=f(t);!(n=o()).done;){var a=n.value;a in r&&delete r[a]}return r}(n,["unmount","static"]),p=u.as,d=c(u,["as"]),v=null==s.default?void 0:s.default(l);if("template"===p){if(Object.keys(d).length>0||Object.keys(a).length>0){var h=null!=v?v:[],y=h[0],b=h.slice(1);if(null==(t=y)||"string"!=typeof t.type&&"object"!=typeof t.type&&"function"!=typeof t.type||b.length>0)throw new Error(['Passing props on "template"!',"","The current component <"+i+' /> is rendering a "template".',"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(a)).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return r(y,d)}return Array.isArray(v)&&1===v.length?v[0]:v}return o(p,d,v)}(y=h||(h={}))[y.None=0]="None",y[y.RenderStrategy=1]="RenderStrategy",y[y.Static=2]="Static",(m=b||(b={}))[m.Unmount=0]="Unmount",m[m.Hidden=1]="Hidden",(g=S||(S={})).Space=" ",g.Enter="Enter",g.Escape="Escape",g.Backspace="Backspace",g.ArrowLeft="ArrowLeft",g.ArrowUp="ArrowUp",g.ArrowRight="ArrowRight",g.ArrowDown="ArrowDown",g.Home="Home",g.End="End",g.PageUp="PageUp",g.PageDown="PageDown",g.Tab="Tab";var C,D,j,k,E,A,x,P,$,R,U=0;function L(){return++U}(D=C||(C={}))[D.First=1]="First",D[D.Previous=2]="Previous",D[D.Next=4]="Next",D[D.Last=8]="Last",D[D.WrapAround=16]="WrapAround",D[D.NoScroll=32]="NoScroll",(k=j||(j={}))[k.Error=0]="Error",k[k.Overflow=1]="Overflow",k[k.Success=2]="Success",k[k.Underflow=3]="Underflow",(A=E||(E={}))[A.Previous=-1]="Previous",A[A.Next=1]="Next",(P=x||(x={}))[P.Strict=0]="Strict",P[P.Loose=1]="Loose",(R=$||($={}))[R.AddElement=0]="AddElement",R[R.RemoveElement=1]="RemoveElement";var N=Symbol("DescriptionContext");var B,K,T,H,V,F,I=Symbol("Context");(K=B||(B={}))[K.Open=0]="Open",K[K.Closed=1]="Closed",(H=T||(T={}))[H.Open=0]="Open",H[H.Closed=1]="Closed",(F=V||(V={}))[F.Open=0]="Open",F[F.Closed=1]="Closed";var G=Symbol("DisclosureContext");function W(e){var t=s(G,null);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Disclosure /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}var Y,M,X,q,z,J,Q,Z=e({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup:function(e,r){var o,s=r.slots,l=r.attrs,i=t(e.defaultOpen?V.Open:V.Closed),u=t(null);return a(G,{disclosureState:i,panelRef:u,toggleDisclosure:function(){var e;i.value=v(i.value,((e={})[V.Open]=V.Closed,e[V.Closed]=V.Open,e))}}),o=n((function(){var e;return v(i.value,((e={})[V.Open]=B.Open,e[V.Closed]=B.Closed,e))})),a(I,o),function(){return O({props:c(e,["defaultOpen"]),slot:{open:i.value===V.Open},slots:s,attrs:l,name:"Disclosure"})}}}),_=e({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},render:function(){var e=W("DisclosureButton"),t={open:e.disclosureState.value===V.Open},n={id:this.id,type:"button","aria-expanded":this.$props.disabled?void 0:e.disclosureState.value===V.Open,"aria-controls":this.ariaControls,disabled:!!this.$props.disabled||void 0,onClick:this.handleClick,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp};return O({props:p({},this.$props,n),slot:t,attrs:this.$attrs,slots:this.$slots,name:"DisclosureButton"})},setup:function(e){var t=W("DisclosureButton");return{id:"headlessui-disclosure-button-"+L(),ariaControls:n((function(){var e,n,r,o;return null!=(e=null==(n=null==(r=t.panelRef)||null==r.value?null:null!=(o=r.value.$el)?o:r.value)?void 0:n.id)?e:void 0})),handleClick:function(){e.disabled||t.toggleDisclosure()},handleKeyDown:function(n){if(!e.disabled)switch(n.key){case S.Space:case S.Enter:n.preventDefault(),n.stopPropagation(),t.toggleDisclosure()}},handleKeyUp:function(e){switch(e.key){case S.Space:e.preventDefault()}}}}}),ee=e({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},render:function(){var e={open:W("DisclosurePanel").disclosureState.value===V.Open},t={id:this.id,ref:"el"};return O({props:p({},this.$props,t),slot:e,attrs:this.$attrs,slots:this.$slots,features:h.RenderStrategy|h.Static,visible:this.visible,name:"DisclosurePanel"})},setup:function(){var e=W("DisclosurePanel"),t="headlessui-disclosure-panel-"+L(),r=s(I,null),o=n((function(){return null!==r?r.value===B.Open:e.disclosureState.value===V.Open}));return{id:t,el:e.panelRef,visible:o}}});!function(e){e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing"}(Y||(Y={})),(X=M||(M={}))[X.Open=0]="Open",X[X.Closed=1]="Closed",(z=q||(q={}))[z.Open=0]="Open",z[z.Closed=1]="Closed",(Q=J||(J={}))[Q.Open=0]="Open",Q[Q.Closed=1]="Closed";var te=Symbol("LabelContext");function ne(){var e=s(te,null);if(null===e){var t=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,ne),t}return e}var re,oe,ae=e({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},render:function(){var e=this.context,t=e.name,n=void 0===t?"Label":t,r=e.slot,o=void 0===r?{}:r,a=e.props,s=void 0===a?{}:a,i=this.$props,u=i.passive,d=c(i,["passive"]),f=p({},Object.entries(s).reduce((function(e,t){var n,r=t[0],o=t[1];return Object.assign(e,((n={})[r]=l(o),n))}),{}),{id:this.id}),v=p({},d,f);return u&&delete v.onClick,O({props:v,slot:o,attrs:this.$attrs,slots:this.$slots,name:n})},setup:function(){var e=ne(),t="headlessui-label-"+L();return i((function(){return u(e.register(t))})),{id:t,context:e}}});(oe=re||(re={}))[oe.Empty=1]="Empty",oe[oe.Active=2]="Active";var se,le,ie,ue,pe=Symbol("GroupContext"),ce=e({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup:function(e,r){var o=r.slots,s=r.attrs,l=t(null),i=function(e){var r=void 0===e?{}:e,o=r.slot,s=void 0===o?{}:o,l=r.name,i=void 0===l?"Label":l,u=r.props,p=void 0===u?{}:u,c=t([]);return a(te,{register:function(e){return c.value.push(e),function(){var t=c.value.indexOf(e);-1!==t&&c.value.splice(t,1)}},slot:s,name:i,props:p}),n((function(){return c.value.length>0?c.value.join(" "):void 0}))}({name:"SwitchLabel",props:{onClick:function(){l.value&&(l.value.click(),l.value.focus({preventScroll:!0}))}}}),u=function(e){var r=void 0===e?{}:e,o=r.slot,s=void 0===o?t({}):o,l=r.name,i=void 0===l?"Description":l,u=r.props,p=void 0===u?{}:u,c=t([]);return a(N,{register:function(e){return c.value.push(e),function(){var t=c.value.indexOf(e);-1!==t&&c.value.splice(t,1)}},slot:s,name:i,props:p}),n((function(){return c.value.length>0?c.value.join(" "):void 0}))}({name:"SwitchDescription"});return a(pe,{switchRef:l,labelledby:i,describedby:u}),function(){return O({props:e,slot:{},slots:o,attrs:s,name:"SwitchGroup"})}}}),de=e({name:"Switch",emits:["update:modelValue"],props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1}},render:function(){var e=s(pe,null),t={checked:this.$props.modelValue},n={id:this.id,ref:null===e?void 0:e.switchRef,role:"switch",tabIndex:0,"aria-checked":this.$props.modelValue,"aria-labelledby":this.labelledby,"aria-describedby":this.describedby,onClick:this.handleClick,onKeyup:this.handleKeyUp,onKeypress:this.handleKeyPress};return"button"===this.$props.as&&Object.assign(n,{type:"button"}),O({props:p({},this.$props,n),slot:t,attrs:this.$attrs,slots:this.$slots,name:"Switch"})},setup:function(e,t){var n=t.emit,r=s(pe,null);function o(){n("update:modelValue",!e.modelValue)}return{id:"headlessui-switch-"+L(),el:null==r?void 0:r.switchRef,labelledby:null==r?void 0:r.labelledby,describedby:null==r?void 0:r.describedby,handleClick:function(e){e.preventDefault(),o()},handleKeyUp:function(e){e.key!==S.Tab&&e.preventDefault(),e.key===S.Space&&o()},handleKeyPress:function(e){e.preventDefault()}}}}),fe=ae;(le=se||(se={})).Finished="finished",le.Cancelled="cancelled",(ue=ie||(ie={})).Visible="visible",ue.Hidden="hidden",h.RenderStrategy;export{Z as D,ce as S,_ as a,ee as b,fe as c,de as d};
