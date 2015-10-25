

var h = 'https://bus.wtako.net/plugdj/',
    ico = {
        '`:)': 'smile.gif',
        '`O:-)': 'angel.gif',
        '`xx(': 'dead.gif',
        '`:o)': 'clown.gif',
        '`:-(': 'frown.gif',
        '`:~(': 'cry.gif',
        '`;-)': 'wink.gif',
        '`:-[': 'angry.gif',
        '`:-]': 'devil.gif',
        '`:D': 'biggrin.gif',
        '`:O': 'oh.gif',
        '`:P': 'tongue.gif',
        '`^3^': 'kiss.gif',
        '`?_?': 'wonder.gif',
        '`???': 'wonder2.gif',
        '`Z_Z': 'z.gif',
        '`@_@': '@.gif',
        '`#yup#': 'agree.gif',
        '`#ng#': 'donno.gif',
        '`#hehe#': 'hehe.gif',
        '`#love#': 'love.gif',
        '`#oh#': 'surprise.gif',
        '`#cn#': 'chicken.gif',
        '`#ass#': 'ass.gif',
        '`#fire#': 'fire.gif',
        '`#good#': 'good.gif',
        '`#good2#': 'ThumbUp.gif',
        '`#bad#': 'ThumbDown.gif',
        '`#kill#': 'kill.gif',
        '`#hoho#': 'hoho.gif',
        '`#kill2#': 'kill2.gif',
        '`#bye#': 'bye.gif',
        '`#adore#': 'adore.gif',
        '`#no#': 'no.gif',
        '`fuck': 'fuck.gif',
        '`[banghead]': 'banghead.gif',
        '`[bouncer]': 'bouncer.gif',
        '`[bouncy]': 'bouncy.gif',
        '`[censored]': 'censored.gif',
        '`[flowerface]': 'flowerface.gif',
        '`[offtopic]': 'offtopic.gif',
        '`[shocking]': 'shocking.gif',
        '`[369]': '369.gif',
        '`[bomb]': 'bomb.gif',
        '`[photo]': 'photo.gif',
        '`[sosad]': 'sosad.gif',
        '`[yipes]': 'yipes.gif',
        '`[slick]': 'slick.gif'
    },
    lm = {
        '`:)lm': 'smilelm.gif',
        '`xx(lm': 'deadlm.png',
        '`:o)lm': 'clownlm.gif',
        '`:o)2lm': 'clown2lm.gif',
        '`:o)3lm': 'clown3lm.gif',
        '`:o)4lm': 'clown4lm.gif',
        '`:-(lm': 'frownlm.gif',
        '`:~(lm': 'crylm.gif',
        '`;-)lm': 'winklm.gif',
        '`:-[lm': 'angrylm.gif',
        '`:-]lm': 'devillm.png',
        '`:Dlm': 'biggrinlm.gif',
        '`:D2lm': 'biggrinlm2.JPG',
        '`[bomb]lm': 'bomblm.gif',
        '`#bye#lm': 'byelm.gif',
        '`micolm': 'micolm.gif',
        '`mmlm': 'mmlm.gif',
        '`#ng#lm': 'nglm2.gif',
        '`:Olm': 'ohlm.gif',
        '`:O2lm': 'ohlm2.gif',
        '`:Plm': 'tonguelm.gif',
        '`:P2lm': 'tonguelm2.gif',
        '`:P3lm': 'feet_lm.gif',
        '`^3^lm': 'kisslm.gif',
        '`?_?lm': 'wonderlm.gif',
        '`???lm': 'wonder2lm.gif',
        '`@_@lm': '@lm.gif',
        '`#yup#lm': 'agreelm.gif',
        '`#hehe#lm': 'hehelm.gif',
        '`#hoho#lm': 'hoholm.gif',
        '`#love#lm': 'lovelm.gif',
        '`#oh#lm': 'surpriselm.gif',
        '`#ass#lm': 'asslm.gif',
        '`#good#lm': 'goodlm.gif',
        '`#kill#lm': 'killlm.gif',
        '`#kill2#lm': 'kill2lm.gif',
        '`#adore#lm': 'adorelm.gif',
        '`[banghead]lm': 'bangheadlm.gif',
        '`[bouncer]lm': 'bouncerlm.gif',
        '`[flowerface]lm': 'flowerfacelm.gif',
        '`[offtopic]lm': 'offtopiclm.gif',
        '`[shocking]lm': 'shockinglm.gif',
        '`[369]lm': '369lm.gif',
        '`[photo]lm': 'photolm.gif',
        '`[sosad]lm': 'sosadlm.gif',
        '`[yipes]lm': 'yipeslm.gif',
        '`[slick]lm': 'slicklm.gif'
    },
    me = {
        '`#cn_big#': 'big_cn.png',
        '`lol': 'lol.png',
        '`okay': 'okay.png',
        '`p_r': 'point_right.png',
        '`:/': 'stuck.png',
        '`lol': 'lol.png',
        '`:3': 'three_mouth.png',
        '`wa': 'wa.png',
        '`WFC': 'WFC.png',
        '`#big_adore#': 'verybig_adore.gif',
        '`#big_banghead#': 'verybig_banghead.gif',
        '`#big_bye#': 'verybig_bye.gif',
        '`#big_sad#': 'verybig_sad.gif',
        '`#big_sosad#': 'verybig_sosad.gif',
        '`#big_threesixnine#': 'verybig_threesixnine.gif',
        '`#big_tongue#': 'verybig_tongue.gif',
        '`#ur_frown#': 'U_R/frown.png',
        '`#ur_good#': 'U_R/good.png',
        '`#ur_what1#': 'U_R/what1.png',
        '`#ur_what2#': 'U_R/what2.png',
        '`#ur_fire#': 'U_R/fire.gif',
        '`#ur_angry#': 'U_R/angry.png',
        '`#ur_angryCN#': 'U_R/angryCN.gif',
        '`#ur_yup#': 'U_R/yup.gif',
        '`#ur_oh#': 'U_R/oh.png',
        '`#ur_flower#': 'U_R/flower.gif',
        '`#ur_biggrin#': 'U_R/biggrin.png',
        '`#ur_biggrin2#': 'U_R/biggrin2.gif',
        '`#ur_bouncer#': 'U_R/bouncer.gif',
        '`#ur_tongue#': 'U_R/tongue.png',
        '`#ur_oh_lm#': 'U_R/oh_lm.gif',
        '`#ur_yup_lm#': 'U_R/yup_lm.gif',
        '`#ur_fuck_lm#': 'U_R/fuck_lm.gif',
        '`#ur_ng_lm#': 'U_R/ng_lm.gif',
        '`#ur_cry_lm#': 'U_R/cry_lm.gif',
        '`#ur_frown_lm#': 'U_R/frown_lm.png',
        '`#ur_pps#': 'U_R/pps.gif',
        '`#ur_DOWF#': 'U_R/DOWF.gif',
        '`#ur_TS#': 'U_R/TS.gif',
    },
    xm = {
        '`:)x': 'smilex.gif',
        '`[sosad]x': 'sosadx.gif',
        '`#no#x': 'nox.gif',
        '`#ng#x': 'donnox.gif',
        '`:-(x': 'frownx.gif',
        '`:~(x': 'cryx.gif',
        '`#good#x': 'goodx.gif',
        '`#yup#x': 'agreex.gif',
        '`#hoho#x': 'hohox.gif',
        '`#fire#x': 'firex.gif',
        '`#cn#x': 'chickenx.gif',
        '`#cn#2x': 'chicken2x.gif',
        '`[bouncy]x': 'bouncyx.gif',
        '`[bouncy]2x': 'bouncy2x.gif',
        '`:-[x': 'angryx.gif',
        '`#ass#x': 'assx.gif',
        '`#ng#x': 'donnox.gif',
        // Green Hat
        '`:)gx': 'smilegx.gif',
        '`[sosad]gx': 'sosadgx.gif',
        '`#no#gx': 'nox.gif',
        '`:o)gx': 'clowngx.gif',
        '`:-(gx': 'frowngx.gif',
        '`:~(gx': 'crygx.gif',
        '`#bye#gx': 'byegx.gif',
        '`fuckgx': 'diugx.gif',
        '`[369]gx': '369gx.gif',
        '`#good#gx': 'goodgx.gif',
        '`#yup#gx': 'agreegx.gif',
        // New Year
        '`#bye_ghost#': 'Ghost/byeghost.gif',
        '`#bye2_ghost#': 'Ghost/byeghost2.gif',
        '`#bloodylm#': 'Ghost/bloodylm.gif',
        '`#[bouncer_vamplm]': 'Ghost/bouncer_vamplm.gif',
        '`#[shocking_ghostlm]': 'Ghost/Ghostnomore.gif',
        '`#hoho_ghost#': 'Ghost/hohoghost.gif',
        '`#:-[_ghost': 'Ghost/angryghost.gif',
        '`#:O_ghost': 'Ghost/oh_ghost.gif',
        '`#taoistlm#': 'Ghost/taoistlm.gif'
    },
    ny = {
        '`[banghead_dw]': 'Paint/banghead_dw.gif',
        '`:D_dw': 'Paint/biggrin_dw.gif',
        '`:o)_dw': 'Paint/clown_dw.gif',
        '`:~(_dw': 'Paint/cry_dw.gif',
        '`xx(_dw': 'Paint/dead_dw.gif',
        '`:-]_dw': 'Paint/devil_dw.gif',
        '`:-(_dw': 'Paint/frown_dw.gif',
        '`#hoho#_dw': 'Paint/hoho_dw.gif',
        '`^3^_dw': 'Paint/kiss_dw.gif',
        '`#no#_dw': 'Paint/no_dw.gif',
        '`:)_dw': 'Paint/smile_dw.gif',
        '`[sosad_dw]': 'Paint/sosad_dw.gif',
        '`:P_dw': 'Paint/tongue_dw.gif',
        '`;-)_dw': 'Paint/wink_dw.gif',
        '`369_dw': 'Paint/369_dw.gif',
        '`@_dw': 'Paint/@_dw.gif',
        '`#adore#_dw': 'Paint/adore_dw.gif',
        '`#yup#_dw': 'Paint/agree_dw.gif',
        '`O:-)_dw': 'Paint/angel_dw.gif',
        '`:-(_dw': 'Paint/frown_dw.gif',
        '`#ass#_dw': 'Paint/ass_dw.gif',
        '`[bouncer]_dw': 'Paint/bouncer_dw.gif',
        '`#bomb#_dw': 'Paint/bomb_dw.gif',
        '`[bouncy]_dw': 'Paint/bouncy_dw.gif',
        '`#bye#_dw': 'Paint/bye_dw.gif',
        '`[censored]_dw': 'Paint/censored_dw.gif',
        '`#cn#_dw': 'Paint/chicken_dw.gif',
        '`fuck_dw': 'Paint/diu_dw.gif',
        '`#ng#_dw': 'Paint/donno_dw.gif',
        '`#fire#_dw': 'Paint/fire_dw.gif',
        '`#flower#_dw': 'Paint/flowerface_dw.gif',
        '`#good#_dw': 'Paint/good_dw.gif',
        '`#hehe#_dw': 'Paint/hehe_dw.gif',
        '`#kill#_dw': 'Paint/kill_dw.gif',
        '`#kill2#_dw': 'Paint/kill2_dw.gif',
        '`#love#_dw': 'Paint/love_dw.gif',
        '`[offtopic]_dw': 'Paint/offtopic_dw.gif',
        '`:O_dw': 'Paint/oh_dw.gif',
        '`[photo]_dw': 'Paint/photo_dw.gif',
        '`[shocking]_dw': 'Paint/shocking_dw.gif',
        '`[slick]_dw': 'Paint/slick_dw.gif',
        '`#oh#_dw': 'Paint/surprise_dw.gif',
        '`?_?_dw': 'Paint/wonder_dw.gif',
        '`???_dw': 'Paint/wonder2_dw.gif',
        '`[yipes]_dw': 'Paint/yipes_dw.gif',
        '`Z_Z_dw': 'Paint/z_dw.gif'
    },
    ha = {
        '`#ha_witch#': 'Haloween/witch_ha.gif',
        '`#ha_bouncer#': 'Haloween/bouncer_ha.gif',
        '`#ha_oh#': 'Haloween/oh_ha.gif',
        '`#ha_hoho#': 'Haloween/hoho_ha.gif',
        '`#ha_scare#': 'Haloween/scare_ha.gif',
        '`#ha_mico#': 'Haloween/mico_ha.gif',
        '`#ha_tot#': 'Haloween/tot_ha.gif',
        '`#ha_angry#': 'Haloween/angry_ha.gif',
        '`#ha_hoho2#': 'Haloween/hoho2_ha.gif',
        '`#ha_369#': 'Haloween/three69_ha.gif',
        '`#ha_banghead#': 'Haloween/banghead_ha.gif',
        '`#ha_bye#': 'Haloween/bye_ha.gif',
        '`#ha_hehehaha#': 'Haloween/hehehaha_ha.gif',
        '`#ha_clown#': 'Haloween/clown_ha.gif',
        '`#ha_frown#': 'Haloween/frown_ha.gif',
        '`#ha_adore#': 'Haloween/adore_ha.gif',
        '`#ha_banghead2#': 'Haloween/banghead2_ha.gif',
        '`#ha_sosad#': 'Haloween/sosad_ha.gif',
        '`#ha_on9pumpkin#': 'Haloween/on9pumpkin.gif',
        '`#ha_sosad2#': 'Haloween/sosad2_ha.gif',
        '`#ha_witch2#': 'Haloween/witch2_ha.gif',
    },
    ur = { // Trend
        '`[369n]': 'newYear/369n.gif',
        '`[3692n]': 'newYear/369n2.gif',
        '`#assn#': 'newYear/assn.gif',
        '`[bangheadn]': 'newYear/bangheadn.gif',
        '`[banghead2n]': 'newYear/bangheadn2.gif',
        '`[bouncern]': 'newYear/bouncern.gif',
        '`[:o)]n': 'newYear/clownn.gif',
        '`[:o)]2n': 'newYear/clownn2.gif',
        '`[:o)]3n': 'newYear/clownn3.gif',
        '`#fuckn#': 'newYear/diun.gif',
        '`[offtopicn]': 'newYear/offtopicn.gif',
        '`[offtopic2n]': 'newYear/offtopicn2.gif',
        '`#sosadn#': 'newYear/sosadn.gif',
        '`#sosad2n#': 'newYear/sosadn2.gif',
        '`#sosad3n#': 'newYear/sosadn3.gif',
        '`#yipesn#': 'newYear/yipesn.gif',

        '`[:P]pn': 'newYear/tonguepn.gif',
        '`[369pn]': 'newYear/369pn.gif',
        '`[3692pn]': 'newYear/369pn2.gif',
        '`[bangheadpn]': 'newYear/bangheadpn.gif',
        '`[bouncerpn]': 'newYear/bouncerpn.gif',
        '`[:o)]pn': 'newYear/clownpn.gif',
        '`[:o)]2pn': 'newYear/clownpn2.gif',
        '`[:o)]3pn': 'newYear/clownpn3.gif',
        '`#fuckpn#': 'newYear/diupn.gif',
        '`[offtopicpn]': 'newYear/offtopicpn.gif',
        '`[offtopicp2n]': 'newYear/offtopicpn2.gif',
        '`#sosadpn#': 'newYear/sosadpn.gif',
        '`#sosad2pn#': 'newYear/sosadpn2.gif',
        '`#sosad3pn#': 'newYear/sosadpn3.gif',
        '`#yipespn#': 'newYear/yipespn.gif',

    },
    b, o, v, e, n, q, z;
