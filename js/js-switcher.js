function foo() {
    const tmp1 = _.template('<span class="second-section_info-title">Индивидуальность</span>' +
        '<p class="second-section_info-paragraph">Мы относимся к созданию обручальных колец</p> \n' +
        '<p class="second-section_info-paragraph">не просто как к изящному украшению, а как</p> \n' +
        '<p class="second-section_info-paragraph">к произведению искуства и индивидуальной вещи,</p>\n' +
        '<p class="second-section_info-paragraph">которую человек носит на протяжение всей его жизни.</p>' +
        '                        </p>');

    const tmp2 = _.template('<span class="second-section_info-title">Гарантия качества</span>' +
        '<p class="second-section_info-paragraph">всё золото и все наши изделия без исключения</p> \n' +
        '<p class="second-section_info-paragraph">проходят процесс опробирования в Российской</p> \n' +
        '<p class="second-section_info-paragraph">государственной пробирной палате. </p>\n' +
        '                        </p>');

    const tmp3 = _.template('<span class="second-section_info-title">3-D моделирование</span>' +
        '<p class="second-section_info-paragraph">Вы сможете наглядно увидеть то кольцо, которое</p> \n' +
        '<p class="second-section_info-paragraph">вы хотите получить ещё до того, как оно будет</p> \n' +
        '<p class="second-section_info-paragraph">готово. Тем самым вы избегаете временные и денежные затраты.</p>\n' +
        '                        </p>');

    const tmp4 = _.template('<span class="second-section_info-title">Дизайн любой сложности</span>' +
        '<p class="second-section_info-paragraph"> Более, чем за 15 лет опыта нашей работы,</p> \n' +
        '<p class="second-section_info-paragraph"> мы научились делать кольца практически любого</p> \n' +
        '<p class="second-section_info-paragraph"> дизайна и сложности. Вы можете предоставить</p>\n' +
        '<p class="second-section_info-paragraph">нам фото образец кольца или просто рассказать</p>\n' +
        '<p class="second-section_info-paragraph"> о вашей идее, и мы справимся</p>\n' +
        '<p class="second-section_info-paragraph">с этой задачей</p>\n' +
        '                        </p>');

    const tmp5 = _.template('<span class="second-section_info-title">Бесшовная технология</span>' +
        '<p class="second-section_info-paragraph">все наши кольца являются бесшовными, т.е.</p> \n' +
        '<p class="second-section_info-paragraph">не имеют паянных швов, что делает кольцо</p> \n' +
        '<p class="second-section_info-paragraph"> ещё более изысканным украшением</p>\n' +
        '                        </p>');

    const tmp6 = _.template('<span class="second-section_info-title">Скорость выполнения работ</span>' +
        '<p class="second-section_info-paragraph">скорость изготовления обручальных колец</p> \n' +
        '<p class="second-section_info-paragraph"> зависит от того, какую модель кольца/p> \n' +
        '<p class="second-section_info-paragraph"> вы выбираете. В среднем, мы выполняем заказы</p>\n' +
        '<p class="second-section_info-paragraph">от 14 до 21 дня.</p>\n' +
        '                        </p>');

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