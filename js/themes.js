'use strict'
window.onload = () => {

    let btnThemeDark = document.querySelector('.theme-dark');
    let btnThemeLight = document.querySelector('.theme-light');
    
    btnThemeDark.addEventListener('click', ()=> {
        document.querySelector('.theme-loaded').setAttribute('href', '../css/themes/dark-theme.css');
        btnThemeLight.style.display = "block";
        btnThemeDark.style.display = "none";
        
    });
    btnThemeLight.addEventListener('click', ()=> {
        document.querySelector('.theme-loaded').setAttribute('href', '../css/themes/light-theme.css');
        btnThemeLight.style.display = "none";
        btnThemeDark.style.display = "block";
        console.log('funciona')
    });
    console.log('funcionarax')
};