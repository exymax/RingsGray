const rings = {
  classic:  {
    name: "Классические кольца ",
    description: "Представляем Вашему вниманию коллекцию классических обручальных колец, которые изготавливаются по технологии «труба» и не имеют место пайки. В процессе производства мы используем высококачественную лигатуру импортного производства.  Мы предлагаем наиболее востребованные модели обручальных колец шириной от 3 мм до 5 мм.  Совершенная геометрия, идеально полированная и блестящая поверхность. Внутренняя поверхность колец имеет выпуклую поверхность – «комфорт», облегающая посадка. Только надев эти обручальные кольца на руку, можно понять всю прелесть и отличие наших колец от внешне подобных других. В наличии всегда более 30 видов колец в белом, желтом и розовом золоте 585 пробы. В течении дня мы можем изменить поверхность кольца и вставить туда бриллиант. Можно нанести отпечаток пальца и сделать любую гравировку на кольце. По заказу кольца могут быть выполнены в золоте 750 пробы и шириной до 9 мм.  Срок выполнения заказа 3-4 недели.",
    images: ['4', '5', '6']
  },
  diamond:  {
    name: "Кольца с бриллиантами",
    description: "Золотые обручальные кольца с бриллиантами – вечные украшения. С незапамятных времен влюбленные обмениваются ими в знак взаимной любви и согласия. Кольца символизируют постоянство, прочность и процветание будущего союза. Поэтому их выбор – очень важное и ответственное мероприятие. Что может быть роскошнее и элегантнее, чем золотое обручальное кольцо с настоящими якутскими бриллиантами? Не зря золото называют благородным металлом, а бриллиант – королем драгоценных камней.",
    images: ['7', '8', '9']
  },
  twin: {
    name: "Twin set",
    description: "Большинство молодоженов из всего разнообразия ювелирной продукции предпочитают выбирать классические обручальные кольца простого дизайна. Традиционный вариант – кольцо из желтого золота. Такие обручальные кольца – классика, их носят большинство женатых людей. У гладких обручальных колец есть бесспорное преимущество – они удобны в носке, ничего не поцарапают, не сделают зацепку на ткани. Изделие из золота хорошо само по себе, без дополнительных деталей. А для сторонников классики, которые хотят проявить свой стиль, отличное решение – изящные обручальные кольца из белого, жёлтого или красного золота. Стильно и богато смотрятся широкие классические обручальные кольца в нашем каталоге. Но если у вас недостаточно денег, не огорчайтесь. Любовь и супружеское счастье не измеряются шириной кольца. Тем более что на Руси было поверье: «простое кольцо – к спокойной и счастливой семейной жизни». Великолепный вариант обручальные кольца– классика с изящной гравировкой внутри.",
    images:['10', '11']
  },
  empty: {
    name: "Без камней",
    description: "Одним из самых модных тенденций в мире свадебных украшений в мире стали комбинированные модели обручальных колец из драгоценных металлов двух оттенков. Соединение белого и желтого или белого и красного золота в изделии символизируют  соединение двух сердец. А с практической точки зрения сочетание двух цветов в кольцах позволяет носить их  с другими ювелирными украшениями разных оттенков абсолютно гармонично, не вступая в дисонанс. Сегодня можно выбрать обручальное кольцо, оформленное узорами, символами или знаками, которые близки и значимы для влюблённой пары.",
    images: ['1', '2', '3']
  }
};

var createSectionSlideQuntity = 0;

function onrCreateSectionSlideChange(slideNumber) {
  const slideQuantity = getCreateSectionSlideQuntity();
  $('.create-section__slider-label-number--left').html(slideNumber);
  $('.create-section__slider-header').html('Шаг ' + slideNumber);

  if (slideNumber === 1) {
    $('.create-section__slider-controller--left').addClass('create-section__slider-controller--disabled');
  } else {
    $('.create-section__slider-controller--left').removeClass('create-section__slider-controller--disabled');
  }

  if (slideNumber === slideQuantity) {
    $('.create-section__slider-controller--right').addClass('create-section__slider-controller--disabled');
  } else {
    $('.create-section__slider-controller--right').removeClass('create-section__slider-controller--disabled');
  }
}

function setCreateSectionSlideQuntity () {
  createSectionSlideQuntity =  $('.create-section__slider').children().length;
  $('.create-section__slider-label-number--right').html(createSectionSlideQuntity);
}

function getCreateSectionSlideQuntity () {
  return createSectionSlideQuntity;
}

function onChangeRingType(ringType) {
  const ring = rings[ringType];
  $('.types-section__type-title--active').removeClass('types-section__type-title--active');
  $('.' + ringType).addClass('types-section__type-title--active');

  $('.types-section__name-label').html(ring.name);
  $('.types-section__type-description').html(ring.description);


  $('.types-section__slider').slick('slickRemove', null, null, true);
  ring.images.forEach(image => {
    $('.types-section__slider').slick('slickAdd', "<div class='types-section__slider-slide'>"  + `<img class="types-section__slider-slide-image" src="./images/rings/${image}.jpg" alt="">` + '</div>');
  });
  // $('.types-section__slider').slick('slickAdd', slides);


}

$(document).ready(function(){
  setCreateSectionSlideQuntity();


  $('.about-slider').slick({
    infinite: false,
    draggable: false,
    slidesToShow: window.innerWidth < 1200 ? 1 : 3,
    slidesToScroll: 1,
    dots: true,
  });

  $('.create-section__slider-controller--right').on('click', function(){
    $('.create-section__slider').slick("slickNext");
  });

  $('.create-section__slider-controller--left').on('click', function(){
    $('.create-section__slider').slick("slickPrev");
  });


  $('.diamond').on('click', function(event){
    onChangeRingType('diamond');
  });

  $('.classic').on('click', function(event){
    onChangeRingType('classic');
  });

  $('.empty').on('click', function(event){
    onChangeRingType('empty');
  });
  $('.twin').on('click', function(event){
    onChangeRingType('twin');

  });


});


$(document).ready(function(){
    $('.create-section__slider').slick({
        infinite: false,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,

    });


  $(".create-section__slider").on("afterChange", function (event, slick, slide) {
    onrCreateSectionSlideChange(slide+1);
  });
});

$(document).ready(function(){
    $('.types-section__slider').slick({
        infinite: false,
        draggable: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,

    });

  onChangeRingType('twin');
    $('.about-slider').on('click', '.about-slide', function (event) {
      let slideClicked = $(event.currentTarget).attr("data-slick-index");
      popupDiplom(+slideClicked +1);
  });
});
