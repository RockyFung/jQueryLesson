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
        //text:false, // 隐藏文字

        //事件
        //create:function(){},
    });


    /*
    $('#search_button').button('disable'); // 禁用
    $('#search_button').button('enable');// 开启
    $('#search_button').button('refresh');// 更新
    */


    // 修改弹出对话框上的按钮属性

    $('#reg').dialog({
        buttons:{
            '提交':function(){}
        },
    });
    //$('#reg').parent().find('button').eq(1).button('disable');
    //$('#reg').dialog('widget').find('button').eq(1).button('disable');
    $('#reg input[type=radio]').button(); // 修改单选按钮


})