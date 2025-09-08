import { auth } from './firebase-init.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

window.addEventListener('DOMContentLoaded', function(){
    const DARK_SWITCH_BUTTON = document.getElementById('dark-mode-button');
    const LIGHT_MODE_BUTTON = document.getElementById('light-mode-button');
    const ISDARKMODE = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const DARK_LIGHT_MEDIA = document.querySelectorAll('.switch-color-mode');
    const CHECK_LOGIN_MATERIALS = document.querySelectorAll('.check-login');
    const SUB_MENU_BUTTONS = document.getElementsByClassName('pop-header');
    const MENU_BUTTON = document.querySelector('#open-close-menu-button');
    const SUB_MENU = document.querySelector('.check-mobile-menu');

    onAuthStateChanged(auth, (user) => {
        if(user){
            CHECK_LOGIN_MATERIALS.forEach(el => {
                el.classList.remove('logged-out');
                el.classList.add('logged-in');
            })
        }
        else{
            CHECK_LOGIN_MATERIALS.forEach(el => {
                el.classList.remove('logged-in');
                el.classList.add('logged-out');
            })
        }
    });

    function SWITCH_LIGHT() {
        DARK_LIGHT_MEDIA.forEach(el => {
            el.classList.add('light');
            el.classList.remove('dark');
        });
        localStorage.setItem('theme', 'light');
    }

    function SWITCH_DARK() {
        DARK_LIGHT_MEDIA.forEach(el => {
            el.classList.add('dark');
            el.classList.remove('light');
        });
        localStorage.setItem('theme', 'dark');
    }

    const SAVEDTHEME = localStorage.getItem('theme');
    if (SAVEDTHEME === 'dark') {
        SWITCH_DARK();
    } else if (SAVEDTHEME === 'light') {
        SWITCH_LIGHT();
    } else {
        const ISDARKMODE = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (ISDARKMODE) {
            SWITCH_DARK();
        } else {
            SWITCH_LIGHT();
        }
    }

    DARK_SWITCH_BUTTON.addEventListener('click', function () {
        SWITCH_LIGHT();
    });

    LIGHT_MODE_BUTTON.addEventListener('click', function () {
        SWITCH_DARK();
    });

    const MENU_BUTTON_CLOSE = MENU_BUTTON.getElementsByClassName('CLOSE_BUTTONS');
    const MENU_BUTTON_OPEN = MENU_BUTTON.getElementsByClassName('OPEN_BUTTONS');
    
    
    if(!(SUB_MENU.classList.contains('hide') || SUB_MENU.classList.contains('show'))){
        SUB_MENU.classList.add('hide');
        SUB_MENU.classList.remove('show');
        Array.from(MENU_BUTTON_CLOSE).forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');
        });
        Array.from(MENU_BUTTON_OPEN).forEach(el => {
            el.classList.add('show');
            el.classList.remove('hide');
        });
    }

    MENU_BUTTON.addEventListener('click', function(){
        if(SUB_MENU.classList.contains('hide')){
            SUB_MENU.classList.add('show');
            SUB_MENU.classList.remove('hide');
            Array.from(MENU_BUTTON_CLOSE).forEach(el => {
                el.classList.add('show');
                el.classList.remove('hide');
            });
            Array.from(MENU_BUTTON_OPEN).forEach(el => {
                el.classList.add('hide');
                el.classList.remove('show');
            });
        }
        else if(SUB_MENU.classList.contains('show')){
            SUB_MENU.classList.add('hide');
            SUB_MENU.classList.remove('show');
            Array.from(MENU_BUTTON_CLOSE).forEach(el => {
                el.classList.add('hide');
                el.classList.remove('show');
            });
            Array.from(MENU_BUTTON_OPEN).forEach(el => {
                el.classList.add('show');
                el.classList.remove('hide');
            });
        }
    });
 
    Array.from(SUB_MENU_BUTTONS).forEach(button => {
        button.addEventListener('click', () => {
            const SUB_MENU = button.nextElementSibling;
            const EXPAND_ARROW = button.querySelectorAll('span');

            if (SUB_MENU.classList.contains('show')) {
                SUB_MENU.classList.add('hide');
                SUB_MENU.classList.remove('show');
                Array.from(EXPAND_ARROW).forEach(el => {
                    el.classList.remove('rotate');
                })
            } else if (SUB_MENU.classList.contains('hide')) {
                SUB_MENU.classList.add('show');
                SUB_MENU.classList.remove('hide');
                Array.from(EXPAND_ARROW).forEach(el => {
                    el.classList.add('rotate');
                })
            }
        });
    });
});