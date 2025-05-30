import { auth } from './firebase-init.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";



window.addEventListener('DOMContentLoaded', function(){
    const DARK_SWITCH_BUTTON = document.getElementById('dark-mode-button');
    const LIGHT_MODE_BUTTON = document.getElementById('light-mode-button');
    const ISDARKMODE = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const DARK_LIGHT_MEDIA = document.querySelectorAll('.switch-color-mode');
    const CHECK_LOGIN_MATERIALS = document.querySelectorAll('.check-login');
 
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


})

