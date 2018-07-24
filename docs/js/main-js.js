const rings={classic:{name:"Классические кольца ",description:"Сегодня, как и тысячи лет назад, свадебные кольца все так же символизируют бесконечность, преданность и вечную любовь. Но современные дизайнеры сумели придать этим ювелирным украшениям и свой собственный смысл. Особенно символична популярная в последние годы серия обручальных колец Twin Set.",images:["4","5","6"]},diamond:{name:"Кольца с бриллиантами",description:"Золотые обручальные кольца с бриллиантами – вечные украшения. С незапамятных времен влюбленные обмениваются ими в знак взаимной любви и согласия. Кольца символизируют постоянство, прочность и процветание будущего союза. Поэтому их выбор – очень важное и ответственное мероприятие. Что может быть роскошнее и элегантнее, чем золотое обручальное кольцо с настоящими якутскими бриллиантами? Не зря золото называют благородным металлом, а бриллиант – королем драгоценных камней.",images:["7","8","9"]},twin:{name:"Twin set",description:"Большинство молодоженов из всего разнообразия ювелирной продукции предпочитают выбирать классические обручальные кольца простого дизайна. Традиционный вариант – кольцо из желтого золота. Такие обручальные кольца – классика, их носят большинство женатых людей. У гладких обручальных колец есть бесспорное преимущество – они удобны в носке, ничего не поцарапают, не сделают зацепку на ткани. Изделие из золота хорошо само по себе, без дополнительных деталей. А для сторонников классики, которые хотят проявить свой стиль, отличное решение – изящные обручальные кольца из белого, жёлтого или красного золота. Стильно и богато смотрятся широкие классические обручальные кольца в нашем каталоге. Но если у вас недостаточно денег, не огорчайтесь. Любовь и супружеское счастье не измеряются шириной кольца. Тем более что на Руси было поверье: «простое кольцо – к спокойной и счастливой семейной жизни». Великолепный вариант обручальные кольца– классика с изящной гравировкой внутри.",images:["10","11"]},empty:{name:"Без камней",description:"Одним из самых модных тенденций в мире свадебных украшений в мире стали комбинированные модели обручальных колец из драгоценных металлов двух оттенков. Соединение белого и желтого или белого и красного золота в изделии символизируют  соединение двух сердец. А с практической точки зрения сочетание двух цветов в кольцах позволяет носить их  с другими ювелирными украшениями разных оттенков абсолютно гармонично, не вступая в дисонанс. Сегодня можно выбрать обручальное кольцо, оформленное узорами, символами или знаками, которые близки и значимы для влюблённой пары.",images:["1","2","3"]}};var createSectionSlideQuntity=0;function onrCreateSectionSlideChange(e){const i=getCreateSectionSlideQuntity();$(".create-section__slider-label-number--left").html(e),$(".create-section__slider-header").html("Шаг "+e),1===e?$(".create-section__slider-controller--left").addClass("create-section__slider-controller--disabled"):$(".create-section__slider-controller--left").removeClass("create-section__slider-controller--disabled"),e===i?$(".create-section__slider-controller--right").addClass("create-section__slider-controller--disabled"):$(".create-section__slider-controller--right").removeClass("create-section__slider-controller--disabled")}function setCreateSectionSlideQuntity(){createSectionSlideQuntity=$(".create-section__slider").children().length,$(".create-section__slider-label-number--right").html(createSectionSlideQuntity)}function getCreateSectionSlideQuntity(){return createSectionSlideQuntity}function onChangeRingType(e){const i=rings[e];$(".types-section__type-title--active").removeClass("types-section__type-title--active"),$("."+e).addClass("types-section__type-title--active"),$(".types-section__name-label").html(i.name),$(".types-section__type-description").html(i.description),$(".types-section__slider").slick("slickRemove",null,null,!0),i.images.forEach(e=>{$(".types-section__slider").slick("slickAdd","<div class='types-section__slider-slide'>"+`<img class="types-section__slider-slide-image" src="./images/rings/${e}.jpg" alt="">`+"</div>")})}$(document).ready(function(){setCreateSectionSlideQuntity(),$(".about-slider").slick({infinite:!1,draggable:!1,slidesToShow:window.innerWidth<1200?1:3,slidesToScroll:1,dots:!0}),$(".create-section__slider-controller--right").on("click",function(){$(".create-section__slider").slick("slickNext")}),$(".create-section__slider-controller--left").on("click",function(){$(".create-section__slider").slick("slickPrev")}),$(".diamond").on("click",function(e){onChangeRingType("diamond")}),$(".classic").on("click",function(e){onChangeRingType("classic")}),$(".empty").on("click",function(e){onChangeRingType("empty")}),$(".twin").on("click",function(e){onChangeRingType("twin")})}),$(document).ready(function(){$(".create-section__slider").slick({infinite:!1,draggable:!1,slidesToShow:1,slidesToScroll:1,dots:!1}),$(".create-section__slider").on("afterChange",function(e,i,t){onrCreateSectionSlideChange(t+1)})}),$(document).ready(function(){$(".types-section__slider").slick({infinite:!1,draggable:!0,vertical:!0,slidesToShow:1,slidesToScroll:1,dots:!1}),onChangeRingType("twin"),$(".about-slider").on("click",".about-slide",function(e){let i=$(e.currentTarget).attr("data-slick-index");popupDiplom(+i+1)})});