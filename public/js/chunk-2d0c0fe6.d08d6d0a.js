(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0fe6"],{"43c4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{staticStyle:{position:"fixed",right:"20px",top:"60px","z-index":"2020"},attrs:{type:"danger",icon:"el-icon-delete"},on:{click:t.deleteHistory}},[t._v("清空历史记录")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"temp",label:"历史记录",width:"180"}}),a("el-table-column",{attrs:{prop:"time",label:"时间",width:"180"}})],1)],1)},o=[],i={name:"history",data:function(){return{tableData:[]}},mounted:function(){this.tableData=JSON.parse(localStorage.getItem("history"))},methods:{deleteHistory:function(){var t=this;this.$confirm("此操作将永久清空历史记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){t.$message({type:"success",message:"删除成功!"}),localStorage.removeItem("history"),t.tableData=[]}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},c=i,l=a("2877"),s=Object(l["a"])(c,n,o,!1,null,"c0fcb1ba",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0c0fe6.d08d6d0a.js.map