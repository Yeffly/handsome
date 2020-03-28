(function(){
  /*  if(document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") == ''){
     if(new Date().getHours() > 22 || new Date().getHours() < 6){
            $('body').toggleClass('night');
            $('html').toggleClass('night');
            document.cookie = "night=1;path=/";
        }else{
            $('body').removeClass('night');
            $('html').removeClass('night');
            document.cookie = "night=0;path=/";
        }
    }else{ */
        var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
        if(night == '0'){
            $('body').removeClass('night');
            $('html').removeClass('night');
        }else if(night == '1'){         
            $('body').toggleClass('night');
            $('html').toggleClass('night');
        }
      }
 /* }  */
)();
//夜间模式切换
function switchNightMode(){
    var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0'; 
    if(night == '0'){
        $('body').toggleClass('night');
        $('html').toggleClass('night');
        document.cookie = "night=1;path=/";
    }else{
        $('body').removeClass('night');
        $('html').removeClass('night');
        document.cookie = "night=0;path=/";
    }
}

$(document).on('click', '.nav-switch-dark-mode', function(event) {
    event.preventDefault();
        switchNightMode();
});