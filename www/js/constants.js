angular.module('weather')

    .constant('OpenWeatherConfig', {
        searchUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
        units: '&units=metric&lang=fr',
        appid: '&appid=089eba173ff83acbaf7f12c16e6295f2',
        imgUrl: 'http://openweathermap.org/img/w/'
    })