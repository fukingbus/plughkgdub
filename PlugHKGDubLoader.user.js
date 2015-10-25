// ==UserScript==
// @name         PlugHKG DubLoader
// @version      0.3
// @description  PlugHKG iconpack loader for dubtrack
// @author       Go2SchoolByBus
// @match        https://www.dubtrack.fm/join/plug-hkg
// @source https://raw.githubusercontent.com/fukingbus/plughkgdub/master/PlugHKGDubLoader.user.js
// ==/UserScript==

 function load(){
 	 var itv = window.setInterval(function(){
        if($('#main-loading').css('display') != 'none'){
            window.clearInterval(itv);
            jQuery.getScript('https://bus.wtako.net/plugdj/Script/PlugHKGDub.js');
               /**
                	 -------------------------------------------------------------------------------------
                	                       感謝您支持PlugHKG 高登音樂台，祝您使用愉快                        
                							    	Ⓒ Go2SchoolByBus 2015
                	                       Facebook Page:       http://fb.com/plughkg                 
                	-------------------------------------------------------------------------------------
                **/
        }
    },1000);
}
load();