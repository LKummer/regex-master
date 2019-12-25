(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,n){"use strict";n.r(t);n(74),n(75),n(16),n(151),n(52),n(158),n(107),n(103),n(104);var r={props:{regex:{type:Object,default:function(){return{string:"",flags:""}}},value:{type:String,default:""}},computed:{input_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},regex_or_undefined:function(){try{return RegExp(this.regex.string,this.regex.flags)}catch(e){return}},matches:function(){return this.value.match(this.regex_or_undefined)},error:function(){return this.value?this.matches&&this.regex_or_undefined&&this.regex.string?"":{message:"No matches found.",type:"info",outlined:!0}:{message:"Input a string for matching.",type:"info"}}}},l=n(19),c=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-actions",{staticClass:"pb-0"},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){return e.$emit("close")}}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",{staticClass:"pt-0"},[n("v-textarea",{staticClass:"pt-0",attrs:{rows:"1","auto-grow":"",condensed:"","hide-details":""},model:{value:e.input_value,callback:function(t){e.input_value=t},expression:"input_value"}}),e._v(" "),e.error?n("v-alert",{staticClass:"mt-4 mb-0",attrs:{type:e.error.type,outlined:e.error.outlined,dense:""}},[e._v("\n      "+e._s(e.error.message)+"\n    ")]):n("div",e._l(e.matches,(function(t,r){return n("v-chip",{key:r,staticClass:"mt-4 mb-0 mr-4 text-center headline",attrs:{label:"",color:"primary"}},[e._v("\n        "+e._s(t)+"\n      ")])})),1)],1)],1)}),[],!1,null,null,null).exports,o={props:{value:{type:Object,default:function(){return{string:"",flags:""}}}},data:function(){return{flags:[{label:"Global",flag:"g",enabled:!0},{label:"Case Insensitive",flag:"i",enabled:!1},{label:"Multi Line",flag:"m",enabled:!1}],editing_flags:!1}},computed:{error:function(){if(!this.regex_string)return{message:"Input a regular expression.",type:"info"};try{RegExp(this.regex_string,this.regex_flags_string)}catch(e){return{message:"Input a valid regular expression.",type:"error"}}return""},regex_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},regex_string:{get:function(){return this.regex_value.string},set:function(e){this.regex_value={string:e,flags:this.regex_value.flags}}},regex_flags_string:{get:function(){return this.regex_value.flags},set:function(e){this.regex_value={string:this.regex_value.string,flags:e}}}},watch:{flags:{handler:function(e){this.regex_flags_string=this.flags.reduce((function(e,t){return t.enabled?e+t.flag:e}),"")},deep:!0,immediate:!0}}},d={components:{MatchCard:c,RegexCard:Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",{staticClass:"pb-2"},[e._v("\n    Input any JS regular expression.\n    "),n("v-text-field",{attrs:{suffix:"/"+e.regex_flags_string,prefix:"/"},model:{value:e.regex_string,callback:function(t){e.regex_string=t},expression:"regex_string"}}),e._v("\n    The inputs in the lower cards are matched against the regular expression.\n    "),e.error?n("v-alert",{staticClass:"mt-4 mb-0",attrs:{type:e.error.type,dense:""}},[e._v("\n      "+e._s(e.error.message)+"\n    ")]):e._e()],1),e._v(" "),n("v-card-actions",{staticClass:"pt-0"},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.editing_flags=!e.editing_flags}}},[e._v("\n      Flags\n      "),n("v-icon",[e._v("\n        mdi-chevron-"+e._s(e.editing_flags?"up":"down")+"\n      ")])],1)],1),e._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.editing_flags,expression:"editing_flags"}]},[n("v-divider"),e._v(" "),n("v-card-text",[e._v("\n        Flags can be edited through this panel.\n        "),e._l(e.flags,(function(t,r){return n("v-checkbox",{key:r,attrs:{label:t.flag+" - "+t.label,dense:"","hide-details":""},model:{value:t.enabled,callback:function(n){e.$set(t,"enabled",n)},expression:"flag.enabled"}})}))],2)],1)])],1)}),[],!1,null,null,null).exports},data:function(){return{regex:{string:"\\.(png|jpe?g)$",flags:"g"},match_inputs:[{string:"hello_world.png",key:"8528d031"},{string:"hello_world.jpeg",key:"430849c7"},{string:"hello_world.jpg",key:"5aaf5ebc"},{string:"",key:"62aace96"}]}},methods:{delete_card:function(e){this.match_inputs.splice(e,1)},create_card:function(){this.match_inputs.push({string:"",key:this.make_key()})},make_key:function(){return Array.from(window.crypto.getRandomValues(new Uint16Array(2)),(function(e){return e.toString(16)})).reduce((function(e,t){return e+t}),"")}}},f={components:{RegexPanel:Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("regex-card",{staticClass:"mb-3",model:{value:e.regex,callback:function(t){e.regex=t},expression:"regex"}}),e._v(" "),n("v-slide-y-reverse-transition",{attrs:{group:"","hide-on-leave":""}},[e._l(e.match_inputs,(function(input,t){return n("match-card",{key:input.key,staticClass:"mb-3",attrs:{regex:e.regex},on:{close:function(n){return e.delete_card(t)}},model:{value:input.string,callback:function(t){e.$set(input,"string",t)},expression:"input.string"}})})),e._v(" "),0===e.match_inputs.length?n("p",{key:"hint",staticClass:"mt-0 mb-3 text-center headline"},[e._v("\n      Open a match card using the plus button\n    ")]):e._e(),e._v(" "),n("div",{key:"create",staticClass:"text-center"},[n("v-btn",{attrs:{fab:"",color:"primary"},on:{click:e.create_card}},[n("v-icon",[e._v("\n          mdi-plus\n        ")])],1)],1)],2)],1)}),[],!1,null,null,null).exports},head:function(){return{title:"Regex Matching",meta:[{hid:"description",name:"description",content:"Multi input JS regex matching web app."}]}}},_=Object(l.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[t("regex-panel")],1)}),[],!1,null,null,null);t.default=_.exports}}]);