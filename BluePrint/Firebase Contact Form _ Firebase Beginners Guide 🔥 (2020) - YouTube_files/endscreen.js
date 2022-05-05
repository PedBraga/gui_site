(function(g){var window=this;'use strict';var BJa=function(a,b){a.La("onAutonavCoundownStarted",b)},G3=function(a,b,c){var d=b.bb();
g.L(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.Be(c?c:"mqdefault.jpg");var f=null,h=null;b instanceof g.FF&&(b.lengthText?(f=b.lengthText||null,h=b.ow||null):b.lengthSeconds&&(f=g.MK(b.lengthSeconds),h=g.MK(b.lengthSeconds,!0)));var l=!!e;e=l&&"RD"===(new g.WL(e.substr(0,2),e.substr(2))).type;var m=b instanceof g.FF?b.isLivePlayback:null,n=b instanceof g.FF?b.isUpcoming:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:
b.author,aria_label:b.Cr||g.xH("Watch $TITLE",{TITLE:b.title}),duration:f,timestamp:h,url:b.Zl(),is_live:m,is_upcoming:n,is_list:l,is_mix:e,background:c?"background-image: url("+c+")":"",views_and_publish_time:d.shortViewCount?d.shortViewCount+" \u2022 "+d.publishedTimeText:d.publishedTimeText,autoplayAlternativeHeader:b.Fr};b instanceof g.XL&&(d.playlist_length=b.length);a.update(d)},H3=function(a){var b=a.T(),c=b.l;
g.V.call(this,{D:"a",K:"ytp-autonav-suggestion-card",U:{href:"{{url}}",target:c?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",Ca:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],oa:"{{duration}}"},{D:"div",Ca:["ytp-autonav-live-stamp"],oa:"Live"},{D:"div",
Ca:["ytp-autonav-upcoming-stamp"],oa:"Upcoming"},{D:"div",K:"ytp-autonav-list-overlay",S:[{D:"div",K:"ytp-autonav-mix-text",oa:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",Ca:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],oa:"{{title}}"},{D:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],oa:"{{author}}"},{D:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],oa:"{{views_and_publish_time}}"}]});this.I=a;this.suggestion=
null;this.i=c;this.Pa("click",this.onClick);this.Pa("keypress",this.l)},J3=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.C=b;this.l=0;b=a.T();var d=b.l;this.I=a;this.suggestion=null;this.i=new g.V({D:"div",K:"ytp-autonav-endscreen-upnext-container",U:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",oa:"{{autoplayAlternativeHeader}}"},
{D:"a",K:"ytp-autonav-endscreen-link-container",U:{href:"{{url}}",target:d?b.G:""},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],oa:"{{duration}}"},{D:"div",Ca:["ytp-autonav-live-stamp"],oa:"Live"},{D:"div",Ca:["ytp-autonav-upcoming-stamp"],oa:"Upcoming"}]},{D:"div",K:"ytp-autonav-endscreen-video-info",S:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",
oa:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",oa:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",oa:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",oa:"{{author_and_views}}"}]}]}]});g.G(this,this.i);this.i.ya(this.element);d||this.N(this.i.Ba("ytp-autonav-endscreen-link-container"),"click",this.WD);this.I.ac(this.element,this,115127);this.I.ac(this.i.Ba("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({D:"div",K:"ytp-autonav-overlay"});
g.G(this,this.overlay);this.overlay.ya(this.element);this.u=new g.V({D:"div",K:"ytp-autonav-endscreen-button-container"});g.G(this,this.u);this.u.ya(this.element);this.cancelButton=new g.V({D:"button",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],U:{"aria-label":"Cancel autoplay"},oa:"Cancel"});g.G(this,this.cancelButton);this.cancelButton.ya(this.u.element);this.cancelButton.Pa("click",this.PL,this);this.I.ac(this.cancelButton.element,this,115129);this.playButton=
new g.V({D:"a",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],U:{href:"{{url}}",role:"button","aria-label":"Play next video"},oa:"Play Now"});g.G(this,this.playButton);this.playButton.ya(this.u.element);this.playButton.Pa("click",this.WD,this);this.I.ac(this.playButton.element,this,115130);this.B=new g.J(function(){I3(c)},500);
g.G(this,this.B);this.VD();this.N(a,"autonavvisibility",this.VD)},I3=function(a){var b=K3(a),c=Math,d=c.min;
var e=a.l?Date.now()-a.l:0;c=d.call(c,e,b);L3(a,Math.ceil((b-c)/1E3));500>=b-c&&a.bh()?a.select(!0):a.bh()&&a.B.start()},K3=function(a){var b=a.I.On();
return 0<=b?b:g.S(a.I.T().experiments,"autoplay_time")||1E4},L3=function(a,b){b=void 0===b?-1:b;
a=a.i.Ba("ytp-autonav-endscreen-upnext-header");g.Ge(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(/\$SECONDS/gi)[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Fe("Up next in $SECONDS".slice(0,d)));var e=g.Ee("span");g.vn(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Me(e,b);a.appendChild(e);a.appendChild(g.Fe("Up next in $SECONDS".slice(d+c.length)));return}}g.Me(a,"Up next")},M3=function(a,b){g.V.call(this,{D:"div",
Ca:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},O3=function(a){g.V.call(this,{D:"div",
Ca:["ytp-upnext","ytp-player-content"],U:{"aria-label":"{{aria_label}}"},S:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",S:[{D:"span",K:"ytp-upnext-header",oa:"Up Next"},{D:"span",K:"ytp-upnext-title",oa:"{{title}}"},{D:"span",K:"ytp-upnext-author",oa:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Play next video"},S:[{D:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
S:[{D:"circle",K:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",S:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
oa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.C=this.Ba("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.J(this.Xu,5E3,this);this.l=0;var b=this.Ba("ytp-upnext-cancel");this.cancelButton=new g.V({D:"button",Ca:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancel autoplay"},oa:"Cancel"});g.G(this,this.cancelButton);this.cancelButton.Pa("click",this.QL,this);this.cancelButton.ya(b);this.cancelButton&&this.api.ac(this.cancelButton.element,
this,115129);g.G(this,this.B);this.api.ac(this.element,this,18788);b=this.Ba("ytp-upnext-autoplay-icon");this.N(b,"click",this.RL);this.api.ac(b,this,115130);this.XD();this.N(a,"autonavvisibility",this.XD);this.N(a,"mdxnowautoplaying",this.qQ);this.N(a,"mdxautoplaycanceled",this.rQ);this.N(a,"mdxautoplayupnext",this.TJ);N3(this)&&(a=(a=g.DL(this.api.qb()))?a.KN():null)&&this.TJ(a);g.L(this.element,"ytp-upnext-mobile",this.api.T().i)},N3=function(a){return 3===a.api.getPresentingPlayerType()},CJa=
function(a,b){return b?b:0<=a.api.On()?a.api.On():g.S(a.api.T().experiments,"autoplay_time")||1E4},P3=function(a,b){b=CJa(a,b);
var c=Math,d=c.min;var e=(0,g.O)()-a.l;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.C.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.bh()&&!N3(a)?a.select(!0):a.bh()&&a.i.start()},Q3=function(a){M3.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=this.suggestions=null;this.table=new g.V({D:"div",K:"ytp-suggestion-panel",S:[{D:"div",Ca:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],oa:"More videos"}]});this.J=new g.V({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.G=!1;this.l=new J3(this.player);g.G(this,this.l);this.l.ya(this.element);a.getVideoData().Nb?this.i=this.l:(this.i=new O3(a),g.HL(this.player,this.i.element,4),g.G(this,this.i));this.overlay=
new g.V({D:"div",K:"ytp-autonav-overlay-cancelled-state"});g.G(this,this.overlay);this.overlay.ya(this.element);this.B=new g.UL(this);g.G(this,this.B);g.G(this,this.table);this.table.ya(this.element);this.table.show();g.G(this,this.J);this.J.ya(this.table.element);this.hide()},DJa=function(a,b){return g.Mc(b.suggestions,function(c){c=g.yO(a.player.T(),c);
g.G(a,c);return c})},R3=function(a){var b=a.Dd();
b!==a.C&&(a.C=b,a.player.X("autonavvisibility"),a.C?(a.l!==a.i&&a.l.hide(),a.table.hide()):(a.l!==a.i&&a.l.show(),a.table.show()))},S3=function(a){M3.call(this,a,"subscribecard-endscreen");
this.i=new g.V({D:"div",K:"ytp-subscribe-card",S:[{D:"img",K:"ytp-author-image",U:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",S:[{D:"div",K:"ytp-author-name",oa:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.G(this,this.i);this.i.ya(this.element);var b=a.getVideoData();this.subscribeButton=new g.lN("Subscribe",null,"Unsubscribe",null,!0,!1,b.kh,b.subscribed,"trailer-endscreen",null,null,a);g.G(this,this.subscribeButton);this.subscribeButton.ya(this.i.Ba("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.Ka);this.Ka();this.hide()},T3=function(a){var b=a.T(),c=g.nB||g.lg?{style:"will-change: opacity"}:void 0,d=b.l,e=["ytp-videowall-still"];
b.i&&e.push("ytp-videowall-show-text");g.V.call(this,{D:"a",Ca:e,U:{href:"{{url}}",target:d?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{D:"div",K:"ytp-videowall-still-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",S:[{D:"span",K:"ytp-videowall-still-info-bg",S:[{D:"span",K:"ytp-videowall-still-info-content",U:c,S:[{D:"span",K:"ytp-videowall-still-info-title",oa:"{{title}}"},{D:"span",K:"ytp-videowall-still-info-author",
oa:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",oa:"Live"},{D:"span",K:"ytp-videowall-still-info-duration",oa:"{{duration}}"}]}]}]},{D:"span",Ca:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",K:"ytp-videowall-still-listlabel-length",S:[" (",{D:"span",oa:"{{playlist_length}}"},")"]}]},{D:"span",Ca:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],S:[{D:"span",
K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",oa:" (50+)"}]}]});this.suggestion=null;this.l=d;this.api=a;this.i=new g.UL(this);g.G(this,this.i);this.Pa("click",this.onClick);this.Pa("keypress",this.u);this.i.N(a,"videodatachange",this.ib);a.vg(this.element,this);this.ib()},U3=function(a){M3.call(this,a,"videowall-endscreen");
var b=this;this.I=a;this.u=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.J=!1;this.L=null;this.l=new g.UL(this);g.G(this,this.l);this.G=new g.J(function(){g.K(b.element,"ytp-show-tiles")},0);
g.G(this,this.G);var c=new g.V({D:"button",Ca:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Previous"},S:[g.UJ()]});g.G(this,c);c.ya(this.element);c.Pa("click",this.VL,this);this.table=new g.MJ({D:"div",K:"ytp-endscreen-content"});g.G(this,this.table);this.table.ya(this.element);c=new g.V({D:"button",Ca:["ytp-button","ytp-endscreen-next"],U:{"aria-label":"Next"},S:[g.VJ()]});g.G(this,c);c.ya(this.element);c.Pa("click",this.UL,this);a.getVideoData().Nb?this.i=new J3(a,!0):this.i=new O3(a);
g.G(this,this.i);g.HL(this.player,this.i.element,4);this.hide()},V3=function(a){return g.IL(a.player)&&a.Er()&&!a.B},EJa=function(a,b){return g.Mc(b.suggestions,function(c){c=g.yO(a.I.T(),c);
g.G(a,c);return c})},W3=function(a){var b=a.Dd();
b!==a.J&&(a.J=b,a.player.X("autonavvisibility"))},X3=function(a){g.eM.call(this,a);
var b=this;this.endScreen=null;this.i=this.l=this.u=!1;this.listeners=new g.UL(this);g.G(this,this.listeners);this.env=a.T();FJa(a)?(this.u=!0,GJa(this),this.i?this.endScreen=new Q3(a):this.endScreen=new U3(this.player)):this.env.Ub?this.endScreen=new S3(this.player):this.endScreen=new M3(this.player);g.G(this,this.endScreen);g.HL(this.player,this.endScreen.element,4);HJa(this);this.listeners.N(a,"videodatachange",this.ib,this);this.listeners.N(a,g.Yv("endscreen"),function(c){b.rd(c)});
this.listeners.N(a,g.Zv("endscreen"),function(c){b.Re(c)})},GJa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.df&&a.l===b.Nb)return!1;a.i=b.df;a.l=b.Nb;return!0},FJa=function(a){a=a.T();
return a.jb&&!a.Ub},HJa=function(a){a.player.Te("endscreen");
var b=a.player.getVideoData();b=new g.Vv(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.Vv(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});a.player.xd([b,c])};
g.AL.prototype.On=g.ca(2,function(){return this.app.On()});
g.uW.prototype.On=g.ca(1,function(){return this.getVideoData().OE});
g.v(H3,g.V);H3.prototype.select=function(){(this.I.Ui(this.suggestion.bb().videoId,this.suggestion.Hd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.Yz||void 0)||this.I.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.I.Gb(this.element)};
H3.prototype.onClick=function(a){g.DM(a,this.I,this.i,this.suggestion.Hd||void 0)&&this.select()};
H3.prototype.l=function(a){switch(a.keyCode){case 13:case 32:g.aq(a)||(this.select(),g.$p(a))}};
H3.prototype.Vd=function(a){g.L(this.element,"ytp-suggestion-card-with-margin",a)};g.v(J3,g.V);g.k=J3.prototype;g.k.rr=function(a){this.suggestion!==a&&(this.suggestion=a,G3(this.i,a),this.playButton.Qa("url",this.suggestion.Zl()),this.Vd())};
g.k.Vd=function(){var a=this.I.gi(!0,this.I.isFullscreen());g.L(this.element,"ytp-autonav-endscreen-small-mode",this.Ee(a));g.L(this.element,"ytp-autonav-endscreen-is-premium",!!this.suggestion&&!!this.suggestion.zx);g.L(this.I.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!this.I.Dd());g.L(this.I.getRootNode(),"countdown-running",this.bh());g.L(this.element,"ytp-player-content",this.I.Dd());g.ig(this.overlay.element,{width:a.width+"px"});if(!this.bh()){this.I.Dd()?L3(this,Math.round(K3(this)/
1E3)):L3(this);a=!!this.suggestion&&!!this.suggestion.Fr;var b=this.I.Dd()||!a;g.L(this.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!b&&a);g.L(this.element,"ytp-autonav-endscreen-upnext-no-alternative-header",b&&!a);g.PJ(this.u,this.I.Dd())}};
g.k.bh=function(){return 0<this.l};
g.k.Hq=function(){this.bh()||(this.l=Date.now(),I3(this),BJa(this.I,K3(this)),g.L(this.I.getRootNode(),"countdown-running",this.bh()))};
g.k.Io=function(){this.il();I3(this);var a=this.i.Ba("ytp-autonav-endscreen-upnext-header");a&&g.Me(a,"Up next")};
g.k.il=function(){this.bh()&&(this.B.stop(),this.l=0)};
g.k.select=function(a){this.I.nextVideo(!1,void 0===a?!1:a);this.il()};
g.k.WD=function(a){g.DM(a,this.I)&&(a.currentTarget===this.playButton.element?this.I.Gb(this.playButton.element):a.currentTarget===this.i.Ba("ytp-autonav-endscreen-link-container")&&(a=this.i.Ba("ytp-autonav-endscreen-link-container"),this.I.gb(a,!0),this.I.Gb(a)),this.select())};
g.k.PL=function(){this.I.Gb(this.cancelButton.element);g.CL(this.I,!0)};
g.k.VD=function(){var a=this.I.Dd();this.C&&this.ub!==a&&g.PJ(this,a);this.Vd();this.I.gb(this.element,a);this.I.gb(this.cancelButton.element,a);this.I.gb(this.i.Ba("ytp-autonav-endscreen-link-container"),a);this.I.gb(this.playButton.element,a)};
g.k.Ee=function(a){return 400>a.width||459>a.height};g.v(M3,g.V);g.k=M3.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Er=function(){return!1};
g.k.Dd=function(){return!1};
g.k.UG=function(){return!1};g.v(O3,g.V);g.k=O3.prototype;g.k.Xu=function(){this.notification&&(this.B.stop(),this.hc(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.rr=function(a){this.suggestion=a;G3(this,a,"hqdefault.jpg")};
g.k.XD=function(){g.PJ(this,this.api.Dd());this.api.gb(this.element,this.api.Dd());this.api.gb(this.Ba("ytp-upnext-autoplay-icon"),this.api.Dd());this.cancelButton&&this.api.gb(this.cancelButton.element,this.api.Dd())};
g.k.BQ=function(){window.focus();this.Xu()};
g.k.Hq=function(a){var b=this;this.bh()||(g.Vq("a11y-announce","Up Next "+this.suggestion.title),this.l=(0,g.O)(),this.i=new g.J(function(){P3(b,a)},25),P3(this,a),BJa(this.api,CJa(this,a)));
g.yn(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.bh=function(){return!!this.i};
g.k.Io=function(){this.il();this.l=(0,g.O)();P3(this);g.K(this.element,"ytp-upnext-autoplay-paused")};
g.k.il=function(){this.bh()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.R(this.api.T().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.bb(),this.Xu(),this.notification=new Notification("Up Next",{body:b.title,icon:b.Be()}),this.u=this.N(this.notification,"click",this.BQ),this.B.start())}this.il();this.api.nextVideo(!1,a)};
g.k.RL=function(a){!g.Le(this.cancelButton.element,g.Wp(a))&&g.DM(a,this.api)&&(this.api.Dd()&&this.api.Gb(this.Ba("ytp-upnext-autoplay-icon")),this.select())};
g.k.QL=function(){this.api.Dd()&&this.cancelButton&&this.api.Gb(this.cancelButton.element);g.CL(this.api,!0)};
g.k.qQ=function(a){N3(this);this.show();this.Hq(a)};
g.k.TJ=function(a){N3(this);this.suggestion&&this.suggestion.bb().videoId===a.bb().videoId||this.rr(a)};
g.k.rQ=function(){N3(this);this.il();this.hide()};
g.k.va=function(){this.il();this.Xu();g.V.prototype.va.call(this)};g.v(Q3,M3);g.k=Q3.prototype;g.k.create=function(){M3.prototype.create.call(this);this.B.N(this.player,"appresize",this.Vd);this.B.N(this.player,"onVideoAreaChange",this.Vd);this.B.N(this.player,"videodatachange",this.ib);this.B.N(this.player,"autonavchange",this.YD);this.B.N(this.player,"autonavcancel",this.SL);this.ib()};
g.k.show=function(){M3.prototype.show.call(this);(this.G||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.CL(this.player,!1);g.IL(this.player)&&this.Er()&&!this.u?(R3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Hq():3===this.videoData.autonavState&&this.i.Io()):(g.CL(this.player,!0),R3(this));this.Vd()};
g.k.hide=function(){M3.prototype.hide.call(this);this.i.Io();R3(this)};
g.k.Vd=function(){var a=this.player.gi(!0,this.player.isFullscreen());R3(this);this.l.Vd();g.L(this.element,"ytp-autonav-cancelled-small-mode",this.Ee(a));g.L(this.element,"ytp-autonav-cancelled-tiny-mode",this.gw(a));g.L(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.ig(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){b=g.q(b.value);var c=b.next().value;b.next().value.Vd(1===c%2)}}};
g.k.ib=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((this.suggestions=DJa(this,a))&&this.suggestions.length)for(this.i.rr(this.suggestions[0]),this.i!==this.l&&this.l.rr(this.suggestions[0]),a=0;a<IJa.length;++a){var b=IJa[a];if(this.suggestions&&this.suggestions[b]){this.videos[a]=new H3(this.player);var c=this.videos[a];b=this.suggestions[b];c.suggestion!==b&&(c.suggestion=b,G3(c,b));g.G(this,this.videos[a]);this.videos[a].ya(this.J.element)}}this.Vd()}};
g.k.YD=function(a){1===a?(this.G=!1,this.u=this.videoData.clientPlaybackNonce,this.i.il(),this.ub&&this.Vd()):(this.G=!0,this.Dd()&&(2===a?this.i.Hq():3===a&&this.i.Io()))};
g.k.SL=function(a){a?this.YD(1):(this.u=null,this.G=!1)};
g.k.Er=function(){return 1!==this.videoData.autonavState};
g.k.Ee=function(a){return(910>a.width||459>a.height)&&!this.gw(a)&&!(400>=a.width||360>=a.height)};
g.k.gw=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Dd=function(){return this.ub&&g.IL(this.player)&&this.Er()&&!this.u};
var IJa=[1,3,2,4];g.v(S3,M3);S3.prototype.Ka=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.ag,author:a.author});this.subscribeButton.channelId=a.kh;var b=this.subscribeButton;a.subscribed?b.l():b.u()};g.v(T3,g.V);T3.prototype.select=function(){(this.api.Ui(this.suggestion.bb().videoId,this.suggestion.Hd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.Yz||void 0)||this.api.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.api.Gb(this.element)};
T3.prototype.onClick=function(a){g.DM(a,this.api,this.l,this.suggestion.Hd||void 0)&&this.select()};
T3.prototype.u=function(a){switch(a.keyCode){case 13:case 32:g.aq(a)||(this.select(),g.$p(a))}};
T3.prototype.ib=function(){var a=this.api.getVideoData(),b=this.api.T();this.l=a.C?!1:b.l};g.v(U3,M3);g.k=U3.prototype;g.k.create=function(){M3.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=EJa(this,a),this.videoData=a);this.Vd();this.l.N(this.player,"appresize",this.Vd);this.l.N(this.player,"onVideoAreaChange",this.Vd);this.l.N(this.player,"videodatachange",this.ib);this.l.N(this.player,"autonavchange",this.Iy);this.l.N(this.player,"autonavcancel",this.TL);a=this.videoData.autonavState;a!==this.L&&this.Iy(a);this.l.N(this.element,"transitionend",this.OR)};
g.k.destroy=function(){g.ku(this.l);g.yi(this.stills);this.stills=[];this.suggestions=null;M3.prototype.destroy.call(this);g.yn(this.element,"ytp-show-tiles");this.G.stop();this.L=this.videoData.autonavState};
g.k.Er=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){M3.prototype.show.call(this);g.yn(this.element,"ytp-show-tiles");this.player.T().i?g.pn(this.G):this.G.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.CL(this.player,!1);V3(this)?(W3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Hq():3===this.videoData.autonavState&&this.i.Io()):(g.CL(this.player,!0),W3(this))};
g.k.hide=function(){M3.prototype.hide.call(this);this.i.Io();W3(this)};
g.k.OR=function(a){g.Wp(a)===this.element&&this.Vd()};
g.k.Vd=function(){if(this.suggestions&&this.suggestions.length){g.K(this.element,"ytp-endscreen-paginate");var a=this.I.gi(!0,this.I.isFullscreen()),b=g.xL(this.I);b&&(b=b.oe()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,u=e<=h-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&u)n-=p*m,e+=2;else if(t)n-=
r*m,b+=2;else if(u)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.xg(a,m,n);g.ig(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.rr(this.suggestions[0]);this.i instanceof J3&&this.i.Vd();g.L(this.element,"ytp-endscreen-takeover",V3(this));W3(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?
r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.de(p+this.u,l),0!==r){t=this.stills[c];t||(t=new T3(this.player),this.stills[c]=t,a.appendChild(t.element));u=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-u-4,A=Math.floor(m*(f+r)/b)-x-4;g.qg(t.element,x,u);g.xg(t.element,A,y);g.ig(t.element,"transitionDelay",(h+f)/20+"s");g.L(t.element,"ytp-videowall-still-mini",1===r);g.L(t.element,"ytp-videowall-still-large",2<r);r=t;p=this.suggestions[p];r.suggestion!==p&&(r.suggestion=
p,t=r.api.T(),u=g.wn(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",G3(r,p,u),g.vD(t)&&(t=p.Zl(),t=g.Hd(t,g.hN("emb_rel_end")),r.Qa("url",t)),(p=(p=p.Hd)&&p.itct)&&r.api.dl(r.element,p));c++}g.L(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Ie(e.element),g.xi(e);this.stills.length=c}};
g.k.ib=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.suggestions=EJa(this,a),this.videoData=a,this.Vd())};
g.k.UL=function(){this.u+=this.stills.length;this.Vd()};
g.k.VL=function(){this.u-=this.stills.length;this.Vd()};
g.k.UG=function(){return this.i.bh()};
g.k.Iy=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.il(),this.ub&&this.Vd()):(this.C=!0,this.ub&&V3(this)&&(2===a?this.i.Hq():3===a&&this.i.Io()))};
g.k.TL=function(a){if(a){for(a=0;a<this.stills.length;a++)this.I.gb(this.stills[a].element,!0);this.Iy(1)}else this.B=null,this.C=!1;this.Vd()};
g.k.Dd=function(){return this.ub&&V3(this)};g.v(X3,g.eM);g.k=X3.prototype;g.k.Uo=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!FJa(this.player)||b;var c=a.Pc||g.GD(a.B),d=this.player.gs();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Dd=function(){return this.endScreen.Dd()};
g.k.tO=function(){return this.Dd()?this.endScreen.UG():!1};
g.k.va=function(){this.player.Te("endscreen");g.eM.prototype.va.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.LE;if(b&&b.videoId){var c=this.player.qb().kd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].id&&!a.iD?a=!1:(this.player.Ui(b.videoId,void 0,void 0,!0,!0,b),c&&c.pw("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.eM.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.eM.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.rd=function(a){this.Uo()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.Re=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.ib=function(){HJa(this);this.u&&GJa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new Q3(this.player):this.endScreen=new U3(this.player),g.G(this,this.endScreen),g.HL(this.player,this.endScreen.element,4))};g.pM.endscreen=X3;})(_yt_player);
