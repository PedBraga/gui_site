(function(g){var window=this;'use strict';var x4=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Rf=!1;this.player=a;this.N(a,"minimized",this.Xf);this.N(a,"onStateChange",this.wC)},y4=function(a){g.eM.call(this,a);
this.i=new x4(this.player);this.i.hide();g.HL(this.player,this.i.element,4);a.Ce()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(x4,g.V);g.k=x4.prototype;
g.k.PA=function(){this.tooltip=new g.DP(this.player,this);g.G(this,this.tooltip);g.HL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.kc=new g.$M(this.player);g.G(this,this.kc);this.eg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.G(this,this.eg);this.eg.ya(this.element);this.N(this.eg.element,"click",this.Qw);var a=new g.V({D:"button",Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.WJ()]});g.G(this,a);a.ya(this.eg.element);this.N(a.element,"click",this.Hh);
a=new g.c0(this.player,this);g.G(this,a);a.ya(this.eg.element);this.In=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.G(this,this.In);this.In.ya(this.eg.element);this.N(this.In.element,"click",this.Qw);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,b);b.ya(this.In.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.G(this,a);a.ya(this.In.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,c);c.ya(this.In.element);this.FI=new g.AO(this.player,
this,!1);g.G(this,this.FI);this.FI.ya(b.element);b=new g.xO(this.player,this);g.G(this,b);b.ya(a.element);this.nextButton=new g.AO(this.player,this,!0);g.G(this,this.nextButton);this.nextButton.ya(c.element);this.gg=new g.qP(this.player,this);g.G(this,this.gg);this.gg.ya(this.eg.element);this.Ec=new g.FO(this.player,this);g.G(this,this.Ec);g.HL(this.player,this.Ec.element,4);this.Dw=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.G(this,this.Dw);g.HL(this.player,this.Dw.element,4);a=new g.V({D:"button",
Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.WJ()]});g.G(this,a);a.ya(this.Dw.element);this.N(a.element,"click",this.Hh);a=new g.V({D:"button",Ca:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},S:[g.aK()]});g.G(this,a);a.ya(this.Dw.element);this.N(a.element,"click",this.eR);this.N(this.player,"presentingplayerstatechange",this.Dc);this.N(this.player,"appresize",this.rb);this.N(this.player,"fullscreentoggled",this.rb);this.rb()};
g.k.show=function(){this.od=new g.kn(this.Do,null,this);this.od.start();this.Rf||(this.PA(),this.Rf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Ec.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.od&&(this.od.dispose(),this.od=void 0);g.V.prototype.hide.call(this);this.player.Ce()||(this.Rf&&this.Ec.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.od&&(this.od.dispose(),this.od=void 0);g.V.prototype.va.call(this)};
g.k.Hh=function(){this.player.stopVideo();this.player.La("onCloseMiniplayer")};
g.k.eR=function(){this.player.playVideo()};
g.k.Qw=function(a){if(a.target===this.eg.element||a.target===this.In.element)g.R(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.ZI(this.player.sb())?this.player.pauseVideo():this.player.playVideo():this.player.La("onExpandMiniplayer")};
g.k.Xf=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.Ce())};
g.k.Tc=function(){this.Ec.Tb();this.gg.Tb()};
g.k.Do=function(){this.Tc();this.od&&this.od.start()};
g.k.Dc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.rb=function(){g.QO(this.Ec,0,this.player.Xa().getPlayerSize().width,!1);g.HO(this.Ec)};
g.k.wC=function(a){this.player.Ce()&&(0===a?this.hide():this.show())};
g.k.dc=function(){return this.tooltip};
g.k.oe=function(){return!1};
g.k.Ee=function(){return!1};
g.k.Ch=function(){return!1};
g.k.qx=function(){};
g.k.Ll=function(){};
g.k.Rp=function(){};
g.k.Xl=function(){return null};
g.k.gi=function(){return new g.ag(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Lo=function(a,b,c,d,e){var f=0,h=d=0,l=g.yg(a);if(b){c=g.wn(b,"ytp-prev-button")||g.wn(b,"ytp-next-button");var m=g.wn(b,"ytp-play-button"),n=g.wn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.wg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.wn(b,"ytp-miniplayer-button-top-left"),f=g.wg(b,this.element),b=g.yg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Xa().getPlayerSize().width;e=f+(e||0);l=g.ce(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Yj=function(){};
g.k.Aj=function(){return!1};g.v(y4,g.eM);y4.prototype.create=function(){};
y4.prototype.Qh=function(){return!1};
y4.prototype.load=function(){this.player.hideControls();this.i.show()};
y4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.pM.miniplayer=y4;})(_yt_player);
