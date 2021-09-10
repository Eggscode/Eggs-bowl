let btn = document.querySelector('.toggle');
let span = document.querySelectorAll('span')
let nav = document.querySelector('.nav');


btn.addEventListener('click', function(){
    nav.classList.toggle('active');
    span.forEach(function(tog){
        return tog.classList.toggle('active');
    })
})

function myMap(){
    let mapProp = {
        center:new google.maps.LatLng(9.051758756652701, 7.4436299758208575),
        zoom:5
    };
    const map = new google.maps.Map(document.getElementById('map'), mapProp)
}

// var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
//             var marker = new google.maps.Marker({
//                 position: siliconValley,
//                 map: googlemap
//             });





   




