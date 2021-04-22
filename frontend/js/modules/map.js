ymaps.ready(function(){
    // Указывается идентификатор HTML-элемента.
    let shop_map = new ymaps.Map("map", {
        center: [55.743475, 37.626731],
        zoom: 16,
        controls: ['zoomControl']
    });
    shop_map.behaviors.disable(["scrollZoom", "dblClickZoom" ])

    let myPlacemark = new ymaps.Placemark([55.743326, 37.629717], {
        iconContent: 'Мы здесь'
    }, {
        preset: 'islands#orangeStretchyIcon',
    });

    shop_map.geoObjects.add(myPlacemark);

    // shop_map.balloon.open(shop_map.getCenter(), {
    //     contentHeader: 'Наша лавка:',
    //     contentBody: 'Москва\n м. Новокузнецкая\n Пятницкий пер., 2 (Пятницкий рыбный комплекс)\n тел.: +7 915 273 8899\n e-mail: support@fishbutchery.ru'
    // });

});