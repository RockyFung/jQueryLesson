/**
 * Created by rocky on 17/1/20.
 */
jQuery(function($){
    $.datepicker.regional['zh-CN'] = {
        closeText: '关闭',
        prevText: '<上月',
        nextText: '下月>',
        currentText: '今天',
        monthNames: ['一月','二月','三月','四月','五月','六月',
            '七月','八月','九月','十月','十一月','十二月'],
        monthNamesShort: ['一','二','三','四','五','六',
            '七','八','九','十','十一','十二'],
        dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
        dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
        dayNamesMin: ['日','一','二','三','四','五','六'],
        weekHeader: '周',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年',

        // 事件
        /*
         //beforeShow:function(){},
         beforeShowDay: function (date) {
         // 每个月的1号被禁用
         if (date.getDate() == 1){
         return [false];//[布尔值,'class','提示']
         }else{
         return [true];
         }
         },

         onChangeMonthYear: function (year,month,inst) {
         //alert('改变之后的年月' + year + month);
         // inst : 对象
         },
         */

    };
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});