/*
hacer un pentagono para las skills:
    1.crear canvas en html con medidas.
    2.crear variable(canvas) para regresar el nodo dom para el elemento canvas con metodo document.getElementById('id').
    3.crear variable(ctx) para acceder al contexto de renderizacion con metodo canvas.getContext('2d').
    4.comprobar soporte
    5.dibujar:
        fillRect(x, y, width, height)
        strokeRect(x, y, width, height)
        clearRect(x, y, width, height)
        beginPath()
        closePath()
        stroke()
        fill()
        moveTo(x, y)
        lineTo(x, y)
        rect(x, y, width, height)
        arc(x, y, radius, startAngle, endAngle, anticlockwise)
        quadraticCurveTo(cp1x, cp1y, x, y)
        bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
        

        notas: radians = (Math.PI/180)*degrees
*/
/*
Guardar valor de input en cache
    1.Usar api de almacenamiento web
    2.Usar estructura de localStorage.
    3.Usar metodo Storage.setItem() para guardar elementos de datos en el almacenamiento.
    4.Usar metodo Storage.getItem() para tomar el parametro en una variable.
*/
/*
Task:
    a. anadir paginas secundarias para cada skill o mejorar e incrementar las caracteristicas en la pagina principal
    b. aside:
        1.anadir cronometro
        2.anadir convertidor de minutos a decimales
    c. poder arrastrar una imagen y guardarla, dentro de motivacion para cada pagina secundaria en skills

*/
'use strict'
       window.onload = () => {
            //storage
            let storageSklValue_1 = localStorage.getItem('storageSkill_1');
            let storageSklValue_2 = localStorage.getItem('storageSkill_2');
            let storageSklValue_3 = localStorage.getItem('storageSkill_3');
            let storageSklValue_4 = localStorage.getItem('storageSkill_4');
            let storageSklValue_5 = localStorage.getItem('storageSkill_5');
            let storageSklName_1 = localStorage.getItem('storageSklName_1');
            let storageSklName_2 = localStorage.getItem('storageSklName_2');
            let storageSklName_3 = localStorage.getItem('storageSklName_3');
            let storageSklName_4 = localStorage.getItem('storageSklName_4');
            let storageSklName_5 = localStorage.getItem('storageSklName_5');

            //instancias de canvas, inputs, etc
            let canvas_base = document.getElementById('canvas-skills-base');
            let canvas = document.getElementById('canvas-skills-current');
            let btn_skill_names = document.getElementsByClassName('skill-name-btn');
            let skill_names = document.getElementsByClassName('skill-name');
            let skill_1 = document.getElementById('skill-1');
            let skill_2 = document.getElementById('skill-2');
            let skill_3 = document.getElementById('skill-3');
            let skill_4 = document.getElementById('skill-4');
            let skill_5 = document.getElementById('skill-5');
            let texto_skill_1 = document.getElementById('p-input-1');
            let texto_skill_2 = document.getElementById('p-input-2');
            let texto_skill_3 = document.getElementById('p-input-3');
            let texto_skill_4 = document.getElementById('p-input-4');
            let texto_skill_5 = document.getElementById('p-input-5');
            let btn_skill_save = document.getElementsByClassName('btn-skill');
            let convertidor_minutes = document.getElementById('convertidor-minutes');
            let convertidor_decimals = document.getElementById('convertidor-decimals');
            let btn_empezar = document.getElementById('cron-btn-empezar');
            let btn_pausar = document.getElementById('cron-btn-pausar');
            let btn_reinicio = document.getElementById('cron-btn-reiniciar');
            let texto_CronTiempo = document.getElementById('cron-tiempo');
            let btn_convertir = document.querySelector("#btn-convertir");
            //asignacion de valores guardados en cache.
            skill_1.value = storageSklValue_1;
            skill_2.value = storageSklValue_2;
            skill_3.value = storageSklValue_3;
            skill_4.value = storageSklValue_4;
            skill_5.value = storageSklValue_5;
            if(storageSklName_1) skill_names[0].innerHTML = storageSklName_1;
            if(storageSklName_2) skill_names[1].innerHTML = storageSklName_2;
            if(storageSklName_3) skill_names[2].innerHTML = storageSklName_3;
            if(storageSklName_4) skill_names[3].innerHTML = storageSklName_4;
            if(storageSklName_5) skill_names[4].innerHTML = storageSklName_5;
            //valores de canvas current para dimensiones maximas
            let lenghtCanvas = 250;
            canvas.width = lenghtCanvas;
            canvas.height = lenghtCanvas;
            //actualizar maximo de horas en inputs de acuerdo a dimensiones del canvas current
            skill_1.max = canvas.height;
            skill_2.max = canvas.width;
            skill_3.max = canvas.height;
            skill_4.max = canvas.height;
            skill_5.max = canvas.width;
            //actualizar texto de input dependiendo del maximo de horas.
            texto_skill_1.innerHTML = " /" + skill_1.max + " hrs";
            texto_skill_2.innerHTML = " /" + skill_2.max + " hrs";
            texto_skill_3.innerHTML = " /" + skill_3.max + " hrs";
            texto_skill_4.innerHTML = " /" + skill_4.max + " hrs";
            texto_skill_5.innerHTML = " /" + skill_5.max + " hrs";

            let sk1yConverted,sk2xConverted,sk3xConverted,sk3yConverted,sk4xConverted,sk4yConverted,sk5xConverted;

            let ctx_base = canvas_base.getContext('2d');
            let ctx = canvas.getContext('2d');
            //Valores maximos y centrales del canvas "base"
            let xCanvasMax = canvas_base.width;
            let yCanvasMax = canvas_base.height;
            let xCanvasCenter = xCanvasMax/2;
            let yCanvasCenter = yCanvasMax/2;
            let lineLenght = 5;
            //Valores maximos y centrales de canvas "current"
            let xCanvasMaxCurrent = canvas.width;
            let yCanvasMaxCurrent = canvas.height;
            let xCanvasCenterCurrent = xCanvasMaxCurrent/2;
            let yCanvasCenterCurrent = yCanvasMaxCurrent/2;

    //dibuja el canvas base: pentagono y lineas
    function drawSkillsBase(){

        if (canvas.getContext){
            //pentagono
            ctx_base.fillStyle = '#1E2124';
            ctx_base.beginPath();
            ctx_base.moveTo(xCanvasCenter, 0);
            ctx_base.lineTo(xCanvasMax, yCanvasCenter);
            ctx_base.lineTo(xCanvasMax*.75, yCanvasMax);
            ctx_base.lineTo(xCanvasMax*.25, yCanvasMax);
            ctx_base.lineTo(0, yCanvasCenter);
            ctx_base.fill();
            ctx_base.closePath();
            //lineas
            ctx_base.fillStyle = '#363439';
            ctx_base.beginPath();
            ctx_base.fillRect(xCanvasCenter, yCanvasCenter-(lineLenght/2),xCanvasMax/2, lineLenght);//x+
            ctx_base.fillRect(xCanvasCenter, yCanvasCenter-(lineLenght/2),-xCanvasMax/2, lineLenght);//x-
            ctx_base.fillRect(xCanvasCenter-(lineLenght/2), yCanvasCenter,lineLenght,-yCanvasMax/2);//y+
            ctx_base.moveTo(xCanvasCenter+(lineLenght/2), yCanvasCenter);
            ctx_base.lineTo((xCanvasMax*.75)+(lineLenght/2), yCanvasMax);//xy+
            ctx_base.lineTo((xCanvasMax*.75)-(lineLenght/2), yCanvasMax);
            ctx_base.lineTo(xCanvasCenter-(lineLenght/2),yCanvasCenter);
            ctx_base.lineTo((xCanvasMax*.25)-(lineLenght/2), yCanvasMax);//xy-
            ctx_base.lineTo((xCanvasMax*.25)+(lineLenght/2), yCanvasMax);
            ctx_base.lineTo(xCanvasCenter+(lineLenght/2), yCanvasCenter);
            ctx_base.fill();
            ctx_base.closePath();
        } else {
            console.log('canvas-base-unsupported code here');
        }
    }
    //dibuja el pentagono acorde con las horas enviadas por el input
    function drawSkillsCurrent(){
        convertValueToCanvasPosition();
        if (canvas.getContext){
            ctx.fillStyle = '#626A73';
            ctx.beginPath();
            ctx.clearRect(0,0,xCanvasMaxCurrent,yCanvasMaxCurrent);
            ctx.lineTo(xCanvasCenterCurrent, sk1yConverted);//
            ctx.lineTo(sk2xConverted, yCanvasCenterCurrent);
            ctx.lineTo(sk3xConverted, sk3yConverted);//
            ctx.lineTo(sk4xConverted, sk4yConverted);//
            ctx.lineTo(sk5xConverted, yCanvasCenterCurrent);
            ctx.fill();
            ctx.closePath();
        } else {
            console.log('canvas-unsupported code here');
        }
    }
    //calcula la posicion en el canvas de acuerdo al valor del input(horas)
    function convertValueToCanvasPosition(){
        sk1yConverted = (yCanvasCenterCurrent -(skill_1.value/2));
        sk2xConverted = (xCanvasCenterCurrent +(skill_2.value/2));
        sk3xConverted = (xCanvasCenterCurrent +((skill_3.value*3)/10)*.83);
        sk3yConverted = (yCanvasCenterCurrent +(skill_3.value/2));
        sk4xConverted = (xCanvasCenterCurrent -((skill_4.value*3)/10)*.83);
        sk4yConverted = (yCanvasCenterCurrent +(skill_4.value/2));
        sk5xConverted = (xCanvasCenterCurrent -(skill_5.value/2));
    }
    //converte minutos en decimales de hora
    function minutesToHours(minutes){
        return (minutes/60).toFixed(2);
    }
    //devuelve siempre dos digitos minimo
    function puTwoDigits(digit){
        let convertedDigit = "";
        if(digit < 10){
            convertedDigit = `0${digit}`;
        }else{
            convertedDigit = `${digit}`;
        }
        return convertedDigit;
    }
    //actualizar canvas y guardar horas en cache
    function updateCanvas(skillCurrent, storageSkillCurrent){
        if((parseInt(skillCurrent.value) >= parseInt(skillCurrent.min)) && (parseInt(skillCurrent.value)<= parseInt(skillCurrent.max))){
            drawSkillsCurrent();
            localStorage.setItem(storageSkillCurrent, skillCurrent.value);
            alert("Se actualizaron los datos exitosamente.");
        }else{
            alert("El valor esta fuera de rango, no se guardaran los datos.")
        }
    }
    //cambie el nombre del h3 del skill
    function updateNameSkill(){
    }
    //Inicia el cronometro
    let segundos = 0, minutos = 0, txtSec, txtMin, idTemp;
    function cronStart(){
        btn_pausar.style.display = "block";
        btn_reinicio.style.display = "block"
        btn_empezar.style.display = "none"
        txtMin = puTwoDigits(minutos);
        idTemp = setInterval(() => {
            if(segundos == 59){
                minutos ++;
                segundos = 0;
                txtSec = puTwoDigits(segundos);
                txtMin = puTwoDigits(minutos);
            }else{
                segundos++;
                txtSec = puTwoDigits(segundos);
            }
            texto_CronTiempo.innerHTML = `${txtMin}:${txtSec}`;
        },1000);
        
    }
    //Reestablece el cronometro
    function cronRestart(){
        clearInterval(idTemp);
        segundos = 0;
        minutos = 0
        txtMin = `0${minutos}`;
        txtSec = `0${segundos}`;
        texto_CronTiempo.innerHTML = `${txtMin}:${txtSec}`;
        console.log("Se reinicia el temporizador");
        btn_empezar.style.display = "block";
        btn_pausar.style.display = "none";
        btn_reinicio.style.display = "none";
        btn_empezar.value = "empezar";
    }
    //listeners de inputs
    btn_skill_names[0].addEventListener('click', () => {
        let newName = prompt('cual es el nuevo skill?');
        if(newName) {
            localStorage.setItem('storageSklName_1', newName);
            skill_names[0].innerHTML = newName;
        }
    });
    btn_skill_names[1].addEventListener('click', () => {
        let newName = prompt('cual es el nuevo skill?');
        if(newName) {
            localStorage.setItem('storageSklName_2', newName);
            skill_names[1].innerHTML = newName;
        }
    });
    btn_skill_names[2].addEventListener('click', () => {
        let newName = prompt('cual es el nuevo skill?');
        if(newName) {
            localStorage.setItem('storageSklName_3', newName);
            skill_names[2].innerHTML = newName;
        }
    });
    btn_skill_names[3].addEventListener('click', () => {
        let newName = prompt('cual es el nuevo skill?');
        if(newName) {
            localStorage.setItem('storageSklName_4', newName);
            skill_names[3].innerHTML = newName;
        }
    });
    btn_skill_names[4].addEventListener('click', () => {
        let newName = prompt('cual es el nuevo skill?');
        if(newName) {
            localStorage.setItem('storageSklName_5', newName);
            skill_names[4].innerHTML = newName;
        }
    });
    skill_1.addEventListener("keypress", (char) => {
        if(char.keyCode === 13){
            updateCanvas(skill_1, 'storageSkill_1');
        }
    });
    skill_2.addEventListener("keypress", (char) => {
        if(char.keyCode === 13){
            updateCanvas(skill_2, 'storageSkill_2');
        }
    });
    skill_3.addEventListener("keypress", (char) => {
        if(char.keyCode === 13){
            updateCanvas(skill_3, 'storageSkill_3');
        }
    });
    skill_4.addEventListener("keypress", (char) => {
        if(char.keyCode === 13){
            updateCanvas(skill_4, 'storageSkill_4');
        }
    });
    skill_5.addEventListener("keypress", (char) => {
        if(char.keyCode === 13){
            updateCanvas(skill_5, 'storageSkill_5');
        }
    });
    btn_skill_save[0].addEventListener("click", () => {
        updateCanvas(skill_1, 'storageSkill_1');
    });
    btn_skill_save[1].addEventListener("click", () => {
        updateCanvas(skill_2, 'storageSkill_2');
    });
    btn_skill_save[2].addEventListener("click", () => {
        updateCanvas(skill_3, 'storageSkill_3');
    });
    btn_skill_save[3].addEventListener("click", () => {
        updateCanvas(skill_4, 'storageSkill_4');
    });
    btn_skill_save[4].addEventListener("click", () => {
        updateCanvas(skill_5, 'storageSkill_5');
    });

    btn_empezar.addEventListener("click", cronStart);
    btn_pausar.addEventListener("click", () => {
        clearInterval(idTemp);
        console.log(`Se pausa el temporizador, tiempo final: ${minutos}m ${segundos}s`);
        btn_pausar.style.display = "none";
        btn_empezar.style.display = "block";
        btn_empezar.value = "continuar";
    });
    btn_reinicio.addEventListener("click", cronRestart);

    convertidor_minutes.addEventListener("keypress", (char) => {
        if(char.keyCode === 13){
        convertidor_decimals.innerHTML = minutesToHours(convertidor_minutes.value);
        }
    });
    btn_convertir.addEventListener("click", () => {
        convertidor_decimals.innerHTML = minutesToHours(convertidor_minutes.value);
    });
    drawSkillsBase();
    drawSkillsCurrent();
}