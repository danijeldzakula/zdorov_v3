/**
 * Created by Татьяна on 17.01.17.
 */


$(document).ready(function(){

    $('.js_submit:not(.order_call)').parent().before('  <div class="lv-row check_box_agree"><input type="checkbox" checked >Я согласен на обработку персональных данных <a href="#" class="checkbox_detal">?</a><div class="checkbox_content" style="display: none"><p>Я даю свое согласие на обработку предоставленных мною персональных данных ООО «ЗДОРОВ» в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных» для обработки и выполнения данной мною заявки, а также даю согласие на любые действия, совершаемые с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение) персональных данных в соответствии со ст. 3, ст. 9, ст. 15 Закона. Согласие на обработку моих персональных данных предоставляется без ограничения срока его действия.</p></div></div>');
    $('.js_submit').append('<style>.check_box_agree{margin:5px 0; font-size: 12px; position: relative;z-index:10;}.check_box_agree input{margin: 5px 10px; display: inline} .check_box_agree a{ border: 1px solid #8e8e8e; color: #8e8e8e; background-color: white; border-radius: 50%; padding: 0 6px}  .check_box_agree a:hover{background-color: red; color: #ffffff; border: none} .checkbox_content p{color: #000000} .checkbox_content{background-color: #ffffff; position: absolute; width:300px; padding: 10px; margin-top: 5px;  text-align: justify; } a.checkbox_close{color:#8e8e8e; font-size: 16px; float: right; border: none; background: transparent;margin-right: -10px; margin-top: -10px; } </style>');
$('.check_box_agree input').click(function(){
    if($(this).attr("checked") == 'checked'){
        console.log(1);
        $(this).parent().next().children('.js_submit').removeAttr('disabled');
    }
    else{
        $(this).parent().next().children('.js_submit').attr('disabled', 'true');
    }
});
    $('.checkbox_detal').click(function(e){
        e.preventDefault();
    });
$('.checkbox_detal').hover(function(e){
    e.preventDefault();
    $('.checkbox_content').show();
});

$('.checkbox_detal').mouseleave(function(e){
    e.preventDefault();
    $('.checkbox_content').hide();
});
});

