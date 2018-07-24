function foo() {
    const tmp1 = _.template('<div class="second-section_info-title">\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '             <span>Индивидуальность</span>\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '         </div>\n' +
        '         <p class="second-section_info-paragraph">Мы относимся к созданию обручальных колец\n' +
        '         не просто как к изящному украшению, а как\n' +
        '         к произведению искуства и индивидуальной вещи,\n' +
        '         которую человек носит на протяжение всей его жизни.</p>');

    const tmp2 = _.template('<div class="second-section_info-title">\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '             <span>Гарантия качества</span>\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '         </div>\n' +
        '         <p class="second-section_info-paragraph">Всё золото и все наши изделия без исключения\n' +
        'проходят процесс опробирования в Российской\n' +
        'государственной пробирной палате.</p>');

    const tmp3 = _.template('<div class="second-section_info-title">\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '             <span>3-D моделирование</span>\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '         </div>\n' +
        '         <p class="second-section_info-paragraph">Вы сможете наглядно увидеть то кольцо, которое\n' +
        'вы хотите получить ещё до того, как оно будет\n' +
        'готово. Тем самым вы избегаете временные и денежные затраты.</p>');

    const tmp4 = _.template('<div class="second-section_info-title">\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '             <span>Дизайн любой сложности</span>\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '         </div>\n' +
        '         <p class="second-section_info-paragraph">Более, чем за 15 лет опыта нашей работы,\n' +
        'мы научились делать кольца практически любого\n' +
        'дизайна и сложности. Вы можете предоставить\n' +
        'нам фото образец кольца или просто рассказать\n' +
        'о вашей идее, и мы справимся\n' +
        'с этой задачей</p>');

    const tmp5 = _.template('<div class="second-section_info-title">\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '             <span>Бесшовная технология</span>\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '         </div>\n' +
        '         <p class="second-section_info-paragraph">Все наши кольца являются бесшовными, т.е.\n' +
        'не имеют паянных швов, что делает кольцо\n' +
        'ещё более изысканным украшением</p>');

    const tmp6 = _.template('<div class="second-section_info-title">\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '             <span>Скорость выполнения работ</span>\n' +
        '             <div class="second-section_title-line"></div>\n' +
        '         </div>\n' +
        '         <p class="second-section_info-paragraph">Скорость изготовления обручальных колец\n' +
        'зависит от того, какую модель кольца\n' +
        'вы выбираете. В среднем, мы выполняем заказы\n' +
        'от 14 до 21 дня.</p>');

    let root = document.getElementById("second-section_rhombus-content");

    let firstSwitch = document.getElementById("radio-open-1");
    let secondSwitch = document.getElementById("radio-open-2");
    let thirdSwitch = document.getElementById("radio-open-3");
    let fourthSwitch = document.getElementById("radio-open-4");
    let fivesSwitch = document.getElementById("radio-open-5");
    let sixSwitch = document.getElementById("radio-open-6");


    if(firstSwitch.checked){
        root.innerHTML = tmp1();
    } else if(secondSwitch.checked){
        root.innerHTML = tmp2();
    } else if(thirdSwitch.checked){
        root.innerHTML = tmp3();
    }else if(fourthSwitch.checked){
        root.innerHTML = tmp4();
    }else if(fivesSwitch.checked){
        root.innerHTML = tmp5();
    } else if(sixSwitch.checked){
        root.innerHTML = tmp6();
    }
}

foo();

function popup(id, form, h1, h2, btn) {
    $('.popup_overlay').show();
    $('#'+id).addClass('activePopup');
    if(id == 'request') {
        var def_h1 = 'Оставить заявку';
        var def_h2 = 'Заполните форму,<br>и&nbsp;мы&nbsp;обязательно свяжемся с&nbsp;вами!';
        var def_btn = 'Оставить заявку';
    }
    if(h1 != '') {$('#'+id).find('.popup_h1').html(h1);} else {$('#'+id).find('.modal_title').html(def_h1);}
    if(h2 != '') {$('#'+id).find('.popup_h2').html(h2);} else {$('#'+id).find('.modal_text').html(def_h2);}
    if(btn != '') {$('#'+id).find('.button').html(btn);} else {$('#'+id).find('.button').html(def_btn);}
    $('.activePopup').show();
    var m_top = -$('.activePopup').outerHeight() / 2 + 'px';
    var m_left = -$('.activePopup').outerWidth() / 2 + 'px';
    $('.activePopup').css({
        'margin-top': m_top,
        'margin-left': m_left
    })
    $('.formname').attr("value", form);
}

function popupDiplom(dimpomIndex) {
  $('.popup_overlay').show();
  $('.diplom__image').attr('src', `images/diploms/${dimpomIndex}.jpg`);
  $('#' + 'diplom').addClass('activePopup');
  $('.activePopup').show();
}


function popup_out() {
    $('.popup_overlay').hide();
    $('.popup').hide();
    $('.popup').removeClass('activePopup');
    $('body').find('label').removeClass('red');
    $('.video_inner').html('');
}
