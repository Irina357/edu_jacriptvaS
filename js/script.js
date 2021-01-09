'use strict';
window.addEventListener('DOMContentLoaded', () => {

    //tabs
    const classActive = document.querySelectorAll('.tabheader__item'),
        tabcontents = document.querySelectorAll('.tabcontent'),
        parentTabs = document.querySelector('.tabcontainer');
    //My code
    // classActive.forEach(function (item, i) {
    //     item.addEventListener('click', function () {
    //         classActive.forEach(function (item) {
    //             item.classList.remove('tabheader__item_active');
    //         })
    //         item.classList.add('tabheader__item_active');
    //         tabcontents.forEach(function (item, i) {
    //             item.style.display = 'none';
    //         });
    //         tabcontents[i].style.display = 'block';
    //     })
    // })

    const hideTabs = function () {
        tabcontents.forEach((item) => {
            item.style.display = 'none';
        })
        classActive.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        })
    };
    const showTabs = function (i) {
        tabcontents[i].style.display = 'block';
        classActive[i].classList.add('tabheader__item_active');
    };
    showTabs(0);
    parentTabs.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            classActive.forEach(function (item, i) {
                if (target == item) {
                    hideTabs();
                    showTabs(i);
                }
            })
        }
    })

    //Calculator
    const deadline = '2021-05-11';

    const getTimeRemaining = function(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
            day = Math.floor(t/(1000 * 60 * 60 * 24)),
            hours = Math.floor((t/ (1000 * 60 * 60 * 24)) % 24),
            minutes = Math.floor((t/1000/60) % 60),
            seconds = Math.floor((t/1000) % 60);
        return {
            'total': t,
            'day': day,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }
    function getZero(num){
        if(num >0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }
    const setClock = function (selector, endTime){
        const timer = document.querySelector('.timer'),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock(){
            const  t = getTimeRemaining(endTime);
            days.innerHTML = getZero(t.day);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);


            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    };
    setClock('.timer', deadline)

    //React Standard  ES6-8
    //Filter
    let names = ['aaaa', 'bbb', 'cccc', 'dd'],
          shortName = names.filter((name) => {
              return name.length < 3
          });

    //Map
    let answers = ['Ann', 'maIk', 'IVAN'];
        answers = answers.map((item) => item.toLocaleLowerCase());

    // console.log('`hhhhh${}mmm${}`')

    //Max of arr
    const arr = [3, 5, 99];

    function getMaxOfArray(nameArr) {
        return Math.max.apply(null, nameArr);
    }

    //console.log(getMaxOfArray(arr));

    //Sprad
    const arr1 = [1,2,3,],
        arr2 = [4,5,6];
    //console.log(Math.max(...arr1,...arr2));

    const obj1 = {
        name: 'ann',
        password: '111',
        age: 18
    };
    const obj2 = {
        name1: 'Ivan',
        password1: '222',
    };
    const obj3 = Object.assign(obj1, obj2);
    const sprite = {...obj1, ...obj2};
    //console.log(sprite);

    const x = 10, y = 5;
    const res = {
        x, y,
        calc() {
            console.log(this.x * this.y)
        }
    };
    //console.log(res.calc());

    //destructuring
    const {name, password} = obj1;
    //console.log(name,password);
     const obj4 = {
        name1: 'Ivan',
        password1: {
            pass1: 123,
            pass2: 456
        },
    };
    const {password1: {pass1, pass2}} = obj4;
    //console.log(pass1, pass2);
    const [a,b,c] = arr1;
    //console.log(a);

    //Modal
    const modalBatons = document.querySelectorAll('[data-modal]'),
        modalElement = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close');

    function closeModal() {
        modalElement.style.display = 'none';
        document.body.style.overflow = '';
    }

    function openModal() {
        modalElement.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearTimeout(openMod);
    }

    const openMod = setTimeout(openModal, 10000);

    modalBatons.forEach(btn => {
        btn.addEventListener('click', () => {
            // modalElement.style.display = 'block';
            // document.body.style.overflow = 'hidden';
            openModal()
        })
    })

    modalClose.addEventListener('click', () => {
        closeModal()
    })

    modalElement.addEventListener('click', (evn) => {
        if (evn.target) {
            closeModal()
        }
    })
    document.addEventListener('keydown', (evn) => {
        if (evn.code === 'Escape') {
            closeModal()
        }
    })

    //window.pageYOffset - невидимая часть сверху, document.documentElement.clientHeight - видимая часть,
    //document.documentElement.scrollHeight - весть документ

    window.addEventListener('scroll', () => {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
        }
    })

    //Cards
    const container = document.querySelector('.menu__field .container'),
        menuItem = document.querySelector('.menu__item');

    class Card {
        constructor(parrentSelector, title, text, price, img) {
            this.parrentSelector = parrentSelector;
            //this.selector = selector;
            this.img = img;
            this.tittle = title;
            this.text = text;
            this.price = price;
        }

        createCard() {
            const div = document.createElement('div');
            div.classList.add('menu__item')
            div.innerHTML = `<img src="${this.img}" alt="vegy">
                    <h3 class="menu__item-subtitle">${this.tittle}</h3>
                    <div class="menu__item-descr">${this.text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>`;
            this.parrentSelector.append(div);
        }
    }

    const card1 = new Card(container, 'Меню "Фитнес', 'Меню "Фитнес" - это новый подход к приготовлению блюд:',
        229, 'img/tabs/vegy.jpg');
    card1.createCard();
    const card2 = new Card(container, 'Меню “Премиум', 'Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, моло',
        550, 'img/tabs/elite.jpg');
    card2.createCard();
    const card3 = new Card(container, 'Меню "Постное', 'Меню "Фитнес" - это новый подход к приготовлению блюд:',
        430, 'img/tabs/post.jpg');
    card3.createCard();



})