(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dcaa5c0"],{"0e49":function(e,t,a){},"445c":function(e,t,a){"use strict";var i=a("0e49"),o=a.n(i);o.a},"584a":function(e,t){var a=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=a)},a21f:function(e,t,a){var i=a("584a"),o=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},f370:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{staticStyle:{position:"fixed",right:"20px",top:"10px"},attrs:{type:"info",icon:"el-icon-search"},on:{click:e.init}},[e._v("汉字搜索")]),a("el-dialog",{attrs:{title:"搜索",visible:e.dialogFormVisible,modal:!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("汉字")]),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("繁体汉字")]),a("el-radio",{attrs:{label:"4"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("拼音")]),a("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{label:"请输入要搜索的内容","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.word,callback:function(t){e.$set(e.form,"word",t)},expression:"form.word"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("确 定")])],1)],1),a("div",{ref:"dv",style:"height: "+e.tableHeight+"px; overflow-y: auto; position: absolute; top: 0; width: 100%; bottom: 0"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"汉字:"}},[a("span",[e._v(e._s(t.row.word))])]),a("el-form-item",{attrs:{label:"繁体:"}},[a("span",[e._v(e._s(t.row.oldword))])]),a("el-form-item",{attrs:{label:"笔画:"}},[a("span",[e._v(e._s(t.row.strokes))])]),a("el-form-item",{attrs:{label:"读音:"}},[a("span",[e._v(e._s(t.row.pinyin))])]),a("el-form-item",{attrs:{label:"偏旁:"}},[a("span",[e._v(e._s(t.row.radicals))])]),a("el-form-item",{attrs:{label:"含义:"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("更多")]),a("el-dialog",{attrs:{title:"含义",visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[e._v(e._s(t.row.explanation))]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1),a("el-form-item",{attrs:{label:"更多了解:"}},[a("a",{staticStyle:{"text-decoration":"none",color:"#409EFF"},attrs:{target:"_blank",href:"https://hanyu.baidu.com/zici/s?wd="+t.row.word}},[e._v("百度字词")])])],1)]}}])}),a("el-table-column",{attrs:{label:"汉字",prop:"word"}}),a("el-table-column",{attrs:{label:"繁体",prop:"oldword"}}),a("el-table-column",{attrs:{label:"读音",prop:"pinyin"}}),a("el-table-column",{attrs:{label:"含义",prop:"explanation"}}),a("el-table-column",{attrs:{label:"标记"}},[a("i",{class:"el-icon-circle-check-outline"})])],1)],1),a("div",{staticStyle:{"background-color":"#fff",width:"100%",height:"50px",position:"absolute",bottom:"0"}},[a("el-pagination",{staticStyle:{position:"absolute",bottom:"30px",left:"50%",transform:"translateX(-50%)"},attrs:{background:!0,small:!0,"current-page":e.currentPage,"page-sizes":[10,20,30],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},o=[],s=a("f499"),r=a.n(s),l=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"character",data:function(){return{tableData:[],currentPage:1,total:0,page:1,pageSize:10,dialogFormVisible:!1,dialogVisible:!1,form:{word:""},radio:"1",formLabelWidth:"150px",tableHeight:document.documentElement.clientHeight-130,scrollTop:0}},methods:{init:function(){this.form.word="",this.radio="0",this.dialogFormVisible=!0},handleSizeChange:function(e){console.log("每页 ".concat(e," 条")),this.pageSize=e,this.$store.commit("changePageSize",e);var t=this.$store.state.searchParams.id,a=this.$store.state.searchParams.temp,i=this.$store.state.searchParams.page;this.searchCharacter(t,a,i,e),this.$refs.dv.scrollTop=0},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.$store.commit("changePage",e);var t=this.$store.state.searchParams.id,a=this.$store.state.searchParams.temp,i=this.$store.state.searchParams.pageSize;this.searchCharacter(t,a,e,i),this.$refs.dv.scrollTop=0},searchCharacter:function(e,t,a,i){var o=this;this.$http.get("character?id=".concat(e,"&temp=").concat(t,"&page=").concat(a,"&pageSize=").concat(i)).then(function(e){if(o.tableData=e.body.data,o.total=e.body.total,localStorage.getItem("history")){var a=new Date,i={temp:t,time:a.toLocaleString()},s=JSON.parse(localStorage.getItem("history"));s.unshift(i),s.length>=10&&s.pop(),localStorage.setItem("history",r()(s))}else{var l=new Date,n=[{temp:t,time:l.toLocaleString()}];localStorage.setItem("history",r()(n))}})},search:function(){var e=this.form.word.trim();switch(this.radio){case"1":if(/^[\u4e00-\u9fa5]{1}$/.test(e)){this.dialogFormVisible=!1;var t=this.$loading({target:this.$refs.dv,lock:!0,text:"拼命加载中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.searchCharacter(1,e,this.page,this.pageSize),this.$store.commit("updateSearchParams",{id:1,temp:e,page:this.page,pageSize:this.pageSize}),t.close()}else this.$message({showClose:!0,message:"请输入一个汉字",type:"error"});break;case"2":if(/^[\u4e00-\u9fa5]{1}$/.test(e)){this.dialogFormVisible=!1;var a=this.$loading({target:this.$refs.dv,lock:!0,text:"拼命加载中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.searchCharacter(2,e,this.page,this.pageSize),this.$store.commit("updateSearchParams",{id:2,temp:e,page:this.page,pageSize:this.pageSize}),a.close()}else this.$message({showClose:!0,message:"请输入一个繁体汉字",type:"error"});break;case"3":if(/^[1-9][0-9]*$/.test(e)){this.dialogFormVisible=!1;var i=this.$loading({target:this.$refs.dv,lock:!0,text:"拼命加载中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.searchCharacter(3,e,this.page,this.pageSize),this.$store.commit("updateSearchParams",{id:3,temp:e,page:this.page,pageSize:this.pageSize}),i.close()}else this.$message({showClose:!0,message:"请输入单个汉字的笔画数目",type:"error"});break;case"4":if(/^[a-zA-Z]{1,6}$/.test(e)){this.dialogFormVisible=!1;var o=this.$loading({target:this.$refs.dv,lock:!0,text:"拼命加载中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.searchCharacter(4,e,this.page,this.pageSize),this.$store.commit("updateSearchParams",{id:4,temp:e,page:this.page,pageSize:this.pageSize}),o.close()}else this.$message({showClose:!0,message:"请输入单个汉字的拼音",type:"error"});break;case"0":this.$message({showClose:!0,message:"请选择搜索方式",type:"error"});break}}}}),n=l,c=(a("445c"),a("2877")),h=Object(c["a"])(n,i,o,!1,null,"8bae1d8a",null);t["default"]=h.exports},f499:function(e,t,a){e.exports=a("a21f")}}]);
//# sourceMappingURL=chunk-1dcaa5c0.caecd79c.js.map