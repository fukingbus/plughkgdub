// ==UserScript==
// @name         PlugHKG DubLoader
// @version      0.3
// @description  PlugHKG iconpack loader for dubtrack
// @author       Go2SchoolByBus
// @match        https://www.dubtrack.fm/join/plug-hkg
// @updateURL https://bus.wtako.net/plugdj/Script/PlugHKGDubLoader.js
// ==/UserScript==

 function load(){
 	 var itv = window.setInterval(function(){
        if($('#main-loading').css('display') != 'none'){
            window.clearInterval(itv);
            jQuery.getScript('https://bus.wtako.net/plugdj/Script/PlugHKGDub.js');
               /**
                	 -------------------------------------------------------------------------------------
                	                 用家你好，若果你能夠看到這段訊息，證明你的步驟沒有錯             
                	                     **上面的錯誤提示只會出現於插件載入失敗時**                   
                	                                 你下一步應該做的事 :                             
                	   按下 Ctrl + A ，再按 Ctrl +C ，再依據影片所示貼上於 Tampermonkey 或 Greasemonkey  
                	                                                                                  
                	                       感謝您支持PlugHKG 高登音樂台，祝您使用愉快                        
                							    	Ⓒ Go2SchoolByBus 2015
                	                       Facebook Page:       http://fb.com/plughkg                 
                	-------------------------------------------------------------------------------------
                **/
        }
    },1000);
}
load();