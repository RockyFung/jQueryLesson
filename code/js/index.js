/**
 * Created by rocky on 17/1/19.
 */
$(function () {

    // 全局默认行为
    //$.validator.setDefaults({
    //    debug:true,
    //})


    $('#reg').validate({
        debug:true, // 调试模式,不会提交跳转
        submitHandler: function (form) {
             //验证成功后执行,而且阻止了默认提交
             //一般用于ajax提交
            alert('验证成功!!!')
        },

        // 忽略密码输入
        //ignore:'#password',

        // 群组错误提示
        //groups:{
        //    myerror:'user pass',
        //},

        // 显示群组错误提示 ??????
        /*
        errorPlacement: function (error,element) {
            alert(element.length);
            $.each(error, function (index, value) {
                alert(index + ' ' + value);
            })
        },*/


        // 规则
        rules:{
            user:{ // name属性的值
                required:true,
                minlength:3, // 汉字也算一个字符
                //rangelength:[5,10],
            },
            pass:{
                required:true,
                minlength:6,
            },


            // 其他验证
            /*
            email:{
                email:true,
            },
            net:{
                url:true,
            },
            date:{
                // 验证格式,也验证有效性,一般用这个
                date:true,
            },
            date2:{
                // 只验证格式,不验证有效性
                dateISO:true,
            },
            number:{
                number:true,
            },
            number2:{
                digits:true,
            },
            credit:{
                creditcard:true,
            },
            pass2:{
                equalTo:'#pass',
            },
            min:{
                min:5,
            },
            range:{
                range:[5,10],
            },
            length:{
                rangelength:[5,10],
            },
            */
        },

        // 提示文字
        messages:{
            user:{
                required:'账号不能为空!!',
                //minlength:'账号不能小于两位!!'
                minlength:"账号不能小于{0}位!!!", // 自动获取最小字数
                //rangelength:'必须在{0}-{1}之间',
            },
            pass:{
                required:'密码不能为空!!',
                minlength:"密码不能小于{0}位!!!",
            },


            date:{
              date:'输入格式2016-03-12',
            },
        },

    });
})