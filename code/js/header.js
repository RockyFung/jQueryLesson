/**
 * Created by rocky on 17/1/19.
 */
$(function () {

    // 用button元素,不要用input元素
    $('#search_button').button({
        //disabled:true, // 无法点击
        //label:'搜索', // 改按钮文字
        icons:{
            // 内置图标名称 http://api.jqueryui.com/theming/icons/
            primary:'ui-icon-search', //文字前面放图标
            secondary:'', //文字后面放图标
        },

    });

    $('#reg').dialog({
        autoOpen:true,
        //modal:true, // 会遮住dialog??????
        resizable:false,
        width:320,
        height:340,
        buttons:{
            '提交':function(){},
        },
    });

    $('#reg input[type=radio]').button();

    // 日历功能
    $('#date').datepicker({
        //disable:false,
        //numberOfMonths:3, // 弹出日历的数量
        //numberOfMonths:[3,2], // 每行每列多少个
        showOtherMonths:true, // 是否显示不是这个月的日期,不可点击
        //selectOtherMonths:true, // 可以点击
        changeMonth:true, // 快速月份选择框
        changeYear:true, // 快速年份选择框
        isRTL:false, // 是否从右向左绘制
        // 按钮
        //showOn:'button', // 按钮触发
        //buttonText:'日历', // 按钮文字
        showButtonPanel:true, // 回到今天
        maxDate:0, // 今天往后多少天之后不可以点击
        //minData:-1, // 今天往前多少天之前不可以选择
        //minData:'1m', // 一个月
        //minData:'1w', // 一周
        hideIfNoPrevNext:true, //往后不能点击,就把按钮隐藏
       // maxDate和minDate限制日期优先级比较高,限制年份优先级没有yearRange高
        yearRange:'1950:2020', // 年份范围
    });

    // 工具提示栏
    // 先把内容设置在元素的title属性里面
    $('#reg input[title]').tooltip({
        //disable:true,
        //content:'改变了title',
        //items:'input', // 只有input才能用
        //tooltipClass:'aaa', //引入class
        position:{
            my:'left top', // 以目标左下角为基准
            at:'right+10 center', // 以my为基准
        },

        show:false, // 淡入淡出效果,还有很多特效
        hide:false,

        //track:true, // 跟随鼠标移动

        // 事件 open close create
        //open: function (e,ui) {
        //    alert('打开时触发');
        //},

    });

    // 自动补全
    /*
    var host = ['aaa','abbb','accc','ccdddd'];
    $('#email').autocomplete({
        source:host, //数据源
        //disable:true,
        minLength:1, // 触发字符串数量,默认1
        //delay:1000, //延迟显示,毫秒
        autoFocus:true, // 第一个默认被选中
        //position:{
        //    my:'left top', // 以目标左下角为基准
        //    at:'right+10 center', // 以my为基准
        //},
        //focus: function (e,ui) {}, //获取焦点触发
        //select:function (e,ui) {}, //选定时触发
        // ...
    });
    */

    // 邮箱自动补全功能
    $('#email').autocomplete({
        delay:0,
        autoFocus:true,
        source: function (request,response) {
            // request.term // 获取用户输入的内容
            // response 绑定数据源,不会过滤,会呈现所有数据
            //response(['aaa','abbb','accc','ccdddd']);

            var hosts = ['qq.com','163.com','126.com','gmail.com','sina.com'];
            var term = request.term; // 用户输入内容
            var name = term; // 邮箱用户名
            var host = ''; // 域名
            var ix = term.indexOf('@'); // @位置
            var result = []; // 最终邮箱列表
            result.push(term); // 把用户输入的内容也加到列表中

            // 当有@的时候重新分配用户名和域名
            if (ix>-1){
                name = term.slice(0,ix);
                host = term.slice(ix+1);
            }
            if (name){
                // 如果用户已经输入@和后面的域名
                // 那么就找到相关的域名提示,如aa@1,就提示aa@126.com
                // 如果用户没有输入@和后面的域名,就提示所有的域名
                var findedHosts = [];
                if(host){
                    // 找域名
                    findedHosts = $.grep(hosts, function (value, index) {
                        return value.indexOf(host) > -1
                    })
                }else{
                    findedHosts = hosts;
                }
                // 返回用户名+@+域名
                var findedResult = $.map(findedHosts, function (value, index) {
                    return name + "@" +value;
                })
                // 显示结果
                result = result.concat(findedResult);
            }

            response(result);
        },
    });



















})