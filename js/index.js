
(function() {
    var lastChosenId = null;
    var isOpened = false;

    var clickHandler = function() {
        if(lastChosenId !== null) {
            document.getElementById(lastChosenId).classList.remove("navigation__link--chosen")
        }
        document.getElementById(this.id).className += " navigation__link--chosen"

        var navElement = document.getElementById("navigation");
        navElement.classList.remove("open-navigation");

        lastChosenId = this.id;
    };
      
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        var current = anchors[i];
        if(current.id[0] === 'a') {
            current.addEventListener('click', clickHandler, false);
        }
    }
    
    
    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var element = document.getElementById("navigation");
    
        if (scroll > h) {
            element.classList.add("fixed-navigation");
        } else {
            element.classList.remove("fixed-navigation")
        }
    });
    

    var button = document.getElementsByTagName('button');
    
    button[0].onclick = function() {
        var element = document.getElementById("navigation");
       
        if(isOpened) {
            element.classList.remove("open-navigation");
        } else {
            element.classList.add("open-navigation");
        }

        isOpened = !isOpened;
    }
})()