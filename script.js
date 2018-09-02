

var a = document.querySelector('.rocket');
var b = document.querySelector('.btn');
var c = document.querySelector('.formie');

b.addEventListener('click',function(){
    a.classList.add('bounceOutUp');
    b.classList.add('none');
    c.classList.remove('none');
    
});

