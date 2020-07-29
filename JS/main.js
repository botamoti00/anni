const isMobile = !!new MobileDetect(window.navigator.userAgent).mobile();
//ナビバーにアニメーション付与
$(window).scroll(() => {
    if($(window).scrollTop() > 20){
        $('nav').addClass('scroll');
        $('nav').removeClass('NoScroll');
    }else{
        $('nav').addClass('NoScroll');
        $('nav').removeClass('scroll');
    }
});
//mobileではフェードイン一回のみ
if (isMobile) {
    // モバイルブラウザの場合
    $('.animated').waypoint({
        handler(direction){
            if(direction === 'down'){
                $(this.element).addClass('fadeInUp');
            }
        },
        offset: '100%'
    });
} else {
    // モバイルブラウザ以外の場合
    $('.animated').waypoint({
        handler(direction){
            if (direction === 'down') {
                $(this.element).addClass('fadeInUp');
                $(this.element).removeClass('fadeOutDown');
            }else if (direction === 'up'){
                $(this.element).addClass('fadeOutDown');
                $(this.element).removeClass('fadeInUp');
            }
        },
        offset: '70%'
    });
}

//ふわっと表示する


//スムーススクロール
$(function(){
    const headerHight = 100;
    $('a[href^="#"]').click(function(){ 
        const speed = 500; 
        const href= $(this).attr("href"); 
        const target = $(href == "#" || href == "" ? 'html' : href); 
        const position = target.offset().top-headerHight; 
        $("html, body").animate({scrollTop:position}, speed, "swing"); 
        return false; 
    });
});
//メニューをクリックでcollapseを閉じる
$('.navbar-nav>li>a , .dropdown-menu>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
$(function(){
    $('form .btn').on('click', function(){
        let isEmpty = false;
        $('#name, #email, #msg').each(function(){
            if($(this).val() === ''){
                alert('必須項目が入力されていません！');
                $(this).focus();
                isEmpty = true;
                return false;
            }
        });
        if(isEmpty)
            return false;
        else
            $('form .btn').on('click',sendGform());
    });
});

function sendGform(){
    document.myForm.submit();
    document.getElementById('contact').style.display = 'none';
    document.getElementById('thxMessage').style.display = 'block';
}
