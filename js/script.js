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
    

})