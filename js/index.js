$(function () {


    // if(!video.paused){
    //
    //     video.currentTime=5
    // }
    $('.jinying').on('click',function () {



        $(this).toggleClass('active')

        if( $(this).hasClass('active')){
            $('video').get(0).muted=true

        }else {
            $('video').get(0).muted=false
        }
    })

    $('#bigbox').fullpage(
        {
            anchors: ['page1', 'page2', 'page3', 'page4'],
            menu: '#menu',
            navigation:true,
            navigationTooltips: ['首页', '技能', '作品', '联系方式'],
            verticalCentered:false,
            resize:true,
            afterLoad: function(anchorLink, index){
                if(index == 2){
                    $('.left').addClass('active1')
                    $('.you').addClass('active1')
                    $(".head").animate({top:160,opacity:1},1000,"easeOutElastic");

                }
                if(index == 1){
                    let kaiguan=false

                        $('#baoshipin p .first').animate({left:'50%',opacity:1},1000,"easeInOutQuart").css('transform','transtateX(-50%)');
                    $('#baoshipin p .second').animate({right:'50%',opacity:1},1000,"easeInOutQuart");
                    setTimeout(xiaoshi,5000)
                    function xiaoshi() {
                        $('#baoshipin p .first,#baoshipin p .second').css({
                            opacity:0
                        })
                    }




                }

               if(index == 3){
                    $('.workshead').addClass('active')
                   $('#sb-slider').slicebox();
               }
               if(index == 4){
                   $('.contacthead').animate({fontSize:'30px',opacity:1},2000,"easeInOutBounce")
               }
            },
onLeave:function (index,direction) {
    if(index == 1){

        $('#baoshipin p .first').animate({left:'-300px'},1000,"easeInOutQuart")
        $('#baoshipin p .second').animate({right:'-300px'},1000,"easeInOutQuart");




    }
    if(index==2){
        $('.you').removeClass('active1')
        $('.left').removeClass('active1')

        $(".head").animate({top:-100,opacity:0});

    }
    if(index==3){
        $('.workshead').removeClass('active').css('transform','translateX(-1000px)');
    }
    if(index == 4){
        $('.contacthead').animate({fontSize:'0px',opacity:0},"easeInOutBounce")
    }
}

        }
    )
    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ).hide(),
            $navDots = $( '#nav-dots' ).hide(),
            $nav = $navDots.children( 'span' ),
            $shadow = $( '#shadow' ).hide(),
            slicebox = $( '#sb-slider' ).slicebox( {
                onReady : function() {

                    $navArrows.show();
                    $navDots.show();
                    $shadow.show();

                },
                onBeforeChange : function( pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();

            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':first' ).on( 'click', function() {

                    slicebox.next();
                    return false;

                } );

                $navArrows.children( ':last' ).on( 'click', function() {

                    slicebox.previous();
                    return false;

                } );

                $nav.each( function( i ) {

                    $( this ).on( 'click', function( event ) {

                        var $dot = $( this );

                        if( !slicebox.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );

                        }

                        slicebox.jump( i + 1 );
                        return false;

                    } );

                } );

            };

        return { init : init };

    })();

    Page.init();


    $('#accordion > li').click(

        function () {
            var $this = $(this);
//                        $this.stop().animate({'width':'420px'},500);
//                        $('.heading',$this).stop(true,true).fadeOut();
//                        $('.bgDescription',$this).stop(true,true).slideDown(500);
            $('.description',$this).stop(true,true).fadeIn();
        },
        function () {
            var $this = $(this);
//                        $this.stop().animate({'width':'100px'},1000);
//                        $('.heading',$this).stop(true,true).fadeIn();
//                        $('.description',$this).stop(true,true).fadeOut(500);
            $('.bgDescription',$this).stop(true,true).slideUp(700);
        }
    );

})