//toggle class active untuk hamburger menu
const navbar = document.querySelector('.navbar-by');
document.querySelector('#hamburger-menu').onclick = () =>{
  navbar.classList.toggle('active')
}

//info di klik
const sej = document.querySelector('.sej');
const sej1 = document.querySelector('.sej1');
const sej2 = document.querySelector('.sej2');
const sej3 = document.querySelector('.sej3');
const sej4 = document.querySelector('.sej4');
document.querySelector('.info').onclick = () =>{
  sej.style.display = 'flex';
}
document.querySelector('.info1').onclick = () =>{
  sej1.style.display = 'flex';
}
document.querySelector('.info2').onclick = () =>{
  sej2.style.display = 'flex';
}
document.querySelector('.info3').onclick = () =>{
  sej3.style.display = 'flex';
}
document.querySelector('.info4').onclick = () =>{
  sej4.style.display = 'flex';
}
// untuk close icon
document.querySelector('.sej .close-icon1').onclick = () =>{
  sej.style.display = 'none';
}
document.querySelector('.sej1 .close-icon1').onclick = () =>{
  sej1.style.display = 'none';
}
document.querySelector('.sej2 .close-icon1').onclick = () =>{
  sej2.style.display = 'none';
}
document.querySelector('.sej3 .close-icon1').onclick = () =>{
  sej3.style.display = 'none';
}
document.querySelector('.sej4 .close-icon1').onclick = () =>{
  sej4.style.display = 'none';
}

//klik di luar elemen hamburger menu
const hm = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
  if (!hm.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active');
  }
});

//function untuk button
function ketMuncul() {
  const ket = document.querySelector('.contentUt');
  const button = document.querySelector('.button');
  ket.style.display = 'flex';

  document.querySelector('.contentUt .close-icon1').onclick = () =>{
    ket.style.display = 'none';
    button.style.display = 'flex';
  }
}
function ketMuncul1() {
  const ket1 = document.querySelector('.content1');
  const button = document.querySelector('.button');
  ket1.style.display = 'flex';

  document.querySelector('.content1 .close-icon1').onclick = () =>{
    ket1.style.display = 'none';
    button.style.display = 'flex';
  }
}
function ketMuncul2() {
  const ket2 = document.querySelector('.content2');
  const button = document.querySelector('.button');
  ket2.style.display = 'flex';

  document.querySelector('.content2 .close-icon1').onclick = () =>{
    ket2.style.display = 'none';
    button.style.display = 'flex';
  }
}
function ketMuncul3() {
  const ket3 = document.querySelector('.content3');
  const button = document.querySelector('.button');
  ket3.style.display = 'flex';

  document.querySelector('.content3 .close-icon1').onclick = () =>{
    ket3.style.display = 'none';
    button.style.display = 'flex';
  }
}