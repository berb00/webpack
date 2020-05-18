(function (config) {
    var ba = navigator.userAgent.toLowerCase(); var ca = window; var fa = document; var ga = fa.documentElement; function ma (a) { return ba.indexOf(a) !== -1 } var oa = /([a-z0-9]*\d+[a-z0-9]*)/
    function pa () {
        var a = qa; if (!a) return null; var a = a.toLowerCase(); var b = null; if (b = a.match(/angle \((.*)\)/))a = b[1], a = a.replace(/\s*direct3d.*$/, ''); a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, ''); if (a.indexOf('intel') >= 0) {
            b = ['Intel']; a.indexOf('mobile') >= 0 && b.push('Mobile'); (a.indexOf('gma') >= 0 || a.indexOf('graphics media accelerator') >= 0) && b.push('GMA'); if (a.indexOf('haswell') >= 0)b.push('Haswell'); else if (a.indexOf('ivy') >= 0)b.push('HD 4000'); else if (a.indexOf('sandy') >= 0)b.push('HD 3000'); else if (a.indexOf('ironlake') >= 0)b.push('HD')
            else { a.indexOf('hd') >= 0 && b.push('HD'); var c = a.match(oa); c && b.push(c[1].toUpperCase()) } return b = b.join(' ')
        } return a.indexOf('nvidia') >= 0 || a.indexOf('quadro') >= 0 || a.indexOf('geforce') >= 0 || a.indexOf('nvs') >= 0 ? (b = ['nVidia'], a.indexOf('geforce') >= 0 && b.push('geForce'), a.indexOf('quadro') >= 0 && b.push('Quadro'), a.indexOf('nvs') >= 0 && b.push('NVS'), a.match(/\bion\b/) && b.push('ION'), a.match(/gtx\b/) ? b.push('GTX') : a.match(/gts\b/) ? b.push('GTS') : a.match(/gt\b/) ? b.push('GT') : a.match(/gs\b/) ? b.push('GS') : a.match(/ge\b/)
            ? b.push('GE') : a.match(/fx\b/) && b.push('FX'), (c = a.match(oa)) && b.push(c[1].toUpperCase().replace('GS', '')), a.indexOf('titan') >= 0 ? b.push('TITAN') : a.indexOf('ti') >= 0 && b.push('Ti'), b = b.join(' ')) : a.indexOf('amd') >= 0 || a.indexOf('ati') >= 0 || a.indexOf('radeon') >= 0 || a.indexOf('firegl') >= 0 || a.indexOf('firepro') >= 0 ? (b = ['AMD'], a.indexOf('mobil') >= 0 && b.push('Mobility'), c = a.indexOf('radeon'), c >= 0 && b.push('Radeon'), a.indexOf('firepro') >= 0 ? b.push('FirePro') : a.indexOf('firegl') >= 0 && b.push('FireGL'), a.indexOf('hd') >= 0 &&
b.push('HD'), c >= 0 && (a = a.substring(c)), (c = a.match(oa)) && b.push(c[1].toUpperCase().replace('HD', '')), b = b.join(' ')) : a.substring(0, 100)
    }
    var ra = 'microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965'.split(';'); var sa = 'ActiveXObject' in ca; var va = 'devicePixelRatio' in ca && ca.devicePixelRatio > 1 || sa && 'matchMedia' in ca && ca.matchMedia('(min-resolution:144dpi)') && ca.matchMedia('(min-resolution:144dpi)').matches; var wa = ma('windows nt'); var xa = ba.search(/windows nt [1-5]\./) !== -1; var ya = ba.search(/windows nt 5\.[12]/) !== -1; var za = xa && !ya; ma('windows nt 10')
    var Da = ma('windows phone'); var Ea = ma('macintosh'); var Fa = ma('Mb2345Browser'); var Ga = ma('ipad;') || ma('ipad '); var Ja = Ga && va; var Ka = ma('ipod touch;'); var La = ma('iphone;') || ma('iphone '); var Ma = La || Ga || Ka; var Na = Ma && ba.search(/ os [456]_/) !== -1; Ma && ba.search(/ os [4-8]_/); Ma && ba.search(/ os [78]_/); Ma && ma('os 8_'); var Qa = Ma && ma('os 10_'); var Ra = ma('android'); var Sa = 0; Ra && (Sa = parseInt(ba.split('android')[1]) || 0); var Ta = Ra && Sa < 4; Ra && Sa >= 5 || ba.search(/android 4.4/)
    var Ua = Ra ? 'android' : Ma ? 'ios' : wa ? 'windows' : Ea ? 'mac' : 'other'; var Va = sa && !ca.XMLHttpRequest; var Wa = sa && !fa.querySelector; var Xa = sa && !fa.addEventListener; var Ya = sa && ma('msie 9'); var Za = sa && ma('msie 10'); var $a = sa && ma('rv:11'); var ab = Xa || Ya; var bb = ma('edge'); var cb = ma('qtweb'); var db = ma('ucbrowser'); var eb = ma('alipay') || Ra && db; var fb = ma('miuibrowser'); var gb = ma('micromessenger'); var hb = ma('mqqbrowser'); var ib = ma('baidubrowser'); var chrome = (ma('chrome') || ma('crios')) && !gb && !ib && !hb && !bb && !fb; var jb = chrome && ma('chromium'); var kb = chrome && !jb && parseInt(ba.split('chrome/')[1]) > 30
    var lb = ma('firefox'); var mb = lb && parseInt(ba.split('firefox/')[1]) > 27; var nb = (Ea || Ma) && ma('safari') && ma('version/'); var ob = Ea && nb && parseInt(ba.split('version/')[1]) > 7; var pb = Ma && ma('aliapp'); var qb = Ma && (!hb && !db && !gb && !chrome && !lb && !nb || pb && !db); var rb = Ra || Ma || Da || ma('mobile'); var sb = 'ontouchstart' in fa; var tb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints; var ub = ca.navigator && !!ca.navigator.maxTouchPoints; var vb = !sb && (ub || tb); var wb = sb || vb; var xb = (function () {
        if (!rb) return ca.devicePixelRatio || 1; var a = document.getElementsByTagName('meta')
        if (window.parent && window.parent !== window) try { if (window.parent.location.origin === window.location.origin)a = window.parent.document.getElementsByTagName('meta'); else return 1 } catch (b) { return 1 } for (var c = a.length - 1; c >= 0; c -= 1) {
            if (a[c].name === 'viewport') {
                var c = a[c].content; var d; c.indexOf('initial-scale') !== -1 && (d = parseFloat(c.split('initial-scale=')[1])); a = c.indexOf('minimum-scale') !== -1 ? parseFloat(c.split('minimum-scale=')[1]) : 0; c = c.indexOf('maximum-scale') !== -1 ? parseFloat(c.split('maximum-scale=')[1]) : Infinity
                if (d) { if (c >= a) return d > c ? c : d < a ? a : d } else if (c >= a) return a >= 1 ? 1 : Math.min(c, 1); console && console.log && console.log('viewport\u53c2\u6570\u4e0d\u5408\u6cd5'); return null
            }
        }
    }()); var yb = va && (!rb || !!xb && xb >= 1); var zb = sa && 'transition' in ga.style; var Ab = !!fa.createElementNS && !!fa.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect; var Bb = fa.createElement('canvas'); var Cb = !(!Bb || !Bb.getContext); var Db = window.URL || window.webkitURL; var Eb = !sa && !bb && !(db && Ra) && window.Worker && Db && Db.createObjectURL && window.Blob; var Fb = ''; var qa = ''; var Gb = 0
    var Jb = window.forceWebGL ? { alpha: !0, antialias: !0, depth: !0 } : { alpha: !0, antialias: !0, depth: !0, failIfMajorPerformanceCaveat: !0, preserveDrawingBuffer: !0, stencil: !0 }; var Kb = (function () {
        if (!window.forceWebGL && (!Cb || !Eb || qb && pb && !db)) return !1; for (var a = ['webgl', 'experimental-webgl', 'moz-webgl'], b = null, c = 0; c < a.length; c += 1) {
            try { b = Bb.getContext(a[c], Jb) } catch (d) {} if (b) {
                if (b.drawingBufferWidth !== Bb.width || b.drawingBufferHeight !== Bb.height) break; if (window.forceWebGL) return Fb = a[c], Gb = Infinity, !0; if (!b.getShaderPrecisionFormat ||
!b.getParameter || !b.getExtension) break; Gb = b.getParameter(b.MAX_RENDERBUFFER_SIZE); var e = b.getParameter(b.MAX_VIEWPORT_DIMS); if (!e) break; Gb = Math.min(Gb, e[0], e[1]); nb && Ua === 'mac' && (Gb = Math.min(Gb, 4096)); e = Math.max(screen.width, screen.height); yb && (e *= Math.min(2, window.devicePixelRatio || 1)); if (e > Gb) break; if (b.getShaderPrecisionFormat(35632, 36338).precision < 23 || b.getShaderPrecisionFormat(35633, 36338).precision < 23) break; qa = b.getExtension('WEBGL_debug_renderer_info') ? b.getParameter(37446) : null; if ((b = pa()) &&
ra.indexOf(b) !== -1) break; Fb = a[c]; return !0
            }
        } return !1
    }()); var Lb = Kb && (kb || mb || ob) && (Ua === 'mac' || Ua === 'windows') && !rb; var Mb = !Cb || cb || Da || rb && lb || Ya || Na || Ja || Ka || Ta || ma('gt-n710') || za; var Nb = !Mb && !Lb; var Ob = Lb ? 'vw' : Mb ? 'd' : Nb ? 'dv' : 'v'; var Pb = ma('webkit'); var Qb = 'WebKitCSSMatrix' in ca && 'm11' in new window.WebKitCSSMatrix(); var Rb = 'MozPerspective' in ga.style; var Sb = 'OTransition' in ga.style; var Tb = zb || Qb || Rb || Sb; var Ub = void 0 !== config[8] ? config[8] : !0; var Vb = void 0 !== config[9] ? config[9] : !0; var Wb = void 0 !== config[10] ? config[10] : !0; var Xb = void 0 !== config[11] ? config[11]
        : !0; var Yb = void 0 !== config[12] ? config[12] : null; var Zb = !Ab && rb && Cb; var $b = !0; try { if (typeof ca.localStorage === 'undefined')$b = !1; else { var ac = (new Date()).getTime() + ''; ca.localStorage.setItem('_test', ac); ca.localStorage.getItem('_test') !== ac && ($b = !1); ca.localStorage.removeItem('_test') } } catch (bc) { $b = !1 } var cc = parseInt(ba.split('chrome/')[1]); var dc = Ub && Cb
    config.l = { bra: Ga, cra: La, size: La ? 100 : Ra ? 200 : 500, Xy: Ea, nza: wa, jD: Ma, tEa: Qa, Rl: Ra, tla: Ta, i3: eb, lz: Ua, HH: ib, nva: hb, eE: nb, S9: gb, os: sa, wi: Va, av: Wa, C4: Ya, B4: Za, Ae: Xa, E4: ab, fra: $a, Eoa: bb, ira: sa && !$a, eta: Fa, ov: $b, Hi: dc && $b && Xb && !rb && chrome, Kf: Yb, geolocation: rb || sa && !Xa || bb, Dya: db, bL: db && !chrome, chrome: chrome, G2: !0, NQ: lb, ba: rb, qta: rb && Pb, Z5: rb && Qb, pta: rb && ca.opera, Nc: va, kL: xb, ja: yb, Jf: wb, b6: tb, lT: ub, d7: vb, Hma: chrome && cc >= 57, Ima: !rb && chrome && cc >= 64, Q9: Pb, gra: zb, R9: Qb, tpa: Rb, iua: Sb, CH: Tb, Ko: Ab, $k: Cb, qS: Eb, Pz: Wb,
        Ef: Lb, N9: Fb, O9: Jb, CR: qa, cta: Gb, Pza: !1, Kr: Ub && !Mb, p1: Ub ? Ob : 'd', L1: Ub ? Kb : !1, OK: dc, ep: Ub && Kb, FEa: Ub && (!Mb || Kb), eq: Vb && !!ca.WebSocket && !ib, qFa: Zb, rua: Cb || Zb ? 'c' : 'd' }; var ec = config; config = void 0; var fc = { overlay: ['style'], 'AMap.IndoorMap': ['AMap.CustomLayer', 'cvector'], 'AMap.IndoorMap3D': ['Map3D'], 'AMap.MarkerList': ['AMap.TplUtils'], Map3D: ['vectorlayer', 'wgl', 'AMap.CustomLayer', 'rbush'], 'AMap.Heatmap': ['AMap.CustomLayer'], 'AMap.DistrictLayer': ['MVT'], vectorForeign: ['gridmap', 'MVT'], 'AMap.GltfLoader': ['AMap.CustomLayer', 'Map3D'], 'AMap.LabelsLayer': ['rbush', 'promise'] }
    window.AMap ? (window.AMap.version = '1578627706957', window.AMap.fL = { dM: function (a) { a(ec) } }) : window.AMap = { version: '1578627706957', fL: { dM: function (a) { a(ec) } }}; ec.Bm = '1578627706957'; ec.zu = fc
    for (var gc = document.head || document.getElementsByTagName('head')[0], hc = '.vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layers canvas{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 1px 2px rgba(0,0,0,0.1);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left}.amap-menu-outer:hover{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-contentContainer:hover .amap-info-outer{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-content{position:relative;background:#fff;padding:10px 18px 10px 10px;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp-old{overflow:hidden;position:absolute;background-image:url(http://webapi.amap.com/images/arrows.png)}.bottom-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:center 12px;top:100%;margin-top:-9px;left:50%;margin-left:-10px}.bottom-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -46px;top:100%;margin-top:-9px}.bottom-right .amap-info-sharp-old{height:12px;width:13px;top:-1px;background-position:-56px -46px;left:100%;margin-left:-13px;top:100%;margin-top:-9px}.middle-left .amap-info-sharp-old{height:20px;width:12px;background-position:left;top:50%;margin-top:-10px;margin-left:-11px}.center .amap-info-sharp-old{display:none}.middle-right .amap-info-sharp-old{height:20px;margin-right:0;width:12px;background-position:right;left:100%;margin-left:-9px;top:50%;margin-top:-10px}.top-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:top;top:0;margin-top:-3px;left:50%;margin-left:-10px}.top-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -3px;top:0;margin-top:-3px}.top-right .amap-info-sharp-old{height:12px;width:13px;background-position:-56px -3px;left:100%;margin-left:-13px;top:0;margin-top:-3px}.amap-info-sharp{position:absolute}.bottom-center .amap-info-sharp{bottom:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.bottom-center .amap-info-sharp:after{position:absolute;content:"";margin-left:-8px;margin-top:-7px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,0.3);filter:blur(2px);z-index:-1}.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after{border-top:8px solid rgba(0,0,0,0.5)}.bottom-left .amap-info-sharp{border-color:transparent #fff;border-width:0 0 10px 10px;border-style:solid}.bottom-left .amap-info-sharp:after{position:absolute;content:"";margin-left:-10px;border-color:transparent rgba(0,0,0,0.3);border-width:0 0 10px 10px;border-style:solid;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after{border-color:transparent rgba(0,0,0,0.5)}.bottom-left .amap-info-content{border-radius:2px 2px 2px 0}.bottom-right .amap-info-sharp{right:0;border-top:10px solid #fff;border-left:10px solid transparent}.bottom-right .amap-info-sharp:after{position:absolute;margin-top:-9px;margin-left:-10px;content:"";border-top:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after{border-top:10px solid rgba(0,0,0,0.5)}.bottom-right .amap-info-content{border-radius:2px 2px 0 2px}.top-center .amap-info-sharp{top:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}.top-center .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.top-left .amap-info-sharp{left:0;top:0;border-bottom:10px solid #fff;border-right:10px solid transparent}.top-left .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:0;border-bottom:10px solid rgba(0,0,0,0.3);border-right:10px solid transparent;filter:blur(1px);z-index:-1}.top-right .amap-info-sharp{right:0;top:0;border-bottom:10px solid #fff;border-left:10px solid transparent}.top-right .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-10px;border-bottom:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.middle-right .amap-info-sharp{right:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-left:8px solid #fff;border-bottom:8px solid transparent}.middle-right .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:-8px;border-top:8px solid transparent;border-left:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after{border-left:8px solid rgba(0,0,0,0.5)}.middle-left .amap-info-sharp{left:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-right:8px solid #fff;border-bottom:8px solid transparent}.middle-left .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:0;border-top:8px solid transparent;border-right:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after{border-right:8px solid rgba(0,0,0,0.5)}.amap-info-contentContainer.top-left,.amap-info-contentContainer.top-center,.amap-info-contentContainer.top-right{padding-top:8px}.amap-info-contentContainer.bottom-left,.amap-info-contentContainer.bottom-center,.amap-info-contentContainer.bottom-right{padding-bottom:8px}.amap-info-contentContainer.middle-right{padding-right:8px}.amap-info-contentContainer.middle-left{padding-left:8px}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}.amap-info-content-ie8{border:1px solid #9c9c9c}'.replace(/url\((['"]?)(?:\.\.\/)+/g, 'url($1' +
ec[2].split(',')[0] + '/'), ic = null, jc = 0, kc = gc.childNodes.length; jc < kc; jc++) if (gc.childNodes[jc].nodeType === 1) { ic = gc.childNodes[jc]; break } if (hc) if (gc) { var lc = document.createElement('style'); lc.setAttribute('type', 'text/css'); lc.setAttribute('class', 'AMap.style'); lc.styleSheet ? lc.styleSheet.cssText = hc : lc.innerHTML = hc; ic ? gc.insertBefore(lc, ic) : gc.appendChild(lc) } else document.write("<style type='text/css'>" + hc + '</style>'); var g = g || { Ba: { De: 0, Sq: [], zj: {}}}; var A = { o: {}, control: {}, A: {}}; g.aDa = (function (a) { var b = Function; return function () { return (new b('return ' + a))() } }()); g.CLASS_NAME = 'AMap'; g.c = g.BuryPoint = {}; g.c.add = g.BuryPoint.add = function (a, b, c) { a.P4 || a.D || !(a = a.CLASS_NAME) || (a = a.replace('AMap.', ''), g.gA.$o(a, b, c)) }; var mc = { lang: 1, baseRender: 1, overlayRender: 1, viewMode: 1 }
    g.c.va = g.BuryPoint.addOptions = function (a, b) { if (!a.kua) if (b && (b.innerLayer || b.innerOverlay))a.P4 = !0; else { a.kua = !0; var c = a.CLASS_NAME; if (c) { c = c.replace('AMap.', ''); g.gA.$o(c); b = b || {}; for (var d in b)b.hasOwnProperty(d) && (c === 'Map' && d in mc ? g.gA.$o(c, d, b[d]) : g.gA.$o(c, d)) } } }; g.aa = function () {}
    g.aa.extend = g.aa.extend = function (a) {
        function b () {} function c () {
            var a = this.initialize || this.r; a && a.apply(this, arguments); if (!d && this.Gi) {
                a = document.createElement('style'); a.setAttribute('type', 'text/css'); this.CLASS_NAME && a.setAttribute('class', this.CLASS_NAME); this.Gi = this.Gi.replace(/url\((['"]?)(?:\.\.\/)*/g, 'url($1' + g.w.Gb + '/'); a.styleSheet ? a.styleSheet.cssText = this.Gi : a.innerHTML = this.Gi; for (var b = document.head || document.getElementsByTagName('head')[0], c = null, e = 0, f = b.childNodes.length; e < f; e++) {
                    if (b.childNodes[e].nodeType ===
1) { c = b.childNodes[e]; break }
                }c ? b.insertBefore(a, c) : b.appendChild(a)
            }d = !0
        } var d = !1; b.prototype = this.prototype; var e = new b(); e.constructor = c; c.prototype = e; c.prototype.Ah = c.prototype['super'] = function (a) { return a.callee.la.apply(this, a) }; for (var f in this) this.hasOwnProperty(f) && f !== 'prototype' && (c[f] = this[f]); a.G8 && (g.extend(c, a.G8), a.G8 = null); a.ka && (g.extend.apply(null, [e].concat(a.ka)), a.ka = null); a.B && e.B && (a.B = g.extend({}, e.B, a.B)); var h = e.constructor.Fra; var k = {}; if (void 0 !== h) {
            for (f in h) {
                h.hasOwnProperty(f) &&
(k[h[f]] = f)
            }
        } for (f in a) if (Object.prototype.hasOwnProperty.call(a, f)) { var l = f; var m = f; h && k[f] && (m = k[f]); typeof a[l] === 'function' && typeof e[m] === 'function' && (a[l].la = e[m]) }g.extend(e, a); a.toString && (e.toString = a.toString); c.Yc = this.prototype; return c
    }; g.aa.zb = g.aa.include = function (a) { g.extend(this.prototype, a) }
    g.extend = function (a) { var b = Array.prototype.slice.call(arguments, 1); var c; var d; var e; var f; d = 0; for (e = b.length; d < e; d += 1) if (f = b[d] || {}, Object.assign)Object.assign(a, f); else for (c in f)Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]); return a }; g.aa.Qb = function (a) { for (var b in a) if (a.hasOwnProperty(b)) { var c = a[b]; if (typeof c === 'string') this.prototype[b] && (this.prototype[c] = this.prototype[b]); else for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b]) } }; g.gA = { zj: {}, getKey: function (a, b) { a = a || ''; return void 0 !== b && a ? a + '@' + b : a }, $o: function (a, b, c) { this.zj[a] || (this.zj[a] = {}); b = this.getKey(b, c); void 0 == this.zj[a][b] && (this.zj[a][b] = 0) }, send: function () {
        var a = []; var b; for (b in this.zj) if (this.zj.hasOwnProperty(b)) { var c = this.zj[b]; var d = []; var e; for (e in c)c.hasOwnProperty(e) && c[e] == 0 && (d.push(e), c[e] = 1); d.length && a.push(b + '~' + d.join(',')) }a.length && (a = ['type=nfl', 'k=' + g.w.key, 'm=' + (g.l.ba ? 1 : 0), 'pf=' + g.l.lz, 'v=' + g.w.yr, 'branch=JSAPI', 'log=' + a.join('!')], a = g.w.tc + '://webapi.amap.com/count?' +
a.join('&'), new g.fb.wb(a))
    } }; setInterval(function () { g.gA.send() }, 1E4); g.ta = { h: function (a, b, c, d, e) { if (this.ke(a, b, c || this)) return this; var f = this.df = this.df || {}; f[a] = f[a] || []; e ? f[a].unshift({ tb: b, Ve: c || this, wj: d }) : f[a].push({ tb: b, Ve: c || this, wj: d }); return this }, ke: function (a, b, c) { var d = this.df; if (b && c) { if (d && a in d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (d[a][e].tb === b && d[a][e].Ve === c) return !0; return !1 } return d && a in d && d[a] && d[a].length > 0 }, G: function (a, b, c) {
        if (!this.ke(a)) return this; var d = this.df; if (d && d[a]) {
            for (var e = 0; e < d[a].length; e += 1) {
                if (!(d[a][e].tb !== b && b !==
'mv' || c && d[a][e].Ve !== c)) { d[a].splice(e, 1); d[a].length || (d[a] = null); break }
            }
        } return this
    }, QJ: function (a, b) { if (!this.ke(a)) return this; var c = this.df; if (c && c[a]) for (var d = 0; d < c[a].length; d += 1) if (!b || c[a][d].Ve === b) { c[a].splice(d, 1); c[a].length || (c[a] = null); break } return this }, q: function (a, b) {
        if (!this.ke(a)) return this; var c = { type: a }; void 0 !== b && (b instanceof Array ? (c = b.slice(0), c.type = a) : typeof b === 'string' || typeof b === 'number' || typeof b === 'boolean' ? c.value = b : g.a.pJ(b) ? c.value = b : c = g.extend(c, b)); for (var d =
[].concat(this.df[a]), e = 0; e < d.length; e += 1)d[e].tb && (d[e].tb.call(d[e].Ve || this, c), d[e] && d[e].wj && this.df[a] && this.df[a].splice(e, 1)); return this
    }, si: function (a) { a ? this.df && this.df[a] && (this.df[a] = null) : this.df = null; return this } }; g.ta.on || (g.ta.on = g.ta.h); g.ta.off || (g.ta.off = g.ta.G); g.ta.emit || (g.ta.emit = g.ta.q); g.Se = { set: function (a, b, c) { var d = this.Cl; if (d && d[a]) { var d = d[a]; var e = 'set' + this.b4(a); if (d[e]) { var f = !1; !0 == d.D ? f = !0 : d.D = !0; d[e](b, c); f || (d.D = !1); c || this.nK(a, b) } else d.set(a, b, c) } else (this.Ke = this.Ke || {})[a] = b, c || this.nK(a, b) }, b4: (function () { var a = {}; return function (b) { a[b] || (a[b] = b[0].toUpperCase() + b.substr(1)); return a[b] } }()), get: function (a, b, c) {
        var d; var e = this.Cl; d = 'get' + this.b4(a); if (e && e[a]) return c = e[a], c[d] ? (a = !1, !0 == c.D ? a = !0 : c.D = !0, b = c[d](b), a || (c.D = !1), b) : c.get(a, b); if (!c && this[d]) {
            return a = !1, !0 ==
this.D ? a = !0 : this.D = !0, b = this[d](b), a || (this.D = !1), b
        } if (this.Ke && this.Ke.hasOwnProperty(a)) return this.Ke[a]
    }, W: function (a, b, c) { this.Cl || (this.Cl = {}); this.Cl[a] !== b && (b.h(a, function (b) { this.nK(a, b) }, this), this.Cl[a] = b, c || this.nK(a)) }, Ue: function (a, b, c) { for (var d = 0; d < a.length; d += 1) this.W(a[d], b, !c) }, sl: function (a) { this.Cl && this.Cl[a] && (this.Cl[a].G(a, 'mv', this), this.Cl[a] = void 0) }, tl: function () { if (this.Cl) for (var a in this.Cl) this.Cl.hasOwnProperty(a) && this.sl(a) }, nK: function (a, b) {
        var c = a + 'Changed'
        if (this[c]) this[c](b); this.q(a, b)
    }, JEa: function (a, b, c) { var d = new (g.aa.extend({ ka: [g.ta, g.Se] }))(); d.MP = function () { for (var b = !0, e = 0; e < a.length; e += 1)d.get(a[e]) || (b = !1); b && (d.tl(), c()) }; for (var e = 0; e < a.length; e += 1)d.W(a[e], b) }, af: function (a, b) { var c, d; for (c in a)a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b)) } }; g.w = { localStorage: !0, BH: 500, qe: !0, ve: { dark: '#202020', blue_night: '#090d20', test: '#033447', mapv: '#000001', techblue: '#000b11', insight: '#19212a', 'default': '#fcf9f2' }, RJ: { normal: 'normal', dark: 'dark', light: 'light', fresh: 'fresh', test: 'blue', blue_night: 'blue', mapv: 'darkblue', insight: 'grey' }, key: '', tc: 'http', Qd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989], Wd: 'http://restapi.amap.com', Gb: 'http://webapi.amap.com', aK: 'http://gaode.com', rv: 'http://m.amap.com', tD: 'http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]',
        CJ: 'http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3', $T: 'http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]', AK: 'http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8', BK: 'http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11', yE: 'http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]',
        iL: 'http://vector.amap.com', gL: 'vdata.amap.com', tza: 'ws', AI: 'http://a.amap.com/jsapi/static/image/', br: 0 }
    function nc (a) {
        g.aa.zu = a.zu; g.l = a.l; g.Yua = a[7]; a.l = null; g.w.Gb = a[2].split(',')[0]; g.w.Bm = a.Bm; g.w.wJ = a.wJ; var b = g.w.tc = g.w.Gb.split(':')[0]; b === 'https' && (g.w.tza = 'wss', g.w.Wd = g.w.Wd.replace('http', 'https'), g.w.tD = g.w.tD.replace('http', 'https'), g.w.CJ = g.w.CJ.replace('http', 'https'), g.w.$T = g.w.$T.replace('http', 'https'), g.w.AK = g.w.AK.replace('http', 'https'), g.w.BK = g.w.BK.replace('http', 'https'), g.w.yE = g.w.yE.replace('http', 'https'), g.w.iL = g.w.iL.replace('http', 'https'), g.w.AI = g.w.AI.replace('http',
            'https')); var c = window.location.href; c.indexOf('http') !== 0 && window.parent && window.parent !== window && (c = window.parent.location.href); g.w.npa = c; c = encodeURIComponent(c); g.w.iu = c; g.w.Bi = g.w.Gb + '/theme/v1.3/markers/' + (g.l.Nc ? 'b' : 'n'); var d = document.createElement('style'); d.type = 'text/css'; g.w.Ona = 'url(' + b + '://webapi.amap.com/theme/v1.3/openhand.cur),default'; var e = '.amap-container{cursor:' + g.w.Ona + ';}.amap-drag{cursor:url(' + b + '://webapi.amap.com/theme/v1.3/closedhand.cur),default;}'; d.styleSheet ? (b = function () {
            try {
                d.styleSheet.cssText =
e
            } catch (a) {}
        }, d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e)); (document.head || document.getElementsByTagName('head')[0]).appendChild(d); g.w.mode = Number(a[3]); g.w.Qd = a[1]; g.w.key = a[0]; g.w.yr = a[4]; g.w.Kc = a[5]; g.w.dla = a[6]; g.w.AQ = a[13]
    }window.AMap && window.AMap.fL && window.AMap.fL.dM && window.AMap.fL.dM(nc); g.Im = { xu: Math.PI / 180, qva: 180 / Math.PI, yQ: 6378137 }; (function () {
        function a (a) { return typeof a === 'undefined' ? '' : a }g.$h = { nqa: function (b) {
            b.name = a(b.name); var c = [b.y, b.x, b.name]; if (g.l.ba) {
                var d = [g.w.rv + '/callAPP?', 'src=jsapi_q']; d.push('&ios=' + encodeURIComponent('viewMap?sourceApplication=jsapi_q&dev=0&poiname=' + b.name + '&lat=' + b.y + '&lon=' + b.x)); d.push('&android=' + encodeURIComponent('androidamap?action=shorturl&q=' + c.join(',') + '&sourceApplication=jsapi_q')); d.push('&wp=' + encodeURIComponent('viewMap?sourceApplication=jsapi_q&dev=0&poiname=' + b.name + '&lat=' +
b.y + '&lon=' + b.x)); d.push('&mo=' + encodeURIComponent(g.w.rv + '?q=' + c.join(',') + '&callapp=0&sourceApplication=jsapi_q')); return d.join('')
            } return g.w.aK + '?q=' + c.join(',') + '&src=jsapi_q'
        }, P3: function (b) {
            b.name = a(b.name); b.address = a(b.address); b.x = a(b.x); b.y = a(b.y); var c = [b.id, b.y, b.x, b.name, b.address]; if (g.l.ba) {
                var d = [g.w.rv + '/callAPP?', 'src=jsapi_p']; d.push('&ios=' + encodeURIComponent('multiPointShow?sourceApplication=jsapi_p&dev=0&q=' + [b.y, b.x, b.name, b.address, b.id].join() + '&title=' + b.name)); d.push('&android=' +
encodeURIComponent('androidamap?action=shorturl&p=' + c.join(',') + '&sourceApplication=jsapi_p')); d.push('&wp=' + encodeURIComponent('multiPointShow?sourceApplication=jsapi_p&dev=0&q=' + [b.y, b.x, b.name, b.address, b.id].join() + '&title=' + b.name)); return d.join('')
            } return g.w.aK + '?p=' + c.join(',') + '&src=jsapi_p'
        }, N3: function (b) {
            if (g.l.ba) {
                var c = [g.w.rv + '/callAPP?', 'src=jsapi_detail']; c.push('&ios=' + encodeURIComponent('viewPOIDetail?sourceApplication=jsapi_detail&poiid=' + b.id)); b.name = a(b.name); b.x = a(b.x); b.y =
a(b.y); c.push('&android=' + encodeURIComponent('androidamap?action=openFeature&featureName=PoiDetail&poiid=' + b.id + '&poiname=' + b.name + '&x=' + b.x + '&y=' + b.y + '&sourceApplication=jsapi_detail')); c.push('&wp=' + encodeURIComponent('viewPOIDetail?sourceApplication=jsapi_detail&poiid=' + b.id)); c.push('&mo=' + encodeURIComponent(g.w.rv + '/detail/index/poiid=' + b.id + '&sourceApplication=jsapi_detail')); return c.join('')
            } return g.w.aK + '/detail/' + b.id + '?src=jsapi_detail'
        }, uR: function (b) {
            b.sname = a(b.sname); b.sname === '' &&
(b.sname = '\u8d77\u70b9'); b.dname = a(b.dname); b.dname === '' && (b.dname = '\u7ec8\u70b9'); b.mcount = a(b.mcount); b.my = a(b.my); b.mx = a(b.mx); b.mname = a(b.mname); var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname]; if (g.l.ba) {
                var d = [g.w.rv + '/callAPP?', 'src=jsapi_r_' + b.t]; d.push('&ios=' + encodeURIComponent('path?sourceApplication=jsapi_r_' + b.t + '&dev=0&slat=' + b.sy + '&slon=' + b.sx + '&sname=' + b.sname + '&dlat=' + b.dy + '&dlon=' + b.dx + '&dname=' + b.dname + '&m=' + b.m + '&t=' + b.t + '&vian=0&vialons=&vialats=&vianames='))
                var e = b.t; b.t === 0 ? e = 2 : b.t === 2 && (e = 4); d.push('&android=' + encodeURIComponent('androidamap://route?sourceApplication=jsapi_r_' + b.t + '&slat=' + b.sy + '&slon=' + b.sx + '&sname=' + b.sname + '&dlat=' + b.dy + '&dlon=' + b.dx + '&dname=' + b.dname + '&dev=0&' + b.m + '&t=' + e)); d.push('&wp=' + encodeURIComponent('path?sourceApplication=jsapi_r_' + b.t + '&dev=0&slat=' + b.sy + '&slon=' + b.sx + '&sname=' + b.sname + '&dlat=' + b.dy + '&dlon=' + b.dx + '&dname=' + b.dname + '&m=' + b.m + '&t=' + b.t + '&vian=0&vialons=&vialats=&vianames=')); d.push('&mo=' + encodeURIComponent(g.w.rv +
'/?r=' + c.join(',') + '&callapp=0&sourceApplication=jsapi_r_' + b.t)); return d.join('')
            } return g.w.aK + '?r=' + c.join(',') + 'src=jsapi_r_' + b.t
        }, $s: function (a) { g.l.ba ? window.location.href = a : window.open(a) } }
    })(); typeof Object.keys !== 'function' && (Object.keys = function (a) { var b = []; var c; for (c in a)a.hasOwnProperty(c) && b.push(c); return b }); g.a = { CLASS_NAME: 'AMap.Util', PK: [], Ea: 268435456, So: [215440491, 106744817], K9: (function () { var a = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''); return function (b, c) { var d = []; var e; c = c || a.length; if (b) for (e = 0; e < b; e++)d[e] = a[0 | Math.random() * c]; else { var f; d[8] = d[13] = d[18] = d[23] = '-'; d[14] = '4'; for (e = 0; e < 36; e++)d[e] || (f = 0 | 16 * Math.random(), d[e] = a[e === 19 ? f & 3 | 8 : f]) } return d.join('') } }()), PC: { start: function (a) {
        a.startTime = new Date(); a.Ys = []; var b = (new Date()).getTime(); a.id = requestAnimationFrame(function d () {
            var e =
(new Date()).getTime(); a.Ys.push(e - b); b = e; a.id = requestAnimationFrame(d)
        })
    }, cancel: function (a) { a.id && cancelAnimationFrame(a.id) }, stop: function (a) { a.una = new Date() - a.startTime; this.cancel(a); a.PC = Math.round(1E3 / (a.una / (a.Ys.length + 1))) } }, Y3: function (a, b, c) {
        var d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : !1; if (a === b) return b; switch (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'linear') {
            case 'ease':c = g.uw.mI(0.25, 0.1, 0.25, 1)(c); break; case 'ease-in':c = g.uw.mI(0.42, 0, 1, 1)(c); break; case 'ease-out':c =
g.uw.mI(0, 0, 0.58, 1)(c); break; case 'ease-in-out':c = g.uw.mI(0.42, 0, 0.58, 1)(c)
        } var e = a + (b - a) * c; d && (e >>= 0); return e
    }, createObjectURL: function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'text/javascript; charset=utf-8'; var c = null; try { c = (window.URL || window.webkitURL).createObjectURL(new Blob([a], { type: b })) } catch (d) { c = null } return c }, revokeObjectURL: function (a) { (window.URL || window.webkitURL).revokeObjectURL(a) }, XBa: function (a) { for (var b = {}, c = 0, d = a.length; c < d; c++)b[a[c]] = c; return b }, UC: function (a) {
        var b =
{}; if (g.a.bk(a, 'object')) for (var c in a)a.hasOwnProperty(c) && (b[a[c]] = c); return b
    }, rf: function (a, b) { for (var c = 0, d = b.length; c < d; c += 1)a.push(b[c]) }, create: typeof Object.create === 'function' ? Object.create : function (a, b) { function c () {}c.prototype = a; var d = new c(); var e; for (e in b)b.hasOwnProperty(e) && (d[e] = b[e]); return d }, lb: function (a) {
        if (typeof a === 'object' && a !== null) {
            if (a.n6 || this.bk(a, 'Float32Array') || this.bk(a, 'Uint16Array')) return a; var b = this.isArray(a) ? [] : {}; var c; for (c in a)a.hasOwnProperty(c) && (b[c] = g.a.lb(a[c]))
            return b
        } return a
    }, b5: function (a) { return (a | 0) === a }, Rwa: typeof Object.setPrototypeOf === 'function' ? Object.setPrototypeOf : function (a, b) { for (var c in b)a[c] = b[c] }, Oh: function (a) { return typeof a === 'function' }, xla: function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'webgl'; if (!a) return a; for (var c = [], d = 0, e = a.length; d < e; d += 2) { var f = parseInt(a.substr(d, 2), 16); if (b === 'webgl' || b === 'rgba' && d === 0)f = this.mc(f / 255, 3); c.push(f) }c.push(c.shift()); return c }, Fs: function () {}, keys: typeof Object.keys === 'function'
        ? Object.keys : function (a) { var b = []; var c; for (c in a)a.hasOwnProperty(c) && b.push(c); return b }, map: function (a, b) { var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; var d = []; if (a && a.length)g.a.Pb(a, function () { for (var e = arguments.length, f = Array(e), h = 0; h < e; h++)f[h] = arguments[h]; d[f[1]] = b.apply(c || a, f) }); else return a; return d }, forEach: function (a, b) { if (a && a.length) { var c = a.length; if (c > 0 && (b(a[0], 0), c > 1)) { b(a[1], 1); for (var d = 2; d < c; d++)b(a[d], d) } } }, Pb: function (a, b) {
        var c = arguments.length > 2 && void 0 !==
arguments[2] ? arguments[2] : null; if (a && a.length) for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++);
    }, find: function (a, b) { for (var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++) if (typeof b === 'function') { if (b.call(c, a[d], d, a)) return a[d] } else if (a[d] === b) return a[d]; return null }, pJ: function (a) { return typeof HTMLElement === 'object' ? a instanceof HTMLElement : a && typeof a === 'object' && a.nodeType === 1 && typeof a.nodeName === 'string' }, fw: function (a, b) {
        var c = 'ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM'
        var d; var e; (b || 'v5') > 'v5' ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333); var f, h, k, l, m; h = []; k = NaN; l = 0; for (m = a.length; l < m; l++)f = a[l], f = c.indexOf(f), isNaN(k) ? k = f * d : (h.push(k + f - e), k = NaN); return h
    }, zwa: function (a, b) { for (var c = 1, c = b.length > 512 ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) { var f = c * e; var h = f + c; h > b.length && (h = b.length); for (;f < h; f += 1)a(b[f]) } }, vCa: function (a) {
        if (/^rgba\(/.test(a)) return this.Hv(a); var b = a = this.VH(a); a[0] === '#' && (a = a.substring(1), a.length === 3 && (a =
a.replace(/./g, function (a) { return a + a })), b = this.Dr(a.length === 8 ? a : 'ff' + a)); return this.Hv(b)
    }, VH: function () {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''; var a = a.toLowerCase(); var b = { aliceblue: '#f0f8ff', antiquewhite: '#faebd7', aqua: '#00ffff', aquamarine: '#7fffd4', azure: '#f0ffff', beige: '#f5f5dc', bisque: '#ffe4c4', black: '#000000', blanchedalmond: '#ffebcd', blue: '#0000ff', blueviolet: '#8a2be2', brown: '#a52a2a', burlywood: '#deb887', cadetblue: '#5f9ea0', chartreuse: '#7fff00', chocolate: '#d2691e', coral: '#ff7f50',
            cornflowerblue: '#6495ed', cornsilk: '#fff8dc', crimson: '#dc143c', cyan: '#00ffff', darkblue: '#00008b', darkcyan: '#008b8b', darkgoldenrod: '#b8860b', darkgray: '#a9a9a9', darkgreen: '#006400', darkkhaki: '#bdb76b', darkmagenta: '#8b008b', darkolivegreen: '#556b2f', darkorange: '#ff8c00', darkorchid: '#9932cc', darkred: '#8b0000', darksalmon: '#e9967a', darkseagreen: '#8fbc8f', darkslateblue: '#483d8b', darkslategray: '#2f4f4f', darkturquoise: '#00ced1', darkviolet: '#9400d3', deeppink: '#ff1493', deepskyblue: '#00bfff', dimgray: '#696969',
            dodgerblue: '#1e90ff', firebrick: '#b22222', floralwhite: '#fffaf0', forestgreen: '#228b22', fuchsia: '#ff00ff', gainsboro: '#dcdcdc', ghostwhite: '#f8f8ff', gold: '#ffd700', goldenrod: '#daa520', gray: '#808080', green: '#008000', greenyellow: '#adff2f', honeydew: '#f0fff0', hotpink: '#ff69b4', indianred: '#cd5c5c', indigo: '#4b0082', ivory: '#fffff0', khaki: '#f0e68c', lavender: '#e6e6fa', lavenderblush: '#fff0f5', lawngreen: '#7cfc00', lemonchiffon: '#fffacd', lightblue: '#add8e6', lightcoral: '#f08080', lightcyan: '#e0ffff', lightgoldenrodyellow: '#fafad2',
            lightgrey: '#d3d3d3', lightgreen: '#90ee90', lightpink: '#ffb6c1', lightsalmon: '#ffa07a', lightseagreen: '#20b2aa', lightskyblue: '#87cefa', lightslategray: '#778899', lightsteelblue: '#b0c4de', lightyellow: '#ffffe0', lime: '#00ff00', limegreen: '#32cd32', linen: '#faf0e6', magenta: '#ff00ff', maroon: '#800000', mediumaquamarine: '#66cdaa', mediumblue: '#0000cd', mediumorchid: '#ba55d3', mediumpurple: '#9370d8', mediumseagreen: '#3cb371', mediumslateblue: '#7b68ee', mediumspringgreen: '#00fa9a', mediumturquoise: '#48d1cc', mediumvioletred: '#c71585',
            midnightblue: '#191970', mintcream: '#f5fffa', mistyrose: '#ffe4e1', moccasin: '#ffe4b5', navajowhite: '#ffdead', navy: '#000080', oldlace: '#fdf5e6', olive: '#808000', olivedrab: '#6b8e23', orange: '#ffa500', orangered: '#ff4500', orchid: '#da70d6', palegoldenrod: '#eee8aa', palegreen: '#98fb98', paleturquoise: '#afeeee', palevioletred: '#d87093', papayawhip: '#ffefd5', peachpuff: '#ffdab9', peru: '#cd853f', pink: '#ffc0cb', plum: '#dda0dd', powderblue: '#b0e0e6', purple: '#800080', rebeccapurple: '#663399', red: '#ff0000', rosybrown: '#bc8f8f',
            royalblue: '#4169e1', saddlebrown: '#8b4513', salmon: '#fa8072', sandybrown: '#f4a460', seagreen: '#2e8b57', seashell: '#fff5ee', sienna: '#a0522d', silver: '#c0c0c0', skyblue: '#87ceeb', slateblue: '#6a5acd', slategray: '#708090', snow: '#fffafa', springgreen: '#00ff7f', steelblue: '#4682b4', tan: '#d2b48c', teal: '#008080', thistle: '#d8bfd8', tomato: '#ff6347', turquoise: '#40e0d0', violet: '#ee82ee', wheat: '#f5deb3', white: '#ffffff', whitesmoke: '#f5f5f5', yellow: '#ffff00', yellowgreen: '#9acd32' }; return typeof a === 'string' ? b[a.toLowerCase()]
            ? b[a.toLowerCase()] : a : a
    }, nI: function (a, b, c) { var d, e; d = Math.floor(c / 2); e = c - d; d = (1 << d) - 1 << e; e = (1 << e) - 1; return [c, a & d | b & e, b & d | a & e] }, oI: function (a) { return a ? encodeURIComponent(a) : '' }, Rc: function (a, b, c, d) { c = a[b].i[c]; if (typeof c === 'undefined') return null; a = a[b].s; if (typeof c === 'number') return a[c]; for (;typeof c[d.toString()] === 'undefined' && !(d -= 1, d < 3););d = c[d.toString()]; return typeof d === 'number' ? a[d] : null }, Hv: function (a) {
        a = a.split(','); a[0] = parseFloat(a[0].split('rgba(')[1]) / 255; a[1] = parseFloat(a[1]) / 255
        a[2] = parseFloat(a[2]) / 255; a[3] = parseFloat(a[3]); return a
    }, mwa: function (a) { a = a.split(','); a[0] = parseFloat(a[0].split('rgb(')[1]) / 255; a[1] = parseFloat(a[1]) / 255; a[2] = parseFloat(a[2]) / 255; return a }, VT: function (a) { return 'rgba(' + 255 * a[0] + ',' + 255 * a[1] + ',' + 255 * a[2] + ',' + a[3] + ')' }, bna: function (a) { return this.VT(this.Tl(a)) }, Tl: function (a) {
        if (a instanceof Array) return a.length == 3 && a.push(1), a; a = this.VH(a); if (a.indexOf('#') == 0) {
            if (a.length === 4) return a = a.substr(1).replace(/./g, function (a) { return a + a }), this.Qs(a)
            if (a.length == 7) return this.Qs(a.substr(1)); if (a.length == 9) return a = a.substr(1), this.Rk(a.substr(6) + a.substr(0, 6))
        } else { if (a.indexOf('rgb(') == 0) return a = this.mwa(a), a.push(1), a; if (a.indexOf('rgba(') == 0) return this.Hv(a) }
    }, P7: function (a) { return g.a.Dr('ff' + a) }, Dr: function (a) { for (var b = [], c = 0, d = a.length; c < d; c += 2)b.push(parseInt(a.substr(c, 2), 16)); b.push((b.shift() / 255).toFixed(2)); return 'rgba(' + b.join(',') + ')' }, Qs: function (a) { return g.a.Rk('ff' + a) }, Rk: function (a) {
        for (var b = [], c = 0, d = a.length; c < d; c += 2) {
            b.push(parseInt(a.substr(c,
                2), 16) / 255)
        }b.push(b.shift()); return b
    }, sh: function (a) { for (var b in a) if (a.hasOwnProperty(b)) return !1; return !0 }, uo: function (a, b) { b >= 0 && a.splice(b, 1); return a }, nxa: function (a, b) { return a.startsWith ? a.startsWith(b) : a.substr(0, b.length) === b }, hy: function (a, b) { var c = g.a.indexOf(a, b); return g.a.uo(a, c) }, filter: function (a, b, c) { var d = []; g.a.Pb(a, function (a, f) { b.call(c, a, f) && d.push(a) }); return d }, indexOf: function (a, b) {
        if (!a || !a.length) return -1; if (a.indexOf) return a.indexOf(b); for (var c = 0; c < a.length; c += 1) {
            if (a[c] ===
b) return c
        } return -1
    }, KC: function (a, b) { return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) == b ? !0 : !1 }, bind: (function () { var a = !1; Function.prototype.bind && (a = !0); return function (b, c) { var d = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null; return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function () { return b.apply(c, d || arguments) } } }()), Db: function (a, b) { b = b || {}; a.B = g.extend({}, a.B, b); return a.B }, Uma: function (a, b, c) {
        return typeof b === 'function' ? this.sP(a, !0, this.Sla(b,
            c, 1)) : this.sP(a, !0)
    }, sP: function (a, b, c, d, e, f, h) {
        var k; c && (k = e ? c(a, d, e) : c(a)); if (void 0 !== k) return k; if (!this.g5(a)) return a; if (d = this.isArray(a)) { if (k = this.xra(a), !b) return this.zla(a, k) } else { var l = Object.prototype.toString.call(a); var m = l == '[object Function]'; if (l == '[object Object]' || l == '[object Arguments]' || m && !e) { if (k = this.yra(m ? {} : a), !b) return this.Ila(k, a) } else return e ? a : {} }f || (f = []); h || (h = []); for (e = f.length; e--;) if (f[e] == a) return h[e]; f.push(a); h.push(k); (d ? this.Ala : this.Nla)(a, function (d, e) {
            k[e] =
g.a.sP(d, b, c, e, a, f, h)
        }); return k
    }, Ila: function (a, b) { return b == null ? a : this.Lla(b, Object.keys(b), a) }, g5: function (a) { var b = typeof a; return !!a && (b == 'object' || b == 'function') }, CEa: function (a) { return !!a && typeof a === 'object' }, AEa: function (a) { return typeof a === 'number' && a > -1 && a % 1 == 0 && a <= 9007199254740991 }, xra: function (a) { var b = a.length; var c = new a.constructor(b); b && typeof a[0] === 'string' && Object.hasOwnProperty.call(a, 'index') && (c.index = a.index, c.input = a.input); return c }, zla: function (a, b) {
        var c = -1; var d = a.length; for (b ||
(b = Array(d)); ++c < d;)b[c] = a[c]; return b
    }, yra: function (a) { a = a.constructor; typeof a === 'function' && a instanceof a || (a = Object); return new a() }, Sla: function (a, b, c) { if (typeof a !== 'function') return this.$u; if (void 0 === b) return a; switch (c) { case 1:return function (c) { return a.call(b, c) }; case 3:return function (c, e, f) { return a.call(b, c, e, f) }; case 4:return function (c, e, f, h) { return a.call(b, c, e, f, h) }; case 5:return function (c, e, f, h, k) { return a.call(b, c, e, f, h, k) } } return function () { return a.apply(b, arguments) } }, Ala: function (a,
        b) { for (var c = -1, d = a.length; ++c < d && !1 !== b(a[c], c, a););return a }, $u: function (a) { return a }, vna: function (a) { return function (b, c, d) { var e = g.a.Pxa(b); d = d(b); for (var f = d.length, h = a ? f : -1; a ? h-- : ++h < f;) { var k = d[h]; if (!1 === c(e[k], k, e)) break } return b } }, Nla: function (a, b) { return g.a.vna()(a, b, Object.keys) }, Pxa: function (a) { return g.a.g5(a) ? a : Object(a) }, Lla: function (a, b, c) { c || (c = {}); for (var d = -1, e = b.length; ++d < e;) { var f = b[d]; c[f] = a[f] } return c }, U2: function () { return !1 }, join: function (a, b) {
        if (a.join) return a.join(b)
        var c = []; var d; for (d in a)a.hasOwnProperty(d) && c.push(d + '=' + (a[d] || '')); return c.join(b)
    }, B3: function (a, b) { return (a || '') + Math.round(Math.random() * Math.pow(10, b || 6)) }, vb: (function () { var a = 0; return function (b) { b._amap_id || (a += 1, b._amap_id = a); return b._amap_id } }()), Ioa: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=', Xf: Date.now ? function () { return Date.now() } : function () { return (new Date()).getTime() }, rD: function (a, b, c, d) {
        var e; if (d) {
            var f = 0; var h; var k = this.Xf; e = function () {
                h = k(); if (h - f < b) return !1; f = h; a.apply(c,
                    arguments)
            }
        } else { var l, m, n; n = function () { l = !1; m && (e.apply(c, m), m = !1) }; e = function () { l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b)) } } return e
    }, mc: function (a, b) { return a === a << 0 ? a : +parseFloat(a).toFixed(b || 0) }, isArray: Array.isArray ? Array.isArray : function (a) { return this.bk(a, 'array') }, bk: function (a, b) { return Object.prototype.toString.call(a).split(' ')[1].slice(0, -1).toLowerCase() === b.toLowerCase() }, ka: typeof Array.prototype.ka === 'function' ? function (a, b) { return a.ka(b) } : function (a, b) {
        return this.indexOf(a, b) !==
-1
    }, K8: function (a) { var b = 0; if (a.length === 0) return b; for (var c, d = 0, e = a.length; d < e; d += 1)c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b; return b }, ICa: function (a, b) { b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1; for (var c = '', d = 0, e = a.length; d < e; d++)c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535); return c }, Rna: function (a, b) {
        var c = (a + '').slice(-2); var d = (b + '').slice(-2); a = a.slice(0, -2); b = b.slice(0, -2); var e = parseInt((d + c).slice(1)); var f = Math.ceil(e / 250) % 2 ? 1 : -1; var d = parseInt('1' + d) / 3E3; a -= parseInt('1' + c) /
3E3 * f; b -= d * (e / 500 > 1 ? 1 : -1); return new g.U(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
    }, p6: function (a) { return typeof JSON !== 'undefined' && JSON.stringify ? g.a.K8(JSON.stringify(a)) : null }, TGa: function (a, b) { if (b || !a.hasOwnProperty('_amap_hash')) { var c = g.a.p6(a); c && (a._amap_hash = c) } return a._amap_hash }, iepngFix: function (a) {
        function b () { for (var a; c.length;)a = c.shift(), window.DD_belatedPNG.fixPng(a); d.oS = !0 } this.a7 || (this.a7 = [], this.oS = !1); var c = this.a7; var d = this; if (a.tagName.toLowerCase() === 'img')c.push(a)
        else { a = a.getElementsByTagName('*'); for (var e = 0; e < a.length; e += 1)c.push(a[e]) }window.DD_belatedPNG && this.oS ? setTimeout(function () { b() }, 100) : this.oS || g.rb.load('AMap.FixPng', b)
    }, Ia: function (a) { if (g.a.isArray(a)) if (g.a.isArray(a[0])) for (var b = 0; b < a.length; b += 1)a[b] = g.a.Ia(a[b]); else if (b = typeof a[0], b === 'string' || b === 'number') return new g.U(a[0], a[1]); return a }, vza: function (a) { for (var b = [], c = 0, d = a.length; c < d; c += 1)b[c] = [a[c].x, a[c].y]; return b }, tq: function (a) {
        return g.a.isArray(a) ? new g.xd(a[0], a[1])
            : a
    }, lP: function (a) { var b = a.type; var c = a.vU; var d = a.error; a = new g.fb.XMLHttpRequest(a.url, { Bd: void 0 === b ? 'GET' : b, l2: a.data, L7: 'text/plain' }); a.h('complete', function (a) { a = JSON.parse(a.data); c && c(a) }, this); a.h('error', function () { var a = { errmsg: 'REQUEST_FAILED' }; d && d(a) }, this) } };
    (function () {
        function a (a) { window.clearTimeout(a) } function b (a) { var b; var c; var d = ['webkit', 'moz', 'o', 'ms']; for (b = 0; b < d.length && !c; b += 1)c = window[d[b] + a]; return c } function c (a) { var b = +new Date(); var c = Math.max(0, (g.l.Rl ? 50 : 20) - (b - d)); d = b + c; return window.setTimeout(a, c) } var d = 0; var e = window.requestAnimationFrame || b('RequestAnimationFrame') || c; var f = window.cancelAnimationFrame || b('CancelAnimationFrame') || b('CancelRequestAnimationFrame') || a; g.a.Tc = function (a, b, c, d) {
            if (c)b ? g.a.bind(a, b).call(b, d) : a(); else {
                return e(function () {
                    b
                        ? g.a.bind(a, b).call(b, d) : a()
                })
            }
        }; g.a.qi = function (a) { a && f.call(window, a) }
    })(); g.a.TT = window.requestIdleCallback ? function (a, b) { return window.requestIdleCallback(a, b) } : function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; var c = g.a.Xf(); return setTimeout(function () { a({ didTimeout: !1, timeRemaining: function () { return Math.max(0, 70 - (g.a.Xf() - c)) } }) }, b.timeout || 0) }; g.a.KP = window.cancelIdleCallback ? function (a) { return window.cancelIdleCallback(a) } : function (a) { clearTimeout(a) }; (function (a) {
        var b = 1; var c = {}; a.a.Pwa = function (a, b) { if (c[a]) { var f = c[a]; f.kE = 1; f.result = b; if (f.gn) { for (var h = f.gn, k = 0, l = h.length; k < l; k++)h[k].call(null, b); f.gn = null } } }; a.a.Qma = function (a) { c[a] = null }; a.a.dza = function (a, b) { if (c[a]) { var f = c[a]; f.kE > 0 ? b(null, f.result) : (f.gn || (f.gn = []), f.gn.push(b)) } else b(null, a) }; a.a.nR = function (d, e) {
            var f = navigator.geolocation; if (!a.l.jD || document.location.protocol === 'https:') return d(null, f); var h; e && e.eza && (h = 'f' + b++, c[h] = { kE: 0 }); var k = null; var l = !1; e && e.timeout && (k = setTimeout(function () {
                k =
void 0; d({ code: 3, info: 'TIME_OUT', message: 'Get geolocation time out.' }); l = !0
            }, e.timeout)); f.getCurrentPosition(function () { l || (clearTimeout(k), k = void 0, d(null, f)) }, function (b) { l || (clearTimeout(k), k = void 0, b.code === 2 && b.message.indexOf('permission') > 0 ? a.rb.load('AMap.GeoRemoteLoc', function () { d(null, a.H$, h) }) : d(null, f)) }, { timeout: 1E3 }); return h
        }
    })(g); (function (a) { var b = a.aa.extend({ ka: [a.ta], r: function () {} }); a.Ej = new b() })(g); (function (a) {
        var b = a.aa.extend({ ka: [a.ta], r: function () { this.Cfa() }, Cfa: function () { a.Ej && a.Ej.h('vecTileParsed.buildings', this.hfa, this) }, Z4: function (a) { return a.map.cZ }, $pa: function (a) { return this.Z4(a) ? a.map.yN : null }, Mwa: function (a, b) { if (b) { var e = b.map; e && (e.yN ? e.yN.toString() : '') !== (a ? a.toString() : '') && (e.yN = a || [], e.set('display', 0)) } }, j8: function (a, b) { if (b) { var e = b.map; e && e.cZ !== a && (e.cZ = a, e.set('display', 0)) } }, dBa: function () {}, ZY: function (a, b) {
            if (a) {
                for (var e = 0, f = a.length; e < f; e++) {
                    a[e] && b.indexOf(a[e]) < 0 &&
b.push(a[e])
                }
            }
        }, Y2: function (b) { if (!b) return null; b = b.map.ya; for (var d = 0, e = b.length; d < e; d++) if (a.o.ei && b[d] instanceof a.o.ei && b[d].fa && b[d].fa.length && (b[d].fa.indexOf('building') !== -1 || b[d].fa.indexOf('poilabel') !== -1) && b[d].Ka) { var f = b[d].T.get('tiles', null, !0); if (f && f.length) return b[d] } return null }, ypa: function (a) { if (a = this.Y2(a)) { if (a = a.T.get('tiles', null, !0))a = a[0]; else return null; if (!a || !a.length) return null; for (var b = [], e = 0, f = a.length; e < f; e++) { var h = a[e]; h.de && h.de.kf && this.ZY(h.de.kf, b) } return b } },
        hfa: function (a) { if (a.fp && a.fp.de) { var b = a.fp.de.kf; if (b) { var e = []; this.ZY(b, e); this.q('vecTileParsed.builds.found', { I1: e, fp: a.fp }) } } } }); a.Fj = new b()
    })(g); (function (a) {
        function b () { return { checkup: function () { var a = Array.prototype.slice.call(arguments, 0); a.pop()(null, a) } } } function c (a) { return { injectCode: function (b, c) { var d = null; var e = null; try { d = (new Function('self', b))(a) } catch (f) { console.error('error', e), e = f.toString() }c(e, d) } } } function d (a) {
            function b (c, d) {
                function e (a, b, c) { a = { Iz: Date.now(), vz: h, error: a, result: b, oq: !1, Wk: !1 }; if (c) for (var f in c)c.hasOwnProperty(f) && (a[f] = c[f]); d(a) } var f = c.QR; var h = c.vz; var l = c.WP; var m = c.iC; var n = c.yla || []; var p = a._wkHandlers[f]; p ? p[l] ? m
                    ? p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e('Unknown cmd: ' + l) : e('Can not find handler for: ' + f)
            } var c = []; var d = null; var e = null; for (d in this._wkHandlers)d.indexOf('_def_') !== -1 && (e = this._wkHandlers.lFa = d); typeof this._wkHandlers[e].r === 'function' && this._wkHandlers[e].r.call(this._wkHandlers[e]); a.gu = function (a) { c.push.apply(c, a) }; a.addEventListener('message', function (d) {
                function e (b) {
                    if (t) {
                        t.push(b); var d = !!b.oq; d || n++; b = n >= h || b.Wk; if (d || b) {
                            d = t.length > 1 ? { gwa: t } : t[0]; d.Iz = Date.now(); d.AGa = p; if (c.length) {
                                try {
                                    a.postMessage(d,
                                        c)
                                } catch (f) { a.postMessage(d), console.error(f) }c.length = 0
                            } else a.postMessage(d); t.length = 0; b && (e = t = null)
                        }
                    } else console.error('Seemed callback already sent!!', b, b.result.kc)
                } var f = d.data; d = f.dwa || [f]; for (var h = d.length, n = 0, p = Date.now() - f.Iz, t = [], f = 0; f < h; f++)b(d[f], e)
            }, !1)
        } function e (d, h) {
            this.B = a.extend({ batchSend: !0, lazy: !1, libPolyfills: null }, h); this.Cp = []; this.CA = this.B.clientId || 'w' + f++; this.B.onReady && this.TS(this.B.onReady); this.XF = this.iea(); if (typeof d === 'function') { var m = {}; m[this.XF] = d; d = m }d[e.BR] =
c; d[this.iY()] = b; this.nG = d; this.uB(null); this.B.lazy || this.Ux(); a.Qqa || !1 === this.B.hostWorker || (a.Qqa = this); this.$n && this.$n.r && this.$n.r.call(this.$n)
        } var f = 1; var h = 1; a.extend(e, { BR: '_g_', axa: function (a) { if (!a.rba) { var b = []; a.addEventListener('message', function (a) { a = a.data; a = a.gwa || [a]; for (var c = 0, d = a.length; c < d; c++) { var e = a[c]; var f; a: { f = e.vz; for (var h = !e.Wk, k = 0, v = b.length; k < v; k++) { var w = b[k]; if (f === w.vz) { h || b.splice(k, 1); f = w; break a } }f = void 0 }f && f.iC(e.error, e.result, !0) } }, !1); a.fba = b; a.rba = !0 } } }); a.extend(e.prototype,
            { iea: function () { return '_def_' + this.CA }, iY: function () { return '_cln_' + this.CA }, Aja: function () { var a = Array.prototype.slice.call(arguments, 0); this.V_ = a; if (this.zx) { for (var b = 0, c = this.zx.length; b < c; b++) this.zx[b].apply(null, a); this.zx.length = 0 } }, gu: function (a) { this.rja && this.Cp.push.apply(this.Cp, a) }, TS: function (a) { this.V_ ? a.apply(null, this.V_) : (this.zx || (this.zx = []), this.zx.push(a)) }, Ux: function (b) {
                var c = this; if (!c.hX) {
                    c.hX = !0; var d = function (d, e) { d && a.l.qS && console.warn(d); c.Aja.call(c, d, e); b && b(d, e) }
                    a.l.qS ? this.nja(function (a, b) { b ? this.Jfa(b, function (a, c) { a ? d(a) : (this.uB(c), this.hP = c, this.Cp.length = 0, this.$n = null, d(null, { Pla: b, qza: c })) }) : d('Worker start failed!') }) : d('Worker not supported!')
                }
            }, of: function (b, c) {
                var d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.a.Fs; var f = this; b = b || f.XF; var h = {}; if (a.a.bk(c, 'object')) {
                    var q = 'return {'; var r; for (r in c) if (c.hasOwnProperty(r)) var s = c[r]; var q = typeof s === 'function' ? q + ('\n\t' + r + ': ' + s.toString() + ',') : typeof s === 'object' ? q + ('\n\t' + r + ': ' + JSON.stringify(s) +
',') : q + ('\n\t' + r + ': "' + s + '",'); c = new Function(q + '\n}')
                }f.NW(b, c, h); f.uB(null, h); f.TS(function (a) { a ? d(a) : f.hP ? (a = f.nY(c, f.kN(f.CA, b), !0), f.hP.sendMessage(e.BR + ':injectCode', a, function (a, b) { a || f.uB(f.hP, h); d(a, b) })) : d('Worker msger missing!!') })
            }, kN: function (a, b) { if (!a || !b) throw Error('clientId or ns missing!!'); return a + '_' + b }, Hea: function (a, b, c) {
                function d () { var b = Array.prototype.slice.call(arguments, 0); c.sendMessage.apply(c, [a].concat(b)) } var e = this; if (!c) {
                    return function () {
                        var a = b.apply(e.$n, arguments)
                        e.hX || e.B.lazy === 'untilCall' && e.Ux(); return a
                    }
                } d._proxy2Worker = !0; return d
            }, hca: function (a) { var b = {}; var c; for (c in a)a.hasOwnProperty(c) && this.NW(c, a[c], b); return b }, NW: function (a, b, c) { b = b.call(null, !1); for (var d in b)b.hasOwnProperty(d) && (c[a + ':' + d] = b[d], a === this.XF && (c[d] = b[d])) }, uB: function (a, b) {
                if (!b) this.$n || (this.$n = this.hca(this.nG)), b = this.$n; else if (this.$n) for (var c in b)b.hasOwnProperty(c) && (this.$n[c] = b[c]); for (c in b) {
                    if (b.hasOwnProperty(c)) {
                        var d = b[c]; typeof d === 'function' && (this[c] = this.Hea(c,
                            d, a))
                    }
                } this.rja = !!a
            }, nY: function (a, b) {
                var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1; var d = a.toString(); var e; var d = d.replace(/^function([^\(]*)\(/, function () { e = '_prep_h' + h++; return 'function ' + e + '(' }); return e ? '\n\t\t\t\t' + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" +
b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + '.call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t' + e + ' = null;\n\t\t\t' : (console.error('No function match!!'), !1)
            }, nja: function (a) {
                var b = this.CA; var c = []; var d
                for (d in this.nG) if (this.nG.hasOwnProperty(d)) { var f = this.nY(this.nG[d], this.kN(b, d)); f && c.push(f) }b = this.B.libPolyfills || []; d = 0; for (f = b.length; d < f; d++)b[d] = '(' + b[d].toString() + ')(self);'; var h = b.join(';\n') + ';\n' + c.join(';\n'); var c = this.B.hostWorker; var r = this; c && c !== r ? c.TS(function (b, c) { b ? a.call(r, b) : c.qza.sendMessage(e.BR + ':injectCode', h, function (b) { b ? a.call(r, b) : a.call(r, null, c.Pla) }) }) : a.call(r, null, r.Eka(h))
            }, Eka: function (b) {
                b = ['self._wkHandlers={};', b, '(' + d.toString() + ')(self)'].join(''); var c; try {
                    var e =
a.a.createObjectURL(b); c = new Worker(e); setTimeout(function () { a.a.revokeObjectURL(e); e = null }, 3E3)
                } catch (f) { return } return c
            }, ada: function (b) { var c = 1; var d = b.fba; var e = this; var f = !!e.B.batchSend; return function (h) { var r = Array.prototype.slice.call(arguments, 1); var s = typeof r[r.length - 1] === 'function' ? r.pop() : null; var u = e.CA; var v = h.split(':'); var w = e.XF; v.length > 1 && (h = v[1], w = v[0]); r = { Iz: a.a.Xf(), QR: e.kN(u, w), iC: !!s, vz: u + '_' + c++, WP: h, yla: r }; s && d.push({ WP: r.WP, QR: r.QR, Iz: r.Iz, vz: r.vz, iC: s }); f ? e.Lba(b, r) : e.xx(b, r) } }, xx: function (a, b) {
                if (this.Cp.length) {
                    try {
                        a.postMessage(b,
                            this.Cp)
                    } catch (c) { a.postMessage(b), console.error(c) } this.Cp.length = 0
                } else a.postMessage(b)
            }, Lba: function (b, c) { b.eO || (b.eO = []); b.eO.push(c); if (!b.N_) { var d = this; b.N_ = setTimeout(function () { b.N_ = null; var c = b.eO; c.length && (d.xx(b, c.length === 1 ? c[0] : { Iz: a.a.Xf(), dwa: c }), c.length = 0) }, 0) } }, vka: function (a) { var b = this; a.addEventListener('error', function (a) { console.error(a); b.uB(null) }, !1); e.axa(a) }, Jfa: function (a, b) {
                var c = this; c.vka(a); var d = this.ada(a); if (e.Gca)b.call(c, null, { sendMessage: d }); else {
                    e.Gca = !0
                    var f = [c.iY() + ':checkup', Math.random().toFixed(5) + '', Math.round(1E3 * Math.random()), !1, function (a, e) { var h = !0; if (a || !e || e.length !== f.length - 2)h = !1; else for (var k = 0, v = e.length; k < v; k++) if (e[k] !== f[k + 1]) { h = !1; break }h ? b.call(c, null, { sendMessage: d }) : (console.error(a), b.call(c, 'Self checkup failed!!')) }]; d.apply(c, f)
                }
            } }); a.pA = e
    })(g); (function () {
        if (!g.ue) {
            g.ue = { cf: {}, Jy: {}}; var a = g.ue; var b = g.ue.cf; var c = g.a; var d = g.w; b.start = function (b) { a.Jy[b.id] = { K: b.K, time: { N4: c.Xf() }, nma: function () { return c.Xf() - this.time.N4 } } }; b.end = function (b) { var d = a.Jy[b.id]; var e = d.time; var d = c.bind(d.nma, d); var l = b.index; var m = b.key; typeof b.Kc !== 'function' && (b.Kc = function () {}); if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d()); else if (void 0 !== l && void 0 === e[m][l])e[m][l] = d(); else return b.Kc(Error('Duplicate Invoke')); b.Kc(null) }; b.push = function (b) {
                var c = a.Jy[b.id].time
                var d = b.key; var e = b.Pe; typeof b.Kc !== 'function' && (b.Kc = function () {}); if (void 0 === c[d])c[d] = e; else return b.Kc(Error('Duplicate Invoke')); b.Kc(null)
            }; b.send = function (b) {
                var c = d.tc + '://webapi.amap.com/count?'; var k = g.extend(e({ K: a.Jy[b.id].K }), b.params || {}); var l = g.a; b.params && b.params.rs && !b.params.type && (b = a.Jy[b.id].time, delete b.N4, k = g.extend(k, b)); b = []; for (var m in k)l.isArray(k[m]) ? b.push([m, k[m].join('-')].join('=')) : b.push([m, k[m]].join('=')); b.push('jl=' + (d.wJ ? 1 : 0)); if (l.bk(window.performance, 'performance') &&
l.bk(window.performance.getEntriesByType, 'function')) { var n = 0; var p = ['webapi.amap.com', 'jsapi-test.amap.test', 'localhost']; var q = ['/maps', '/css']; l.Pb(window.performance.getEntriesByType('resource'), function (a) { var b = void 0; var c = void 0; a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1); a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1); b && c && l.ka(p, b) && l.ka(q, c) && (n += parseInt(a.responseEnd - a.startTime)) }); n !== 0 && b.push('sd=' + n) } new g.fb.wb(c + b.join('&'))
            }; var e = function (a) {
                var b = g.l; a = g.j.p3(a.K); return { type: 'q',
                    resolution: a.width + '*' + a.height, k: d.key, u: d.iu, iw: b.Ef ? 1 : 0, cw: b.L1 ? 1 : 0, gc: b.CR, m: b.ba ? 1 : 0, cv: b.Kr ? 1 : 0, pf: b.lz, dpr: window.devicePixelRatio, screenwidth: screen.width, scale: b.kL || 0, detect: b.ja ? 1 : 0, v: d.yr }
            }
        }
    })(); (function () {
        if (!g.sL) {
            var a = g.a.UC({ w: 'Conf', extend: 'extend', l: 'Browser', fw: 'uncodeCoords' }); g.sL = function () {
                var b = new g.pA(function () {
                    return { r: function () { this.Yw = { fk: 0, Bv: 0 }; this.Kk = {}; this.fo = []; this.Bp = {}; this.Oj = {}; this.Ct = 0; this.BZ = 500 }, vh: function (a, b) { var e = a.Jd; var f = a.Ce; var h = a.fa[0] === 'building'; (f && e !== this.Yw.Bv && this.Yw.Bv || !f && !h && e !== this.Yw.fk && this.Yw.fk) && this.bla(!!f); f ? this.Yw.Bv = e : h || (this.Yw.fk = e); this.ysa(a, b) }, bla: function (a) {
                        if (a) this.IW(); else if (!a && Object.keys(this.Kk).length) {
                            for (var b in this.Kk) {
                                this.Kk.hasOwnProperty(b) &&
(a = this.Kk[b], a.xt || a.abort())
                            }
                        }
                    }, Zxa: function () { this.Ct > this.BZ && this.GT(Object.keys(this.Oj).slice(0, Math.floor(this.BZ / 2))) }, GT: function (a) { for (var b = 0, e = a.length; b < e; b++) delete this.Oj[a[b]]; this.Ct -= a.length }, fQ: function (a) { var b = a.fa; a = a.Ce; var e = new XMLHttpRequest(); e.wq = ''; e.cE = [(new Date()).getTime() + '_' + Math.random(), a ? 1 : 0, b.join('|')].join('-'); return e }, s4: function (a, b, e) {
                        var f = this; var h = a.Eb; var k = a.Ce; var l = []; var m = h.filter(function (a) { var b = f.Oj[a.key]; if (b) { if (b.tZ) return !0; l.push(a.key) } return !1 }); var n =
!1; if (m.length && ((n = m.length === h.length) || typeof b !== 'function' || b(a, m), !k)) { var p = []; m.forEach(function (a) { a = a.key; p.push.apply(p, f.Oj[a]); delete f.Oj[a] }); this.Ct -= m.length; this.Hs(this.extend({}, a, { ME: p, Jd: a.Jd, bl: n }), e) }!k && l.length && this.GT(l); this.Zxa(); return n
                    }, ysa: function (a, b) {
                        function e (e, f) {
                            var m = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1; if (p.Kk[q.cE] || p.yfa(q)) {
                                var n = e.split('|'); f && (n[0] = f + n[0]); var t = n; var x = ''; n[n.length - 1] && (x = n[n.length - 1], t = n.splice(0, n.length - 1)); if (k) {
                                    for (var n =
0, y = t.length; n < y; n++) { if (t[n]) { var F = JSON.parse(t[n]); if (F.length) { var C = F[0].split('-').slice(0, -1).join('/'); p.Oj[C] ? p.Oj[C].push(F) : (p.Oj[C] = [F], p.Ct++); m && (p.Oj[C].tZ = !0) } } }
                                } else p.Hs(p.extend({}, a, { ME: t, Jd: h, bl: m, hS: !0 }), b); return x
                            }r || (p.Fl(l, b), r = !0)
                        } var f = this; var h = a.Jd; var k = a.Ce; var l = a.Eb; var m = a.url; if (!this.s4(a, function (a, b) { var c = a.Eb; var d = a.url; var e = d.match(/&t=([^&]+)/)[1].split(';'); b.reverse().forEach(function (a) { a = c.indexOf(a); a !== -1 && e.splice(a, 1) }); a.url = d.replace(/&t=[^&]+/, '&t=' + e.join(';')) }, b)) {
                            if (this.HB() &&
(this.IW(), k)) { this.Fl(l, b); return } var n = 0; var p = this; var q = this.fQ(a); k ? this.fo.push(q) : (this.Kk[q.cE] = q, q.Eb = l, q.Kc = b); var r = !1; q.onreadystatechange = function () {
                                if (q.readyState === 4 && q.status === 0)q.xt || (q.xt = !0, f.Fl(l, b), q.onreadystatechange = null, k ? f.$_(q) : delete f.Kk[q.cE]), q = null; else if (!q.xt) {
                                    if (q.readyState === 3) { var h = q.responseText.substring(n); q.wq = e(h, q.wq); n = q.responseText.length } else {
                                        q.readyState === 4 && (h = q.responseText.substring(n), a.Sg && (h += '|'), e(h, q.wq, !0), q.wq = '', k ? f.$_(q) : delete f.Kk[q.cE],
                                        q = null)
                                    }
                                }
                            }; q.onerror = function () {}; q.open('GET', m, !0); q.send(); k && (q.h9 = l.map(function (a) { return a.key }))
                        }
                    }, ED: function (a) {
                        function b (d, p, r) {
                            var s = [r, d, p].join('/'); d = e.filter(function (a) { return a.key === s })[0]; k > 18 && !n && (s += '/' + k); if (d && d.status !== 'loaded' && m.indexOf(t) !== -1) {
                                if (t === 'limg')p = h[1], d.qd = p, typeof p.b === 'string' && (p.b = w.HA(p.b)), r = '', (r = typeof p.u === 'object' ? p.u.url : p.u) && (p.u = { url: r, tk: 'limg-' + d.key + '-' + f }); else {
                                    p = { Ag: d.sa, Ii: s, Oa: h, Bd: t, Sx: a.mu, kD: t === 'building', yi: t === 'poilabel' || t ===
'roadlabel' || t === 'building' && q }; if (t === 'poilabel' || t === 'roadlabel')p.qd = d.qd; t === m[m.length - 1] && (d.status = 'loaded'); l.push(p)
                                }
                            }
                        } var e = a.Eb; var f = a.vS; var h = a.vC; var k = a.Jd; var l = a.Lc; var m = a.fa; var n = a.Ef; var p = a.FR; var q = a.qe; var r = h[0].split('-'); var s = parseInt(r[1]); var u = parseInt(r[2]); var v = parseInt(r[0]); var w = this; var t = r[3]; var r = Math.pow(2, v); v < 10 && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v)); b(s, u, v)
                    }, $_: function (a) { for (var b = this.fo.length - 1; b >= 0; b--) this.fo[b] === a && this.fo.splice(b, 1) }, yfa: function (a) {
                        for (var b = 0, e = this.fo.length; b < e; b++) if (this.fo[b] === a) return !0
                        return !1
                    }, HB: function () { return Object.keys(this.Kk).length ? !0 : !1 }, IW: function () { if (this.fo.length) { for (var a = this.fo.length - 1; a >= 0; a--) { var b = this.fo[a]; b.xt || b.abort(); b.h9 && this.GT(b.h9) } this.fo.length = 0 } }, Fl: function (a, b) { b(null, { Eb: a, h5: !0, disabled: this.disabled }, { Wk: !0 }) } }
                }, { batchSend: !1 }); b.of(null, new Function('\n     return {\n      ' + a.Conf + ': ' + JSON.stringify(g.w) + ',\n      ' + a.extend + ': ' + g.extend.toString() + ',\n      ' + a.Browser + ': ' + JSON.stringify(g.l) + ',\n      ' + a.uncodeCoords + ': ' +
g.a.fw.toString() + '\n     }')); return b
            }
        }
    })(); g.j = { CLASS_NAME: 'DomUtil', get: function (a) { return typeof a === 'string' ? document.getElementById(a) : a }, mD: function (a, b, c) { return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.j.rn(a.parentNode, c) ? g.j.mD(a.parentNode, b) : !1 }, yo: function (a) {
        if (!a) return [0, 0]; var b = a.offsetWidth; var c = a.offsetHeight; b && c || !a.childNodes[0] || (b = b || a.childNodes[0].offsetWidth, c = c || a.childNodes[0].offsetHeight); window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight))
        return [b, c]
    }, WEa: function (a, b) { var c = document.head || document.getElementsByTagName('head')[0]; if (c) { var d = document.createElement('link'); d.setAttribute('rel', 'stylesheet'); d.setAttribute('type', 'text/css'); d.setAttribute('href', a); b ? c.appendChild(d) : c.insertBefore(d, c.firstChild) } else document.write("<link rel='stylesheet' href='" + a + "'/>") }, Rc: function (a, b) {
        var c = a.style[b]; !c && a.currentStyle && (c = a.currentStyle[b]); c && c !== 'auto' || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a,
            null)) ? c[b] : null); c && c !== 'auto' || b !== 'height' || (c = a.clientHeight + 'px'); c && c !== 'auto' || b !== 'width' || (c = a.clientWidth + 'px'); return c === 'auto' ? null : c
    }, XI: function (a) { if (a) return new g.xd(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.os ? document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0) }, p3: function (a) { return new g.xd(a.clientWidth, a.clientHeight) }, AR: function (a) {
        var b = 0; var c = 0; var d = a; var e = document.body; var f = document.documentElement
        var h; var k = g.l.av; do { b += d.offsetTop || 0; c += d.offsetLeft || 0; b += parseInt(g.j.Rc(d, 'borderTopWidth'), 10) || 0; c += parseInt(g.j.Rc(d, 'borderLeftWidth'), 10) || 0; h = g.j.Rc(d, 'position'); if (d.offsetParent === e && h === 'absolute') break; if (h === 'fixed') { b += e.scrollTop || f.scrollTop || 0; c += e.scrollLeft || f.scrollLeft || 0; break }d = d.offsetParent } while (d);d = a; do {
            if (d === e) break; b -= d.scrollTop || 0; c -= d.scrollLeft || 0; g.j.ioa() || !g.l.Q9 && !k || (c += d.scrollWidth - d.clientWidth, k && g.j.Rc(d, 'overflow-y') !== 'hidden' && g.j.Rc(d, 'overflow') !== 'hidden' &&
(c += 17)); d = d.parentNode
        } while (d);return new g.H(c, b)
    }, ioa: function () { g.j.uda || (g.j.uda = !0, g.j.tda = g.j.Rc(document.body, 'direction') === 'ltr'); return g.j.tda }, create: function (a, b, c, d) { a = document.createElement(a); c && (a.className = c); b && (d && d === 'before' ? b.insertBefore(a, b.firstChild) : b.appendChild(a)); return a }, z2: function () { document.selection && document.selection.empty && document.selection.empty(); this.uia || (this.uia = document.onselectstart, document.onselectstart = g.a.U2) }, M2: function () {}, Sxa: function (a,
        b, c) { c ? this.Sa(a, b) : this.ab(a, b) }, rn: function (a, b) { if (a && b) return a.className.length > 0 && RegExp('(^|\\s)' + b + '(\\s|$)').test(a.className) }, Sa: function (a, b) { a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.j.rn(a, b) || (a.className += (a.className ? ' ' : '') + b)) }, Ewa: function (a, b) { a && (a.className = b || '') }, ab: function (a, b) { function c (a, c) { return c === b ? '' : a }a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, '')) }, K3: function (a,
        b) { return b === 1 ? '' : 'opacity' in a.style ? 'opacity:' + b : document.documentMode >= 8 ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : 'filter:alpha(opacity=' + Math.ceil(100 * b) + ')' }, Eq: function (a, b) { if (a.style) if ('opacity' in a.style)a.style.opacity = b; else if ('filter' in a.style) { var c = Math.round(100 * b); a.style.filter = ''; c !== 100 && (a.style.filter = ' progid:DXImageTransform.Microsoft.Alpha(opacity=' + c + ')') } }, zU: function (a) {
        for (var b = document.documentElement.style, c = 0; c < a.length; c +=
1) if (a[c] in b) return a[c]; return !1
    }, Z3: function (a) { var b = g.l.R9; return 'translate' + (b ? '3d' : '') + '(' + a.x + 'px,' + a.y + 'px' + ((b ? ',0' : '') + ')') }, UDa: function (a, b) { return g.j.Z3(b.add(b.Kd(-1 * a))) + (' scale(' + a + ') ') }, n8: function (a, b, c) { a.Wi = b; !c && g.l.CH ? (b = g.j.Z3(b), c = a.style[g.j.ng].split('rotate'), c.length > 1 ? (c[0] = b, a.style[g.j.ng] = c.join('rotate')) : a.style[g.j.ng] = b, g.l.Z5 && (a.style.WebkitBackfaceVisibility = 'hidden')) : (a.style.left = b.x + 'px', a.style.top = b.y + 'px') }, Td: function (a) {
        a.Wi || (a.Wi = a.style.left
            ? new g.H(parseInt(a.style.left), parseInt(a.style.top)) : new g.H(0, 0)); return a.Wi
    }, JGa: function (a, b) { a = a instanceof Array ? a : [a]; for (var c = 0; c < a.length; c += 1)a[c].style.cssText = b }, g8: function (a, b) { b[b.length - 1] !== ';' && (b += ';'); return b.toLowerCase() !== a.style.cssText.replace(/ /g, '').toLowerCase() ? (a.style.cssText = b, !0) : !1 }, Wa: function (a, b) { a = a instanceof Array ? a : [a]; for (var c = 0; c < a.length; c += 1) for (var d in b)b.hasOwnProperty(d) && (a[c].style[d] = b[d]); return this }, YD: function (a) { for (;a.childNodes.length;)a.removeChild(a.childNodes[0]) },
    remove: function (a) { a && a.parentNode && a.parentNode.removeChild(a) }, rotate: function (a, b, c) { var d = g.j.ng; c = c || { x: a.clientWidth / 2, y: a.clientHeight / 2 }; d ? (a.style[d] = '' + (' rotate(' + b + 'deg)'), a.style[g.j.at[d] + '-origin'] = c.x + 'px ' + c.y + 'px') : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = 'progid:DXImageTransform.Microsoft.Matrix()', a.filters.length > 0 && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b))) }, V3: function (a, b, c) {
        var d = g.j.ng; c = c ||
{ x: a.clientWidth / 2, y: a.clientHeight / 2 }; return d ? g.j.at[d] + ':' + ('' + (' rotate(' + b + 'deg)')) + ';' + (g.j.at[d] + '-origin:' + c.x + 'px ' + c.y + 'px') : ''
    }, tm: function (a, b, c) { a.width = b; a.height = c }, getElementsByClassName: function (a, b, c) { b = b || '*'; c = c || document; if (c.getElementsByClassName) return c.getElementsByClassName(a); b = c.getElementsByTagName(b); a = RegExp('(^|\\s)' + a + '(\\s|$)'); c = []; for (var d = 0, e; d < b.length; d++)e = b[d], a.test(e.className) && c.push(e); return c }, fillText: function (a, b) {
        if (a) {
            return void 0 !== a.textContent
                ? a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
        }
    } };
    (function () { var a = g.j.zU(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']); var b; g.extend(g.j, { z2: function () { g.F.h(window, 'selectstart', g.F.preventDefault); if (a) { var c = document.documentElement.style; c[a] !== 'none' && (b = c[a], c[a] = 'none') } }, M2: function () { g.F.G(window, 'selectstart', g.F.preventDefault); a && b !== 'none' && (document.documentElement.style[a] = b, b = 'none') }, aoa: function () { g.F.h(window, 'dragstart', g.F.preventDefault) }, Koa: function () { g.F.G(window, 'dragstart', g.F.preventDefault) } }) })()
    g.j.ng = g.j.zU(['WebkitTransform', 'OTransform', 'MozTransform', 'msTransform', 'transform']); g.j.at = { transform: 'transform', WebkitTransform: '-webkit-transform', OTransform: '-o-transform', MozTransform: '-moz-transform', msTransform: '-ms-transform' }; g.j.sF = g.j.zU(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']); g.j.qAa = g.j.sF === 'webkitTransition' || g.j.sF === 'OTransition' ? g.j.sF + 'End' : 'transitionend'; g.F = { h: function (a, b, c, d) {
        function e (b) { b = b || window.event; b.target = b.target || b.srcElement; return c.call(d || a, b, k) } var f = g.a.vb(a) + '_' + g.a.vb(c) + '_' + g.a.vb(d || a); var h = b + f; if (a[h]) return this; var k = b; g.l.NQ && b === 'mousewheel' && (b = 'DOMMouseScroll'); if (g.l.os && (b === 'mouseover' || b === 'mouseout')) { var l = e; b = b === 'mouseover' ? 'mouseenter' : 'mouseleave'; e = function (a) { l(a) } } if (g.l.d7 && b.indexOf('touch') === 0) return a[h] = e, this.jla(a, b, e, f); g.l.Jf && b === 'dblclick' && this.hla && this.hla(a, e, f); 'addEventListener' in a ? a.addEventListener(b,
            e, !1) : 'attachEvent' in a ? a.attachEvent('on' + b, e) : a['on' + b] = e; a[h] = e; return this
    }, wj: function (a, b, c, d) { var e = this; this.h(a, b, function h (k) { e.G(a, b, h, d); return c.call(d || a, k || window.event, b) }, d) }, G: function (a, b, c, d) {
        c = g.a.vb(a) + '_' + g.a.vb(c) + '_' + g.a.vb(d || a); d = b + c; var e = a[d]; g.l.NQ && b === 'mousewheel' && (b = 'DOMMouseScroll'); !g.l.os || b !== 'mouseover' && b !== 'mouseout' || (b = b === 'mouseover' ? 'mouseenter' : 'mouseleave'); g.l.d7 && b.indexOf('touch') > -1 ? this.Hva(a, b, c) : g.l.Jf && b === 'dblclick' && this.Dva ? this.Dva(a, c)
            : 'removeEventListener' in a ? a.removeEventListener(b, e, !1) : 'detachEvent' in a && b.indexOf('touch') === -1 ? e && a.detachEvent('on' + b, e) : a['on' + b] = null; a[d] = void 0; return this
    }, QGa: function (a, b) { var c = document.createEvent('MouseEvents'); c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null); b.target.dispatchEvent(c) }, ola: function (a) { a.Te = 'info'; g.l.Ae && g.F.stopPropagation(a) }, stopPropagation: function (a) { a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0; return this },
    oxa: function (a) { var b = g.F.ola; g.l.Jf && (g.F.h(a, 'touchstart', b, this), g.F.h(a, 'touchmove', b, this), g.F.h(a, 'touchend', b, this)); g.l.ba || (g.F.h(a, 'mousedown', b, this), g.F.h(a, 'mouseup', b, this), g.F.h(a, 'mousemove', b, this), g.F.h(a, 'mousewheel', b, this)); g.l.lT && (g.F.h(a, 'pointerdown', b, this), g.F.h(a, 'pointerup', b, this), g.F.h(a, 'pointermove', b, this)); g.l.b6 && (g.F.h(a, 'MSPointerDown', b, this), g.F.h(a, 'MSPointerUp', b, this), g.F.h(a, 'MSPointerMove', b, this)) }, preventDefault: function (a) {
        a.preventDefault ? a.preventDefault()
            : a.returnValue = !1; return this
    }, stop: function (a) { return g.F.preventDefault(a).stopPropagation(a) }, Dwa: function (a) { return a && a.getBoundingClientRect ? (a.$L = a.getBoundingClientRect(), a.uW = [a.clientLeft, a.clientTop], !0) : !1 }, Hya: function (a) { a.$L && (a.$L = null, a.uW = null) }, Zoa: function (a, b) { var c = b.$L || b.getBoundingClientRect(); var d = b.uW || [b.clientLeft, b.clientTop]; return new g.H(a.clientX - c.left - d[0], a.clientY - c.top - d[1]) }, gm: function (a, b) {
        if (b && b.getBoundingClientRect) return this.Zoa(a, b); var c = document.body
        var d = document.documentElement; var c = new g.H(g.l.Jf ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), g.l.Jf ? a.pageY : a.clientY + (c.scrollTop || d.scrollTop)); return b ? c.Za(g.j.AR(b)) : c
    }, e5: function (a) { return a.which === 1 || a.button === 0 || a.button === 1 } }; g.extend(g.F, { dO: [], FZ: !1, jla: function (a, b, c, d) { switch (b) { case 'touchstart':return this.mla(a, b, c, d); case 'touchend':return this.kla(a, b, c, d); case 'touchmove':return this.lla(a, b, c, d) } }, Co: function (a) { if (g.l.lT) return a; switch (a) { case 'pointerdown':return 'MSPointerDown'; case 'pointerup':return 'MSPointerUp'; case 'pointercancel':return 'MSPointerCancel'; case 'pointermove':return 'MSPointerMove' } }, mla: function (a, b, c, d) {
        function e (a) {
            for (var b = !1, d = 0; d < f.length; d += 1) {
                if (f[d].pointerId === a.pointerId) {
                    b = !0
                    break
                }
            }b || f.push(a); a.touches = f.slice(); a.changedTouches = [a]; c(a)
        } var f = this.dO; a['_amap_touchstart' + d] = e; a.addEventListener(this.Co('pointerdown'), e, !1); this.FZ || (a = function (a) { for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) { f.splice(b, 1); break } }, document.documentElement.addEventListener(this.Co('pointerup'), a, !1), document.documentElement.addEventListener(this.Co('pointercancel'), a, !1), this.FZ = !0); return this
    }, lla: function (a, b, c, d) {
        function e (a) {
            if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE ||
a.buttons !== 0) { for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) { f[b] = a; break }a.touches = f.slice(); a.changedTouches = [a]; c(a) }
        } var f = this.dO; a['_amap_touchmove' + d] = e; a.addEventListener(this.Co('pointermove'), e, !1); return this
    }, kla: function (a, b, c, d) {
        function e (a) { for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) { f.splice(b, 1); break }a.touches = f.slice(); a.changedTouches = [a]; c(a) } var f = this.dO; a['_amap_touchend' + d] = e; a.addEventListener(this.Co('pointerup'), e, !1); a.addEventListener(this.Co('pointercancel'),
            e, !1); return this
    }, Hva: function (a, b, c) { c = a['_amap_' + b + c]; switch (b) { case 'touchstart':a.removeEventListener(this.Co('pointerdown'), c, !1); break; case 'touchmove':a.removeEventListener(this.Co('pointermove'), c, !1); break; case 'touchend':a.removeEventListener(this.Co('pointerup'), c, !1), a.removeEventListener(this.Co('pointercancel'), c, !1) } return this } }); (function () {
        function a (a) { var b = a.target || a.srcElement; b.EW && f(b.EW); b.EW = e(function () { var c = b.np; if (c && c.mp) for (var d = 0; d < c.mp.length; d += 1)c.mp[d].call(c, a) }) } function b () { var b = this.contentDocument.defaultView; b.np = this.pba; b.addEventListener('resize', a); a.call(b, { target: b }) } var c = document.attachEvent; var d = navigator.userAgent.match(/(Trident|Edge)/); var e = g.a.Tc; var f = g.a.qi; g.extend(g.F, { nla: function (e, f) {
            if (!e.mp) {
                if (e.mp = [], c)e.np = e, e.attachEvent('onresize', a); else {
                    window.getComputedStyle(e).position === 'static' &&
(e.style.position = 'relative'); var l = e.np = document.createElement('object'); l.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;'); l.pba = e; l.onload = b; l.type = 'text/html'; d && e.appendChild(l); l.data = 'about:blank'; d || e.appendChild(l)
                }
            }e.mp.push(f)
        }, eGa: function (b, d) {
            b.mp.splice(b.mp.indexOf(d), 1); b.mp.length || (c ? b.detachEvent('onresize', a) : (b.np.contentDocument.defaultView.removeEventListener('resize',
                a), b.np = !b.removeChild(b.np)))
        }, Rma: function (a) { a.mp = null; if (a.np) { var b = a.np; b.parentNode === a && b.parentNode.removeChild(b); a.np = null } } })
    })(); g.rb = { rta: g.w.Gb + '/maps', zu: g.aa.zu, FS: 0, kz: [], uu: {}, Ug: function (a, b) { function c () { d += 1; d === e.length && b && b() }a.length || b(); for (var d = 0, e = [], f = 0; f < a.length; f += 1) { var h = this.zu[a[f]]; if (h) for (var k = 0; k < h.length; k += 1)e.push(h[k]); e.push(a[f]) } for (f = 0; f < e.length; f += 1) this.JQ(e[f], c) }, nD: function (a) { for (var b = 0; b < a.length; b += 1) if (this.wC(a[b]).status !== 1) return !1; return !0 }, JQ: function (a, b) {
        var c = this.wC(a); if (c.status === 1)b && b(); else {
            b && c.Vx.push(b); try {
                if (g.l.ov && window.localStorage) {
                    var d = window.localStorage['_AMap_' +
a]; d && (d = JSON.parse(d), d.version === g.w.Bm ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem('_AMap_' + a))
                }
            } catch (e) {} if (c.status === 0) { this.lva(a); var f = this; f.FS || (f.FS = 1, window.setTimeout(function () { f.FS = 0; var a = f.rta + '/modules?v=' + g.w.yr + '&key=' + g.w.key + '&m=' + f.kz.join(',') + '&vrs=' + g.w.Bm; g.rb.At(f.kz.join(',')); f.kz = []; c.FK = f.Ksa(a) }, 1)); c.status = -1 }
        }
    }, At: function (a) {
        a = g.w.Wd + '/v3/log/init?' + ['s=rsv3&product=JsModule&key=' + g.w.key, 'm=' + a].join('&')
        new g.fb.wb(a, { callback: 'callback' })
    }, load: function (a, b) { var c = this.zu[a]; if (c) { for (var d = [], e = 0; e < c.length; e += 1)d.push(c[e]); d.push(a); for (var f = 0, c = function () { f += 1; f === d.length && b && b() }, e = 0; e < d.length; e += 1) this.JQ(d[e], c) } else this.JQ(a, b) }, lva: function (a) { for (var b = 0; b < this.kz.length; b += 1) if (this.kz[b] === a) return; this.kz.push(a) }, Dn: function (a, b) { var c = this.wC(a); try { eval(b) } catch (d) { return }c.status = 1; for (var e = 0, f = c.Vx.length; e < f; e += 1)c.Vx[e](); c.Vx = [] }, od: function (a, b) {
        var c = this; c.timeout = setTimeout(function () {
            c.uu[a].status !==
1 ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
        }, 5E3)
    }, wC: function (a) { this.uu[a] || (this.uu[a] = {}, this.uu[a].status = 0, this.uu[a].Vx = []); return this.uu[a] }, remove: function (a) { this.uu[a] = null }, Ksa: function (a) { g.w.mode && (a += '&mode=' + g.w.mode); var b = document.createElement('script'); b.charset = 'utf-8'; a && a.indexOf(g.w.Gb) === 0 && (b.crossOrigin = 'Anonymous'); b.src = a; document.body.appendChild(b); return b } }
    window._jsload_ = function (a, b, c) { var d = g.rb.wC(a); d.FK && g.a.indexOf(document.body.childNodes, d.FK) >= 0 && document.body.removeChild(d.FK); d.FK = null; try { if (!c && window.localStorage && b && b !== '' && g.l.ov) { var e = window.localStorage['_AMap_' + a]; var e = e || '{}'; var e = JSON.parse(e); e.version !== g.w.Bm || e.script ? window.localStorage.setItem('_AMap_' + a, JSON.stringify({ version: g.w.Bm, script: b })) : window.localStorage.setItem('_AMap_' + a, JSON.stringify({ version: g.w.Bm, script: b, css: e.css })) } } catch (f) {}g.rb.Dn(a, b) }
    window._cssload_ = function (a, b, c) {
        try { !c && window.localStorage && b && b !== '' && g.l.ov && window.localStorage.setItem('_AMap_' + a, JSON.stringify({ css: b, version: g.w.Bm })) } catch (d) {} var e = document.createElement('style'); e.type = 'text/css'; g.w.Gb.indexOf('webapi.amap.com') === -1 && (b = b.replace(/webapi.amap.com/gi, g.w.Gb.split('://')[1])); g.w.tc === 'https' && (b = b.replace(/http:/gi, 'https:')); e.styleSheet ? (a = function () { try { e.styleSheet.cssText = b } catch (a) {} }, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b))
        a = document.head || document.getElementsByTagName('head')[0]; a.childNodes.length < 2 ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
    }; (function (a) {
        var b = g.l; if (!g.indexedDB && b.Hi) {
            var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB; var d = a.IDBKeyRange || a.BHa || a.jFa || a.iFa; if (c) {
                var e = g.a; var f = null; a = 'amap-jsapi' + (a.Rza ? '-debug' : ''); var h = g.extend({}, g.ta); var k; try {
                    k = c.open(a), k.onsuccess = function () { f = this.result; h.q('dbReady', { status: 'success' }) }, k.onerror = function () { h.q('dbReady', { status: 'error' }) }, k.onblocked = function () { h.q('dbReady', { status: 'blocked' }) }, k.onupgradeneeded = function (a) {
                        a.currentTarget.result.createObjectStore('tile',
                            { keyPath: 'tileKey' })
                    }
                } catch (l) { b.Hi = !1 } finally { if (!b.Hi) return } var b = function (a) { return function () { try { return a.apply(this, arguments) } catch (b) { var c = arguments[arguments.length - 1]; typeof c === 'function' && setTimeout(function () { c({ code: 4, qI: b }) }, 1) } } }; var m = b(function (a, b) { return f === null ? (setTimeout(function () { b && b({ code: 3 }) }, 1), null) : f.transaction('tile', a).objectStore('tile') }); g.indexedDB = { RB: function (a, b) {
                    f ? typeof a === 'function' && a() : h.h('dbReady', function (c) {
                        c.status === 'success' ? typeof a === 'function' &&
a() : typeof b === 'function' && b({ code: 3, status: status })
                    })
                }, count: b(function (a) { var b = this; var c = arguments; this.RB(function () { b.At.apply(b, c) }, a) }), At: b(function (a) { var b = m('readonly', a).count(); b.onsuccess = function () { a(null, b.result) }; b.onerror = function () { a({ code: 7 }) } }), get: b(function (a, b, c) { var d = this; var e = setTimeout(function () { e && (e = null, c && c({ code: 7 })) }, b.timeout || 1E3); this.RB(function () { d.Vda.call(d, a, function (a, b) { e && (clearTimeout(e), e = null, c(a, b)) }) }, c) }), Vda: b(function (a, b) {
                    var c = m('readonly', b); if (e.isArray(a)) {
                        var d,
                            f; (function () { function e (b) { var f = c.get(a[b]); f.onsuccess = function (a) { a.target.result && (d[b] = a.target.result); h() }; f.onerror = h } function h () { f++; f === a.length && b(null, d) }d = []; for (var k = f = 0, l = a.length; k < l; k++)e(k) })()
                    } else { var h = c.get(a); h.onsuccess = function (a) { b && b(null, a.target.result) }; h.onerror = function () { b && b({ code: 1 }) } }
                }), add: b(function (a, b) { var c = this; var d = arguments; this.RB(function () { c.tba.apply(c, d) }, b) }), tba: b(function (a, b) {
                    function c () { --f === 0 && b(null) }e.isArray(a) || (a = [a]); var d = a.length; var f =
d; var h = 0; var k = Math.ceil(d / 5); var l = setInterval(function () { if (h++ < k) { var e = 5 * h; e > d && (e = d); for (var f = m('readwrite', b), s = 5 * (h - 1); s < e; s++) { var F = f.put(a[s]); F.onsuccess = F.onerror = c } } else clearInterval(l) }, 32)
                }), remove: b(function (a, b) { var c = this; var d = arguments; this.RB(function () { c.Hja.apply(c, d) }, b) }), Hja: b(function (a, b) {
                    var c = m('readwrite', b); e.isArray(a) || (a = [a]); a = a.sort(); c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function (c) {
                        if (c = c.target.result) {
                            if (e.ka(c.value.tileKey, a))c['delete'](); for (var d = -1,
                                f = 0, h = a.length; f < h; f++) if (a[f] > c.value.tileKey) { d = f; break }c['continue'](a[d])
                        } else b && b(null)
                    }
                }), clear: b(function (a) { var b = this; var c = arguments; this.RB(function () { b.MF.apply(b, c) }, a) }), MF: b(function (a) { var b = m('readwrite', a).clear(); b.onsuccess = function () { a && a(null) }; b.onerror = function () { a && a({ code: 2 }) } }) }
            } else b.Hi = !1
        }
    })(window); (function () {
        function a (a) { u.data.keys = u.data.keys.filter(function (b) { return !r.ka(a, b) }).concat(a) } function b (a) { var b = g.w.Bm + '|' + a.Ii.replace(/\//g, ',') + '|' + (a.Ef ? 'w' : 'v') + '|'; var c; c = a.ja; var d = a.qe; c = [c ? 1 : 0, q.ba ? 1 : 0, d ? 1 : 0].join(); return b + c + '|' + m(a.url) } function c () { u.data.keys.length >= u.EL && d() } function d () { var a = u.data.keys.length; var b = Math.floor(a / 2); a > u.EL && (b = Math.floor(a - u.EL / 2)); a = u.data.keys.slice(0, b); u.data.keys = u.data.keys.slice(b + 1); s.remove(a, function (a) { a && a.code === 3 && (q.Hi = !1) }) } function e () {
            var a =
arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Fs; k(); w.setItem(u.key, u.data, !0); f(a)
        } function f (a) { q.Hi && s && s.clear(function (b) { b && b.code === 3 && (q.Hi = !1); a() }) } function h () { k(); var a = w.getItem(u.key, !0); a && (a.hL === u.data.hL && a.l1 === u.data.l1 ? u.data = a : e()) } function k () { u.data = { hL: q.Kf, l1: g.w.Bm, keys: [], Af: {}, pn: {}}; u.ct = {} } function l (a) { a && (u.data.hL = a, q.Kf = a) } function m (a) { var b = 'limg'; /flds=([^&]+)/.test(a) && (b = RegExp.$1); return b } function n (a) {
            if (typeof a === 'object' && a !== null) {
                var b = []
                if (r.isArray(a)) if (Object.keys(a).length == a.length)b = a.map(function (a) { return n(a) }); else { b.push('__arrayObject'); var c = {}; var d; for (d in a)(parseInt(d) < 0 || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d])); b.push(c); b.push(a.map(function (a) { return n(a) })) } else if (r.bk(a, 'Float32Array'))b.push('__Float32Array'), b.push(Array.prototype.slice.call(a)); else if (r.bk(a, 'Uint16Array'))b.push('__Uint16Array'), b.push(Array.prototype.slice.call(a)); else for (d in b = {}, a)a.hasOwnProperty(d) && (b[d] = n(a[d]))
                return b
            } return a
        } function p (a) { if (typeof a === 'object' && a !== null) { var b = {}; if (r.isArray(a)) if (a[0] === '__Float32Array')b = new Float32Array(a[1]); else if (a[0] === '__Uint16Array')b = new Uint16Array(a[1]); else if (a[0] === '__arrayObject') { b = p(a[2]); a = a[1]; for (var c in a)a.hasOwnProperty(c) && (b[c] = a[c]) } else b = a.map(function (a) { return p(a) }); else for (c in a)a.hasOwnProperty(c) && (b[c] = p(a[c])); return b } return a } var q = g.l; var r = g.a; if (!g.Gj && q.Hi) {
            var s = g.indexedDB; var u = { EL: 1E3, key: '_AMap_data.tileKeys' }; var v = []; var w = { getItem: function (a,
                b) { var c = localStorage.getItem(a); if (c && b) { var d; try { d = JSON.parse(c) } catch (e) { d = null }c = d } return c }, setItem: function (a, b, c) { var d = b; c && (d = JSON.stringify(b), d.length / 1024 / 1024 > 1.5 && Object.keys(b.pn).length && (b.pn = {}, d = JSON.stringify(b))); try { localStorage.setItem(a, d) } catch (f) { e() } } }; g.Gj = { clear: e, get: function (c, d) {
                function f (a) {
                    var b = { SR: l, Y5: G, eFa: w, Af: u.data.Af }; a && B.length && (/\|limg/.test(B[0]) ? b.E5 = a.map(function (a) { return JSON.parse(a.data) }).filter(function (a) { return a && a.key }) : b.Lc = h(a)); d && d(null,
                        b); w.length && (l = [], G = [])
                } function h (a) { var b = []; m(c.url).split(',').forEach(function (c) { a.forEach(function (a) { if (a = JSON.parse(a.data[c])) { var d = a.Ag; a.Ag = new g.Xq(d.z, d.x, d.y); a.Ag.S = d.S; b.push(a) } }) }); return b } var k = c.type === 'FS'; if (!q.ov || !(k || q.Hi && u.data.keys.length !== 0)) return d({ code: 1 }); var l = []; var w = []; var B = []; var G = []; var H = []; c.Jxa.forEach(function (a) {
                    var d = !1; var e = b({ Ii: a.key, url: c.url, Ef: c.Ef, ja: c.o.ja, qe: c.qe }); k && (v.push(e), u.data.pn[e] && (l.push(a), B.push(e), H.push({ data: p(u.data.pn[e]), tileKey: e }),
                    d = !0)); d || (q.Hi && r.ka(u.data.keys, e) ? (B.push(e), w.push(a)) : G.push(a))
                }); if (k && w.length === 0 || B.length === 0) return f(H); k && H.length && H.forEach(function (a) { a = r.indexOf(B, a.tileKey); B.splice(a, 1) }); s.get(B, { timeout: c.timeout || 1E3 }, function (b, c) { if (b || c.length !== B.length)b && b.code === 3 ? q.Hi = !1 : e(), G = w, w = [], f(null); else { if (k) for (var d = c.length - 1; d >= 0; d--) { var h = c[d]; h && h.data ? u.data.pn[h.tileKey] = n(h.data) : G.push(w.splice(d, 1)[0]) }l = w; w = []; f(c); a(B) } }); (G.length || w.length) && f(H)
            }, gw: function (a) {
                a.Eb.forEach(function (c) {
                    c =
b({ Ii: c.key, url: a.url, Ef: a.Ef, ja: a.o.ja, qe: a.qe }); u.ct[c] && delete u.ct[c]
                })
            }, set: function (a, c) { a.Kf && a.Kf !== u.data.hL && (l(a.Kf), e(), c && c({ code: 2 })); !a.qd && a.Lc ? a.Lc.forEach(function (c) { var d = b({ Ii: c.Ii, url: a.url, Ef: a.Ef, ja: a.o.ja, qe: a.qe }); if (q.Hi || r.ka(v, d)) { var e = u.ct[d] || {}; e[c.Bd] = c.Oa; u.ct[d] = e } }) : a.data && a.data.forEach(function (c) { var d = b({ Ii: c.key, url: a.url, Ef: a.Ef, ja: a.o.ja, qe: a.qe }); if (q.Hi || r.ka(v, d))u.ct[d] = c.data }); u.data.Af = { 'x-vd-v': a['x-vd-v'], tv: a.tv, bgc: a.bgc } }, flush: (function () {
                var a =
!0; return function () { var b = this; if (a) { if (Object.keys(u.data.pn).length) for (var c in u.data.pn)u.data.pn.hasOwnProperty(c) && !r.ka(v, c) && delete u.data.pn[c]; q.Hi ? s.count(function (a, c) { a || (c !== u.data.keys.length ? (u.data.keys.length && (u.data.keys = []), f(function () { b.bG(!0) })) : b.bG(!0)) }) : b.bG(!0); a = !1 } else b.bG() }
            }()), bG: function () {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1; var b = {}; var d = []; var f = Object.keys(u.ct); var h = []; f.length ? (f.forEach(function (a) {
                    var c = u.ct[a]; a.split('|').pop().split(',').every(function (a) {
                        return a ===
'limg' ? !0 : c && void 0 !== c[a]
                    }) ? (r.ka(u.data.keys, a) || (h.push(a), d.push({ tileKey: a, data: c })), r.ka(v, a) && void 0 === u.data.pn[a] && (u.data.pn[a] = c)) : b[a] = c
                }), d.length && (q.Hi ? s.add(d, function (a) { a ? a.code !== 3 ? e() : q.Hi = !1 : (u.data.keys = u.data.keys.concat(h), w.setItem(u.key, u.data, !0), c()) }) : w.setItem(u.key, u.data, !0)), u.ct = b) : (a && w.setItem(u.key, u.data, !0), c())
            } }; h()
        }
    })(); g.U = g.aa.extend({ r: function (a, b, c) { var d = parseFloat(b); var e = parseFloat(a); if (isNaN(a) || isNaN(b)) throw 'Invalid Object: LngLat(' + e + ', ' + d + ')'; !0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (e < -180 || e === 180 ? 180 : -180)); this.P = d; this.Q = e }, jR: function () { return g.a.mc(this.Q, 6) }, gR: function () { return g.a.mc(this.P, 6) }, add: function (a, b) { return new g.U(this.Q + a.Q, this.P + a.P, b) }, Za: function (a, b) { return new g.U(this.Q - a.Q, this.P - a.P, b) }, hd: function (a, b) { return new g.U(this.Q / a, this.P / a, b) }, Kd: function (a,
        b) { return new g.U(this.Q * a, this.P * a, b) }, ye: function (a) { return g.Yq.distance(this, a) }, offset: function (a, b) { if (isNaN(a) || isNaN(b)) return !1; var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.P * Math.PI / 180)); var c = this.Q + 180 * c / Math.PI; var d = 2 * Math.asin(Math.round(b) / 12756274); return new g.U(c, this.P + 180 * d / Math.PI) }, cb: function (a) { a = g.a.Ia(a); return a instanceof g.U ? Math.max(Math.abs(this.P - a.P), Math.abs(this.Q - a.Q)) <= 1E-9 : !1 }, toString: function () { return g.a.mc(this.Q, 6) + ',' + g.a.mc(this.P, 6) }, rl: function () {
        return [this.Q,
            this.P]
    }, lb: function () { var a = this.controlPoints; var b = new g.U(this.Q, this.P); a && (b.controlPoints = [].concat(a)); return b } })
    g.U.Wpa = function (a, b, c) {
        c = c + 1 || Math.round(Math.abs(a.Q - b.Q)); if (!c || Math.abs(a.Q - b.Q) < 0.001) return []; var d = []; var e = Math.PI; var f = g.Im.xu; var h = g.Im.qva; var k = Math.asin; var l = Math.sqrt; var m = Math.sin; var n = Math.pow; var p = Math.cos; var q = Math.atan2; var r = a.P * f; a = a.Q * f; var s = b.P * f; b = b.Q * f; for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, w, t, f = 1; f < c; f += 1) {
            u = 1 / c * f, v = m((1 - u) * k) / m(k), w = m(u * k) / m(k), u = v * p(r) * p(a) + w * p(s) * p(b), t = v * p(r) * m(a) + w * p(s) * m(b), v = v * m(r) + w * m(s), v = q(v, l(n(u, 2) + n(t, 2))), u = q(t, u), b > a ? (u < a && (u += 2 * e), u > b && (u -= 2 * e))
                : (u > a && (u -= 2 * e), u < b && (u += 2 * e)), d.push(new g.U(u * h, v * h, !0))
        } return d
    }; g.U.Qb({ jR: 'getLng', gR: 'getLat', add: 'add', Za: 'subtract', hd: 'divideBy', Kd: 'multiplyBy', ye: 'distance', offset: 'offset', cb: 'equals', toString: 'toString' }); g.se = g.aa.extend({ r: function () {
        this.CLASS_NAME = 'AMap.Bounds'; var a = null; var b = null; if (arguments.length === 1 && arguments[0] instanceof Array)a = new g.U(arguments[0][0], arguments[0][1], !0), b = new g.U(arguments[0][2], arguments[0][3], !0); else if (arguments.length === 2)a = g.a.Ia(arguments[0]), b = g.a.Ia(arguments[1]); else if (arguments.length === 4)a = new g.U(arguments[0], arguments[1]), b = new g.U(arguments[2], arguments[3]); else if (arguments.length === 0)a = new g.U(-180, -90), b = new g.U(180, 90); else {
            throw 'Invalid Object: Bounds(' +
arguments.join(',') + ')'
        } this.wc = a; this.nc = b
    }, Su: function () { return this.wc }, yy: function () { return this.nc }, Wj: function () { return new g.U(this.wc.Q, this.nc.P, !0) }, Do: function () { return new g.U(this.nc.Q, this.wc.P, !0) }, contains: function (a) { var b = this.wc; var c = this.nc; var d; if (a instanceof g.gp) return this.FU().contains(a); a instanceof g.se ? (d = a.wc, a = a.nc) : d = a = g.a.Ia(a); var e = d.Q; var f = b.Q; var h = a.Q; var k = c.Q; f > k && (k += 360, e < 0 && (e += 360), h < 0 && (h += 360)); return d.P >= b.P && a.P <= c.P && e >= f && h <= k }, Qg: function (a) {
        var b = this.wc; var c = this.nc
        var d = a.wc; a = a.nc; var e = a.Q >= b.Q && d.Q <= c.Q; return a.P >= b.P && d.P <= c.P && e
    }, ui: function () { return new g.U(this.wc.Q > this.nc.Q ? (this.wc.Q + this.nc.Q + 360) / 2 % 360 : (this.wc.Q + this.nc.Q) / 2, (this.wc.P + this.nc.P) / 2) }, extend: function (a) { this.wc.Q = Math.min(this.wc.Q, a.Q); this.wc.P = Math.min(this.wc.P, a.P); this.nc.Q = Math.max(this.nc.Q, a.Q); this.nc.P = Math.max(this.nc.P, a.P); return this }, Gya: function (a) { return this.extend(a.wc).extend(a.nc) }, toString: function () { return this.wc.toString() + ';' + this.nc.toString() }, lb: function () {
        return new g.se(this.wc.lb(),
            this.nc.lb())
    }, cb: function (a) { return a instanceof g.se ? this.wc.cb(a.wc) && this.nc.cb(a.nc) : !1 }, rj: function () { return Math.abs(this.nc.Q - this.wc.Q) }, pj: function () { return Math.abs(this.wc.P - this.nc.P) }, FU: function (a) { var b = [this.Su(), this.Do(), this.yy(), this.Wj()]; a && b.push(this.Su()); return new g.gp(b) }, Nxa: function (a) { return new g.Of(a.hc(this.Wj(), 20), a.hc(this.Do(), 20)) }, cR: function (a, b) { return this.FU(b).cR(a) }, $Q: function (a) { return this.Nxa(a).ui() } })
    g.se.Qb({ Su: 'getSouthWest', yy: 'getNorthEast', Wj: 'getNorthWest', Do: 'getSouthEast', contains: 'contains', Qg: 'intersects', ui: 'getCenter', extend: 'extend' }); g.H = g.aa.extend({ r: function (a, b, c) { if (isNaN(a) || isNaN(b)) throw 'Invalid Object: Pixel(' + a + ', ' + b + ')'; this.x = c ? Math.round(a) : Number(a); this.y = c ? Math.round(b) : Number(b) }, nf: function () { return this.x }, je: function () { return this.y }, add: function (a, b) { return new g.H(this.x + a.x, this.y + a.y, b) }, Za: function (a, b) { return new g.H(this.x - a.x, this.y - a.y, b) }, hd: function (a, b) { return new g.H(this.x / a, this.y / a, b) }, Kd: function (a, b) { return new g.H(this.x * a, this.y * a, b) }, ye: function (a) {
        var b = a.x - this.x; a = a.y - this.y; return Math.sqrt(b *
b + a * a)
    }, floor: function () { return new g.H(Math.floor(this.x), Math.floor(this.y)) }, round: function () { return new g.H(this.x, this.y, !0) }, cb: function (a) { return a instanceof g.H && this.x === a.x && this.y === a.y }, lb: function (a) { return new g.H(this.x, this.y, a) }, toString: function () { return this.x + ',' + this.y }, rl: function () { return [this.x, this.y] }, length: function () { return Math.sqrt(this.x * this.x + this.y * this.y) }, direction: function () {
        var a = this.x; var b = this.y; if (a === 0 && b === 0) return null; if (a === 0) return b > 0 ? 90 : 270; var c = 180 *
Math.atan(b / a) / Math.PI; return a < 0 && b > 0 ? c + 180 : a < 0 && b < 0 ? c + 180 : a > 0 && b < 0 ? c + 360 : c
    }, tu: function (a) { var b = this.length(); var c = a.length(); return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null }, Hna: function (a) { var b = this.length(); var c = a.length(); return b && c ? (this.x * a.x + this.y * a.y) / c / b : null }, toFixed: function (a) { this.x = g.a.mc(this.x, a); this.y = g.a.mc(this.y, a); return this } }); g.H.Qb({ nf: 'getX', je: 'getY', add: 'add', Za: 'subtract', hd: 'divideBy', Kd: 'multiplyBy', ye: 'distance', cb: 'equals', toString: 'toString' }); g.xd = g.aa.extend({ r: function (a, b, c) { if (isNaN(a) || isNaN(b)) throw 'Invalid Object: Size(' + a + ', ' + b + ')'; this.width = c ? Math.round(a) : Number(a); this.height = c ? Math.round(b) : Number(b) }, lb: function () { return new g.xd(this.width, this.height) }, rj: function () { return this.width }, pj: function () { return this.height }, uE: function () { return new g.H(this.rj(), this.pj()) }, contains: function (a) { return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height) }, cb: function (a) {
        return a instanceof g.xd && this.width ===
a.width && this.height === a.height
    }, toString: function () { return this.rj() + ',' + this.pj() } }); g.xd.Qb({ rj: 'getWidth', pj: 'getHeight', toString: 'toString' }); g.gp = g.aa.extend({ r: function (a) { this.CLASS_NAME = 'AMap.ArrayBounds'; a = g.a.Ia(a); this.path = []; for (var b = 0; b < a.length; b += 1) this.path.push([a[b].Q, a[b].P]); this.bounds = this.Qd = a }, contains: function (a, b) { if (a instanceof g.gp) return g.Yq.isRingInRing(a.path, this.path); a instanceof g.H ? a = [a.x, a.y] : a instanceof g.U && (a = [a.Q, a.P]); return g.wd.Rd(a, this.path, b) }, toBounds: function () { for (var a = new g.se(180, 90, -180, -90), b = this.Qd.length - 1; b >= 0; b -= 1)a.extend(this.Qd[b]); return a }, cR: function (a) {
        for (var b = [], c = 0; c <
this.path.length; c += 1)b[c] = a.hc(this.path[c], 20); return b
    }, $Q: function (a) { return this.toBounds().$Q(a) }, ui: function () { return this.toBounds().ui() }, toString: function () { return this.path.join(';') } }); g.gp.Qb({ contains: 'contains', ui: 'getCenter' }); g.u$ = g.gp.extend({ r: function (a) { this.CLASS_NAME = 'AMap.CoordsBounds'; this.path = a; if (a[0] instanceof g.H) { this.path = []; for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y]) } this.bounds = this.Qd = a }, toString: function () { return this.path.join(';') } }); g.Of = g.aa.extend({ r: function () { if (arguments.length === 2) this.fc = arguments[0], this.Ud = arguments[1]; else if (arguments.length === 1 && arguments[0] instanceof Array || arguments.length === 4) { var a = arguments[0] instanceof Array ? arguments[0] : arguments; this.fc = new g.H(a[0], a[1]); this.Ud = new g.H(a[2], a[3]) } else throw 'Invalid Object: PixelBounds(' + arguments.join(',') + ')' }, ui: function (a) { return new g.H((this.fc.x + this.Ud.x) / 2, (this.fc.y + this.Ud.y) / 2, a) }, contains: function (a) {
        var b; a instanceof g.Of ? (b = a.fc, a = a.Ud)
            : b = a; return b.x > this.fc.x && a.x < this.Ud.x && b.y > this.fc.y && a.y < this.Ud.y
    }, rj: function () { return this.Ud.x - this.fc.x }, pj: function () { return this.Ud.y - this.fc.y }, Qg: function (a, b) { b || b === 0 || (b = 20); var c = this.fc; var d = this.Ud; var e = a.fc; var f = a.Ud; var h = f.y >= c.y - b && e.y <= d.y + b; return f.x >= c.x - b && e.x <= d.x + b && h }, toString: function () { return this.fc + ';' + this.Ud }, lb: function () { return new g.Of(this.fc.lb(), this.Ud.lb()) } }); g.I = {}; g.I.zP = function (a) { for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1)g.I.rI(b, a[c]); return b }; g.I.w1 = function (a, b, c) { var d = Math.min.apply(null, a); a = Math.max.apply(null, a); var e = Math.min.apply(null, b); b = Math.max.apply(null, b); return g.I.Dna(d, a, e, b, c) }; g.I.buffer = function (a, b) { a[0] -= b; a[1] -= b; a[2] += b; a[3] += b }; g.I.lb = function (a) { return a.slice() }; g.I.Rd = function (a, b) { return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3] }
    g.I.k2 = function (a, b) { return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3] }; g.I.ACa = function () { return [Infinity, Infinity, -Infinity, -Infinity] }; g.I.Dna = function (a, b, c, d, e) { return typeof e !== 'undefined' ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d] }; g.I.empty = function (a) { a[0] = a[1] = Infinity; a[2] = a[3] = -Infinity; return a }; g.I.cb = function (a, b) { return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3] }
    g.I.extend = function (a, b) { b[0] < a[0] && (a[0] = b[0]); b[2] > a[2] && (a[2] = b[2]); b[1] < a[1] && (a[1] = b[1]); b[3] > a[3] && (a[3] = b[3]) }; g.I.rI = function (a, b) { b[0] < a[0] && (a[0] = b[0]); b[0] > a[2] && (a[2] = b[0]); b[1] < a[1] && (a[1] = b[1]); b[1] > a[3] && (a[3] = b[1]) }; g.I.uDa = function (a) { return [a[0], a[1]] }; g.I.vDa = function (a) { return [a[2], a[1]] }; g.I.ui = function (a) { return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2] }
    g.I.IDa = function (a, b, c, d, e) { var f = b * d[0] / 2; d = b * d[1] / 2; b = Math.cos(c); c = Math.sin(c); f = [-f, -f, f, f]; d = [-d, d, -d, d]; var h, k, l; for (h = 0; h < 4; h += 1)k = f[h], l = d[h], f[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b; return g.I.w1(f, d, e) }; g.I.pj = function (a) { return a[3] - a[1] }; g.I.WDa = function (a) { return [a[2] - a[0], a[3] - a[1]] }; g.I.$Da = function (a) { return [a[0], a[3]] }; g.I.aEa = function (a) { return [a[2], a[3]] }; g.I.rj = function (a) { return a[2] - a[0] }; g.I.Qg = function (a, b) { return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1] }
    g.I.sh = function (a) { return a[2] < a[0] || a[3] < a[1] }; g.I.normalize = function (a, b) { return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])] }; g.I.DGa = function (a, b) { var c = (a[2] - a[0]) / 2 * (b - 1); var d = (a[3] - a[1]) / 2 * (b - 1); a[0] -= c; a[2] += c; a[1] -= d; a[3] += d }; g.I.touches = function (a, b) { return g.I.Qg(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1]) }; g.I.transform = function (a, b, c) { a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]]; b(a, a, 2); return g.I.w1([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c) }; g.se.zb({ r: (function () { var a = g.se.prototype.r; return function () { a.apply(this, arguments); this.southwest = this.wc; this.northeast = this.nc } }()), extend: (function () { var a = g.se.prototype.extend; return function () { a.apply(this, arguments); this.wc.lng = this.wc.Q; this.wc.lat = this.wc.P; this.nc.lng = this.nc.Q; this.nc.lat = this.nc.P; return this } }()) }); g.U.zb({ r: (function () { var a = g.U.prototype.r; return function () { a.apply(this, arguments); this.lng = parseFloat(this.Q.toFixed(6)); this.lat = parseFloat(this.P.toFixed(6)) } }()) }); g.tF = g.aa.extend({ r: function (a, b, c, d) { this.GW = a; this.WW = b; this.jX = c; this.FX = d }, transform: function (a, b) { return this.O0(a.lb(), b) }, O0: function (a, b) { b = b || 1; a.x = b * (this.GW * a.x + this.WW); a.y = b * (this.jX * a.y + this.FX); return a }, Iya: function (a, b) { b = b || 1; return new g.H((a.x / b - this.WW) / this.GW, (a.y / b - this.FX) / this.jX) } }); g.lp = g.aa.extend({ r: function (a) { this.DL = a.MAX_LATITUDE || 85.0511287798; a.project && a.unproject && (this.hc = a.project, this.Wh = a.unproject) } }); g.lp.SV = { hc: function (a) { return new g.H(a.Q, a.P) }, Wh: function (a, b) { return new g.U(a.x, a.y, b) } }
    g.lp.Eaa = new g.lp({ MAX_LATITUDE: 85.0511287798, project: function (a) { var b = Math.PI / 180; var c = this.DL; var c = Math.max(Math.min(c, a.P), -c); a = a.Q * b; b = Math.log(Math.tan(Math.PI / 4 + c * b / 2)); return new g.H(a, b, !1) }, unproject: function (a, b) { var c = 180 / Math.PI; return new g.U(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b) } })
    g.lp.XV = { DL: 85.0840591556, PL: 6356752.3142, OL: 6378137, hc: function (a) { var b = Math.PI / 180; var c = this.DL; var d = Math.max(Math.min(c, a.P), -c); var e = this.OL; var c = this.PL; a = a.Q * b * e; b *= d; e = c / e; e = Math.sqrt(1 - e * e); d = e * Math.sin(b); d = Math.pow((1 - d) / (1 + d), 0.5 * e); b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d; b = -c * Math.log(b); return new g.H(a, b) }, Wh: function (a, b) {
        for (var c = 180 / Math.PI, d = this.OL, e = this.PL, f = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; Math.abs(l) > 1E-7 && (k -= 1, k > 0);) {
            l = d * Math.sin(h),
            l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l
        } return new g.U(f, h * c, b)
    } }; g.Zh = {}; g.Zh.YE = { sD: function (a, b) { var c = this.Ff.hc(a); var d = this.scale(b); return this.zE.O0(c, d) }, QD: function (a, b, c) { b = this.scale(b); a = this.zE.Iya(a, b); return this.Ff.Wh(a, c) }, hc: function (a) { return this.Ff.hc(a) }, scale: function (a) { return 256 << a }, Xp: function (a) { return 12756274 * Math.PI / (256 * Math.pow(2, a)) } }; g.Zh.tL = g.extend({}, g.Zh.YE, { code: 'EPSG:3857', Ff: g.lp.Eaa, zE: new g.tF(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5), hc: function (a) { return this.Ff.hc(a).Kd(6378137) } })
    g.Zh.CV = g.extend({}, g.Zh.YE, { code: 'EPSG:3395', Ff: g.lp.XV, zE: (function () { var a = g.lp.XV; return new g.tF(0.5 / (Math.PI * a.OL), 0.5, -0.5 / (Math.PI * a.PL), 0.5) }()) }); g.Zh.DV = g.extend({}, g.Zh.YE, { code: 'EPSG:4326', Ff: g.lp.SV, zE: new g.tF(1 / 360, 0.5, -1 / 360, 0.25) }); g.Zh.mAa = g.extend({}, g.Zh.YE, { Ff: g.lp.SV, zE: new g.tF(1, 0, 1, 0) }); g.BJ = { hc: function (a, b) { a = g.a.Ia(a); return this.ij.sD(a, b || this.get('zoom')) }, Wh: function (a, b, c) { return this.ij.QD(a, b || this.get('zoom'), c) }, wsa: function (a, b) { return this.hc(a, b) }, rDa: function (a, b) { return this.Wh(a, b) }, Kp: function (a, b, c) { g.c.add(this, 'containerToLngLat'); var d = this.get('size').uE().hd(2); if (a.cb(d) && !c) return this.get('center'); a = this.ug(a, b, c); return this.Vd(a) }, xs: function (a, b) {
        g.c.add(this, 'lngLatToContainer'); var c = 0; b && (c = typeof b === 'string' ? Math.round(parseFloat(b) / 0.14929107086948487)
            : b); var d = this.Ab(a); return this.ce(d, null, c)
    }, Ab: function (a) { a = g.a.Ia(a); return this.hc(a, 20) }, Vd: function (a) { return a ? this.Wh(a, 20) : a }, vJ: function (a) { a = g.a.Ia(a); return this.hc(a, 20).Za(g.a.ac) }, F5: function (a, b) { b || (a = g.a.Ia(a)); var c = []; var d = !1; void 0 === a[0].length && (d = !0); for (var c = [], e = 0, f = a.length; e < f; e += 1) if (d) { var h = this.hc(a[e], 20).Za(g.a.ac); c[e] = [h.x, h.y] } else c[e] = this.F5(a[e], !0); return c }, upa: function (a) { return this.Wh(a.add(g.a.ac), 20) }, sDa: function (a) { return this.ce(a.add(g.a.ac)) }, ADa: function (a) {
        return a
            ? this.hc(this.get('center'), a) : this.get('centerPixel')
    }, VAa: function (a) { return (new g.H(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).hd(0.14929107086948487) }, H6: function (a) { return new g.H(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y) } }; A.wF = g.aa.extend({ ka: [g.ta, g.Se], B: { center: new g.U(116.397128, 39.916527), zoom: 13, rotation: 0, crs: 'EPSG3857' }, r: function (a) { this.CLASS_NAME = 'AMap.View2D'; g.c.va(this, a); a = a || {}; a.center && (a.center = g.a.Ia(a.center)); this.B = a } }); A.Lb = g.aa.extend({ ka: [g.ta, g.Se, g.BJ], B: { features: 'all', showLabel: !0, dragEnable: !0, showIndoorMap: g.l.ba ? !1 : !0, lang: 'zh_cn', keyboardEnable: !0, doubleClickZoom: !0, gridMapForeign: !1, scrollWheel: !0, zoomEnable: !0, jogEnable: !0, continuousZoomEnable: !0, resizeEnable: !1, animateEnable: !0, rotateEnable: !1, labelzIndex: 99, showFog: !0, touchZoom: !0, zooms: [3, g.l.ba ? g.l.Nc ? 19 : 20 : 18], defaultCursor: '', limitBounds: null, logoUrl: g.w.Gb + '/theme/v1.3/logo@1x.png', logoUrlRetina: g.w.Gb + '/theme/v1.3/logo@2x.png', copyright: '\x3c!--v1.4.15--\x3e &copy ' +
(new Date()).getFullYear() + ' AutoNavi ', isHotspot: !g.l.ba, baseRender: g.l.p1, overlayRender: g.l.rua, mapStyle: 'amap://styles/normal', showBuildingBlock: g.l.Ef, crs: 'EPSG3857', rotation: 0, pitch: 0, yaw: 0, scale: 1, center: new g.U(116.397128, 39.916527), zoom: 13, detectRetina: !0, pitchEnable: !1, buildingAnimation: !1, maxPitch: 83, turboMode: !0, preloadMode: !1, workerMode: !0 }, poiOnAMAP: function (a) { g.c.add(this, 'poiOnAMAP'); var b = {}; var c = g.a.Ia(a.location); b.id = a.id; c && (b.y = c.P, b.x = c.Q); b.name = a.name; b.address = a.address; g.$h.$s(g.$h.P3(b)) },
    detailOnAMAP: function (a) { g.c.add(this, 'detailOnAMAP'); var b = {}; var c = g.a.Ia(a.location); b.id = a.id; c && (b.y = c.P, b.x = c.Q); b.name = a.name; g.$h.$s(g.$h.N3(b)) }, setLabelzIndex: function (a) { g.c.add(this, 'setLabelzIndex'); return this.set('labelzIndex', a) }, getLabelzIndex: function () { return this.get('labelzIndex', null, !0) }, setMapStyle: function (a) {
        g.c.add(this, 'setMapStyle'); a = a || 'normal'; a.indexOf('amap://styles/') === -1 ? g.w.RJ[a] ? this.set('styleUrl', 'amap://styles/' + g.w.RJ[a]) : this.set('styleUrl', '') : this.set('styleUrl',
            a); this.GS()
    }, getMapStyle: function () { return this.get('styleUrl') || this.get('mapStyle', null, !0) }, getFeatures: function () { return this.get('features', null, !0) }, setFeatures: function (a) { g.c.add(this, 'setFeatures'); this.set('features', a) }, setLang: function (a) { g.c.add(this, 'setLang', a); a !== 'en' && a !== 'zh_cn' && a !== 'zh_en' || a === this.get('lang', null, !0) || (this.set('lang', a), this.$j && this.$j.N7(this)) }, getLang: function () { return this.get('lang', null, !0) }, setCity: function (a, b) {
        g.c.add(this, 'setCity'); var c = this;
        (new g.fb.wb(g.w.Wd + '/v3/config/district?subdistrict=0&extensions=all&key=' + g.w.key + '&s=rsv3&output=json&keywords=' + a, { callback: 'callback' })).h('complete', function (d) {
            var e = d.districts; if (e && e.length) {
                d = e[0]; /[^\w]+/.test(a) && (e = g.a.find(e, function (b) { return b.name === a })) && e !== d && (d = e); try {
                    var f = d.center.split(','); var h; switch (d.level) { case 'city':h = 10; break; case 'province':h = 7; break; case 'district':h = 12; break; case 'country':h = 4; break; default:h = 12 }d.name.indexOf('\u5e02') !== -1 && (h = 10); c.D = !0; c.setZoomAndCenter(h,
                        new g.U(f[0], f[1]), !0); c.D = !1; b && b.call(c, f, h)
                } catch (k) {}
            }
        }, this)
    }, getScreenShot: function (a, b) { g.c.add(this, 'getScreenShot'); return this.map && g.l.$k ? this.map.X3(a, b) : '' }, getCity: function (a, b) {
        g.c.add(this, 'getCity'); var c = g.w.Wd + '/v3/geocode/regeo?&extensions=&&key=' + g.w.key + '&s=rsv3&output=json&location=' + (b || this.get('center', null, !0)); (new g.fb.wb(c, { callback: 'callback', Qx: !0, Bd: 'REGEO' })).h('complete', function (b) {
            b = b.regeocode.addressComponent; a({ province: b.province, city: b.city instanceof Array
                ? '' : b.city, citycode: b.citycode instanceof Array ? '' : b.citycode, district: b.district instanceof Array ? '' : b.district })
        }, this)
    }, r: function (a, b) {
        b = g.extend({}, b); this.id = g.a.vb(this); this.CLASS_NAME = 'AMap.Map'; g.c.va(this, b); this.D = !0; b = b || {}; b.mapStyle && g.w.RJ[b.mapStyle] && (b.mapStyle = 'amap://styles/' + g.w.RJ[b.mapStyle]); b.mapStyle && b.mapStyle.indexOf('amap://styles/') !== -1 ? (b.styleUrl = b.mapStyle, delete b.mapStyle) : b.styleUrl = 'amap://styles/normal'; b.bgColor && g.extend(g.w.ve, b.bgColor); b.maxPitch && (b.maxPitch =
Math.min(this.B.maxPitch, Math.max(b.maxPitch, 0))); b.pitch && (b.pitch = Math.min(b.maxPitch || this.B.maxPitch, Math.max(b.pitch, 0))); b.viewMode !== '3D' && (b.pitch = 0); g.w.Hr = b.buildingColor || null; b.mobile && (g.l.ba = !0); b.noPoi && (g.w.Cta = !0); b.editEnable = g.w.AQ ? b.editEnable : !1; b.editEnable && (b.nolimg = !0, b.showIndoorMap = !1); void 0 !== b.nolimg && (b.nolimg_param = b.nolimg); b.viewMode === '3D' && g.l.ep && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock; this.eq = !!b.enableSocket; b.server && (g.w.Wd = b.server); b.vdataUrl &&
(g.w.gL = b.vdataUrl); if (typeof a === 'string') { if (a = this.K = document.getElementById(a), !a) return } else a.tagName === 'DIV' && (this.K = a); if (this.K.kM) { var c = this.K.kM; c.D = !0; c.destroy(); c.D = !1 }g.ue.cf.start({ id: this.id, K: this.K }); this.K.kM = this; var c = this.B.zooms[1]; var d = this.B.zooms[0]; b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.ba ? g.l.Nc ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c]; b.forceZooms && (b.zooms = b.forceZooms); b = this.xma(b); c = this.getSize(!0); b.center && (b.center =
g.a.Ia(b.center)); this.ij = this.Ena(b.crs || this.B.crs, b.center || this.B.center); this.Ela(c, b); d = b.lang; d !== 'en' && d !== 'zh_cn' && d !== 'zh_en' && (b.lang = 'zh_cn'); g.j.ng || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1); b.preloadMode = !1; g.l.qS ? !1 !== b.workerMode && (A.Lb.At ? (b.workerMode = !1, A.Lb.At++) : A.Lb.At = 1) : b.workerMode = !1; b.layers && (d = b.layers, delete b.layers, b.layers = d); b.baseRender = b.baseRender || g.l.p1; b.forceVector && (b.baseRender = g.l.Ef ? 'vw' : 'v'); b.disableVector && (b.baseRender = 'd'); b.renderer === 'dom' && (b.baseRender =
'd', b.overlayRender = 'd'); c = Math.max(c.width, c.height); g.l.ja && (c *= Math.min(2, window.devicePixelRatio || 1)); b.baseRender === 'vw' && c > g.l.cta && (b.baseRender = 'dv'); b.baseRender == 'd' && b.vectorMapForeign && (b.vectorMapForeign = !1, b.gridMapForeign = !0); b.vectorMapForeign && !g.l.Kr && (b.vectorMapForeign = !1); if (b.gridMapForeign || b.vectorMapForeign)b.turboMode = !1; g.a.Db(this, b); this.af(this.B); 'rotateEnable' in b || b.viewMode !== '3D' || !g.l.ep || this.set('rotateEnable', !0); 'pitchEnable' in b || b.viewMode !== '3D' || !g.l.ep ||
this.set('pitchEnable', !0); c = this.get('zoom', null, !0); this.get('viewMode') === '3D' && g.l.ep || (c = Math.round(c)); d = this.get('zooms'); c > d[1] ? c = d[1] : c < d[0] && (c = d[0]); this.set('zoom', c); this.B.zoom = c; this.Gna(this.B); this.NP(); var e = this; this.af({ overlays: [], infos: {}, controls: {}}); var f = []; (b.gridMapForeign || b.vectorMapForeign) && f.push('gridmap'); b.vectorMapForeign && g.l.Kr && f.push('MVT', 'vectorForeign'); b.forceVector && (f.push('vectorlayer'), f.push('overlay')); b.viewMode === '3D' && g.l.ep && f.push('Map3D'); g.l.$k &&
(b.vectorMapForeign || b.mapStyle || b.nolimg) && f.push('labelcanvas'); b.editEnable && f.push('edit'); g.l.$k && (f.push('AMap.IndoorMap'), f.indexOf('Map3D') !== -1 && f.push('AMap.IndoorMap3D')); this.ja = g.l.ja && this.get('detectRetina'); this.H9(b); this.D = !1; e = this; this.Osa(function () {
            e.Isa(function () {
                g.rb.Ug(f, function () {
                    if (!e.get('destroy')) {
                        var b = new g.Lb(a, e); if (g.Ne) { var c = (g.Ne[0] || g.Ne).stylemaps['50001:1'].browserStyle[0].split('&'); b.FF = [c[0], c[4]] }b.Ue('zoom center centerCoords rotation yaw pitch resolution'.split(' '),
                            e.view, !0); b.h('complete', function () { var a = {}; b.J && b.J.type == '3D' && (a.canvas = b.J.Ma, a.gl = b.J.ea); this.q('complete', a) }, e, !0); b.ij = e.ij; e.Ue(['zoomSlow', 'panTo', 'targetLevel', 'render'], b); b.Ue(['size', 'bounds'], e); e.loaded = !0; e.q('coreMapCreated'); g.l.$k && e.fla(); e.D = !0; e.view.type === '3D' && (e.AmbientLight || (e.AmbientLight = new g.Cw.rV([1, 1, 1], 0.9)), e.DirectionLight || (e.DirectionLight = new g.Cw.BV([0, -1, 1], [1, 1, 1], 0.1))); e.D = !1
                    }
                })
            })
        })
    }, Isa: function (a) {
        try {
            var b = this.get('vectorMapForeign'); if (b) {
                if (g.zJ =
0, g.Yy = 0, typeof b === 'string' && b.substr(0, 6) == 'style_') {
                    var c = this; g.w.f3 = g.w.AI + b + '/'; var d = new g.fb.XMLHttpRequest(g.w.tc + '://a.amap.com/jsapi/static/json/web_' + b + '.json', {}); d.h('complete', function (b) { if (b && b.data) { b = JSON.parse(b.data); var d = b.hole; if (d) { g.Xx = []; for (var e = 0, l = d.length; e < l; e += 2) { var m = c.hc([d[e + 1], d[e]], 16); g.Xx.push([m.x >> 0, m.y >> 0]) } } if (d = b.style)g.Wsa = d.layers; b.zoomlevel && (g.zJ = b.zoomlevel[0], g.Yy = b.zoomlevel[1]) } else c.set('vectorMapForeign', !1); a() }, this); d.h('error', function () {
                        c.set('vectorMapForeign',
                            !1); a()
                    }, this); setTimeout(function () {}, 500)
                } else g.w.f3 = g.w.AI + 'style_local/', a()
            } else a()
        } catch (e) { this.set('vectorMapForeign', !1), a() }
    }, Osa: function (a) {
        function b () { var a = AMap.anole; var b = {}; var c = []; var d = 0; var e = void 0; if (a) { for (var a = a.replace(/\?/g, ':').replace(/\//g, '&'), e = a.split(''), a = 0, f = e.length; a < f; a++) void 0 === b[e[a]] && (b[e[a]] = d++, c.push(e[a])); c.reverse(); d = 0; for (a = e.length; d < a; d++)e[d] = c[b[e[d]]]; a = e.join(''); g.Ne = eval(a); delete AMap.anole } } if (g.l.Ae || g.Ne)a(); else {
            var c = !0; if (window.__AMapStyleSource) {
                c =
!1
            } else try { var d = JSON.parse(localStorage.getItem('_AMap_anole')); d && d.version === g.l.Kf && d.script ? eval(d.script) : c = !1 } catch (e) { c = !1 } if (c)b(), a(); else {
                var f = document.createElement('script'); f.CCa = 'anonymous'; f.id = 'amap_anole_js'; f.src = window.__AMapStyleSource || g.w.tc + '://vdata.amap.com/style?v=' + g.w.yr + '&key=' + g.w.key + '&mapstyle=normal'; c = document; (c.head || c.getElementsByTagName('head')[0] || c.body).appendChild(f); f.onload = function () {
                    if (!g.Ne) {
                        if (!window.__AMapStyleSource && g.l.ov) {
                            try {
                                var c = { version: g.l.Kf,
                                    script: "AMap['anole']=" + JSON.stringify(AMap.anole) }; localStorage.setItem('_AMap_anole', JSON.stringify(c))
                            } catch (d) {}
                        }b()
                    }a(); f.parentNode.removeChild(f)
                }
            }
        }
    }, getViewMode_: function () { return this.view.type }, Apa: function (a, b, c) { var d = new g.U(a[4], a[5]); if ((a = new g.se(a[0], a[1], a[2], a[3])) && b && d) { for (var e = c[1]; e > c[0]; e -= 1) { var f = this.hc(a.wc, e); var h = this.hc(a.nc, e); if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height) break } return [d, Math.min(e + 1, c[1])] } return null }, Ela: function (a, b) {
        if (!(b && b.center &&
b.zoom)) { var c = this.Apa(g.w.Qd, a, b.zooms); b.center = b.center || c && c[0]; typeof b.zoom !== 'number' && (b.zoom = c && c[1]) }
    }, Ena: function (a, b) { if (b instanceof g.U) { if (typeof a === 'string') { switch (a) { case 'EPSG3395':return g.Zh.CV; case 'EPSG4326':return g.Zh.DV } return g.Zh.tL } if (a.pointToLngLat && a.lngLatToPoint) return { QD: a.pointToLngLat, sD: a.lngLatToPoint, Xp: a.getResolution }; throw 'illegal projection' } var c = this.get('zoom', null, !0); return { Xp: function (a) { return Math.pow(2, c - a) }, sD: function () {}, QD: function () {} } },
    Zwa: function (a, b) {
        this.Mw && this.Mw.stop(); var c = ['pitch', 'rotation', 'zoom', 'center']; var d = {}; var e = !1; var f; for (f in a) if (a.hasOwnProperty(f) && g.a.indexOf(c, f) !== -1) { var h = this.get(f); void 0 === h || h === a[f] || h.cb && h.cb(a[f]) || (d[f] = this.get(f), e = !0) }e && (this.Mw = new g.Dj(d, a, null, 0), this.Mw.transition = function (a, c, e) { e /= b || 300; if (e >= 1) return c; var f = {}; var h; for (h in d)d.hasOwnProperty(h) && (f[h] = h === 'center' ? a[h].add(c[h].Za(a[h]).Kd(e)) : a[h] + (c[h] - a[h]) * e); return f }, this.Mw.rq = function (b) {
            b === a && (this.Mw.stop(), this.Cd =
null); for (var c in b)b.hasOwnProperty(c) && (c === 'center' ? (this.D = !0, this.setCenter(b[c], !0), this.D = !1) : this.set(c, b[c]))
        }, this.Mw.Dn(this))
    }, Gna: function (a) { this.get('viewMode') === '3D' && g.l.ep ? (this.set('baseRender', 'vw'), this.view = new g.ZL(this, a)) : this.view = new g.wF(this, a); this.H4() }, H4: function () { this.yi = this.get('baseRender') > 'd' || this.view.type === '3D' }, featuresChanged: function () { this.NP() }, GS: function () { this.NP(); this.lU() }, lU: function () {
        if (this.mm) {
            var a = !0; this.D = !0; var b = this.getMapStyle()
            if (!1 === this.get('showIndoorMap') || b !== 'normal' && b !== 'amap://styles/normal')a = !1; for (var b = this.getLayers(), c = this.D = !1, d = 0, e = b.length; d < e; d += 1) { if (b.hasOwnProperty(d) && b[d].CLASS_NAME === 'AMap.IndoorMap' && b[d] !== this.mm) { a = !1; break }b[d].dq && b[d].dq() && b[d].get('visible') && (c = !0) }(a = c && a) && this.mm.getMap() !== this && this.mm.setMap(this); this.mm.set('visible', a)
        }
    }, NP: function () {
        this.H9(); if (this.view && this.view.type !== '3D') {
            var a = this.get('baseRender'); if (a && !(a > 'dv')) {
                var b = this.get('features', null,
                    !0); this.D = !0; var c = this.getMapStyle(); this.D = !1; var d = this.get('editEnable'); b && c && (g.l.Kr && (d || b !== 'all' || c !== 'normal' && c !== 'amap://styles/normal') ? (this.set('baseRender', 'v'), this.bT = a) : this.bT && (this.set('baseRender', this.bT), this.bT = null)); this.H4()
            }
        }
    }, fla: function () { var a = this; !a.mm && a.K && (a.indoorMap = a.mm = new AMap.IndoorMap({ innerLayer: !0 }), a.lU(), g.a.Tc(function () { a.q('indoor_create', { target: a }); a.set('display') })) }, layersChanged: function () {
        this.D = !0; var a = this.getLayers(); this.LJ = this.D =
!1; for (var b = 0; b < a.length; b += 1)a[b].D = !0, a[b].getMap() !== this && a[b].setMap(this), a[b].D = !1, a[b].LJ && (this.LJ = !0); this.lU()
    }, getMapNumber: function () { if (this.map) return this.map.XD() }, getAdcode: function () { g.c.add(this, 'getAdcode'); return g.w.dla }, H9: function () {
        function a () {
            var a = !1; g.a.Pb(b.B.layers, function (b) { if (b.qG && b.constructor === A.o.ob) return a = !0, !1 }, b); if (g.a.ka(['d', 'dv'], b.get('baseRender')) || !g.a.ka(['normal', 'amap://styles/normal'], b.get('mapStyle')) || b.get('viewMode') === '3D' && b.get('pitch') > 0 ||
b.get('features') !== 'all' || b.get('editEnable') || !b.get('turboMode'))a = !1; return a
        } if (!this.r7) {
            var b = this; var c = a(); var d = this.get('rasterLayer'); if (d && !c) this.lk(d), this.set('rasterLayer', void 0); else if (!d && c && this.get('layers')) {
                d = new A.o.ob({ innerLayer: !0, map: this, kk: !0, zIndex: 0 }); d.Qra = !0; if (this.B.layers) { var e = null; g.a.Pb(this.B.layers, function (a) { a instanceof A.o.ob && a.qG && (e === null || a.get('zIndex') > e.get('zIndex')) && (e = a) }); e && d.Ue(['zIndex', 'opacity', 'zooms', 'visible'], e) } this.set('rasterLayer',
                    d, !0)
            }
        }
    }, xma: function (a) {
        a || (a = {}); if (a.hasOwnProperty('defaultLayer')) { a.layers = [a.defaultLayer]; var b = a.defaultLayer; b.oP = !0; this.set('defaultLayer', b, !0) }a.layers && a.layers.length !== 0 ? this.set('defaultLayer', a.layers[0], !0) : (b = new A.o.ob({ innerLayer: !0 }), a.layers = [b], b.oP = !0, this.set('defaultLayer', b, !0)); if (b = a.view)b.B.rotation && (a.rotation = b.B.rotation), b.B.center && (a.center = b.B.center), b.B.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.B.zoom))), b.B.crs && (a.crs = b.B.crs); a.level && !a.zoom &&
(a.zoom = a.level); return a
    }, setLimitBounds: function (a) { g.c.add(this, 'setLimitBounds'); a instanceof g.gp && (a.D = !0, a = a.toBounds(), a.D = !1); a instanceof g.se || (a = null); this.set('limitBounds', a) }, clearLimitBounds: function () { g.c.add(this, 'clearLimitBounds'); this.set('limitBounds', null) }, getLimitBounds: function () { g.c.add(this, 'getLimitBounds'); return this.get('limitBounds', null, !0) }, AH: function (a) {
        var b = this.get('layers'); if (!(g.a.indexOf(b, a) >= 0) && (b.push(a), this.set('layers', b), a.pG)) {
            a = a.getLayers(); for (var b =
-1, c = a.length; ++b < c;) { var d = a[b]; d instanceof A.o.Vb || !d.setMap || d.setMap(this) }
        }
    }, ZB: function (a) { var b = this.get('overlays'); g.a.indexOf(b, a) >= 0 || (a instanceof A.A.Jn ? (this.get('overlays').push(a), this.$x instanceof A.A.Jn && (this.$x.D = !0, this.$x.close(), this.$x.D = !1), this.$x = a, this.set('contextmenu', a, !0)) : (a instanceof A.A.Re && (this.nm instanceof A.A.Re && this.qz(this.nm), this.nm = a), this.get('overlays').push(a)), this.q('overlays')) }, lk: function (a) {
        var b = this.get('layers'); var c = g.a.indexOf(b, a); if (c !==
-1) { if (a.pG) for (c = b.length; --c > -1;) { var d = b[c]; d.EA !== a && d !== a || b.splice(c, 1) } else a.EA && a.EA.jka(a), b = g.a.uo(b, c); this.set('layers', b); if (a.pG) for (a = a.getLayers(), b = -1, c = a.length; ++b < c;)d = a[b], d instanceof A.o.Vb || !d.setMap || d.setMap() }
    }, getZooms: function () { return this.get('zooms', null, !0) }, setZooms: function (a) { return this.set('zooms', a, !0) }, qz: function (a) { var b = this.get('overlays'); this.set('overlays', g.a.uo(b, g.a.indexOf(b, a))) }, getTileCoordByLngLat: function (a, b, c) {
        b = b || 256; this.D = !0; c = c || Math.round(this.getZoom())
        this.D = !1; a = this.hc(a, c); c = new g.Xq(c, Math.floor(a.x / b), Math.floor(a.y / b)); c.IC = a.x % b; c.JC = a.y % b; return c
    }, setZoom: function (a, b) { g.c.add(this, 'setZoom'); a = this.NC(a); var c = this.get('zooms'); a > c[1] && (a = c[1]); a < c[0] && (a = c[0]); this.get('zoomEnable') && (b || !this.loaded ? (this.set('zoom', a), this.q('zoomstart'), this.q('zoomchange'), this.q('zoomend')) : this.set('zoomSlow', a)) }, getZoom: function () { g.c.add(this, 'getZoom'); return this.NC(this.get('targetLevel') || this.get('zoom', null, !0)) }, getCenter: function () {
        g.c.add(this,
            'getCenter'); return this.get('center', null, !0)
    }, setCenter: function (a, b) { g.c.add(this, 'setCenter'); a = g.a.Ia(a); b || !this.loaded ? (this.q('movestart'), this.set('center', a), this.q('mapmove'), this.map ? this.map.q('moveend') : this.q('moveend')) : (this.D = !0, this.panTo(a), this.D = !1) }, getCoordsBound: function () { return this.view.em() }, getCoordsBoundByZoom: function (a) { return this.view.xpa(a) }, setRotation: function () {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; g.c.add(this, 'setRotation'); !g.l.Ae &&
this.get('rotateEnable') && this.set('rotation', a)
    }, getRotation: function () { g.c.add(this, 'getRotation'); return this.get('rotation') }, setPitch: function (a) { g.c.add(this, 'setPitch'); a = Math.min(this.get('maxPitch'), Math.max(a, 0)); this.view.type === '3D' && this.get('pitchEnable') && this.set('pitch', a) }, getPitch: function () { g.c.add(this, 'getRotation'); return this.view.type === '3D' ? this.get('pitch') : 0 }, getStatus: function () {
        g.c.add(this, 'getStatus'); for (var a = 'isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable'.split(' '),
            b = {}, c = 0; c < a.length; c += 1)b[a[c]] = this.get(a[c], null, !0); return b
    }, setStatus: function (a) { g.c.add(this, 'setStatus'); for (var b in a)a.hasOwnProperty(b) && 'isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom'.indexOf(b) !== -1 && this.set(b, a[b]) }, getResolution: function (a, b) {
        g.c.add(this, 'getResolution'); var c = (a = g.a.Ia(a)) ? a.P : this.get('center', null, !0).P; return this.ij.Xp(b || this.get('zoom')) *
Math.cos(c * Math.PI / 180)
    }, getScale: function (a) { g.c.add(this, 'getScale'); this.D = !0; a = this.getResolution() * (a || 96) / 0.0254; this.D = !1; return a }, getDefaultCursor: function () { g.c.add(this, 'getDefaultCursor'); return this.get('defaultCursor', null, !0) || 'url(' + g.w.Gb + '/theme/v1.3/openhand.cur),default' }, setDefaultCursor: function (a) { g.c.add(this, 'setDefaultCursor'); return this.set('defaultCursor', a, !0) }, zoomIn: function (a) { g.c.add(this, 'zoomIn'); this.D = !0; this.setZoom(this.getZoom() + 1, a); this.D = !1 }, zoomOut: function (a) {
        g.c.add(this,
            'zoomOut'); this.D = !0; this.setZoom(this.getZoom() - 1, a); this.D = !1
    }, NC: function (a) { return this.view && this.view.type === '3D' ? g.a.mc(a, 4) : Math.round(a) }, setZoomAndCenter: function (a, b, c) { g.c.add(this, 'setZoomAndCenter'); b = g.a.Ia(b); a = this.NC(a); var d = this.get('zooms'); a > d[1] && (a = d[1]); a < d[0] && (a = d[0]); this.D = !0; this.loaded ? this.set('zoomAndCenter', [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0)); this.D = !1 }, clearMap: function () {
        g.c.add(this, 'clearMap'); for (var a = this.get('overlays'), b = 0; b < a.length; b += 1) {
            a[b].set('map',
                null, !0)
        } this.set('overlays', []); if (this.map && this.map.ya) for (a = this.map.ya, b = a.length - 1; b >= 0; b -= 1) if (a[b].T instanceof A.o.wL) { var c = a[b].T; c.D = !0; c.setMap(null); c.D = !1 }
    }, destroy: function () {
        g.c.add(this, 'destroy'); this.mm && (this.mm.setMap(), this.indoorMap = this.mm = null); this.set('overlays', []); this.set('defaultLayer', null); this.set('layers', []); var a = this.get('controls'); a.remove = []; for (var b in a.Id)a.Id.hasOwnProperty(b) && a.remove.push(a.Id[b]); a.Id = []; a.add = []; this.set('controls', a); this.set('destroy',
            !0); this.Ka = !1; this.tl(); this.B = this.K = null; this.Ec && this.Ec.tl(); this.Ec = null; this.view && this.view.tl(); this.view = null; this.si(); A.Lb.At--
    }, addControl: function (a) { g.c.add(this, 'addControl'); var b = g.a.vb(a); var c = this.get('controls') || {}; c.Id = c.Id || {}; c.Id[b] || (c.Id[b] = a); c.add = c.add || []; c.add.push(a); this.set('controls', c) }, removeControl: function (a) {
        g.c.add(this, 'removeControl'); var b = g.a.vb(a); var c = this.get('controls') || {}; c.Id = c.Id || {}; c.Id[b] && delete c.Id[b]; c.remove = c.remove || []; c.remove.push(a); this.set('controls',
            c)
    }, clearControl: function () { g.c.add(this, 'clearControl'); var a = this.get('controls') || {}; a.remove = a.remove || []; a.Id = a.Id || {}; for (var b in a.Id)a.Id.hasOwnProperty(b) && (a.remove.push(a.Id[b]), delete a.Id[b]); this.set('controls', a) }, plugin: function (a, b) { g.c.add(this, 'plugin'); typeof a === 'string' && (a = [a]); for (var c = [], d = 0; d < a.length; d += 1) { var e = a[d].split('.'); e.length > 2 || (e.length == 2 ? e[0] === 'AMap' && (window.AMap[e[1]] || c.push(a[d])) : c.push(a[d])) } if (c.length === 0) return b(), this; g.rb.Ug(c, b); return this },
    clearInfoWindow: function () { g.c.add(this, 'clearInfoWindow'); var a = this.get('overlays'); a && a.length !== 0 && this.nm && (this.nm.D = !0, this.nm.close(), this.nm.D = !1) }, remove: function (a) { g.c.add(this, 'remove'); a instanceof Array || (a = [a]); for (var b = 0; b < a.length; b += 1) { var c = a[b]; c.D = !0; c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null)); c.D = !1 } }, add: function (a) {
        g.c.add(this, 'add'); a instanceof Array || (a = [a]); for (var b = 0; b < a.length; b += 1) {
            var c = a[b]; c.D = !0; if (c.getMap && c.getMap() !== this) {
                if (c.open) continue
                else c.setMap && c.setMap(this)
            } c.D = !1
        }
    }, getAllOverlays: function (a, b) { g.c.add(this, 'getAllOverlays'); var c = this.get('overlays'); if (a) { for (var d = 'amap.' + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1)d !== c[f].CLASS_NAME.toLowerCase() || !b && (c[f].za || c[f].isOfficial) || e.push(c[f]); return e } if (!b) { e = []; for (f = 0; f < c.length; f += 1)c[f].za || c[f].isOfficial || e.push(c[f]); c = e }d = this.get('layers'); e = []; if (d) for (var f = 0, h = d.length; f < h; f += 1)d[f] instanceof A.o.wL && e.push(d[f]), d[f].ib && (e = e.concat(d[f].ib)); return c.concat(e) },
    triggerResize: function () { this.map && this.map.FO() }, refreshSize: function () { this.PF = this.t3() }, t3: function () { return g.j.p3(this.K) }, getSize: function () { g.c.add(this, 'getSize'); (!this.PF || this.PF.width * this.PF.height < 10) && this.refreshSize(); return this.PF }, getContainer: function () { g.c.add(this, 'getContainer'); return this.K }, panTo: function (a) { g.c.add(this, 'panTo'); a = g.a.Ia(a); this.loaded ? this.set('panTo', a) : (this.D = !0, this.setCenter(a), this.D = !1) }, panBy: function (a, b, c) {
        g.c.add(this, 'panBy'); this.D = !0; var d =
this.get('rotation') * Math.PI / 180; var e = a * Math.cos(d) + Math.sin(d) * b; a = -Math.sin(d) * a + Math.cos(d) * b; b = this.loaded && this.map && this.map.Cd ? this.map.Cd.S8 : this.get('centerCoords'); d = Math.pow(2, 20 - this.getZoom()); e = b.add(new g.H(-e * d, -a * d)); e = this.Vd(e); !this.loaded || c ? this.setCenter(e, c) : this.set('panTo', e); this.D = !1
    }, setFitView: function (a, b, c, d) {
        g.c.add(this, 'setFitView'); this.D = !0; var e = this.get('size'); var f = e.height; if (!e.width || !f) return !0; if (a = this.L3(a)) {
            if (c = this.LI(a, 0, new g.H(40, 40), c, d)) {
                b = b || !this.getBounds().contains(a.ui()) ||
g.l.ba && Math.abs(c[0] + this.get('zoom', null, !0)) > 1, this.setZoomAndCenter(c[0], c[1], b)
            } this.D = !1; return a
        }
    }, L3: function (a) { if (a) if (a instanceof A.A.Ch)a = [a]; else { if (!(a instanceof Array)) return null } else this.D = !0, a = this.getAllOverlays(), this.D = !1; if (a) { for (var b, c = 0; c < a.length; c += 1) { var d = a[c]; if (d.get('visible') && !(d instanceof A.A.Re || d instanceof A.A.Jn)) { d.D = !0; var e = d.getBounds(); d.D = !1; e && (b = b ? b.Gya(e) : e.lb()) } } return b } }, getBounds: function (a) {
        g.c.add(this, 'getBounds'); var b = this.view.pd(); return a &&
b.toBounds ? (b.D = !0, a = b.toBounds(), b.D = !1, a) : b
    }, setBounds: function (a, b, c, d, e, f) { g.c.add(this, 'setBounds'); c = this.LI(a, b, c, e, f); d = d || g.l.ba && Math.abs(c[0] + b - this.get('zoom', null, !0)) > 1; this.D = !0; this.setZoomAndCenter(c[0], c[1], d); this.D = !1; return a }, y3: function (a, b, c, d, e) { a = this.L3(a); return this.LI(a, b, c, d, e) }, getCoordsBoundByZoomIn3D: function (a) {
        this.GH || (this.GH = new g.ZL()); this.D = !0; var b = this.getRotation(); var c = this.getPitch(); var d = this.getSize(!0).lb(); this.D = !1; a = { size: d, zoom: a, rotation: b, pitch: c, centerCoords: this.get('centerCoords') }
        this.GH.af(a, !0); this.GH.Qq(); return this.GH.em()
    }, LI: function (a, b, c, d, e) {
        b = b ? Number(b) : 0; this.D = !0; var f = this.getRotation(); var h = this.getPitch(); var k = this.getSize(!0).lb(); var l = this.view.type; this.D = !1; var m = a.$Q(this); a = a.cR(this); this.bC || (this.bC = l === '3D' ? new g.ZL() : new g.wF()); this.bC.af({ size: k, zoom: 3, rotation: f, pitch: h, centerCoords: m }, !0); var n = h = 0; d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h - d) / 2, n = (n - c) / 2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y); e = e || (g.l.ba ? 17 : 18); c = this.get('zooms'); d =
c[0]; var p = Infinity; var q = Infinity; do { this.bC.af({ zoom: d }, !0); l === '3D' && this.bC.Qq(); for (var q = p = Infinity, r = -Infinity, s = -Infinity, u = 0; u < a.length; u += 1) var v = this.bC.ce(a[u]); var p = Math.min(p, v.x); var r = Math.max(r, v.x); var q = Math.min(q, v.y); var s = Math.max(s, v.y); p = r - p; q = s - q; if (p > k.width || q > k.height) { d -= 1; break }d += 1 } while (d <= c[1]);d = Math.min(c[1], e, Math.max(c[0], d + b)); d = Math.floor(d); b = Math.pow(2, 20 - d); e = f * Math.PI / 180; f = h * Math.cos(e) + Math.sin(e) * n; e = -Math.sin(e) * h + Math.cos(e) * n; m = m.Za(new g.H(f * b, e * b)); m = this.Wh(m, 20)
        return [d, m]
    }, setLayers: function (a) { g.c.add(this, 'setLayers'); for (var b = 0; b < a.length; b += 1)a[b].set('map', this, !0); this.set('layers', a) }, getLayers: function () { g.c.add(this, 'getLayers'); var a = this.get('layers', null, !0); var a = a.slice(); if (this.D) { for (var b = [], c = -1, d = a.length; ++c < d;) { var e = a[c]; if (e.pG) for (var e = e.getLayers(), f = -1, h = e.length; ++f < h;) { var k = e[f]; k instanceof A.o.Vb && g.a.indexOf(a, k) === -1 && b.push(k) } }a = a.concat(b) } else for (b = a.length; --b > -1;)a[b].EA && a.splice(b, 1); return a }, getDefaultLayer: function () {
        g.c.add(this,
            'getDefaultLayer'); return this.get('defaultLayer', null, !0)
    }, setDefaultLayer: function (a) { g.c.add(this, 'setDefaultLayer'); this.D = !0; a.oP = !0; var b = this.get('defaultLayer'); var c = this.get('layers'); if (b) { if (a === b) return; b.oP = !1; c = g.a.uo(c, g.a.indexOf(c, b)) } this.set('defaultLayer', a, !0); a.D = !0; a.getMap == this && c.push(a); a.D = !1; this.setLayers(c); this.D = !1 }, pixelToLngLat: function (a, b) { g.c.add(this, 'pixelToLngLat'); return this.Wh(a, b) }, lnglatToPixel: function (a, b) {
        g.c.add(this, 'lnglatToPixel'); return this.hc(a,
            b)
    }, drawPolyline: function (a) { g.c.add(this, 'drawPolyline'); this.set('draw', 'polyline'); this.set('drawStyle', a || { strokeColor: '#006600', mb: 0.9 }) }, render: function (a) { g.c.add(this, 'render'); this.map && this.map.set('display', a ? 1 : 0) }, setMask: function (a) { g.c.add(this, 'setMask'); this.set('mask', a); this.map && (this.map.GJ = !0, this.map.set('display')) }, drawPolygon: function (a) { g.c.add(this, 'drawPolygon'); this.set('draw', 'polygon'); this.set('drawStyle', a || { strokeColor: '#006600', mb: 0.9, fillColor: '#FFAA00', be: 0.9 }) },
    drawCircle: function (a) { g.c.add(this, 'drawCircle'); this.set('draw', 'circle'); this.set('drawStyle', a || { strokeColor: '#006600', mb: 0.9, fillColor: '#006600', be: 0.9 }) }, WI: function () { return this.view.WI() }, getCameraState: function () { g.c.add(this, 'getCameraState'); if (this.view && this.view.type == '3D') return this.view.o3() }, endDraw: function () { this.set('draw', null) }, isGoogleTileVisible: function () { return this.map.isForeignMapVisible() }, isForeignMapVisible: function () {
        if (this.get('gridForeignMap') || this.get('vectorForeignMap')) {
            return this.map &&
this.map.Nfa()
        }
    }, ce: function (a, b, c) { g.c.add(this, 'p20ToContainer'); return this.view.ce(a, b, c) }, ug: function (a, b, c) { g.c.add(this, 'containerToP20'); return this.view.ug(a, b, c) }, getObject3DByContainerPos: function (a, b, c) {
        g.c.add(this, 'getObject3DByContainerPos'); if (this.view.type === '2D' || !this.map || !this.map.J) return null; this.D = !0; this.view.ug(a); var d = this.view.s3(a); var e = this.map.J.tT; var f = this.view.bd; var h = this.get('zoom', null, !0); var h = Math.pow(2, 20 - h); b = b || this.getLayers(); this.D = !1; for (var k = [], l = 0; l < b.length; l +=
1) { var m = b[l]; m instanceof A.o.er && (m = m.Zo(e, d, f, h, a)) && k.push(m) } return c ? k : k.length ? (k.sort(function (a, b) { return a.Sd - b.Sd }), { index: k[0].index, point: k[0].PD, distance: k[0].Sd, object: k[0].object }) : null
    } })
    A.Lb.Qb({ vJ: 'lngLatToGeodeticCoord', upa: 'geodeticCoordToLngLat', LI: 'getFitZoomAndCenterByBounds', y3: 'getFitZoomAndCenterByOverlays', xs: 'lnglatTocontainer', lnglatTocontainer: 'lngLatToContainer', Kp: 'containTolnglat', containTolnglat: 'containerToLngLat', Ab: 'lngLatToP20', Vd: 'p20ToLngLat', ce: 'p20ToContainer', ug: 'containerToP20', hc: 'project', Wh: 'unproject' }); A.Lb.zb({ isHotspotChanged: function () { if (typeof this.aD !== 'undefined' && (this.Wma(), this.get('isHotspot'))) { var a = this.get('layers', null, !0); a && a.length && !this.aD && this.LJ && this.dua() } }, dua: function () { if (this.$j) this.v4(); else { var a = this; this.D = !0; this.plugin('AMap.HotSpot', function () { if (!a.aD) { if (!a.$j) { var b = new g.bi(); new A.A.Re({ innerOverlay: !0 }); a.$j = b }a.v4() } }); this.D = !1 } }, Wma: function () { this.$j && this.ara() }, z6: function (a) { a.type = 'hotspotover'; a.isIndoorPOI = !1; this.q('hotspotover', a) }, x6: function (a) {
        a.type =
'hotspotclick'; a.isIndoorPOI = !1; this.q('hotspotclick', a)
    }, y6: function (a) { a.type = 'hotspotout'; a.isIndoorPOI = !1; this.q('hotspotout', a) }, v4: function () { var a = this.$j; this.$j.D = !0; this.$j.setMap(this); this.$j.D = !1; a.h('mouseover', this.z6, this); a.h('click', this.x6, this); a.h('mouseout', this.y6, this) }, ara: function () { var a = this.$j; a.G('mouseover', this.z6, this); a.G('click', this.x6, this); a.G('mouseout', this.y6, this); this.$j.D = !0; this.$j.setMap(null); this.$j.D = !1; this.$j = null } }); A.event = { X: function (a, b, c, d) { g.F.h(a, b, c, d); return new g.aF(0, a, b, c, d) }, gla: function () {}, addListener: function (a, b, c, d) { g.a.Oh(a.addListener) ? a.addListener(b, c, d) : (a.ke || (a.ke = g.ta.ke), g.ta.h.call(a, b, c, d)); return new g.aF(1, a, b, c, d) }, Mx: function (a, b, c, d) { g.a.Oh(a.Mx) ? a.Mx(b, c, d) : (a.ke || (a.ke = g.ta.ke), g.ta.h.call(a, b, c, d, !0)); return new g.aF(1, a, b, c, d) }, UH: function (a) { g.a.Oh(a.UH) ? a.UH() : g.ta.si.call(a) }, pu: function (a, b) { g.a.Oh(a.pu) ? a.pu(b) : g.ta.si.call(a, b) }, removeListener: function (a) {
        a instanceof
g.aF && (g.a.Oh(a.xi.removeListener) ? a.xi.removeListener(a) : a.type === 0 ? g.F.G(a.xi, a.EQ, a.MR, a.Ve) : a.type === 1 && (a.xi.ke || (a.xi.ke = g.ta.ke), g.ta.G.call(a.xi, a.EQ, a.MR, a.Ve)))
    }, O: function (a, b) { var c = Array.prototype.slice.call(arguments, 1); g.a.Oh(a.O) ? a.O.apply(a, c) : (a.ke || (a.ke = g.ta.ke), g.ta.q.apply(a, c)) } }; g.aF = g.aa.extend({ r: function (a, b, c, d, e) { this.type = a; this.xi = b; this.EQ = c; this.MR = d; this.Ve = e } })
    var oc = { X: 'addDomListener', gla: 'addDomListenerOnce', addListener: 'addListener', Mx: 'addListenerOnce', UH: 'clearInstanceListeners', pu: 'clearListeners', removeListener: 'removeListener', O: 'trigger' }; var pc; for (pc in oc)oc.hasOwnProperty(pc) && (A.event[oc[pc]] = A.event[pc]); g.event = A.event; A.o.Vb = g.aa.extend({ ka: [g.ta, g.Se], r: function (a) { (new Date()).getTime(); this.CLASS_NAME = this.CLASS_NAME || 'AMap.Layer'; g.a.Db(this, a); this.B.map && (a = this.B.map, delete this.B.map, this.B.map = a); this.af(this.B) }, getContainer: function () { g.c.add(this, 'getContainer'); if (this.o && this.o.M) return this.o.M.qj() }, getZooms: function () { return this.get('zooms', null, !0) }, setOpacity: function (a) { g.c.add(this, 'setOpacity'); a !== this.get('opacity', null, !0) && this.set('opacity', a) }, getOpacity: function () {
        return this.get('opacity',
            null, !0)
    }, show: function () { g.c.add(this, 'show'); this.set('visible', !0); if (this.mq) { var a = this.get('map', null, !0); a && a.set('layers', a.get('layers', null, !0)) } }, hide: function () { g.c.add(this, 'hide'); this.set('visible', !1); if (this.mq) { var a = this.get('map', null, !0); a && a.set('layers', a.get('layers', null, !0)) } }, setMap: function (a) { g.c.add(this, 'setMap'); var b = this.get('map'); if (a)b && a !== b && b.lk(this), this.set('map', a); else if (b && (b.lk(this), this.set('map', null, !0), this.pi = !1, this.Wg && this.Wg(), this.onRemove)) this.onRemove() },
    getMap: function () { g.c.add(this, 'getMap'); return this.get('map', null, !0) }, mapChanged: function () { var a = this.get('map'); a && a.AH(this) }, setzIndex: function (a) { g.c.add(this, 'setzIndex'); this.set('zIndex', a) }, getzIndex: function () { return this.get('zIndex', null, !0) } }); A.o.ob = A.o.Vb.extend({ B: { tileSize: 256, visible: !0, opacity: 1, zIndex: 0, noLimg: 1, zooms: [3, 20], getTileUrl: g.l.ba ? g.w.yE : g.w.tD, errorUrl: g.a.Ioa, detectRetina: !0, className: 'amap-layer', mapNumber: '', merge: !1, sort: !1, cacheSize: g.l.size }, r: function (a) {
        this.CLASS_NAME = this.CLASS_NAME || 'AMap.TileLayer'; g.c.va(this, a); (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl); this.Ema(a); var b = a.zooms; b && b[1] >= this.il[0] ? (b[0] < this.il[0] && (b[0] = this.il[0]), b[1] > this.il[1] && (b[1] = this.il[1])) : a.zooms = [this.il[0], this.il[1]]
        arguments.callee.la.call(this, a); a.kk && (this.kk = !0); this.qG = this.dq()
    }, setTextIndex: function (a) { g.c.add(this, 'setTextIndex'); this.set('textIndex', a) }, dq: function () { if (this.get('createTile')) return !1; var a = this.get('getTileUrl'); return a && a !== g.w.tD && a !== g.w.yE ? !1 : !0 }, S1: function () { if (!this.dq()) return !1; var a = this.get('map'); return a && a.yi && a.get('lang') === 'zh_cn' && !this.noVector ? !0 : !1 }, R3: function (a) {
        var b = g.w.CJ; g.l.ja && this.get('detectRetina') && (b = g.w.CJ.replace('scl=1', 'scl=2')); a && (b = b.replace('ltype=3',
            'ltype=11')); return b
    }, Uf: function (a) {
        var b = this.S1(); var c = this.get('map'); this.dq() && this.set('mapNumber', 'GS(2019)6379'); if (this.kk) return new g.o.ob(this, a, this.ir(this.R3(!0)), this.B.maxDataZoom, !0); if (b) {
            if (this.mq = !0, g.o.ei) {
                if (c.get('baseRender') === 'dv' && !this.get('watermark')) {
                    var b = c.get('showBuildingBlock'); var d = new g.o.ob(this, a, this.ir(this.R3(!b)), void 0, !0); b && (d.ol = new g.o.nd(new A.o.ob({ zooms: [16, 20], innerLayer: !0 }), a, ['building']), d.ol.type = '\u697c\u5757\u56fe\u5c42', d.ol.Ue(['visible',
                        'opacity', 'zIndex'], d, !0), d.ol.hC(c.get('mapStyle') || 'normal')); d.type = '\u6805\u683c\u5e95\u56fe'; return d
                } if (c.get('baseRender') >= 'v' || this.get('watermark')) {
                    return a.C.view.type == '3D' ? (c = new g.o.nd(this, a, ['region', 'road']), c.type = '\u77e2\u91cf\u5e95\u56fe', b = new A.o.ob({ zooms: [17, 20], zIndex: 50, innerLayer: !0 }), c.ol = new g.o.nd(b, a, ['building']), c.ol.$e = 17, c.ol.type = '\u697c\u5757\u56fe\u5c42', c.ol.Gy = 1, c.ol.Ue(['visible', 'merge', 'sort', 'opacity'], c, !0), b.W('rejectMapMask', this, !0)) : (c = new g.o.nd(this,
                        a, ['region', 'building', 'road']), c.type = '\u77e2\u91cf\u5e95\u56fe'), a.Ola = c
                }
            } else return ['vectorlayer', 'overlay']
        } else return this.mq = !1, new g.o.ob(this, a, null, this.B.maxDataZoom)
    }, getTileUrlChanged: function () { var a = this.get('getTileUrl'); if (a === g.w.tD || a === g.w.yE || a === g.w.AK) this.LJ = !0; typeof a === 'string' && (a = this.ir(a)); this.set('tileFun', a) }, Ema: function (a) {
        this.il || (this.il = [this.B.zooms[0], this.B.zooms[1]]); var b; a.hasOwnProperty('detectRetina') && !1 === a.detectRetina && (b = !0); g.l.ba && g.l.ja && this.B.detectRetina &&
!b && (this.il[1] -= 1)
    }, getTiles: function () { g.c.add(this, 'getTiles'); var a = this.get('tiles', null, !0); if (a && a.length)a = a[0]; else return []; for (var b = [], c, d = 0; d < a.length; d += 1)a[d].key && (c = a[d].key.split('/'), b.push('' + c[1] + ',' + c[2])); return b }, reload: function () { g.c.add(this, 'reload'); this.set('reload', 1) }, Ns: function () { this.D = !0; var a = this.get('map', null, !0); this.setMap(null); this.pi = !1; this.setMap(a); this.D = !1 }, setTileUrl: function (a) {
        g.c.add(this, 'setTileUrl'); this.S1() ? (this.set('getTileUrl', a), this.Ns())
            : this.set('getTileUrl', a)
    }, ir: function (a) { var b = this; var c; var d; var e; return function (f, h, k) { f = (f + Math.pow(2, k)) % Math.pow(2, k); if (typeof (f + h + k) !== 'number') return null; var l = b.get('map'); var m = 'zh_cn'; l && (m = l.get('lang') || 'zh_cn'); k = a.replace('[x]', f).replace('[y]', h).replace('[z]', k).replace('[lang]', m); if (!c) { if (d = a.match(/\{.*\}/))e = d.toString().replace('{', '').replace('}', ''), e = e.split(','); c = !0 }e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length])); return k } }, getTileUrl: function (a, b, c) {
        g.c.add(this, 'getTileUrl')
        return this.get('tileFun', null, !0)(a, b, c)
    }, getZooms: function (a) { a || g.c.add(this, 'getZooms'); return this.get('zooms', null, !0) } }); A.o.ob.gW = A.o.ob.extend({ B: { getTileUrl: g.w.$T, zooms: [3, 20], zIndex: 2, maxDataZoom: 18, detectRetina: !1, mapNumber: 'GS(2019)5392', className: 'amap-layer amap-satellite', cacheSize: g.l.size }, r: function (a) { this.CLASS_NAME = 'AMap.TileLayer.Satellite'; g.c.va(this, a); this.il = [3, 20]; arguments.callee.la.apply(this, arguments) } })
    A.o.ob.dW = A.o.ob.extend({ B: { getTileUrl: g.w.AK, zooms: [3, 20], zIndex: 3, type: 'overlayer', maxDataZoom: 18, className: 'amap-layer amap-roadnet', cacheSize: g.l.size }, r: function (a) { this.CLASS_NAME = 'AMap.TileLayer.RoadNet'; g.c.va(this, a); this.il = [3, 20]; arguments.callee.la.apply(this, arguments) }, Uf: function (a) {
        if (this.get('map').yi) { this.mq = !0; var b = g.w.BK; g.l.ja && this.get('detectRetina') && (b = g.w.BK.replace('scl=1', 'scl=2')); a = new g.o.ob(this, a, this.ir(b), this.B.maxDataZoom) } else {
            this.mq = !1, a = new g.o.ob(this,
                a)
        } return a
    } })
    A.o.ob.oW = A.o.ob.extend({ B: { getTileUrl: function (a, b, c) { return g.w.tc + '://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=' + (17 - c) + '&x=' + a + '&y=' + b }, zooms: [6, 20], zIndex: 4, type: 'overlayer', autoRefresh: !1, interval: 180, maxDataZoom: 17, alwaysRender: !g.l.G2, className: 'amap-layer amap-traffic', cacheSize: g.l.size }, r: function (a) { this.CLASS_NAME = 'AMap.TileLayer.Traffic'; g.c.va(this, a); this.il = [6, 20]; arguments.callee.la.apply(this, arguments); this.D = !0; this.startRefresh(); this.D = !1 }, stopRefresh: function () {
        g.c.add(this,
            'stopRefresh'); this.oK && (clearInterval(this.oK), this.oK = null)
    }, startRefresh: function () { g.c.add(this, 'startRefresh'); if (this.get('autoRefresh') && !this.oK) { var a = this; this.oK = setInterval(function () { a.D = !0; a.reload(); a.D = !1; a.q('refresh') }, Math.max(1E3 * (this.get('interval') || 180), 1E4)) } }, reload: function () { g.c.add(this, 'reload'); g.a.Tc(function () { this.set('reload') }, this) }, Wg: function () { this.D = !0; this.stopRefresh(); this.get('map') && this.get('map').G('zoomstart', this.reload, this); this.D = !1 }, Uf: function (a) {
        var b =
this.get('map'); var b = a.C; b.h('zoomstart', this.reload, this); return b.get('baseRender') !== 'd' ? g.o.Lw ? a = new g.o.Lw(this, a) : ['vt'] : a = new g.o.ob(this, a, null, this.B.maxDataZoom)
    } })
    A.o.ob.fA = A.o.ob.extend({ B: { zooms: [3, 20], zIndex: 12, detectRetina: !1, className: 'amap-layer amap-flexible', cacheSize: g.l.size }, r: function (a) { this.CLASS_NAME = this.CLASS_NAME || 'AMap.TileLayer.Flexible'; g.c.va(this, a); this.Rra = !0; arguments.callee.la.call(this, a) }, setCreateTile: function (a) { g.c.add(this, 'setCreateTile'); typeof a === 'function' && a !== this.get('createTile') && this.set('createTile', a) }, getCreateTile: function () { return this.get('createTile', null, !0) } })
    A.o.ob.Waa = A.o.ob.fA.extend({ B: { zooms: [3, 20], zIndex: 12, tileSize: 512, detectRetina: !1, className: 'amap-layer amap-wms', cacheSize: g.l.size, url: '', params: '' }, r: function (a) {
        this.CLASS_NAME = 'AMap.TileLayer.WMS'; g.c.va(this, a); arguments.callee.la.call(this, a); this.hw(); var b = this; var c = this.get('tileSize'); this.set('createTile', function (a, e, f, h, k) {
            var l = Math.pow(2, 20 - f) * c; f = new g.H(l * a, l * (e + 1)); a = new g.H(l * (a + 1), l * e); e = g.BJ.H6(f); a = g.BJ.H6(a); var m = document.createElement('img'); b.Dg === '3D' && (m.crossOrigin = 'anonymous')
            g.F.h(m, 'load', function () { h(m) }); g.F.h(m, 'error', function () { k(m) }); m.src = this.url + '&BBOX=' + e + ',' + a
        })
    }, hw: function () { var a = this.get('url', null, !0); var b = this.get('params', null, !0); var c = this.get('tileSize'); b.WIDTH = c; b.HEIGHT = c; b.CRS = b.CRS || 'EPSG:3857'; b.REQUEST = 'GetMap'; b.SERVICE = 'WMS'; b.FORMAT = b.FORMAT || 'image/png'; b.TRANSPARENT = void 0 === b.TRANSPARENT ? 'true' : b.TRANSPARENT; delete b.BBOX; this.url = a + '?' + g.a.join(b, '&'); this.D = !0; this.reload(); this.D = !1 }, setUrl: function (a) {
        g.c.add(this, 'setUrl'); this.set('url',
            a, !0); this.hw()
    }, getUrl: function () { g.c.add(this, 'getUrl'); return this.get('url', null, !0) }, setParams: function (a) { g.c.add(this, 'setParams'); g.extend(this.get('params', null, !0), a || {}); this.hw() }, getParams: function () { g.c.add(this, 'getParams'); return this.get('params', null, !0) } })
    A.o.ob.Xaa = A.o.ob.fA.extend({ B: { zooms: [3, 20], tileSize: 256, zIndex: 12, detectRetina: !1, className: 'amap-layer amap-wmts', cacheSize: g.l.size }, r: function (a) {
        this.CLASS_NAME = 'AMap.TileLayer.WMTS'; g.c.va(this, a); arguments.callee.la.call(this, a); this.hw(); var b = this; this.get('tileSize'); this.set('createTile', function (a, d, e, f, h) {
            var k = document.createElement('img'); b.Dg === '3D' && (k.crossOrigin = 'anonymous'); g.F.h(k, 'load', function () { f(k) }); g.F.h(k, 'error', function () { h(k) }); k.src = this.url + '&TileMatrix=' + e + '&TileRow=' +
d + '&TileCol=' + a
        })
    }, hw: function () { var a = this.get('url', null, !0); var b = this.get('params', null, !0); b.TileMatrixSet = b.TileMatrixSet || 'EPSG:3857'; b.Request = 'GetTile'; b.Service = 'WMTS'; b.Format = b.Format || 'image/png'; this.url = a + '?' + g.a.join(b, '&'); this.D = !0; this.reload(); this.D = !1 }, setUrl: function (a) { g.c.add(this, 'setUrl'); this.set('url', a, !0); this.hw() }, getUrl: function () { g.c.add(this, 'getUrl'); return this.get('url', null, !0) }, setParams: function (a) {
        g.c.add(this, 'setParams'); g.extend(this.get('params', null, !0),
            a || {}); this.hw()
    }, getParams: function () { g.c.add(this, 'getParams'); return this.get('params', null, !0) } })
    A.o.ob.dF = A.o.ob.fA.extend({ B: { detectRetina: !0, zooms: [10, 18], zIndex: 2 }, r: function (a) {
        arguments.callee.la.apply(this, arguments); var b = this; this.set('createTile', function (a, d, e, f, h) {
            var k = b.Ke.map.map; k.Dh.rE(a, d, e, function (l) {
                if (l)h(); else {
                    var m = document.createElement('img'); b.Dg === '3D' && (m.crossOrigin = 'anonymous'); g.F.h(m, 'load', function () { f(m) }); g.F.h(m, 'error', function () { h(m) }); m.src = (function (a, c, d) {
                        var e = 'zh_cn'; b && b.get && k && (e = k.get('lang') || 'zh_cn'); return g.w.tc + '://grid.amap.com/grid/' + d + '/' +
a + '/' + c + '?src=jsapi&key=' + g.w.key + '&lang=' + e + '&dpiType=' + (g.l.Nc ? 'wprd' : 'webrd')
                    }(a, d, e))
                }
            })
        })
    } }); A.o.cd = A.o.Vb.extend({ B: { visible: !0, zooms: [3, 25], type: 'overlay', zIndex: 5, alwaysRender: !0 }, r: function (a) { this.P4 = !0; arguments.callee.la.apply(this, arguments) }, Uf: function (a) { return new g.o.cd(this, a) } }); A.o.m$ = A.o.Vb.extend({ B: { zooms: [14, 20], zIndex: 8, visible: !0, merge: !0, sort: !1 }, r: function (a) { this.CLASS_NAME = 'AMap.Buildings'; g.c.va(this, a); a = a || {}; a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0])); arguments.callee.la.apply(this, arguments) }, dq: function () { return !1 }, Uf: function (a) { if (g.l.Kr) return a = new g.o.Taa(this, a), a.Gy = this.get('heightFactor') || 1, a }, setStyle: function (a) { this.set('customStyle', a); g.c.add(this, 'setStyle') } }); A.o.pL = A.o.Vb.extend({ B: { visible: !0, zooms: [3, g.l.ba ? 20 : 18], opacity: 1, type: 'overlay', zIndex: 6 }, r: function (a) { arguments.callee.la.apply(this, arguments) }, Uf: function (a) { return g.o.iA ? new g.o.iA(this, a) : ['imagelayer'] }, getMap: function () { g.c.add(this, 'getMap'); return this.Ke.map }, show: function () { g.c.add(this, 'show'); this.set('visible', !0); this.q('options') }, getOpacity: function () { g.c.add(this, 'getOpacity'); return this.get('opacity', null, !0) }, setOpacity: function (a) {
        g.c.add(this, 'setOpacity'); this.set('opacity',
            a)
    }, getBounds: function () { g.c.add(this, 'getBounds'); return this.get('bounds', null, !0).lb() }, setBounds: function (a) { g.c.add(this, 'setBounds'); this.q('bounds', a); this.D = !0; this.setOptions({ bounds: a }); this.D = !1 }, hide: function () { g.c.add(this, 'hide'); this.set('visible', !1); this.q('options') }, setOptions: function (a) { g.c.add(this, 'setOptions'); this.af(a); this.q('options') }, getOptions: function () { g.c.add(this, 'getOptions'); var a = {}; var b; for (b in this.B) this.B.hasOwnProperty(b) && (a[b] = this.get(b)); return a }, getElement: function () {
        return this.o.M
            ? this.o.M.bc : this.o.ig ? this.o.ig.bc : null
    } }); A.o.iA = A.o.pL.extend({ r: function (a) { this.CLASS_NAME = 'AMap.ImageLayer'; g.c.va(this, a); a && a.url && (a.__source__ = a.url); arguments.callee.la.apply(this, arguments) }, getImageUrl: function () { g.c.add(this, 'getImageUrl'); return this.get('__source__') }, setImageUrl: function (a) { g.c.add(this, 'setImageUrl'); return this.set('__source__', a) } })
    A.o.Vaa = A.o.pL.extend({ r: function (a) { this.CLASS_NAME = 'AMap.VideoLayer'; g.c.va(this, a); a && a.url && (a.__source__ = a.url); arguments.callee.la.apply(this, arguments) }, getVideoUrl: function () { g.c.add(this, 'getVideoUrl'); return this.get('__source__') }, setVideoUrl: function (a) { g.c.add(this, 'setVideoUrl'); return this.set('__source__', a) } })
    A.o.o$ = A.o.pL.extend({ r: function (a) { this.CLASS_NAME = 'AMap.CanvasLayer'; g.c.va(this, a); a && a.canvas && (a.__source__ = a.canvas); arguments.callee.la.apply(this, arguments) }, getCanvas: function () { g.c.add(this, 'getCanvas'); return this.get('__source__') }, setCanvas: function (a) { g.c.add(this, 'setCanvas'); return this.set('__source__', a) }, reFresh: function () { this.o && (this.o.oE = !0, this.o.set('display')) } }); A.o.haa = A.o.Vb.extend({ B: { visible: !0, zooms: [3, 20], type: 'overlay', zIndex: 5, cursor: 'pointer', alwaysRender: !0, stable: !0, bubble: !0, rejectMapMask: !0, className: 'amap-mass' }, r: function (a, b) { this.CLASS_NAME = 'AMap.MassMarks'; g.c.va(this, b); g.l.$k && (this.tj = !0, b.size && (b.size = g.a.tq(b.size)), this.D = !0, this.setData(a), g.a.Db(this, b), b.style ? (this.af(this.B, !0), this.setStyle(b.style)) : this.setStyle(this.B), this.D = !1) }, clear: function () { g.c.add(this, 'clear'); this.set('dataSources', '') }, getStyle: function () {
        g.c.add(this,
            'getStyle'); return this.xm
    }, setStyle: function (a) {
        g.c.add(this, 'setStyle'); if (a instanceof Array) { for (var b = 0; b < a.length; b += 1)a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180, a[b].size = g.a.tq(a[b].size), a.uf = Math.max(a.uf || 0, a[b].size.width + a[b].anchor.x), a.gg = Math.max(a.uf || 0, a[b].size.height + a[b].anchor.y); this.xm = a } else {
            a.size && (a.size = g.a.tq(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180, this.af(a, !0), this.xm = { anchor: this.get('anchor'), url: this.get('url'), size: this.get('size'), rotation_: this.get('rotation_') },
            this.xm.uf = this.xm.size.width + this.xm.anchor.x, this.xm.gg = this.xm.size.height + this.xm.anchor.y
        } this.q('style')
    }, setData: function (a) { g.c.add(this, 'setData'); this.set('dataSources', a) }, getData: function () { g.c.add(this, 'getData'); return this.get('datas') || this.get('dataSources') }, setMap: function (a) { g.c.add(this, 'setMap'); g.l.$k && (a ? (this.get('map') && this.get('map').lk(this), this.set('map', a)) : this.get('map') && (this.get('map').lk(this), this.set('map', null, !0), this.pi = !1, this.Wg && this.Wg())) }, Uf: function (a) {
        return g.rb.nD(['cvector'])
            ? (a = new g.o.cd(this, a), this.W('datas', a), a) : ['cvector']
    } }); A.o.s$ = A.o.Vb.extend({ r: function (a) { this.CLASS_NAME = 'AMap.CompositeLayer'; this.pG = !0; g.a.Db(this, a); this.Qm = []; this.af(this.B) }, opacityChanged: function () { for (var a = this.get('opacity', null, !0), b = -1, c = this.Qm.length; ++b < c;) this.Qm[b].setOpacity(a) }, addLayer: function (a) { if (!this.has(a)) { a.EA = this; var b = this.get('map'); a.setMap(b); this.Qm.push(a) } return this }, removeLayer: function (a) { this.has(a) && a.setMap(null); return this }, jka: function (a) {
        if (this.has(a)) {
            delete a.EA; var b = this.Qm; a = g.a.indexOf(b, a); g.a.uo(b,
                a)
        }
    }, has: function (a) { return g.a.indexOf(this.Qm, a) !== -1 }, show: function () { for (var a = -1, b = this.Qm.length; ++a < b;) this.Qm[a].show() }, hide: function () { for (var a = -1, b = this.Qm.length; ++a < b;) this.Qm[a].hide() }, setzIndex: function (a, b) { g.c.add(this, 'setzIndex'); this.set('zIndex', a); var c = this.Qm; if (typeof b === 'undefined') for (var d = -1, e = c.length; ++d < e;) { var f = c[d]; f.setzIndex(a) } else (f = c[b]) && f.setzIndex(a) }, Uf: function (a) { this.e = a }, getLayers: function () { return this.Qm } }); A.o.Zq = A.o.Vb.extend({ W$: { visible: !0, zIndex: 20, opacity: 1, zooms: [3, 20], collision: !0, animation: !0, alwaysRender: !0 }, B: { zooms: [3, 20] }, $r: function () { this.f && this.f.xz(this.Ui) }, r: function (a) { this.CLASS_NAME = this.CLASS_NAME || 'AMap.LabelsLayer'; a = a || {}; g.c.va(this, a); arguments.callee.la.apply(this, arguments); this.B = this.W$; g.a.Db(this, a); this.af(this.B); this.Ui = []; this.ib = []; this.wu = []; this.GQ = { click: 0, mouseover: 0, mousemove: 0, mouseout: 0, mousedown: 0, mouseup: 0, touchstart: 0, touchend: 0 } }, VY: function () {
        var a =
this; return g.a.rD(function (b) { var c = a.f; c ? c.xz(b) : a.ZC = b }, 100)
    }, xz: function (a) { this.r0(a) }, xo: function (a, b) { for (var c = b._LabelMarkerId || null, d = 0; d < a.length; d++) if (a[d].data.id === c) return d; return -1 }, removeItem: function () {}, zf: function (a) { return typeof a === 'undefined' }, nZ: function (a) { return typeof a === 'string' }, Qfa: function (a) { return typeof a === 'number' }, hG: function () {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return this.zf(a.width) || this.zf(a.height) ? this.nZ(a) ? a.split(',') : this.Qfa(a)
            ? [a, a] : a : [a.width, a.height]
    }, Bea: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return this.zf(a.Q) || this.zf(a.P) ? this.nZ(a) ? a.split(',') : a : [a.Q, a.P] }, Iga: function (a) {
        typeof a === 'string' && (a = a.trim(), a = a.split(' ')); if (Object.prototype.toString.apply(a) === '[object Array]') {
            for (var b = a.length, c = 0; c < b; c++) { var d = parseInt(a[c]); a[c] = isNaN(d) ? 3 : d } switch (b) {
                case 0:a = [3, 3, 3, 3]; break; case 1:a = [a[0], a[0], a[0], a[0]]; break; case 2:a = [a[0], a[1], a[0], a[1]]; break; case 3:a = [a[0], a[1],
                    a[2], a[1]]
            } return a
        } return [3, 3, 3, 3]
    }, add: function (a) {
        g.c.add(this, 'add'); if (a) {
            a = Object.prototype.toString.apply(a) !== '[object Array]' ? [a] : a; for (var b = 0; b < a.length; b++) {
                var c = a[b]; if (c) {
                    c.f = this; var d = c.B; var e = { data: { id: c._LabelMarkerId || void 0, name: d.title || '', position: this.Bea(d.position) || void 0, rank: d.rank || void 0 }, opts: { zooms: d.zooms || void 0, opacity: typeof d.opacity === 'number' ? d.opacity : 1, zIndex: typeof d.zIndex === 'number' ? d.zIndex : 1, height: typeof d.height === 'number' ? d.height : 0, icon: {}, text: {}}}
                    if (d.icon) { var f = d.icon; var h = f.size; var k = f.clipSize; h && (f.size = this.hG(h)); k && (f.clipSize = this.hG(k)); e.opts.icon = d.icon }d.text && (e.opts.text = d.text, d.text.content && (e.data.txt = d.text.content), (d = (d = e.opts.text.style) && d.padding) && (e.opts.text.style.padding = this.Iga(d))); this.Ui.push(e); this.ib.push(c)
                }
            } this.$r(); b = a.length; for (c = 0; c < b; c++)(e = a[c]) && e.e8 && e.e8()
        }
    }, remove: function (a) { g.c.add(this, 'remove'); this.Ui && (a = this.xo(this.Ui, a), a !== -1 && (this.Ui.splice(a, 1), this.ib.splice(a, 1), this.$r())) }, clear: function () {
        g.c.add(this,
            'clear'); this.f && this.f.clear(); this.Ui = []; this.ib = []
    }, Uf: function (a) { this.get('map') || this.set('map', a.C, !0); if (g.o.Zq) { this.f = new g.o.Zq(this, a); this.Ui && this.$r(); a = this.wu; if (a.length) { for (var b = 0; b < a.length; b++) this.on.apply(this, a[b]); this.wu = [] } return this.f } return ['AMap.LabelsLayer'] }, setPosition: function () {}, positionChanged: function () {}, on: function (a) { g.c.add(this, 'on'); this.f ? (this.Ah(arguments), this.f.t1(a)) : this.wu.push(arguments) }, off: function (a) { g.c.add(this, 'off'); this.f && this.f.C9(a) } }); A.o.wL = A.o.iA.extend({ r: function (a, b, c) { this.CLASS_NAME = 'AMap.GroundImage'; g.c.va(this, c); c = c || {}; this.Tg = !0; var d = parseFloat(c.opacity); isNaN(d) && (d = 1); arguments.callee.la.call(this, { url: a, bounds: b, clickable: c.clickable, opacity: d, map: c.map, zooms: c.zooms || [3, 20] }); this.CLASS_NAME = 'AMap.GroundImage' }, Uta: function (a) { this.get('bounds').contains(a.lnglat) && (a.target = this, this.q('click', a)) }, Vta: function (a) { this.get('bounds').contains(a.lnglat) && (a.target = this, this.q('dblclick', a)) }, setMap: function (a) {
        g.c.add(this,
            'setMap'); a ? (this.get('map') && (this.get('map').lk(this), this.c2 && A.event.removeListener(this.c2), this.v2 && A.event.removeListener(this.v2)), this.set('map', a)) : this.get('map') && (this.get('map').lk(this), this.Ke.map = null)
    }, mapChanged: function () { this.get('map') && (this.get('map').AH(this), this.get('clickable') && (this.c2 = A.event.addListener(this.get('map'), 'click', this.Uta, this), this.v2 = A.event.addListener(this.get('map'), 'dblclick', this.Vta, this))) } }); A.A.Ch = g.aa.extend({ ka: [g.ta, g.Se, { Ia: g.a.Ia }], B: { extData: {}, bubble: !1, clickable: !0, draggable: !1 }, r: function () { this.xG = g.a.vb(this) }, LDa: function () { return this.xG }, nCa: function () { this.D = !0; this.get('map', null, !0) && this.setMap(this.get('map')); this.D = !1 }, mapChanged: function () { this.get('map', null, !0) && this.get('map', null, !0).ZB(this) }, OQ: function (a) { var b = 0; a && (b = typeof a === 'string' ? Math.round(parseFloat(a) / 0.14929107086948487) : a); return b }, setHeight: function (a) {
        this.height = a = a || 0; a = this.OQ(a); this.set('altitude',
            a)
    }, getHeight: function () { return this.height }, show: function () { g.c.add(this, 'show'); this.set('visible', !0) }, hide: function () { g.c.add(this, 'hide'); this.set('visible', !1) }, setMap: function (a) { g.c.add(this, 'setMap'); a !== this.get('map', null, !0) && (a ? (this.get('map', null, !0) && this.get('map', null, !0).qz(this), this.set('map', a)) : this.get('map', null, !0) && (this.get('map', null, !0).qz(this), this.set('map', null, !0))) }, getMap: function () { g.c.add(this, 'getMap'); return this.get('map', null, !0) }, setExtData: function (a) {
        g.c.add(this,
            'setExtData'); this.set('extData', a)
    }, positionChanged: function () {}, getExtData: function () { g.c.add(this, 'getExtData'); return this.get('extData', null, !0) } }); A.A.cd = A.A.Ch.extend({ r: function (a) { A.A.cd.Yc.r.apply(this, arguments) }, show: function () { g.c.add(this, 'show'); this.set('visible', !0); this.q('show', { type: 'show', target: this }) }, hide: function () { g.c.add(this, 'hide'); this.set('visible', !1); this.q('hide', { type: 'hide', target: this }) }, getVisible: function () { g.c.add(this, 'getVisible'); return this.get('visible', null, !0) }, getOptions: function () {
        g.c.add(this, 'getOptions'); var a = {}; var b = 'map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable draggable'.split(' ')
        var c = 'isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg'.split(' '); var d = ['fillColor', 'fillOpacity', 'path', 'lineJoin', 'texture']; var e = ['center', 'radius', 'texture']; var f = ['bounds', 'texture']; var h = []; this instanceof A.A.Zb && (h = b.concat(c)); this instanceof A.A.Bc && (h = b.concat(d)); this instanceof A.A.bh && (h = b.concat(e).concat(d)); this instanceof A.A.qt && (h = b.concat(e).concat(d)); this instanceof A.A.wt && (h = b.concat(d).concat(f)); for (b = 0; b < h.length; b += 1) {
            a[h[b]] = this.get(h[b], null,
                !0)
        } return a
    }, setOptions: function (a) { g.c.add(this, 'setOptions'); a.hasOwnProperty('path') && (a.path && a.path.length || (a.path = []), a.path = this.Ia(a.path)); a.center && (a.center = this.Ia(a.center)); var b; a.hasOwnProperty('map') && (b = a.map, delete a.map); this.af(a); void 0 !== b && (this.setMap(b), a.map = b); this.q('options'); this.q('change', { type: 'change', target: this }) }, setzIndex: function (a) { g.c.add(this, 'setzIndex'); this.set('zIndex', a) }, getzIndex: function () {
        g.c.add(this, 'getzIndex'); return this.get('zIndex', null,
            !0)
    }, setDraggable: function (a) { g.c.add(this, 'setDraggable'); this.set('draggable', a) } }); A.A.pF = A.A.cd.extend({ B: { visible: !0, zIndex: 10, strokeColor: '#006600', strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: 'solid', strokeDasharray: [10, 5], lineJoin: 'miter', lineCap: 'butt', path: [] }, r: function (a) { A.A.pF.Yc.r.apply(this, arguments) }, setPath: function (a, b) { g.c.add(this, 'setPath'); a && a.length || (a = []); a = this.Ia(a); this.A && this.A.get('deltaPos') && this.A.set('deltaPos', [0, 0], !0); this.set('path', a); this.q('change', { type: 'change', target: this }); b || this.q('setPath') }, getPath: function () {
        g.c.add(this, 'getPath')
        return this.i2()
    }, reset: function () { var a = this.i2(); this.A.set('deltaPos', [0, 0], !0); this.set('path', a) }, i2: function () { var a = this.get('path', null, !0); this.A && this.A.get('deltaPos') && (a = this.A.VA(a, this.A.get('deltaPos'))); return a }, pd: function () { var a = this.get('path'); if (!a || !a.length) return null; a[0] instanceof g.U && (a = [a]); for (var b = new g.se(180, 90, -180, -90), c = 0; c < a.length; c += 1) for (var d = a[c], e = d.length - 1; e >= 0; e -= 1)b.extend(d[e]); return b } }); A.A.pF.Qb({ pd: 'getBounds' }); A.A.ci = g.aa.extend({ ka: [g.ta, g.Se], B: { size: new g.xd(36, 36), imageOffset: new g.H(0, 0), image: g.w.Gb + '/theme/v1.3/markers/0.png', imageSize: null }, r: function (a) { this.CLASS_NAME = 'AMap.Icon'; g.c.va(this, a); a = a || {}; a.size && (a.size = g.a.tq(a.size)); a.imageSize && (a.imageSize = g.a.tq(a.imageSize)); g.a.Db(this, a); this.af(this.B) }, setImageSize: function (a) { g.c.add(this, 'setImageSize'); a = g.a.tq(a); this.set('imageSize', a) }, getImageSize: function () { g.c.add(this, 'getImageSize'); return this.get('imageSize', null, !0) } }); A.A.faa = g.aa.extend({ ka: [g.ta, g.Se], B: { coords: [], type: '' }, r: function (a) { this.CLASS_NAME = 'AMap.MarkerShape'; g.c.va(this, a); g.a.Db(this, a); this.af(this.B) } }); A.A.sb = A.A.Ch.extend({ B: { cursor: 'pointer', visible: !0, zIndex: 100, angle: 0, textAlign: 'left', verticalAlign: 'top', autoRotation: !1, opacity: 1, offset: new g.H(-9, -31), size: new g.H(19, 33), raiseOnDrag: !1, topWhenClick: !1, topWhenMouseOver: !1, animation: 'AMAP_ANIMATION_NONE' }, r: function (a) {
        this.CLASS_NAME = this.CLASS_NAME || 'AMap.Marker'; g.c.va(this, a); a = a || {}; this.Tg = !0; this.xga = g.a.vb(this); this.D = !0; a.position && (a.position = this.Ia(a.position)); a.height && this.setHeight(a.height); g.a.Db(this, a); g.l.Ae && (this.B.angle =
0); this.af(this.B, !0); this.mapChanged(); this.D = !1
    }, getAnchor: function () { g.c.add(this, 'getAnchor'); return this.get('anchor', null, !0) }, setAnchor: function (a) { g.c.add(this, 'setAnchor'); this.set('anchor', a) }, getId: function () { g.c.add(this, 'getId'); return this.xga }, setRaiseOnDrag: function (a) { g.c.add(this, 'setRaiseOnDrag'); this.set('raiseOnDrag', a) }, setPosition: function (a, b) { g.c.add(this, 'setPosition'); a = this.Ia(a); void 0 !== b && (this.D = !0, this.setHeight(b), this.D = !1); this.set('position', a) }, getPosition: function () {
        g.c.add(this,
            'getPosition'); return this.get('position', null, !0)
    }, getBounds: function () { var a = this.get('position', null, !0).lb(); return new g.se(a, a.lb()) }, mapChanged: function () { this.sl('zoom'); var a = this.get('map', null, !0); a && (this.get('position', null, !0) || this.set('position', a.get('center')), a.ZB(this), this.W('zoom', a)) }, getZooms: function () { g.c.add(this, 'getZooms'); return this.get('zooms', null, !0) }, zoomChanged: function () {
        var a = this.get('zooms', null, !0); if (a) {
            var b = this.get('zoom'); b < a[0] || b > a[1] ? this.set('outOfZooms',
                !0) : this.set('outOfZooms', !1); this.A && this.A.qua()
        }
    }, setIcon: function (a) { g.c.add(this, 'setIcon'); this.set('icon', a) }, getIcon: function () { g.c.add(this, 'getIcon'); return this.get('icon', null, !0) }, setContent: function (a) { g.c.add(this, 'setContent'); this.set('content', a) }, getContent: function () { g.c.add(this, 'getContent'); return this.get('content', null, !0) }, getContentDom: function () { return this.get('contentDom', null, !0) }, hide: function () { g.c.add(this, 'hide'); this.set('visible', !1) }, show: function () {
        g.c.add(this,
            'show'); this.set('visible', !0)
    }, setCursor: function (a) { g.c.add(this, 'setCursor'); this.set('cursor', a) }, setRotation: function (a) { g.c.add(this, 'setRotation'); g.l.Ae || this.set('angle', a) }, setAngle: function (a) { g.c.add(this, 'setAngle'); g.l.Ae || typeof a !== 'number' || this.set('angle', a) }, getAngle: function () { g.c.add(this, 'getAngle'); return this.get('angle', null, !0) }, setOffset: function (a) { g.c.add(this, 'setOffset'); this.set('offset', a) }, getOffset: function () {
        g.c.add(this, 'getOffset'); return this.get('offset', null,
            !0)
    }, setTextAlign: function (a) { g.c.add(this, 'setTextAlign'); this.set('textAlign', a) }, getTextAlign: function () { g.c.add(this, 'getTextAlign'); return this.get('textAlign', null, !0) }, setVerticalAlign: function (a) { g.c.add(this, 'setVerticalAlign'); this.set('verticalAlign', a) }, getVerticalAlign: function () { g.c.add(this, 'getVerticalAlign'); return this.get('verticalAlign', null, !0) }, setzIndex: function (a) { g.c.add(this, 'setzIndex'); this.set('zIndex', a) }, getzIndex: function () {
        g.c.add(this, 'getzIndex'); return this.get('zIndex',
            null, !0)
    }, setOpacity: function (a) { g.c.add(this, 'setOpacity'); this.set('opacity', a) }, setDraggable: function (a) { g.c.add(this, 'setDraggable'); this.set('draggable', a) }, getDraggable: function () { g.c.add(this, 'getDraggable'); return this.get('draggable', null, !0) }, moveTo: function (a, b, c) { g.c.add(this, 'moveTo'); a = this.Ia(a); this.set('move', { ag: a, speed: b, tb: c }) }, moveAlong: function (a, b, c, d) {
        g.c.add(this, 'moveAlong'); if (!(a.length < 2)) {
            a = this.Ia(a); for (var e = [a[0]], f = a[0], h = 1; h < a.length; h += 1) {
                f.cb(a[h]) || (e.push(a[h]),
                f = a[h])
            } this.set('move', { ag: e, speed: b, tb: c, Kma: d })
        }
    }, stopMove: function () { g.c.add(this, 'stopMove'); this.set('move', !1) }, pauseMove: function () { g.c.add(this, 'pauseMove'); var a = this.get('move'); if (!a) return !1; a.action = 'pause'; this.set('move', a); return !0 }, resumeMove: function () { g.c.add(this, 'resumeMove'); var a = this.get('move'); if (!a) return !1; a.action = 'resume'; this.set('move', a); return !0 }, setShadow: function (a) { g.c.add(this, 'setShadow'); this.set('shadow', a) }, getShadow: function () {
        g.c.add(this, 'getShadow')
        return this.get('shadow', null, !0)
    }, setClickable: function (a) { g.c.add(this, 'setClickable'); a !== this.get('clickable', null, !0) && this.set('clickable', a) }, getClickable: function () { g.c.add(this, 'getClickable'); return this.get('clickable', null, !0) }, setTitle: function (a, b) { g.c.add(this, 'setTitle'); typeof a === 'string' && this.set('title', a, b) }, getTitle: function () { g.c.add(this, 'getTitle'); return this.get('title', null, !0) }, setLabel: function (a) {
        g.c.add(this, 'setLabel'); a && !g.a.sh(a) && (a = g.extend({}, this.get('label'),
            a)); this.set('label', a)
    }, getLabel: function () { g.c.add(this, 'getLabel'); return this.get('label', null, !0) }, setTop: function (a, b) { g.c.add(this, 'setTop'); this.set('isTop', a, b) }, getTop: function () { g.c.add(this, 'getTop'); return this.get('isTop', null, !0) }, setShape: function (a, b) { g.c.add(this, 'setShape'); this.set('shape', a, b) }, getShape: function () { g.c.add(this, 'getShape'); return this.get('shape', null, !0) }, setAnimation: function (a, b) { g.c.add(this, 'setAnimation'); this.set('animation', a, b) }, getAnimation: function () {
        g.c.add(this,
            'getAnimation'); return this.get('animation', null, !0)
    }, getMap: function () { g.c.add(this, 'getMap'); return this.get('map', null, !0) }, markOnAMAP: function (a) { g.c.add(this, 'markOnAMAP'); a = a || {}; var b = {}; b.name = a.name || this.get('name', null, !0) || ''; a = this.Ia(a.position) || this.get('position', null, !0); b.y = a.P; b.x = a.Q; g.$h.$s(g.$h.nqa(b)) } }); A.A.Z$ = A.A.Ch.extend({ B: { position: null, zooms: [3, 20], opacity: 1, visible: !0 }, r: function (a) { a = a || {}; this.CLASS_NAME = this.CLASS_NAME || 'AMap.LabelMarker'; g.c.va(this, a); arguments.callee.la.apply(this, arguments); this._LabelMarkerId = g.a.vb(this); g.a.Db(this, a); this.af(this.B, !0); this.HQ = []; this.dC = {} }, xo: function (a, b) { for (var c = b._LabelMarkerId || null, d = 0, e = a.length; d < e; d++) if (a[d].data.id === c) return d; return -1 }, e8: function () {
        var a = this.HQ || []; if (a.length) {
            for (var b = 0, c = a.length; b < c; b++) {
                this.on.apply(this,
                    a[b])
            } this.HQ = []
        }
    }, getBounds: function () { g.c.add(this, 'getBounds'); var a = this.get('position', null, !0); try { return typeof a === 'string' ? a = new g.U(a.split(',')) : Object.prototype.toString.apply(a) == '[object Array]' && (a = new g.U(a[0], a[1])), new g.se(a, a.lb()) } catch (b) { return null } }, getPosition: function () { g.c.add(this, 'getPosition'); var a = this.f.Ui; var b = this.xo(a, this); return b !== -1 ? a[b].data.position : null }, setPosition: function (a) {
        g.c.add(this, 'setPosition'); var b = this.f.Ui; var c = this.xo(b, this); c !== -1 && (b[c].data.position =
a); this.f.$r()
    }, getZooms: function () { g.c.add(this, 'getZooms'); var a = this.f.Ui; var b = this.xo(a, this); return b !== -1 ? a[b].opts.zooms : null }, setZooms: function (a) { g.c.add(this, 'setZooms'); var b = this.f.Ui; var c = this.xo(b, this); c !== -1 && (b[c].opts.zooms = a); this.f.$r() }, getOpacity: function () { g.c.add(this, 'getOpacity'); var a = this.f.Ui; var b = this.xo(a, this); return b !== -1 ? a[b].opts.opacity : null }, setOpacity: function (a) { g.c.add(this, 'setOpacity'); var b = this.f.Ui; var c = this.xo(b, this); c !== -1 && (b[c].opts.opacity = a); this.f.$r() }, setIcon: function (a) {
        var b =
this.f.Ui; var c = this.xo(b, this); if (c !== -1) { var d = a.size; var e = a.clipSize; d && (a.size = this.f.hG(d)); e && (a.clipSize = this.f.hG(e)); b[c].opts.icon = g.extend({}, b[c].opts.icon, a) } this.f.$r()
    }, setText: function (a) { var b = this.f.Ui; var c = this.xo(b, this); c !== -1 && (b[c].data.txt = void 0 == a.content ? b[c].data.txt : a.content, b[c].opts.text = g.extend({}, b[c].opts.text, a), a.style && (b[c].opts.text.style = g.extend({}, b[c].opts.text.style, a.style)), this.f.$r()) }, on: function (a, b) {
        g.c.add(this, 'on'); if (this.f) {
            this.dC[a] = b; var c = this; var d =
this.f; d._markerBindArray || (d._markerBindArray = {}); var e = this._LabelMarkerId; d._markerBindArray[e] || (d._markerBindArray[e] = this); d.GQ[a] ? d.GQ[a]++ : (d.GQ[a] = 1, this.f.on(a, function (a) { var b = a.type; if (a && a.data && a.data.data && a.data.data.id && a.data.data.id) { var d = a.data.data.id; var b = (d = c.f && c.f._markerBindArray && c.f._markerBindArray[d]) && d.dC[b]; d && b && (a.target = d, typeof b === 'function' && b(a)) } }))
        } else this.HQ.push(arguments)
    }, off: function (a) {
        g.c.add(this, 'off'); this.dC[a] && delete this.dC[a]; Object.keys(this.dC).length ||
delete this.f._markerBindArray[this._LabelMarkerId]
    } }); A.A.Jn = A.A.Ch.extend({ B: { visible: !1, items: [] }, r: function (a) { this.CLASS_NAME = 'AMap.ContextMenu'; g.c.va(this, a); this.Tg = !0; g.a.Db(this, a); this.B.items = []; this.af(this.B) }, addItem: function (a, b, c) { g.c.add(this, 'addItem'); this.get('items').push({ Gn: a, tb: b, XJ: c }); this.q('items') }, removeItem: function (a, b) { g.c.add(this, 'removeItem'); var c = this.get('items'); var d; var e; for (e = 0; e < c.length; e += 1) if (d = c[e], d.Gn === a && d.tb === b) { c.splice(e, 1); break } this.q('items') }, open: function (a, b) {
        g.c.add(this, 'open'); this.D = !0; b = g.a.Ia(b)
        this.set('position', b); this.map ? this.map && this.map !== a && (this.map.qz(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a)); this.q('open', { type: 'open', target: this }); this.D = !1
    }, close: function () { g.c.add(this, 'close'); this.D = !0; this.setMap(null); this.map && (this.map = this.map.$x = null, this.q('close', { type: 'close', target: this })); this.D = !1 } }); A.A.Re = A.A.Ch.extend({ B: { visible: !0, offset: new g.H(0, 0), showShadow: !1, closeWhenClickMap: !1, retainWhenClose: !0, autoMove: !0, altitude: 0, anchor: 'bottom-center' }, r: function (a) { this.CLASS_NAME = this.CLASS_NAME || 'AMap.InfoWindow'; g.c.va(this, a); a = a || {}; this.Tg = !0; a && a.size && (a.size = g.a.tq(a.size)); g.a.Db(this, a); this.af(this.B); a.position && this.set('position', g.a.Ia(a.position), !0); a.height && this.set('altitude', this.OQ(a.height), !0) }, open: function (a, b, c) {
        g.c.add(this, 'open'); b = g.a.Ia(b); if (a && !this.TK && (b =
b || this.get('position', null, !0))) { this.q('change', { type: 'change', target: this }); c = this.OQ(c) || this.get('altitude'); var d = this.get('map', null, !0); d && d === a ? (this.set('altitude', c, !0), this.set('position', b)) : (this.map = a, a.nm && a.nm.close(), this.set('position', b, !0), this.set('altitude', c, !0), this.D = !0, this.setMap(a), this.D = !1); this.q('open', { type: 'open', target: this }) }
    }, close: function () {
        g.c.add(this, 'close'); this.A && this.A.map && (this.D = !0, this.setMap(null), this.map = null, this.q('change', { type: 'change', target: this }),
        this.D = !1)
    }, getAnchor: function () { g.c.add(this, 'getAnchor'); return this.get('anchor', null, !0) }, setAnchor: function (a) { g.c.add(this, 'setAnchor'); this.set('anchor', a); this.q('change', { type: 'change', target: this }) }, setContent: function (a) { g.c.add(this, 'setContent'); this.set('content', a); this.q('change', { type: 'change', target: this }) }, getContentU: function () { g.c.add(this, 'getContentU'); return this.get('content', null, !0) }, getContentDom: function () { return this.get('contentDom', null, !0) }, getContent: function () {
        g.c.add(this,
            'getContent'); return this.get('content', null, !0)
    }, setPosition: function (a) { g.c.add(this, 'setPosition'); a = g.a.Ia(a); this.set('position', a); this.q('change', { type: 'change', target: this }) }, setOffset: function (a) { g.c.add(this, 'setOffset'); this.set('offset', a); this.q('change', { type: 'change', target: this }) }, getPosition: function () { g.c.add(this, 'getPosition'); return this.get('position', null, !0) }, setSize: function (a) { g.c.add(this, 'setSize'); a = g.a.tq(a); this.set('size', a); this.q('change', { type: 'change', target: this }) },
    getSize: function (a) { g.c.add(this, 'getSize'); var b = this.get('size', null, !0); if (b) return b; if (this.A && !a) return new g.xd(this.A.nh.offsetWidth, this.A.nh.offsetHeight) }, getIsOpen: function () { g.c.add(this, 'getIsOpen'); return !!this.get('map') } }); A.A.Zb = A.A.pF.extend({ B: { isOutline: !1, outlineColor: '#000000', geodesic: !1, dirColor: 'white', borderWeight: 1 }, r: function (a) { this.CLASS_NAME = this.CLASS_NAME || 'AMap.Polyline'; g.c.va(this, a); this.D = !0; A.A.Zb.Yc.r.apply(this, arguments); this.Tg = !0; a = a || {}; a.zIndex = typeof a.zIndex === 'number' ? a.zIndex : 50; a.path && (a.path = this.Ia(a.path)); g.a.Db(this, a); this.setOptions(this.B); this.D = !1 }, getLength: function () { g.c.add(this, 'getLength'); for (var a = this.get('path'), b = 0, c = 0; c < a.length - 1; c += 1)b += a[c].ye(a[c + 1]); return parseFloat(b.toFixed(2)) } }); (function (a) {
        function b (a, b, c, d) { if (a >= 1) return d; var e = 1 - a; return e * e * b + 2 * e * a * c + a * a * d } function c (a, b, c, d, e) { if (a >= 1) return e; var f = 3 * (c[0] - b[0]); var h = 3 * (d[0] - c[0]) - f; var s = 3 * (c[1] - b[1]); c = 3 * (d[1] - c[1]) - s; return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]] } function d (a, c, d, e) { return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])] } function e (b, c) { c = a.a.Ia(c); return b.sD(c, 20).rl() } function f (b, c) {
            a.a.isArray(c) && (c = new a.H(c[0], c[1])); return b.QD(c,
                20)
        } function h (b, f, h, n, p, q) {
            var r = null; if (b && h && h.length) {
                b = [b]; b.push.apply(b, h); b.push(f); h = 0; for (r = b.length; h < r; h++)b[h] = e(n, b[h]); h = a.extend({ tolerance: 4, interpolateNumLimit: [3, 300] }, q); q = h.tolerance; h = h.interpolateNumLimit; q = Math.max(2, q); for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++) var w = b[u]; var t = b[u + 1]; var r = r + Math.abs(t[0] - w[0]); var s = s + Math.abs(t[1] - w[1]); a: {
                    p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q))); q = null; switch (b.length) { case 3:q = d; break; case 4:q = c; break; default:r = null; break a }h = []
                    r = [0].concat(b); for (s = 1; s < p - 2; s++)r[0] = s / p, h.push(q.apply(null, r)); h.push(b[b.length - 1]); r = h
                }
            } return r || [e(n, f)]
        }a.uw = { ZFa: d, DCa: c, mI: (function () {
            function a (b, c, d) { return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b } function b (a) { return a } var c = {}; var d = typeof Float32Array === 'function'; return function (e, f, h, s) {
                function u (b) {
                    if (b === 0)b = 0; else if (b === 1)b = 1; else {
                        for (var c = 0, d = 1; d !== 10 && w[d] <= b; ++d)c += 0.1; --d; var d = c + (b - w[d]) / (w[d + 1] - w[d]) * 0.1; var l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e; if (l >= 0.001) {
                            for (c = 0; c < 4; ++c) {
                                l = 3 *
(1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e; if (l === 0) break; d -= (a(d, e, h) - b) / l
                            }b = d
                        } else if (l === 0)b = d; else { var d = c; var c = c + 0.1; var m; var n = 0; do m = d + (c - d) / 2, l = a(m, e, h) - b, l > 0 ? c = m : d = m; while (Math.abs(l) > 1E-7 && ++n < 10);b = m }b = a(b, f, s)
                    } return b
                } if (!(e >= 0 && e <= 1 && h >= 0 && h <= 1)) throw Error('bezier x values must be in [0, 1] range'); var v = arguments.toString(); if (c[v]) return c[v]; if (e === f && h === s) return b; for (var w = d ? new Float32Array(11) : Array(11), t = 0; t < 11; ++t)w[t] = a(0.1 * t, e, h); return c[v] = u
            }
        }()), D3: function (a, b, c, d) {
            var e; var f; var r = []; e = 0; for (f =
a.length; e < f; e += 1)r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d)); return r
        }, aqa: function (a, b, c, d) { a = this.D3(a, b, c, d); c = []; d = 0; for (var e = a.length; d < e; d++)c.push(f(b, a[d])); return c } }
    })(g); A.A.$z = A.A.Zb.extend({ B: { tolerance: 4, interpolateNumLimit: [3, 300] }, r: function (a) { this.CLASS_NAME = 'AMap.BezierCurve'; g.c.va(this, a); A.A.$z.Yc.r.apply(this, arguments) }, getLength: function () { g.c.add(this, 'getLength'); this.get('map'); this.D = !0; var a = this.getInterpolateLngLats(); this.D = !1; return g.Yq.distanceOfLine(a) }, getInterpolateLngLats: function () { g.c.add(this, 'getInterpolateLngLats'); var a = this.get('map'); return g.uw.aqa(this.get('path'), a && a.ij || g.Zh.tL, Math.pow(2, 2), this.B) }, getSerializedPath: function () {
        g.c.add(this,
            'getSerializedPath'); for (var a = this.get('path', null, !0), b = [], c = 0, d = a.length; c < d; c++) { var e = a[c]; if (e instanceof g.U) { var f = []; if (e.controlPoints) for (var h = 0, k = e.controlPoints.length; h < k; h++)f.push(e.controlPoints[h].jR()), f.push(e.controlPoints[h].gR()); f.push(e.jR()); f.push(e.gR()); b.push(f) } else b.push(e) } return b
    }, Ia: function (a) { var b = typeof a[0]; if (g.a.isArray(a) && b === 'object') { for (b = 0; b < a.length; b += 1)a[b] = this.Qia(a[b]); return a } return [this.DFa(a)] }, Qia: function (a) {
        var b; if (a instanceof g.U) {
            b =
a
        } else { b = typeof a[0]; var c; var d; var e = []; if (b === 'string' || b === 'number') { d = a.length; if (d % 2) throw Error("LngLat number should be even, now it's " + d); b = new g.U(a[d - 2], a[d - 1]); c = 0; for (d -= 2; c < d; c += 2)e.push(new g.U(a[c], a[c + 1])) } else if (g.a.isArray(a[0])) for (d = a.length, b = new g.U(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++)e.push(new g.U(a[c][0], a[c][1])); else throw Error("AMap.LngLat expected, now it's " + a); b && e.length && (b.controlPoints = g.a.Ia(e)) } if (b.controlPoints && b.controlPoints.length > 2) throw Error('Control Points Number should be 1 or 2 !')
        return b
    } }); A.A.Bc = A.A.pF.extend({ r: function (a) { this.CLASS_NAME = this.CLASS_NAME || 'AMap.Polygon'; g.c.va(this, a); this.D = !0; A.A.Bc.Yc.r.apply(this, arguments); this.Tg = !0; a = a || {}; a.zIndex = typeof a.zIndex === 'number' ? a.zIndex : 10; a.path && (a.path = this.Ia(a.path)); g.a.Db(this, g.extend({ fillColor: '#FFAA00', fillOpacity: 0.9 }, a)); this.setOptions(this.B); this.D = !1 }, qR: function (a) {
        var b = 6378137 * Math.PI / 180; var c = 0; var d = a.length; if (d < 3) return 0; for (var e = 0; e < d - 1; e += 1) var f = a[e]; var h = a[e + 1]; var k = f.Q * b * Math.cos(f.P * Math.PI / 180); var f = f.P * b; var l = h.Q *
b * Math.cos(h.P * Math.PI / 180); var c = c + (k * h.P * b - l * f); e = a[e]; a = a[0]; d = e.Q * b * Math.cos(e.P * Math.PI / 180); e = e.P * b; h = a.Q * b * Math.cos(a.P * Math.PI / 180); c += d * a.P * b - h * e; return 0.5 * Math.abs(c)
    }, getArea: function () { g.c.add(this, 'getArea'); var a = this.get('path', null, !0); var b; if (!a.length || a[0] instanceof g.U)b = this.qR(a); else { b = this.qR(a[0]); for (var c = 1; c < a.length; c += 1)b -= this.qR(a[c]) } return Number(b.toFixed(2)) }, toString: function () { g.c.add(this, 'toString'); return this.get('path').join(';') }, contains: function (a) {
        g.c.add(this,
            'contains'); a = g.a.Ia(a); var b = this.get('path'); b.length && b[0] instanceof g.U && (b = [b]); a = [a.Q, a.P]; for (var c, d = 0, e = b.length; d < e && (c = this.tma(b[d]), g.wd.cq(c) || c.reverse(), c = g.wd.Rd(a, c, d === 0 ? !0 : !1), d > 0 && (c = !c), c); d += 1);return c
    }, tma: function (a) { for (var b = [], c = 0; c < a.length; c += 1)b.push([a[c].Q, a[c].P]); return b } }); A.A.bh = A.A.cd.extend({ B: { visible: !0, zIndex: 10, strokeColor: '#006600', strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: 'solid', strokeDasharray: [10, 5], radius: 1E3, fillColor: '#006600', fillOpacity: 0.9, unit: 'miter' }, r: function (a) {
        this.CLASS_NAME = this.CLASS_NAME || 'AMap.Circle'; g.c.va(this, a); this.D = !0; A.A.bh.Yc.r.apply(this, arguments); a = a || {}; a.center && (a.center = g.a.Ia(a.center)); a.zIndex = typeof a.zIndex === 'number' ? a.zIndex : 10; g.a.bk(a.radius, 'string') && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius)
        g.a.Db(this, a); this.Tg = this.B.center ? !0 : !1; this.setOptions(this.B); this.D = !1
    }, setCenter: function (a, b) { g.c.add(this, 'setCenter'); (a = g.a.Ia(a)) && a instanceof g.U && (this.A && this.A.get('deltaPos') && this.A.set('deltaPos', [0, 0], !0), this.set('center', a), this.q('change', { type: 'change', target: this }), this.Tg || (this.Tg = !0, this.get('map') && this.get('map').q('overlays')), b || this.q('setCenter')) }, getCenter: function () {
        g.c.add(this, 'getCenter'); var a = this.get('center', null, !0); this.A && this.A.get('deltaPos') && (a =
this.A.VA([a], this.A.get('deltaPos'))[0]); return a
    }, reset: function () { var a = this.get('center', null, !0); this.A && this.A.get('deltaPos') && (a = this.A.VA([a], this.A.get('deltaPos'))[0], this.A.set('deltaPos', [0, 0], !0)); this.set('center', a) }, setRadius: function (a, b) { g.c.add(this, 'setRadius'); this.set('radius', a); this.q('change', { type: 'change', target: this }); b || this.q('setRadius') }, getPath: function (a) {
        g.c.add(this, 'getPath'); a = a || 36; for (var b = this.get('center', null, !0), c = this.get('radius', null, !0), d = [], e = 0; e <
a; e += 1) { var f = Math.PI * e / a * 2; var h = Math.cos(f) * c; var f = Math.sin(f) * c; d.push(b.offset(h, f)) } return d
    }, getRadius: function () { g.c.add(this, 'getRadius'); return this.get('radius', null, !0) }, getBounds: function () { var a = this.get('center'); var b = this.get('radius'); if (!a) return null; var c = a.offset(-b, -b); var a = a.offset(b, b); return new g.se(c, a) }, contains: function (a) { g.c.add(this, 'contains'); return this.get('center').ye(a) <= this.get('radius') ? !0 : !1 } })
    A.A.xV = A.A.bh.extend({ r: function (a) { this.CLASS_NAME = 'AMap.CircleMarker'; g.c.va(this, a); a = a || {}; a.unit = 'px'; void 0 === a.radius ? a.radius = 20 : g.a.bk(a.radius, 'string') && (a.radius = parseFloat(a.radius), isNaN(a.radius) && (a.radius = 20)); A.A.xV.Yc.r.apply(this, arguments) }, getBounds: function () { this.D = !0; var a = this.getCenter(); this.D = !1; return new g.se(a, a.lb()) }, contains: function (a) {
        g.c.add(this, 'contains'); this.D = !0; var b = this.getMap(); this.D = !1; if (!b) return !1; var c = this.get('center'); b.D = !0; var d = !1; c.ye(a) <=
this.get('radius') * b.getResolution(c) && (d = !0); b.D = !1; return d
    } }); var qc = g.aa.extend({ r: function (a) { var b = Array(3); var c; c = a instanceof Array ? a : a instanceof g.Al || a instanceof g.Qa ? a.elements : arguments; b[0] = c[0] || 0; b[1] = c[1] || 0; b[2] = c[2] || 0; this.elements = b }, length: function () { return Math.sqrt(this.C5()) }, C5: function () { var a = this.elements; return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] }, normalize: function () { var a = this.elements; var b = a[0]; var c = a[1]; var d = a[2]; var e = Math.sqrt(b * b + c * c + d * d); if (e) { if (e === 1) return this } else return a[0] = 0, a[1] = 0, a[2] = 0, this; e = 1 / e; a[0] = b * e; a[1] = c * e; a[2] = d * e; return this },
        lb: function () { return new g.Qa(this) }, copy: function (a) { var b = this.elements; a = a.elements; b[0] = a[0]; b[1] = a[1]; b[2] = a[2]; return this }, set: function (a, b, c) { var d = this.elements; d[0] = a; d[1] = b; d[2] = c }, cb: function (a) { var b = this.elements; a = a.elements; return b[0] === a[0] && b[1] === a[1] && b[2] === a[2] }, An: function (a) { var b = this.elements; b[0] *= a; b[1] *= a; b[2] *= a; return this }, add: function (a) { var b = this.elements; a = a.elements; b[0] += a[0]; b[1] += a[1]; b[2] += a[2]; return this }, qla: function (a, b) {
            var c = a.elements; var d = b.elements
            var e = this.elements; e[0] = c[0] + d[0]; e[1] = c[1] + d[1]; e[2] = c[2] + d[2]; return this
        }, sub: function (a) { a = a.elements; var b = this.elements; b[0] -= a[0]; b[1] -= a[1]; b[2] -= a[2]; return this }, Dz: function (a, b) { var c = a.elements; var d = b.elements; var e = this.elements; e[0] = c[0] - d[0]; e[1] = c[1] - d[1]; e[2] = c[2] - d[2]; return this }, Tr: function (a) { a = a.elements; var b = this.elements; b[0] = b[1] * a[2] - b[2] * a[1]; b[1] = b[2] * a[0] - b[0] * a[2]; b[2] = b[0] * a[1] - b[1] * a[0]; return this }, ey: function (a, b) {
            var c = a.elements; var d = b.elements; var e = this.elements; e[0] = c[1] * d[2] -
c[2] * d[1]; e[1] = c[2] * d[0] - c[0] * d[2]; e[2] = c[0] * d[1] - c[1] * d[0]; return this
        }, Df: function (a) { a = a.elements; var b = this.elements; return b[0] * a[0] + b[1] * a[1] + b[2] * a[2] }, ye: function (a) { return Math.sqrt(this.B2(a)) }, B2: function (a) { var b = a.elements; var c = this.elements; a = c[0] - b[0]; var d = c[1] - b[1]; var b = c[2] - b[2]; return a * a + d * d + b * b }, Tf: function (a) {
            var b = this.elements[0]; var c = this.elements[1]; var d = this.elements[2]; a = a.elements; var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]); this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e; this.elements[1] =
(a[1] * b + a[5] * c + a[9] * d + a[13]) * e; this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e; return this
        } }); g.Qa = qc; g.Qa.Qb({ Df: 'dot', lb: 'clone', add: 'add', sub: 'sub', qla: 'addVectors', Dz: 'subVectors', ey: 'crossVectors', normalize: 'normalize', length: 'length' })
    var rc = g.aa.extend({ r: function (a) { var b = Array(4); var c; c = a instanceof Array ? a : arguments; b[0] = c[0]; b[1] = c[1]; b[2] = c[2]; b[3] = c[3] || 1; this.elements = b }, copy: function (a) { var b = this.elements; a = a.elements; b[0] = a[0]; b[1] = a[1]; b[2] = a[2]; b[3] = void 0 !== a[3] ? a[3] : 1; return this }, multiply: function (a) { var b = this.elements; b[0] *= a; b[1] *= a; b[2] *= a; b[3] *= a }, Tf: function (a) {
        var b = this.elements[0]; var c = this.elements[1]; var d = this.elements[2]; var e = this.elements[3]; a = a.elements; this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e; this.elements[1] =
a[1] * b + a[5] * c + a[9] * d + a[13] * e; this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e; this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e; return this
    } }); g.Al = rc; function sc (a, b) { this.dz = void 0 !== a ? a : new g.Qa(1, 0, 0); this.rC = void 0 !== b ? b : 0 }g.Gw = sc; sc.prototype = { set: function (a, b) { this.dz.copy(a); this.rC = b; return this }, normalize: function () { var a = 1 / this.dz.length(); this.dz.An(a); this.rC *= a; return this }, fI: function (a) { return this.dz.Df(a) + this.rC } }; function vc (a, b, c, d, e) { a.dz.set(b, c, d); a.rC = e; return a } function wc (a, b, c, d, e, f) { this.ND = [void 0 !== a ? a : new g.Gw(), void 0 !== b ? b : new g.Gw(), void 0 !== c ? c : new g.Gw(), void 0 !== d ? d : new g.Gw(), void 0 !== e ? e : new g.Gw(), void 0 !== f ? f : new g.Gw()] }g.HV = wc
    wc.prototype = { set: function (a, b, c, d, e, f) { var h = this.ND; h[0].copy(a); h[1].copy(b); h[2].copy(c); h[3].copy(d); h[4].copy(e); h[5].copy(f); return this }, lb: function () { return (new g.HV()).copy(this) }, copy: function (a) { for (var b = this.ND, c = 0; c < 6; c++)b[c].copy(a.ND[c]); return this }, kJ: (function () {
        var a = new g.Qa(); var b = new g.Qa(); var c = a.elements; var d = b.elements; return function (e) {
            var f = this.ND; var h = e.max.elements; e = e.min.elements; for (var k = 0; k < 6; k++) {
                var l = f[k]; var m = l.dz.elements; c[0] = m[0] > 0 ? e[0] : h[0]; d[0] = m[0] > 0 ? h[0] : e[0]; c[1] = m[1] > 0
                    ? e[1] : h[1]; d[1] = m[1] > 0 ? h[1] : e[1]; c[2] = m[2] > 0 ? e[2] : h[2]; d[2] = m[2] > 0 ? h[2] : e[2]; m = l.fI(a); l = l.fI(b); if (m < 0 && l < 0) return !1
            } return !0
        }
    }()) }; (function (a) {
        function b (a) { this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] }a.WV = function (a) { this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]] }; b.prototype.eU = function () { var a = this.elements; a[0] = 1; a[4] = 0; a[8] = 0; a[12] = 0; a[1] = 0; a[5] = 1; a[9] = 0; a[13] = 0; a[2] = 0; a[6] = 0; a[10] = 1; a[14] = 0; a[3] = 0; a[7] = 0; a[11] = 0; a[15] = 1 }; b.prototype.set = function (a) {
            if (a.elements !== this.elements) {
                return this.elements = a.elements.slice(0),
                this
            }
        }; b.prototype.toFixed = function (b) { for (var d = this.elements, e = 0; e < 16; ++e)d[e] !== 0 && (d[e] = a.a.mc(d[e], b)); return this }; b.prototype.concat = function (a) { var b, e, f, h, k, l, m; e = b = this.elements; f = a.elements; if (b === f) for (f = Array(16), a = 0; a < 16; ++a)f[a] = b[a]; for (a = 0; a < 4; a++)h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * f[0] + k * f[1] + l * f[2] + m * f[3], b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7], b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m * f[11], b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15]; return this }; b.multiply = function (b, d) {
            var e = Array(16); var f; var h
            var k; var l; var m; var n; var p; k = h = b.elements; l = d.elements; if (h === l) for (f = 0; f < 16; ++f)e[f] = h[f]; for (f = 0; f < 4; f++)h = k[f], m = k[f + 4], n = k[f + 8], p = k[f + 12], e[f] = h * l[0] + m * l[1] + n * l[2] + p * l[3], e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7], e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p * l[11], e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15]; return new a.Ic(e)
        }; b.prototype.multiply = b.prototype.concat; b.prototype.yh = function (b) {
            var d = this.elements; b = b.elements; var e = new a.Al(); var f = e.elements; f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12]; f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] *
d[13]; f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14]; f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15]; return e
        }; b.prototype.BE = function () { var a, b; a = this.elements; b = a[1]; a[1] = a[4]; a[4] = b; b = a[2]; a[2] = a[8]; a[8] = b; b = a[3]; a[3] = a[12]; a[12] = b; b = a[6]; a[6] = a[9]; a[9] = b; b = a[7]; a[7] = a[13]; a[13] = b; b = a[11]; a[11] = a[14]; a[14] = b; return this }; b.prototype.Nwa = function (a) {
            var b, e, f; b = a.elements; a = this.elements; e = []; e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[7] * b[10]); e[4] = -b[4] *
(b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]); e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] * b[9]); e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[6] * b[9]); e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[3] * b[10]); e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[3] * b[10]); e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] *
(b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]); e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[2] * b[9]); e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] * b[6]); e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] * b[6]); e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] * b[5]); e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] -
b[2] * b[5]); e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] * b[6]); e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] * b[6]); e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] * b[5]); e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] * b[5]); f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12]; if (f === 0) return this; f = 1 / f; for (b = 0; b < 16; b++)a[b] = e[b] * f; return this
        }; b.prototype.Rg = function () { return (new b()).Nwa(this) }
        b.prototype.hU = function (a, b, e, f, h, k) { var l, m, n, p; if (a === b || e === f || h === k) throw 'null frustum'; m = 1 / (b - a); n = 1 / (f - e); p = 1 / (k - h); l = this.elements; l[0] = 2 * m; l[1] = 0; l[2] = 0; l[3] = 0; l[4] = 0; l[5] = 2 * n; l[6] = 0; l[7] = 0; l[8] = 0; l[9] = 0; l[10] = -2 * p; l[11] = 0; l[12] = -(b + a) * m; l[13] = -(f + e) * n; l[14] = -(k + h) * p; l[15] = 1; return this }; b.prototype.oua = function (a, d, e, f, h, k) { return this.concat((new b()).hU(a, d, e, f, h, k)) }; b.prototype.Lwa = function (a, b, e, f, h, k) {
            var l, m, n, p; if (a === b || f === e || h === k) throw 'null frustum'; if (h <= 0) throw 'near <= 0'; if (k <=
0) throw 'far <= 0'; m = 1 / (b - a); n = 1 / (f - e); p = 1 / (k - h); l = this.elements; l[0] = 2 * h * m; l[1] = 0; l[2] = 0; l[3] = 0; l[4] = 0; l[5] = 2 * h * n; l[6] = 0; l[7] = 0; l[8] = (b + a) * m; l[9] = (f + e) * n; l[10] = -(k + h) * p; l[11] = -1; l[12] = 0; l[13] = 0; l[14] = -2 * h * k * p; l[15] = 0; return this
        }; b.prototype.XQ = function (a, d, e, f, h, k) { return this.concat((new b()).Lwa(a, d, e, f, h, k)) }; b.prototype.m8 = function (a, b, e, f) {
            var h, k; if (e === f || b === 0) throw 'null frustum'; if (e <= 0) throw 'near <= 0'; if (f <= 0) throw 'far <= 0'; a /= 2; k = Math.sin(a); if (k === 0) throw 'null frustum'; h = 1 / (f - e); k = Math.cos(a) /
k; a = this.elements; a[0] = k / b; a[1] = 0; a[2] = 0; a[3] = 0; a[4] = 0; a[5] = k; a[6] = 0; a[7] = 0; a[8] = 0; a[9] = 0; a[10] = -(f + e) * h; a[11] = -1; a[12] = 0; a[13] = 0; a[14] = -2 * e * f * h; a[15] = 0; return this
        }; b.prototype.perspective = function (a, d, e, f) { return this.concat((new b()).m8(a, d, e, f)) }; b.prototype.Mv = function (a, b, e) { var f = this.elements; f[0] = a; f[4] = 0; f[8] = 0; f[12] = 0; f[1] = 0; f[5] = b; f[9] = 0; f[13] = 0; f[2] = 0; f[6] = 0; f[10] = e; f[14] = 0; f[3] = 0; f[7] = 0; f[11] = 0; f[15] = 1; return this }; b.prototype.scale = function (a, b, e) {
            var f = this.elements; f[0] *= a; f[4] *= b
            f[8] *= e; f[1] *= a; f[5] *= b; f[9] *= e; f[2] *= a; f[6] *= b; f[10] *= e; f[3] *= a; f[7] *= b; f[11] *= e; return this
        }; b.prototype.p8 = function (a, b, e) { var f = this.elements; f[12] = a; f[13] = b; f[14] = e; return this }; b.prototype.translate = function (a, b, e) { var f = this.elements; f[12] += f[0] * a + f[4] * b + f[8] * e; f[13] += f[1] * a + f[5] * b + f[9] * e; f[14] += f[2] * a + f[6] * b + f[10] * e; f[15] += f[3] * a + f[7] * b + f[11] * e; return this }; b.prototype.zz = function (a, b, e, f) {
            var h, k, l, m, n, p, q, r; a = Math.PI * a / 180; h = this.elements; k = Math.sin(a); a = Math.cos(a); b !== 0 && e === 0 && f === 0
                ? (b < 0 && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : b === 0 && e !== 0 && f === 0 ? (e < 0 && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : b === 0 && e === 0 && f !== 0 ? (f < 0 && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f), l !== 1 && (l = 1 / l, b *= l, e *= l, f *= l), l = 1 - a, m = b * e, n = e * f, p = f * b, q = b * k,
                r = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = f * f * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0); h[15] = 1; return this
        }; b.prototype.rotate = function (a, d, e, f) { return this.concat((new b()).zz(a, d, e, f)) }; b.prototype.Ss = function (a) { return this.rotate(a, 1, 0, 0) }; b.prototype.Ts = function (a) { return this.rotate(a, 0, 1, 0) }; b.prototype.Us = function (a) { return this.rotate(a, 0, 0, 1) }; a.Ic = b
    })(g); A.A.qt = A.A.Bc.extend({ B: { visible: !0, zIndex: 10, strokeColor: '#006600', strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: 'solid', strokeDasharray: [10, 5], radius: [1E3, 1E3], fillColor: '#006600', fillOpacity: 0.9 }, r: function () {
        var a = this; var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; this.CLASS_NAME = 'AMap.Ellipse'; g.c.va(this, b); var b = g.extend({}, this.B, b); var c = this.Gr(b); b.path = c; A.A.qt.Yc.r.call(this, b); this.set('path', c); this.get('center') && this.get('map') || (this.Tg = !1); this.on('movepoly', function (b) {
            var c =
a.get('map'); b = c.Vd(c.Ab(a.get('center')).add(b.cK)); c.view.type === '3D' && a.set('deltaPos', [0, 0], !0); a.set('center', b)
        })
    }, Gr: function () {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; var b = []; var c = a.center || this.get('center'); var d = a.map || this.get('map'); if (c && d) {
            for (var c = g.a.Ia(c), e = a.radius || this.get('radius'), f = d.Ab(c), a = f.x, f = f.y, h = g.a.map(e, function (a) { return a / d.getResolution(c, 20) }), e = h[0], h = h[1], k = g.l.ba, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
                var n = m * l; var n = { x: a + e * Math.cos(n), y: f +
h * Math.sin(n) }; b.push(d.Vd(n))
            }
        } return b
    }, mapChanged: function () { g.a.Oh(A.A.qt.Yc.mapChanged) && A.A.qt.Yc.mapChanged.apply(this); this.D = !0; this.setPath(this.Gr()); this.D = !1; !this.Tg && this.get('map') && (this.Tg = !0, this.get('map').q('overlays')) }, setCenter: function (a, b) {
        g.c.add(this, 'setCenter'); (a = g.a.Ia(a)) && a instanceof g.U && (this.A && this.A.get('deltaPos') && this.A.set('deltaPos', [0, 0], !0), this.set('center', a), this.set('path', this.Gr()), this.Tg || (this.Tg = !0, this.get('map') && this.get('map').q('overlays')),
        b || (this.q('setCenter'), this.q('change', { type: 'change', target: this })))
    }, setRadius: function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; g.c.add(this, 'setRadius'); a && a.length === 2 && (this.set('radius', a), this.set('path', this.Gr()), b || (this.q('change', { type: 'change', target: this }), this.q('setPath'))) }, setOptions: function (a) { A.A.qt.Yc.setOptions.call(this, a); this.D = !0; a.radius && this.setRadius(a.radius, !0); a.center && this.setCenter(a.center, !0); this.D = !1 }, getRadius: function () {
        g.c.add(this,
            'getRadius'); return this.get('radius', null, !0)
    }, getCenter: function () { g.c.add(this, 'getCenter'); var a = this.get('center', null, !0); this.A && this.A.get('deltaPos') && this.A.VA([a], this.A.get('deltaPos'))[0]; return a } }); A.A.wt = A.A.Bc.extend({ B: { visible: !0, zIndex: 10, strokeColor: '#006600', strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: 'solid', strokeDasharray: [10, 5], fillColor: '#006600', fillOpacity: 0.9 }, r: function () {
        var a = this; var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; this.CLASS_NAME = 'AMap.Rectangle'; g.c.va(this, b); b = g.extend({}, this.B, b); this.D = !0; var c = this.Gr(b); b.path = c; A.A.wt.Yc.r.call(this, b); this.setPath(c); this.B.bounds && this.get('map') || (this.Tg = !1); this.on('movepoly', function (b) {
            var c = a.get('map')
            var f = a.get('bounds'); var h = c.Vd(c.Ab(f.wc).add(b.cK)); b = c.Vd(c.Ab(f.nc).add(b.cK)); c.view.type === '3D' && a.set('deltaPos', [0, 0]); a.set('bounds', new g.se(h, b))
        }); this.D = !1
    }, Gr: function () { var a = []; var b = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get('bounds'); if (b) { b.D = !0; var c = b.getSouthWest(); var d = b.getNorthEast(); b.D = !1; g.a.Pb([new g.U(c.Q, c.P, !0), new g.U(d.Q, c.P, !0), new g.U(d.Q, d.P, !0), new g.U(c.Q, d.P, !0)], function (b) { return a.push(b) }) } return a }, mapChanged: function () {
        g.a.Oh(A.A.wt.Yc.mapChanged) &&
A.A.wt.Yc.mapChanged.apply(this); this.D = !0; this.setPath(this.Gr()); this.D = !1; !this.Tg && this.get('map') && (this.Tg = !0, this.get('map').q('overlays'))
    }, setOptions: function (a) { this.D = !0; A.A.wt.Yc.setOptions.call(this, a); a.bounds && this.setBounds(a.bounds, !0); this.D = !1 }, setBounds: function (a) {
        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; g.c.add(this, 'setBounds'); a && a instanceof g.se && (this.set('bounds', a), this.set('path', this.Gr()), this.Tg || (this.Tg = !0, this.get('map') && this.get('map').q('overlays')),
        b || (this.q('change', { type: 'change', target: this }), this.q('setBounds')))
    }, getBounds: function () { g.c.add(this, 'getBounds'); return this.get('bounds', null, !0) } }); A.A.mW = A.A.sb.extend({ B: { text: '', textAlign: 'center', verticalAlign: 'middle', offset: new g.H(0, 0) }, r: function (a) { this.CLASS_NAME = 'AMap.Text'; g.c.va(this, a); A.A.mW.Yc.r.apply(this, arguments); this.Bfa(); this.D = !0; this.setText(this.get('text')); this.setStyle(this.get('style')); this.D = !1 }, Bfa: function () { if (!this.QB) { var a = document.createElement('div'); a.className = 'amap-overlay-text-container'; this.QB = a } }, getText: function () { g.c.add(this, 'getText'); return this.get('text', null, !0) }, setText: function (a) {
        g.c.add(this,
            'setText'); a || a === 0 || (a = ''); g.j.Sxa(this.QB, 'amap-overlay-text-empty', !a); g.c.add(this, 'setText'); this.set('text', a); this.QB.innerHTML = a; this.v7()
    }, setStyle: function (a) { g.c.add(this, 'setStyle'); a = a || {}; for (var b in a)a.hasOwnProperty(b) && (this.QB.style[b] = a[b]); this.v7() }, v7: function () { this.D = !0; this.setContent(this.QB); this.setShadow(this.getShadow()); this.D = !1 } }); g.KV = { find: function (a) { return g.a.find(this.Pw || [], a) }, HI: function () { return this.Pw || [] }, Id: function (a) { return this.find(a) !== null }, add: function (a) { var b = this; var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a.Fs; var d = this.Pw || (this.Pw = []); g.a.isArray(a) ? g.a.Pb(a, function (a) { b.add(a, c) }) : this.find(a) === null && (d.push(a), c(a)); return this }, remove: function (a) {
        var b = this; var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a.Fs; var d = this.Pw; if (d) {
            if (g.a.isArray(a)) {
                g.a.Pb(a, function (a) {
                    b.remove(a,
                        c)
                })
            } else { var e = g.a.indexOf(d, a); e !== -1 && (c(d[e]), d.splice(e, 1)) }
        } return this
    }, clear: function () { this.Pb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.a.Fs); this.Pw = []; return this }, Pb: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.a.Fs; var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; g.a.Pb(this.Pw || [], function () { for (var c = arguments.length, d = Array(c), e = 0; e < c; e++)d[e] = arguments[e]; c = d[0]; g.a.Oh(c.Pb) ? c.Pb(a, b) : a.apply(b || c, d) }); return this }, Ho: function (a) {
        for (var b =
arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)c[d - 1] = arguments[d]; this.Pb(function (b) { b && g.a.Oh(b[a]) && b[a].apply(b, c) }); return this
    }, h: function (a) { var b = arguments; this.Pb(function (a) { a.on.apply(a, b) }); return this }, G: function (a) { var b = arguments; this.Pb(function (a) { a.off.apply(a, b) }); return this }, addListener: function () { this.h.apply(this, arguments) }, Mx: function (a) {
        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a.Fs; var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; this.Pb(function (d) {
            d.on.call(d,
                event, function () { b(); d.off(a) }, c)
        })
    }, removeListener: function (a) { this.G(a.EQ, a.MR, a.Ve) }, O: function (a, b) { this.Pb(function (c) { c.emit(a, b) }) } }; A.A.Ln = A.A.Ch.extend({ ka: [g.KV], r: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; this.CLASS_NAME = 'AMap.OverlayGroup'; g.c.va(this); A.A.Ln.Yc.r.apply(this); this.map = null; this.add(a) }, vc: function (a) { g.c.add(this, 'setMap'); this.Ho('setMap', a); this.Ho('setMap', a); this.set('map', a); this.map = a; return this }, mapChanged: function () {}, ZB: function (a) { var b = this; g.c.add(this, 'addOverlay'); this.add(a, function (a) { b.map && (a.D = !0, a.setMap(b.map), a.D = !1) }); return this }, qz: function (a) {
        var b =
this; g.c.add(this, 'removeOverlay'); this.remove(a, function (a) { a.D = !0; a.getMap() === b.map && a.setMap(null); a.D = !1 }); return this
    }, gd: function () { var a = this; g.c.add(this, 'clearOverlays'); this.clear(function (b) { b.D = !0; b.getMap() === a.map && b.setMap(null); b.D = !1 }); return this }, Hy: function () { g.c.add(this, 'hide'); this.Ho('hide'); return this }, show: function () { g.c.add(this, 'show'); this.Ho('show'); return this }, Db: function () {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; g.c.add(this, 'setOptions')
        this.Ho('setOptions', a); return this
    } }); A.A.Ln.Qb({ find: 'getOverlay', HI: 'getOverlays', ZB: ['addOverlay', 'addOverlays'], Id: 'hasOverlay', qz: ['removeOverlay', 'removeOverlays'], gd: 'clearOverlays', Pb: 'eachOverlay', vc: 'setMap', Db: 'setOptions', show: 'show', Hy: 'hide', h: 'on', G: 'off' }); (function (a, b) {
        function c (a, b) { if (!a.length) return !1; for (var c = 0, d = a.length; c < d; c++) { var e = a[c]; if (!(b === '*' || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !1 } return !0 } function d (a) { for (var b = [], c = 0, d = a.length; c < d; c++)b.push(a[c].geometry.coordinates); return b } function e (a) { if (!a || !a.length) return []; a = b.a.Ia(a); for (var c = [], d = 0, e = a.length; d < e; d++)c[d] = a[d].rl(); a[a.length - 1].cb(a[0]) || c.push(a[0].rl()); return c }a.A.IV = a.A.Ln.extend({ r: function (c) {
            this.CLASS_NAME =
'AMap.GeoJSON'; b.c.va(this, c); a.A.IV.Yc.r.call(this, []); this.D = !0; this.B = b.extend({ getMarker: function (b, c) { return new a.A.sb({ innerOverlay: !0, position: c }) }, getPolyline: function (b, c) { return new a.A.Zb({ path: c, innerOverlay: !0 }) }, getPolygon: function (b, c) { return new a.A.Bc({ path: c, innerOverlay: !0 }) }, coordsToLatLng: function (a) { return a } }, c); if (!this.B.coordsToLatLngs) { var d = this.B.coordsToLatLng; this.B.coordsToLatLngs = function (a) { for (var b = [], c = 0, e = a.length; c < e; c++)b.push(d.call(null, a[c])); return b } } this.importData(this.B.geoJSON)
            this.D = !1
        }, importData: function (a) { b.c.add(this, 'importData'); if (a && (a = this.wfa(a), a.length)) { this.clearOverlays(); this.ZB(a); var c = this.B.map; if (c) for (var d = 0, e = a.length; d < e; d++)a[d].D = !0, a[d].setMap(c), a[d].D = !1 } }, toGeoJSON: function () { b.c.add(this, 'toGeoJSON'); for (var a = this.HI(), c = [], d = 0, e = a.length; d < e; d++)a[d].D = !0, c[d] = a[d].toGeoJSON(), a[d].D = !1; return c }, wfa: function (a) { if (a) { b.a.isArray(a) || (a = [a]); for (var c = [], d = 0, e = a.length; d < e; d++) { var m = this.xfa(a[d]); m && c.push(m) } return c } }, eX: function (a) {
            var b =
a.type === 'Feature' ? a.geometry : a; var b = this.B.coordsToLatLng(b ? b.coordinates : null); var b = this.B.getMarker(a, b); this.wr(a, b); return b
        }, kca: function (c) { for (var d = c.type === 'Feature' ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)e.push(this.eX(b.extend({}, c, { type: 'Feature', properties: { _isAmap: !0, _pointIndex: l, _parentProperities: c.properties }, geometry: { type: 'Point', coordinates: d[l] }}))); d = new a.A.Ln(e); this.wr(c, d); return d }, dX: function (a) {
            var b = a.type === 'Feature' ? a.geometry : a; var b = this.B.coordsToLatLngs(b
                ? b.coordinates : null); var b = this.B.getPolyline(a, b); this.wr(a, b); return b
        }, jca: function (c) { for (var d = c.type === 'Feature' ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)e.push(this.dX(b.extend({}, c, { type: 'Feature', properties: { _isAmap: !0, _lineStringIndex: l, _parentProperities: c.properties }, geometry: { type: 'LineString', coordinates: d[l] }}))); d = new a.A.Ln(e); this.wr(c, d); return d }, fX: function (a) {
            for (var b = a.type === 'Feature' ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++)c.push(this.B.coordsToLatLngs(b[d]))
            b = this.B.getPolygon(a, c); this.wr(a, b); return b
        }, lca: function (c) { for (var d = c.type === 'Feature' ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)e.push(this.fX(b.extend({}, c, { type: 'Feature', properties: { _isAmap: !0, _polygonIndex: l, _parentProperities: c.properties }, geometry: { type: 'Polygon', coordinates: d[l] }}))); d = new a.A.Ln(e); this.wr(c, d); return d }, dca: function (c) {
            for (var d = (c.type === 'Feature' ? c.geometry : c).geometries, e = [], l = 0, m = d.length; l < m; l++) {
                e.push(this.vN(b.extend({}, c, { type: 'Feature',
                    properties: { _isAmap: !0, _geometryIndex: l, _parentProperities: c.properties }, geometry: d[l] })))
            }d = new a.A.Ln(e); this.wr(c, d); return d
        }, xfa: function (b) { if (b) switch (b.type) { case 'Feature':return this.vN(b); case 'FeatureCollection':for (var c = b.features, d = [], e = 0, m = c.length; e < m; e++) { var n = this.vN(c[e]); n && d.push(n) }c = new a.A.Ln(d); this.wr(b, c); return c; default:throw Error('Invalid GeoJSON object.' + b.type) } }, wr: function (a, c) {
            c && a.properties && c.setExtData && (c.D = !0, c.setExtData(b.extend({}, c.getExtData() || {},
                { _geoJsonProperties: a.properties })), c.D = !1)
        }, vN: function (a) { var b = a.type === 'Feature' ? a.geometry : a; if (!(b && b.coordinates || b)) return null; switch (b.type) { case 'Point':return this.eX(a); case 'MultiPoint':return this.kca(a); case 'LineString':return this.dX(a); case 'MultiLineString':return this.jca(a); case 'Polygon':return this.fX(a); case 'MultiPolygon':return this.lca(a); case 'GeometryCollection':return this.dca(a); default:throw Error('Invalid GeoJSON geometry.' + b.type) } } }); a.A.Ln.zb({ toGeoJSON: function (a) {
            b.c.add(this,
                'toGeoJSON'); a = a || this.HI(); for (var e = [], k = 0, l = a.length; k < l; k++)a[k].toGeoJSON && (a[k].D = !0, e[k] = a[k].toGeoJSON(), a[k].D = !1); this.D = !0; a = this.getExtData() || {}; this.D = !1; if (c(e, 'Point'))e = { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'MultiPoint', coordinates: d(e) }}; else if (c(e, 'LineString'))e = { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'MultiLineString', coordinates: d(e) }}; else if (c(e, 'Polygon')) {
                e = { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'MultiPolygon',
                    coordinates: d(e) }}
            } else if (c(e, '*')) { a = a._geoJsonProperties || {}; for (var k = [], l = 0, m = e.length; l < m; l++)k.push(e[l].geometry); e = { type: 'Feature', properties: a, geometry: { type: 'GeometryCollection', geometries: k }} } else e = { type: 'FeatureCollection', properties: a._geoJsonProperties || {}, features: e }; return e
        } }); a.A.sb.zb({ toGeoJSON: function () {
            b.c.add(this, 'toGeoJSON'); this.D = !0; var a = this.getExtData() || {}; var c = this.getPosition().rl(); this.D = !1; return { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'Point',
                coordinates: c }}
        } }); a.A.Zb.zb({ toGeoJSON: function () { b.c.add(this, 'toGeoJSON'); this.D = !0; var a = this.getExtData() || {}; var c = this.getPath(); this.D = !1; return { type: 'Feature', properties: a._geoJsonProperties || {}, geometry: { type: 'LineString', coordinates: e(c) }} } }); a.A.Bc.zb({ toGeoJSON: function () {
            b.c.add(this, 'toGeoJSON'); this.D = !0; var a = this.getExtData() || {}; var c = this.getPath(); this.D = !1; a = a._geoJsonProperties || {}; if (c) { c = b.a.Ia(c); b.a.isArray(c[0]) || (c = [c]); for (var d = [], l = 0, m = c.length; l < m; l++)d[l] = e(c[l]); c = d } else {
                c =
[]
            } return { type: 'Feature', properties: a, geometry: { type: 'Polygon', coordinates: c }}
        } })
    })(A, g); A.o.BL = A.o.Vb.extend({ ka: [g.KV], r: function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; this.CLASS_NAME = 'AMap.LayerGroup'; g.c.va(this, b); A.o.BL.Yc.r.call(this, b); this.map = null; this.add(a) }, vc: function (a) { g.c.add(this, 'setMap'); this.Ho('setMap', a); this.set('map', a); this.map = a; return this }, mapChanged: function () {}, AH: function (a) { var b = this; g.c.add(this, 'addLayer'); this.add(a, function (a) { b.map && (a.D = !0, a.setMap(b.map), a.D = !1) }); return this }, lk: function (a) {
        var b = this; g.c.add(this,
            'removeLayer'); this.remove(a, function (a) { a.D = !0; a.getMap() === b.map && a.setMap(null); a.D = !1 }); return this
    }, Pma: function () { var a = this; g.c.add(this, 'clearLayers'); this.clear(function (b) { b.D = !0; b.getMap() === a.map && b.setMap(null); b.D = !1 }); return this }, Hy: function () { g.c.add(this, 'hide'); this.Ho('hide'); return this }, show: function () { g.c.add(this, 'show'); this.Ho('show'); return this }, reload: function () { this.Ho('reload'); return this }, Db: function () {
        var a = this; var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0]
            : {}; g.c.add(this, 'setOptions'); var c = g.a.keys(b); g.a.Pb(c, function (c) { a.Ho('set', c, b[c]) }); return this
    } }); A.o.BL.Qb({ find: 'getLayer', HI: 'getLayers', AH: ['addLayer', 'addLayers'], Id: 'hasLayer', lk: ['removeLayer', 'removeLayers'], Pma: 'clearLayers', Pb: 'eachLayer', vc: 'setMap', Db: 'setOptions', show: 'show', Hy: 'hide', reload: 'reload', h: 'on', G: 'off' }); g.oaa = A.Lb.extend({ r: function (a, b) { b && (b.center = b.position, b.zoom = 11); arguments.callee.la.apply(this, arguments); window.console && window.console.log && window.console.log('\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002') } }); g.paa = A.A.sb.extend({ r: function (a) { arguments.callee.la.apply(this, arguments) } }); g.wd = { Xr: function (a, b) { for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e, e += 1)c = Math.min(c, g.wd.ixa(a, [b[d], b[e]])); return Math.sqrt(c) }, ixa: function (a, b) { return this.NK(a, this.d2(a, b)) }, NK: function (a, b) { var c = a[0] - b[0]; var d = a[1] - b[1]; return c * c + d * d }, UFa: function (a, b, c, d) {
        d = d || 1E-6; if (c[0] === b[0]) { var e = Math.min(b[1], c[1]); b = Math.max(b[1], c[1]); return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b } var e = Math.min(b[0], c[0]); var f = Math.max(b[0], c[0]); return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
a[0] >= e && a[0] <= f
    }, d2: function (a, b) { var c = a[0]; var d = a[1]; var e = b[0]; var f = b[1]; var h = e[0]; var e = e[1]; var k = f[0]; var f = f[1]; var l = k - h; var m = f - e; var c = l === 0 && m === 0 ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0); c <= 0 || (c >= 1 ? (h = k, e = f) : (h += c * l, e += c * m)); return [h, e] }, cq: function (a) { for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1)h = a[k], f = h[0], h = h[1], c += (f - e) * (h + d), e = f, d = h; return c > 0 }, Rd: function (a, b, c) {
        var d = a[0]; a = a[1]; var e = !1; var f; var h; var k; var l; var m = b.length; var n = 0; for (l = m - 1; n < m; l = n, n += 1) {
            var p = !1; f = b[n][0]; h = b[n][1]; k = b[l][0]; l = b[l][1]; if (f === d && h === a || k ===
d && l === a) return c ? !0 : !1; if (h < a === l >= a) { f = (k - f) * (a - h) / (l - h) + f; if (d === f) return c ? !0 : !1; p = d < f }p && (e = !e)
        } return e
    }, e7: function (a, b) {
        function c (a, b, c, d) { var e = [a[0] - b[0], a[1] - b[1]]; var f = [c[0] - d[0], c[1] - d[1]]; a = a[0] * b[1] - a[1] * b[0]; c = c[0] * d[1] - c[1] * d[0]; d = 1 / (e[0] * f[1] - e[1] * f[0]); return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d] } function d (a, b, c) { return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0]) } var e; var f; var h; var k; var l = a; e = b[b.length - 2]; for (var m = 0, n = b.length - 1; m < n; m++) {
            f = b[m]; var p = l; var l = []; h = p[p.length - 1]; for (var q = 0, r =
p.length; q < r; q++)k = p[q], d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)), h = k; e = f
        } if (l.length < 3) return []; l.push(l[0]); return l
    } }; (function (a) {
        function b (b, c) {
            var d; a: { switch (b) { case 'EPSG3395':d = a.Zh.CV; break a; case 'EPSG4326':d = a.Zh.DV; break a }d = a.Zh.tL } return { project: function (b) { a.a.isArray(b) && (b = new a.U(b[0], b[1])); return d.sD(b, c).rl() }, unproject: function (b) { a.a.isArray(b) && (b = new a.H(b[0], b[1])); return d.QD(b, c).rl() }, normalizePoint: function (b) { return a.a.Ia(b) }, distance: function (b, c) {
                c = this.normalizePoint(c); if (a.a.isArray(c)) return this.distanceToLine(b, c); b = this.normalizePoint(b); var d = a.Im.xu; var e = Math.cos; var f = b.P * d; var h =
c.P * d; var k = 2 * a.Im.yQ; var d = c.Q * d - b.Q * d; var e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2; return k * Math.asin(Math.sqrt(e))
            }, ringArea: function (b) { b = this.normalizeLine(b); var c = a.Im.yQ * a.Im.xu; var d = 0; var e = b.length; if (e < 3) return 0; for (var f = 0; f < e - 1; f += 1) var h = b[f]; var k = b[f + 1]; var u = h.Q * c * Math.cos(h.P * a.Im.xu); var h = h.P * c; var v = k.Q * c * Math.cos(k.P * a.Im.xu); var d = d + (u * k.P * c - v * h); f = b[f]; b = b[0]; e = f.Q * c * Math.cos(f.P * a.Im.xu); f = f.P * c; k = b.Q * c * Math.cos(b.P * a.Im.xu); d += e * b.P * c - k * f; return 0.5 * Math.abs(d) }, sphericalCalotteArea: function (b) {
                var c = a.Im.yQ; b = c - c *
Math.cos(b / c); return 2 * Math.PI * c * b
            } }
        } function c () { return { normalizePoint: function (a) { return a && a.x && a.y ? [a.x, a.y] : a }, distance: function (a, b) { var c = a[0] - b[0]; var d = a[1] - b[1]; return Math.sqrt(c * c + d * d) }, project: function (a) { return a }, unproject: function (a) { return a }, ringArea: function (a) { for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) { var q = a[p - 1]; var r = a[p]; b[0] = e[0] - r[0]; b[1] = e[1] - r[1]; c[0] = e[0] - q[0]; c[1] = e[1] - q[1]; d += b[0] * c[1] - b[1] * c[0] } return d / 2 } } } function d (a) {
            for (var b = 0, c = a.length, d = 0; d < c - 1; d++) {
                var e =
a[d]
            } var n = a[d + 1]; var b = b + (n[0] - e[0]) * (n[1] + e[1]); if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1])e = a[c - 1], n = a[0], b += (n[0] - e[0]) * (n[1] + e[1]); return b <= 0
        } function e (b) { this.CLASS_NAME = 'AMap.GeometryUtil'; this.Sb = a.extend({ onSegmentTolerance: 5, crs: 'EPSG3857', maxZoom: 20 }, b); this.setCrs(this.Sb.crs) }a.extend(e.prototype, { clone: function (b) { return new e(a.extend({}, this.Sb, b)) }, isPoint: function (b) { return b && (b instanceof a.U || a.a.isArray(b) && !isNaN(b[0])) }, normalizePoint: function (a) { return a }, normalizeLine: function (a) {
            for (var b =
[], c = 0, d = a.length; c < d; c++)b.push(this.normalizePoint(a[c])); return b
        }, normalizeMultiLines: function (b) { a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]); for (var c = [], d = 0, e = b.length; d < e; d++)c.push(this.normalizeLine(b[d])); return c }, setCrs: function (d) { a.extend(this, d && d.project && d.unproject ? d : d === 'plane' ? c() : b(d, this.Sb.maxZoom)) }, distance: function () { throw Error('distance Not implemented!') }, nx: function (a, b) {
            a = this.normalizeLine(a); this.isPoint(a[0]) || (a = a[0]); for (var c = [], d = 0, e = a.length; d < e; d++)c.push(this.project(a[d]))
            !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse()); return c
        }, uja: function (a) { for (var b = [], c = 0, d = a.length; c < d; c++)b.push(this.unproject(a[c])); return b }, closestOnSegment: function (b, c, d) { b = a.wd.d2(this.project(b), this.nx([c, d])); return this.unproject(b) }, closestOnLine: function (a, b) { b = this.normalizeLine(b); for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) { var p = this.closestOnSegment(a, b[e], b[e + 1]); var q = this.distance(a, p); q < c && (c = q, d = p) } return d }, distanceToSegment: function (a,
            b, c) { return this.distanceToLine(a, [b, c]) }, distanceToLine: function (a, b) { b = this.normalizeLine(b); this.isPoint(b[0]) || (b = b[0]); for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this.closestOnSegment(a, b[d], b[d + 1]); var c = Math.min(c, this.distance(a, n)); return c }, distanceToPolygon: function (a, b) { return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b) }, isPointOnSegment: function (a, b, c, d) { if (!d && d !== 0 || d < 0)d = this.Sb.onSegmentTolerance; return this.distanceToSegment(a, b, c) <= d }, isPointOnLine: function (a, b, c) {
            b = this.normalizeLine(b)
            for (var d = 0, e = b.length; d < e - 1; d++) if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0; return !1
        }, isPointOnRing: function (a, b, c) { b = this.normalizeLine(b); for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0; return !1 }, isPointOnPolygon: function (a, b, c) { b = this.normalizeMultiLines(b); for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnRing(a, b[d], c)) return !0; return !1 }, makesureClockwise: function (a) { d(a) || (a = [].concat(a), a.reverse()); return a }, makesureAntiClockwise: function (a) {
            d(a) &&
(a = [].concat(a), a.reverse()); return a
        }, isPointInRing: function (b, c) { c = this.normalizeLine(c); var d = this.nx(c, !0); return a.wd.Rd(this.project(b), d, !1) }, isRingInRing: function (a, b) { for (var c = 0, d = a.length; c < d; c++) if (!this.isPointInRing(a[c], b)) return !1; c = 0; for (d = b.length; c < d; c++) if (this.isPointInRing(b[c], a)) return !1; return !0 }, isPointInPolygon: function (a, b) { b = this.normalizeMultiLines(b); for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), d > 0 && (c = !c), c); d += 1);return c }, doesSegmentsIntersect: function (a,
            b, c, d) { var e = this.nx([a, b, c, d]); a = e[0]; b = e[1]; c = e[2]; d = e[3]; var e = !1; var n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]); var p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]); a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]); a !== 0 && (b = n / a, p /= a, b >= 0 && b <= 1 && p >= 0 && p <= 1 && (e = !0)); return e }, doesSegmentLineIntersect: function (a, b, c) { c = this.normalizeLine(c); for (var d = 0, e = c.length; d < e - 1; d++) if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0; return !1 }, doesSegmentRingIntersect: function (a, b, c) {
            c = this.normalizeLine(c)
            for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentsIntersect(a, b, c[d], c[d === e - 1 ? 0 : d + 1])) return !0; return !1
        }, doesSegmentPolygonIntersect: function (a, b, c) { c = this.normalizeMultiLines(c); for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentRingIntersect(a, b, c[d])) return !0; return !1 }, doesLineLineIntersect: function (a, b) { a = this.normalizeLine(a); for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0; return !1 }, doesLineRingIntersect: function (a, b) {
            a = this.normalizeLine(a); for (var c =
0, d = a.length; c < d - 1; c++) if (this.doesSegmentRingIntersect(a[c], a[c + 1], b)) return !0; return !1
        }, doesPolygonPolygonIntersect: function (a, b) { return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this.isRingInRing(b, a) ? !0 : !1 }, doesRingRingIntersect: function (a, b) { a = this.normalizeLine(a); for (var c = 0, d = a.length; c < d; c++) if (this.doesSegmentRingIntersect(a[c], a[c === d - 1 ? 0 : c + 1], b)) return !0; return !1 }, mP: function (a, b) {
            for (var c = 0, d = 0; d < a.length - 1; d += 1) {
                var e = this.distance(a[d], a[d + 1]); if (e + c < b)c += e; else {
                    return c =
(b - c) / e, [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] + c * (a[d + 1][1] - a[d][1]), d]
                }
            } return null
        }, uX: function (a, b) {
            function c () { var a = [e[0] - n[0], e[1] - n[1]]; var b = [p[0] - q[0], p[1] - q[1]]; var d = e[0] * n[1] - e[1] * n[0]; var f = p[0] * q[1] - p[1] * q[0]; var h = 1 / (a[0] * b[1] - a[1] * b[0]); return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h] } function d (a) { return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0]) }a = this.makesureAntiClockwise(a); b = this.makesureClockwise(b); var e; var n; var p; var q; var r = a; e = b[b.length - 1]; for (var s = 0, u = b.length; s < u; s++) {
                n = b[s]; var v = r; var r = []; p = v[v.length -
1]; for (var w = 0, t = v.length; w < t; w++)q = v[w], d(q) ? (d(p) || r.push(c()), r.push(q)) : d(p) && r.push(c()), p = q; e = n
            } return r
        }, ringRingClip: function (a, b) { a = this.nx(a); b = this.nx(b); var c = this.uX(a, b); c.length == 0 && (c = this.uX(b, a)); return this.uja(c) }, ringArea: function () { throw Error('distance Not implemented!') }, distanceOfLine: function (a) { a = this.normalizeLine(a); for (var b = 0, c = 0, d = a.length; c < d - 1; c++)b += this.distance(a[c], a[c + 1]); return b }, isClockwise: function (a) { a = this.nx(a); return d(a) } }); a.Yq = new e(); a.di = new e(); a.di.setCrs('plane')
    })(g); g.vL = function () {
        var a = {}; (function () { function b (a) { for (var b = 0, e = a.length, f = 0; f < e - 1; f++) var h = a[f]; var k = a[f + 1]; var b = b + (k[0] - h[0]) * (k[1] + h[1]); if (a[e - 1][0] !== a[0][0] || a[e - 1][1] !== a[0][1])h = a[e - 1], k = a[0], b += (k[0] - h[0]) * (k[1] + h[1]); return b <= 0 }a.Vsa = function (a) { b(a) && (a = [].concat(a), a.reverse()); return a }; a.V4 = b })(); (function () {
            function b (a) { var b = a.length; b > 2 && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop() } function c (a, b) { for (var c = 0; c < b.length; c++)a.push(b[c][0]), a.push(b[c][1]) }a.Vh = function (a, e) {
                var f =
arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; var h = arguments[3]; e = e || []; var k = []; var l = []; b(a); c(k, a); var m = a.length; e.forEach(b); for (var n = 0; n < e.length; n++)l.push(m), m += e[n].length, c(k, e[n]); l = (this.XK ? this.XK : g.Cc.XK)(k, l); if (h) { f = []; for (n = 0; n < l.length; n += 1)h = 2 * l[n], f.push([k[h], k[h + 1]]); return f } if (f) for (n = 0; n < l.length; n += 1)l[n] += f; return l
            }
        })(); return a
    }; (function (a) {
        a.$E = function () {
            function a (b, c, d, e, f) { for (var h, k = 0, l = c, n = d - e; l < d; l += e)k += (b[n] - b[l]) * (b[l + 1] + b[n + 1]), n = l; if (f === k > 0) for (f = c; f < d; f += e)h = r(f, b[f], b[f + 1], h); else for (f = d - e; f >= c; f -= e)h = r(f, b[f], b[f + 1], h); h && m(h, h.next) && (s(h), h = h.next); return h } function c (a, b) { if (!a) return a; b || (b = a); var c = a; var d; do if (d = !1, c.H8 || !m(c, c.next) && l(c.Ga, c, c.next) !== 0)c = c.next; else { s(c); c = b = c.Ga; if (c === c.next) break; d = !0 } while (d || c !== b);return b } function d (a, b, e, f, r, u, C) {
                if (a) {
                    if (!C && u) {
                        var E = a; var z = E; do {
                            z.z === null &&
(z.z = h(z.x, z.y, f, r, u)), z.Xo = z.Ga, z = z.hl = z.next
                        } while (z !== E);z.Xo.hl = null; z.Xo = null; var E = z; var B; var G; var H; var I; var M; var L; var P = 1; do { z = E; H = E = null; for (I = 0; z;) { I++; G = z; for (B = M = 0; B < P && (M++, G = G.hl, G); B++);for (L = P; M > 0 || L > 0 && G;)M !== 0 && (L === 0 || !G || z.z <= G.z) ? (B = z, z = z.hl, M--) : (B = G, G = G.hl, L--), H ? H.hl = B : E = B, B.Xo = H, H = B; z = G }H.hl = null; P *= 2 } while (I > 1)
                    } for (E = a; a.Ga !== a.next;) {
                        z = a.Ga; G = a.next; if (u) {
                            a:if (H = a.Ga, I = a.next, l(H, a, I) >= 0)H = !1; else {
                                M = h(H.x < a.x ? H.x < I.x ? H.x : I.x : a.x < I.x ? a.x : I.x, H.y < a.y ? H.y < I.y ? H.y : I.y : a.y < I.y ? a.y : I.y, f, r, u); P = h(H.x >
a.x ? H.x > I.x ? H.x : I.x : a.x > I.x ? a.x : I.x, H.y > a.y ? H.y > I.y ? H.y : I.y : a.y > I.y ? a.y : I.y, f, r, u); for (B = a.hl; B && B.z <= P;) { if (B !== a.Ga && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B.y) && l(B.Ga, B, B.next) >= 0) { H = !1; break a }B = B.hl } for (B = a.Xo; B && B.z >= M;) { if (B !== a.Ga && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B.y) && l(B.Ga, B, B.next) >= 0) { H = !1; break a }B = B.Xo }H = !0
                            }
                        } else a:if (H = a.Ga, I = a.next, l(H, a, I) >= 0)H = !1; else { for (M = a.next.next; M !== a.Ga;) { if (k(H.x, H.y, a.x, a.y, I.x, I.y, M.x, M.y) && l(M.Ga, M, M.next) >= 0) { H = !1; break a }M = M.next }H = !0 } if (H) {
                            b.push(z.le /
e), b.push(a.le / e), b.push(G.le / e), s(a), E = a = G.next
                        } else if (a = G, a === E) {
                            if (C) {
                                if (C === 1) { C = b; E = e; z = a; do G = z.Ga, H = z.next.next, !m(G, H) && n(G, z, z.next, H) && p(G, H) && p(H, G) && (C.push(G.le / E), C.push(z.le / E), C.push(H.le / E), s(z), s(z.next), z = a = H), z = z.next; while (z !== a);a = z; d(a, b, e, f, r, u, 2) } else {
                                    if (C === 2) {
                                        a: {
                                            C = a; do {
                                                for (E = C.next.next; E !== C.Ga;) {
                                                    if (z = C.le !== E.le) {
                                                        if (z = void 0, z = C.next.le !== E.le) {
                                                            if (z = void 0, z = C.Ga.le !== E.le) {
                                                                z = z = void 0; b: {
                                                                    z = C; do {
                                                                        if (z.le !== C.le && z.next.le !== C.le && z.le !== E.le && z.next.le !== E.le && n(z, z.next, C,
                                                                            E)) { z = !0; break b }z = z.next
                                                                    } while (z !== C);z = !1
                                                                } if (z = !z) if (z = void 0, z = p(C, E)) if (z = void 0, z = p(E, C)) { z = C; G = !1; H = (C.x + E.x) / 2; I = (C.y + E.y) / 2; do z.y > I !== z.next.y > I && z.next.y !== z.y && H < (z.next.x - z.x) * (I - z.y) / (z.next.y - z.y) + z.x && (G = !G), z = z.next; while (z !== C);z = G }
                                                            }
                                                        }
                                                    } if (z) { a = q(C, E); C = c(C, C.next); a = c(a, a.next); d(C, b, e, f, r, u); d(a, b, e, f, r, u); break a }E = E.next
                                                }C = C.next
                                            } while (C !== a)
                                        }
                                    }
                                }
                            } else d(c(a), b, e, f, r, u, 1); break
                        }
                    }
                }
            } function e (a, b) { return a.x - b.x } function f (a, b) {
                var c = b; var d = a.x; var e = a.y; var f = -Infinity; var h; do {
                    if (e <= c.y && e >= c.next.y &&
c.next.y !== c.y) { var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y); if (l <= d && l > f) { f = l; if (l === d) { if (e === c.y) return c; if (e === c.next.y) return c.next }h = c.x < c.next.x ? c : c.next } }c = c.next
                } while (c !== b);if (!h) return null; if (d === f) return h.Ga; for (var l = h, m = h.x, n = h.y, r = Infinity, s, c = h.next; c !== l;)d >= c.x && c.x >= m && d !== c.x && k(e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (s = Math.abs(e - c.y) / (d - c.x), (s < r || s === r && c.x > h.x) && p(c, a) && (h = c, r = s)), c = c.next; return h
            } function h (a, b, c, d, e) {
                a = 32767 * (a - c) * e; b = 32767 * (b - d) * e; a = (a | a << 8) & 16711935
                a = (a | a << 4) & 252645135; a = (a | a << 2) & 858993459; b = (b | b << 8) & 16711935; b = (b | b << 4) & 252645135; b = (b | b << 2) & 858993459; return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
            } function k (a, b, c, d, e, f, h, k) { return (e - h) * (b - k) - (a - h) * (f - k) >= 0 && (a - h) * (d - k) - (c - h) * (b - k) >= 0 && (c - h) * (f - k) - (e - h) * (d - k) >= 0 } function l (a, b, c) { return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y) } function m (a, b) { return a.x === b.x && a.y === b.y } function n (a, b, c, d) { return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : l(a, b, c) > 0 !== l(a, b, d) > 0 && l(c, d, a) > 0 !== l(c, d, b) > 0 } function p (a,
                b) { return l(a.Ga, a, a.next) < 0 ? l(a, b, a.next) >= 0 && l(a, a.Ga, b) >= 0 : l(a, b, a.Ga) < 0 || l(a, a.next, b) < 0 } function q (a, b) { var c = new u(a.le, a.x, a.y); var d = new u(b.le, b.x, b.y); var e = a.next; var f = b.Ga; a.next = b; b.Ga = a; c.next = e; e.Ga = c; d.next = c; c.Ga = d; f.next = d; d.Ga = f; return d } function r (a, b, c, d) { a = new u(a, b, c); d ? (a.next = d.next, a.Ga = d, d.next.Ga = a, d.next = a) : (a.Ga = a, a.next = a); return a } function s (a) { a.next.Ga = a.Ga; a.Ga.next = a.next; a.Xo && (a.Xo.hl = a.hl); a.hl && (a.hl.Xo = a.Xo) } function u (a, b, c) {
                this.le = a; this.x = b; this.y = c; this.hl = this.Xo =
this.z = this.next = this.Ga = null; this.H8 = !1
            } return { XK: function (h, k, l) {
                l = l || 2; var m = k && k.length; var n = m ? k[0] * l : h.length; var p = a(h, 0, n, l, !0); var r = []; if (!p) return r; var s, u, B, G; if (m) { var H = l; var m = []; var I; var M; var L; G = 0; for (I = k.length; G < I; G++) { M = k[G] * H; L = G < I - 1 ? k[G + 1] * H : h.length; M = a(h, M, L, H, !1); M === M.next && (M.H8 = !0); var P = L = M; do L.x < P.x && (P = L), L = L.next; while (L !== M);m.push(P) }m.sort(e); for (G = 0; G < m.length; G++) { k = m[G]; H = p; if (H = f(k, H))k = q(H, k), c(k, k.next); p = c(p, p.next) } } if (h.length > 80 * l) {
                    s = B = h[0]; u = m = h[1]; for (H = l; H < n; H += l) {
                        G = h[H], k =
h[H + 1], G < s && (s = G), k < u && (u = k), G > B && (B = G), k > m && (m = k)
                    }B = Math.max(B - s, m - u); B = B !== 0 ? 1 / B : 0
                }d(p, r, l, s, u, B); return r
            } }
        }; a.w$ = a.$E()
    })(g); (function (a) {
        function b (a) { var b = a.length; b > 2 && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop() } function c (a, b) { for (var c = 0; c < b.length; c++)a.push(b[c][0]), a.push(b[c][1]) }a.On = { ni: function (a) { for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++)c += a[h][0] * a[k][1] - a[k][0] * a[h][1]; return 0.5 * c }, V4: function (b) { return a.On.ni(b) < 0 }, normalize: function (b) {
            var c; if (b) {
                c = []; for (var f = 0, h = b.length; f < h; f += 1) {
                    c[f] = b[f] instanceof Array ? this.normalize(b[f]) : b[f] instanceof a.U ? [b[f].Q, b[f].P] : b[f] instanceof a.H ? [b[f].x, b[f].y]
                        : b[f]
                }
            } return c
        }, Vh: function (d, e) { e = e || []; var f = []; var h = []; b(d); c(f, d); var k = d.length; e.forEach(b); for (var l = 0; l < e.length; l++)h.push(k), k += e[l].length, c(f, e[l]); return a.w$.XK(f, h) } }
    })(g); g.$H = function (a, b, c) {
        g.c.add({ CLASS_NAME: 'convertFrom' }, b); var d = g.w.Wd + '/v3/assistant/coordinate/convert'; a = g.a.Ia(a); var e = []; if (a instanceof Array) { for (var f = 0, h = a.length; f < h; f += 1)e.push(a[f] + ''); e = e.join(';') } else e = a + ''; b = ['key=' + g.w.key, 's=rsv3', 'locations=' + e, 'coordsys=' + (b || 'gps')]; d += b.length > 0 ? '?' + b.join('&') : ''; d = new g.fb.wb(d, { callback: 'callback' }); d.h('complete', function (a) {
            if (a.status === '1') {
                a = a.locations.split(';'); for (var b = 0; b < a.length; b += 1) {
                    var d = a[b].split(','); a[b] = new AMap.LngLat(d[0],
                        d[1])
                }c && typeof c === 'function' && c('complete', { info: 'ok', locations: a })
            } else c && typeof c === 'function' && c('error', a.info)
        }, this); d.h('error', function (a) { c && typeof c === 'function' && c('error', a.info) }, this)
    }; g.fb = g.fb || {}
    g.fb.RL = g.aa.extend({ ka: [g.ta], r: function (a, b) { this.B = { callback: 'cbk', type: 'json', charset: 'utf-8' }; b = b || {}; g.a.Db(this, b); this.url = a; this.send(a, b.Bd, b.l2, b.L7, b.responseType) }, send: function (a) {
        var b = g.j.create('script'); b.type = 'text/javascript'; b.charset = this.B.charset; var c = this; g.l.Ae ? b.onreadystatechange = function () { this.readyState !== 'loaded' && this.readyState !== 'complete' || c.q('complete') } : (b.onload = function () { c.q('complete') }, b.onerror = function () { c.q('error', { status: 0, info: 'service error', url: a }) })
        b.src = a; document.getElementsByTagName('head')[0].appendChild(b)
    } }); g.fb.wb = g.fb.RL.extend({ yma: function () { if (g.a.d8) return g.a.PK.push(this), !0 }, iwa: function () { this.q('error', { info: 'TIME_OUT_A' }) }, send: function (a, b, c, d) {
        function e () { window[f] = null; try { window[f] = null } catch (a) {}h.onerror = null; h.parentNode && h.parentNode.removeChild(h) } if (!this.B.Qx || !this.yma()) {
            a = encodeURI(a); var f = this.B.fun; if (!f || window[f])f = g.a.B3('jsonp_', 6) + '_'; var h = document.createElement('script'); h.type = 'text/javascript'; h.charset = 'utf-8'; h.async = !0; var k = this; g.l.Ae || (h.onerror = function () {
                e()
                k.q('error', { info: 'REQUEST_FAILED', url: a })
            }); window[f] = function (a) { e(); if (k.B.callbackFunction)k.B.callbackFunction.call(k.B.context, a); else if (a.errcode === 3E4 && a.data)g.a.d8 = !0, g.rb.load('AMap.AntiCrabFrame', function () { g.a.Qx || (g.a.Qx = new g.h$()); g.a.PK.push(k); g.a.Qx.open(k.B.Bd, a.data.host, k.KD || '', k.url) }); else { if (a instanceof Array || typeof a === 'string')a = { data: a }; a.qDa = f; k.q('complete', a) } }; b = '?'; a.indexOf('?') !== -1 && (b = '&'); b = a + b + this.B.callback + '=' + f; if (a.indexOf(g.w.Wd + '/v') !== -1 || a.indexOf('yuntuapi.amap.com/datasearch') !== -1 ||
a.indexOf('webapi.amap.com/') !== -1)b = b + '&platform=JS&logversion=2.0' + ('&appname=' + g.w.iu), b += '&csid=' + g.a.K9(), b += '&sdkversion=' + g.w.yr; if (c = this.B.oI) { var l = []; var m; for (m in c)c.hasOwnProperty(m) && (l.push(m + '=' + c[m]), b += '&' + m + '=' + encodeURIComponent(c[m])); k.KD = l.join('&') }h.src = d ? b + '&rereq=true' : b; g.fb.wb.vda = document.getElementsByTagName('body')[0] || document.getElementsByTagName('head')[0]; g.fb.wb.vda.appendChild(h)
        }
    } }); g.fb.XMLHttpRequest = g.fb.RL.extend({ send: function (a, b, c, d, e) {
        var f = this; if ((g.l.Ae || g.l.C4) && window.XDomainRequest) { var h = this.a$ = new XDomainRequest(); h.onerror = function (b) { f.q('error', { url: a, data: b }) }; h.onload = function () { f.q('complete', { url: a, data: h.responseText }) }; h.open(b || 'GET', a); setTimeout(function () { h.send(c || void 0) }, 0) } else {
            var k = this.a$ = new XMLHttpRequest(); k.onreadystatechange = function () {
                k.readyState === 4 && k.status === 200 ? f.q('complete', { url: a, data: k.responseType === 'arraybuffer' ? k.response : k.responseText })
                    : k.status === 404 && (k.abort(), f.q('error', { url: a, data: '404' }))
            }; k.onerror = function (b) { k.abort(); f.q('error', { url: a, data: b }) }; k.open(b || 'GET', a); b === 'POST' && k.setRequestHeader('Content-Type', d || 'application/x-www-form-urlencoded'); e && (k.responseType = e); k.send(c || void 0)
        }
    }, abort: function () { this.a$.abort() } }); for (var $ = { v: '1.4.15', Pixel: g.H, LngLat: g.U, Size: g.xd, Bounds: g.se, ArrayBounds: g.gp, PixelBounds: g.Of, Panorama: g.oaa, PanoramaMarker: g.paa, Map: A.Lb, View2D: A.wF, GroundImage: A.o.wL, Marker: A.A.sb, ImageMarker: A.A.Vza, Text: A.A.mW, Icon: A.A.ci, MarkerShape: A.A.faa, Polyline: A.A.Zb, BezierCurve: A.A.$z, Polygon: A.A.Bc, Circle: A.A.bh, CircleMarker: A.A.xV, Ellipse: A.A.qt, Rectangle: A.A.wt, ContextMenu: A.A.Jn, InfoWindow: A.A.Re, Buildings: A.o.m$, TileLayer: A.o.ob, ImageLayer: A.o.iA, CanvasLayer: A.o.o$, VideoLayer: A.o.Vaa, VectorLayer: A.o.cd,
            MassMarks: A.o.haa, CompositeLayer: A.o.s$, LabelsLayer: A.o.Zq, LabelMarker: A.A.Z$, LayerGroup: A.o.BL, OverlayGroup: A.A.Ln, GeoJSON: A.A.IV, CANVAS: 'canvas', DOM: 'dom', convertFrom: g.$H, Http: { JSONP: g.fb.wb }, event: { CLASS_NAME: 'AMap.event' }}, xc = 'addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger'.split(' '), yc = 0; yc < xc.length; yc += 1) {
        $.event[xc[yc]] = (function () {
            var a = g.event[xc[yc]]; var b = xc[yc]; return function () {
                g.c.va($.event); g.c.add($.event, b)
                return a.apply(g.event, Array.prototype.slice.call(arguments))
            }
        }())
    }$.GeometryUtil = { CLASS_NAME: 'AMap.GeometryUtil' }
    for (var Ic = 'distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon'.split(' '), yc =
0; yc < Ic.length; yc += 1)$.GeometryUtil[Ic[yc]] = (function () { var a = g.Yq[Ic[yc]]; var b = Ic[yc]; return function () { g.c.va($.GeometryUtil); g.c.add($.GeometryUtil, b); return a.apply(g.Yq, Array.prototype.slice.call(arguments)) } }()); $.GeometryUtil.triangulateShape = function (a, b) { g.c.va($.GeometryUtil); g.c.add($.GeometryUtil, 'triangulateShape'); a = g.On.normalize(a); b = g.On.normalize(b); return g.On.Vh(a, b) }; $.PlaneGeometryUtil = { CLASS_NAME: 'AMap.PlaneGeometryUtil' }
    for (yc = 0; yc < Ic.length; yc += 1)$.PlaneGeometryUtil[Ic[yc]] = (function () { var a = g.di[Ic[yc]]; var b = Ic[yc]; return function () { g.c.va($.PlaneGeometryUtil); g.c.add($.PlaneGeometryUtil, b); return a.apply(g.di, Array.prototype.slice.call(arguments)) } }()); $.PlaneGeometryUtil.triangulateShape = function (a, b) { g.c.va($.PlaneGeometryUtil); g.c.add($.PlaneGeometryUtil, 'triangulateShape'); a = g.On.normalize(a); b = g.On.normalize(b); return g.On.Vh(a, b) }; $.plugin = $.service = A.Lb.prototype.plugin; $.TileLayer.Satellite = A.o.ob.gW
    $.TileLayer.RoadNet = A.o.ob.dW; $.TileLayer.google = A.o.ob.dF; $.TileLayer.Flexible = A.o.ob.fA; $.TileLayer.WMS = A.o.ob.Waa; $.TileLayer.WMTS = A.o.ob.Xaa; $.TileLayer.Traffic = A.o.ob.oW; $.Panorama.Events = A.event; $.TileLayer.PanoramaLayer = A.o.ob.cAa; $.UA = { ie: g.l.os, ielt9: g.l.Ae, ielt11: g.l.ira, mobile: g.l.ba, android: g.l.Rl, ios: g.l.jD }
    $.Browser = { ua: navigator.userAgent, mobile: g.l.ba, plat: g.l.lz, mac: g.l.Xy, windows: g.l.nza, ios: g.l.jD, iPad: g.l.bra, iPhone: g.l.cra, android: g.l.Rl, android23: g.l.tla, chrome: g.l.chrome, firefox: g.l.NQ, safari: g.l.eE, wechat: g.l.S9, uc: g.l.Dya, qq: g.l.nva, ie: g.l.os, ie6: g.l.wi, ie7: g.l.av, ie8: g.l.Ae && !g.l.av && !g.l.wi, ie9: g.l.C4, ie10: g.l.B4, ie11: g.l.fra, edge: g.l.Eoa, ielt9: g.l.Ae, baidu: g.l.HH, isLocalStorage: g.l.ov, isGeolocation: !!navigator.geolocation, mobileWebkit: g.l.qta, mobileWebkit3d: g.l.Z5, mobileOpera: !!g.l.pta,
        retina: g.l.Nc, touch: !!g.l.Jf, msPointer: !!g.l.b6, pointer: !!g.l.lT, webkit: g.l.Q9, ie3d: g.l.gra, webkit3d: g.l.R9, gecko3d: g.l.tpa, opera3d: g.l.iua, any3d: g.l.CH, isCanvas: g.l.$k, isSvg: g.l.Ko, isVML: g.l.os, isWorker: !!window.Worker, isWebsocket: !!window.WebSocket, isWebGL: function () { for (var a = document.createElement('canvas'), b = ['webgl', 'experimental-webgl', 'moz-webgl'], c = null, d = 0; d < b.length; d += 1) { try { c = a.getContext(b[d]) } catch (e) {} if (c) if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break; else return !0 } return !1 } }
    $.Util = { CLASS_NAME: 'AMap.Util' }; var Jc = { colorNameToHex: g.a.VH, rgbHex2Rgba: g.a.P7, argbHex2Rgba: g.a.Dr, isEmpty: g.a.sh, deleteItemFromArray: g.a.hy, deleteItemFromArrayByIndex: g.a.uo, indexOf: g.a.indexOf, format: g.a.mc, isArray: g.a.isArray, isDOM: g.a.pJ, includes: g.a.ka, requestIdleCallback: g.a.TT, cancelIdleCallback: g.a.KP, requestAnimFrame: g.a.Tc, cancelAnimFrame: g.a.qi, color2RgbaArray: g.a.Tl, color2Rgba: g.a.bna }
    for (yc in Jc)Jc.hasOwnProperty(yc) && typeof Jc[yc] === 'function' && ($.Util[yc] = (function () { var a = yc; return function () { g.c.va($.Util); g.c.add($.Util, a); return Jc[a].apply(g.a, Array.prototype.slice.call(arguments)) } }())); $.DomUtil = { CLASS_NAME: 'AMap.DomUtil' }; var Kc = { getViewport: g.j.XI, getViewportOffset: g.j.AR, create: g.j.create, setClass: g.j.Ewa, hasClass: g.j.rn, addClass: g.j.Sa, removeClass: g.j.ab, setOpacity: g.j.Eq, rotate: g.j.rotate, setCss: g.j.Wa, empty: g.j.YD, remove: g.j.remove, TRANSFORM: g.j.ng, TRANSITION: g.j.sF }
    for (yc in Kc)Kc.hasOwnProperty(yc) && typeof Kc[yc] === 'function' && ($.DomUtil[yc] = (function () { var a = yc; return function () { g.c.va($.DomUtil); g.c.add($.DomUtil, a); return Kc[a].apply(g.j, Array.prototype.slice.call(arguments)) } }())); var Lc = g.w; $.User = { key: Lc.key }; window.AMap = $; window.AMap.BuryPoint = g.BuryPoint; window.AMap.Class = g.aa; g.Dj = g.aa.extend({ r: function (a, b, c, d) { this.start = a; this.end = b; this.transition = c; this.precision = d || 0; this.Jv = !1; this.update = g.a.bind(this.update, this); return this }, Dn: function (a) { this.fh = this.startTime = +new Date(); this.frames = 0; this.Jv = !0; this.mo = g.a.Tc(this.update); this.gia = g.a.bind(this.rq, a || this) }, update: function () {
        this.frames += 1; var a = +new Date(); var b = a - this.startTime; var b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.fh) : null; typeof b === 'number' && Math.abs(b - this.end) < this.precision
            ? (this.stop(), b = this.end) : this.mo = g.a.Tc(this.update); this.fh = a; this.gia(b)
    }, stop: function (a) { g.a.qi(this.mo); a && this.update(); this.Jv = !1 } }); g.Dj.Easing = { Linear: { None: function (a) { return a } }, Bounce: { In: function (a) { return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) }, Out: function (a) { return g.Dj.Easing.Bounce.In(1 - a) } }, Cubic: { In: function (a) { return 1 - a * a * a }, Out: function (a) { a = 1 - a; return 1 - a * a * a } }}; g.Lb = g.aa.extend({ ka: [g.ta, g.Se, g.BJ], r: function (a, b) {
        this.oc = g.a.bind(this.oc, this); this.C = b; this.ij = b.ij; this.wm = ''; this.eh = this.Ig = this.Qk = !1; this.Sn = {}; this.K = a; this.kga(); this.Cra(); this.W('zooms', b, !0); this.W('size', b, !0); this.W('limitBounds', b); this.W('view', b); this.W('nolimg', b, !0); this.W('mapNumber', b, !0); this.W('lang', b, !0); this.W('features', b, !0); this.W('styleID', b, !0); this.W('forceBig', b, !0); this.W('mode', b, !0); this.W('showBuildingBlock', b, !0); this.W('mapStyle', b); var c = this.get('mapStyle')
        this.ve = g.w.ve[c] || g.w.ve['default']; this.vH = '#a3ccff'; this.JB = b.get('skyColor') || '#cce0ff'; g.w.AQ && this.W('editEnable', b); g.w.AQ && this.yd ? this.W('style', b, !0) : this.W('styleUrl', b); this.W('hightlight', b, !0); this.W('labelzIndex', b, !0); if (g.l.OK) {
            c = new A.o.ob({ innerLayer: !0, zIndex: b.get('labelzIndex'), visible: !1 }); this.Ec = new g.o.Ij(c, this, ['point', 'road']); this.Ec.type = '\u77e2\u91cf\u6807\u6ce8'; var d = this.C.get('defaultLayer'); d && c.W('rejectMapMask', d, !0); b.labelsLayer = this.Ec.T; this.Ec.T.h('complete',
                this.lr, this, !0); this.Ec.T.h('renderComplete', this.lr, this); this.Ec.eB = this.Ec.Sg = !0
        } this.W('isHotspot', b, !0); this.W('layers', b); this.W('overlays', b); this.W('infos', b, !0); this.W('contextmenus', b, !0); this.W('controls', b); this.W('bounds', b); this.W('draw', b); this.Ue('zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender gridMapForeign vectorMapForeign'.split(' '), b); this.Ue('rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom'.split(' '),
            b, !0); this.get('jogEnable') ? this.dv = !0 : this.dv = !1; this.Afa(); this.Hfa(); this.UY && this.UY(); this.W('resizeEnable', b); this.C.map = this; c = this.get('size'); c = c.width * c.height / 65536; g.l.Nc && c > 3 && (this.s1 = !0); this.V = { Gd: !1 }; this.xK()
    }, editEnableChanged: function () { this.yd = this.get('editEnable') }, labelzIndexChanged: function () { this.Ec && this.Ec.set('zIndex', this.get('labelzIndex')) }, styleChanged: function () { this.el = !0 }, mapStyleChanged: function () {
        if (this.C.yi) {
            this.wm && (this.set('style', ''), this.vu = this.wm = '')
            var a = this.get('mapStyle'); this.el = !0; this.ve = g.w.ve[a] || g.w.ve['default']; this.XD()
        }
    }, styleUrlChanged: function () {
        if (this.C.yi) {
            var a = this.get('styleUrl') || ''; if (a !== this.wm) {
                var b = a.indexOf('?isPublic=true') !== -1; var a = a.substr(0, 46); var c = a.split('amap://styles/')[1]; c === 'normal' ? (this.wm = '', this.set('nolimg', !!this.C.get('nolimg_param')), this.set('style', ''), this.vu = '') : (this.Nz = !0, this.set('nolimg', !0), b = new g.fb.wb(c.length < 32 ? g.w.tc + '://webapi.amap.com/style?name=' + c + '&key=' + g.w.key : g.w.tc + '://webapi.amap.com/v4/map/styles?styleid=' +
c + '&s=rsv3&key=' + g.w.key + (b ? '&ispublic=1' : ''), { callback: 'callback' }), b.h('complete', function (a) { a.data && a.data.content ? this.set('style', JSON.parse(a.data.content)) : this.set('style', ''); this.Nz = !1 }, this), b.h('error', function () { this.Nz = !1 }, this), this.wm = a, this.XD())
            }
        }
    }, f8: function (a) { this.K.style.background = a }, vpa: function (a) { var b = this.get('center'); if (a.contains(b)) return null; a = g.Yq.closestOnLine(b, a.FU().path); return new g.U(a[0], a[1]) }, Ama: function () {
        var a = this.get('limitBounds'); var b = this.get('bounds')
        b.wc && b.wc.Q > b.nc.Q && (b.nc.Q += 360); if (!a.contains(b)) { if (b instanceof g.gp) return this.vpa(a, b); var c = this.get('center').lb(); a.rj() < b.rj() ? c.Q = a.ui().Q : (a.wc.Q > b.wc.Q && (c.Q += a.wc.Q - b.wc.Q), a.nc.Q < b.nc.Q && (c.Q += a.nc.Q - b.nc.Q)); a.pj() < b.pj() ? c.P = a.ui().P : (a.wc.P > b.wc.P && (c.P += a.wc.P - b.wc.P), a.nc.P < b.nc.P && (c.P += a.nc.P - b.nc.P)); return c }
    }, FO: function () {
        var a = this.pU; this.C.refreshSize(); var b = this.get('size'); b && a && !b.cb(a) && (this.pU = b, this.Ov = !0, this.set('display'), this.M7(b), this.get('resizeEnable') &&
this.oa('resize', { Jta: a, k6: b }))
    }, J_: function () { var a = this; a.FO(); a.zO = setTimeout(function () { a.J_() }, 200) }, Cca: function () { this.zO && (clearTimeout(this.zO), this.zO = null) }, kga: function () { this.C.D = !0; this.pU = this.C.getSize(); this.C.D = !1; if (g.l.Ae || g.l.S9 && g.l.jD || g.l.eta) this.J_(); else { var a = this; g.F.nla(this.K, function (b) { a.FO(b) }) } }, Cra: function () {
        var a = this.K; g.j.Sa(a, 'amap-container'); var b = {}; b.ad = g.j.create('div', a, 'amap-maps'); this.Gl = g.j.create('div', a); this.Gl.style.display = 'none'; b.Jr = g.j.create('div',
            b.ad, 'amap-drags'); b.o = g.j.create('div', b.Jr, 'amap-layers'); b.A = g.j.create('div', b.Jr, 'amap-overlays'); b.controls = g.j.create('div', a, 'amap-controls'); b.pv = g.j.create('a', a, 'amap-logo'); var c = window.location.host; c.indexOf('amap.com') === -1 && c.indexOf('gaode.com') === -1 && (b.pv.href = g.l.ba ? 'http://m.amap.com' : 'http://gaode.com', b.pv.target = '_blank'); g.j.create('img', b.pv).src = g.l.Nc ? this.C.B.logoUrlRetina : this.C.B.logoUrl; b.kn = g.j.create('div', a, 'amap-copyright'); b.kn.style.display = 'none'; g.j.XI(this.K).width > 350 &&
(b.kn.innerHTML = this.C.B.copyright, b.kn.O5 = g.j.create('span', b.kn, 'amap-mcode'), this.XD()); this.Ta = b
    }, XD: function () {
        var a = this.get('layers'); if (a) {
            for (var b = -1, c = '', d = 0; d < a.length; d += 1) { var e = a[d].get('mapNumber'); var f = a[d].get('zIndex', null, !0); e && f > b && a[d].get('visible') && (c = e, b = f) } this.set('mapNumber', c); this.C.D = !0; a = this.C.getMapStyle(); this.C.D = !1; c === 'GS(2019)6379' && a && a !== 'normal' && a !== 'amap://styles/normal' && (c = '', this.Ta.kn.style.visibility = 'hidden', this.Ta.pv.style.display = 'none'); c && this.Ta.kn.O5 &&
(this.Ta.kn.O5.innerHTML = '- ' + c + '\u53f7', this.Ta.kn.style.visibility = 'visible', this.Ta.pv.style.display = 'block'); return c
        }
    }, $X: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1; g.Gj && (a ? g.Gj.flush() : this.c3 || (this.c3 = g.a.Tc(function () { g.Gj.flush(); this.c3 = null }, this))) }, HT: function (a) {
        var b = this; var c = this.C.get('rasterLayer'); c && (this.C.set('rasterLayer', void 0), this.C.r7 = !0, this.C.kk = this.C.Ka, this.Xk && (this.Xk.bJ = !1), c.o && (c.o.PJ = !0), a || (this.IT = g.a.TT(function () {
            b.IT = null
            b.C && b.C.lk(c)
        }))); a && this.IT && g.a.KP(this.IT)
    }, lr: function () {
        function a () { for (var a = d.get('layers'), b = d.get('zoom'), c = 0; c < a.length; c += 1) { var e = a[c].get('zooms'); if (!(a[c].kk || a[c].L4 || !e || b > e[1] || b < e[0] || !a[c].get('visible') || a[c].o && a[c].o.fa && a[c].o.fa.length === 0 || a[c].o && a[c].o.PJ || a[c].o && a[c].o.Ka)) return !1 }a = d.C.get('features'); return (a === 'all' || g.a.ka(a, 'point')) && d.Ec && d.Ec.get('visible') && d.Ec.fa.length > 0 && !d.Ec.Ka && !d.Ec.eo ? !1 : !0 } function b () {
            var a = { id: d.C.id }; g.ue.cf.end(g.extend(a, { key: 'rds' }))
            g.ue.cf.send(g.extend(a, { params: { rs: d.get('baseRender'), viewmode: d.C.view.type, fd: d.xJ === 0 ? 1 : 0, raster: d.C.kk ? 1 : 0 }})); d.C && d.C.mm && d.C.mm.tB && d.C.mm.tB(); d.C.k7 = 1; d.$X(); d.set('display'); d.qD = !0
        } function c () { g.ue.cf.end({ id: d.C.id, key: 'rd' }); g.a.Tc(function () { this.q('complete') }, d); d.C.Ka = !0; d.set('display') } if (!this.kQ) {
            if (this.qD) this.Dt === 1 && this.get('zoom') === 13 && (g.a.PC.stop(this.cG), g.ue.cf.send({ id: this.C.id, params: { fps: this.cG.PC, type: 'fps', rs: this.get('baseRender') }}), this.Dt = 2), this.$X()
            else { var d = this; var e = this.C.get('rasterLayer'); var f = a(); e ? (e.o && e.o.Ka && (this.C.Ka || c()), f && (this.C.Ka || c(), this.HT(), b())) : f && (this.C.Ka || c(), b(), this.C.r7 = !0) }
        }
    }, layersChanged: function () {
        this.ya = this.ya || []; for (var a = this.get('layers'), b = this.ya.length - 1; b >= 0; b -= 1) {
            this.ya[b] === this.td || this.ya[b] === this.Ms || this.ya[b].eB || this.ya[b].T.eB || g.a.indexOf(a, this.ya[b].T) !== -1 || (this.ya[b].Wg(), this.ya[b].ol && this.ya[b].ol.Wg(), this.ya[b].T.G('complete', this.lr, this), this.ya[b].T.G('renderComplete', this.lr,
                this), this.ya = g.a.uo(this.ya, b))
        } for (var c = !1, d = !0, e = this.get('labelzIndex'), b = 0; b < a.length; b += 1) if (!a[b].L4) if (a[b].pi)g.a.indexOf(this.ya, a[b].o) === -1 && this.ya.push(a[b].o); else { var f = this.Uf(a[b]); f && (this.ya.push(f), a[b].pi = !0, a[b].o = f); a[b].h('complete', this.lr, this, !0); a[b].h('renderComplete', this.lr, this) } for (b = 0; b < this.ya.length; b += 1)f = this.ya[b].T, f.mq && f.get('visible') && (c = !0, !1 === f.get('detectRetina') && (d = !1), e = f.get('textIndex') || e); this.Ec && (c || this.C.view.type !== '3D' ? this.Ec.eo = !1 : (c =
g.a.find(a, function (a) { if (A.o.st && a instanceof A.o.st && a.get('visible')) return !0 }), this.Ec.eo = c = !!c)); a = g.a.indexOf(this.ya, this.Ec); c && this.C.get('showLabel') ? (a === -1 && this.ya.push(this.Ec), this.Ec.ja = d && g.l.ja, this.Ec.hC(this.get('mapStyle') || 'normal'), this.Ec.set('zIndex', e), this.Ec.set('visible', !0), this.C.aD = !0, this.C.get('isHotspot') ? this.Ec.bua() : this.Ec.TP()) : (this.Ec && (this.Ec.set('visible', !1), this.C.aD = !1, this.Ec.TP()), this.C.aD = !1); this.C.isHotspotChanged(); this.set('display', 0); this.XD()
    },
    isHotspotChanged: function () { this.layersChanged() }, controlsChanged: function () { var a = this.get('controls'); var b; var c; if (a.add && a.add.length > 0) for (;a.add.length > 0;)b = a.add.shift(), (c = b.fu || b.addTo) && c.call(b, this.C, this.Ta.controls); else if (a.remove && a.remove.length) for (;a.remove.length > 0;)b = a.remove.shift(), (c = b.Ev || b.removeFrom) && c.call(b, this.C, this.Ta.controls) }, V0: function () {
        if (!this.kQ) {
            var a = this; this.$0 = !1; a.td || (a.td = new g.o.cd(new A.o.cd(), a), a.td.uf = 36, a.td.gg = 36, a.td.set('zIndex', 120), a.ya.push(a.td),
            a.td.DC = !0); for (var b = a.get('overlays'), c = [], d = 0; d < a.Wc.length; d += 1) {
                g.a.indexOf(b, a.Wc[d].Ob) === -1 && (a.Wc[d].Ob instanceof A.A.Re || a.Wc[d].Ob instanceof A.A.Jn ? a.Wc[d].Wg() : (a.td && a.Wc[d] instanceof g.A.sb ? (a.td.Vg = g.a.hy(a.td.Vg, a.Wc[d].L), a.td.y7([a.Wc[d].L])) : a.Ms && a.Ms.y7([a.Wc[d].L]), a.Wc[d].L.ca ? (g.j.remove(a.Wc[d].L.ca), a.Wc[d].L.ca = null) : a.Wc[d].L.Ya && (g.j.remove(a.Wc[d].L.Ya.Zf), g.j.remove(a.Wc[d].L.Ya.$b), a.Wc[d].L.Ya = null), a.Wc[d].xn && a.Wc[d].xn.stop(), a.Wc[d].wh && a.Wc[d].wh.stop(), a.Wc[d].Ob.pi =
!1, a.Wc[d].Ob.tl(), a.Wc[d].Ob.A = null, a.Wc[d].Ob = null, a.Wc[d].L.doa(), a.Wc[d].L = null, a.Wc[d].tl(), a.Wc[d].Ke = null, a.Wc[d].si(), a.Wc[d].map = null), c.push(a.Wc[d]))
            } for (d = 0; d < c.length; d += 1)a.Wc = g.a.uo(a.Wc, g.a.indexOf(a.Wc, c[d])); var e = []; var f = []; g.a.zwa(function (b) { if (!b.pi && b.Tg) { var c = b.A || a.ima(b); c && (a.Wc.push(c), c instanceof g.A.Re || c instanceof g.A.Jn ? c.ez(a) : c instanceof g.A.sb ? e.push(c.L) : f.push(c.L), b.pi = !0) } }, b); e.length && a.td.Lx(e); f.length && (a.Ms || (a.Ms = new g.o.cd(new A.o.cd(), a), a.Ms.set('zIndex',
                110), a.ya.push(a.Ms)), a.Ms.Lx(f)); a.set('display', 0)
        }
    }, overlaysChanged: function () { this.Wc = this.Wc || []; this.get('overlays') && this.get('overlays').length === 0 ? this.V0() : this.$0 || (g.a.Tc(this.V0, this), this.$0 = !0) }, contextmenusChanged: function () { var a = this.get('contextmenu'); if (a) { var b = this; g.rb.load('overlay', function () { b.$x = new g.A.Jn(a, b); b.set('display', 0) }) } }, infosChanged: function () {
        var a = this.get('infos'); if (a) {
            this.nm = this.nm || {}; var b; var c = this; g.rb.load('overlay', function () {
                for (var d in a) {
                    a.hasOwnProperty(d) &&
(b = a[d], c.nm[d] = c.nm[d] || new g.A.Re(b, c))
                }
            })
        }
    }, ima: function (a) {
        var b = null; if (a instanceof A.A.sb)b = new g.A.sb(a, this); else if (a instanceof A.A.Jn)b = new g.A.Jn(a, this); else if (a instanceof A.A.Re)b = new g.A.Re(a, this); else {
            var c = ['overlay']; this.get('overlayRender') === 'd' ? (c.push('dvector'), g.l.Ko ? c.push('svg') : c.push('vml')) : c.push('cvector'); if (!this.Yya && !g.rb.nD(c)) { var d = this; g.rb.Ug(c, function () { this.Yya = !0; d.overlaysChanged() }); return }a instanceof A.A.Bc ? b = new g.A.Bc(a, this) : a instanceof A.A.$z
                ? b = new g.A.$z(a, this) : a instanceof A.A.Zb ? b = new g.A.Zb(a, this) : a instanceof A.A.bh ? b = new g.A.bh(a, this) : a instanceof A.A.qt ? b = new g.A.Bc(a, this) : a instanceof A.A.wt && (b = new g.A.Bc(a, this))
        } return b
    }, k3: function () { var a = this.ve; !this.vu || this.Dh && this.Dh.tp || (a = typeof this.vu === 'function' ? this.vu(this.Xk.R.zoom) : this.vu); return a }, VBa: function () {
        function a () {} var b = new g.o.cd(); var c = []; var d = new g.U(116.405467, 39.907761); new g.style.Fg.ci(); for (var e = 0; e < 100; e += 1) {
            for (var f = 0; f < 100; f += 1) {
                var h = new g.U(d.Q + 0.02 *
f, d.P + 0.02 * e); var h = new g.ai({ name: 'point' + (100 * e + f), map: this, ia: new g.Ca.Eg(this.Ab(h)) }); c[100 * e + f] = h; h.h('hover', a, h)
            }
        }b.Lx(c); this.ya.push(b)
    }, lc: function () {}, TBa: function (a) { var b = new g.o.cd(); var c = []; var c = (new g.I$({ map: this })).wT(a); b.Lx(c); this.ya.push(b); this.set('display', 0) }, Uf: function (a) { var b = this; a = a.Uf(this); if (!a) return null; if (a.length && typeof a[0] === 'string')g.rb.Ug(a, function () { b.layersChanged() }); else return a; return null }, PDa: function () { return this.Ta }, fGa: function () { this.set('display', 0) },
    displayChanged: function (a) { this.N0 || this.xK(a) }, xK: function (a) { if (a) if (g.a.qi(this.bE), g.l.Rl) { var b = this; setTimeout(function () { b.oc() }, 0) } else this.oc(); else this.nw || (this.bE = g.a.Tc(this.oc), this.nw = !0) }, oc: function () {
        this.bE = null; if (!this.kQ) {
            this.q('render'); this.nw = !1; var a = {}; if (this.ya && (a.size = this.C.get('size'), a.size.width && a.size.height)) {
                for (var b = this.C.view.type, c = [], d = 0, e = this.ya.length; d < e; d += 1) this.ya[d].Dg && this.ya[d].Dg !== b ? this.ya[d].Ka = !0 : (c.push(this.ya[d]), this.ya[d].ol && c.push(this.ya[d].ol))
                c.sort(function (a, b) { var c = a.get('zIndex'); var d = b.get('zIndex'); return c > d ? 1 : c === d ? a.BF > b.BF ? 1 : -1 : -1 }); a.ya = c; c = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1; a.Rla = a.size.width * a.size.height * c * c > 15E5; a.bJ = !!this.C.get('rasterLayer'); a.ba = g.l.ba; a.lang = this.get('lang'); a.R = this.C.WI(); a.Dg = b; this.C.D = !0; a.S = this.C.getResolution([0, 0]); a.ys = this.C.get('mapStyle'); a.el = this.el; this.C.D = !1; a.Gd = this.eh; a.RCa = this.Sn; a.He = this.Qk; a.bg = this.Ig; a.VK = this.Ig && g.l.ba; a.JU = g.l.ba && this.Qk; a.xE = g.l.ba && this.eh
                this.xE = a.xE; b = this.get('targetLevel') || a.R.zoom; a.Wq = a.R.zoom > b; a.Nf = a.R.zoom > b ? 'zoomOut' : a.R.zoom < b ? 'zoomIn' : 'stable'; a.mFa = !0; a.s1 = this.s1; for (var b = !1, f, c = !1, d = 0; d < this.ya.length; d += 1) this.ya[d].zi && this.ya[d].T.get('visible') && a.R.zoom <= this.ya[d].T.get('zooms')[1] && (a.MT = !0), this.ya[d].he().Nc && (b = !0); for (d = 0; d < this.ya.length; d += 1) this.ya[d].T.vP && a.MT && (!this.Qk && this.ya[d].T.get('visible') && (f = this.ya[d].T.vP(), f.yEa = 1, f.zoom = a.R.zoom), c = !0); this.qb = []; c && f && this.qb !== f && (this.qb = f); a.qb =
this.qb; a.Nc = b; a.scale = Math.pow(2, a.R.zoom - a.R.ne); this.Xk = a; this.ld = this.C.get('mask'); a.ld = this.ld; a.GJ = this.GJ; if (f = this.NI())f.oc(a), this.el = this.TQ = this.GJ = !1
            }
        }
    }, NI: function () { if (!this.J || this.J.type !== this.C.view.type || this.J.Usa) if (this.J = null, this.C.view.type == '3D') { var a = this; g.rb.load('Map3D', function () { a.J || (a.J = new g.Da.kF(a), a.set('display')) }) } else this.J = new g.M.canvas.Lb(this); return this.J }, Fpa: function () {
        var a = []; var b = this.get('controls').Id; var c; for (c in b)b[c].zy && b[c].zy() && a.push(b[c].zy())
        return a
    }, destroyChanged: function () {
        delete g.ue.Jy[this.C._amap_id]; this.kQ = 1; this.HT(!0); this.V = {}; this.Ec && (this.Ec.T.G('complete', this.lr, this), this.Ec.Wg(), this.ya = g.a.uo(this.ya, g.a.indexOf(this.ya, this.Ec))); this.Dh && this.Dh.ef && this.Dh.ef.T && this.Dh.ef.T.setMap(); this.eka && clearTimeout(this.eka); this.Jja(); this.Lga(); this.iO && this.iO(); this.Pka(); this.tl(); this.C = this.C.map = null; this.K = this.K.kM = null; this.si(); this.Be && (this.Be.stop(), this.Be = null); this.Mf && (this.Mf.stop(), this.Mf = null); this.Cd &&
(this.Cd.stop(), this.Cd = null); this.J && this.J.Cf && this.J.Cf(); this.J = null
    }, Pka: function () { var a = this.K; this.Cca(); g.F.Rma(a); g.j.YD(a); this.Gl = null; g.j.ab(a, 'amap-container'); this.Ta = null }, jogEnableChanged: function () { this.get('jogEnable') ? this.dv = !0 : this.dv = !1 }, drawChanged: function () {
        var a = this; var b; var c; var d = this.get('draw'); if (d) { this.bq || (this.bq = []); b = 0; for (c = this.bq.length; b < c; b += 1) this.bq[b].Eva(); g.rb.load('interaction', function () { var b = new g.Xza({ type: d, o: a.Ms }, a); a.bq.push(b); a.loaded = !0 }) } else if (this.bq) {
            for (b =
0, c = this.bq.length; b < c; b += 1) this.bq[b].Eva(), this.bq[b].rCa(), this.G('click', this.bq[b].eEa, this)
        }
    }, ce: function (a, b, c) { return this.C.view.ce(a, b, c) }, ug: function (a, b, c) { return this.C.view.ug(a, b, c) }, X3: function (a, b) {
        var c = this.get('size'); var d = document.createElement('canvas'); a = a || c.width; b = b || c.height; d.width = a; d.height = b; for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext('2d'), h = this.Ta.o.childNodes, k = [], l = 0; l < h.length; l += 1)k.push(h[l]); k.sort(function (a, b) { return a.style.zIndex - b.style.zIndex })
        for (l = 0; l < k.length; l += 1) {
            var m = k[l]; if (g.j.rn(m, 'amap-layer') || g.j.rn(m, 'amap-e') || g.j.rn(m, 'amap-labels')) {
                if (m.tagName === 'CANVAS') { var h = c; var n = e; var p = parseFloat(m.style.width) || m.width; var q = parseFloat(m.style.height) || m.height; var r = 1; m.style.transform && (r = parseFloat(m.style.transform.split('(')[1])); f.drawImage(m, n, h, p * r, q * r) } else if (m.tagName === 'DIV') {
                    for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
                        var v = r[u]; if (v.tagName === 'CANVAS' || v.tagName === 'IMG') {
                            h =
parseFloat(v.style.top) || 0, n = parseFloat(v.style.left) || 0, p = parseFloat(v.style.width) || v.width, q = parseFloat(v.style.height) || v.height, f.drawImage(v, n + m, h + s, p, q)
                        }
                    }
                }
            }
        } return d.toDataURL()
    } }); g.Lb.zb({ Afa: function () { this.jB = !1; g.l.Jf && (this.C.view.type === '3D' ? this.Uba() : this.Sba()); g.l.ba || this.Pba() }, Jja: function () { g.l.Jf && (this.C.view.type === '3D' ? this.Rga() : this.Qga()); g.l.ba || this.Mga() }, rotateEnableChanged: function () { this.pwa = this.get('rotateEnable'); g.l.Jf && this.u1 && this.C.view.type !== '3D' && (this.pwa ? this.u1() : this.Ita()) }, zoomEnableChanged: function () {
        this.get('zoomEnable') ? (g.l.Jf && this.yP && this.C.view.type !== '3D' && this.yP(), g.l.ba || this.Rba()) : (g.l.Jf && this.PS && this.PS(), g.l.ba ||
this.Pga())
    }, mousewheelChanged: function () {}, ES: function (a) { a && (this.jB = a.au) }, ew: function () { this.jB = !1 }, Fi: function (a, b, c, d) {
        var e; var f = {}; a || (a = window.event); var h = g.F.gm(a, this.Ta.ad); g.l.Jf && (a.type !== 'touchend' ? this.V.fga = h : h = this.V.fga); f.ub = h; f.Pa = this.ug(h); f.Pa && (f.Pa = f.Pa.toFixed(3)); f.ag = this.Vd(f.Pa); c || (c = this.jB ? this.jB ? [this.jB] : null : this.nea(f.Pa, d)) && c.length > 0 && c[0].tr && (e = c[0].tr, f.au = c[0]); e || a.Te === 'info' || (e = this); f.ed = e; f.XAa = a.altKey; f.ctrlKey = a.ctrlKey; f.button = void 0 === a.button
            ? 0 : a.button; b || g.F.preventDefault(a); return f
    }, GN: function (a) { return a && a !== this && a !== document }, AO: function () { var a = this.V; a.$f && (a.Uj.ub.x === a.$f.x && a.Uj.ub.y === a.$f.y ? a.Ig = !1 : (a.Ig = !0, a.qp || (a.Up.q('dragstart', a.Tp), a.qp = !0), a.Up.q('dragging', a.Uj), a.$f = a.Uj.ub)) }, gxa: function (a) { for (var b = [], c = 0; c < a.length; c += 1)a[c] && (b = b.concat(a[c])); return b }, yv: function (a, b, c) { return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10) }, nea: function (a, b) {
        var c = this.NI(); if (!c) return null; var d; var e = this; this.ya.sort(function (a,
            b) { return a.get('zIndex') > b.get('zIndex') ? -1 : 1 }); c.Ou(a, this.ya, function (a) { d = a; d = e.gxa(d) }, function () { d = [] }, b); return d
    } }); g.Lb.zb({ Hfa: function () { this.Sn = {}; this.h('moveend', this.v6, this); g.l.Rl && (g.l.bL || g.l.HH) && this.h('zoomend', this.lV, this); this.h('movestart', this.w6, this); this.h('zoomstart', this.C6, this); this.h('zoomend', this.B6, this); this.pM(); this.Dt = 0; this.cG = {}; typeof window.requestAnimationFrame === 'undefined' && (this.Dt = 2) }, C6: function () { this.Dt !== 2 && this.get('zoom') === 12 && (this.Dt = 1, g.a.PC.start(this.cG)); this.Qk = !0 }, B6: function () {
        this.Dt === 1 && this.get('zoom') !== 13 && (this.Dt = 0, g.a.PC.cancel(this.cG)); this.Qk =
!1; this.set('display')
    }, q0: function (a, b) { this.Sn.left = a > 0; this.Sn.right = a < 0; this.Sn.LE = b > 0; this.Sn.oQ = b < 0 }, Xt: function () { this.Sn.left = !1; this.Sn.right = !1; this.Sn.LE = !1; this.Sn.oQ = !1 }, Lga: function () { this.G('moveend', this.v6, this); g.l.Rl && (g.l.bL || g.l.HH) && this.G('zoomend', this.lV, this); this.G('movestart', this.w6, this); this.G('zoomstart', this.C6, this); this.G('zoomend', this.B6, this); this.Nga() }, v6: function (a) {
        this.Ig = !1; this.Xt(); this.M7(); !a.f5 && this.C.get('limitBounds', null, !0) ? (a = this.Ama()) && !a.cb(this.get('center'))
            ? this.HK(this.get('zoom'), a, !1, !0) : this.oa('moveend') : this.oa('moveend'); this.set('display')
    }, w6: function () { this.Ig = !0; this.Xt() }, dragEnableChanged: function () { (this.EC = this.get('dragEnable')) ? this.oM() : this.hO() }, oa: function (a, b) { if (this.C.ke(a)) { var c; b && (c = b.k6 ? { type: a, newsize: b.k6, oldsize: b.Jta } : { type: a, pixel: b.ub, target: this.C, lnglat: b.ag }); this.C.q(a, c) } }, pM: function () { this.h('click', this.VZ); this.h('dblclick', this.ZZ); g.l.Jf && this.YW(); g.l.ba || this.Qba() }, Nga: function () {
        this.G('click', this.VZ)
        this.G('dblclick', this.ZZ); g.l.Jf && this.KZ(); g.l.ba || this.Oga()
    }, MG: function (a, b) { var c = this.get('targetLevel') || this.get('zoom'); var c = b > 0 ? Math.floor(c) + 1 : Math.ceil(c) - 1; var c = Math.min(Math.max(c, this.get('zooms')[0]), this.get('zooms')[1]); c === this.get('zoom') || this.Mf && this.Mf.Jv && c === this.Mf.end || this.Yz(c, !1, a) }, VZ: function (a) { this.oa('click', a) }, ZZ: function (a) { this.get('doubleClickZoom') && this.get('zoomEnable') && this.MG(a.Pa, 1); this.oa('dblclick', a) }, DBa: function (a) {
        this.MG(a.ZGa, a.V8); this.oa('touchend',
            a)
    }, oM: function () { this.EC && (this.C.view.type === '3D' ? (this.h('dragstart', this.e_), this.h('dragging', this.a_), this.h('dragend', this.c_)) : (this.h('dragstart', this.d_), this.h('dragging', this.$Z), this.h('dragend', this.b_))) }, hO: function () { this.EC || (this.C.view.type === '3D' ? (this.G('dragstart', this.e_), this.G('dragging', this.a_), this.G('dragend', this.c_)) : (this.G('dragstart', this.d_), this.G('dragging', this.$Z), this.G('dragend', this.b_))) }, d_: function (a) {
        this.ES(a); this.Xt(); this.eh = !0; this.V.ny = a.ub.x; this.V.FC =
a.ub.y; this.Be && (this.Be.stop(), this.es(!0)); this.oa('dragstart'); this.oa('movestart'); this.q('movestart', a); this.mxa()
    }, $Z: function () {
        var a = this.V; var b = a.Uj.ub.x - a.ny; var c = a.Uj.ub.y - a.FC; if (c || b) {
            this.V.Ig = !0; this.q0(b, c); a.ny = a.Uj.ub.x; a.FC = a.Uj.ub.y; var a = b; var d = c; var e = this.rotation; e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b + Math.cos(e) * c); a = this.get('centerCoords').Za((new g.H(a, d)).Kd(this.S)); (d = this.U1(a)) && (c = Math.round(this.ce(d).Za(this.ce(a)).y)); this.Po(this.Ta.Jr, b, c); a.x =
(a.x + g.a.Ea) % g.a.Ea; this.set('centerCoords', a, !0); this.set('center', this.Vd(a), !0); this.dv && (this.fh ? (a = new Date(), this.Jt = a - this.fh > 100 ? new g.H(0, 0) : new g.H(b, c), this.fh = a) : this.fh = new Date()); this.oa('dragging'); this.oa('mapmove')
        } else this.V.Ig = !1, this.Jt = null, this.Xt()
    }, Po: function (a, b, c) {
        if (a && !(Math.abs(b) < 1 && Math.abs(c) < 1)) {
            var d = parseFloat(a.style.top) || 0; var e = parseFloat(a.style.left) || 0; var f = ''; this.rotation && (f = g.j.at[g.j.ng] + ':rotate(' + this.rotation + 'deg);overflow:visible;'); a.style.cssText = 'position:absolute;top:' +
(d + c) + 'px;left:' + (e + b) + 'px;' + f
        }
    }, U1: function (a) { var b = this.C.view.zW(); var c = this.pU.height * this.S / 2; return a.y < b.ec + c ? (a.y = b.ec + c, a) : a.y > b.sc - c ? (a.y = b.sc - c, a) : null }, b_: function () {
        this.ew(); new Date() - this.fh > 100 && (this.Jt = null); this.V.$f = null; this.eh = !1; this.Xt(); this.oa('dragend'); if (this.dv && this.Jt) {
            if (this.V.Ig) {
                var a = this.Jt; var b = new g.H(0, 0); this.Be = new g.Dj(a, b, function (a, b, e) { return e >= 600 ? b : a.Kd(1 - Math.pow(e / 600, 2)).floor() }, 1); this.Be.rq = function (a) {
                    if (Math.abs(a.x) < 2 && Math.abs(a.y) < 2) {
                        this.Be.stop(),
                        this.q('moveend'), this.es(), this.Jt = this.fh = null
                    } else { var b = a.x; var e = a.y; var f = this.rotation; f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y, e = -Math.sin(f) * a.x + Math.cos(f) * a.y); b = this.get('centerCoords').Za((new g.H(b, e)).Kd(this.S)); e = this.U1(b); f = a.y; e && (f = Math.round(this.ce(e).Za(this.ce(b)).y)); this.Po(this.Ta.Jr, a.x, f); b.x = (b.x + g.a.Ea) % g.a.Ea; this.set('centerCoords', b, !0); this.set('center', this.Vd(b), !0); this.oa('mapmove') }
                }; this.Be.Dn(this)
            } else this.q('moveend'), this.es(!0), this.Jt = this.fh = null
        } else this.q('moveend'), this.es(), this.Jt = this.fh = null
    }, mxa: function () { if (!this.V.refresh) { var a = this; var b = null; this.V.refresh = setInterval(function () { b !== a.V.$f && (a.set('display', 0), b = a.V.$f) }, g.l.ba ? 400 : 100) } }, lV: function () {
        if (g.l.Rl && (g.l.bL || g.l.HH)) {
            for (var a = this.Ta.o.childNodes, b = 0; b < a.length; b += 1) { var c = a[b]; c instanceof HTMLCanvasElement && (c.width = 0); c.className === 'amap-e' && (c.style.height = '0') } for (b = 0; b < this.ya.length; b += 1) {
                c = this.ya[b], typeof AMap.IndoorMap !== 'undefined' && c instanceof AMap.IndoorMap &&
(c.cu && (c.cu.width = 0), c.Gx && (c.Gx.width = 0))
            }
        }
    }, es: function (a) { this.V.refresh && (clearInterval(this.V.refresh), this.V.refresh = null); a || (this.lV(), this.set('display', 0)) }, M7: function (a) { this.set('refresh', a) } }); g.Lb.zb({ setZoomSlow: function (a) { this.HK(a, null, !this.get('animateEnable')) }, setPanTo: function (a) { this.HK(null, a, !this.get('animateEnable')) }, zoomAndCenterChanged: function (a) { var b = a[0]; b < this.get('zooms')[0] && (b = this.get('zooms')[0]); b > this.get('zooms')[1] && (b = this.get('zooms')[1]); this.HK(b, a[1], a[2] || !this.get('animateEnable')) }, zoomChanged: function () { this.S = Math.pow(2, 20 - this.get('zoom')); this.q('closeOverlays'); this.set('display') }, rotationChanged: function (a) {
        this.rotation = this.get('rotation')
        this.C.q('rotate', { rotation: this.rotation || 0 }); !0 !== a && this.set('display', 0)
    }, pitchChanged: function () { this.pitch = this.get('pitch'); this.C.q('pitch', { pitch: this.pitch || 0 }); this.set('display', 0) }, centerCoordsChanged: function () { this.q('closeOverlays'); this.bBa ? this.xK(!0) : this.xK(!1) } }); g.qW = g.aa.extend({ ka: [g.ta, g.Se], r: function (a, b) { this.type = '2D'; this.af(b, !0); a && this.Tla(a) }, Tla: function (a) { this.map = a; this.Ue(['size', 'refresh', 'maxPitch'], a); this.centerChanged(); a.Ue(['zoom', 'center', 'centerCoords', 'rotation', 'pitch'], this) }, zW: function () { this.eM || this.ina(); return this.eM }, ina: function () {
        var a; if (this.get('center') instanceof g.U) { a = new g.se(-180, -85, 180, 85); var b = this.map.Ab(a.Wj()); a = this.map.Ab(a.Do()); this.eM = { Gc: b.x, ec: b.y, Fc: a.x, sc: a.y } } else {
            a = this.map.get('limitBounds',
                null, !0), this.eM = { Gc: a[0], ec: a[1], Fc: a[2], sc: a[3] }
        }
    }, WI: function () { var a = this.map; var b = this.get('zoom'); return { zoom: b, mh: this.get('center'), Ha: this.em(), jb: this.get('centerCoords'), rotation: parseInt(this.get('rotation')), Ff: a.get('crs'), S: Math.pow(2, 20 - b), ne: Math.round(b), zg: Math.pow(2, 20 - Math.round(this.get('zoom'))) } }, centerChanged: function () { this.set('centerCoords', this.map.Ab(this.get('center')).toFixed(3), !0) }, centerCoordsChanged: function () {
        var a = this.map; a.D = !0; var b = this.zW(); var c = this.get('centerCoords')
        var d = a.getSize(); a.D = !1; var e = this.get('zoom', null, !0); var a = this.get('center', null, !0); var d = d.height * Math.pow(2, 20 - e) / 2; a instanceof g.U ? c.x = (c.x + 268435456) % 268435456 : c.x < 0 ? c.x = 0 : c.x > b.Fc && (c.x = b.Fc); c.y < b.ec + d ? c.y = b.ec + d : c.y > b.sc - d && (c.y = b.sc - d); this.set('center', this.map.Vd(c), !0)
    } }); g.wF = g.qW.extend({ em: function () { var a = this.get('size'); var b = this.get('centerCoords'); var c = parseInt(this.get('rotation')) % 360; var d = this.get('zoom', null, !0); var e = Math.pow(2, 20 - d); var c = Math.PI * c / 180; var a = new g.H((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2); var e = new g.Of(b.Za(a.Kd(e)), b.add(a.Kd(e))); var c = this.map.get('targetLevel'); if (c > d - 1) { var f = Math.pow(2, 20 - c); e.d$ = new g.Of(b.Za(a.Kd(f)), b.add(a.Kd(f))) }e.T8 = c || d; e.zc = a; return e }, xpa: function (a) {
        var b =
this.get('size'); var c = this.get('centerCoords'); var d = parseInt(this.get('rotation')) % 360; var d = Math.PI * d / 180; var b = new g.H((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2); a = Math.pow(2, 20 - a); return new g.Of(c.Za(b.Kd(a)), c.add(b.Kd(a)))
    }, pd: function () { var a = this.em(); var b = a.Ud.x; var c = a.fc.y; var a = new g.H(a.fc.x, a.Ud.y); var b = new g.H(b, c); return new g.se(this.map.Vd(a), this.map.Vd(b)) }, zoomChanged: function () {}, ce: function (a, b) {
        this.get('size'); var c =
a.lb(); var d = this.get('centerCoords'); var e = c.Za(d); e.x < -g.a.Ea / 2 ? e.x += g.a.Ea : e.x > g.a.Ea / 2 && (e.x -= g.a.Ea); var c = this.get('size').uE().hd(2); var f = this.get('rotation') * Math.PI / 180; var d = e.x * Math.cos(f) - Math.sin(f) * e.y; var e = Math.sin(f) * e.x + Math.cos(f) * e.y; return c.add((new g.H(d, e)).Kd(Math.pow(2, (b || this.get('zoom')) - 20)))
    }, ug: function (a, b) {
        var c = this.get('size').uE().hd(2); var d = a.Za(c); var e = this.get('rotation') * Math.PI / 180; var c = d.x * Math.cos(e) + Math.sin(e) * d.y; var d = -Math.sin(e) * d.x + Math.cos(e) * d.y; var c = this.get('centerCoords').add((new g.H(c,
            d)).Kd(Math.pow(2, 20 - (b || this.get('zoom'))))); c.x = (c.x + 268435456) % 268435456; return c
    } }); g.ZL = g.qW.extend({ r: function (a, b) { this.fg = new g.Ic(); this.bd = new g.Ic([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]); arguments.callee.la.apply(this, arguments); this.scale = 1; this.type = '3D'; this.Sz = null; this.h7 = ''; this.R = ['', 0, 0, '', 0]; this.Sz = {} }, refreshChanged: function () { this.Qq() }, zoomChanged: function (a) { this.Qq(); this.R[4] = a }, centerChanged: function (a) { arguments.callee.la.apply(this, arguments); this.Qq() }, centerCoordsChanged: function (a) { arguments.callee.la.apply(this, arguments); this.Qq(); this.R[0] = a.toString() },
        rotationChanged: function (a) { this.Qq(); this.R[2] = a }, pitchChanged: function (a) { this.Ke.pitch = Math.min(this.get('maxPitch'), Math.max(a, 0)); this.Qq(); this.R[1] = a }, Qq: function () { if (!this.Pya() && (this.aV(), this.eoa(), this.map)) { var a = this; var b = function () { a.map.camera = a.o3(); a.map.q('camerachange', { map: a.map, camera: a.map.camera }) }; a.map.Ka ? b() : this.map.h('complete', b, this) } }, o3: function () { return { height: this.hn, fov: this.mpa, aspect: this.$B, near: this.bz, far: this.uI, position: this.oma, rotation: this.Ke.rotation, pitch: this.Ke.pitch } },
        eoa: function () { this.gga = g.a.Xf() }, Jo: function () { var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300; return g.a.Xf() - this.gga > a }, aV: function () {
            var a = this.get('centerCoords'); var b = this.get('pitch'); var c = this.get('rotation'); var d = (new g.Ic()).p8(-a.x + g.a.ac.x, -a.y + g.a.ac.y, 0); this.oma = { x: a.x - g.a.ac.x, y: a.y - g.a.ac.y }; a = (new g.Ic()).zz(180 - b, 1, 0, 0); this.Xua = (new g.Ic()).set(a); c = (new g.Ic()).zz(c, 0, 0, 1); this.Rs = (new g.Ic()).set(c); this.lpa = d.Rg(); this.bd = (new g.Ic()).p8(0, 0, -this.hn).multiply(a.multiply(c.multiply(d))).toFixed(8)
            this.bd.Ye = this.bd.Rg()
        }, Pya: function (a) {
            a = a || this.get('zoom'); var b = this.get('size'); var c = b.width; var b = b.height; if (!c || !b) return !0; this.$B = c /= b; b = b / 2 * Math.pow(2, 20 - a); a = g.a.mc((56 - a) * Math.PI / 180, 2); var d = g.a.mc(b / Math.tan(a / 2), 0); d < 2400 && (d = 2400, a = 2 * Math.atan(b / d)); this.mpa = a; this.hn = d; this.bz = this.hn / 10; this.uI = 50 * this.hn; this.Pna = (this.hn - this.bz) / (this.uI - this.bz); this.fg.m8(a, c, this.bz, this.uI); this.fg.Ye = this.fg.Rg(); a = this.fg; var c = new g.HV(); var b = c.ND; var e = this.fg.elements; var d = e[0]; var f = e[1]; var h = e[2]; var k = e[3]; var l =
e[4]; var m = e[5]; var n = e[6]; var p = e[7]; var q = e[8]; var r = e[9]; var s = e[10]; var u = e[11]; var v = e[12]; var w = e[13]; var t = e[14]; var e = e[15]; vc(b[0], k - d, p - l, u - q, e - v).normalize(); vc(b[1], k + d, p + l, u + q, e + v).normalize(); vc(b[2], k + f, p + m, u + r, e + w).normalize(); vc(b[3], k - f, p - m, u - r, e - w).normalize(); vc(b[4], k - h, p - n, u - s, e - t).normalize(); vc(b[5], k + h, p + n, u + s, e + t).normalize(); a.XQ = c
        }, WI: function () {
            var a = this.map; a.map.Ov && (this.Qq(), this.R[3] = a.get('size').toString()); var b = this.R.toString(); if (b !== this.h7) {
                var c = this.get('zoom'); var d = this.Sz; d.zoom = c; d.$B = this.$B; d.top =
this.top; d.Ha = this.em(); d.jb = this.get('centerCoords'); d.rotation = a.get('rotateEnable') && parseInt(this.get('rotation')) || 0; d.pitch = this.get('pitch') || 0; d.PHa = this.get('yaw'); d.Ff = a.get('crs'); d.S = Math.pow(2, 20 - c); d.ne = Math.round(c); d.E6 = Math.floor(c); d.zg = Math.pow(2, 20 - d.ne); d.jua = Math.pow(2, 20 - d.E6); d.fg = this.fg; d.bd = this.bd; this.h7 = d.key = b
            } this.Sz.mh = this.get('center'); this.Sz.Oq = g.a.Xf(); this.Sz.Jo = this.Jo(); return this.Sz
        }, em: function () {
            var a = this.get('size'); var b = a.width; var a = a.height; if (!b || !a) return null
            var c, d; d = 0; var e = new g.H(0, d); c = this.ug(e, !0); if (this.Ke.pitch > 55 || !c) for (;!c;)d += a / 40, e.y = d, c = this.ug(e, !0); this.top = d / a; e.x = b; d = this.ug(e, !0); var f = 0; var h = this.Ke.zoom; this.Ke.pitch >= 50 && h >= 18 && (f = 0); e.y = a + f; f = this.ug(e, !0); e.x = 0; h = this.ug(e, !0); c = [c.rl(), d.rl(), f.rl(), h.rl(), c.rl()]; c = new g.u$(c); e.x = b / 2; e.y = a + 256; c.IP = this.ug(e, !0); return c
        }, pd: function () { var a = this.em(); if (a) { for (var b = [], c = 0; c < a.path.length; c += 1) { var d = this.map.Vd(new g.H(a.path[c][0], a.path[c][1])); b.push(d) } return new g.gp(b) } },
        ce: function (a, b, c) { a.z = c || 0; a = this.c6([a]); a = a[0]; return new g.H(a.x, a.y) }, s3: function (a) { var b = this.get('size'); a = new g.Al([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]); a.multiply(this.bz); return this.fg.Ye.yh(a) }, ug: function (a, b, c) {
            var d; this.map ? (this.map.D = !0, d = this.map.getSize(!0), this.map.D = !1) : d = this.get('size'); var e = a.x / d.width * 2 - 1; d = 1 - a.y / d.height * 2; a = new g.Al([e, d, -1, 1]); a.multiply(this.bz); if (!this.fg.Ye) return null; a = this.fg.Ye.yh(a); e = new g.Al([e, d, 1, 1]); e.multiply(this.uI); d = this.fg.Ye.yh(e)
            var f = this.bd.Ye; var e = f.yh(a).elements; a = f.yh(d).elements; c = (e[2] - (-c || 0)) / (e[2] - a[2]); if (a[2] < 0 || c < 0 || b && c > 2.5 * this.Pna) return null; b = e[0] - c * (e[0] - a[0]); c = e[1] - c * (e[1] - a[1]); return isNaN(b) || isNaN(c) ? null : (new g.H(b, c)).add(g.a.ac)
        }, c6: function (a) {
            for (var b = this.get('centerCoords'), c = g.a.ac.x, d = g.a.ac.y, e = this.get('size'), f = g.a.Ea, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.Al([0, 0, 0, 1]), m = l.elements, n = new g.H(0, 0), p = g.Ic.multiply(this.fg, this.bd), q = 0, r = a.length; q < r; q++) {
                if (a[q]) {
                    a[q].concat ? (n.x = a[q][0], n.y = a[q][1],
                    n.z = -a[q][2] || 0) : (n.x = a[q].x, n.y = a[q].y, n.z = -a[q].z || 0); h < n.x ? n.x -= f : b > n.x && (n.x += f); m[0] = n.x - c; m[1] = n.y - d; m[2] = n.z; var s = p.yh(l); s.multiply(1 / s.elements[3]); k[q] = { x: (s.elements[0] + 1) / 2 * e.width, y: (-s.elements[1] + 1) / 2 * e.height, z: s.elements[2] }
                }
            } return k
        }, rza: function (a) { var b = this.get('size'); a = this.fg.yh(this.bd.yh((new g.Al()).copy(a))); a.multiply(1 / a.elements[3]); b = new g.H((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height); b.z = a.elements[2]; return b } }); g.a.ac = new g.H(215440491, 106744817); g.Lb.zb({ P1: function (a, b, c) { var d = this; d.RE ? (clearTimeout(d.RE), d.RE = null) : (d.oa('zoomstart', { zoom: a }), d.q('zoomstart')); d.RE = setTimeout(function () { d.RE = null; d.oa('zoomend', { zoom: a }); d.oa('zoomchange', { zoom: a }); d.q('zoomend') }, 150); a = g.a.mc(a, 2); d.Yz(a, !0, b, c) }, Yz: function (a, b, c, d) {
        var e = this.get('zoom'); if (e !== a) {
            var f = this.get('zooms'); this.C.view.type !== '3D' && (g.l.ba || g.l.Ae) && (b = !0); a = a || e; a = Math.min(Math.max(a, f[0]), f[1]); var h = a !== e; var k = !!c; this.Be && (this.Be.stop(), this.Be = null); c = c || this.get('centerCoords')
            var l = this.ce(c); c = function (c) { b || (c = g.a.mc(c, 2)); var d = this.ug(l); this.set('zoom', c); var e = this.ug(l); var d = e && e ? e.Za(d) : new g.H(0, 0); this.set('centerCoords', this.get('centerCoords').Za(d).toFixed(3)); d.x && d.y && this.oa('mapmove'); c === a && a << 0 === a && (this.set('targetLevel', null), h && !this.RE && (this.oa('zoomchange'), this.oa('zoomend')), this.q('zoomend'), k && this.q('moveend'), this.Mf = null) }; var m; this.Cd && this.Cd.Jv && (this.Cd.stop(), this.Cd.OR && (d = !0), this.Cd.YC && (m = !0), this.Cd = null, this.set('targetLevel',
                null)); this.Mf && this.Mf.Jv && (this.Mf.stop(), d = !0, this.Mf.YC && (m = !0), this.Mf = null, this.set('targetLevel', null)); h && !d && this.oa('zoomstart'); k && !m && this.oa('movestart'); this.q('zoomstart'); b ? c.call(this, a) : (this.Mf = new g.Dj(e, a, null, 0.04), this.Mf.OR = h, this.Mf.YC = k, this.Mf.transition = function (a, b, c) { return c >= g.w.BH ? b : (b - a) * (1 - Math.pow(1 - c / g.w.BH, 4)) + a }, this.Mf.rq = c, this.Mf.Dn(this, !0), this.set('targetLevel', a))
        }
    }, HK: function (a, b, c, d) {
        var e = null; a || (a = this.Cd ? this.Cd.xxa : this.get('targetLevel') || this.get('zoom'))
        var e = b ? this.Ab(b).toFixed(3) : this.Cd ? this.Cd.S8 : this.get('centerCoords'); var f = a !== this.get('zoom'); var h = !e.cb(this.get('centerCoords')); var k = b = !1; this.Mf && this.Mf.Jv && (this.Mf.stop(), b = !0, this.Mf.YC && (k = !0), this.Mf = null, this.set('targetLevel', null)); this.Cd && this.Cd.Jv && (this.Cd.stop(), this.Cd.OR && (b = !0), this.Cd.YC && (k = !0), this.Cd = null, this.set('targetLevel', null)); this.Be && (this.Be.stop(), this.Be = null); if (f || h) {
            if (!this.C.view.em().contains(e) || f && this.C.view.type !== '3D' && (g.l.ba || g.l.Ae))c = !0; if (c) {
                f && (b ||
(this.q('zoomstart'), this.oa('zoomstart')), this.set('zoom', a), this.oa('zoomchange'), this.oa('zoomend'), this.q('zoomend')), h && (k || d || (this.oa('movestart'), this.q('movestart')), this.set('centerCoords', e), this.oa('mapmove'), this.q('moveend', { f5: d })), this.set('targetLevel', null)
            } else {
                this.set('targetLevel', a); var l = a - this.get('zoom'); var m = e.Za(this.get('centerCoords')).toFixed(3); this.Cd = new g.Dj(1, 0, null, 0.001); this.Cd.OR = f; this.Cd.YC = h; this.Cd.S8 = e; this.Cd.xxa = a; this.Cd.transition = function (a, b, c) {
                    return Math.pow(1 -
Math.min(g.w.BH, c) / g.w.BH, 2)
                }; this.Cd.rq = function (b) { b < 0.02 ? (this.Cd && (this.Cd.stop(), this.Cd = null), f && (this.set('zoom', a), this.oa('zoomchange'), this.oa('zoomend'), f = !1, this.q('zoomend')), h && (this.set('centerCoords', e), this.q('mapmove'), this.q('moveend', { f5: d })), this.set('targetLevel', null)) : (f && this.set('zoom', a - l * b), h && (b = e.Za(m.Kd(b)).toFixed(3), this.set('centerCoords', b), this.oa('mapmove'))); this.set('display', 1) }; this.Cd.Dn(this); f && !b && (this.q('zoomstart'), this.oa('zoomstart')); !h || k || d || (this.q('movestart'),
                this.oa('movestart'))
            }
        }
    } }); g.o = {}
    g.o.Vb = g.aa.extend({ ka: [g.ta, g.Se], r: function (a, b) { this.T = a; this.hb = [3, 18]; this.BF = g.a.vb(this); a && this.Ue(['opacity', 'visible', 'zIndex', 'zooms'], a); a.Dg = b.C.view.type; this.e = b; this.W('display', b) }, Wg: function () {
        this.zi && this.TP(); if (g.Ba && g.Ba.Sq && g.Ba.Sq.length) { var a = g.a.indexOf(g.Ba.Sq, this); a !== -1 && (g.Ba.Sq = g.a.uo(g.Ba.Sq, a)) } if (a = this.Mb) { if (a.length) for (var b = 0; b < a.length; b += 1)a[b].parentNode && a[b].parentNode.removeChild(a[b]); else a.parentNode && a.parentNode.removeChild(a); this.Mb = null } this.T.Wg && this.T.Wg()
        this.T.pi = !1; this.T.o = null; this.tl(); var c; this.M && (this.M.Tj(), this.M = null, c = '-' + this.kc); this.ig && (this.ig.Tj(), this.ig = null, c = '-' + this.kc); if (c) for (var d in g.Ba.zj)g.a.KC(d, c) && delete g.Ba.zj[d]
    }, oa: function (a, b) { this.T.q(a, b) }, visibleChanged: function () { this.set('display', 0) }, zIndexChanged: function () { this.set('display', 0) }, gU: function (a) { g.j.Eq(a, this.opacity) }, opacityChanged: function () {
        var a = this.get('opacity'); this.opacity = Math.min(Math.max(0, a), 1); if (a = this.Mb) {
            if (a.length) {
                for (var b = 0; b < a.length; b +=
1) this.gU(a[b])
            } else this.gU(a)
        } this.e && this.e.C && this.e.C.view.type == '3D' && this.set('display', 0)
    }, Bo: function () { return this.e.ld && !this.T.get('rejectMapMask') }, KI: function () {
        var a = this.get('bounds'); if (a) {
            if (a instanceof g.se) { var b = a.Wj(); var a = a.Do(); var c = this.e.Ab(new g.U(180, 0)).x; var d = this.e.Ab(b); var e = this.e.Ab(a); var f = this.e.get('center'); b.Q > a.Q && (f.Q > 0 ? e.x += c : d.x -= c); this.I = [d.x, d.y, e.x, e.y] } else {
                a instanceof g.Of ? this.I = [a.fc.x, a.fc.y, a.Ud.x, a.Ud.y] : a instanceof g.xF && this.T.Dg === '3D' && (b = a.path[1], d =
this.e.Ab(a.path[0]), e = this.e.Ab(b), this.I = [d.x, d.y, e.x, e.y, a.c8, a.height])
            } return this.I
        } return null
    } }); var Mc = (function () { function a (a) { this.AF[g.a.vb(a)] = a; return this } function b (a) { this.AF[g.a.vb(a)] = null; return this } return function () { function c () { var a = c.AF; var b; var f = []; var h; for (h in a)a.hasOwnProperty(h) && f.push(a[h]); for (a = f.length - 1; a >= 0; a -= 1)h = f[a].apply(this, arguments), void 0 !== h && (b = h); return b }c.AF = {}; c.f1 = a; c.dGa = b; return c } }())
    g.mg = g.aa.extend({ ka: [g.ta], r: function (a, b) { this.up = a | 0; this.EF = !!b; this.count = 0; this.WJ = Mc(); this.clear(); this.iB = [] }, sh: function () { return !this.count }, vEa: function () { return this.count >= this.up }, MGa: function (a) { this.up !== a && (this.up = a | 0) && this.Q0(this.up) }, Id: function (a) { return !!this.e[a] }, get: function (a, b) { var c = this.XX(a); return c ? c.value : b }, set: function (a, b) { var c = this.XX(a); c ? c.value = b : (c = new g.mg.cr(a, b), this.e[a] = c, this.aB(c), this.count += 1, this.count > this.up && this.Q0(this.up)) }, gw: function (a) { this.remove(a) },
        remove: function (a) { return this.e.hasOwnProperty(a) && this.zB(this.e[a]) ? !0 : !1 }, forEach: function (a, b) { for (var c = this.Zc.next; c !== this.Zc; c = c.next)a.call(b, c.value, c.key, this) }, bK: function (a, b) { return this.e.hasOwnProperty(a) ? this.e[a].value : b }, GFa: function () { return this.Zc.next.value }, HFa: function () { return this.Zc.Ga.value }, shift: function () { return this.K_(this.Zc.next) }, Z1: function () { this.iB.length = 0 }, M5: function (a) { this.iB.push(a) }, push: function (a) {
            a = new g.mg.cr('', a); this.count === 0 ? (this.Zc.Ga = null,
            a.Ga = this.Zc, this.Zc.next = a) : (this.PB.next = a, a.Ga = this.PB); this.count += 1; this.PB = a
        }, Fya: function (a) { a = new g.mg.cr('', a); this.count === 0 ? (this.Zc.Ga = null, a.Ga = this.Zc, this.PB = this.Zc.next = a) : (this.Zc.next.Ga = a, a.next = this.Zc.next, a.Ga = this.Zc, this.Zc.next = a); this.count += 1 }, Ata: function () { if (this.count) { this.count -= 1; var a = this.Zc.next; a.next ? (a.next.Ga = this.Zc, this.Zc.next = a.next) : (this.Zc.next = null, this.PB = this.Zc.Ga = null); a.next = null; a.Ga = null; return a.value } return null }, pop: function () { return this.K_(this.Zc.Ga) },
        XX: function (a) { if (this.e.hasOwnProperty(a)) return a = this.e[a], this.EF && (a.remove(), this.aB(a)), a }, aB: function (a) { this.EF ? (a.next = this.Zc.next, a.Ga = this.Zc, this.Zc.next = a, a.next.Ga = a) : (a.Ga = this.Zc.Ga, a.next = this.Zc, this.Zc.Ga = a, a.Ga.next = a) }, Q0: function (a) {
            if (!(this.count <= a || this.count < 2 * this.iB.length)) {
                for (var b = this.EF ? this.Zc.Ga : this.Zc.next, c = {}, d = 0, e = this.iB.length; d < e; d++)c[this.iB[d]] = !0; for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.EF ? b.Ga : b.next, b.key && !c[b.key] && this.zB(b) && this.WJ(b.value),
                b = d, b !== this.Zc && b !== this.PB););
            }
        }, zB: function (a) { if (this.cC && !1 == this.cC(a.value)) return !1; a.remove(); delete this.e[a.key]; this.count -= 1; return !0 }, K_: function (a) { this.Zc !== a && (this.cC && console.log('Warnning!!!'), this.zB(a)); return a.value }, clear: function () { this.e = {}; this.Zc = new g.mg.cr('', null); this.Zc.Ga = this.Zc.next = this.Zc; this.count = 0 } }); g.mg.cr = function (a, b) { this.key = a; this.value = b }; g.mg.cr.prototype.Ga = null; g.mg.cr.prototype.next = null
    g.mg.cr.prototype.remove = function () { this.Ga.next = this.next; this.next.Ga = this.Ga; this.next = this.Ga = null }; function Nc (a, b, c) { this.url = a; this.Kc = b; this.SQ = c; this.jn = this.yK = !1 } function Oc (a, b, c) { var d = Pc; return function () { return d.call(this, a, b, c) } } function Pc (a, b, c) { a.YCa = +new Date(); a.loaded = b; clearTimeout(a.Mxa); var d = a.Psa; d.Bn.remove(a.url) && d.hga(); d = a.Vra ? a.fa : a.xa; a.fa = null; (c || b || a.SQ) && a.Kc(b ? d : null, a); a.n5 ? (a.n5.si(), a.n5 = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.xa = null) }
    g.fF = g.aa.extend({ ZAa: 'assets/image/blank.gif', r: function (a, b, c) { this.timeout = b || 15E3; this.xq = new g.mg(1024); this.Bn = new g.mg(1024); this.j2 = a; this.DQ = c }, xM: function (a) { a && this.Bn.count >= this.j2 && (a = this.Bn.Zc.Ga.value, a.jn && (this.Bn.remove(a.url), this.HW(a))); for (;this.xq.count && !(this.Bn.count >= this.j2);) this.rda(this.xq.shift()) }, hga: function () { if (!this.pX) { this.pX = !0; var a = this; setTimeout(function () { a.pX = !1; a.xM() }, 0) } }, rda: function (a) {
        var b = document.createElement('img'); a.opa && (b.crossOrigin =
'anonymous'); b.src = a.url; a.xa = b; a.Psa = this; a.startTime = +new Date(); a.yK = !0; b.complete ? Pc(a, !0) : (this.Bn.set(a.url, a), b.onload = Oc(a, !0), b.onerror = Oc(a, !1, !0), b.onabort = Oc(a, !1), a.Mxa = setTimeout(Oc(a, !1, !0), this.timeout))
    }, HW: function (a) { a.yK && (Pc(a, !1), a.jn = !0, a.SBa = !0) }, TEa: function (a, b, c) { return this.Wy(a.url, b, c, !0, a.sa.z + '_' + a.sa.x + '_' + a.sa.y) }, Wy: function (a, b, c, d, e) {
        var f = this.Bn.get(a); if (f && f.jn)f.jn = !1, f.Kc = b, f.SQ = c; else {
            f = new Nc(a, b, c); f.Vra = d; f.key = e; if (this.xq.get(g.a.vb(f))) return; this.xq.set(g.a.vb(f),
                f); this.xM(!0)
        } return f
    }, Esa: function (a, b, c) { var d = this.Bn.get(a); if (d && d.jn)d.jn = !1, d.Kc = b, d.SQ = c; else { d = new Nc(a, b, c); d.opa = !0; if (this.xq.get(g.a.vb(d))) return; this.xq.set(g.a.vb(d), d); this.xM(!0) } return d }, M1: function (a) { a.jn || (a.jn = !0, this.xq.remove(g.a.vb(a))) }, clear: function (a) { this.xq.forEach(function (a) { a.jn = !0 }); this.xq.clear(); if (a) for (;this.Bn.length > 0;)a = this.Bn.pop(), this.HW(a); else this.Bn.forEach(function (a) { a.jn = !0 }) } }); function Qc (a, b, c) { this.z = a; this.x = b; this.y = c }Qc.prototype.lb = function () { return new Qc(this.z, this.x, this.y) }; Qc.prototype.toString = function () { return this.z + '/' + this.x + '/' + this.y }; g.ob = function (a) { var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; this.sa = a; this.key = a.toString(); this.Ce = b }; g.Xq = Qc; g.o.ob = g.o.Vb.extend({ r: function (a, b, c, d, e) {
        arguments.callee.la.apply(this, arguments); this.W('tileSize', a); this.W('tiles', a); this.Ue(['zooms', 'type', 'detectRetina', 'errorUrl'], a); a.qG && (this.W('lang', b, !0), this.W('mapStyle', b, !0), this.W('style', b, !0), this.W('features', b, !0)); var f = a.get('type') === 'overlayer' || !1 === a.get('blend'); this.Dk = !f && !g.l.ba; if (g.l.Ae || g.l.IHa) this.Dk = !1; var h = b.get('size'); var h = h.width * h.height / 65536; this.ja = g.l.ba && g.l.ja && this.get('detectRetina'); g.l.Nc && g.l.ba && h > 9 && (this.Dk =
!1); this.Si = !f && !a.kk; this.Ti = !f && !a.kk; this.SK = c; this.W('reload', a); a.Rra ? this.W('createTile', a) : this.W('tileFun', a); this.$e = d; this.XR = e
    }, langChanged: function () { this.set('reload'); this.T.Ns() }, styleChanged: function () { this.e.yd || (this.set('reload'), this.T.Ns()) }, featuresChanged: function () { this.set('reload'); this.T.Ns() }, reloadChanged: function () { this.set('display', 0) }, tileFunChanged: function () {
        var a = this.SK || this.get('tileFun'); this.po = function (b, c, d) {
            var e = a(b.sa.x, b.sa.y, b.sa.z); if (!b.us || b.us.jn) {
                b.loaded =
!1, b.us = (this.e.C.view.type === '3D' ? g.lm.Esa : g.lm.Wy).call(g.lm, e, function (a) { b.us = null; a ? c(a) : d() }, !1)
            }
        }
    }, createTileChanged: function () { this.T.D = !0; var a = this.T.getCreateTile(); this.T.D = !1; this.po = function (b, c, d) { a.call(this.f.T, b.sa.x, b.sa.y, b.sa.z, c, d, b) }; this.set('reload') }, he: function () {
        var a = this.T.get('zooms', null, !0); this.T.Qra && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]); return { Ad: this.T.get('tileSize'), visible: this.T.get('visible'), I: this.KI(), hb: a, JH: this.Dk, Si: this.Si, Ti: this.Ti, opacity: this.T.get('opacity'),
            po: this.T.get('createTile'), Eo: this.SK || this.T.get('tileFun'), Nc: this.T.mq ? !1 : this.T.get('detectRetina') && g.l.ja && g.l.ba, ld: this.Bo() }
    }, Ul: function (a) { if (g.M.Yd.Ni) return new g.M.Yd.Ni(this, a) } }); g.lm = new g.fF(6, null); g.o.cd = g.o.Vb.extend({ r: function (a, b) { this.Va = Math.min(2, window.devicePixelRatio || 1); this.Nc = g.l.ja && !a.tj; this.map = b; this.Mq = 0; this.im = !1; this.gg = this.uf = 0; this.Vg = []; arguments.callee.la.apply(this, arguments); this.sv = []; this.Zl = new g.o.C$(); a && (this.W('style', a), this.W('cursor', a, !0), this.jxa = a.get('stable') || !1, this.W('dataSources', a), this.W('bubble', a)); this.W('display', b); this.Mba() }, he: function () {
        return { visible: this.get('visible'), hb: this.get('zooms'), opacity: this.get('opacity'), zIndex: this.get('zIndex'),
            Ox: this.T.get('alwaysRender') || !1, ld: this.Bo() }
    }, dataSourcesChanged: function () { var a = this.get('dataSources'); a && a.length ? typeof a === 'string' ? (new g.fb.wb(a)).h('complete', function (a) { this.M6(a.data); this.Wr = a.data; this.im = !0; this.set('display'); this.Ka = !0; this.T.q('complete') }, this) : a.length && (this.M6(a), this.Wr = a, this.im = !0, this.set('display'), this.Ka = !0, this.T.q('complete')) : this.clear() }, getDatas: function () { return this.Wr }, Kya: function () { if (this.T.tj) { var a = this.xm; this.uf = a.uf; this.gg = a.gg } },
    oa: function (a, b) { var c = { type: a, data: a === 'mouseout' ? this.ega || null : b.au.eb, target: this.T }; this.ega = a === 'mouseout' ? null : b.au.eb; this.T.q(a, c) }, rc: function (a) { this.oa(a.type, a) }, Mba: function () { this.h('click', this.rc); this.h('dblclick', this.rc); this.h('mousedown', this.rc); this.h('mouseup', this.rc); this.h('mouseover', this.rc); this.h('mouseout', this.rc); this.h('touchstart', this.rc); this.h('touchend', this.rc) }, PBa: function () {
        this.G('click', this.rc); this.G('dblclick', this.rc); this.G('mousedown', this.rc)
        this.G('mouseup', this.rc); this.G('mouseover', this.rc); this.G('mouseout', this.rc); this.G('touchstart', this.rc); this.G('touchend', this.rc)
    }, styleChanged: function () { this.xm = this.get('style'); this.Kya(); this.set('display', 0) }, M6: function (a) { if (a) { this.clear(); for (var b = 0; b < a.length; b += 1) { var c = a[b].lnglat; a[b].lnglat = g.a.Ia(c); c = this.map.Ab(c); c = new g.ai({ name: 'point-' + g.a.vb(this), ia: new g.Ca.Eg([c.x, c.y], !0) }); c.tr = this; c.eb = a[b]; this.zH(c) } } }, jqa: function (a) {
        if (a === 'geojson') return new g.I$({ map: this.map })
        if (a === 'topjson') return new g.uAa({ map: this.map }); if (a === 'subway') return new g.pAa({ map: this.map })
    }, Pua: function (a) {
        if (a) {
            var b = []; var b = []; var c = {}; if (a.rules) { for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) { for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1)h[k].fill && (f[k] = new g.style.Fg.FV(h[k].fill)), h[k].stroke && (f[k] = new g.style.Fg.jW(h[k].stroke)); h = f; b[d].QK = h; b[d] = new g.style.zaa(b[d]) }c.rules = b } if (a.symbolizers) {
                b = a.symbolizers; a = 0; for (d = b.length; a < d; a += 1) {
                    b[a].fill && (b[a] = new g.style.Fg.FV(b[a].fill)),
                    b[a].stroke && (b[a] = new g.style.Fg.jW(b[a].stroke))
                }c.QK = b
            }a = new g.UL(c)
        } else a = new g.UL({}); this.set('style', a); return a
    }, MBa: function (a, b) { var c = new g.fb.wb(a); c.h('complete', function (c) { c = this.fa[a] = this.jqa(b).wT(c); this.Lx(c); this.oa('complete') }, this); c.h('error', this.lc, this) }, rva: function (a) { a.target.get('unit') === 'px' ? (this.uf = Math.max(a.nl, this.uf), this.gg = Math.max(a.nl, this.gg)) : a.nl > this.As && (this.As = a.nl, this.Zy = this.As / this.map.C.ij.Xp(20)) }, zH: function (a) {
        this.Zl.add(a); if (!this.DC &&
!this.T.tj) { if (a.name.indexOf('circle') === 0 || a.name.indexOf('ellipse') === 0) { a.h('rad', this.rva, this); var b = a.get('radius'); b.length && (b = Math.max.apply(null, b)); a.get('unit') === 'px' ? (this.uf = Math.max(b, this.uf), this.gg = Math.max(b, this.gg)) : this.As ? b > this.As && (this.As = b, this.Zy = this.As / this.map.C.ij.Xp(20)) : (this.As = b, this.Zy = this.As / this.map.C.ij.Xp(20)) }b = a.get('strokeWeight') || 0; if (!this.$y || b > this.$y) this.$y = b } this.jxa || a.W('feature', this, !0)
    }, Lx: function (a) {
        this.im = !0; for (var b = 0, c = a.length; b <
c; b += 1) this.zH(a[b])
    }, clear: function () { this.im = !0; this.Wr = []; this.Zl.clear(); this.set('display', 0) }, qn: function (a) { var b, c; b = this.Zl.qn([a[0] + g.a.Ea, a[1], a[2] + g.a.Ea, a[3]]); c = this.Zl.qn([a[0] - g.a.Ea, a[1], a[2] - g.a.Ea, a[3]]); a = this.Zl.qn(a); return g.extend(a, g.extend(b, c)) }, MDa: function (a) { var b; var c = this.get('style'); var d = a.pl; c instanceof g.UL || (c = this.Pua(c)); if (d && d.length > 0)b = c.o2(d, a); else { if (c.W7.length || c.pl.length)b = c.Cna(a); b || (b = a.Npa()) } return b }, DR: function (a) {
        function b (a, b) { return a.$l - b.$l }
        var c = []; var d; var e; var f; var h; var k; var l = {}; for (d in a) if (a.hasOwnProperty(d)) { f = a[d]; h = f.get('zIndex'); for (e in l) if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break; typeof l[h] === 'undefined' && (c.push([[], [], h]), l[h] = c.length - 1); h = c[l[h]]; h[0].push(f) }c.sort(this.fxa); a = 0; for (d = c.length; a < d; a += 1)c[a][0].sort(b); return c
    }, featureChanged: function (a) { this.im = !0; var b = a.target; var c = b.dc(); this.Zl.Spa([g.a.vb(b)]).length !== 0 && (this.Zl.remove(b, a.vv), c && !a.Vna && this.Zl.add(b)) }, y7: function (a) {
        this.im = !0; for (var b, c = 0, d = a.length; c <
d; c += 1)b = a[c], b.ia.vv = null, b.ds(!0), b.sl('feature')
    }, SGa: function (a, b) { return a[1].zIndex === b[1].zIndex ? g.a.vb(a[1]) - g.a.vb(b[1]) : a[1].zIndex - b[1].zIndex }, fxa: function (a, b) { return a[2] - b[2] }, EGa: function (a) { return a.SDa() === g.o.zAa.iAa }, Ul: function (a) { return this.DC ? new g.M.Ee.Bl(this, a) : this.map.get('overlayRender') === 'c' && g.M.canvas.Bl ? new g.M.canvas.Bl(this, a) : g.M.Yd.Bl && this.map.get('overlayRender') === 'd' ? new g.M.Yd.Bl(this, a) : null } })
    g.o.cd.zb({ Vl: function (a) { return this.DC ? new g.Da.Ee.Bl(this, a) : this.T.tj ? new g.Da.iaa(this, a) : new g.Da.Bl(this, a) } }); g.o.C$ = g.aa.extend({ r: function () { this.clear() }, clear: function () { this.$p = []; this.sT = new g.Ck() }, add: function (a) { var b = g.a.vb(a); var c = a.dc(); this.$p[b] || (this.count += 1, this.$p[b] = a, c && !g.I.cb(c.pd(), [Infinity, Infinity, -Infinity, -Infinity]) && this.sT.qs(c.pd(), a)) }, HDa: function () { return this.$p }, qn: function (a) { return this.sT.swa(a) }, Spa: function (a) { var b = a.length; var c = []; var d; for (d = 0; d < b; d += 1) this.$p[a[d]] && c.push(this.$p[a[d]]); return c }, remove: function (a, b) {
        var c = g.a.vb(a).toString(); var d = a.dc(); this.$p[c] && (this.$p[c] =
null, d && (c = typeof b !== 'undefined' ? b : d.pd(), this.sT.remove(c, a)))
    } }); g.Ck = g.aa.extend({ r: function (a) { this.S5 = typeof a !== 'undefined' ? a : 6; this.HJ = Math.floor(this.S5 / 2); this.CK = { I: [Infinity, Infinity, -Infinity, -Infinity], Hb: [] }; this.count = 0 }, Gma: function (a, b) {
        var c = -1; var d = []; var e; d.push(b); var f = b.Hb; do {
            c !== -1 && (d.push(f[c]), f = f[c].Hb, c = -1); for (var h = f.length - 1; h >= 0; h -= 1) {
                var k = f[h]; if (typeof k.Oe !== 'undefined') { c = -1; break } var l = g.Ck.Bz(k.I[2] - k.I[0], k.I[3] - k.I[1], k.Hb.length + 1); var k = g.Ck.Bz((k.I[2] > a.I[2] ? k.I[2] : a.I[2]) - (k.I[0] < a.I[0] ? k.I[0] : a.I[0]), (k.I[3] > a.I[3] ? k.I[3] : a.I[3]) -
(k.I[1] < a.I[1] ? k.I[1] : a.I[1]), k.Hb.length + 2); if (c < 0 || Math.abs(k - l) < e)e = Math.abs(k - l), c = h
            }
        } while (c !== -1);return d
    }, qs: function (a, b, c) { a = { I: a, Oe: b }; typeof c !== 'undefined' && (a.type = c); this.Q4(a, this.CK); this.count += 1 }, Q4: function (a, b) {
        var c; if (b.Hb.length === 0)b.I = g.I.lb(a.I), b.Hb.push(a); else {
            var d = this.Gma(a, b); var e = a; do {
                if (c && typeof c.Hb !== 'undefined' && c.Hb.length === 0) { var f = c; c = d.pop(); for (var h = 0, k = c.Hb.length; h < k; h += 1) if (c.Hb[h] === f || c.Hb[h].Hb.length === 0) { c.Hb.splice(h, 1); break } } else c = d.pop(); f =
e instanceof Array; if (typeof e.Oe !== 'undefined' || typeof e.Hb !== 'undefined' || f) { if (f) { f = 0; for (h = e.length; f < h; f += 1)g.I.extend(c.I, e[f].I); c.Hb = c.Hb.concat(e) } else g.I.extend(c.I, e.I), c.Hb.push(e); if (c.Hb.length <= this.S5) if (d.length > 0)e = { I: g.I.lb(c.I) }; else break; else e = f = this.tsa(c.Hb), d.length < 1 && (c.Hb.push(f[0]), d.push(c), e = f[1]) } else g.I.extend(c.I, e.I), e = { I: g.I.lb(c.I) }
            } while (d.length > 0)
        }
    }, tsa: function (a) { for (var b = this.Uua(a); a.length > 0;) this.Vua(a, b[0], b[1]); return b }, Uua: function (a) {
        for (var b =
a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; f >= 0; f -= 1) { var h = a[f]; h.I[0] > a[c].I[0] ? c = f : h.I[2] < a[b].I[1] && (b = f); h.I[1] > a[e].I[1] ? e = f : h.I[3] < a[d].I[3] && (d = f) }Math.abs(a[b].I[2] - a[c].I[0]) > Math.abs(a[d].I[3] - a[e].I[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]); return [{ I: g.I.lb(b.I), Hb: [b] }, { I: g.I.lb(c.I), Hb: [c] }]
    }, Vua: function (a, b, c) {
        for (var d = g.Ck.Bz(b.I[2] - b.I[0], b.I[3] - b.I[1],
                b.Hb.length + 1), e = g.Ck.Bz(c.I[2] - c.I[0], c.I[3] - c.I[1], c.Hb.length + 1), f, h, k, l = a.length - 1; l >= 0; l -= 1) {
            var m = a[l]; var n = [b.I[0] < m.I[0] ? b.I[0] : m.I[0], b.I[2] > m.I[2] ? b.I[2] : m.I[2], b.I[1] < m.I[1] ? b.I[1] : m.I[1], b.I[3] > m.I[3] ? b.I[3] : m.I[3]]; var n = Math.abs(g.Ck.Bz(n[1] - n[0], n[3] - n[2], b.Hb.length + 2) - d); var m = [c.I[0] < m.I[0] ? c.I[0] : m.I[0], c.I[2] > m.I[2] ? c.I[2] : m.I[2], c.I[1] < m.I[1] ? c.I[1] : m.I[1], c.I[3] > m.I[3] ? c.I[3] : m.I[3]]; var m = Math.abs(g.Ck.Bz(m[1] - m[0], m[3] - m[2], c.Hb.length + 2) - e); var p = Math.abs(m - n); if (!h || !f || p < f) {
                h = l, f = p, k = m < n ? c
                    : b
            }
        }d = a.splice(h, 1)[0]; b.Hb.length + a.length + 1 <= this.HJ ? (b.Hb.push(d), g.I.extend(b.I, d.I)) : c.Hb.length + a.length + 1 <= this.HJ ? (c.Hb.push(d), g.I.extend(c.I, d.I)) : (k.Hb.push(d), g.I.extend(k.I, d.I))
    }, remove: function (a, b) { var c = []; c[0] = { I: a }; (c[1] = b) || (c[1] = !1); c[2] = this.CK; this.count -= 1; if (!1 === c[1]) { var d = 0; var e = []; do d = e.length, e = e.concat(this.C7.apply(this, c)); while (d !== e.length);return e } return this.C7.apply(this, c) }, C7: function (a, b, c) {
        var d = []; var e = []; var f = []; if (!a || !g.I.Qg(a.I, c.I)) return f; a = g.I.lb(a.I); var h
        e.push(c.Hb.length); d.push(c); do {
            c = d.pop(); var k = e.pop() - 1; if (typeof b !== 'undefined') for (;k >= 0;) { var l = c.Hb[k]; if (g.I.Qg(a, l.I)) if (b && typeof l.Oe !== 'undefined' && l.Oe === b || !b && (typeof l.Oe !== 'undefined' || g.I.k2(a, l.I))) { typeof l.Hb !== 'undefined' ? (f = this.uz(l, !0, [], l), c.Hb.splice(k, 1)) : f = c.Hb.splice(k, 1); g.Ck.CT(c); b = void 0; c.Hb.length < this.HJ && (h = this.uz(c, !0, [], c)); break } else typeof l.Hb !== 'undefined' && (e.push(k), d.push(c), c = l, k = l.Hb.length); k -= 1 } else if (typeof h !== 'undefined') {
                c.Hb.splice(k + 1, 1)
                c.Hb.length > 0 && g.Ck.CT(c); k = 0; for (l = h.length; k < l; k += 1) this.Q4(h[k], c); h.length = 0; d.length === 0 && c.Hb.length <= 1 ? (h = this.uz(c, !0, h, c), c.Hb.length = 0, d.push(c), e.push(1)) : d.length > 0 && c.Hb.length < this.HJ ? (h = this.uz(c, !0, h, c), c.Hb.length = 0) : h = void 0
            } else g.Ck.CT(c)
        } while (d.length > 0);return f
    }, search: function (a, b) { return this.uz({ I: a }, !1, [], this.CK, b) }, swa: function (a, b) { return this.uz({ I: a }, !1, [], this.CK, b, !0) }, uz: function (a, b, c, d, e, f) {
        var h = {}; var k = []; if (!g.I.Qg(a.I, d.I)) return f ? h : c; k.push(d.Hb); do {
            d = k.pop()
            for (var l = d.length - 1; l >= 0; l -= 1) { var m = d[l]; if (g.I.Qg(a.I, m.I)) if (typeof m.Hb !== 'undefined')k.push(m.Hb); else if (typeof m.Oe !== 'undefined') if (b)c.push(m); else if (typeof e === 'undefined' || m.type === e)m = m.Oe, typeof f !== 'undefined' ? h[g.a.vb(m)] = m : c.push(m) }
        } while (k.length > 0);return typeof f !== 'undefined' ? h : c
    } }); g.Ck.CT = function (a) { var b = a.Hb.length; var c = a.I; if (b === 0)g.I.empty(c); else { var d = a.Hb[0].I; c[0] = d[0]; c[2] = d[2]; c[1] = d[1]; c[3] = d[3]; for (d = 1; d < b; d += 1)g.I.extend(c, a.Hb[d].I) } }
    g.Ck.Bz = function (a, b, c) { var d = (a + b) / 2; a *= b; return a * c / (a / (d * d)) }; g.A = g.A || {}
    g.A.Ch = g.aa.extend({ ka: [g.ta, g.Se], zua: ['position', 'altitude', 'visible', 'clickable', 'bubble'], r: function (a, b) { this.map = b; this.Ue(this.zua, a); this.W('zIndex', a); this.W('draggable', a); g.l.Jf && this.Tba(); g.l.ba || this.pM(); this.Ob = a; this.Ob.A = this }, draggableChanged: function () { this.get('draggable') ? this.oM() : this.hO() }, oa: function (a, b) { var c; c = b ? { type: a, pixel: b.ub, target: this.Ob, lnglat: b.ag } : { type: a }; this.Ob && this.Ob.q(a, c) }, rc: function (a) {
        (a.type !== 'click' && a.type !== 'rightclick' && a.type !== 'dblclick' &&
a.type !== 'longclick' || this.get('clickable')) && this.oa(a.type, a)
    }, nM: function () { this.h('click', this.rc); this.h('rightclick', this.rc); this.h('longclick', this.rc); this.h('longpress', this.rc); this.h('dblclick', this.rc) }, S0: function () { this.G('click', this.rc); this.G('rightclick', this.rc); this.G('longclick', this.rc); this.G('longpress', this.rc); this.G('dblclick', this.rc) }, pM: function () {
        this.get('clickable') && this.nM(); this.h('mousemove', this.rc); this.h('mouseout', this.rc); this.h('mouseover', this.rc); this.h('mousedown',
            this.rc); this.h('mouseup', this.rc)
    }, QBa: function () { this.S0(); this.G('mousemove', this.rc); this.G('mouseout', this.rc); this.G('mouseover', this.rc); this.G('mousedown', this.rc); this.G('mouseup', this.rc) }, clickableChanged: function () { this.get('clickable') ? this.nM() : this.S0() }, Tba: function () { this.get('clickable') && this.nM(); this.h('touchstart', this.rc, this); this.h('touchmove', this.rc, this); this.h('touchend', this.rc, this) }, oM: function () {
        this.h('dragstart', this.Qt); this.h('dragging', this.Ot); this.h('dragend',
            this.Pt)
    }, Qt: function (a) { this.map.ES(a); this.$f = a.ub; this.r5 = a.Pa; this.q5 = a.ag; this.oa('dragstart', a) }, Ot: function (a) {
        var b = this.map.C.view.type; if (b == '2D') { var c = a.ub.Za(this.$f); var b = c.x; var c = c.y; this.$f = a.ub; var d = this.map.get('rotation') * Math.PI / 180; var e = b * Math.cos(d) + Math.sin(d) * c; var b = -Math.sin(d) * b + Math.cos(d) * c; this.Po(new g.H(e, b)); this.oa('dragging', a) } else {
            b == '3D' && a.Pa && (c = a.ub.Za(this.$f), b = c.x, c = c.y, e = a.Pa.Za(this.r5), a.ag.Za(this.q5), this.$f = a.ub, typeof this.az === 'function' && this.az(b, c, e), this.r5 =
a.Pa, this.q5 = a.ag, this.oa('dragging', a))
        }
    }, Pt: function (a) { this.map.ew(); this.map.C.view.type == '3D' && this.Ob.reset && this.Ob.reset(); this.oa('dragend', a) }, hO: function () { this.G('dragstart', this.Qt); this.G('dragging', this.Ot); this.G('dragend', this.Pt) }, hN: function (a) { var b; var c; var d = []; if (a) for (b = 0, c = a.length; b < c; b += 1)d.push(this.iN(a[b])); return d }, iN: function (a) { a = this.map.Ab(a); return [a.x, a.y] }, eg: function (a) {
        var b = this.L.kb || this.map.get('centerCoords'); var c = Math.pow(2, 20 - this.map.get('zoom')); return [(a[0] -
b.x) / c, (a[1] - b.y) / c]
    }, VA: function (a, b) { var c = this.map.C; var d = []; var e = !1; a[0] instanceof Array && typeof a[0][0] !== 'number' && (e = !0); if (e) for (var e = 0, f = a.length; e < f; e++) { for (var h = [], k = 0, l = a[e].length; k < l; k++) { var m = c.Ab(a[e][k]); m.x += b[0]; m.y += b[1]; h.push(c.Vd(m)) }d.push(h) } else for (e = 0, f = a.length; e < f; e++)h = c.Ab(a[e]), h.x += b[0], h.y += b[1], d.push(c.Vd(h)); return d } }); g.A.sb = g.A.Ch.extend({ KD: 'content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect anchor'.split(' '), ula: { AMAP_ANIMATION_NONE: !1, AMAP_ANIMATION_DROP: g.Dj.Easing.Bounce, AMAP_ANIMATION_BOUNCE: g.Dj.Easing.Cubic }, r: function (a, b) {
        arguments.callee.la.apply(this, arguments); this.Ue(this.KD, a); this.W('move', a); this.kma(); this.nu(); this.set('AnimationOffset', new g.H(0, 0), !0); this.W('raiseOnDrag', a); this.W('animation',
            a)
    }, zN: function (a, b, c) { var d = this.get('animation'); if (d && d !== 'AMAP_ANIMATION_NONE') { var e = this; this.xn = new g.Dj(); this.xn.transition = function (c, h, k) { if (d === 'AMAP_ANIMATION_NONE') return 0; if (a && k >= 600) return e.xn.stop(), 0; c = Math.floor(k / 600) % 2 === 0 ? 'Out' : 'In'; b === 'out' ? c = 'Out' : b === 'in' && (c = 'In'); return e.ula[d][c](k % 600 / 600) }; c = c || 40; this.xn.rq = function (a) { e.set('AnimationOffset', e.kO.add(new g.H(0, -1 * c * a))) }; this.kO = new g.H(0, 0); this.xn.Dn() } }, AnimationOffsetChanged: function () { this.positionChanged() },
    U_: function () { this.xn && (this.xn.stop(), this.set('AnimationOffset', this.kO)); this.set('AnimationOffset', new g.H(0, -40)); if (this.Uq) this.Uq.set('position', this.get('position')); else { var a = new A.A.sb({ zIndex: this.get('zIndex') - 1, icon: new A.A.ci({ image: g.w.Gb + '/theme/v1.3/dragCross.png', size: new g.xd(14, 11), innerOverlay: !0 }), offset: new g.H(-4, -5), position: this.get('position'), innerOverlay: !0 }); a.za = !0; this.Uq = a } this.Uq.D = !0; this.Uq.setMap(this.map.C); this.Uq.D = !1 }, LX: function () {
        this.set('animation', 'AMAP_ANIMATION_DROP',
            !0); this.zN(!0, 'in'); this.Uq.D = !0; this.Uq.D = !1
    }, animationChanged: function () { this.xn && (this.xn.stop(), this.set('AnimationOffset', this.kO), this.xn = null); var a = this.get('animation'); a && a !== 'AMAP_ANIMATION_NONE' && (a === 'AMAP_ANIMATION_DROP' ? this.zN(!0, 'in', 100) : this.zN()) }, eh: function () { this.Uq && this.Uq.set('position', this.get('position')) }, raiseOnDragChanged: function () {
        this.get('raiseOnDrag') ? (this.h('dragstart', this.U_, this), this.h('dragging', this.eh, this), this.h('dragend', this.LX, this)) : (this.G('dragstart',
            this.U_, this), this.G('dragging', this.eh, this), this.G('dragend', this.LX, this))
    }, Po: function (a) { var b = this.get('position'); a = this.map.Ab(b).add(a.Kd(Math.pow(2, 20 - this.map.get('zoom')))); b instanceof g.U ? this.set('position', this.map.Vd(a)) : this.set('position', a) }, az: function (a, b) { var c = this.get('position'); var d = this.get('altitude'); var c = this.map.xs(c, d); var d = this.map.Kp(new g.H(c.x + a, c.y + b), null, d); this.set('position', d) }, kma: function () {
        var a = this.get('content'); var b = this.get('shadow'); var c = this.get('offset'); var d = this.get('label')
        var e; var f = this; e = a ? this.z1(a, c) : this.CP(this.get('icon'), function () { f.L && f.L.ca ? (g.l.wi && g.a.iepngFix(e), f.offsetChanged(), f.dL()) : f.map && f.map.set('display') }); this.set('contentDom', e, !0); b && (a = this.F1(b, c), this.set('shadowDom', a, !0)); d && d.content && this.set('labelDom', this.DP(d.content), !0)
    }, DP: function (a) { var b = document.createElement('div'); b.className = 'amap-marker-label'; b.innerHTML = a; return b }, nu: function () {
        var a = this.get('position'); if (this.map && a && !this.L) {
            var b = this.map; var a = this.map.Ab(a); var a = this.L =
new g.ai({ name: 'marker-' + g.a.vb(this), map: b, ia: new g.Ca.Eg([a.x, a.y]) }); a.Fp = this.Ob.CLASS_NAME; a.tr = this; this.W('coords', a, !0); a.Ue('offset textAlign verticalAlign isTop zIndex params noSelect'.split(' '), this)
        }
    }, getParams: function () {
        return { zIndex: this.get('zIndex'), Dp: this.get('angle'), Lg: this.get('contentDom'), sJ: this.get('labelDom'), r8: this.get('shadowDom'), opacity: this.get('opacity'), altitude: this.get('altitude'), title: this.get('title'), label: this.get('label'), WE: this.get('AnimationOffset'),
            verticalAlign: this.get('verticalAlign'), textAlign: this.get('textAlign'), offset: this.get('offset'), k5: this.get('isTop'), shape: this.get('shape'), visible: this.get('visible') && !this.Ob.get('outOfZooms'), anchor: this.get('anchor') }
    }, offsetChanged: function () {
        function a (a) {
            var c = b.get('offset'); var f = b.get('AnimationOffset'); var h = b.get('verticalAlign'); var k = b.get('textAlign'); var l = Math.round(a.x) + c.x + f.x; a = Math.round(a.y) + c.y + f.y; var f = b.get('anchor'); var m = b.L.Pj || g.j.yo(b.L.Lg); b.L.Pj = m; c = m[0]; m = m[1]; f && (f = f.split('-'),
            f.length === 2 ? (k = f[1], h = f[0]) : f.length === 1 && f[0] === 'center' && (k = 'center', h = 'middle')); switch (k) { case 'center':l -= c / 2; break; case 'right':l -= c } switch (h) { case 'middle':a -= m / 2; break; case 'bottom':a -= m }b.L.ca.style.left = l + 'px'; b.L.ca.style.top = a + 'px'
        } if (this.map) {
            if (this.L && this.L.ca) {
                var b = this; var c = this.map.C.view.type; c == '2D' ? (c = this.map.Ab(this.get('position')), c = c.Za(this.L.La).hd(Math.pow(2, 20 - this.map.get('zoom'))), this.L.ca && (this.L.ca.qB && this.L.ca.parentNode !== this.L.ca.qB ? this.map.set('display')
                    : a(c))) : c == '3D' && (c = this.get('position'), c = this.map.xs(c, this.get('altitude')), this.L.ca && (this.L.ca.qB && this.L.ca.parentNode !== this.L.ca.qB ? this.map.set('display') : a(c)))
            } else this.map.set('display')
        }
    }, altitudeChanged: function () { this.offsetChanged() }, positionChanged: function () { if (this.L) { var a = this.map.Ab(this.get('position')); this.set('coords', [a.x, a.y]); this.map && (this.L.saa = !0, this.offsetChanged()) } }, anchorChanged: function () { this.CF() }, textAlignChanged: function () { this.CF() }, verticalAlignChanged: function () { this.CF() },
    CF: function () { this.L && (this.L.Pj = null, this.L.ge = !0, this.map && (this.map.td.hm = !0, this.map.set('display'))) }, contentChanged: function () {
        if (this.L) {
            this.L.Pj = null; this.map.td.hm = !0; g.a.indexOf(this.map.td.Vg, this.L) === -1 && this.map.td.Vg.push(this.L); var a = this.get('contentDom'); this.L.ca && this.L.ca === a.parentNode && this.L.ca.removeChild(a); var a = this.get('content'); var b = this.get('offset'); var a = this.z1(a, b); this.set('contentDom', a); this.L.ca ? (g.l.wi && g.a.iepngFix(a), this.L.ca.appendChild(a), this.L.Lg = a, this.offsetChanged(),
            this.dL()) : this.map && this.map.set('display'); this.titleChanged()
        }
    }, iconChanged: function () {
        if (this.L && this.L.ca && !this.get('content')) {
            this.L.Pj = null; this.map.td.hm = !0; g.a.indexOf(this.map.td.Vg, this.L) === -1 && this.map.td.Vg.push(this.L); this.L.ca && this.get('contentDom') && this.L.ca.removeChild(this.get('contentDom')); var a = this.get('icon'); this.get('offset'); var b = this; var c = this.CP(a, function () { b.L && b.L.ca ? (g.l.wi && g.a.iepngFix(c), b.offsetChanged(), b.dL()) : b.map && b.map.set('display') }); this.set('contentDom',
                c); this.L.ca && (this.L.ca.appendChild(c), this.L.Lg = c); this.titleChanged()
        }
    }, shadowChanged: function () { if (this.L && this.L.ca) { var a = this.get('shadowDom'); this.L.ca && a && a.parentNode === this.L.ca && this.L.ca.removeChild(a); if (a = this.get('shadow')) { var b = this.get('offset'); var a = this.F1(a, b); this.set('shadowDom', a); this.L.ca && this.L.ca.appendChild(a) } } }, titleChanged: function () { this.L && this.L.Lg && typeof this.get('title') === 'string' && this.L.Lg && this.get('title') && (this.L.Lg.title = this.get('title')) }, dL: function (a,
        b) { a = a || this.get('label'); b = b || this.get('labelDom'); if (a && b) { var c = a.direction; var d = this.L.Pj || g.j.yo(this.L.Lg); var e = d[0]; var d = d[1]; var f = g.j.yo(b); var h = f[0]; var k = f[1]; this.L.kv = f; var l = f = 0; switch (c) { case 'top':f = -k; l = (e - h) / 2; break; case 'right':f = (d - k) / 2; l = e; break; case 'bottom':f = d; l = (e - h) / 2; break; case 'left':f = (d - k) / 2; l = -h; break; case 'center':f = (d - k) / 2, l = (e - h) / 2 }a.offset && (f += a.offset.y, l += a.offset.x); b.style.top = f + 'px'; b.style.left = l + 'px' } }, labelChanged: function (a) {
        a = a || this.get('label'); if (this.L && this.L.ca) {
            this.L.kv =
null; var b = this.L.ca; var c = this.get('labelDom'); c && c.parentNode === b && b.removeChild(c); a && a.content && (c = '', a.content && (c = this.DP(a.content), b.appendChild(c), this.dL(a, c)), this.set('labelDom', c))
        } else a && a.content ? this.set('labelDom', this.DP(a.content), !0) : this.set('labelDom', null)
    }, isTopChanged: function () {
        var a = this.map.td.UK; var b = this.get('isTop'); var c = this.get('zIndex'); a ? a === this ? this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.td.Mq + 10 : c, this.map.td.UK = b ? this : null) : (a.L && a.L.ca && (a.L.ca.style.zIndex =
b ? a.get('zIndex') : this.map.td.Mq + 10), this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.td.Mq + 10 : c), this.map.td.UK = b ? this : a) : (this.map.td.UK = this, this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.td.Mq + 10 : c))
    }, visibleChanged: function () { this.L && this.L.ca && (this.get('visible') && !this.Ob.get('outOfZooms') ? this.L.ca.style.display = 'block' : this.L.ca.style.display = 'none') }, qua: function () { this.visibleChanged() }, angleChanged: function () {
        if (!g.l.Ae && this.L && this.L.ca) {
            var a = this.L; var b = a.get('params'); var c =
b.textAlign; var d = b.verticalAlign; var e = b.offset; var b = e.x; var e = e.y; this.CF(); if (a.Fp == 'AMap.Text') { var e = b = 0; var f = a.Pj || g.j.yo(a.Lg); var h = f[0]; var k = f[1]; a.Pj = f; switch (c) { case 'center':b = h / 2; break; case 'right':b = h } switch (d) { case 'middle':e = k / 2; break; case 'bottom':e = k } } else b = -b, e = -e; g.j.rotate(this.L.ca, this.get('angle') || 0, { x: b, y: e })
        }
    }, zIndexChanged: function () {
        var a = this.get('zIndex'); if (a > this.map.td.Mq) { this.map.td.Mq = a; var b = this.map.td.UK; b && b.L && b.L.ca && (b.L.ca.style.zIndex = a + 10) } this.L && this.L.ca && (this.L.ca.style.zIndex =
this.get('isTop') ? this.map.td.Mq + 10 : this.get('zIndex'))
    }, opacityChanged: function () { var a = this.get('contentDom'); var b = this.get('shadowDom'); a && g.j.Eq(a, this.get('opacity')); b && g.j.Eq(b, this.get('opacity')) }, z1: function (a) { var b; b = document.createElement('div'); b.className = 'amap-marker-content'; typeof a !== 'string' ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style['white-space'] = 'pre')); g.j.Eq(b, this.get('opacity')); return b }, CP: function (a, b) {
        var c; var d = 0; var e = 0; var f; var h; var k; var l; var m; var n; a ? (typeof a ===
'string' ? (c = a, n = !0) : (c = a.get('image'), e = a.get('size'), f = a.get('imageSize'), d = e.width, e = e.height, f && (l = f.width, m = f.height)), f = typeof a !== 'string' ? a.get('imageOffset') : { x: 0, y: 0 }) : (c = g.w.Bi + '/mark_bs.png', f = { x: 0, y: 0 }, d = 19, e = 33, l = 19, m = 33); h = document.createElement('div'); h.className = 'amap-icon'; h.style.position = 'absolute'; h.style.overflow = n ? 'inherit' : 'hidden'; d && (h.style.width = d + 'px'); e && (h.style.height = e + 'px'); k = document.createElement('img'); l && m && (k.style.width = l + 'px', k.style.height = m + 'px'); k.style.top =
f.y + 'px'; k.style.left = f.x + 'px'; h.appendChild(k); g.j.Eq(g.l.Ae && n ? k : h, this.get('opacity')); d && e || (h.gM = !1); g.F.h(k, 'load', function q () { this.L && (this.L.Pj = null); this.map && this.map.td && (this.map.td.hm = !0); g.F.G(k, 'load', q, this); if (this.L && this.L.ca) { var a = this.get('labelDom'); a && this.L.ca.appendChild(a) }h.gM = !0; b && b() }, this); k.src = c; return h
    }, F1: function (a) { a = this.CP(a); a.style.zIndex = -1; return a }, moveChanged: function () {
        var a = this.get('move'); if (!1 === a) return this.qxa(); void 0 !== a && (a.action === 'pause'
            ? this.Sua() : Object.prototype.toString.call(a.ag) === '[object Array]' ? a.ag && (a.action === 'resume' && this.yG ? this.moveTo(a.ag[a.ag.wp || 0], a.speed, a.tb) : (this.yG && this.q('movestop'), a.ag.wp = 0, this.set('position', a.ag[0]), this.uta(a.ag, a.speed, a.tb, a.Kma))) : this.moveTo(a.ag, a.speed, a.tb, !0))
    }, moveTo: function (a, b, c, d) {
        if (!(b <= 0)) {
            var e = this.get('position'); a.Za(e); var f = Math.round(a.ye(e) / 1E3 / b * 36E5); if (f === 0) return this.q('moveend'); this.wh && (this.wh.stop(), this.wh = null); this.wh = new g.Dj(e, a); c = c || function (a) { return a }
            this.wh.transition = function (a, b, d) { if (d >= f) return b; var e = (b.Q - a.Q) * c(d / f) + a.Q; a = (b.P - a.P) * c(d / f) + a.P; return new g.U(e, a) }; this.wh.rq = function (b) { this.set('position', b); d && this.Ob.q('moving', { target: this.Ob, passedPath: [this.wh.start, this.get('position')] }); this.q('moving'); b.cb(a) && (this.wh && (this.wh.stop(), this.wh = null), this.Ob.q('moveend', { target: this.Ob }), this.q('moveend')) }; this.get('autoRotation') && !g.l.Ae && (b = (this.map.C.view.type || '2D') == '2D' ? this.kea(e, a) : this.lea(e, a), this.set('angle', b))
            this.wh.Dn(this)
        }
    }, qxa: function () { this.wh && (this.wh.stop(), this.wh = null, this.q('movestop')) }, Sua: function () { this.wh && (this.wh.stop(), this.wh = null, this.q('movepause')) }, uta: function (a, b, c, d) {
        function e () { var b = a.slice(0, a.wp || 0); b.push(this.get('position')); this.Ob.q('moving', { target: this.Ob, passedPath: b }) } function f () { a.wp < a.length - 1 ? (a.wp += 1, this.moveTo(a[a.wp], b, c)) : (this.oa('movealong'), d ? (a.wp = 0, this.set('position', a[0]), this.moveTo(a[a.wp], b, c)) : this.q('movestop')) } var h = Math.min(a.wp || 0, a.length -
1); this.yG || (this.yG = !0, this.h('moving', e, this), this.h('moveend', f, this), this.h('movestop', function l () { this.yG = !1; this.G('moveend', f, this); this.G('moving', e, this); this.G('movestop', l, this) }, this)); this.moveTo(a[h], b, c)
    }, lea: function (a, b) { var c = this.map; var d = c.xs(a); var c = c.xs(b); var e = 0; c.ye(d); var f = c.y - d.y; var h = c.x - d.x; c.x - d.x !== 0 ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), f >= 0 && h < 0 ? e = Math.PI + e : f < 0 && h <= 0 ? e = Math.PI + e : f < 0 && h >= 0 && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2; return g.a.mc(180 * e / Math.PI, 1) }, kea: function (a,
        b) { var c = this.map; var d = c.Ab(a); var c = c.Ab(b); var e = 0; c.ye(d); var f = c.y - d.y; var h = c.x - d.x; c.x - d.x !== 0 ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), f >= 0 && h < 0 ? e = Math.PI + e : f < 0 && h <= 0 ? e = Math.PI + e : f < 0 && h >= 0 && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2; return g.a.mc(180 * e / Math.PI, 1) } }); g.A.Jn = g.A.Ch.extend({ r: function (a, b) { arguments.callee.la.apply(this, arguments); this.W('items', a, !0); this.W('content', a, !0); this.W('resolution', b); this.W('centerCoords', b); this.Ep = a }, ez: function (a) {
        this.Pg(); this.gt(); this.zm(); this.sl('resolution'); this.sl('centerCoords'); this.sl('render'); this.W('resolution', a); this.W('centerCoords', a); this.W('render', a); this.map.h('movestart', this.Vm, this); this.map.h('mapmove', this.Vm, this); this.map.h('zoomstart', this.Vm, this); this.map.h('click', this.Vm, this)
        this.map.h('closeOverlays', this.Vm, this); this.map.h('rotate', this.Vm, this)
    }, Vm: function () { this.Ep.map && (this.Ep.D = !0, this.Ep.close(), this.Ep.D = !1) }, mapChanged: function () {}, positionChanged: function () { this.zm() }, renderChanged: function () { this.zm() }, Pg: function () { this.K && (this.K.parentNode && this.K.parentNode.removeChild(this.K), this.K = null); var a = g.j.create('div', null, 'amap-menu'); g.F.h(a, 'mousedown', function (a) { g.F.stopPropagation(a) }, this); this.K = a; this.map.Ta.A.appendChild(this.K) }, gt: function () {
        var a =
this; var b = this.K; b.innerHTML = ''; var c = this.get('content'); if (typeof c === 'object')b.appendChild(c); else if (typeof c === 'string')b.innerHTML = c; else if ((c = this.get('items')) && c.length) { var d = g.j.create('ul', b, 'amap-menu-outer'); c.sort(function (a, b) { return isNaN(a.XJ) || isNaN(b.XJ) ? 0 : a.XJ - b.XJ }); for (b = 0; b < c.length; b += 1)(function (b) { var c = b.Gn; var h = b.tb; var k = g.j.create('li', d); k.innerHTML = c; g.F.h(k, 'click', function () { h.call(k); a.Ep.D = !0; a.Ep.close(); a.Ep.D = !1 }, k) })(c[b]) } else this.K.innerHTML = ''
    }, zm: function () {
        var a =
this.map; var b = this.K; a && b && (this.map.get('zoom'), b = this.get('position'), b = a.xs(b), a = b.y, b = b.x, this.K.style.right = '', this.K.style.bottom = '', this.K.style.left = b + 'px', this.K.style.top = a + 'px')
    }, Wg: function () { this.K && (this.map.G('click', this.eBa, this), this.map.Ta.A.removeChild(this.K), this.Ep.pi = !1, this.K = this.Ep.Ke.map = null, this.map.G('movestart', this.Vm, this), this.map.G('zoomstart', this.Vm, this), this.map.G('click', this.Vm, this), this.map.G('closeOverlays', this.Vm, this), this.map.G('rotate', this.Vm, this)) },
    visibleChanged: function () { this.K && (this.get('visible') ? this.K.style.display = 'block' : this.K.style.display = 'none') }, itemsChanged: function () { this.K && this.gt() } }); g.A.Re = g.A.Ch.extend({ r: function (a, b) { arguments.callee.la.apply(this, arguments); this.Ue('content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset anchor'.split(' '), a); this.W('retainWhenClose', a, !0); a.W('toBeClose', this); this.jf = a }, ez: function (a) {
        this.lna || (this.Pg(), this.gt()); this.sl('resolution'); this.sl('centerCoords'); this.sl('render'); this.W('resolution', a); this.W('centerCoords', a); this.W('render', a); this.map = a; a.Ta.A.appendChild(this.$b); this.cV()
        this.zm(); this.PW(); this.lna = !0; this.ana(); this.Ob.q('onAdd', { type: 'onAdd', target: this.Ob })
    }, Pg: function () {
        var a = g.j.create('div'); a.className = 'amap-info'; var b = g.j.create('div', a, 'amap-info-shadowContainer'); var c = g.j.create('div', a); var d = this.get('anchor'); var e = 'amap-info-contentContainer'; d && (e = d + ' amap-info-contentContainer'); d = g.j.create('div', c, e); a.style.position = 'absolute'; c.style.position = 'absolute'; c.style.bottom = '0px'; c.style.left = '0px'; b.style.position = 'absolute'; this.$b = a; this.Zf = c; this.kU = b; this.nh =
d; this.set('contentDom', this.nh, !0)
    }, gt: function () {
        var a = this.get('contentU'); if (a) {
            var b = this.get('isCustom'); var c = this.nh; var d = this.kU; c.innerHTML = ''; var e = null; if (b) { if (typeof a === 'string')c.innerHTML = a; else if (a instanceof Array) for (e = 0; e < a.length; e += 1)c.appendChild(a[e]); else c.appendChild(a); e = c; d.parentNode && d.parentNode.removeChild(d) } else {
                e = 'amap-info-content amap-info-outer'; g.l.Ae && (e += ' amap-info-content-ie8'); e = this.ura = d = g.j.create('div', c, e); typeof a === 'string' ? d.innerHTML = a : d.appendChild(a)
                this.nna = d; a = g.j.create('a', this.ura, 'amap-info-close'); a.innerHTML = '\u00d7'; this.SP = a; a.href = 'javascript: void(0)'; g.l.Jf && (g.F.h(a, 'touchstart', function (a) { g.F.stop(a) }, this), g.F.h(a, 'touchend', function (a) { g.F.stop(a); this.jf.D = !0; this.jf.close(); this.jf.D = !1 }, this), g.F.h(a, 'click', function (a) { g.F.stop(a); this.jf.D = !0; this.jf.close(); this.jf.D = !1 }, this)); g.l.ba || (g.F.h(a, 'mousedown', function (a) { g.F.stop(a) }, this), g.F.h(a, 'click', function (a) { g.F.stop(a); this.jf.D = !0; this.jf.close(); this.jf.D = !1 },
                    this)); if (a = this.get('size', !0))a.width !== 0 && (d.style.width = a.width + 'px'), a.height !== 0 && (d.style.height = a.height + 'px'); this.get('anchor'); g.j.create('div', c, g.l.Ae ? 'amap-info-sharp-old' : 'amap-info-sharp'); this.kU.style.display = 'block'
            }g.F.oxa(e)
        }
    }, cV: function () {
        var a = this.get('isCustom'); var b = this.get('showShadow'); if (!a && b) {
            var a = this.kU; var b = g.j.XI(this.nh); var c = b.height - 23; var d = b.width; if (g.l.wi || g.l.av)c = this.nh.childNodes[0].offsetHeight, d = this.nh.childNodes[0].offsetWidth + 26; b = 'background-image:url(' + g.w.Gb +
(g.l.wi ? '/theme/v1.3/iws.gif);' : '/theme/v1.3/iws.png);'); a.innerHTML = ''; var e = []; var f; f = e[1] = {}; f.height = 0.5 * c + 4; f.width = d; f.offsetX = 400; f.offsetY = 16; f.top = -f.height - 10 - 15; f.left = 23; f = e[2] = {}; f.height = e[1].height; f.width = e[1].height; f.offsetX = 1075 - f.width; f.offsetY = e[1].offsetY; f.top = e[1].top; f.left = 23 + e[1].width; f = e[3] = {}; f.height = 10; f.width = 22; f.offsetX = 30; f.offsetY = 445; f.top = -25; f.left = 23 + (g.l.av || g.l.wi ? 5 : 0); f = e[4] = {}; f.height = 10; f.width = d / 2 - 15 - e[3].left - e[3].width; f.offsetX = 132; f.offsetY = 445; f.top =
-25; f.left = e[3].left + e[3].width; f = e[5] = {}; f.height = 10; f.width = 70; f.offsetX = 80; f.offsetY = 445; f.top = -25; f.left = e[4].left + e[4].width; f = e[6] = {}; f.height = 10; f.width = d - e[5].left - e[5].width; f.offsetX = 132; f.offsetY = 445; f.top = -25; f.left = e[5].left + e[5].width; f = e[7] = {}; f.height = 10; f.width = 30; f.offsetX = 621; f.offsetY = 445; f.top = -25; f.left = d; f = e[8] = {}; f.height = 15; f.width = 70; f.offsetX = 47; f.offsetY = 470; f.top = -15; f.left = d / 2 - 15; for (c = 1; c <= 8; c += 1) {
                d = g.j.create('div', a), f = [], f.push('position:absolute;'), f.push(b), f.push('top:' +
e[c].top + 'px;'), f.push('left:' + e[c].left + 'px;'), f.push('width:' + e[c].width + 'px;'), f.push('height:' + e[c].height + 'px;'), f.push('background-position:' + -e[c].offsetX + 'px ' + -e[c].offsetY + 'px;'), d.style.cssText = f.join('')
            }
        }
    }, uHa: function () {}, zm: function () {
        var a = this.map; var b = this.$b; var c = this.get('position'); var d = this.get('anchor'); if (a && b && c) {
            a = a.xs(c, this.get('altitude')); d && (this.nh.className = d + ' amap-info-contentContainer'); var e = g.j.XI(this.nh); if (g.l.wi || g.l.av)e.width = this.nh.childNodes[0].offsetWidth + 14
            b = e.height; c = this.get('offset'); this.get('isCustom'); e = e.width; this.$b.style.left = Math.round(a.x - e / 2 + (c.x || 0)) + 'px'; this.$b.style.top = Math.round(a.y + (c.y || 0)) + 'px'; if (d) {
                var f; d == 'center' ? (d = 'center', f = 'middle') : (f = d.split('-'), d = f[1], f = f[0]); switch (f) { case 'middle':this.$b.style.top = Math.round(a.y + b / 2 + (c.y || 0)) + 'px'; break; case 'top':this.$b.style.top = Math.round(a.y + b + (c.y || 0)) + 'px' } switch (d) {
                    case 'left':this.$b.style.left = Math.round(a.x + (c.x || 0)) + 'px'; break; case 'right':this.$b.style.left = Math.round(a.x -
e + (c.x || 0)) + 'px'
                }
            }d = this.nna; if (this.SP && d.childNodes[0]) { for (b = a = 0; b < d.childNodes.length; b += 1)a += d.childNodes[0].clientHeight || 0; a > (this.get('size').height || d.clientHeight) ? this.SP.style.right = '20px' : this.SP.style.right = '5px' }
        }
    }, Oca: function () {
        var a = new g.H(2 - this.nh.offsetWidth / 2, 2 - this.nh.offsetHeight); var b = this.get('offset') || new g.H(0, 0); var c = this.get('anchor'); if (c) {
            var a = this.nh.offsetWidth; var d = this.nh.offsetHeight; var e; var f; var h = 2 - a / 2; var k = 2 - d; c && (c = c.split('-'), c.length === 2 ? (e = c[1], f = c[0]) : c.length === 1 && c[0] ===
'center' && (e = 'center', f = 'middle')); switch (e) { case 'left':h = 2; break; case 'right':h = -a } switch (f) { case 'middle':k = -d / 2; break; case 'top':k = -2 }a = new g.H(h, k)
        } this.get('isCustom') || (a = a.add(new g.H(0, -23))); return a.add(b)
    }, altitudeChanged: function () { this.zm() }, PW: function () {
        if (this.get('position') && this.get('autoMove') && this.nh) {
            for (var a = this.map, b = new g.xd(this.nh.offsetWidth, this.nh.offsetHeight), c = a.xs(this.get('position'), this.get('altitude')).add(this.Oca()), d = c.add(b.uE()), e = a.get('size'), f = a.Fpa(),
                h = 0, k = 0, l = 0; l < f.length; l += 1) { var m = f[l]; var n = 0; var p = 0; m[1] === 0 && m[2] === 0 ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), n > 0 && p > 0 && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : m[2] === 0 && m[3] === 0 ? (n = e.rj() - m[1] - (d.x + h), p = m[0] - (c.y + k), n < 0 && p > 0 && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : m[0] === 0 && m[3] === 0 ? (n = e.rj() - m[1] - (d.x + h), p = e.pj() - m[2] - (d.y + k), n < 0 && p < 0 && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : m[0] === 0 && m[1] === 0 && (n = m[3] - (c.x + h), p = e.pj() - m[2] - (d.y + k), n > 0 && p < 0 && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) }c = c.add(new g.H(h, k)); d = d.add(new g.H(h,
                k)); l = f = 0; c.x < 0 || b.rj() > e.rj() ? f = 20 - c.x : e.rj() < d.x && (f = e.rj() - d.x - 25); c.y < 0 || b.pj() > e.pj() ? l = 5 - c.y : e.pj() < d.y && (l = e.pj() - d.y - 15); f += h; l += k; if (f || l)a.C.D = !0, a.C.panBy(f, l), a.C.D = !1
        }
    }, ana: function () { this.get('closeWhenClickMap') && (this.map.h('clickstart', this.XZ, this, !1), this.map.h('clickend', this.WZ, this, !1)) }, XZ: function () { this.jf.pi && (this.jf.D = !0, this.jf.getIsOpen() && (this.jf.TK = !0), this.jf.D = !1) }, WZ: function () { this.jf.pi && (this.jf.TK && (this.jf.D = !0, this.jf.close(), this.jf.D = !1), this.jf.TK = !1) },
    Wg: function () { this.$b && this.map && (this.jf.TK = !1, this.get('closeWhenClickMap') && (this.map.G('clickstart', this.XZ, this), this.map.G('clickend', this.WZ, this)), this.get('retainWhenClose') ? this.map.Gl.appendChild(this.$b) : (this.$b.parentNode === this.map.Ta.A && this.map.Ta.A.removeChild(this.$b), this.jf.A = null), this.map = null, this.jf.pi = !1, this.Ob.q('close', { type: 'close', target: this.Ob })) }, oBa: function () {
        if (!this.get('isCustom')) return this.nh.offsetWidth; for (var a = this.gi, b = a.firstChild, c = a.lastChild; b && c &&
b.style && c.style && b === c;)a = b, b = a.firstChild, c = a.lastChild; a = g.j.Rc(a, 'width'); return a = parseInt(a.replace('px', ''), 10)
    }, renderChanged: function () { this.zm() }, positionChanged: function () { this.map && this.$b && (this.zm(), this.PW()) }, anchorChanged: function () { this.positionChanged() }, offsetChanged: function () { this.positionChanged() }, contentChanged: function () { this.gt(); this.cV(); this.zm() }, sizeChanged: function () { this.gt(); this.cV(); this.zm() } }); g.Ca = {}
    g.Ca.Ie = g.aa.extend({ ka: [g.ta, g.Se], r: function () {}, Mu: function () { var a = this.pd(); a.mh || (a.mh = g.I.ui(a)); return a.mh }, lb: function () { return new this.r(this.wa) }, bR: function () { return this.wa }, setCoords: function (a) { this.Gwa(a) }, Gwa: function (a) { this.vv = this.pd(); this.tg = null; if (g.Ca.Bc && this instanceof g.Ca.Bc) { var b = a.length; this.Gf = Array(b); for (var c, d, e = 0; e < b; e += 1) if (c = a[e], d = new g.Ca.CL(c), this.Gf[e] = d, e === 0) { if (c.length === 0) break; d.cq(c) || c.reverse() } else c.length !== 0 && d.cq(c) && c.reverse() } else this.wa = a } })
    g.Ca.Je = g.extend({}, { Fw: 'point', yL: 'linestring', RV: 'linearring', mF: 'polygon', JL: 'multipoint', IL: 'multilinestring', jF: 'multipolygon', Tza: 'geometrycollection' }); g.ai = g.aa.extend({ ka: [g.ta, g.Se], r: function (a) { a = a || {}; a.dB && (this.dB = a.dB); a.BN && (this.BN = a.BN); a.gZ && (this.gZ = a.gZ); this.map = a.map; this.$l = a.cN || g.a.vb(this); this.name = a.name || ''; this.ge = !1; this.set('visible', !0, !0); this.dU(a.ia); this.pl = a.QK; this.style = a.style }, doa: function () { this.name = this.map = null; this.style = this.pl = this.tr = this.y5 = this.ia = this.ia.Oa = null; this.tl(); this.si() }, Aqa: function () { return this.pl }, Uwa: function (a) { this.pl = a; this.zIndex = this.pl[0].zk || this.zIndex }, dc: function () { return this.ia },
        dU: function (a) { a && (this.ia = a, this.W('coords', a, !0), this.dB || this.BN) && (a.W('radius', this), a.W('center', this), a.W('resolution', this), a.W('strokeWeight', this)) }, setStyle: function (a) { this.Uwa(a); this.ds() }, coordsChanged: function () { this.ds() }, radiusChanged: function () { this.ia.vv = this.ia.pd(); this.ia.tg = null; this.ds() }, ds: function (a) { this.set('feature', { target: this, Vna: a, vv: this.ia.vv || this.ia.pd(), zta: this.ia.pd() }); this.ia.vv = this.ia.pd() }, visibleChanged: function () { this.ds() }, YDa: function (a) {
            for (var b =
0; b < this.pl.length; b += 1) { var c = this.pl[b]; if (a.cb(c.ay(this))) return c }
        }, Npa: function () {
            var a = this.dc(); var b = []; a.vi() === g.Ca.Je.mF || a.vi() === g.Ca.Je.jF ? b.push(new g.style.te.Bc({ fillColor: '#78cdd1', be: 0.2, strokeColor: '#122e29', mb: 0.5, pc: 1 })) : a.vi() === g.Ca.Je.yL || a.vi() === g.Ca.Je.RV || a.vi() === g.Ca.Je.IL ? b.push(new g.style.te.jp({ color: '#888888', width: 1, zIndex: 10 })) : a.vi() !== g.Ca.Je.Fw && a.vi() !== g.Ca.Je.JL || b.push(new g.style.te.ci({ url: g.w.Gb + '/theme/v1.3/markers/0.png', width: 36, height: 36, rotation: 0,
                MHa: -12, OHa: -36, zIndex: 100 })); return b
        } }); g.ai.Oza = 'geometry'; g.Ca.Eg = g.Ca.Ie.extend({ r: function (a, b) { this.wa = a; this.tj = b; this.tg = null }, pd: function () { if (!this.tg) { var a = this.wa[0]; var b = this.wa[1]; if (this.tj) this.tg = [a, b, a, b]; else { var c = this.get('radius'); var d = this.get('resolution') * this.get('strokeWeight') || 0; var c = c ? c / Math.cos(Math.PI * this.get('center').P / 180) : 0; this.tg = [a - c - d, b - c - d, a + c + d, b + c + d] } } return this.tg }, vi: function () { return g.Ca.Je.Fw } }); g.M = { canvas: {}, Yd: {}, Qe: {}, Ee: {}}; g.M.Vb = g.aa.extend({ ka: [g.ta, g.Se], r: function (a, b) { this.f = a; this.tj = a.T.tj; this.J = b; this.e = b.e; this.W('display', b) }, Tj: function () { this.pq && this.pq(); this.tl(); this.e = this.J = this.f = null }, Ou: function (a, b, c, d) {
        var e = this.zoom; c = []; var f = this.f; if (Math.floor(e) !== e)b(c, f); else {
            a = [a.x, a.y]; if (f.hm) {
                for (var e = f.Vg, h = !0, k = [], l = 0; l < e.length; l += 1) {
                    var m = e[l].Lg; if (m) {
                        if (m.parentNode && m.parentNode.parentNode && this.J && m.parentNode.parentNode !== this.J.Gl && m.parentNode.style.display !== 'none') {
                            var n = g.j.yo(m); var m =
n[0]; var n = n[1]; if (m && n) { var p = Math.max(Math.abs(e[l].get('offset').x), Math.abs(e[l].get('offset').y)) + Math.max(m, n); f.uf = Math.max(f.uf, p); f.gg = Math.max(f.gg, p); e[l].width = m; e[l].height = n } else h = !1, k.push(e[l])
                        } else h = !1, k.push(e[l])
                    }
                }h ? (f.hm = !1, f.Vg = []) : f.Vg = k
            }e = Math.max(f.uf, f.$y || 0) * this.S; h = Math.max(f.gg, f.$y || 0) * this.S; k = 0; f.Zy && (k = f.Zy / Math.cos(Math.PI * this.e.get('center').P / 180)); h = Math.max(h, k || 0); e = Math.max(e, k || 0); if (e = f.qn([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
                for (var q in e) {
                    if (e.hasOwnProperty(q) &&
(h = e[q], h.get('visible') && !h.get('noSelect'))) {
                        if (k = h.dc(), k instanceof g.Ca.Eg) {
                            if (this.tj) {
                                l = this.f.xm; l instanceof Array && (l = typeof h.eb.style === 'number' && l[h.eb.style] ? l[h.eb.style] : l[0]); var m = l.size.width * this.S; var n = l.size.height * this.S; var p = l.anchor.x * this.S; var r = l.anchor.y * this.S; var k = k.wa; var s = l.rotation_; var u = [a[0], a[1]]; if (s) { var v = (a[0] - k[0]) / this.S; var w = (a[1] - k[1]) / this.S; var t = s; var s = Math.cos(-t); var x = Math.sin(-t); var t = v * s - w * x; var v = v * x + w * s; u[0] = k[0] + t * this.S; u[1] = k[1] + v * this.S }m = g.I.zP([[u[0] - m + p, u[1] - n + r], [u[0] + p, u[1] +
r]]); g.I.Rd(m, k) && c.push(h)
                            } else if (typeof k.get('radius') !== 'undefined')l = k.wa, l = new g.H(l[0], l[1]), m = new g.H(a[0], a[1]), k = k.get('radius'), h.get('unit') === 'px' ? m.ye(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.ye(l) * Math.cos(h.get('center').P * Math.PI / 180) <= k / this.kq * Math.pow(2, 20 - this.zoom) && c.push(h); else if (h.Fp == 'AMap.Text')l = h.get('params'), l.visible && h.ca && g.j.mD(d, h.ca, 'amap-markers') && c.push(h); else {
                                if (l = h.get('params'), l.visible && h.ca) {
                                    if (l.shape) {
                                        for (k = k.wa, s = l.Dp % 360, u = [a[0], a[1]], s && (v = (a[0] -
k[0]) / this.S, w = (a[1] - k[1]) / this.S, t = Math.PI * s / 180, s = Math.cos(-t), x = Math.sin(-t), t = v * s - w * x, v = v * x + w * s, u[0] = k[0] + t * this.S, u[1] = k[1] + v * this.S), m = h.width * this.S, n = h.height * this.S, p = l.offset.x * this.S, r = l.offset.y * this.S, m = g.I.zP([[u[0] - m - p, u[1] - n - r], [u[0] - p, u[1] - r]]), k[0] instanceof Array || (k = [k]), n = k.length - 1; n >= 0; n -= 1) { if (g.I.Rd(m, k[n])) { l.shape ? this.lD(h, u, k) && c.push(h) : c.push(h); break } }
                                    } else g.j.mD(d, h.ca, 'amap-markers') && c.push(h)
                                }
                            }
                        } else {
                            k.Rd ? k.Rd(a) && c.push(h) : k.ky && 1.8 * k.ky(a) <= h.get('strokeWeight') *
this.S && c.push(h)
                        }
                    }
                } this.tj ? c.sort(function (a, b) { return a.$l > b.$l ? -1 : 1 }) : c.sort(function (a, b) { return a.get('isTop') ? -1 : b.get('isTop') ? 1 : a.get('zIndex') > b.get('zIndex') || a.get('zIndex') === b.get('zIndex') && a.$l > b.$l ? -1 : 1 }); b(c, f)
            } else b([], f)
        }
    }, lD: function (a, b, c) {
        var d = (b[0] - c[0][0]) / this.S; b = (b[1] - c[0][1]) / this.S; a = a.get('params'); c = a.offset; var d = [d - c.x, b - c.y]; var e; a = a.shape; if (a.B.type === 'circle') { if (b = a.B.coords[0], c = a.B.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.B.coords[2]) return !0 } else {
            if (a.B.type ===
'poly') return e = a.B.coords, e = this.QH(e), g.wd.Rd(d, e); if (a.B.type === 'rect') return e = a.B.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [[a, b], [c, b], [c, e], [a, e]], g.wd.Rd(d, e)
        } return !1
    }, QH: function (a) { for (var b = [], c = 0; c / 2 < a.length / 2; c += 2)b.push([a[c], a[c + 1]]); return b }, C3: function (a, b, c, d, e, f, h) {
        var k = ['position:absolute;']; k.push('top:' + Math.round(c) + 'px;'); k.push('left:' + Math.round(b) + 'px;'); k.push('width:' + Math.round(d) + 'px;'); k.push('height:' + Math.round(e) + 'px;'); f < 1 && ('opacity' in a.style ? (k.push('opacity'),
        k.push(':'), k.push(f), k.push(';')) : document.documentMode >= 8 ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(")';")) : (k.push('filter:alpha(opacity='), k.push(Math.ceil(100 * f)), k.push(');'))); k.push('z-index:' + h + ';'); k.join(''); g.j.g8(a, k.join(''))
    } }); g.M.Lb = g.aa.extend({ ka: [g.ta, g.Se], r: function (a) { this.e = a; this.type = '2D'; this.Aj = g.a.mc(a.get('zoom'), 1); this.Gl = a.Gl; this.K = a.Ta.o; this.W('display', a); this.W('rotateEnable', a); this.W('style', a); this.W('zoom', a); this.W('hightlight', a) }, RS: function (a) { this.ve = a || g.a.Rk('ff' + this.e.ve.slice(1)) }, Ou: function (a, b, c, d, e) {
        function f (a, d) { a.length && (k[g.a.indexOf(b, d)] = a); l -= 1; l <= 0 && (c(k), l = 0) } for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1) {
            m = b[p], m instanceof g.o.cd && m.get('visible') && (n.push(this.Qu(m)),
            l += 1)
        } for (h = 0; h < n.length; h += 1)n[h].Ou(a, f, d, e)
    } }); g.s2 = { SC: function (a, b, c) { for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) { var m = b[k]; if (m < a)d = c[m], f = m; else { e = c[m]; h = m; break } }d === null ? (d = e, f = h) : e === null && (e = d, h = f); return { oz: f, OJ: h, vq: d, BD: e } }, Dqa: function (a) { var b = this; var c = g.a; var d = []; var e = {}; c.Pb(a.nodes, function (a) { !1 !== a.value && a.value !== null && (e[a.zoom] = g.w.tc + '://' + a.value, d.push(a.zoom)) }); return function (a) { a = c.mc(a, 1); void 0 === e[a] && (e[a] = b.SC(a, d, e).vq); return e[a] } }, iqa: function (a) {
        var b = this; var c = g.a; var d = []; var e = {}; var f = a.transitional; c.Pb(a.nodes,
            function (a) { a.value !== null && !1 !== a.value && (e[a.zoom] = a.value, d.push(a.zoom)) }); return function (a) { a = c.mc(a, 1); if (void 0 === e[a]) { var k = b.SC(a, d, e); e[a] = f && f !== 'none' && k.OJ !== k.oz && k.vq !== k.BD ? c.Y3(k.vq, k.BD, (a - k.oz) / (k.OJ - k.oz), f) : k.vq } return e[a] }
    }, wpa: function (a) { var b = this; var c = g.a; var d = []; var e = {}; c.Pb(a.nodes, function (a) { a.value !== null && (e[a.zoom] = a.value, d.push(a.zoom)) }); return function (a) { a = c.mc(a, 1); void 0 === e[a] && (e[a] = b.SC(a, d, e).vq); return e[a] } }, I3: function (a) {
        var b = this; var c = g.a; var d = []; var e = {}; c.Pb(a.nodes,
            function (a) { a.value !== null && (e[a.zoom] = a.value, d.push(a.zoom)) }); return function (a) { a = c.mc(a, 1); void 0 === e[a] && (e[a] = b.SC(a, d, e).vq); return e[a] }
    }, Epa: function (a, b, c) {
        var d = this; var e = g.a; var f = []; var h = {}; var k = a.transitional; e.Pb(a.nodes, function (a) { a.value && (h[a.zoom] = e.xla(a.value, c ? 'rgba' : 'webgl'), f.push(a.zoom)) }); return function (a) {
            var b = null; a = e.mc(a, 1); if (void 0 === h[a]) {
                var b = d.SC(a, f, h); var n = b.vq; if (k && k !== 'none' && b.oz !== b.OJ && b.vq.join('') !== b.BD.join('')) {
                    for (var n = n.slice(0), p = (a - b.oz) / (b.OJ - b.oz), q = 0, r =
b.BD.length; q < r; q++)n[q] = e.Y3(b.vq[q], b.BD[q], p, k)
                } h[a] = n
            }b = h[a]; return c && b ? 'rgba(' + b.join(',') + ')' : b || ''
        }
    }, jz: function (a, b, c, d) { var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}; var f; for (f in c) if (c.hasOwnProperty(f)) { var h = c[f]; void 0 !== b[h] ? (b[h].nodes && b[h].nodes.length > 1 && b[h].nodes.sort(function (a, b) { return a.zoom - b.zoom }), a[f] = e.Lra ? { Qe: d.call(this, b[h], c[f]), canvas: d.call(this, b[h], c[f], !0) } : d.call(this, b[h], c[f])) : e.Kra && (a[f] = !0) } }, Dr: function (a, b) {
        for (var c = [], d = 0, e = a.length; d <
e; d += 2) { var f = 0; var f = b === 'str' ? g.a.mc(parseInt(a.substr(d, 2), 16) / (d === 0 ? 255 : 1), 3) : g.a.mc(parseInt(a.substr(d, 2), 16) / 255, 3); c.push(f) } return c.length ? (c.push(c.shift()), b === 'str' ? 'rgba(' + c.join(',') + ')' : c) : ''
    }, P6: function (a, b, c) {
        if (b[c])console.log('customType repeat!!', c); else {
            var d = {}; var e = { visible: 'visible', mU: 'showLabel', ok: 'showIcon' }; var f = [['color', { color: 'color' }, { opacity: 'opacity' }], ['fillColor', { fillColor: 'fillColor' }, { be: 'fillOpacity' }], ['strokeColor', { strokeColor: 'strokeColor' }, { mb: 'strokeOpacity' }],
                ['textFillColor', { Bxa: 'textFillColor' }, { Cxa: 'textFillOpacity' }], ['textStrokeColor', { Exa: 'textStrokeColor' }, { Fxa: 'textStrokeOpacity' }], ['backgroundColor', { backgroundColor: 'backgroundColor' }, { Gla: 'backgroundOpacity' }]]; var h = { fontSize: 'fontSize' }; var k = { fillWidth: 'fillWidth', strokeWidth: 'strokeWidth' }; if (a.styles) {
                a = a.styles; this.jz(d, a, e, this.wpa, { Kra: !0 }); this.jz(d, a, h, this.I3, { Zra: !0 }); this.jz(d, a, k, this.I3, { Zra: !0 }); h = 0; for (k = f.length; h < k; h++) {
                    var l = f[h]; a[l[0]] ? this.jz(d, a, l[1], this.Epa, { Lra: !0 }) : this.jz(d,
                        a, l[2], this.iqa)
                }a.texture && (this.jz(d, a, { Ua: 'texture' }, this.Dqa), d.md = [], g.a.Pb(a.texture.nodes, function (a) { a.value && d.md.push(g.w.tc + '://' + a.value) }))
            } else {
                for (var m in e) if (e.hasOwnProperty(m)) { var n = e[m]; d[m] = void 0 === a[n] ? !0 : a[n] }e = 0; for (m = f.length; e < m; e++) { var p = f[e]; var n = g.a.keys(p[1])[0]; var q = p[1][n]; var r = g.a.keys(p[2])[0]; var p = p[2][r]; void 0 !== a[q] ? d[n] = { canvas: this.Dr(a[q], 'str'), Qe: this.Dr(a[q]) } : d[r] = a[p] } for (l in h)h.hasOwnProperty(l) && void 0 !== a[l] && (d[l] = a[l]); for (var s in k) {
                    k.hasOwnProperty(s) &&
void 0 !== a[s] && (d[s] = a[s])
                }a.texture && (d.Ua = g.w.tc + '://' + a.texture)
            }b[c] = d
        }
    }, gT: function (a, b, c, d) { if (a) for (var e in a) if (a.hasOwnProperty(e) && g.a.bk(a[e], 'object')) { var f = a[e]; var h = e; c && (h = c + ':' + e); if (f.detailedType) this.P6(f, b, h), this.gT(f.detailedType, b, h, f); else if (f.subType) this.gT(f.subType, b, h); else { if (void 0 !== f.code) { for (var k in d)d.hasOwnProperty(k) && !g.a.ka(['isDetailed', 'detailedType', 'styles'], k) && void 0 === f[k] && void 0 !== d[k] && (f[k] = d[k]); h = c + ':' + f.code } this.P6(f, b, h) } } }, ZU: function (a) {
        if (!this.Qp ||
this.Qp.zoom != a) { var b = g.a.Oh; var c = { zoom: a }; var d; for (d in this.Bf) if (this.Bf.hasOwnProperty(d)) { var e = this.Bf[d]; c[d] = {}; for (var f in e) if (e.hasOwnProperty(f)) { var h = e[f]; h ? h.Qe ? (c[d][f] = {}, b(h.Qe) ? c[d][f].Qe = h.Qe(a) : c[d][f].Qe = h.Qe, b(h.canvas) ? c[d][f].canvas = h.canvas(a) : c[d][f].canvas = h.canvas) : b(h) ? c[d][f] = h(a) : c[d][f] = h : c[d][f] = h } } this.Qp = c }
    }, styleChanged: function () {
        if (this.e.C.yi) {
            var a = this.get('style'); this.fm.xA || (this.fm = g.a.bind(this.fm, this), this.Vp = g.a.bind(this.Vp, this), this.fm.xA = !0); var b =
g.a; if (a) { var c = {}; this.gT(a, c); this.Bf = c } else this.Bf = null; var d, e, f, h; this.Bf && (d = this.Bf['regions:land'], e = this.Bf.water, f = this.Bf.sky, h = this.Bf.buildings); var k; var l; var m; var n; var p; var a = this.Aj; if (d) { c = 'rgba(0, 0, 0, 0)'; if (d.visible) { var q = this.Vp(b.P7(this.e.ve.substr(1)), d.opacity, d.color, !0, a); q && (c = this.Vz(q, d.visible, 'rgba(0, 0, 0, 0)'), q = this.fm(b.Qs(this.e.ve.substr(1)), d.opacity, d.color, !0, a), k = this.Vz(q, d.visible)) } this.e.vu = c } else this.e.vu = ''; e && e.visible && (l = this.fm(b.Qs(this.e.vH.substr(1)), e.opacity,
                e.color, !0, a), l = this.Vz(l, e.visible)); f && f.visible && (m = this.fm(b.Qs(this.e.JB.substr(1)), void 0, f.color, !0, a), m = this.Vz(m, f.visible)); h && (h.visible ? (n = this.fm(b.Rk(this.e.FF[0]), void 0, h.fillColor, !0, a), n = this.Vz(n, h.visible), p = this.fm(b.Rk(this.e.FF[1]), void 0, h.strokeColor, !0, a), p = this.Vz(p, h.visible)) : (n = [1, 1, 1, 0], p = [1, 1, 1, 0])); this.RS && this.RS(k, l, m, [n, p]); this.F9 ? this.F9(this.Bf) : this.set('display'); delete this.Qp; this.ZU(a)
        }
    }, Vz: function (a, b) {
        var c = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2] : [0, 0, 0, 0]; var d = g.a.Oh; if (d(a) && d(b)) { var e = a; a = function (a) { return b(a) ? e(a) : c } } return a
    }, Vp: function (a, b, c, d, e) { if (a) { if (void 0 !== b) return a = a.split(','), c = b, typeof b === 'function' && (c = b(e)), a[3] = g.a.mc(c, 3) + ')', a.join(','); if (c) return typeof c.canvas === 'function' ? d ? c.canvas : c.canvas(e) : c.canvas } return a }, fm: function (a, b, c, d, e) { if (a) { if (b) return c = b, typeof b === 'function' && (c = b(e)), [a[0], a[1], a[2], g.a.mc(c, 3)]; if (c) return typeof c.Qe === 'function' ? d ? c.Qe : c.Qe(e) : c.Qe } return a }, SI: function (a,
        b, c) { var d = this.Bf; if (d) { this.Qp && c && c == this.Qp.zoom && (d = this.Qp); if (b || b === 0) if (b = d[a + ':' + b]) return b; return d[a] } }, dm: function (a, b, c, d, e) {
        var f = null; var h = a; d = d ? this.Vp : this.fm; e = e || this.Aj; if (f = this.SI(b, void 0, e)) {
            if (typeof f.visible === 'function' && !f.visible(e) || !1 === f.visible)h = ''; else {
                var h = 1; var k = ''; if (c) if (f.fillColor || f.be)h = f.be, k = f.fillColor; else { if (f.color || f.opacity)h = f.opacity, k = f.color } else if (f.strokeColor || f.mb)h = f.mb, k = f.strokeColor; else if (f.color || f.opacity)h = f.opacity, k = f.color; h = d(a,
                    h, k, !1, e)
            }
        } this.ms === b && (h = this.Pu(h || a)); return h
    }, Rc: function (a, b, c) { var d = this.Bf; if (d) { this.Qp && c && c == this.Qp.zoom && (d = this.Qp); if (b || b === 0) if (b = d[a + ':' + b]) return b; return d[a] } }, Uu: function (a, b) { var c = null; return c = this.Rc(a, void 0, b || this.Aj) }, is: function (a, b, c, d) { c = c ? this.Vp : this.fm; var e = null; var f = a; d = d || this.Aj; (e = this.SI(b, void 0, d)) && (f = typeof e.visible === 'function' && !e.visible(d) || !1 === e.visible ? '' : c(a, e.opacity, e.color, !1, d)); this.ms === b && (f = this.Pu(f || a)); return f }, wy: function (a, b, c, d, e,
        f) {
        var h = a; var k = b; var l = c; var m = !0; var n = !0; var p; var q = 1; f = f || this.Aj; var r = this.SI(d, e, f); r && (typeof r.visible === 'function' && !r.visible(f) || !1 === r.visible || typeof r.mU === 'function' && !r.mU(f) || !1 === r.mU ? (n = m = !1, h = k = l = '') : (h = this.Vp(a, r.Cxa, r.Bxa, !1, f), k = this.Vp(b, r.Fxa, r.Exa, !1, f), l = this.Vp(c, r.Gla, r.backgroundColor, !1, f), m = typeof r.ok === 'function' ? r.ok(f) : r.ok, r.fontSize && (p = typeof r.fontSize === 'function' ? r.fontSize(f) : r.fontSize, p = p >= 12 ? p : 12, p = p <= 22 ? p : 22), p && g.l.Nc && (p *= 2))); f = !1; this.ms === d ? f = !0 : void 0 !== e && this.ms ===
d + '-' + e && (f = !0); f && (h = this.Pu(h || a), k = this.Pu(k || b), l = this.Pu(l || c), q = 1 - 1.6 * this.dD, n = m = !0); return [h, k, l, m, n, q, p]
    }, vy: function (a, b, c, d, e) { var f = null; var h = a; var k = b; d = d ? this.Vp : this.fm; var l = e || this.Aj; if (f = this.SI(c, void 0, e)) typeof f.visible === 'function' && !f.visible(l) || !1 === f.visible ? h = k = '' : (h = d(a, f.be, f.fillColor, !1, l), k = d(b, f.mb, f.strokeColor, !1, l)); this.ms === c && (b = k || b, h = this.Pu(h || a), k = this.Pu(b)); return [h, k] } }; g.M.Lb.zb(g.s2); g.M.canvas.Lb = g.M.Lb.extend({ r: function (a) { arguments.callee.la.apply(this, arguments) }, Qu: function (a) { if (!a.M) { var b = a.Ul(this); b && !b.yna && (a.M = b) } return a.M }, oc: function (a) {
        var b = this.e.k3(); b && this.AT !== b && this.e.C.yi && (this.e.f8(b), this.AT = b); this.e.Ta.Jr.style.cssText = ''; var c = a.ya; var b = a.R; var d = this.e.C.get('features'); var e = a.size.width; var f = a.size.height; this.Aj = this.e.C.Ke.baseRender === 'vw' ? g.a.mc(b.zoom, 1) : a.R.ne; this.S = b.S; if (!this.La || Math.abs(b.jb.x - this.La.x) / this.S > 1E4 || Math.abs(b.jb.y - this.La.y) /
this.S > 1E4) this.La = b.jb; this.La.x - b.jb.x < -g.a.Ea / 2 ? this.La = new g.H(this.La.x + g.a.Ea, this.La.y) : this.La.x - b.jb.x > g.a.Ea / 2 && (this.La = new g.H(this.La.x - g.a.Ea, this.La.y)); for (var h = 0; h < c.length; h += 1) {
            var k = c[h]; var l = this.Qu(k); var m = c[h].he(); if (l && l.f) {
                if (!m.visible || k.PJ || m.hb[0] > b.zoom || m.hb[1] < b.zoom || k.fa && k.fa.length === 0) { if (l = l.qj()) if (l.length) for (m = 0; m < l.length; m += 1)l[m].parentNode === this.K && this.K.removeChild(l[m]); else l.parentNode === this.K && this.K.removeChild(l) } else if (this.mS(k, d)) {
                    l.oc(a, m); l.un &&
(a.mf = l.mf); var k = l.qj(); var n; var p; var q = l.transform; if (!q || !k || l.Sg && !this.e.C.Ka)c[h].al && k.parentNode !== this.K && (this.K.appendChild(k), c[h].Mb = k); else {
                        c[h].Mb = k; k.length || (k = [k], q = [q]); for (var r = 0; r < k.length; r += 1) {
                            if (n = k[r], p = q[r], !p.Hy) {
                                var s = p.translate.x; var u = p.translate.y; c[h].qJ || (s = g.a.mc(s, 2), u = g.a.mc(u, 2)); var v = p.scale; Math.abs(s) < 1E-5 && (s = 0); Math.abs(u) < 1E-5 && (u = 0); var w = []; w.push('position:absolute'); w.push('z-index:' + (p.zk || c[h].get('zIndex'))); c[h].DC ? (w.push('top:' + Math.floor(f / 2 + u) + 'px'), w.push('left:' +
Math.floor(e / 2 + s) + 'px')) : n.d5 ? (w.push('height:' + n.height * v + 'px'), w.push('width:' + n.width * v + 'px'), w.push('top:' + (f / 2 - u * v) + 'px'), w.push('left:' + (e / 2 - s * v) + 'px')) : (v !== 1 && (w.push(g.j.at[g.j.ng] + '-origin:' + s + 'px ' + u + 'px'), w.push(g.j.at[g.j.ng] + ':scale3d(' + v + ',' + v + ',1)')), w.push('top:' + Math.floor(f / 2 - u) + 'px'), w.push('left:' + Math.floor(e / 2 - s) + 'px'), l.dk && (w.push('height:' + n.height + 'px'), w.push('width:' + n.width + 'px'))); l.qJ || m.opacity === 1 || typeof m.opacity !== 'number' || w.push(g.j.K3(n, m.opacity)); n.parentNode !==
this.K && this.K.appendChild(n); g.j.g8(n, w.join(';'))
                            }
                        }
                    }
                }
            }
        }a = this.e.Ta.Jr; k = this.e.Ta.o; c = this.e.Ta.A; g.j.ng && typeof b.rotation === 'number' && b.rotation !== 0 ? (a.style[g.j.ng + 'Origin'] = e / 2 + 'px ' + f / 2 + 'px', a.style[g.j.ng] = 'rotate(' + b.rotation + 'deg)', a.style.overflow = 'visible', k.style.overflow = 'visible', c.style.overflow = 'visible') : (a.style.cssText = '', k.style.cssText = '-webkit-transform: translateZ(0);', c.style.cssText = ''); this.e.Ov = !1
    }, mS: function (a, b) {
        if (b === 'all' || void 0 === a.Ql) return !0; for (var c = 0, d = a.Ql.length; c <
d; c++) if (g.a.ka(b, a.Ql[c] === 'region' ? 'bg' : a.Ql[c])) return !0; return !1
    }, zoomChanged: function () { var a = this.e.get('zoom'); this.Aj = this.e.C.Ke.baseRender === 'vw' ? g.a.mc(a, 1) : Math.round(a); this.Bf && this.ZU(this.Aj) } }); g.M.Ni = g.M.Vb.extend({ r: function (a, b) { arguments.callee.la.apply(this, arguments); this.W('reload', a, !0); var c = a.T.get('cacheSize'); if (this.e && this.e.C) { var d = this.e.C.get('tileCacheSize'); d && d > 0 && (c = d) } this.na = new g.mg(c); var e = this; this.na.WJ.f1(function (a) { e.IA(a) }); this.na.cC = function (a) { return a.Ub ? (a.Ub.dj -= 1, a.Ub.dj == 0 && (a.hv = !1), delete a.Ub, !0) : a.hv ? a.dj ? !1 : !0 : !0 }; this.dd = 1; this.Pn = 50; this.RW = !0; this.f.na = this.na; this.lm = new g.fF(6, null, a.DQ); new g.fF(5, null, a.DQ) }, pq: function () {
        this.clear()
        this.Bg = null; this.na.clear(); this.na.cC = null; this.na = this.na.WJ.AF = null; this.Hc && (this.Hc.G('tiles', this.GD, this), this.Hc.G('ack', this.FD, this), this.Hc.G('disable', this.DD, this), this.Hc = null); this.e.G('zoomend', this.Vj, this); this.e.G('moveend', this.Vj, this)
    }, reloadChanged: function () { this.f && (this.f.Ka = !1); this.na.clear(); this.reload = !0; this.set('display') }, vh: function (a, b, c) {
        function d (b) { a.loaded = !0; e.f && (a.status = 'loaded', a.xa = !0, a.xe = b, e.set('display', 0), typeof c === 'function' && c()) } var e = this
        a.status = 'loading'; this.f.po && this.f.po.call(this, a, d, function () { a.loaded = !0; e.f && (a.status = 'loaded', a.xa = !0, typeof c === 'function' && c()) })
    }, mHa: function (a, b, c, d) { var e = []; c = c || 18; b = Math.pow(2, b - c); for (var f = 0; f < a.length; f += 1) { var h = a[f].sa; var k = Math.floor(h.x / b); var h = Math.floor(h.y / b); if (d) { if (k = c + '/' + k + '/' + h, (h = this.na.get(k)) && h.status == 'loaded') continue } else h = new g.Xq(c, k, h), k = h + '', h = new g.ob(h); !e[k] && h && (e.push(h), e[k] = 1) } return e }, vI: function (a, b) {
        var c = this; var d = this; if (this.f.fH) {
            var e; var f; var h; var k; var l; var m
            var n; var p = (function () { var p = 0; for (e = a.length - 1; e >= 0; e -= 1)f = a[e], p += f.length; if (p == 0) return b.call(c, a), { eL: void 0 }; d.GU = a; for (e = a.length - 1; e >= 0; e -= 1) for (f = a[e], h = [], k = [], f.BT = h, f.uv = k, l = f.length - 1; l >= 0; l -= 1)m = f[l], n = m.sa, c.f.e.Dh.rE(n.x, n.y, n.z, (function () { var c = l; return function (e) { e ? h.push(f[c]) : k.push(f[c]); p -= 1; if (p == 0) { for (e = a.length - 1; e >= 0; e -= 1) { var l = a[e]; a[e] = l.BT; if (l.uv) for (var m = l.uv.length - 1; m >= 0; m -= 1) { var n = l.uv[m]; n.status = 'loaded'; n.loaded = !0; n.xa = !0 } }b.call(d, a) } } }())) }()); if (typeof p === 'object') return p.eL
        } else {
            b.call(this,
                a)
        }
    }, $v: function (a, b, c) { if (a = this.na.get(a + '/' + b + '/' + c)) { if (a.hv) return a; if (a.Ub) return a.Ub; a.hv = !0; a.dj = 0; return a } }, UI: function (a) { var b = a.sa; a = b.x; var c = b.y; var b = b.z; var d = Math.pow(2, b); var e = (a + d) % d; var f = e + d; var d = e - d; var h = null; e !== a && (h = this.$v(b, e, c)); h || d === a || (h = this.$v(b, d, c)); h || f === a || (h = this.$v(b, f, c)); return h }, wn: function (a) {
        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1; if (a.length) {
            if (this.tK) this.MJ = !0; else {
                for (var c = a.length - 1; c >= 0; c -= 1) {
                    var d = a[c]; if (d.length) {
                        for (var e = Math.pow(2, 20 -
d[0].sa.z), c = d.length - 1; c >= 0; c--) { var f = d[c]; var h = f.sa; h.S = e; f.ra = {}; f.ln = 0; if (h.z < 10) { var k = this.UI(f); k && (f.Ub = k, f.status = 'loaded', f.xa = !0, k.dj += 1, f.ln = (h.x - k.sa.x) / Math.pow(2, h.z), d.splice(c, 1), this.set('display', 0)) } this.na.set(f.key, f); !b && f.Ce ? f.Ce = !1 : f.status = 'loading' }
                    }
                } var l = this; this.vI(a, function (a) {
                    for (var c = a.length - 1; c >= 0; c -= 1) {
                        var d = a[c]; if (d.length) {
                            if (l.zi) { if (l.e.Nz) break; var e = d[0].sa.z; l.Pv(d, l.dk ? 1 : 0); for (var f = 0, h = 0; f < d.length;)l.DS(d.slice(10 * h, 10 * h + 10), e, b), f += 10, h += 1 } else {
                                for (e =
(function () { var a = d.length; return function () { if (--a === 0) { var b = { key: 'rb', index: 0, id: l.e.C.id }; l.f.T.kk || (g.ue.cf.end(b), g.ue.cf.end(g.extend(b, { index: 1 }))) } } }()), l.Pv(d), l.hq += d.length, f = d.length - 1; f >= 0; f -= 1)l.vh(d[f], l.lm, e)
                            }
                        }
                    }
                })
            }
        }
    }, Ay: function (a, b) { var c = this.na.get(a + ''); c || b || (c = new g.ob(a.lb())); return c }, LK: function (a, b) { return this.Ad * Math.pow(2, a - b) }, IA: function (a) { a.us && this.lm.M1(a.us); a.yK = !1; a.loaded = !1; this.Cf && this.Cf(a) }, Zx: function (a, b) {
        var c = (arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2] : 0) || this.bb; var d = a.Ud.x; var e = a.Ud.y; var f = a.fc.x; var h = a.fc.y; new g.H(0, 0); var k = this.LK(20, c); b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new g.H(Math.floor(b[0] / k), Math.floor(b[1] / k))); d /= k; e /= k; d = { Fc: d % 1 === 0 ? d - 1 : Math.floor(d), sc: e % 1 === 0 ? e - 1 : Math.floor(e), Gc: Math.floor(f / k), ec: Math.floor(h / k) }; d.VD = d.Fc - d.Gc + 1; d.lK = d.sc - d.ec + 1; d.z = c; d.S = this.S * Math.pow(2, this.zoom - c); d.Cy = Math.ceil(d.VD / 2); return d
    }, bv: function (a, b, c) {
        return b < a.Gc || b > a.Fc ||
c < a.ec || c > a.sc ? !1 : !0
    }, Pv: function (a, b) { if (a.length) { var c = this.jb.hd(this.Ad << 20 - a[0].sa.z); var d = Math.floor(c.x); var e = Math.floor(c.y); a.sort(function (a, c) { var k = a.sa; var l = c.sa; var m = k.x - d; var k = k.y - e; var n = l.x - d; var l = l.y - e; return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k)) }) } }, clear: function () { this.lm.clear() }, Vo: function (a, b) {
        this.rg = !1; this.clear(); this.Ti = b.Ti; this.Si = b.Si; this.Ad = b.Ad; var c = a.R; this.Ff = b.Ff || a.R.Ff; this.mh = c.mh; this.size = a.size; this.rotation = c.rotation; this.jb = c.jb; this.Ha = a.R.Ha; this.Nf = a.Nf; this.He = a.He; this.bg = a.bg
        this.zoom = c.zoom; this.ne = c.ne; this.bb = this.f.T.CLASS_NAME == 'AMap.MapBox' ? Math.max(2, this.ne - g.w.br) : !1 === this.zi && !this.f.XR && this.f.ja ? this.ne + 1 : this.ne; this.$e && this.bb > this.$e && (this.bb = this.$e); this.Oo && this.bb < this.Oo && (this.bb = this.Oo); this.S = c.S; this.zg = c.zg; c = a.R.Ha; this.hk = this.Zx(c, b.I); this.qw = c.d$ ? this.Zx(c.d$, b.I) : null; var c = this.hk; var d = this.Ha.T8; var e = null; var e = d < this.zoom && this.qw ? this.qw : c; var f = []; var h = []; var k; var l = []; var m = []; var n = []; var p = new g.Xq(0, 0, 0); var q; var r = this.zoom; var m = this.Gk || ''; var s = {}; var u = {}; var v; var w; var t; var x; var y; var F; this.$d =
1E6 * Math.random() << 0; for (q = m.length - 1; q >= 0; q -= 1) {
            if (k = m[q], !(k.Rw < b.opacity)) {
                if (p.z = k.sa.z, p.x = k.sa.x, p.y = k.sa.y, p.z === this.bb)s[p + ''] |= 16; else if (p.z < this.bb) { if (s[p + ''] |= 64, this.Ti) for (x = this.bb - p.z, v = Math.max(c.Gc, p.x << x), r = Math.min(c.Fc, (p.x + 1 << x) - 1), w = Math.max(c.ec, p.y << x), t = Math.min(c.sc, (p.y + 1 << x) - 1), p.z = this.bb, x = v; x <= r; x += 1) for (p.x = x, y = w; y <= t; y += 1)p.y = y, F = p + '', s[F] |= 32, u[F] = u[F] ? Math.max(k.sa.z, u[F]) : k.sa.z } else if (this.Si) {
                    for (v = 1; p.z >= this.bb;) {
                        s[p + ''] |= v; v = p.x >> 1; w = p.y >> 1; r = v << 1; t = w << 1
                        k = 0; for (x = 2; x > 0; x -= 1) for (p.x = r + x, y = 2; y > 0; y -= 1)p.y = t + y, s[p + ''] & 5 && (k += 1); p.z -= 1; p.x = v; p.y = w; v = k === 4 ? 4 : 2
                    }
                }
            }
        }m = []; p.z = this.bb; q = !0; this.na.Z1(); for (x = e.Gc; x <= e.Fc; x += 1) for (p.x = x, y = e.ec; y <= e.sc; y += 1)p.y = y, k = this.Ay(p), this.Mt(k), v = !1, k.xa ? (k.$d = this.$d, this.bv(c, x, y) && (m.push(k), this.Dk && (k.dd !== this.dd || k.Rw < 1) && (v = !0))) : (q = !1, this.bv(c, x, y) && (v = !0), k.status && !k.Ce || this.ne !== d || this.qw && !this.bv(this.qw, x, y) || l.push(k)), v && n.push(k); q ? (this.MC || (this.MC = !0), this.f.Ka || (k = { key: this.f.Sg ? 'rl' : 'rb', index: 1,
            id: this.e.C.id }, this.f.T.kk || (g.ue.cf.end(k), g.ue.cf.push({ key: 'ftc', Pe: m.length, id: this.e.C.id })))) : this.f.Ka = !1; this.rg = q; m.length && this.MC && (f.push(m), m.rg = q); h.push(l); d = !1; if (this.Si) {
            n = n.slice(0); e = []; for (q = n.length - 1; q >= 0; q -= 1)k = n[q], s[k.key] & 4 || e.push(k); k = b.hb[1]; for (r = this.bb + 1; n.length && r <= k; r += 1) {
                m = []; l = n; n = []; p.z = r; for (q = l.length - 1; q >= 0; q -= 1) {
                    if (x = l[q], v = s[x.key], v & 7) {
                        for (v = x.sa.x << 1, w = x.sa.y << 1, x = 1; x >= 0; x -= 1) {
                            for (p.x = v + x, y = 1; y >= 0; y -= 1) {
                                p.y = w + y, F = p + '', t = this.na.bK(F), s[F] & 5 && t && t.xa ? (t.nB =
!0, t.$d = this.$d, m.push(t), this.Mt(t)) : n.push(new g.ob(p.lb()))
                            }
                        }
                    }
                }m.length && (d = !0, f.push(m))
            }n = e
        } if (!d && this.Ti) {
            for (x = !f.length || this.dk ? b.hb[0] : Math.max(b.hb[0], this.bb - 2), Math.max(x, this.bb - this.sga), r = this.bb - 1; n.length && r >= x; r -= 1) {
                m = []; y = {}; l = n; n = []; for (q = l.length - 1; q >= 0; q -= 1) {
                    k = l[q], p.z = r, p.x = k.sa.x >> 1, p.y = k.sa.y >> 1, k = this.Ay(p), y[k.key] || (y[k.key] = 1, v = !1, k.xa && (!this.tia || s[k.key] & 64) ? (p.x = Math.min(c.Fc, Math.max(c.Gc, p.x << this.bb - r)), p.y = Math.min(c.sc, Math.max(c.ec, p.y << this.bb - r)), p.z = this.bb,
                    F = p + '', typeof u[F] === 'number' && k.sa.z > u[F] ? v = !0 : k.nB = !0, k.$d = this.$d, m.push(k), this.Mt(k)) : v = !0, v && n.push(k))
                }m.length && f.push(m)
            }
        } this.GU = h; this.nv = this.hq = 0; this.wn(h); this.Bg = f; this.f.set('tiles', f); this.Bv(a, b)
    }, Mt: function (a) { this.na.M5(a.QEa) }, rR: function (a, b) { for (var c = [], d = this.e.C.getCoordsBoundByZoom(a), d = this.Zx(d, b, a), e = d.Gc; e < d.Fc; e++) for (var f = d.ec; f < d.sc; f++) { var h = [a, e, f].join('/'); this.na.Id(h) || c.push(new g.ob(new g.Xq(a, e, f), !0)) } return c }, uM: function () {
        var a = this.e.C; return a.k7 &&
a.get('preloadMode') && this.na.up >= 200 && this.f.T.dq() && this.Nf != 'stable' && this.Ix && this.Ix() && this.zoom !== this.bb
    }, Bv: function (a, b) { var c = b.I; var d = b.hb; if (this.uM() && this.bb >= d[0] + 1) { var d = []; var e = null; var e = this.Nf === 'zoomOut' ? Math.floor(this.zoom) : Math.ceil(this.zoom); var e = this.rR(e, c); e.length && d.push(e); d.length && this.wn(d, !0) } } }); g.M.Yd.Ni = g.M.Ni.extend({ r: function (a, b) { arguments.callee.la.apply(this, arguments); this.Pn = 120; this.zi = !1; this.Pg(); this.$e = a.$e; this.Oo = a.Oo }, qj: function () { return this.Mb }, Pg: function () { this.Mb = document.createElement('div'); this.Mb.className = this.f.T.get('className') || 'amap-layer'; this.Ku = document.createDocumentFragment() }, Gv: function (a) { var b = Math.pow(2, a.R.zoom - this.vf); var c = a.R.jb.Za(this.vs).hd(this.sm); this.transform = { translate: this.transform.translate.add(c), scale: b, rotate: 0 }; this.jb = a.R.jb },
        wP: function (a, b) { this.La = this.J.La; this.vf = this.ne; this.sm = this.zg; this.oe = !1; this.currentTime = +new Date(); this.eV = b.eV; var c = this.hk; this.Dk = this.Pn && b.JH; var d = this.Bg; var e = 256 * c.VD; var c = 256 * c.lK; this.He = this.zoom << 0 !== this.zoom; var f = this.jb.Za(this.La); f.x < -g.a.Ea / 2 ? f.x += g.a.Ea : f.x > g.a.Ea / 2 && (f.x -= g.a.Ea); this.LP = f.hd(this.zg); return [d, e, c, b] }, sz: function (a, b) {
            var c = this.wP(a, b); this.Os.apply(this, c); this.Ge(a); this.rg && !this.f.Ka && (c = this.f, c.T.kk || g.ue.cf.end({ key: 'rb', index: 2, id: this.e.C.id }), c.Ka =
!0, c.Hd ? c.oa('renderComplete') : (c.Hd = !0, c.oa('complete')))
        }, oc: function (a, b) { this.Wq = a.Wq; this.bg = a.bg; this.Vo(a, b); this.vs && g.l.Rl && (a.He || a.bg) ? this.Gv(a, b) : this.sz(a, b); this.vs = this.jb; this.oe && this.set('display', 0) }, Fv: function () { for (var a = this.Mb.childNodes, b = a.length - 1; b >= 0; b -= 1)a[b] && a[b].dd !== this.dd && this.Mb.removeChild(a[b]) }, UD: function (a, b) { return a.ec === b.ec && a.Gc === b.Gc && a.sc === b.sc && a.Fc === b.Fc }, Os: function (a) {
            var b = this.dd; this.dd += 1; var c = !1; var d; var e; var f; e = !1; var h = []; var k; var l; for (d = a.length -
1; d >= 0; d -= 1) {
                if (f = a[d], f.length) {
                    e = f[0].sa.z; var m; var n; var p = this.LK(this.ne, e); var q = !1; this.un && f.rg && f[0].sa.z == this.bb && (k = [], l = [], q = !0); for (var r = f.length - 1; r >= 0; r -= 1) {
                        n = f[r]; q && n.fa && (k.push.apply(k, n.fa), l.push(n.sa + '')); this.RT(n); if (this.La === n.La && n.vf === this.vf) { var s = n.xe; if (s && s.parentNode === this.Mb && n.Rw === 1) { h.push(n); s.dd = this.dd; n.dd = this.dd; continue } }n.La = this.La; n.vf = this.vf; m = n.sa; var c = !0; var u = (new g.H((m.x << 20 - e) * this.Ad, (m.y << 20 - e) * this.Ad)).Za(this.La); var u = u.hd(this.zg); u.x = g.a.mc(u.x, 1)
                        u.y = g.a.mc(u.y, 1); var v = 1; if (!n.MX || this.RW && n.dd !== b)n.MX = this.currentTime; this.Dk && !n.nB ? (s = Math.max(0, Math.abs(m.z - this.zoom) - 1), v = Math.min(1, (this.currentTime - n.MX) / (1 / Math.pow(1.32, s) * this.Pn)), v !== 1 && (this.oe = !0)) : n.nB = !1; n.dd = this.dd; n.Rw = v; n.xa ? (s = n.xe, !s && n.Ub && n.Ub.xe && (s = n.Ub.xe), v !== 0 && s && (this.C3(s, u.x, u.y, p, p, v, m.z), s.parentNode !== this.Mb && (g.l.wi && this.f.get('type') === 'overlayer' && (s.style.display = 'none'), this.Ku.appendChild(s)), s.dd = this.dd, n.ne = this.ne, h.push(n))) : n.$d = null
                    }e = !0
                }
            } this.un &&
k && (r = l.sort().join(';'), k.rS = r, r !== this.mf.rS && (this.mf = k)); a.length > 1 && (this.oe = !0); this.Gk = h; this.Fv(); this.Mb.appendChild(this.Ku); return c || !e
        }, RT: function () {}, Ge: function () { this.transform = { translate: this.LP, scale: Math.pow(2, this.zoom - this.ne), rotate: 0 } } }); window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.iQ = function (a, b, c, d, e) {
        typeof e === 'undefined' && (e = [10, 10]); this.moveTo(a, b); var f = c - a; var h = d - b; var k = Math.floor(Math.sqrt(f * f + h * h)); d = f / k; c = h / k; e.yg = 0; for (var l = [], f = this.bI, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1)e.yg += e[q], l[q] = { IC: e[q] * d, JC: e[q] * c, Oy: h += e[q] }, f -= e[q], f < 0 && !p && (m = q, n = -f, p = !0); for (p = 0; n + p <= k;) {
            n < e[m] ? (f = n * d, h = n * c) : (f = l[m].IC, h = l[m].JC), a += f, b += h, this.lE ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.lE = !this.lE, n = e[(m + 1) %
e.length], m = (m + 1) % e.length
        }k -= p; a += k * d; b += k * c; this.lE ? this.moveTo(a, b) : this.lineTo(a, b); this.bI = (this.bI + p + k) % e.yg
    }, window.CanvasRenderingContext2D.prototype.Lna = function (a, b, c, d) { typeof d === 'undefined' && (d = [10, 10]); var e = 2 * Math.PI * c; var f = d <= 0 ? e : Math.round(e / (d[0] + d[1])); var h = (d[0] + d[1]) / e * 2 * Math.PI; d = d[0] / e * 2 * Math.PI; for (e = 0; e < f; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke() }); g.M.Ee.Bl = g.M.Ni.extend({ r: function (a, b) { arguments.callee.la.apply(this, arguments); this.Pg() }, vR: function () { return this.Xa.xU }, qj: function () { return this.Mb }, Pg: function () { this.Mb = document.createElement('div'); this.Mb.className = 'amap-markers'; this.Xa = new g.M.Ee.cd(this.Mb); this.Xa.f = this.f; this.J.K.appendChild(this.Mb) }, ht: function (a, b) {
        this.Ku = b.Ku; this.Ry = b; this.Ff = a.R.Ff; this.S = a.R.S; this.zoom = a.R.zoom; this.size = a.size; this.Ha = a.R.Ha; this.kq = a.S; this.kb = a.R.jb; this.mh = a.R.mh; var c = !1; if (!this.La ||
Math.abs(this.kb.x - this.La.x) / this.S > 500 || Math.abs(this.kb.y - this.La.y) / this.S > 500)c = !0; if (c || this.zoom << 0 !== this.zoom || this.vf !== this.zoom) this.La = this.kb, this.vf = this.zoom
    }, Tu: function (a) { var b = a.R.Ha.zc.y * this.S; a = a.R.Ha.zc.x * this.S; return [this.kb.x - a, this.kb.y - b, this.kb.x + a, this.kb.y + b] }, Fv: function () { if (this.Rh && this.Rh) for (var a in this.Rh) if (this.Rh.hasOwnProperty(a)) { var b = this.Rh[a]; b.$d !== this.$d && b.ca && this.J.Gl.appendChild(b.ca) } }, oc: function (a, b) {
        this.$d = 1E6 * Math.random() << 0; this.ht(a,
            b); this.R = a.R; this.size = a.size; var c = this.f; this.Ad = 256; var d, e; e = this.Tu(a); var f = 0; c.hm && (f = 50 * this.S); e[0] -= this.f.uf * this.S + f; e[1] -= this.f.gg * this.S + f; e[2] += this.f.uf * this.S + f; e[3] += this.f.gg * this.S + f; c = c.qn(e); for (d in c)c.hasOwnProperty(d) && (c[d].$d = this.$d, c[d].y5 = this); this.Fv(c); this.ht.call(this.Xa, a, b); this.Xa.aE(c); this.Rh = c; this.Ge(a)
    }, Ge: function () { var a = Math.pow(2, this.zoom - this.ne); this.transform = { translate: this.La.Za(this.kb).hd(this.S), scale: a, rotate: 0 } } }); g.M.Ee.cd = g.aa.extend({ r: function (a) { this.jl = a }, aE: function (a, b) {
        var c = document.createDocumentFragment(); var d = b && b.iS ? null : {}; var e = !0; var f; for (f in a) {
            if (a.hasOwnProperty(f)) {
                var h = a[f]; var k; var l = h.get('params'); if (h.ca)k = h.ca; else { k = g.j.create('div'); k.className = 'amap-marker'; var m = l.Lg; var n = l.r8; var p = l.sJ; m && k.appendChild(m); n && k.appendChild(n); p && !1 !== m.gM && k.appendChild(p); h.ca = k; h.Lg = m; if (n = l.title)m.title = n; this.f.hm = !0; g.a.indexOf(this.f.Vg, h) === -1 && this.f.Vg.push(h); h.ge = !0 } var p = l.offset; var q = p.x; var r = p.y; var s = l.textAlign
                var u = l.verticalAlign; var n = l.anchor; var m = !1; var v; var w; n && (n = n.split('-'), n.length === 2 ? (s = n[1], u = n[0]) : n.length === 1 && n[0] === 'center' && (s = 'center', u = 'middle')); var t; var n = t = 0; if (h.Fp == 'AMap.Text' || h.Fp == 'AMap.Marker') { if (w = v = 0, k.parentNode !== this.jl && d && (m = !0, d[f] = h, e = !1), !m) { h.ge || !h.Pj ? (t = g.j.yo(h.Lg), h.Pj = t) : t = h.Pj; n = t[0]; t = t[1]; switch (s) { case 'center':v = n / 2; break; case 'right':v = n } switch (u) { case 'middle':w = t / 2; break; case 'bottom':w = t }q -= v; r -= w } } else v = -q, w = -r; var x, y; if (!m) {
                    if (h.ge) {
                        var F = []; x = this.su(h.ia.wa); h.La =
this.La; y = l.WE; r = Math.round(x[1] + r + y.y); q = Math.round(x[0] + q + y.x); F.push('top:' + r + 'px'); F.push('left:' + q + 'px'); F.push('z-index:' + (l.k5 ? this.f.Mq + 10 : l.zIndex)); if (!g.l.Ae) { r = v; q = w; if (h.Fp == 'AMap.Marker') { r = -p.x; q = -p.y; switch (s) { case 'center':r = -p.x + n / 2; q = -p.y + t / 2; break; case 'right':r = -p.x + n } switch (u) { case 'middle':q = -p.y + t / 2; break; case 'bottom':q = -p.y + t } }F.push(g.j.V3(k, l.Dp, { x: r, y: q })) }F.push('display:' + (l.visible ? 'block' : 'none') + ';'); k.style.cssText = F.join(';'); if ((p = l.label) && p.content) {
                            l = l.sJ; s =
p.direction; r = null; h.kv || (r = g.j.yo(l), h.kv = r); u = (r = h.kv) && r[0]; w = r && r[1]; q = r = 0; if (s && u && w) switch (s) { case 'top':r = -w; q = (n - u) / 2; break; case 'right':r = (t - w) / 2; q = n; break; case 'bottom':r = t; q = (n - u) / 2; break; case 'left':r = (t - w) / 2; q = -u; break; case 'center':r = (t - w) / 2, q = (n - u) / 2 }p.offset ? (r = r + p.offset.y + 'px', q = q + p.offset.x + 'px') : (r += 'px', q += 'px'); l.style.top = r; l.style.left = q
                        }
                    } else if (h.saa || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.jl || h.La !== this.La) {
                        x = this.su(h.ia.wa), h.La = this.La, y = l.WE,
                        r = Math.round(x[1] + r + y.y), q = Math.round(x[0] + q + y.x), k.style.top = r + 'px', k.style.left = q + 'px'
                    }
                } h.zoom = this.zoom; k.parentNode !== this.jl && (g.l.wi && g.a.iepngFix(k), c.appendChild(k)); h.ge = m; k.qB = this.jl
            }
        } this.jl.appendChild(c); e || this.aE(d, { iS: !0 })
    }, su: function (a) { var b = a[0] - this.La.x; b > g.a.Ea / 2 ? b -= g.a.Ea : b < -g.a.Ea / 2 && (b += g.a.Ea); return [b / this.S, (a[1] - this.La.y) / this.S] } }); var Lc = g.w; var Rc = g.l; var fc = g.aa.zu; var Sc = g.Yua; var fa = document; var Tc = !0; var Uc = []; Rc.Jf && Uc.push('touch'); Rc.ba || Uc.push('mouse'); Rc.OK && (Uc.push('vectorlayer', 'overlay'), Rc.ep ? Uc.push('wgl') : Uc.push('cgl')); if (Sc) { for (var Vc = [], Wc = Sc.split(','), yc = 0; yc < Wc.length; yc += 1) { var Xc = Wc[yc]; fc[Xc] && Vc.push.apply(Vc, fc[Xc]); Vc.push(Xc) }Uc = Uc.concat(Vc) }Uc.push('sync')
    if (Rc.ov) { var Yc = !0; var Zc = []; var $c = []; try { for (var yc = 0, ad = Uc.length; yc < ad; yc++) { var bd = JSON.parse(localStorage.getItem('_AMap_' + Uc[yc])); if (bd && bd.version === Lc.Bm)Zc.push(bd.script), bd.css && $c.push(bd.css); else { Zc = void 0; Yc = !1; break } } } catch (cd) { Zc = $c = void 0, Yc = !1 } if (Yc) try { $c.length && dd(); var ed = Zc.join(';'); eval(ed) } catch (fd) { Tc = !1 } else Tc = !1 } else Tc = !1; if (Tc) for (yc = 0; yc < Uc.length; yc += 1)g.rb.wC(Uc[yc]).status = 1; else Lc.wJ = !1, gd()
    function hd () { for (var a = fa.getElementsByTagName('script'), b, c = 0; c < a.length; c += 1) if (a[c].src.indexOf(Lc.Gb + '/maps?') === 0) { b = a[c]; break } return Lc.Kc || b && b.async } function gd () { var a = Lc.Gb + '/maps/modules?v=' + Lc.yr + '&key=' + Lc.key + '&vrs=' + Lc.Bm + '&m=' + Uc.join(','); hd() ? id(a) : (fa.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'), setTimeout(function () { fa.getElementById('amap_plus_js') || id(a) }, 1)) }
    function id (a) { var b = fa.createElement('script'); b.charset = 'utf-8'; b.src = a; b.id = 'amap_plus_js'; (a = fa.head || fa.getElementsByTagName('head')[0] || fa.body) && a.appendChild(b) }
    function dd () { var a = $c.join('\n'); var b = fa.createElement('style'); b.type = 'text/css'; Lc.Gb.indexOf('webapi.amap.com') === -1 && (a = a.replace(/webapi.amap.com/gi, Lc.Gb.split('://')[1])); Lc.tc === 'https' && (a = a.replace(/http:/gi, 'https:')); if (b.styleSheet) { var c = function () { try { b.styleSheet.cssText = a } catch (c) {} }; b.styleSheet.disabled ? setTimeout(c, 10) : c() } else b.appendChild(fa.createTextNode(a)); c = fa.head || fa.getElementsByTagName('head')[0]; c.childNodes.length < 2 ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1]) }
})(['', [118.344933, 29.188757, 120.721945, 30.566516, 120.153576, 30.287459], 'https://webapi.amap.com', 1, '1.4.15', null, '330100', '', true, false, false, true, '1579008440-20200107-1', false])
