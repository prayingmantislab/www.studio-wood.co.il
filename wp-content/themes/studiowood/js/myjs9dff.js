var w_width = $(window).width();
var w_height = $(window).height();
var MobWidth = 800;

$('a[href^="tel:"]').each(function(e,n){var a=$(n);a.addClass("tel-link"),n.addEventListener("click",function(){ga("send","event","לחיצה על מספר טלפון","התקשרות")}),a.children().length>0?a.children().each(function(e,n){var d=$(n);if("svg"==d.prop("tagName")&&a.addClass("has-svg"),""!=d.text()&&d.addClass("tel-phone"),d.find("span").length>0){var l=d.find("span");l.children().length<1&&l.addClass("tel-phone")}}):a.addClass("tel-phone")});
$(".wpcf7").on('wpcf7:mailsent', function(event){
    if (typeof ga == 'function') {
        ga('send', 'event', 'השארת פרטים', 'שליחה');
    } else {
        console.log('Analytics not connected');
    }
    setTimeout(function() {
        $('.wpcf7-response-output').addClass('form_msg_error_out').fadeOut();
        setTimeout(function() {
            $('.wpcf7-response-output').removeClass('wpcf7-mail-sent-ok').removeClass('form_msg_error_out');
        }, 600);
    }, 3500);
});
$('input[type=text], input[type=email], input[type=tel], textarea').bind('focus',function(){
    if ($(this).parent().find('.wpcf7-not-valid-tip').length != 0) {
        $('.wpcf7-not-valid-tip').addClass('tip_out');
        $('.wpcf7-response-output').removeClass('div.wpcf7-validation-errors');
        setTimeout(function(){
            $('.wpcf7-not-valid-tip').remove();
            $('.wpcf7-response-output').removeClass('wpcf7-validation-errors').removeClass('form_msg_error_out');
        }, 600)
    }
});

var isMobile = false;
var SmallScreen = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

if (isMobile || w_width < MobWidth) {
    SmallScreen = true;
}
if (SmallScreen && $('table').length > 0) {
(function () {
	var headertext = [];
	var headers = document.querySelectorAll("thead");
	var tablebody = document.querySelectorAll("tbody");

	for(var i = 0; i < headers.length; i++) {
		headertext[i]=[];
		for (var j = 0, headrow; headrow = headers[i].rows[0].cells[j]; j++) {
		  var current = headrow;
		  headertext[i].push(current.textContent.replace(/\r?\n|\r/,""));
		  }
	}

	if (headers.length > 0) {
		for (var h = 0, tbody; tbody = tablebody[h]; h++) {
			for (var i = 0, row; row = tbody.rows[i]; i++) {
			  for (var j = 0, col; col = row.cells[j]; j++) {
			    col.setAttribute("data-th", headertext[h][j]);
			  }
			}
		}
	}
} ());
}
$('.clickbtn').on('click',function() {
    var $this = $(this);
    var actions = $this.data('action');
    if (actions.indexOf(":") >= 0) {
        var actions = actions.split(':');
        $.each(actions, function(index, value) {
            var temp = value.split(',');
            if (temp[0] == '$this') { temp[0] = $this; }
            if (temp[1] == 'ac') {
                $(temp[0]).addClass(temp[2]);
            } else if (temp[1] == 'rc') {
                $(temp[0]).removeClass(temp[2]);
            } else if (temp[1] == 'tc') {
                $(temp[0]).toggleClass(temp[2]);
            } else if (temp[1] == 'gt') {
                $('html, body').animate({
                    scrollTop: $(temp[0]).offset().top
                }, 1000);
            }
        });
    } else {
        var action = actions.split(',');
        if (action[0] == '$this') { action[0] = $this; }
        if (action[1] == 'ac') {
            $(action[0]).addClass(action[2]);
        } else if (action[1] == 'rc') {
            $(action[0]).removeClass(action[2]);
        } else if (action[1] == 'tc') {
            $(action[0]).toggleClass(action[2]);
        } else if (action[1] == 'gt') {
            $('html, body').animate({
                scrollTop: $(action[0]).offset().top
            }, 1000);
        }
    }
});
$('.tabsbtn').click(function(){
    var tbox = $(this).data('tbox');
    var tab = $('.' + $(this).attr('id'));
    if (tbox) { $(tbox).height(tab.outerHeight()); }
    $(this).siblings().not($(this)).removeClass('active');
    $(this).addClass('active');
    tab.removeClass('hidden');
    tab.siblings().not(tab).addClass('hidden');
});

