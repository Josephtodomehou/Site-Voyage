const menubtn = document.querySelector('#menu-btn');
const menubtn2 = document.querySelector('#menu-btn2');
const navbar = document.querySelector('.header .navbar');

menubtn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times');
})
// ce code js permet une disparution des menu liesqu'on commence par scroller 
// le menu

// Window.onscroll = ()=>{
//     menubtn.classList.remove('active');
// }

window.onscroll = ()=>{
    menubtn.classList.remove('active');
}
// menubtn2.addEventListener('click',()=>{
//     navbar.classList.toggle('desactive');
//     menubtn2.style.display='none';
//     menubtn.style.display='inline-block';
// })