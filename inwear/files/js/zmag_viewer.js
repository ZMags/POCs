function __dispatchViewerEvent(c,a){var b=ZMAGS.ui.Viewer.viewers[c];if(b){b.dispatchEvent(ZMAGS.ui.Viewer.decodeJSON(a))}}function __javaScriptAPIBridgeInitialized(){for(var a=0;a<ZMAGS.ui.Viewer.viewers.length;a++){var b=ZMAGS.ui.Viewer.viewers[a];if(b){b.javaScriptAPIBridgeInitialized()}}}function openPopup(a){window.open(a,"new_window_name")}var ZMAGS={ui:{}};ZMAGS.ui.Viewer=function(){ZMAGS.ui.Viewer.VERSION="1.0.0";ZMAGS.ui.Viewer.IMPL_VERSION="1.0.0";ZMAGS.ui.Viewer.FLASH_PLAYER_VERSION="10.0.22.87";ZMAGS.ui.Viewer.BASE_URL="http://zviewer.zmags.com";ZMAGS.ui.Viewer.VIEWER_SWF="launcher-3.1.6.4.swf";ZMAGS.ui.Viewer.EXPRESS_INSTALL_SWF="expressInstall.swf";ZMAGS.ui.Viewer.BRAND_NAME="viewer.zmags.com";ZMAGS.ui.Viewer.DEFAULT_VIEW_TYPE="normal";ZMAGS.ui.Viewer.CONFIGURATION_URL="http://viewer.zmags.com/viewerconfiguration";ZMAGS.ui.Viewer.META_DATA_SERVICE_BASE_URL=ZMAGS.ui.Viewer.BASE_URL+"/services/publicationMetaData",ZMAGS.ui.Viewer.CURRENT_PAGES_CHANGE="currentpageschange";ZMAGS.ui.Viewer.CURRENT_PUBLICATION_CHANGE="currentpublicationchange";ZMAGS.ui.Viewer.CUSTOM_LINK_CLICK="customlinkclick";ZMAGS.ui.Viewer.PUBLICATION_OPEN="publicationopen";ZMAGS.ui.Viewer.PUBLICATION_CLOSE="publicationclose";ZMAGS.ui.Viewer.PUBLICATION_LOAD="publicationload";ZMAGS.ui.Viewer.viewers=new Array();ZMAGS.ui.Viewer.IDIncrementer=1;ZMAGS.ui.Viewer.decodeJSON=function(jsonString){return eval("("+jsonString+")")};ZMAGS.ui.Viewer.parseBoolean=function(value){if(typeof value=="boolean"){return value}switch(value){case 1:return true;case 0:return false;case"true":return true;case"false":return false}return false};var id,publicationID=null,parentElementID,eventQueue,locale,width="100%",height="100%",wmode="transparent",metaData=null,swf,swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);
/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/
return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return}f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){try{J.parentNode.removeChild(J)}catch(e){return}E()}}function E(){if(e){return}if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return}}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return}var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return}var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return}AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();function determineLanguage(){var lang="en";if(navigator.userLanguage){lang=navigator.userLanguage}else{if(navigator.language){lang=navigator.language}else{if(navigator.systemLanguage){lang=navigator.systemLanguage}else{if(navigator.browserLanguage){lang=navigator.browserLanguage}}}}return lang.replace("-","_")}function doShow(){if(!parentElementID){throw new Error("No parent element ID defined")}parentElement=document.getElementById(parentElementID);if(!parentElement){throw new Error("No parent element with ID: "+parentElementID+", was found.")}requestPublicationMetaData()}function requestPublicationMetaData(){var callback="_"+publicationID;window[callback]=function(metaData){publicationMetaDataRequestHandler(metaData)};var requestURL=constructURL(ZMAGS.ui.Viewer.META_DATA_SERVICE_BASE_URL,{publicationID:publicationID,callback:callback});loadExternalScript(requestURL,null)}function publicationMetaDataRequestHandler(data){metaData=data;onPublicationMetaDataInitialized()}function onPublicationMetaDataInitialized(){var launchStartTime=new Date().getTime();var lang=(locale)?locale:determineLanguage();var innerDivID=parentElementID+"InnerDiv"+publicationID;var innerDiv=document.createElement("div");innerDiv.setAttribute("id",innerDivID);document.getElementById(parentElementID).appendChild(innerDiv);var flashvars={embeddedInCustomPage:true,publication:publicationID,viewerConfigurationURL:escape(ZMAGS.ui.Viewer.CONFIGURATION_URL+"/"+publicationID+"?viewType="+ZMAGS.ui.Viewer.DEFAULT_VIEW_TYPE),viewType:ZMAGS.ui.Viewer.DEFAULT_VIEW_TYPE,brandName:ZMAGS.ui.Viewer.BRAND_NAME,launchStartTime:launchStartTime,locale:lang,launcherPoweredByLogo:metaData.launcherPoweredByLogo,environment:3};if(metaData.launcherLogoResourceURL){flashvars.launcherLogoResourceURL=metaData.launcherLogoResourceURL;flashvars.launcherLogoWidth=metaData.launcherLogoWidth;flashvars.launcherLogoHeight=metaData.launcherLogoHeight;flashvars.launcherLogoLink=metaData.launcherLogoLink}if(metaData.launcherThemeColor){flashvars.launcherThemeColor=metaData.launcherThemeColor}if(metaData.launcherBackgroundColorFrom){flashvars.launcherBackgroundColorFrom=metaData.launcherBackgroundColorFrom;flashvars.launcherBackgroundColorTo=metaData.launcherBackgroundColorTo}var params={allowFullScreen:true,wmode:wmode,base:ZMAGS.ui.Viewer.BASE_URL,allowScriptAccess:"always"};var attributes={id:innerDivID,name:innerDivID};window[innerDivID]=new Object();swfobject.embedSWF(ZMAGS.ui.Viewer.BASE_URL+"/"+ZMAGS.ui.Viewer.VIEWER_SWF,innerDivID,width,height,ZMAGS.ui.Viewer.FLASH_PLAYER_VERSION,ZMAGS.ui.Viewer.BASE_URL+"/"+ZMAGS.ui.Viewer.EXPRESS_INSTALL_SWF,flashvars,params,attributes);if(navigator.appName.indexOf("Microsoft")!=-1){swf=document.getElementById(innerDivID)}else{swf=document[innerDivID]}}function dispatchEventLater(eventListener,event){if(eventListener.scope){setTimeout(function(scope){eventListener.listener.apply(scope,[event])},0,eventListener.scope)}else{setTimeout(eventListener.listener,0,event)}}function constructURL(baseURL,pairs){var url=baseURL+"?";for(var p in pairs){url+=p+"="+pairs[p]+"&"}return url.substr(0,url.length-1)}function loadExternalScript(url,callback){var script=document.createElement("script");script.type="text/javascript";script.src=url;script.onload=callback;document.getElementsByTagName("head")[0].appendChild(script)}id=ZMAGS.ui.Viewer.IDIncrementer;ZMAGS.ui.Viewer.IDIncrementer++;eventQueue=new Array();var self={addEventListener:function(eventType,listener,scope){var eventListener={scope:scope,eventType:eventType,listener:listener};self.removeEventListener(scope,eventType,listener);eventQueue.push(eventListener)},removeEventListener:function(eventType,listener,scope){for(var i=0;i<eventQueue.length;i++){var eventListener=eventQueue[i];if(eventListener.scope==scope&&eventListener.eventType==eventType&&eventListener.listener==listener){eventQueue.splice(i,1)}}},dispatchEvent:function(event){event.target=self;for(var i=0;i<eventQueue.length;i++){var eventListener=eventQueue[i];if(eventListener.eventType==event.type){if(typeof(eventListener.listener)=="string"){eventListener.listener=eventListener.scope[eventListener.listener]}dispatchEventLater(eventListener,event)}}},oncurrentpageschange:function(event){},oncurrentpublicationchange:function(event){},oncustomlinkclick:function(event){},onpublicationopen:function(event){},onpublicationload:function(event){},onpublicationclose:function(event){},show:function(){if(publicationID==null){throw new Error("No publication ID specified. Please set the publication ID before calling the show() method.")}(function(i){var u=navigator.userAgent;var e=
/*@cc_on!@*/
false;var st=setTimeout;if(/webkit/i.test(u)){st(function(){var dr=document.readyState;if(dr=="loaded"||dr=="complete"){i()}else{st(arguments.callee,10)}},10)}else{if((/mozilla/i.test(u)&&!/(compati)/.test(u))||(/opera/i.test(u))){var rs=document.readyState;if(rs&&(rs=="loaded"||rs=="complete")){i()}else{document.addEventListener("DOMContentLoaded",i,false)}}else{if(e){(function(){var t=document.createElement("doc:rdy");try{t.doScroll("left");i();t=null}catch(e){st(arguments.callee,0)}})()}else{window.onload=i}}}})(doShow)},setPublicationID:function(value){publicationID=value},setParentElementID:function(value){parentElementID=value},setHeight:function(value){height=value},setWidth:function(value){width=value},setWindowMode:function(value){wmode=value},setLocale:function(value){locale=value},javaScriptAPIBridgeInitialized:function(){swf.registerEmbeddedViewer(id)},atFirstPage:function(publicationID){return ZMAGS.ui.Viewer.parseBoolean(swf.atFirstPage(publicationID))},atLastPage:function(publicationID){return ZMAGS.ui.Viewer.parseBoolean(swf.atLastPage(publicationID))},getCurrentPages:function(publicationID){return ZMAGS.ui.Viewer.decodeJSON(swf.getCurrentPages(publicationID))},getCurrentPublicationID:function(){return swf.getCurrentPublicationID()},getDisplayableCurrentPages:function(includeTotalPages,includePageText,publicationID){includeTotalPages=ZMAGS.ui.Viewer.parseBoolean(includeTotalPages);includePageText=ZMAGS.ui.Viewer.parseBoolean(includePageText);return swf.getDisplayableCurrentPages(includeTotalPages,includePageText,publicationID)},getNumberOfPages:function(publicationID){return swf.getNumberOfPages(publicationID)},getPageLabel:function(pageNumber,publicationID){return swf.getPageLabel(pageNumber,publicationID)},getPageNumber:function(pageLabel,publicationID){return swf.getPageNumber(pageLabel,publicationID)},getPublicationTitle:function(publicationID){return swf.getPublicationTitle(publicationID)},closePublication:function(publicationID){swf.closePublication(publicationID)},gotoFirstPages:function(publicationID){swf.gotoFirstPages(publicationID)},gotoLastPages:function(publicationID){swf.gotoLastPages(publicationID)},gotoNextPages:function(publicationID){swf.gotoNextPages(publicationID)},gotoPage:function(pageNumber,publicationID){swf.gotoPage(pageNumber,publicationID)},gotoPreviousPages:function(publicationID){swf.gotoPreviousPages(publicationID)},openPublication:function(publicationID){swf.openPublication(publicationID)},search:function(searchText){swf.search(searchText)},showTOCDialog:function(){swf.showTOCDialog()},showArchiveDialog:function(){swf.showArchiveDialog()},showPrintDialog:function(){swf.showPrintDialog()}};self.addEventListener(ZMAGS.ui.Viewer.CURRENT_PAGES_CHANGE,"oncurrentpageschange",self);self.addEventListener(ZMAGS.ui.Viewer.CURRENT_PUBLICATION_CHANGE,"oncurrentpublicationchange",self);self.addEventListener(ZMAGS.ui.Viewer.CUSTOM_LINK_CLICK,"oncustomlinkclick",self);self.addEventListener(ZMAGS.ui.Viewer.PUBLICATION_OPEN,"onpublicationopen",self);self.addEventListener(ZMAGS.ui.Viewer.PUBLICATION_LOAD,"onpublicationload",self);self.addEventListener(ZMAGS.ui.Viewer.PUBLICATION_CLOSE,"onpublicationclose",self);ZMAGS.ui.Viewer.viewers[id]=self;return self};