var prevChatId,prevSender;
function replaceIcon(htmlContent){
 	q = htmlContent.html();

    // reverse order 
    z = jQuery.extend({}, ny, xm, me, lm, ico, ha, ur);
    // bbcode
    jQuery.each(z, function(i, v) {
        q = q.replace(new RegExp(i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'g'), '<img class="hico" alt src="' + h + v + '">');
    });
    return q;
}
/**
		Chat Object
			message
			chatid
			time
			type
			user
				id
				created
				dubs
				roleid
				status
				userInfo
				username
	**/
function chatCallBack(chatObj){
    	setTimeout(function(){
		if(chatObj!=null){
			if(chatObj!=null){
	            var sender = chatObj.user.username;
                var chatId;
                if(prevSender != sender)
                    chatId = chatObj.chatid;
                else
                    chatId = (prevChatId!=null) ? prevChatId : chatObj.chatid;
                if($("[id$='"+chatId+"']> div > div.activity-row > div.text").length == 0)
                    chatId = chatObj.chatid;
                   console.log('sender:'+sender+' chatId:'+chatId+' chatObjId:'+chatObj.chatid+' prevChatid:'+prevChatId);
	            var con = jQuery("[id$='"+chatId+"']> div > div.activity-row > div.text");
                console.log(con.length);
                if(con.length > 0){
                    console.log(con.html());
                    var replaced = replaceIcon(con);
                    console.log('replaced:'+replaced);
                    jQuery("[id$='"+chatId+"']> div > div.activity-row > div.text").html(replaced);
                    if(prevSender != sender){
                        prevSender = sender;
                        prevChatId = chatId;
                    }
                }
			}
        }}, 100);
}
function cssReformat(){
    jQuery('<style id="hkg-ico-style">\
					#chat .chat-container ul.chat-main li .activity-row .text .hico{max-height:90px;display:inline-block}\
				   </style>').appendTo('head');
	jQuery('body > div.backstretch > img').attr('src','https://bus.wtako.net/plugdj/theme/xmas/background.png');
}
function bindListener(){
	Dubtrack.Events.bind("realtime:chat-message",chatCallBack);
}
 function init(){
 	 setTimeout(function(){
	 	 cssReformat();
	 	 bindListener();
	 	 $('.chat-main').append('<li class="chat-welcome-message"><p style="color:#03A9F4">IconPack 載入完成</p></li>');
 	 },1000);
 }
init();
console.log('Loaded');

// https://api.dubtrack.fm/room/56017c5457347f0300cb99a6/
// https://api.dubtrack.fm/room/56017c5457347f0300cb99a6/users