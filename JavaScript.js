//CONFIGURAÇÕES DO HEADER (SCROLL)
const $header = document.querySelector ('header');
const $logo = document.querySelectorAll ('.max-logo')[0];
const $navBar = document.querySelectorAll ('.nav-bar')[0];
window.addEventListener('scroll',toggleHeader, false);
function toggleHeader() {
    if (window.pageYOffset > 60 && $header.classList.contains('header')) {
        $header.classList.remove('header');
        $header.classList.add('min-header');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');
    }
    else if (window.pageYOffset < 60 && $header.classList.contains('min-header')) {
        $header.classList.add('header');
        $header.classList.remove('min-header');
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');
        $navBar.classList.add('max-nav');
        $navBar.classList.remove('min-nav');
    }
}
const $menu = document.querySelectorAll ('.menu')[0];
$menu.addEventListener('click',toggleMenu,false);
var isOpen = false;
function toggleMenu() {
    if(isOpen == false) { //o sinal de exclamação antes da variável é o NOT, que inverte os valores automaticamente (se for false, vira true e virse versa)
        $navBar.classList.add('menu-opened');
        $menu.firstElementChild.classList.add('close-btn');
        isOpen = true;
    } else {
        $navBar.classList.remove('menu-opened');
        $menu.firstElementChild.classList.remove('close-btn');
        isOpen = false;
    }
}
$navBar.addEventListener('click',navClick,false); //evento para o menu sumir ao clicar no link da opção desejada
function navClick (evt) {
    if(evt.target.tagName == 'A') {
        toggleMenu();
    }
}
////////////////////// SCRIPT DE VOLTAR AO TOPO DA PAGINA //////////////////////////////////
const logo = document.getElementById('logo');
logo.addEventListener('click',rola);
function rola() {
	if(pageYOffset > 0) {
		document.documentElement.scrollTop = 0;
	}
}
///////////////////// SCRIPT PARA OS LINKS DO MENU MANDAR PARA O INICIO DAS SECTIONS /////////////////////////////
const itens = document.querySelectorAll('#pai a[href^="#"]');
itens.forEach(item => {
    item.addEventListener('click', scrollParaId);
})
function scrollParaId(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: to - 100,
    });
}
