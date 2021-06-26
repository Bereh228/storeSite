const header = document.getElementById('header');
const workTime = document.getElementById('workTime');
const openMes = document.querySelector('.openMes');
const closeMes = document.querySelector('.closeMes');
const arrowUp = document.querySelector('.toTop');
const exitOverlay = document.querySelector('.close');

function checkScrollAndHeader(){
    let scrollY = window.pageYOffset;

    if(scrollY > 500){
        header.classList.add('header_fixed');
    }
    else if(scrollY <= 500 && scrollY > 250){
        header.classList.add('header_fixed-in');
    }
    else{
        header.classList.remove('header_fixed');
        header.classList.remove('header_fixed-in');
    }

    // arrow up
    if(scrollY > 1400){
        arrowUp.classList.add('toTop_active');
    }
    else{
        arrowUp.classList.remove('toTop_active');
    }



}


function showOpen(){
    openMes.classList.add('openMes_active');
    // delete 
    setTimeout(() => {
        openMes.classList.remove('openMes_active');
    }, 5000);
}

function showExit(){
    closeMes.classList.add('closeMes_active');
    // delete 
    setTimeout(() => {
        closeMes.classList.remove('closeMes_active');
    }, 5000);
}

document.addEventListener('DOMContentLoaded',checkScrollAndHeader)
window.addEventListener('scroll',checkScrollAndHeader);

document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        $('.screensaver-left').addClass('screensaver-left_hidden');
        $('.screensaver-right').addClass('screensaver-right_hidden');
        setTimeout(()=>{
            $('.screensaver').fadeOut('slow');
        },400)
    },1000)

})


workTime.addEventListener('mouseover', function(){
   let date = new Date();

   if(date.getHours() >= 9 && date.getHours()< 18){
    showOpen();
   }
   else if(date.getHours() == 18){
       if(date.getMinutes() == 0){
        showOpen();
       }
       else{
        showExit();
       }
   }
   else{
    showExit();
   }

})

// scroll to top
$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

function closeOverlay(){
    $('#overlay, #buy__window, #success__purchase, #ckeckout-block, #afterCkecout, #catalog').fadeOut();
    $('#goods-count').html(1);
    arrGoods.length = 0; // удаляю все объекты с масива
    textarea.innerHTML = '';// удаляємо содержимое textarea
}

// exit overlay
exitOverlay.addEventListener('click',closeOverlay);
addEventListener('keydown',function(event){
    if(event.code === 'Escape'){
        closeOverlay();
    }
});


$(function(){
    $("#phone").mask("+38(099)-999-9999");
});

new WOW().init();