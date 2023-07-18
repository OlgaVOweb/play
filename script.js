const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");

buttonOne.addEventListener("click", walk);
buttonTwo.addEventListener("click", lie);

function walk(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1530227222086-4037fdd5e723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80");
    text.textContent = "ЧТО ПРЕДПОЧИТАЕШЬ?";
    buttonOne.textContent = "РАВНИНУ";
    buttonTwo.textContent = "ГОРЫ";
    buttonOne.addEventListener('click', plain);
    buttonTwo.addEventListener('click', mountain);
}

function plain(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1473992243898-fa7525e652a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80");
    text.textContent = "А СЕЙЧАС ЧТО ВЫБЕРЕШЬ?";
    buttonOne.textContent = "ТЕПЛО";
    buttonTwo.textContent = "ХОЛОД";
    buttonOne.addEventListener('click', result1);
    buttonTwo.addEventListener('click', result3);
}

function result1(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1465805139202-a644e217f00e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80");
    text.textContent = "ПРОЙДИСЬ ПО НЕЗНАКОМЫМ УЛИЦАМ СВОЕГО ГОРОДА";
    buttonOne.style  = "display: none";
    buttonTwo.style  = "display: none";
    buttonThree.style = "display: block";
    buttonThree.addEventListener('click',function(){
        window.open("https://www.sputnik8.com/ru/paris/category/walking-tours", "_blank");
    }) 
}

function result3(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1558104240-729556013a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80");
    text.textContent = "ОТПРАВЛЯЙСЯ В ФОТО-ТУР ПО СТАМБУЛУ";
    buttonOne.style  = "display: none";
    buttonTwo.style  = "display: none";
    buttonThree.style = "display: block";
    buttonThree.addEventListener('click',function(){
        window.open("https://quick-trips.com/krysha-taxt-v-stambule-luchshaya-lokaciya-dlya-instagramnyx-foto.html", "_blank");
    }) 
}

function mountain(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1523372610160-0e8fcd8c896d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");
    text.textContent = "А СЕЙЧАС ЧТО ВЫБЕРЕШЬ?";
    buttonOne.textContent = "ТЕПЛО";
    buttonTwo.textContent = "ХОЛОД";
    buttonOne.addEventListener('click', result2);
    buttonTwo.addEventListener('click', result4);
}

function result2(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1482932629923-adddb33d0dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80");
    text.textContent = "ЕГИПЕТСКИЕ ПИРАМИДЫ ОТКРЫТЫ ДЛЯ ПРОСМОТРА";
    buttonOne.style  = "display: none";
    buttonTwo.style  = "display: none";
    buttonThree.style = "display: block";
    buttonThree.addEventListener('click',function(){
        window.open("https://motohorek.life/2022/12/how-to-visit-pyramids-in-egypt-independently/", "_blank");
    }) 
}
function result4(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1501654574024-16afb6ee3f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80");
    text.textContent = "ПОЛЕТАЙ НА ВОЗДУШНОМ ШАРЕ";
    buttonOne.style  = "display: none";
    buttonTwo.style  = "display: none";
    buttonThree.style = "display: block";
    buttonThree.addEventListener('click',function(){
        window.open("https://planetofhotels.com/guide/ru/blog/luchshie-mesta-dlya-poletov-na-vozdushnom-share", "_blank");
    }) 
}

function lie (){
    image.setAttribute("src", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80");
    text.textContent = "ЧТО ПРЕДПОЧИТАЕШЬ?";
    buttonOne.textContent = "ТИШИНУ";
    buttonTwo.textContent = "ДВИЖУХУ";
    buttonOne.addEventListener('click', stil);
    buttonTwo.addEventListener('click', move);
}

function stil(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1525490829609-d166ddb58678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80");
    text.textContent = "А СЕЙЧАС ЧТО ВЫБЕРЕШЬ?";
    buttonOne.textContent = "ТЕПЛО";
    buttonTwo.textContent = "ПРОХЛАДА";
    buttonOne.addEventListener('click', result5);
    buttonTwo.addEventListener('click', result6);
}

function result5(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");
    text.textContent = "МАЛЬДИВЫ - ПЕРЕЗАГРУЗЯТ ТВОИ МЫСЛИ НА 100%";
    buttonOne.style  = "display: none";
    buttonTwo.style  = "display: none";
    buttonThree.style = "display: block";
    buttonThree.addEventListener('click',function(){
        window.open("https://www.tui.nl/meeru-island-resort-en-spa-509382066/", "_blank");
    }) 
}

function result6(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80");
    text.textContent = "ПОЗНАЙ ДЗЕН ПО СЛЕДАМ БУДИЙСКИХ МОНАХОВ";
    buttonOne.style  = "display: none";
    buttonTwo.style  = "display: none";
    buttonThree.style = "display: block";
    buttonThree.addEventListener('click',function(){
        window.open("https://vseputi.com/tour/nepal/author/puteshestvie-v-nepal1/", "_blank");
    }) 
}

function move(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1561174356-638d86f24f04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80");
    text.textContent = "А СЕЙЧАС ЧТО ВЫБЕРЕШЬ?";
    buttonOne.textContent = "СОВРЕМЕННО";
    buttonTwo.textContent = "АУТЕНТИЧНО";
    buttonOne.addEventListener('click', result7);
    buttonTwo.addEventListener('click', result8);
}

function result7(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=894&q=80");
    text.textContent = "УДИВЛЯЙСЯ НА КАЖДОМ ШАГУ В ЯПОНИИ";
    buttonOne.style  = "display: none";
    buttonTwo.style  = "display: none";
    buttonThree.style = "display: block";
    buttonThree.addEventListener('click',function(){
        window.open("https://www.gadventures.com/destinations/asia/japan/", "_blank");
    }) 
}
function result8(){
    image.setAttribute("src", "https://images.unsplash.com/photo-1541687664971-639c2f8b63f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80");
    text.textContent = "ПРИЕЗЖАЙ В АМСТЕРДАМ ЗА ЭМОЦИЯМИ";
    buttonOne.style  = "display: none";
    buttonTwo.style  = "display: none";
    buttonThree.style = "display: block";
    buttonThree.addEventListener('click',function(){
        window.open("https://www.tours-tickets.com/amsterdam/canal-cruises/wine-cheese-cruise-in-amsterdam/", "_blank");
    }) 
}
