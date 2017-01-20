/**
 * Created by rocky on 17/1/19.
 */
$(function () {
    $('#search_button').button();

    // 同时打开2个对话框
    //$('#reg').dialog();
    //$('#login').dialog();

    $('#reg').dialog({
        title:'会员注册',
        buttons:{
            '提交':function(){
                alert('提交了')
            },
            '取消':function(){
                $(this).dialog('close')
            },
        },
        // 弹窗位置
        //position:'left top',

        // 大小
        //width:500,
        //height:300,

        // 最小最大
        //minWidth:300,
        //minHeight:200,

        // 视觉效果
        //show:true, // 淡入
        //hide:true, // 淡出
        //show:'slide',// 还有很多特效
        //hide:'slide',

        // 行为选项
        //autoOpen:false,
        //draggable:false, //移动
        //resizable:false, //调整大小
        //modal:true,// 后面有遮罩
        closeText:'关闭',

        /*
        // 事件选项
        focus: function (e,ui) {
           // alert('得到焦点')
        },

        // 创建
        create: function (e,ui) {
           // alert('创建就会执行')
        },

        // 打开执行
        open: function () {},

        // 关闭执行
        close:function(){},

        // 关闭前(确认关闭的动作)
        beforeClose:function(){
            return false, // 不关闭对话框
        },

        // 移动执行
        drag:function(e,ui){
            $('#reg').text('top: ' + ui.position.top + '  left: ' + ui.position.left)
        },

        // 开始移动
        dragStart:function(e,ui){},

        // 移动结束
        dragStop:function(e,ui){},


        // 拉伸对话框执行
        resize:function(e,ui){
            $('#reg').text('width:' + ui.size.width + 'height:' + ui.size.height)
        },
        // 开始拉伸
        resizeStart:function(){},

        // 结束拉伸
        resizeStop:function(){},

        */



    });

    // 如果使用了autoOpen:false,就不会直接显示,要点击事件才会触发
    $('#reg_a').click(function () {
        $('#reg').dialog('open'); // 点击注册打开
    });

    $('#reg').click(function () {
        //$('#reg').dialog('close'); // 点击对话框关闭 销毁:'destroy'

    });

    /*
       // $('#reg').dialog('参数')
       dialog('destroy'):销毁,
       dialog('isOpen'):是否打开,
       dialog('widget'):获取对话框对象,
       dialog('option',param):获取param属性值,
       dialog('option',param,value):设置param属性的值
    */

    $('#reg').on('dialogclose', function () {
        alert('关闭时触发')
    })
    /*
    * on('参数',function(){})
    *
    * dialogfocus,得到焦点时触发
    * dialogopen,显示时触发
    * dialogbeforeclose,
    * dialogclose,
    * dialogdrag
    * dialogdragstart
    * .
    * .
    * .
    * */
})