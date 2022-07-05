'use strict'

    let notesSkillOne = document.querySelector('#notes_skillOne')
    let notesSkillTwo = document.querySelector('#notes_skillTwo')
    let notesSkillThree = document.querySelector('#notes_skillThree')
    let notesSkillFour = document.querySelector('#notes_skillFour')
    let notesSkillFive = document.querySelector('#notes_skillFive')

    let buttonNotesSkillOne = document.querySelector('#bton_notesSkillOne')
    let buttonNotesSkillTwo = document.querySelector('#bton_notesSkillTwo')
    let buttonNotesSkillThree = document.querySelector('#bton_notesSkillThree')
    let buttonNotesSkillFour = document.querySelector('#bton_notesSkillFour')
    let buttonNotesSkillFive = document.querySelector('#bton_notesSkillFive')

    
    notesSkillOne.value = localStorage.getItem('notesOneStorage') ?? 'escribe aqui'
    notesSkillTwo.value = localStorage.getItem('notesTwoStorage') ?? 'escribe aqui'
    notesSkillThree.value = localStorage.getItem('notesThreeStorage') ?? 'escribe aqui'
    notesSkillFour.value = localStorage.getItem('notesFourStorage') ?? 'escribe aqui'
    notesSkillFive.value = localStorage.getItem('notesFiveStorage') ?? 'escribe aqui'

    buttonNotesSkillOne.addEventListener('click', ()=>{
        let textCurrent = notesSkillOne.value
        localStorage.setItem('notesOneStorage', textCurrent)
    })
    buttonNotesSkillTwo.addEventListener('click', ()=>{
        let textCurrent = notesSkillTwo.value
        localStorage.setItem('notesTwoStorage', textCurrent)
    })
    buttonNotesSkillThree.addEventListener('click', ()=>{
        let textCurrent = notesSkillThree.value
        localStorage.setItem('notesThreeStorage', textCurrent)
    })
    buttonNotesSkillFour.addEventListener('click', ()=>{
        let textCurrent = notesSkillFour.value
        localStorage.setItem('notesFourStorage', textCurrent)
    })
    buttonNotesSkillFive.addEventListener('click', ()=>{
        let textCurrent = notesSkillFive.value
        localStorage.setItem('notesFiveStorage', textCurrent)
    })