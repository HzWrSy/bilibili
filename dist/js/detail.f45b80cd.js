(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["detail"],{3938:function(t,e,o){"use strict";var a=o("e8b9"),i=o.n(a);i.a},d9b7:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"detail"},[o("h3",[o("router-link",{staticStyle:{display:"inline-block"},attrs:{to:{name:"channel"}}},[t._v("我的相簿")]),t._v(" > "+t._s(t.albumName)+"\n\t")],1),o("p",{staticStyle:{color:"#ccc"}},[t._v(t._s(t.userPhoto.count)+"张相片 | "+t._s(t.userPhoto.xyuser[0].time)+"更新")]),o("div",{staticStyle:{height:"50px"}},[o("el-dropdown",{staticStyle:{padding:"7px 12px"}},[o("span",{staticClass:"el-dropdown-link"},[t._v("\n\t\t\t\t下拉菜单"),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",[t._v("编辑相簿")]),o("el-dropdown-item",[t._v("删除相簿")])],1)],1),o("el-dialog",{attrs:{title:"编辑相簿",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("el-form",{attrs:{model:t.form}},[o("el-form-item",[o("el-input",{attrs:{placeholder:"填写频道标题"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),o("el-form-item",[o("el-input",{attrs:{type:"textarea",row:3,placeholder:"填写频道简介(选填)"},model:{value:t.form.input,callback:function(e){t.$set(t.form,"input",e)},expression:"form.input"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1)],1),o("div",{staticClass:"pd"},t._l(t.userPhoto.xyuser,function(e){return o("div",{key:e,staticClass:"pd-item"},[o("a",{on:{click:function(e){return t.getPic(t.albumId,t.albumName)}}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.url,expression:"item.url"}]}),o("h3",{staticStyle:{margin:"10px 0px"}},[t._v(t._s(e.photoname))]),o("p",{staticStyle:{color:"#999"}},[t._v(t._s(e.time))])])])}),0),o("el-pagination",{staticStyle:{"text-align":"center"},attrs:{background:"",layout:"prev, pager, next","page-size":5,total:t.userPhoto.count},on:{"current-change":t.handleCurrentChange1}})],1)},i=[],n={data:function(){return{albumName:"",albumId:"",userPhoto:"",dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},mounted:function(){this.albumName=this.$route.query.albumName,this.handleCurrentChange1(1)},methods:{handleCurrentChange1:function(t){var e=this;this.albumId=this.$route.query.albumId,this.axios.get("xyphoto/findPageByAlbumId.do",{params:{albumid:this.albumId,page:t}}).then(function(t){e.userPhoto=t.data})},getPic:function(t,e){var o=this.$router.resolve({name:"photoDetail",query:{albumId:t,albumName:e}}),a=o.href;window.open(a,"_blank")}}},l=n,r=(o("3938"),o("2877")),s=Object(r["a"])(l,a,i,!1,null,"4b852994",null);e["default"]=s.exports},e8b9:function(t,e,o){}}]);
//# sourceMappingURL=detail.f45b80cd.js.map