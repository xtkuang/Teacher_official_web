$(function(){
var articleUrl = "/_wp3services/generalQuery?queryObj=articles";
var siteId = 27; //站点Id
var columnId = $(".main .aside .m-news .title h1").attr("date_id"); //多个以英文逗号分隔
var pageIndex = 1; //从某页开始
var rows = 13; //每页显示多少篇文章
var text = "";
var pageCount="";
var PageClick='';
$(".time-list .mm").click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
loadContents(pageIndex,columnId,siteId,rows);
})
loadContents(pageIndex,columnId,siteId,rows);
function loadContents(pageIndex,columnId,siteId,rows){
    $(".main .aside .m-news ul").children().remove();
    //排序参数
    var orderData = [
    ];
    var returnInfos = JSON.stringify(returnData());
    var orders = JSON.stringify(orderData);
    var conditions = JSON.stringify(conditData(text));
                                                                                                                     
    $.ajax({
        url: articleUrl,
        type: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        async: false,
        dataType: 'json',
        data: {
            siteId:siteId,
            columnId:columnId,
            pageIndex:pageIndex,
            rows: rows,
            orders:orders,
            returnInfos: returnInfos,
            conditions:conditions
            //visitPermitFilter:1
        },
        success: function(result){
            var total = result.total;
            if (result != null){
                //console.log(result);
pageCount = result.pageCount; 
                for (j=0;j < result.data.length; j++){
                    var art = result.data[j];
                                                                                                                                 
                   html =  '<li class="news n1 clearfix">'+
                             '<a href="'+art.url+'" target="_blank" title="'+art.title+'">'+
                                '<div class="move"></div>'+
                            '   <span class="con">'+art.title+'</span>'+
                            '   <span class="time">'+art.publishTime+'</span>'+
 
                            '</a></li>';
                     $(".main .aside .m-news ul").append(html);
                }
               PageClick = function(pageclickednumber) {
	      $("#pager").pager({ pagenumber: pageclickednumber, pagecount: pageCount, buttonClickCallback: PageClick });
              loadContents(pageclickednumber,columnId,siteId,rows);
            }
             $("#pager").pager({ pagenumber: pageIndex, pagecount: pageCount , buttonClickCallback: PageClick });
            }
         
        }
    });
}
/*查询条件*/
function conditData(val){
   var year=parseInt($(".curTime font").text());
   var month=parseInt($(".time-list .mm.cur").text());
    console.log(month);
    var conditdata = [
      
          //{field: "title", value: val, judge: "like"},
          {field: "scope", value: 1, judge: "="},
    ];
  if($(".time-list .mm.cur").text()!=""){
conditdata .push( {field: 'publishTime', value: year+"-"+month+"-01", judge: '>='});
conditdata .push( {field: 'publishTime', value: year+"-"+(month+1)+"-01", judge: '<'});
 }else{
   conditdata .push( {field: 'publishTime', value: year+"-01-01", judge: '>='});
conditdata .push( {field: 'publishTime', value: (year+1)+"-01-01", judge: '<'});
  }
    return conditdata;
}
//请求返回参数
function returnData(){
    var returnInfosdata = [
        {field: "title",pattern: [{name: "lp",value: "15"}], name: "title"},
        {field: "publishTime",pattern: [{name: "d",value: "yyyy-MM-dd"}],name: "publishTime"}
    ];
    return returnInfosdata;
}

});