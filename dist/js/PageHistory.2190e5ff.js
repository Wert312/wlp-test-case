(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PageHistory"],{"66c1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-history"},[0===t.imagesHistory.length?a("div",{staticClass:"page-history page-history--empty"},[t._v(" Нет загруженных изображений ")]):a("image-card",{attrs:{images:t.imagesHistory},on:{deleteImageFromHistory:t.deleteImageFromHistory}})],1)},i=[],r=a("5530"),c=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.images,(function(e,s){return a("div",{key:s,staticClass:"card"},[a("div",{staticClass:"card__image-wrapper"},[a("img",{staticClass:"card__image",attrs:{src:e.image_original_url}})]),a("div",{staticClass:"card__info-wrapper"},[a("p",{staticClass:"card__title"},[t._v(t._s(e.title||"Нет названия"))]),a("p",{staticClass:"card__timestamp"},[t._v(t._s(e.import_datetime))]),a("button",{staticClass:"card__delete-btn",on:{click:function(e){return t.deleteImageFromHistory(s)}}},[t._v(" Удалить ")])])])})),0)},n=[],d={name:"ImageCard",props:{images:{type:Array,required:!0}},methods:{deleteImageFromHistory:function(t){this.$emit("deleteImageFromHistory",t)}}},m=d,l=(a("d5db"),a("2877")),_=Object(l["a"])(m,o,n,!1,null,"055c1168",null),u=_.exports,g={name:"PageHistory",components:{ImageCard:u},computed:Object(r["a"])({},Object(c["c"])({imagesHistory:function(t){return t.imagesHistory}})),methods:Object(r["a"])(Object(r["a"])({},Object(c["b"])(["DELETE_IMAGE_FROM_HISTORY"])),{},{deleteImageFromHistory:function(t){this.DELETE_IMAGE_FROM_HISTORY(t)}})},p=g,b=(a("9ba3"),Object(l["a"])(p,s,i,!1,null,"10d976a5",null));e["default"]=b.exports},"9ba3":function(t,e,a){"use strict";a("b521")},b521:function(t,e,a){},d5db:function(t,e,a){"use strict";a("dbed")},dbed:function(t,e,a){}}]);
//# sourceMappingURL=PageHistory.2190e5ff.js.map