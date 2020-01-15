(function() {

    "use strict";
    var menu = document.querySelector("#c-circle-nav");
    var toggle = document.querySelector("#c-circle-nav__toggle");
    var mask = document.createElement("div");
    var activeClass = "is-active";

    mask.classList.add("c-mask");
    document.body.appendChild(mask);

    toggle.addEventListener("click", function(e) {
        e.preventDefault();
        toggle.classList.contains(activeClass) ? deactivateMenu() : activateMenu();
    });

    mask.addEventListener("click", function() {
        deactivateMenu();
    });

    function activateMenu() {
        menu.classList.add(activeClass);
        toggle.classList.add(activeClass);
        mask.classList.add(activeClass);
        activateSubMenu();
    }

    function deactivateMenu() {
        menu.classList.remove(activeClass);
        toggle.classList.remove(activeClass);
        mask.classList.remove(activeClass);
        cleanSubMenu();
    }

})();

var button = document.getElementsByClassName('info-icon')[0];

button.addEventListener('click', toggleBtnClass);

function toggleBtnClass(e){
    if (button.classList.contains('active')){
        button.classList.add('inactive');
        button.classList.remove('active');
    } else {
        button.classList.add('active');
        button.classList.remove('inactive');
    }
}

function activateSubMenu() {
    var divs = $( '.m-btn-sub li' );
    var index = 0;

    var delay = setInterval( function(){
        if ( index <= divs.length ){
            $( divs[ index ] ).addClass( 'show' );
            index += 1;
        }else{
            clearInterval( delay );
        }
    }, 350 );
}

function cleanSubMenu() {
    var divs = $( '.m-btn-sub li' );
    divs.removeClass('show');
}

