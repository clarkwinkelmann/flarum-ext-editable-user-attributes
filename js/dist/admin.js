(()=>{var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var a in t)e.o(t,a)&&!e.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:t[a]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};(()=>{"use strict";e.r(r);const t=flarum.core.compat["admin/app"];var a=e.n(t);a().initializers.add("clarkwinkelmann-editable-user-attributes",(function(){a().extensionData.for("clarkwinkelmann-editable-user-attributes").registerPermission({permission:"user.editJoinTime",icon:"fas fa-user-edit",label:a().translator.trans("clarkwinkelmann-editable-user-attributes.admin.permissions.editJoinTime")},"moderate").registerPermission({permission:"user.editAvatarUrl",icon:"fas fa-user-edit",label:a().translator.trans("clarkwinkelmann-editable-user-attributes.admin.permissions.editAvatarUrl")},"moderate")}))})(),module.exports=r})();
//# sourceMappingURL=admin.js.map