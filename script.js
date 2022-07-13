let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');

let khaled = document.querySelector('.khaled');


window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value *4+'px';
    mountains3.style.top = value *1.5 +'px';
    mountains4.style.top = value *1.2 +'px';
    river.style.top =value +'px';
    boat.style.top =value +'px';
    boat.style.left =value *3+'px';
    khaled.style.fontSize= value + 'px'

   if (scrollY >=67){
    khaled.style.cssText =`position: fixed; font-size:67px ;`
   }

   if (scrollY >=427){
    khaled.style.cssText =`display:none; ;`

}

if (scrollY >=80){
    
    document.querySelector('.main').style.cssText =`background-image: linear-gradient(to top,#376281,#10001f);`
}
else{
    
    document.querySelector('.main').style.cssText =`background-image: linear-gradient(to top,#200016,transparent);`

}

}