function imgsratio() {
    if ($('.resize').length > 0) {
        $('.resize').each(function(){
            var rait;
            if(isMobile) var mob = $(this).attr('data-mratio');
            if(mob) rait = mob;
            else rait = $(this).attr('data-ratio');
            if(rait == null) rait = '16:9';
            var ow = $(this).width();
            var tmp = rait.split(':');
            var w = tmp[0];
            var h = tmp[1];
            $(this).height((ow/w)*h);
            $(this).addClass('resized');
        });
    }
}
var header = '';
var footerh = '';
var leosh = '';
var contpad = '';

var lback = 'חזרה';

function obj_hcheck() {
    header = $('header').outerHeight();
    footerh = $('footer').outerHeight();
    leosh = $('#leos').outerHeight();
    contpad = footerh + leosh;
    if (!isMobile && w_width > MobWidth) {
        //$('#content').css({'padding-bottom' : contpad - 1});
    }
    if ($('header').hasClass('abshead')) {
        //$('#content').css({'padding-top' : header});
    }
}






$(document).ready(function() {

});
$(window).load(function() {
    imgsratio();
    //obj_hcheck();

});
$(window).resize(function(){
    imgsratio();
    obj_hcheck();
});
if (1) {
$(window).on('scroll',function(){
    if ($(this).scrollTop() > 300) {
        $('header').addClass('stiky');
        $('body').addClass('is-sticky');
    } else {
        $('header').removeClass('stiky');
        $('body').removeClass('is-sticky');
    }

    if ($(this).scrollTop() > 600) {
        $('.about-nav').addClass('about-nav-sticky');
        $('body').addClass('is-sticky-about');
    } else {
        $('.about-nav').removeClass('about-nav-sticky');
        $('body').removeClass('is-sticky-about');
    }


    $('.action').each(function(){
        if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75) {
            $(this).addClass('run');
        }
    });
});
}
$('.map_wrap').click(function(){
    $('.acf-map').css({'pointer-events':'auto'});
});
$('#BackToTop').click(function() {
    $('html, body').animate({
    scrollTop: 0
    }, 1000);
});
function mobileSelect() {
    var svg = '<svg width="16" height="16" style="fill:#fff;enable-background:new 0 0 31.999 32;position:absolute;top:50%;left:8px;-webkit-transform: translateY(-50%);transform: translateY(-50%);" version=1.1 viewBox="0 0 31.999 32" width=31.999px x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><g><path d="M31.92,5.021l-14.584,22.5c-0.089,0.139-0.241,0.223-0.406,0.229c-0.004,0-0.009,0-0.014,0   c-0.16,0-0.311-0.076-0.404-0.205L0.096,5.044C-0.015,4.893-0.031,4.69,0.054,4.523S0.312,4.25,0.5,4.25h31   c0.183,0,0.352,0.101,0.438,0.261C32.025,4.67,32.019,4.868,31.92,5.021z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
    $('.mobile-drop-wrap').each(function () {
        var $box = $(this).find('.mobile-drop-box');
        var $items = $(this).find('.mobile-drop-item');

        $box.after(svg);
        $box.removeClass('flex').addClass('overh anim relative');
        $items.css({ 'box-sizing': 'border-box', 'width': '100%', 'padding': '10px 30px' });

        var fi_h = $items.eq(0).outerHeight();

        $(this).addClass('overh');
        $(this).height(fi_h);
        $(this).css({ 'position': 'relative', 'z-index': '15' });

        $box.attr('data-height', $box.outerHeight());
        $box.height(fi_h);
        $(this).removeClass('overh');
    });
    $('.mobile-drop-item').click(function () {
        var $box = $(this).parents('.mobile-drop-box');
        $box.toggleClass('dropped');
        if ($box.hasClass('dropped')) {
            $box.height($box.attr('data-height'));
            $(this).addClass('active');
            $box.find('.mobile-drop-item').not($(this)).removeClass('active');
        } else {
            var o_h = $(this).outerHeight();
            $(this).addClass('active');
            $box.find('.mobile-drop-item').not($(this)).removeClass('active');
            $box.prepend($(this));
            $box.height(o_h);
            $box.parents('.mobile-drop-wrap').height(o_h);
        }
    });
}
if ($('.videopop').length > 0) {
    var scriptEls = document.getElementsByTagName('script');
    var thisScriptEl = scriptEls[scriptEls.length - 1];
    var scriptPath = thisScriptEl.src;
    var scriptFolder = scriptPath.substr(0, scriptPath.lastIndexOf('/') + 1);
    var vpscript = document.createElement("script");
    vpscript.type = 'text/javascript';
    vpscript.src = scriptFolder + 'jquery.dcd.video.min.js';

    var $style = $('<style type="text/css">.popupbox{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.8);z-index:900;opacity:0;visibility:hidden;pointer-events:none;-webkit-transition:all .5s ease;transition:all .5s ease}.popupbox.active{opacity:1;visibility:visible;pointer-events:auto;-webkit-transition:opacity .4s;transition:opacity .4s}.popupbox .vbox{width:96%;max-height:96%;max-width:860px;height:auto;background-color:#252525;-webkit-transition:opacity .2s,height .5s;transition:opacity .2s,height .5s;transition-delay:0s}.popupbox.active .vbox{transition-delay:.5s}.popupbox:not(.active) .vbox{height:0!important}.popupbox .vbox #cPlayer,.popupbox .vbox #cPlayer iframe{width:100%!important;height:100%!important}.popupbox .vbox .cls{position:absolute;width:0;height:0;background-color:#fff;-webkit-transform:translate(50%,-50%) scale(1);transform:translate(50%,-50%) scale(1);-webkit-transition:all .3s ease;transition:all .3s ease;transition-delay:0s}.popupbox.active .vbox .cls{transition-delay:1s;width:30px;height:30px}.popupbox .vbox .cls svg{width:100%;height:100%;fill:#E2574C}.popupbox .vbox .cls:hover{background-color:#E2574C}.popupbox .vbox .cls:hover svg{fill:#fff}</style>');
    $style.appendTo('head');

    $('#wrapper').after(vpscript);
    $('#wrapper').after('<div id="cPlayBox" class="fcc popupbox"><div class="vbox relative" data-ratio="16:9"><div class="cls cp circlebox"><svg class="anim" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 286.054 286.054" style="enable-background:new 0 0 286.054 286.054;" xml:space="preserve"><g><path style="fill:#E2574C;" d="M168.352,142.924l25.28-25.28c3.495-3.504,3.495-9.154,0-12.64l-12.64-12.649c-3.495-3.486-9.145-3.495-12.64,0l-25.289,25.289l-25.271-25.271c-3.504-3.504-9.163-3.504-12.658-0.018l-12.64,12.649c-3.495,3.486-3.486,9.154,0.018,12.649l25.271,25.271L92.556,168.15c-3.495,3.495-3.495,9.145,0,12.64l12.64,12.649c3.495,3.486,9.145,3.495,12.64,0l25.226-25.226l25.405,25.414c3.504,3.504,9.163,3.504,12.658,0.009l12.64-12.64c3.495-3.495,3.486-9.154-0.009-12.658L168.352,142.924z M143.027,0.004C64.031,0.004,0,64.036,0,143.022c0,78.996,64.031,143.027,143.027,143.027s143.027-64.031,143.027-143.027C286.054,64.045,222.022,0.004,143.027,0.004z M143.027,259.232c-64.183,0-116.209-52.026-116.209-116.209s52.026-116.21,116.209-116.21s116.209,52.026,116.209,116.209S207.21,259.232,143.027,259.232z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div><div id="cPlayer" class="overh" data-type="" data-code=""></div></div></div>');

    var rait = $('#cPlayBox .vbox').attr('data-ratio');
    if (rait == null) rait = '16:9';
    var ow = $('#cPlayBox .vbox').width();
    var tmp = rait.split(':');
    var w = tmp[0];
    var h = tmp[1];
    $('#cPlayBox .vbox').height((ow / w) * h);

    $('.videopop').click(function () {
        $('#cPlayer').attr('data-type', $(this).attr('data-type'));
        $('#cPlayer').attr('data-code', $(this).attr('data-code'));
        setTimeout(function () {
            $('#cPlayer').video();
            $('#cPlayBox').addClass('active');
            $('body').addClass('overh');
        }, 500);
    });
    $('#cPlayBox .cls').click(function () {
        $('#cPlayBox').removeClass('active');
        $('body').removeClass('overh');
        setTimeout(function () {
            $('#cPlayer').remove();
        }, 500);
        $('#cPlayBox .vbox').append('<div id="cPlayer" class="overh" data-type="" data-code=""></div>');
    });
}