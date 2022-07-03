'use strict'
window.onload = () => {

    let btnThemeDark = document.querySelector('.theme-dark');
    let btnThemeLight = document.querySelector('.theme-light');
    let notesSkill = document.querySelector('.article-notes');
    let btnNotesSkill = document.querySelector('.notes-button')
    notesSkill.value = localStorage.getItem('storageNotesSkill')

    btnNotesSkill.addEventListener('click',()=>{
        localStorage.setItem('storageNotesSkill', notesSkill.value)
    })

    btnThemeDark.addEventListener('click', ()=> {
        document.querySelector('.theme-loaded').setAttribute('href', '../css/themes/dark-theme.css');
        btnThemeLight.style.display = "block";
        btnThemeDark.style.display = "none";
        console.log('funciona')
        
    });
    btnThemeLight.addEventListener('click', ()=> {
        document.querySelector('.theme-loaded').setAttribute('href', '../css/themes/light-theme.css');
        btnThemeLight.style.display = "none";
        btnThemeDark.style.display = "block";
    });
    
};