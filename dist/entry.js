var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/mime/Mime.js
var require_Mime = __commonJS({
  "node_modules/mime/Mime.js"(exports, module) {
    "use strict";
    function Mime() {
      this._types = Object.create(null);
      this._extensions = Object.create(null);
      for (let i = 0; i < arguments.length; i++) {
        this.define(arguments[i]);
      }
      this.define = this.define.bind(this);
      this.getType = this.getType.bind(this);
      this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t) {
          return t.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i = 0; i < extensions.length; i++) {
          const ext = extensions[i];
          if (ext[0] === "*") {
            continue;
          }
          if (!force && ext in this._types) {
            throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
          }
          this._types[ext] = type;
        }
        if (force || !this._extensions[type]) {
          const ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase();
      let ext = last.replace(/^.*\./, "").toLowerCase();
      let hasPath = last.length < path.length;
      let hasDot = ext.length < last.length - 1;
      return (hasDot || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
      return type && this._extensions[type.toLowerCase()] || null;
    };
    module.exports = Mime;
  }
});

// node_modules/mime/types/standard.js
var require_standard = __commonJS({
  "node_modules/mime/types/standard.js"(exports, module) {
    module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// node_modules/mime/types/other.js
var require_other = __commonJS({
  "node_modules/mime/types/other.js"(exports, module) {
    module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// node_modules/mime/index.js
var require_mime = __commonJS({
  "node_modules/mime/index.js"(exports, module) {
    "use strict";
    var Mime = require_Mime();
    module.exports = new Mime(require_standard(), require_other());
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.serialize = serialize;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var pairSplitRegExp = /; */;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var pairs = str.split(pairSplitRegExp);
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var eq_idx = pair.indexOf("=");
        if (eq_idx < 0) {
          continue;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] == '"') {
          val = val.slice(1, -1);
        }
        if (obj[key] == void 0) {
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/@remix-run/server-runtime/cookies.js
var require_cookies = __commonJS({
  "node_modules/@remix-run/server-runtime/cookies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cookie = require_cookie();
    function createCookie2(name, {
      secrets = [],
      ...options
    } = {}) {
      return {
        get name() {
          return name;
        },
        get isSigned() {
          return secrets.length > 0;
        },
        get expires() {
          return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
        },
        async parse(cookieHeader, parseOptions) {
          if (!cookieHeader)
            return null;
          let cookies = cookie.parse(cookieHeader, {
            ...options,
            ...parseOptions
          });
          return name in cookies ? cookies[name] === "" ? "" : await decodeCookieValue(cookies[name], secrets) : null;
        },
        async serialize(value, serializeOptions) {
          return cookie.serialize(name, value === "" ? "" : await encodeCookieValue(value, secrets), {
            ...options,
            ...serializeOptions
          });
        }
      };
    }
    function isCookie2(object) {
      return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
    }
    async function encodeCookieValue(value, secrets) {
      let encoded = encodeData(value);
      if (secrets.length > 0) {
        encoded = await sign(encoded, secrets[0]);
      }
      return encoded;
    }
    async function decodeCookieValue(value, secrets) {
      if (secrets.length > 0) {
        for (let secret of secrets) {
          let unsignedValue = await unsign(value, secret);
          if (unsignedValue !== false) {
            return decodeData(unsignedValue);
          }
        }
        return null;
      }
      return decodeData(value);
    }
    function encodeData(value) {
      return btoa(JSON.stringify(value));
    }
    function decodeData(value) {
      try {
        return JSON.parse(atob(value));
      } catch (error) {
        return {};
      }
    }
    exports.createCookie = createCookie2;
    exports.isCookie = isCookie2;
  }
});

// node_modules/@remix-run/server-runtime/responses.js
var require_responses = __commonJS({
  "node_modules/@remix-run/server-runtime/responses.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function json2(data, init = {}) {
      let responseInit = init;
      if (typeof init === "number") {
        responseInit = {
          status: init
        };
      }
      let headers = new Headers(responseInit.headers);
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json; charset=utf-8");
      }
      return new Response(JSON.stringify(data), {
        ...responseInit,
        headers
      });
    }
    function redirect2(url, init = 302) {
      let responseInit = init;
      if (typeof init === "number") {
        responseInit = {
          status: init
        };
      } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
      }
      let headers = new Headers(responseInit.headers);
      headers.set("Location", url);
      return new Response("", {
        ...responseInit,
        headers
      });
    }
    exports.json = json2;
    exports.redirect = redirect2;
  }
});

// node_modules/@remix-run/server-runtime/data.js
var require_data = __commonJS({
  "node_modules/@remix-run/server-runtime/data.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var responses = require_responses();
    async function loadRouteData(build2, routeId, request, context, params) {
      let routeModule = build2.routes[routeId].module;
      if (!routeModule.loader) {
        return Promise.resolve(responses.json(null));
      }
      let result;
      try {
        result = await routeModule.loader({
          request,
          context,
          params
        });
      } catch (error) {
        if (!isResponse(error)) {
          throw error;
        }
        if (!isRedirectResponse2(error)) {
          error.headers.set("X-Remix-Catch", "yes");
        }
        result = error;
      }
      if (result === void 0) {
        throw new Error(`You defined a loader for route "${routeId}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
      }
      return isResponse(result) ? result : responses.json(result);
    }
    async function callRouteAction(build2, routeId, request, context, params) {
      let routeModule = build2.routes[routeId].module;
      if (!routeModule.action) {
        throw new Error(`You made a ${request.method} request to ${request.url} but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`);
      }
      let result;
      try {
        result = await routeModule.action({
          request,
          context,
          params
        });
      } catch (error) {
        if (!isResponse(error)) {
          throw error;
        }
        if (!isRedirectResponse2(error)) {
          error.headers.set("X-Remix-Catch", "yes");
        }
        result = error;
      }
      if (result === void 0) {
        throw new Error(`You defined an action for route "${routeId}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
      }
      return isResponse(result) ? result : responses.json(result);
    }
    function isCatchResponse2(value) {
      return isResponse(value) && value.headers.get("X-Remix-Catch") != null;
    }
    function isResponse(value) {
      return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
    }
    var redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
    function isRedirectResponse2(response) {
      return redirectStatusCodes.has(response.status);
    }
    function extractData2(response) {
      let contentType = response.headers.get("Content-Type");
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        return response.json();
      }
      return response.text();
    }
    exports.callRouteAction = callRouteAction;
    exports.extractData = extractData2;
    exports.isCatchResponse = isCatchResponse2;
    exports.isRedirectResponse = isRedirectResponse2;
    exports.loadRouteData = loadRouteData;
  }
});

// node_modules/@remix-run/server-runtime/entry.js
var require_entry = __commonJS({
  "node_modules/@remix-run/server-runtime/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createEntryMatches(matches, routes) {
      return matches.map((match) => ({
        params: match.params,
        pathname: match.pathname,
        route: routes[match.route.id]
      }));
    }
    function createEntryRouteModules(manifest) {
      return Object.keys(manifest).reduce((memo, routeId) => {
        memo[routeId] = manifest[routeId].module;
        return memo;
      }, {});
    }
    exports.createEntryMatches = createEntryMatches;
    exports.createEntryRouteModules = createEntryRouteModules;
  }
});

// node_modules/@remix-run/server-runtime/errors.js
var require_errors = __commonJS({
  "node_modules/@remix-run/server-runtime/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    async function serializeError(error) {
      return {
        message: error.message,
        stack: error.stack
      };
    }
    exports.serializeError = serializeError;
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValue = parts.shift().split("=");
      var name = nameValue.shift();
      var value = nameValue.join("=");
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e);
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key] = value2;
        }
      });
      return cookie;
    }
    function parse(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key) {
          return key.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse;
    module.exports.parse = parse;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString;
  }
});

// node_modules/@remix-run/server-runtime/headers.js
var require_headers = __commonJS({
  "node_modules/@remix-run/server-runtime/headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var setCookieParser = require_set_cookie();
    function getDocumentHeaders(build2, matches, routeLoaderResponses, actionResponse) {
      return matches.reduce((parentHeaders, match, index) => {
        let routeModule = build2.routes[match.route.id].module;
        let loaderHeaders = routeLoaderResponses[index] ? routeLoaderResponses[index].headers : new Headers();
        let actionHeaders = actionResponse ? actionResponse.headers : new Headers();
        let headers = new Headers(routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
          loaderHeaders,
          parentHeaders,
          actionHeaders
        }) : routeModule.headers : void 0);
        prependCookies(actionHeaders, headers);
        prependCookies(loaderHeaders, headers);
        prependCookies(parentHeaders, headers);
        return headers;
      }, new Headers());
    }
    function prependCookies(parentHeaders, childHeaders) {
      let parentSetCookieString = parentHeaders.get("Set-Cookie");
      if (parentSetCookieString) {
        let cookies = setCookieParser.splitCookiesString(parentSetCookieString);
        cookies.forEach((cookie) => {
          childHeaders.append("Set-Cookie", cookie);
        });
      }
    }
    exports.getDocumentHeaders = getDocumentHeaders;
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = require_object_assign();
    var n = 60103;
    var p = 60106;
    exports.Fragment = 60107;
    exports.StrictMode = 60108;
    exports.Profiler = 60114;
    var q = 60109;
    var r = 60110;
    var t = 60112;
    exports.Suspense = 60113;
    var u = 60115;
    var v = 60116;
    if (typeof Symbol === "function" && Symbol.for) {
      w = Symbol.for;
      n = w("react.element");
      p = w("react.portal");
      exports.Fragment = w("react.fragment");
      exports.StrictMode = w("react.strict_mode");
      exports.Profiler = w("react.profiler");
      q = w("react.provider");
      r = w("react.context");
      t = w("react.forward_ref");
      exports.Suspense = w("react.suspense");
      u = w("react.memo");
      v = w("react.lazy");
    }
    var w;
    var x = typeof Symbol === "function" && Symbol.iterator;
    function y(a) {
      if (a === null || typeof a !== "object")
        return null;
      a = x && a[x] || a["@@iterator"];
      return typeof a === "function" ? a : null;
    }
    function z(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var A = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var B = {};
    function C(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = B;
      this.updater = c || A;
    }
    C.prototype.isReactComponent = {};
    C.prototype.setState = function(a, b) {
      if (typeof a !== "object" && typeof a !== "function" && a != null)
        throw Error(z(85));
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    C.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function D() {
    }
    D.prototype = C.prototype;
    function E(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = B;
      this.updater = c || A;
    }
    var F = E.prototype = new D();
    F.constructor = E;
    l(F, C.prototype);
    F.isPureReactComponent = true;
    var G = { current: null };
    var H = Object.prototype.hasOwnProperty;
    var I = { key: true, ref: true, __self: true, __source: true };
    function J(a, b, c) {
      var e, d = {}, k = null, h = null;
      if (b != null)
        for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
          H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
      var g = arguments.length - 2;
      if (g === 1)
        d.children = c;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        d.children = f;
      }
      if (a && a.defaultProps)
        for (e in g = a.defaultProps, g)
          d[e] === void 0 && (d[e] = g[e]);
      return { $$typeof: n, type: a, key: k, ref: h, props: d, _owner: G.current };
    }
    function K(a, b) {
      return { $$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function L(a) {
      return typeof a === "object" && a !== null && a.$$typeof === n;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var M = /\/+/g;
    function N(a, b) {
      return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
    }
    function O(a, b, c, e, d) {
      var k = typeof a;
      if (k === "undefined" || k === "boolean")
        a = null;
      var h = false;
      if (a === null)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case n:
              case p:
                h = true;
            }
        }
      if (h)
        return h = a, d = d(h), a = e === "" ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
          return a2;
        })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
      h = 0;
      e = e === "" ? "." : e + ":";
      if (Array.isArray(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = e + N(k, g);
          h += O(k, b, c, f, d);
        }
      else if (f = y(a), typeof f === "function")
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
      else if (k === "object")
        throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
      return h;
    }
    function P(a, b, c) {
      if (a == null)
        return a;
      var e = [], d = 0;
      O(a, e, "", "", function(a2) {
        return b.call(c, a2, d++);
      });
      return e;
    }
    function Q(a) {
      if (a._status === -1) {
        var b = a._result;
        b = b();
        a._status = 0;
        a._result = b;
        b.then(function(b2) {
          a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
        }, function(b2) {
          a._status === 0 && (a._status = 2, a._result = b2);
        });
      }
      if (a._status === 1)
        return a._result;
      throw a._result;
    }
    var R = { current: null };
    function S() {
      var a = R.current;
      if (a === null)
        throw Error(z(321));
      return a;
    }
    var T = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G, IsSomeRendererActing: { current: false }, assign: l };
    exports.Children = { map: P, forEach: function(a, b, c) {
      P(a, function() {
        b.apply(this, arguments);
      }, c);
    }, count: function(a) {
      var b = 0;
      P(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return P(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!L(a))
        throw Error(z(143));
      return a;
    } };
    exports.Component = C;
    exports.PureComponent = E;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
    exports.cloneElement = function(a, b, c) {
      if (a === null || a === void 0)
        throw Error(z(267, a));
      var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
      if (b != null) {
        b.ref !== void 0 && (k = b.ref, h = G.current);
        b.key !== void 0 && (d = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (f === 1)
        e.children = c;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        e.children = g;
      }
      return {
        $$typeof: n,
        type: a.type,
        key: d,
        ref: k,
        props: e,
        _owner: h
      };
    };
    exports.createContext = function(a, b) {
      b === void 0 && (b = null);
      a = { $$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
      a.Provider = { $$typeof: q, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = J;
    exports.createFactory = function(a) {
      var b = J.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: t, render: a };
    };
    exports.isValidElement = L;
    exports.lazy = function(a) {
      return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
    };
    exports.memo = function(a, b) {
      return { $$typeof: u, type: a, compare: b === void 0 ? null : b };
    };
    exports.useCallback = function(a, b) {
      return S().useCallback(a, b);
    };
    exports.useContext = function(a, b) {
      return S().useContext(a, b);
    };
    exports.useDebugValue = function() {
    };
    exports.useEffect = function(a, b) {
      return S().useEffect(a, b);
    };
    exports.useImperativeHandle = function(a, b, c) {
      return S().useImperativeHandle(a, b, c);
    };
    exports.useLayoutEffect = function(a, b) {
      return S().useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return S().useMemo(a, b);
    };
    exports.useReducer = function(a, b, c) {
      return S().useReducer(a, b, c);
    };
    exports.useRef = function(a) {
      return S().useRef(a);
    };
    exports.useState = function(a) {
      return S().useState(a);
    };
    exports.version = "17.0.2";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/history/umd/history.production.min.js
var require_history_production_min = __commonJS({
  "node_modules/history/umd/history.production.min.js"(exports, module) {
    "use strict";
    !function(t, n) {
      typeof exports == "object" && typeof module != "undefined" ? n(exports) : typeof define == "function" && define.amd ? define(["exports"], n) : n((t = typeof globalThis != "undefined" ? globalThis : t || self).HistoryLibrary = {});
    }(exports, function(t) {
      function n() {
        return (n = Object.assign || function(t2) {
          for (var n2 = 1; n2 < arguments.length; n2++) {
            var e2, r2 = arguments[n2];
            for (e2 in r2)
              Object.prototype.hasOwnProperty.call(r2, e2) && (t2[e2] = r2[e2]);
          }
          return t2;
        }).apply(this, arguments);
      }
      function e(t2) {
        t2.preventDefault(), t2.returnValue = "";
      }
      function r() {
        var t2 = [];
        return { get length() {
          return t2.length;
        }, push: function(n2) {
          return t2.push(n2), function() {
            t2 = t2.filter(function(t3) {
              return t3 !== n2;
            });
          };
        }, call: function(n2) {
          t2.forEach(function(t3) {
            return t3 && t3(n2);
          });
        } };
      }
      function o() {
        return Math.random().toString(36).substr(2, 8);
      }
      function a(t2) {
        var n2 = t2.pathname, e2 = t2.search;
        return (n2 === void 0 ? "/" : n2) + (e2 === void 0 ? "" : e2) + ((t2 = t2.hash) === void 0 ? "" : t2);
      }
      function i(t2) {
        var n2 = {};
        if (t2) {
          var e2 = t2.indexOf("#");
          0 <= e2 && (n2.hash = t2.substr(e2), t2 = t2.substr(0, e2)), 0 <= (e2 = t2.indexOf("?")) && (n2.search = t2.substr(e2), t2 = t2.substr(0, e2)), t2 && (n2.pathname = t2);
        }
        return n2;
      }
      var c;
      t.Action = void 0, (c = t.Action || (t.Action = {})).Pop = "POP", c.Push = "PUSH", c.Replace = "REPLACE", t.createBrowserHistory = function(c2) {
        function u() {
          var t2 = p.location, n2 = d.state || {};
          return [n2.idx, { pathname: t2.pathname, search: t2.search, hash: t2.hash, state: n2.usr || null, key: n2.key || "default" }];
        }
        function l(t2) {
          return typeof t2 == "string" ? t2 : a(t2);
        }
        function s(t2, e2) {
          return e2 === void 0 && (e2 = null), n({ pathname: m.pathname, hash: "", search: "" }, typeof t2 == "string" ? i(t2) : t2, { state: e2, key: o() });
        }
        function f(t2) {
          y = t2, t2 = u(), g = t2[0], m = t2[1], b.call({ action: y, location: m });
        }
        function h(t2) {
          d.go(t2);
        }
        c2 === void 0 && (c2 = {});
        var p = (c2 = c2.window) === void 0 ? document.defaultView : c2, d = p.history, v = null;
        p.addEventListener("popstate", function() {
          if (v)
            k.call(v), v = null;
          else {
            var n2 = t.Action.Pop, e2 = u(), r2 = e2[0];
            if (e2 = e2[1], k.length) {
              if (r2 != null) {
                var o2 = g - r2;
                o2 && (v = { action: n2, location: e2, retry: function() {
                  h(-1 * o2);
                } }, h(o2));
              }
            } else
              f(n2);
          }
        });
        var y = t.Action.Pop, g = (c2 = u())[0], m = c2[1], b = r(), k = r();
        return g == null && (g = 0, d.replaceState(n({}, d.state, { idx: g }), "")), { get action() {
          return y;
        }, get location() {
          return m;
        }, createHref: l, push: function n2(e2, r2) {
          var o2 = t.Action.Push, a2 = s(e2, r2);
          if (!k.length || (k.call({ action: o2, location: a2, retry: function() {
            n2(e2, r2);
          } }), 0)) {
            var i2 = [{ usr: a2.state, key: a2.key, idx: g + 1 }, l(a2)];
            a2 = i2[0], i2 = i2[1];
            try {
              d.pushState(a2, "", i2);
            } catch (t2) {
              p.location.assign(i2);
            }
            f(o2);
          }
        }, replace: function n2(e2, r2) {
          var o2 = t.Action.Replace, a2 = s(e2, r2);
          k.length && (k.call({ action: o2, location: a2, retry: function() {
            n2(e2, r2);
          } }), 1) || (a2 = [{ usr: a2.state, key: a2.key, idx: g }, l(a2)], d.replaceState(a2[0], "", a2[1]), f(o2));
        }, go: h, back: function() {
          h(-1);
        }, forward: function() {
          h(1);
        }, listen: function(t2) {
          return b.push(t2);
        }, block: function(t2) {
          var n2 = k.push(t2);
          return k.length === 1 && p.addEventListener("beforeunload", e), function() {
            n2(), k.length || p.removeEventListener("beforeunload", e);
          };
        } };
      }, t.createHashHistory = function(c2) {
        function u() {
          var t2 = i(d.location.hash.substr(1)), n2 = t2.pathname, e2 = t2.search;
          t2 = t2.hash;
          var r2 = v.state || {};
          return [r2.idx, { pathname: n2 === void 0 ? "/" : n2, search: e2 === void 0 ? "" : e2, hash: t2 === void 0 ? "" : t2, state: r2.usr || null, key: r2.key || "default" }];
        }
        function l() {
          if (y)
            P.call(y), y = null;
          else {
            var n2 = t.Action.Pop, e2 = u(), r2 = e2[0];
            if (e2 = e2[1], P.length) {
              if (r2 != null) {
                var o2 = m - r2;
                o2 && (y = { action: n2, location: e2, retry: function() {
                  p(-1 * o2);
                } }, p(o2));
              }
            } else
              h(n2);
          }
        }
        function s(t2) {
          var n2 = document.querySelector("base"), e2 = "";
          return n2 && n2.getAttribute("href") && (e2 = (e2 = (n2 = d.location.href).indexOf("#")) === -1 ? n2 : n2.slice(0, e2)), e2 + "#" + (typeof t2 == "string" ? t2 : a(t2));
        }
        function f(t2, e2) {
          return e2 === void 0 && (e2 = null), n({ pathname: b.pathname, hash: "", search: "" }, typeof t2 == "string" ? i(t2) : t2, { state: e2, key: o() });
        }
        function h(t2) {
          g = t2, t2 = u(), m = t2[0], b = t2[1], k.call({ action: g, location: b });
        }
        function p(t2) {
          v.go(t2);
        }
        c2 === void 0 && (c2 = {});
        var d = (c2 = c2.window) === void 0 ? document.defaultView : c2, v = d.history, y = null;
        d.addEventListener("popstate", l), d.addEventListener("hashchange", function() {
          a(u()[1]) !== a(b) && l();
        });
        var g = t.Action.Pop, m = (c2 = u())[0], b = c2[1], k = r(), P = r();
        return m == null && (m = 0, v.replaceState(n({}, v.state, { idx: m }), "")), { get action() {
          return g;
        }, get location() {
          return b;
        }, createHref: s, push: function n2(e2, r2) {
          var o2 = t.Action.Push, a2 = f(e2, r2);
          if (!P.length || (P.call({ action: o2, location: a2, retry: function() {
            n2(e2, r2);
          } }), 0)) {
            var i2 = [{ usr: a2.state, key: a2.key, idx: m + 1 }, s(a2)];
            a2 = i2[0], i2 = i2[1];
            try {
              v.pushState(a2, "", i2);
            } catch (t2) {
              d.location.assign(i2);
            }
            h(o2);
          }
        }, replace: function n2(e2, r2) {
          var o2 = t.Action.Replace, a2 = f(e2, r2);
          P.length && (P.call({ action: o2, location: a2, retry: function() {
            n2(e2, r2);
          } }), 1) || (a2 = [{ usr: a2.state, key: a2.key, idx: m }, s(a2)], v.replaceState(a2[0], "", a2[1]), h(o2));
        }, go: p, back: function() {
          p(-1);
        }, forward: function() {
          p(1);
        }, listen: function(t2) {
          return k.push(t2);
        }, block: function(t2) {
          var n2 = P.push(t2);
          return P.length === 1 && d.addEventListener("beforeunload", e), function() {
            n2(), P.length || d.removeEventListener("beforeunload", e);
          };
        } };
      }, t.createMemoryHistory = function(e2) {
        function c2(t2, e3) {
          return e3 === void 0 && (e3 = null), n({ pathname: v.pathname, search: "", hash: "" }, typeof t2 == "string" ? i(t2) : t2, { state: e3, key: o() });
        }
        function u(t2, n2, e3) {
          return !g.length || (g.call({ action: t2, location: n2, retry: e3 }), false);
        }
        function l(t2, n2) {
          d = t2, v = n2, y.call({ action: d, location: v });
        }
        function s(n2) {
          var e3 = Math.min(Math.max(p + n2, 0), h.length - 1), r2 = t.Action.Pop, o2 = h[e3];
          u(r2, o2, function() {
            s(n2);
          }) && (p = e3, l(r2, o2));
        }
        e2 === void 0 && (e2 = {});
        var f = e2;
        e2 = f.initialEntries, f = f.initialIndex;
        var h = (e2 === void 0 ? ["/"] : e2).map(function(t2) {
          return n({ pathname: "/", search: "", hash: "", state: null, key: o() }, typeof t2 == "string" ? i(t2) : t2);
        }), p = Math.min(Math.max(f == null ? h.length - 1 : f, 0), h.length - 1), d = t.Action.Pop, v = h[p], y = r(), g = r();
        return { get index() {
          return p;
        }, get action() {
          return d;
        }, get location() {
          return v;
        }, createHref: function(t2) {
          return typeof t2 == "string" ? t2 : a(t2);
        }, push: function n2(e3, r2) {
          var o2 = t.Action.Push, a2 = c2(e3, r2);
          u(o2, a2, function() {
            n2(e3, r2);
          }) && (p += 1, h.splice(p, h.length, a2), l(o2, a2));
        }, replace: function n2(e3, r2) {
          var o2 = t.Action.Replace, a2 = c2(e3, r2);
          u(o2, a2, function() {
            n2(e3, r2);
          }) && (h[p] = a2, l(o2, a2));
        }, go: s, back: function() {
          s(-1);
        }, forward: function() {
          s(1);
        }, listen: function(t2) {
          return y.push(t2);
        }, block: function(t2) {
          return g.push(t2);
        } };
      }, t.createPath = a, t.parsePath = i, Object.defineProperty(t, "__esModule", { value: true });
    });
  }
});

// node_modules/history/main.js
var require_main = __commonJS({
  "node_modules/history/main.js"(exports, module) {
    "use strict";
    module.exports = true ? require_history_production_min() : null;
  }
});

// node_modules/react-router/umd/react-router.production.min.js
var require_react_router_production_min = __commonJS({
  "node_modules/react-router/umd/react-router.production.min.js"(exports, module) {
    !function(e, t) {
      typeof exports == "object" && typeof module != "undefined" ? t(exports, require_react(), require_main()) : typeof define == "function" && define.amd ? define(["exports", "react", "history"], t) : t((e = e || self).ReactRouter = {}, e.React, e.HistoryLibrary);
    }(exports, function(e, t, n) {
      "use strict";
      function a(e2, t2) {
        if (!e2)
          throw new Error(t2);
      }
      const r = t.createContext(null), i = t.createContext(null), l = t.createContext({ outlet: null, matches: [] });
      function s(e2) {
        return f();
      }
      function o(e2) {
        a(false);
      }
      function u(e2) {
        let { basename: l2 = "/", children: s2 = null, location: o2, navigationType: u2 = n.Action.Pop, navigator: h2, static: p2 = false } = e2;
        c() && a(false);
        let f2 = B(l2), m2 = t.useMemo(() => ({ basename: f2, navigator: h2, static: p2 }), [f2, h2, p2]);
        typeof o2 == "string" && (o2 = n.parsePath(o2));
        let { pathname: d2 = "/", search: g2 = "", hash: v2 = "", state: y2 = null, key: x2 = "default" } = o2, C2 = t.useMemo(() => {
          let e3 = M(d2, f2);
          return e3 == null ? null : { pathname: e3, search: g2, hash: v2, state: y2, key: x2 };
        }, [f2, d2, g2, v2, y2, x2]);
        return C2 == null ? null : t.createElement(r.Provider, { value: m2 }, t.createElement(i.Provider, { children: s2, value: { location: C2, navigationType: u2 } }));
      }
      function c() {
        return t.useContext(i) != null;
      }
      function h() {
        return c() || a(false), t.useContext(i).location;
      }
      function p() {
        c() || a(false);
        let { basename: e2, navigator: n2 } = t.useContext(r), { matches: i2 } = t.useContext(l), { pathname: s2 } = h(), o2 = JSON.stringify(i2.map((e3) => e3.pathnameBase)), u2 = t.useRef(false);
        return t.useEffect(() => {
          u2.current = true;
        }), t.useCallback(function(t2, a2) {
          if (a2 === void 0 && (a2 = {}), !u2.current)
            return;
          if (typeof t2 == "number")
            return void n2.go(t2);
          let r2 = $(t2, JSON.parse(o2), s2);
          e2 !== "/" && (r2.pathname = W([e2, r2.pathname])), (a2.replace ? n2.replace : n2.push)(r2, a2.state);
        }, [e2, n2, o2, s2]);
      }
      function f() {
        return t.useContext(l).outlet;
      }
      function m(e2) {
        let { matches: n2 } = t.useContext(l), { pathname: a2 } = h(), r2 = JSON.stringify(n2.map((e3) => e3.pathnameBase));
        return t.useMemo(() => $(e2, JSON.parse(r2), a2), [e2, r2, a2]);
      }
      function d(e2, r2) {
        c() || a(false);
        let i2, { matches: s2 } = t.useContext(l), o2 = s2[s2.length - 1], u2 = o2 ? o2.params : {}, p2 = (o2 && o2.pathname, o2 ? o2.pathnameBase : "/"), f2 = (o2 && o2.route, h());
        if (r2) {
          var m2;
          let e3 = typeof r2 == "string" ? n.parsePath(r2) : r2;
          p2 === "/" || ((m2 = e3.pathname) == null ? void 0 : m2.startsWith(p2)) || a(false), i2 = e3;
        } else
          i2 = f2;
        let d2 = i2.pathname || "/", g2 = v(e2, { pathname: p2 === "/" ? d2 : d2.slice(p2.length) || "/" });
        return R(g2 && g2.map((e3) => Object.assign({}, e3, { params: Object.assign({}, u2, e3.params), pathname: W([p2, e3.pathname]), pathnameBase: e3.pathnameBase === "/" ? p2 : W([p2, e3.pathnameBase]) })), s2);
      }
      function g(e2) {
        let n2 = [];
        return t.Children.forEach(e2, (e3) => {
          if (!t.isValidElement(e3))
            return;
          if (e3.type === t.Fragment)
            return void n2.push.apply(n2, g(e3.props.children));
          e3.type !== o && a(false);
          let r2 = { caseSensitive: e3.props.caseSensitive, element: e3.props.element, index: e3.props.index, path: e3.props.path };
          e3.props.children && (r2.children = g(e3.props.children)), n2.push(r2);
        }), n2;
      }
      function v(e2, t2, a2) {
        a2 === void 0 && (a2 = "/");
        let r2 = M((typeof t2 == "string" ? n.parsePath(t2) : t2).pathname || "/", a2);
        if (r2 == null)
          return null;
        let i2 = y(e2);
        !function(e3) {
          e3.sort((e4, t3) => e4.score !== t3.score ? t3.score - e4.score : function(e5, t4) {
            return e5.length === t4.length && e5.slice(0, -1).every((e6, n2) => e6 === t4[n2]) ? e5[e5.length - 1] - t4[t4.length - 1] : 0;
          }(e4.routesMeta.map((e5) => e5.childrenIndex), t3.routesMeta.map((e5) => e5.childrenIndex)));
        }(i2);
        let l2 = null;
        for (let t3 = 0; l2 == null && t3 < i2.length; ++t3)
          l2 = E(i2[t3], e2, r2);
        return l2;
      }
      function y(e2, t2, n2, r2) {
        return t2 === void 0 && (t2 = []), n2 === void 0 && (n2 = []), r2 === void 0 && (r2 = ""), e2.forEach((e3, i2) => {
          let l2 = { relativePath: e3.path || "", caseSensitive: e3.caseSensitive === true, childrenIndex: i2 };
          l2.relativePath.startsWith("/") && (l2.relativePath.startsWith(r2) || a(false), l2.relativePath = l2.relativePath.slice(r2.length));
          let s2 = W([r2, l2.relativePath]), o2 = n2.concat(l2);
          e3.children && e3.children.length > 0 && (e3.index === true && a(false), y(e3.children, t2, o2, s2)), (e3.path != null || e3.index) && t2.push({ path: s2, score: P(s2, e3.index), routesMeta: o2 });
        }), t2;
      }
      const x = /^:\w+$/, C = (e2) => e2 === "*";
      function P(e2, t2) {
        let n2 = e2.split("/"), a2 = n2.length;
        return n2.some(C) && (a2 += -2), t2 && (a2 += 2), n2.filter((e3) => !C(e3)).reduce((e3, t3) => e3 + (x.test(t3) ? 3 : t3 === "" ? 1 : 10), a2);
      }
      function E(e2, t2, n2) {
        let a2 = t2, { routesMeta: r2 } = e2, i2 = {}, l2 = "/", s2 = [];
        for (let e3 = 0; e3 < r2.length; ++e3) {
          let t3 = r2[e3], o2 = e3 === r2.length - 1, u2 = l2 === "/" ? n2 : n2.slice(l2.length) || "/", c2 = S({ path: t3.relativePath, caseSensitive: t3.caseSensitive, end: o2 }, u2);
          if (!c2)
            return null;
          Object.assign(i2, c2.params);
          let h2 = a2[t3.childrenIndex];
          s2.push({ params: i2, pathname: W([l2, c2.pathname]), pathnameBase: W([l2, c2.pathnameBase]), route: h2 }), c2.pathnameBase !== "/" && (l2 = W([l2, c2.pathnameBase])), a2 = h2.children;
        }
        return s2;
      }
      function R(e2, n2) {
        return n2 === void 0 && (n2 = []), e2 == null ? null : e2.reduceRight((a2, r2, i2) => t.createElement(l.Provider, { children: r2.route.element !== void 0 ? r2.route.element : t.createElement(s, null), value: { outlet: a2, matches: n2.concat(e2.slice(0, i2 + 1)) } }), null);
      }
      function S(e2, t2) {
        typeof e2 == "string" && (e2 = { path: e2, caseSensitive: false, end: true });
        let [n2, a2] = function(e3, t3, n3) {
          t3 === void 0 && (t3 = false);
          n3 === void 0 && (n3 = true);
          let a3 = [], r3 = "^" + e3.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (e4, t4) => (a3.push(t4), "([^\\/]+)"));
          e3.endsWith("*") ? (a3.push("*"), r3 += e3 === "*" || e3 === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r3 += n3 ? "\\/*$" : "(?:\\b|$)";
          return [new RegExp(r3, t3 ? void 0 : "i"), a3];
        }(e2.path, e2.caseSensitive, e2.end), r2 = t2.match(n2);
        if (!r2)
          return null;
        let i2 = r2[0], l2 = i2.replace(/(.)\/+$/, "$1"), s2 = r2.slice(1);
        return { params: a2.reduce((e3, t3, n3) => {
          if (t3 === "*") {
            let e4 = s2[n3] || "";
            l2 = i2.slice(0, i2.length - e4.length).replace(/(.)\/+$/, "$1");
          }
          return e3[t3] = function(e4, t4) {
            try {
              return decodeURIComponent(e4);
            } catch (t5) {
              return e4;
            }
          }(s2[n3] || ""), e3;
        }, {}), pathname: i2, pathnameBase: l2, pattern: e2 };
      }
      function b(e2, t2) {
        t2 === void 0 && (t2 = "/");
        let { pathname: a2, search: r2 = "", hash: i2 = "" } = typeof e2 == "string" ? n.parsePath(e2) : e2, l2 = a2 ? a2.startsWith("/") ? a2 : function(e3, t3) {
          let n2 = t3.replace(/\/+$/, "").split("/");
          return e3.split("/").forEach((e4) => {
            e4 === ".." ? n2.length > 1 && n2.pop() : e4 !== "." && n2.push(e4);
          }), n2.length > 1 ? n2.join("/") : "/";
        }(a2, t2) : t2;
        return { pathname: l2, search: N(r2), hash: O(i2) };
      }
      function $(e2, t2, a2) {
        let r2, i2 = typeof e2 == "string" ? n.parsePath(e2) : e2, l2 = e2 === "" || i2.pathname === "" ? "/" : i2.pathname;
        if (l2 == null)
          r2 = a2;
        else {
          let e3 = t2.length - 1;
          if (l2.startsWith("..")) {
            let t3 = l2.split("/");
            for (; t3[0] === ".."; )
              t3.shift(), e3 -= 1;
            i2.pathname = t3.join("/");
          }
          r2 = e3 >= 0 ? t2[e3] : "/";
        }
        let s2 = b(i2, r2);
        return l2 && l2 !== "/" && l2.endsWith("/") && !s2.pathname.endsWith("/") && (s2.pathname += "/"), s2;
      }
      function M(e2, t2) {
        if (t2 === "/")
          return e2;
        if (!e2.toLowerCase().startsWith(t2.toLowerCase()))
          return null;
        let n2 = e2.charAt(t2.length);
        return n2 && n2 !== "/" ? null : e2.slice(t2.length) || "/";
      }
      const W = (e2) => e2.join("/").replace(/\/\/+/g, "/"), B = (e2) => e2.replace(/\/+$/, "").replace(/^\/*/, "/"), N = (e2) => e2 && e2 !== "?" ? e2.startsWith("?") ? e2 : "?" + e2 : "", O = (e2) => e2 && e2 !== "#" ? e2.startsWith("#") ? e2 : "#" + e2 : "";
      e.MemoryRouter = function(e2) {
        let { basename: a2, children: r2, initialEntries: i2, initialIndex: l2 } = e2, s2 = t.useRef();
        s2.current == null && (s2.current = n.createMemoryHistory({ initialEntries: i2, initialIndex: l2 }));
        let o2 = s2.current, [c2, h2] = t.useState({ action: o2.action, location: o2.location });
        return t.useLayoutEffect(() => o2.listen(h2), [o2]), t.createElement(u, { basename: a2, children: r2, location: c2.location, navigationType: c2.action, navigator: o2 });
      }, e.Navigate = function(e2) {
        let { to: n2, replace: r2, state: i2 } = e2;
        c() || a(false);
        let l2 = p();
        return t.useEffect(() => {
          l2(n2, { replace: r2, state: i2 });
        }), null;
      }, e.Outlet = s, e.Route = o, e.Router = u, e.Routes = function(e2) {
        let { children: t2, location: n2 } = e2;
        return d(g(t2), n2);
      }, e.UNSAFE_LocationContext = i, e.UNSAFE_NavigationContext = r, e.UNSAFE_RouteContext = l, e.createRoutesFromChildren = g, e.generatePath = function(e2, t2) {
        return t2 === void 0 && (t2 = {}), e2.replace(/:(\w+)/g, (e3, n2) => (t2[n2] == null && a(false), t2[n2])).replace(/\/*\*$/, (e3) => t2["*"] == null ? "" : t2["*"].replace(/^\/*/, "/"));
      }, e.matchPath = S, e.matchRoutes = v, e.renderMatches = function(e2) {
        return R(e2);
      }, e.resolvePath = b, e.useHref = function(e2) {
        c() || a(false);
        let { basename: i2, navigator: l2 } = t.useContext(r), { hash: s2, pathname: o2, search: u2 } = m(e2), h2 = o2;
        if (i2 !== "/") {
          let t2 = function(e3) {
            return e3 === "" || e3.pathname === "" ? "/" : typeof e3 == "string" ? n.parsePath(e3).pathname : e3.pathname;
          }(e2), a2 = t2 != null && t2.endsWith("/");
          h2 = o2 === "/" ? i2 + (a2 ? "/" : "") : W([i2, o2]);
        }
        return l2.createHref({ pathname: h2, search: u2, hash: s2 });
      }, e.useInRouterContext = c, e.useLocation = h, e.useMatch = function(e2) {
        return c() || a(false), S(e2, h().pathname);
      }, e.useNavigate = p, e.useNavigationType = function() {
        return t.useContext(i).navigationType;
      }, e.useOutlet = f, e.useParams = function() {
        let { matches: e2 } = t.useContext(l), n2 = e2[e2.length - 1];
        return n2 ? n2.params : {};
      }, e.useResolvedPath = m, e.useRoutes = d, Object.defineProperty(e, "__esModule", { value: true });
    });
  }
});

// node_modules/react-router/main.js
var require_main2 = __commonJS({
  "node_modules/react-router/main.js"(exports, module) {
    "use strict";
    module.exports = true ? require_react_router_production_min() : null;
  }
});

// node_modules/react-router-dom/umd/react-router-dom.production.min.js
var require_react_router_dom_production_min = __commonJS({
  "node_modules/react-router-dom/umd/react-router-dom.production.min.js"(exports, module) {
    !function(e, t) {
      typeof exports == "object" && typeof module != "undefined" ? t(exports, require_react(), require_main(), require_main2()) : typeof define == "function" && define.amd ? define(["exports", "react", "history", "react-router"], t) : t((e = e || self).ReactRouterDOM = {}, e.React, e.HistoryLibrary, e.ReactRouter);
    }(exports, function(e, t, r, n) {
      "use strict";
      function a() {
        return a = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var n2 in r2)
              Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
          }
          return e2;
        }, a.apply(this, arguments);
      }
      function o(e2, t2) {
        if (e2 == null)
          return {};
        var r2, n2, a2 = {}, o2 = Object.keys(e2);
        for (n2 = 0; n2 < o2.length; n2++)
          r2 = o2[n2], t2.indexOf(r2) >= 0 || (a2[r2] = e2[r2]);
        return a2;
      }
      const u = ["onClick", "reloadDocument", "replace", "state", "target", "to"], c = ["aria-current", "caseSensitive", "className", "end", "style", "to"];
      const i = t.forwardRef(function(e2, r2) {
        let { onClick: c2, reloadDocument: i2, replace: s2 = false, state: f2, target: d, to: b } = e2, y = o(e2, u), m = n.useHref(b), p = l(b, { replace: s2, state: f2, target: d });
        return t.createElement("a", a({}, y, { href: m, onClick: function(e3) {
          c2 && c2(e3), e3.defaultPrevented || i2 || p(e3);
        }, ref: r2, target: d }));
      }), s = t.forwardRef(function(e2, r2) {
        let { "aria-current": u2 = "page", caseSensitive: s2 = false, className: l2 = "", end: f2 = false, style: d, to: b } = e2, y = o(e2, c), m = n.useLocation(), p = n.useResolvedPath(b), g = m.pathname, h = p.pathname;
        s2 || (g = g.toLowerCase(), h = h.toLowerCase());
        let P, R = g === h || !f2 && g.startsWith(h) && g.charAt(h.length) === "/", O = R ? u2 : void 0;
        P = typeof l2 == "function" ? l2({ isActive: R }) : [l2, R ? "active" : null].filter(Boolean).join(" ");
        let v = typeof d == "function" ? d({ isActive: R }) : d;
        return t.createElement(i, a({}, y, { "aria-current": O, className: P, ref: r2, style: v, to: b }));
      });
      function l(e2, a2) {
        let { target: o2, replace: u2, state: c2 } = a2 === void 0 ? {} : a2, i2 = n.useNavigate(), s2 = n.useLocation(), l2 = n.useResolvedPath(e2);
        return t.useCallback((t2) => {
          if (!(t2.button !== 0 || o2 && o2 !== "_self" || function(e3) {
            return !!(e3.metaKey || e3.altKey || e3.ctrlKey || e3.shiftKey);
          }(t2))) {
            t2.preventDefault();
            let n2 = !!u2 || r.createPath(s2) === r.createPath(l2);
            i2(e2, { replace: n2, state: c2 });
          }
        }, [s2, i2, l2, u2, c2, o2, e2]);
      }
      function f(e2) {
        return e2 === void 0 && (e2 = ""), new URLSearchParams(typeof e2 == "string" || Array.isArray(e2) || e2 instanceof URLSearchParams ? e2 : Object.keys(e2).reduce((t2, r2) => {
          let n2 = e2[r2];
          return t2.concat(Array.isArray(n2) ? n2.map((e3) => [r2, e3]) : [[r2, n2]]);
        }, []));
      }
      Object.defineProperty(e, "MemoryRouter", { enumerable: true, get: function() {
        return n.MemoryRouter;
      } }), Object.defineProperty(e, "Navigate", { enumerable: true, get: function() {
        return n.Navigate;
      } }), Object.defineProperty(e, "Outlet", { enumerable: true, get: function() {
        return n.Outlet;
      } }), Object.defineProperty(e, "Route", { enumerable: true, get: function() {
        return n.Route;
      } }), Object.defineProperty(e, "Router", { enumerable: true, get: function() {
        return n.Router;
      } }), Object.defineProperty(e, "Routes", { enumerable: true, get: function() {
        return n.Routes;
      } }), Object.defineProperty(e, "UNSAFE_LocationContext", { enumerable: true, get: function() {
        return n.UNSAFE_LocationContext;
      } }), Object.defineProperty(e, "UNSAFE_NavigationContext", { enumerable: true, get: function() {
        return n.UNSAFE_NavigationContext;
      } }), Object.defineProperty(e, "UNSAFE_RouteContext", { enumerable: true, get: function() {
        return n.UNSAFE_RouteContext;
      } }), Object.defineProperty(e, "createRoutesFromChildren", { enumerable: true, get: function() {
        return n.createRoutesFromChildren;
      } }), Object.defineProperty(e, "generatePath", { enumerable: true, get: function() {
        return n.generatePath;
      } }), Object.defineProperty(e, "matchPath", { enumerable: true, get: function() {
        return n.matchPath;
      } }), Object.defineProperty(e, "matchRoutes", { enumerable: true, get: function() {
        return n.matchRoutes;
      } }), Object.defineProperty(e, "renderMatches", { enumerable: true, get: function() {
        return n.renderMatches;
      } }), Object.defineProperty(e, "resolvePath", { enumerable: true, get: function() {
        return n.resolvePath;
      } }), Object.defineProperty(e, "useHref", { enumerable: true, get: function() {
        return n.useHref;
      } }), Object.defineProperty(e, "useInRouterContext", { enumerable: true, get: function() {
        return n.useInRouterContext;
      } }), Object.defineProperty(e, "useLocation", { enumerable: true, get: function() {
        return n.useLocation;
      } }), Object.defineProperty(e, "useMatch", { enumerable: true, get: function() {
        return n.useMatch;
      } }), Object.defineProperty(e, "useNavigate", { enumerable: true, get: function() {
        return n.useNavigate;
      } }), Object.defineProperty(e, "useNavigationType", { enumerable: true, get: function() {
        return n.useNavigationType;
      } }), Object.defineProperty(e, "useOutlet", { enumerable: true, get: function() {
        return n.useOutlet;
      } }), Object.defineProperty(e, "useParams", { enumerable: true, get: function() {
        return n.useParams;
      } }), Object.defineProperty(e, "useResolvedPath", { enumerable: true, get: function() {
        return n.useResolvedPath;
      } }), Object.defineProperty(e, "useRoutes", { enumerable: true, get: function() {
        return n.useRoutes;
      } }), e.BrowserRouter = function(e2) {
        let { basename: a2, children: o2, window: u2 } = e2, c2 = t.useRef();
        c2.current == null && (c2.current = r.createBrowserHistory({ window: u2 }));
        let i2 = c2.current, [s2, l2] = t.useState({ action: i2.action, location: i2.location });
        return t.useLayoutEffect(() => i2.listen(l2), [i2]), t.createElement(n.Router, { basename: a2, children: o2, location: s2.location, navigationType: s2.action, navigator: i2 });
      }, e.HashRouter = function(e2) {
        let { basename: a2, children: o2, window: u2 } = e2, c2 = t.useRef();
        c2.current == null && (c2.current = r.createHashHistory({ window: u2 }));
        let i2 = c2.current, [s2, l2] = t.useState({ action: i2.action, location: i2.location });
        return t.useLayoutEffect(() => i2.listen(l2), [i2]), t.createElement(n.Router, { basename: a2, children: o2, location: s2.location, navigationType: s2.action, navigator: i2 });
      }, e.Link = i, e.NavLink = s, e.createSearchParams = f, e.useLinkClickHandler = l, e.useSearchParams = function(e2) {
        let r2 = t.useRef(f(e2)), a2 = n.useLocation(), o2 = t.useMemo(() => {
          let e3 = f(a2.search);
          for (let t2 of r2.current.keys())
            e3.has(t2) || r2.current.getAll(t2).forEach((r3) => {
              e3.append(t2, r3);
            });
          return e3;
        }, [a2.search]), u2 = n.useNavigate();
        return [o2, t.useCallback((e3, t2) => {
          u2("?" + f(e3), t2);
        }, [u2])];
      }, Object.defineProperty(e, "__esModule", { value: true });
    });
  }
});

// node_modules/react-router-dom/main.js
var require_main3 = __commonJS({
  "node_modules/react-router-dom/main.js"(exports, module) {
    "use strict";
    module.exports = true ? require_react_router_dom_production_min() : null;
  }
});

// node_modules/@remix-run/server-runtime/routeMatching.js
var require_routeMatching = __commonJS({
  "node_modules/@remix-run/server-runtime/routeMatching.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reactRouterDom = require_main3();
    function matchServerRoutes(routes, pathname) {
      let matches = reactRouterDom.matchRoutes(routes, pathname);
      if (!matches)
        return null;
      return matches.map((match) => ({
        params: match.params,
        pathname: match.pathname,
        route: match.route
      }));
    }
    exports.matchServerRoutes = matchServerRoutes;
  }
});

// node_modules/@remix-run/server-runtime/mode.js
var require_mode = __commonJS({
  "node_modules/@remix-run/server-runtime/mode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServerMode = void 0;
    (function(ServerMode) {
      ServerMode["Development"] = "development";
      ServerMode["Production"] = "production";
      ServerMode["Test"] = "test";
    })(exports.ServerMode || (exports.ServerMode = {}));
    function isServerMode(value) {
      return value === exports.ServerMode.Development || value === exports.ServerMode.Production || value === exports.ServerMode.Test;
    }
    exports.isServerMode = isServerMode;
  }
});

// node_modules/@remix-run/server-runtime/routes.js
var require_routes = __commonJS({
  "node_modules/@remix-run/server-runtime/routes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createRoutes(manifest, parentId) {
      return Object.keys(manifest).filter((key) => manifest[key].parentId === parentId).map((id) => ({
        ...manifest[id],
        children: createRoutes(manifest, id)
      }));
    }
    exports.createRoutes = createRoutes;
  }
});

// node_modules/@remix-run/server-runtime/routeData.js
var require_routeData = __commonJS({
  "node_modules/@remix-run/server-runtime/routeData.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var data = require_data();
    async function createRouteData(matches, responses) {
      let data$1 = await Promise.all(responses.map(data.extractData));
      return matches.reduce((memo, match, index) => {
        memo[match.route.id] = data$1[index];
        return memo;
      }, {});
    }
    async function createActionData(response) {
      return data.extractData(response);
    }
    exports.createActionData = createActionData;
    exports.createRouteData = createRouteData;
  }
});

// node_modules/jsesc/jsesc.js
var require_jsesc = __commonJS({
  "node_modules/jsesc/jsesc.js"(exports, module) {
    "use strict";
    var object = {};
    var hasOwnProperty = object.hasOwnProperty;
    var forOwn = (object2, callback) => {
      for (const key in object2) {
        if (hasOwnProperty.call(object2, key)) {
          callback(key, object2[key]);
        }
      }
    };
    var extend = (destination, source) => {
      if (!source) {
        return destination;
      }
      forOwn(source, (key, value) => {
        destination[key] = value;
      });
      return destination;
    };
    var forEach = (array, callback) => {
      const length = array.length;
      let index = -1;
      while (++index < length) {
        callback(array[index]);
      }
    };
    var fourHexEscape = (hex) => {
      return "\\u" + ("0000" + hex).slice(-4);
    };
    var hexadecimal = (code, lowercase) => {
      let hexadecimal2 = code.toString(16);
      if (lowercase)
        return hexadecimal2;
      return hexadecimal2.toUpperCase();
    };
    var toString = object.toString;
    var isArray = Array.isArray;
    var isBuffer = (value) => {
      return typeof Buffer === "function" && Buffer.isBuffer(value);
    };
    var isObject = (value) => {
      return toString.call(value) == "[object Object]";
    };
    var isString = (value) => {
      return typeof value == "string" || toString.call(value) == "[object String]";
    };
    var isNumber = (value) => {
      return typeof value == "number" || toString.call(value) == "[object Number]";
    };
    var isFunction = (value) => {
      return typeof value == "function";
    };
    var isMap = (value) => {
      return toString.call(value) == "[object Map]";
    };
    var isSet = (value) => {
      return toString.call(value) == "[object Set]";
    };
    var singleEscapes = {
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t"
    };
    var regexSingleEscape = /[\\\b\f\n\r\t]/;
    var regexDigit = /[0-9]/;
    var regexWhitespace = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    var escapeEverythingRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g;
    var escapeNonAsciiRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g;
    var jsesc = (argument, options) => {
      const increaseIndentation = () => {
        oldIndent = indent;
        ++options.indentLevel;
        indent = options.indent.repeat(options.indentLevel);
      };
      const defaults = {
        "escapeEverything": false,
        "minimal": false,
        "isScriptContext": false,
        "quotes": "single",
        "wrap": false,
        "es6": false,
        "json": false,
        "compact": true,
        "lowercaseHex": false,
        "numbers": "decimal",
        "indent": "	",
        "indentLevel": 0,
        "__inline1__": false,
        "__inline2__": false
      };
      const json2 = options && options.json;
      if (json2) {
        defaults.quotes = "double";
        defaults.wrap = true;
      }
      options = extend(defaults, options);
      if (options.quotes != "single" && options.quotes != "double" && options.quotes != "backtick") {
        options.quotes = "single";
      }
      const quote = options.quotes == "double" ? '"' : options.quotes == "backtick" ? "`" : "'";
      const compact = options.compact;
      const lowercaseHex = options.lowercaseHex;
      let indent = options.indent.repeat(options.indentLevel);
      let oldIndent = "";
      const inline1 = options.__inline1__;
      const inline2 = options.__inline2__;
      const newLine = compact ? "" : "\n";
      let result;
      let isEmpty = true;
      const useBinNumbers = options.numbers == "binary";
      const useOctNumbers = options.numbers == "octal";
      const useDecNumbers = options.numbers == "decimal";
      const useHexNumbers = options.numbers == "hexadecimal";
      if (json2 && argument && isFunction(argument.toJSON)) {
        argument = argument.toJSON();
      }
      if (!isString(argument)) {
        if (isMap(argument)) {
          if (argument.size == 0) {
            return "new Map()";
          }
          if (!compact) {
            options.__inline1__ = true;
            options.__inline2__ = false;
          }
          return "new Map(" + jsesc(Array.from(argument), options) + ")";
        }
        if (isSet(argument)) {
          if (argument.size == 0) {
            return "new Set()";
          }
          return "new Set(" + jsesc(Array.from(argument), options) + ")";
        }
        if (isBuffer(argument)) {
          if (argument.length == 0) {
            return "Buffer.from([])";
          }
          return "Buffer.from(" + jsesc(Array.from(argument), options) + ")";
        }
        if (isArray(argument)) {
          result = [];
          options.wrap = true;
          if (inline1) {
            options.__inline1__ = false;
            options.__inline2__ = true;
          }
          if (!inline2) {
            increaseIndentation();
          }
          forEach(argument, (value) => {
            isEmpty = false;
            if (inline2) {
              options.__inline2__ = false;
            }
            result.push((compact || inline2 ? "" : indent) + jsesc(value, options));
          });
          if (isEmpty) {
            return "[]";
          }
          if (inline2) {
            return "[" + result.join(", ") + "]";
          }
          return "[" + newLine + result.join("," + newLine) + newLine + (compact ? "" : oldIndent) + "]";
        } else if (isNumber(argument)) {
          if (json2) {
            return JSON.stringify(argument);
          }
          if (useDecNumbers) {
            return String(argument);
          }
          if (useHexNumbers) {
            let hexadecimal2 = argument.toString(16);
            if (!lowercaseHex) {
              hexadecimal2 = hexadecimal2.toUpperCase();
            }
            return "0x" + hexadecimal2;
          }
          if (useBinNumbers) {
            return "0b" + argument.toString(2);
          }
          if (useOctNumbers) {
            return "0o" + argument.toString(8);
          }
        } else if (!isObject(argument)) {
          if (json2) {
            return JSON.stringify(argument) || "null";
          }
          return String(argument);
        } else {
          result = [];
          options.wrap = true;
          increaseIndentation();
          forOwn(argument, (key, value) => {
            isEmpty = false;
            result.push((compact ? "" : indent) + jsesc(key, options) + ":" + (compact ? "" : " ") + jsesc(value, options));
          });
          if (isEmpty) {
            return "{}";
          }
          return "{" + newLine + result.join("," + newLine) + newLine + (compact ? "" : oldIndent) + "}";
        }
      }
      const regex = options.escapeEverything ? escapeEverythingRegex : escapeNonAsciiRegex;
      result = argument.replace(regex, (char, pair, lone, quoteChar, index, string) => {
        if (pair) {
          if (options.minimal)
            return pair;
          const first = pair.charCodeAt(0);
          const second = pair.charCodeAt(1);
          if (options.es6) {
            const codePoint = (first - 55296) * 1024 + second - 56320 + 65536;
            const hex2 = hexadecimal(codePoint, lowercaseHex);
            return "\\u{" + hex2 + "}";
          }
          return fourHexEscape(hexadecimal(first, lowercaseHex)) + fourHexEscape(hexadecimal(second, lowercaseHex));
        }
        if (lone) {
          return fourHexEscape(hexadecimal(lone.charCodeAt(0), lowercaseHex));
        }
        if (char == "\0" && !json2 && !regexDigit.test(string.charAt(index + 1))) {
          return "\\0";
        }
        if (quoteChar) {
          if (quoteChar == quote || options.escapeEverything) {
            return "\\" + quoteChar;
          }
          return quoteChar;
        }
        if (regexSingleEscape.test(char)) {
          return singleEscapes[char];
        }
        if (options.minimal && !regexWhitespace.test(char)) {
          return char;
        }
        const hex = hexadecimal(char.charCodeAt(0), lowercaseHex);
        if (json2 || hex.length > 2) {
          return fourHexEscape(hex);
        }
        return "\\x" + ("00" + hex).slice(-2);
      });
      if (quote == "`") {
        result = result.replace(/\$\{/g, "\\${");
      }
      if (options.isScriptContext) {
        result = result.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, json2 ? "\\u003C!--" : "\\x3C!--");
      }
      if (options.wrap) {
        result = quote + result + quote;
      }
      return result;
    };
    jsesc.version = "3.0.2";
    module.exports = jsesc;
  }
});

// node_modules/@remix-run/server-runtime/serverHandoff.js
var require_serverHandoff = __commonJS({
  "node_modules/@remix-run/server-runtime/serverHandoff.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var jsesc = require_jsesc();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var jsesc__default = /* @__PURE__ */ _interopDefaultLegacy(jsesc);
    function createServerHandoffString(serverHandoff) {
      return jsesc__default["default"](serverHandoff, {
        isScriptContext: true
      });
    }
    exports.createServerHandoffString = createServerHandoffString;
  }
});

// node_modules/@remix-run/server-runtime/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/server-runtime/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var data = require_data();
    var entry = require_entry();
    var errors = require_errors();
    var headers = require_headers();
    var routeMatching = require_routeMatching();
    var mode = require_mode();
    var routes = require_routes();
    var routeData = require_routeData();
    var responses = require_responses();
    var serverHandoff = require_serverHandoff();
    function getRequestType(request, matches) {
      if (isDataRequest(request)) {
        return "data";
      }
      if (!matches) {
        return "document";
      }
      let match = matches.slice(-1)[0];
      if (!match.route.module.default) {
        return "resource";
      }
      return "document";
    }
    function createRequestHandler2(build2, platform, mode$1) {
      let routes$1 = routes.createRoutes(build2.routes);
      let serverMode = mode.isServerMode(mode$1) ? mode$1 : mode.ServerMode.Production;
      return async (request, loadContext = {}) => {
        let url = new URL(request.url);
        let matches = routeMatching.matchServerRoutes(routes$1, url.pathname);
        let requestType = getRequestType(request, matches);
        let response;
        switch (requestType) {
          case "data":
            response = await handleDataRequest(request, loadContext, build2, platform, matches);
            break;
          case "document":
            response = await handleDocumentRequest(request, loadContext, build2, platform, routes$1, serverMode);
            break;
          case "resource":
            response = await handleResourceRequest(request, loadContext, build2, platform, matches);
            break;
        }
        if (isHeadRequest(request)) {
          return new Response(null, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
          });
        }
        return response;
      };
    }
    async function handleResourceRequest(request, loadContext, build2, platform, matches) {
      let url = new URL(request.url);
      if (!matches) {
        return jsonError(`No route matches URL "${url.pathname}"`, 404);
      }
      let routeMatch = matches.slice(-1)[0];
      try {
        return isActionRequest(request) ? await data.callRouteAction(build2, routeMatch.route.id, request, loadContext, routeMatch.params) : await data.loadRouteData(build2, routeMatch.route.id, request, loadContext, routeMatch.params);
      } catch (error) {
        var _platform$formatServe;
        let formattedError = await ((_platform$formatServe = platform.formatServerError) === null || _platform$formatServe === void 0 ? void 0 : _platform$formatServe.call(platform, error)) || error;
        throw formattedError;
      }
    }
    async function handleDataRequest(request, loadContext, build2, platform, matches) {
      if (!isValidRequestMethod(request)) {
        return jsonError(`Invalid request method "${request.method}"`, 405);
      }
      let url = new URL(request.url);
      if (!matches) {
        return jsonError(`No route matches URL "${url.pathname}"`, 404);
      }
      let routeMatch;
      if (isActionRequest(request)) {
        routeMatch = matches[matches.length - 1];
        if (!isIndexRequestUrl(url) && matches[matches.length - 1].route.id.endsWith("/index")) {
          routeMatch = matches[matches.length - 2];
        }
      } else {
        let routeId = url.searchParams.get("_data");
        if (!routeId) {
          return jsonError(`Missing route id in ?_data`, 403);
        }
        let match = matches.find((match2) => match2.route.id === routeId);
        if (!match) {
          return jsonError(`Route "${routeId}" does not match URL "${url.pathname}"`, 403);
        }
        routeMatch = match;
      }
      let clonedRequest = stripIndexParam(stripDataParam(request));
      let response;
      try {
        response = isActionRequest(request) ? await data.callRouteAction(build2, routeMatch.route.id, clonedRequest, loadContext, routeMatch.params) : await data.loadRouteData(build2, routeMatch.route.id, clonedRequest, loadContext, routeMatch.params);
      } catch (error) {
        var _platform$formatServe2;
        let formattedError = await ((_platform$formatServe2 = platform.formatServerError) === null || _platform$formatServe2 === void 0 ? void 0 : _platform$formatServe2.call(platform, error)) || error;
        response = responses.json(await errors.serializeError(formattedError), {
          status: 500,
          headers: {
            "X-Remix-Error": "unfortunately, yes"
          }
        });
      }
      if (data.isRedirectResponse(response)) {
        let headers2 = new Headers(response.headers);
        headers2.set("X-Remix-Redirect", headers2.get("Location"));
        headers2.delete("Location");
        return new Response(null, {
          status: 204,
          headers: headers2
        });
      }
      if (build2.entry.module.handleDataRequest) {
        clonedRequest = stripIndexParam(stripDataParam(request));
        return build2.entry.module.handleDataRequest(response, {
          request: clonedRequest,
          context: loadContext,
          params: routeMatch.params
        });
      }
      return response;
    }
    async function handleDocumentRequest(request, loadContext, build2, platform, routes2, serverMode) {
      let url = new URL(request.url);
      let requestState = isValidRequestMethod(request) ? "ok" : "invalid-request";
      let matches = requestState === "ok" ? routeMatching.matchServerRoutes(routes2, url.pathname) : null;
      if (!matches) {
        if (requestState === "ok") {
          requestState = "no-match";
        }
        matches = [{
          params: {},
          pathname: "",
          route: routes2[0]
        }];
      }
      let componentDidCatchEmulator = {
        trackBoundaries: true,
        trackCatchBoundaries: true,
        catchBoundaryRouteId: null,
        renderBoundaryRouteId: null,
        loaderBoundaryRouteId: null,
        error: void 0,
        catch: void 0
      };
      let responseState = "ok";
      let actionResponse;
      let actionRouteId;
      if (requestState !== "ok") {
        responseState = "caught";
        componentDidCatchEmulator.trackCatchBoundaries = false;
        let withBoundaries = getMatchesUpToDeepestBoundary(matches, "CatchBoundary");
        componentDidCatchEmulator.catchBoundaryRouteId = withBoundaries.length > 0 ? withBoundaries[withBoundaries.length - 1].route.id : null;
        componentDidCatchEmulator.catch = {
          status: requestState === "no-match" ? 404 : 405,
          statusText: requestState === "no-match" ? "Not Found" : "Method Not Allowed",
          data: null
        };
      } else if (isActionRequest(request)) {
        let actionMatch = matches[matches.length - 1];
        if (!isIndexRequestUrl(url) && actionMatch.route.id.endsWith("/index")) {
          actionMatch = matches[matches.length - 2];
        }
        actionRouteId = actionMatch.route.id;
        try {
          let clonedRequest = stripIndexParam(stripDataParam(request));
          actionResponse = await data.callRouteAction(build2, actionMatch.route.id, clonedRequest, loadContext, actionMatch.params);
          if (data.isRedirectResponse(actionResponse)) {
            return actionResponse;
          }
        } catch (error) {
          var _platform$formatServe3;
          let formattedError = await ((_platform$formatServe3 = platform.formatServerError) === null || _platform$formatServe3 === void 0 ? void 0 : _platform$formatServe3.call(platform, error)) || error;
          responseState = "error";
          let withBoundaries = getMatchesUpToDeepestBoundary(matches, "ErrorBoundary");
          componentDidCatchEmulator.loaderBoundaryRouteId = withBoundaries[withBoundaries.length - 1].route.id;
          componentDidCatchEmulator.error = await errors.serializeError(formattedError);
        }
      }
      if (actionResponse && data.isCatchResponse(actionResponse)) {
        responseState = "caught";
        let withBoundaries = getMatchesUpToDeepestBoundary(matches, "CatchBoundary");
        componentDidCatchEmulator.trackCatchBoundaries = false;
        componentDidCatchEmulator.catchBoundaryRouteId = withBoundaries[withBoundaries.length - 1].route.id;
        componentDidCatchEmulator.catch = {
          status: actionResponse.status,
          statusText: actionResponse.statusText,
          data: await data.extractData(actionResponse.clone())
        };
      }
      let matchesToLoad = requestState !== "ok" ? [] : matches;
      switch (responseState) {
        case "caught":
          matchesToLoad = getMatchesUpToDeepestBoundary(matches.slice(0, -1), "CatchBoundary");
          break;
        case "error":
          matchesToLoad = getMatchesUpToDeepestBoundary(matches.slice(0, -1), "ErrorBoundary");
          break;
      }
      let routeLoaderPromises = matchesToLoad.map((match) => data.loadRouteData(build2, match.route.id, stripIndexParam(stripDataParam(request.clone())), loadContext, match.params).catch((error) => error));
      let routeLoaderResults = await Promise.all(routeLoaderPromises);
      for (let [index, response2] of routeLoaderResults.entries()) {
        let route = matches[index].route;
        let routeModule = build2.routes[route.id].module;
        if (responseState === "error" && (response2 instanceof Error || data.isRedirectResponse(response2)) || responseState === "caught" && data.isCatchResponse(response2)) {
          break;
        }
        if (componentDidCatchEmulator.catch || componentDidCatchEmulator.error) {
          continue;
        }
        if (routeModule.CatchBoundary) {
          componentDidCatchEmulator.catchBoundaryRouteId = route.id;
        }
        if (routeModule.ErrorBoundary) {
          componentDidCatchEmulator.loaderBoundaryRouteId = route.id;
        }
        if (response2 instanceof Error) {
          var _platform$formatServe4;
          if (serverMode !== mode.ServerMode.Test) {
            console.error(`There was an error running the data loader for route ${route.id}`);
          }
          let formattedError = await ((_platform$formatServe4 = platform.formatServerError) === null || _platform$formatServe4 === void 0 ? void 0 : _platform$formatServe4.call(platform, response2)) || response2;
          componentDidCatchEmulator.error = await errors.serializeError(formattedError);
          routeLoaderResults[index] = responses.json(null, {
            status: 500
          });
        } else if (data.isRedirectResponse(response2)) {
          return response2;
        } else if (data.isCatchResponse(response2)) {
          componentDidCatchEmulator.trackCatchBoundaries = false;
          componentDidCatchEmulator.catch = {
            status: response2.status,
            statusText: response2.statusText,
            data: await data.extractData(response2.clone())
          };
          routeLoaderResults[index] = responses.json(null, {
            status: response2.status
          });
        }
      }
      let routeLoaderResponses = routeLoaderResults;
      let notOkResponse = [actionResponse, ...routeLoaderResponses].find((response2) => response2 && response2.status !== 200);
      let statusCode = requestState === "no-match" ? 404 : requestState === "invalid-request" ? 405 : responseState === "error" ? 500 : notOkResponse ? notOkResponse.status : 200;
      let renderableMatches = getRenderableMatches(matches, componentDidCatchEmulator);
      let serverEntryModule = build2.entry.module;
      let headers$1 = headers.getDocumentHeaders(build2, renderableMatches, routeLoaderResponses, actionResponse);
      let entryMatches = entry.createEntryMatches(renderableMatches, build2.assets.routes);
      let routeData$1 = await routeData.createRouteData(renderableMatches, routeLoaderResponses);
      let actionData = actionResponse && actionRouteId ? {
        [actionRouteId]: await routeData.createActionData(actionResponse)
      } : void 0;
      let routeModules = entry.createEntryRouteModules(build2.routes);
      let serverHandoff$1 = {
        matches: entryMatches,
        componentDidCatchEmulator,
        routeData: routeData$1,
        actionData
      };
      let entryContext = {
        ...serverHandoff$1,
        manifest: build2.assets,
        routeModules,
        serverHandoffString: serverHandoff.createServerHandoffString(serverHandoff$1)
      };
      let response;
      try {
        response = await serverEntryModule.default(request, statusCode, headers$1, entryContext);
      } catch (error) {
        var _platform$formatServe5;
        let formattedError = await ((_platform$formatServe5 = platform.formatServerError) === null || _platform$formatServe5 === void 0 ? void 0 : _platform$formatServe5.call(platform, error)) || error;
        if (serverMode !== mode.ServerMode.Test) {
          console.error(formattedError);
        }
        statusCode = 500;
        componentDidCatchEmulator.trackBoundaries = false;
        componentDidCatchEmulator.error = await errors.serializeError(formattedError);
        entryContext.serverHandoffString = serverHandoff.createServerHandoffString(serverHandoff$1);
        try {
          response = await serverEntryModule.default(request, statusCode, headers$1, entryContext);
        } catch (error2) {
          var _platform$formatServe6;
          let formattedError2 = await ((_platform$formatServe6 = platform.formatServerError) === null || _platform$formatServe6 === void 0 ? void 0 : _platform$formatServe6.call(platform, error2)) || error2;
          if (serverMode !== mode.ServerMode.Test) {
            console.error(formattedError2);
          }
          response = new Response(`Unexpected Server Error

${formattedError2.message}`, {
            status: 500,
            headers: {
              "Content-Type": "text/plain"
            }
          });
        }
      }
      return response;
    }
    function jsonError(error, status = 403) {
      return responses.json({
        error
      }, {
        status
      });
    }
    function isActionRequest(request) {
      let method = request.method.toLowerCase();
      return method === "post" || method === "put" || method === "patch" || method === "delete";
    }
    function isValidRequestMethod(request) {
      return request.method.toLowerCase() === "get" || isHeadRequest(request) || isActionRequest(request);
    }
    function isHeadRequest(request) {
      return request.method.toLowerCase() === "head";
    }
    function isDataRequest(request) {
      return new URL(request.url).searchParams.has("_data");
    }
    function isIndexRequestUrl(url) {
      let indexRequest = false;
      for (let param of url.searchParams.getAll("index")) {
        if (!param) {
          indexRequest = true;
        }
      }
      return indexRequest;
    }
    function stripIndexParam(request) {
      let url = new URL(request.url);
      let indexValues = url.searchParams.getAll("index");
      url.searchParams.delete("index");
      let indexValuesToKeep = [];
      for (let indexValue of indexValues) {
        if (indexValue) {
          indexValuesToKeep.push(indexValue);
        }
      }
      for (let toKeep of indexValuesToKeep) {
        url.searchParams.append("index", toKeep);
      }
      return new Request(url.toString(), request);
    }
    function stripDataParam(request) {
      let url = new URL(request.url);
      url.searchParams.delete("_data");
      return new Request(url.toString(), request);
    }
    function getMatchesUpToDeepestBoundary(matches, key) {
      let deepestBoundaryIndex = -1;
      matches.forEach((match, index) => {
        if (match.route.module[key]) {
          deepestBoundaryIndex = index;
        }
      });
      if (deepestBoundaryIndex === -1) {
        return [];
      }
      return matches.slice(0, deepestBoundaryIndex + 1);
    }
    function getRenderableMatches(matches, componentDidCatchEmulator) {
      if (!componentDidCatchEmulator.catch && !componentDidCatchEmulator.error) {
        return matches;
      }
      let lastRenderableIndex = -1;
      matches.forEach((match, index) => {
        let id = match.route.id;
        if (componentDidCatchEmulator.renderBoundaryRouteId === id || componentDidCatchEmulator.loaderBoundaryRouteId === id || componentDidCatchEmulator.catchBoundaryRouteId === id) {
          lastRenderableIndex = index;
        }
      });
      return matches.slice(0, lastRenderableIndex + 1);
    }
    exports.createRequestHandler = createRequestHandler2;
  }
});

// node_modules/@remix-run/server-runtime/warnings.js
var require_warnings = __commonJS({
  "node_modules/@remix-run/server-runtime/warnings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var alreadyWarned = {};
    function warnOnce(condition, message) {
      if (!condition && !alreadyWarned[message]) {
        alreadyWarned[message] = true;
        console.warn(message);
      }
    }
    exports.warnOnce = warnOnce;
  }
});

// node_modules/@remix-run/server-runtime/sessions.js
var require_sessions = __commonJS({
  "node_modules/@remix-run/server-runtime/sessions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cookies = require_cookies();
    var warnings = require_warnings();
    function flash(name) {
      return `__flash_${name}__`;
    }
    function createSession2(initialData = {}, id = "") {
      let map = new Map(Object.entries(initialData));
      return {
        get id() {
          return id;
        },
        get data() {
          return Object.fromEntries(map);
        },
        has(name) {
          return map.has(name) || map.has(flash(name));
        },
        get(name) {
          if (map.has(name))
            return map.get(name);
          let flashName = flash(name);
          if (map.has(flashName)) {
            let value = map.get(flashName);
            map.delete(flashName);
            return value;
          }
          return void 0;
        },
        set(name, value) {
          map.set(name, value);
        },
        flash(name, value) {
          map.set(flash(name), value);
        },
        unset(name) {
          map.delete(name);
        }
      };
    }
    function isSession2(object) {
      return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
    }
    function createSessionStorage2({
      cookie: cookieArg,
      createData,
      readData,
      updateData,
      deleteData
    }) {
      let cookie = cookies.isCookie(cookieArg) ? cookieArg : cookies.createCookie(cookieArg && cookieArg.name || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          let id = cookieHeader && await cookie.parse(cookieHeader, options);
          let data = id && await readData(id);
          return createSession2(data || {}, id || "");
        },
        async commitSession(session, options) {
          let {
            id,
            data
          } = session;
          if (id) {
            await updateData(id, data, cookie.expires);
          } else {
            id = await createData(data, cookie.expires);
          }
          return cookie.serialize(id, options);
        },
        async destroySession(session, options) {
          await deleteData(session.id);
          return cookie.serialize("", {
            ...options,
            expires: new Date(0)
          });
        }
      };
    }
    function warnOnceAboutSigningSessionCookie(cookie) {
      warnings.warnOnce(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server.`);
    }
    exports.createSession = createSession2;
    exports.createSessionStorage = createSessionStorage2;
    exports.isSession = isSession2;
    exports.warnOnceAboutSigningSessionCookie = warnOnceAboutSigningSessionCookie;
  }
});

// node_modules/@remix-run/server-runtime/sessions/cookieStorage.js
var require_cookieStorage = __commonJS({
  "node_modules/@remix-run/server-runtime/sessions/cookieStorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cookies = require_cookies();
    var sessions = require_sessions();
    function createCookieSessionStorage2({
      cookie: cookieArg
    } = {}) {
      let cookie = cookies.isCookie(cookieArg) ? cookieArg : cookies.createCookie(cookieArg && cookieArg.name || "__session", cookieArg);
      sessions.warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          return sessions.createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
        },
        async commitSession(session, options) {
          return cookie.serialize(session.data, options);
        },
        async destroySession(_session, options) {
          return cookie.serialize("", {
            ...options,
            expires: new Date(0)
          });
        }
      };
    }
    exports.createCookieSessionStorage = createCookieSessionStorage2;
  }
});

// node_modules/@remix-run/server-runtime/sessions/memoryStorage.js
var require_memoryStorage = __commonJS({
  "node_modules/@remix-run/server-runtime/sessions/memoryStorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sessions = require_sessions();
    function createMemorySessionStorage2({
      cookie
    } = {}) {
      let uniqueId = 0;
      let map = new Map();
      return sessions.createSessionStorage({
        cookie,
        async createData(data, expires) {
          let id = (++uniqueId).toString();
          map.set(id, {
            data,
            expires
          });
          return id;
        },
        async readData(id) {
          if (map.has(id)) {
            let {
              data,
              expires
            } = map.get(id);
            if (!expires || expires > new Date()) {
              return data;
            }
            if (expires)
              map.delete(id);
          }
          return null;
        },
        async updateData(id, data, expires) {
          map.set(id, {
            data,
            expires
          });
        },
        async deleteData(id) {
          map.delete(id);
        }
      });
    }
    exports.createMemorySessionStorage = createMemorySessionStorage2;
  }
});

// node_modules/@remix-run/server-runtime/index.js
var require_server_runtime = __commonJS({
  "node_modules/@remix-run/server-runtime/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cookies = require_cookies();
    var responses = require_responses();
    var server = require_server();
    var sessions = require_sessions();
    var cookieStorage = require_cookieStorage();
    var memoryStorage = require_memoryStorage();
    exports.createCookie = cookies.createCookie;
    exports.isCookie = cookies.isCookie;
    exports.json = responses.json;
    exports.redirect = responses.redirect;
    exports.createRequestHandler = server.createRequestHandler;
    exports.createSession = sessions.createSession;
    exports.createSessionStorage = sessions.createSessionStorage;
    exports.isSession = sessions.isSession;
    exports.createCookieSessionStorage = cookieStorage.createCookieSessionStorage;
    exports.createMemorySessionStorage = memoryStorage.createMemorySessionStorage;
  }
});

// node_modules/react-dom/cjs/react-dom-server.browser.production.min.js
var require_react_dom_server_browser_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.browser.production.min.js"(exports) {
    "use strict";
    var l = require_object_assign();
    var m = require_react();
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var q = 60106;
    var r = 60107;
    var u = 60108;
    var z = 60114;
    var B = 60109;
    var aa = 60110;
    var ba = 60112;
    var D = 60113;
    var ca = 60120;
    var da = 60115;
    var ea = 60116;
    var fa = 60121;
    var ha = 60117;
    var ia = 60119;
    var ja = 60129;
    var ka = 60131;
    if (typeof Symbol === "function" && Symbol.for) {
      E = Symbol.for;
      q = E("react.portal");
      r = E("react.fragment");
      u = E("react.strict_mode");
      z = E("react.profiler");
      B = E("react.provider");
      aa = E("react.context");
      ba = E("react.forward_ref");
      D = E("react.suspense");
      ca = E("react.suspense_list");
      da = E("react.memo");
      ea = E("react.lazy");
      fa = E("react.block");
      ha = E("react.fundamental");
      ia = E("react.scope");
      ja = E("react.debug_trace_mode");
      ka = E("react.legacy_hidden");
    }
    var E;
    function F(a) {
      if (a == null)
        return null;
      if (typeof a === "function")
        return a.displayName || a.name || null;
      if (typeof a === "string")
        return a;
      switch (a) {
        case r:
          return "Fragment";
        case q:
          return "Portal";
        case z:
          return "Profiler";
        case u:
          return "StrictMode";
        case D:
          return "Suspense";
        case ca:
          return "SuspenseList";
      }
      if (typeof a === "object")
        switch (a.$$typeof) {
          case aa:
            return (a.displayName || "Context") + ".Consumer";
          case B:
            return (a._context.displayName || "Context") + ".Provider";
          case ba:
            var b = a.render;
            b = b.displayName || b.name || "";
            return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
          case da:
            return F(a.type);
          case fa:
            return F(a._render);
          case ea:
            b = a._payload;
            a = a._init;
            try {
              return F(a(b));
            } catch (c) {
            }
        }
      return null;
    }
    var la = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var ma = {};
    function I(a, b) {
      for (var c = a._threadCount | 0; c <= b; c++)
        a[c] = a._currentValue2, a._threadCount = c + 1;
    }
    function na(a, b, c, d) {
      if (d && (d = a.contextType, typeof d === "object" && d !== null))
        return I(d, c), d[c];
      if (a = a.contextTypes) {
        c = {};
        for (var f in a)
          c[f] = b[f];
        b = c;
      } else
        b = ma;
      return b;
    }
    for (J = new Uint16Array(16), K = 0; 15 > K; K++)
      J[K] = K + 1;
    var J;
    var K;
    J[15] = 0;
    var oa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var pa = Object.prototype.hasOwnProperty;
    var qa = {};
    var ra = {};
    function sa(a) {
      if (pa.call(ra, a))
        return true;
      if (pa.call(qa, a))
        return false;
      if (oa.test(a))
        return ra[a] = true;
      qa[a] = true;
      return false;
    }
    function ta(a, b, c, d) {
      if (c !== null && c.type === 0)
        return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d)
            return false;
          if (c !== null)
            return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return a !== "data-" && a !== "aria-";
        default:
          return false;
      }
    }
    function ua(a, b, c, d) {
      if (b === null || typeof b === "undefined" || ta(a, b, c, d))
        return true;
      if (d)
        return false;
      if (c !== null)
        switch (c.type) {
          case 3:
            return !b;
          case 4:
            return b === false;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
      return false;
    }
    function M(a, b, c, d, f, h, t) {
      this.acceptsBooleans = b === 2 || b === 3 || b === 4;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = h;
      this.removeEmptyString = t;
    }
    var N = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      N[a] = new M(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      N[b] = new M(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      N[a] = new M(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      N[a] = new M(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      N[a] = new M(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      N[a] = new M(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      N[a] = new M(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      N[a] = new M(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      N[a] = new M(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var va = /[\-:]([a-z])/g;
    function wa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(va, wa);
      N[b] = new M(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(va, wa);
      N[b] = new M(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(va, wa);
      N[b] = new M(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      N[a] = new M(a, 1, false, a.toLowerCase(), null, false, false);
    });
    N.xlinkHref = new M("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      N[a] = new M(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var xa = /["'&<>]/;
    function O(a) {
      if (typeof a === "boolean" || typeof a === "number")
        return "" + a;
      a = "" + a;
      var b = xa.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    function ya(a, b) {
      var c = N.hasOwnProperty(a) ? N[a] : null;
      var d;
      if (d = a !== "style")
        d = c !== null ? c.type === 0 : !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? false : true;
      if (d || ua(a, b, c, false))
        return "";
      if (c !== null) {
        a = c.attributeName;
        d = c.type;
        if (d === 3 || d === 4 && b === true)
          return a + '=""';
        c.sanitizeURL && (b = "" + b);
        return a + '="' + (O(b) + '"');
      }
      return sa(a) ? a + '="' + (O(b) + '"') : "";
    }
    function za(a, b) {
      return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var Aa = typeof Object.is === "function" ? Object.is : za;
    var P = null;
    var Q = null;
    var R = null;
    var S = false;
    var T = false;
    var U = null;
    var V = 0;
    function W() {
      if (P === null)
        throw Error(p(321));
      return P;
    }
    function Ba() {
      if (0 < V)
        throw Error(p(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function Ca() {
      R === null ? Q === null ? (S = false, Q = R = Ba()) : (S = true, R = Q) : R.next === null ? (S = false, R = R.next = Ba()) : (S = true, R = R.next);
      return R;
    }
    function Da(a, b, c, d) {
      for (; T; )
        T = false, V += 1, R = null, c = a(b, d);
      Ea();
      return c;
    }
    function Ea() {
      P = null;
      T = false;
      Q = null;
      V = 0;
      R = U = null;
    }
    function Fa(a, b) {
      return typeof b === "function" ? b(a) : b;
    }
    function Ga(a, b, c) {
      P = W();
      R = Ca();
      if (S) {
        var d = R.queue;
        b = d.dispatch;
        if (U !== null && (c = U.get(d), c !== void 0)) {
          U.delete(d);
          d = R.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (c !== null);
          R.memoizedState = d;
          return [d, b];
        }
        return [R.memoizedState, b];
      }
      a = a === Fa ? typeof b === "function" ? b() : b : c !== void 0 ? c(b) : b;
      R.memoizedState = a;
      a = R.queue = { last: null, dispatch: null };
      a = a.dispatch = Ha.bind(null, P, a);
      return [R.memoizedState, a];
    }
    function Ia(a, b) {
      P = W();
      R = Ca();
      b = b === void 0 ? null : b;
      if (R !== null) {
        var c = R.memoizedState;
        if (c !== null && b !== null) {
          var d = c[1];
          a:
            if (d === null)
              d = false;
            else {
              for (var f = 0; f < d.length && f < b.length; f++)
                if (!Aa(b[f], d[f])) {
                  d = false;
                  break a;
                }
              d = true;
            }
          if (d)
            return c[0];
        }
      }
      a = a();
      R.memoizedState = [a, b];
      return a;
    }
    function Ha(a, b, c) {
      if (!(25 > V))
        throw Error(p(301));
      if (a === P)
        if (T = true, a = { action: c, next: null }, U === null && (U = new Map()), c = U.get(b), c === void 0)
          U.set(b, a);
        else {
          for (b = c; b.next !== null; )
            b = b.next;
          b.next = a;
        }
    }
    function Ja() {
    }
    var X = null;
    var Ka = { readContext: function(a) {
      var b = X.threadID;
      I(a, b);
      return a[b];
    }, useContext: function(a) {
      W();
      var b = X.threadID;
      I(a, b);
      return a[b];
    }, useMemo: Ia, useReducer: Ga, useRef: function(a) {
      P = W();
      R = Ca();
      var b = R.memoizedState;
      return b === null ? (a = { current: a }, R.memoizedState = a) : b;
    }, useState: function(a) {
      return Ga(Fa, a);
    }, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return Ia(function() {
        return a;
      }, b);
    }, useImperativeHandle: Ja, useEffect: Ja, useDebugValue: Ja, useDeferredValue: function(a) {
      W();
      return a;
    }, useTransition: function() {
      W();
      return [function(a) {
        a();
      }, false];
    }, useOpaqueIdentifier: function() {
      return (X.identifierPrefix || "") + "R:" + (X.uniqueID++).toString(36);
    }, useMutableSource: function(a, b) {
      W();
      return b(a._source);
    } };
    var La = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
    function Ma(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    var Na = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
    var Oa = l({ menuitem: true }, Na);
    var Y = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var Pa = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Y).forEach(function(a) {
      Pa.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        Y[b] = Y[a];
      });
    });
    var Qa = /([A-Z])/g;
    var Ra = /^ms-/;
    var Z = m.Children.toArray;
    var Sa = la.ReactCurrentDispatcher;
    var Ta = { listing: true, pre: true, textarea: true };
    var Ua = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Va = {};
    var Wa = {};
    function Xa(a) {
      if (a === void 0 || a === null)
        return a;
      var b = "";
      m.Children.forEach(a, function(a2) {
        a2 != null && (b += a2);
      });
      return b;
    }
    var Ya = Object.prototype.hasOwnProperty;
    var Za = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
    function $a(a, b) {
      if (a === void 0)
        throw Error(p(152, F(b) || "Component"));
    }
    function ab(a, b, c) {
      function d(d2, h2) {
        var e = h2.prototype && h2.prototype.isReactComponent, f2 = na(h2, b, c, e), t = [], g = false, n = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
          if (t === null)
            return null;
        }, enqueueReplaceState: function(a2, c2) {
          g = true;
          t = [c2];
        }, enqueueSetState: function(a2, c2) {
          if (t === null)
            return null;
          t.push(c2);
        } };
        if (e) {
          if (e = new h2(d2.props, f2, n), typeof h2.getDerivedStateFromProps === "function") {
            var k = h2.getDerivedStateFromProps.call(null, d2.props, e.state);
            k != null && (e.state = l({}, e.state, k));
          }
        } else if (P = {}, e = h2(d2.props, f2, n), e = Da(h2, d2.props, e, f2), e == null || e.render == null) {
          a = e;
          $a(a, h2);
          return;
        }
        e.props = d2.props;
        e.context = f2;
        e.updater = n;
        n = e.state;
        n === void 0 && (e.state = n = null);
        if (typeof e.UNSAFE_componentWillMount === "function" || typeof e.componentWillMount === "function")
          if (typeof e.componentWillMount === "function" && typeof h2.getDerivedStateFromProps !== "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && typeof h2.getDerivedStateFromProps !== "function" && e.UNSAFE_componentWillMount(), t.length) {
            n = t;
            var v = g;
            t = null;
            g = false;
            if (v && n.length === 1)
              e.state = n[0];
            else {
              k = v ? n[0] : e.state;
              var H = true;
              for (v = v ? 1 : 0; v < n.length; v++) {
                var x = n[v];
                x = typeof x === "function" ? x.call(e, k, d2.props, f2) : x;
                x != null && (H ? (H = false, k = l({}, k, x)) : l(k, x));
              }
              e.state = k;
            }
          } else
            t = null;
        a = e.render();
        $a(a, h2);
        if (typeof e.getChildContext === "function" && (d2 = h2.childContextTypes, typeof d2 === "object")) {
          var y = e.getChildContext();
          for (var A in y)
            if (!(A in d2))
              throw Error(p(108, F(h2) || "Unknown", A));
        }
        y && (b = l({}, b, y));
      }
      for (; m.isValidElement(a); ) {
        var f = a, h = f.type;
        if (typeof h !== "function")
          break;
        d(f, h);
      }
      return { child: a, context: b };
    }
    var bb = function() {
      function a(a2, b2, f) {
        m.isValidElement(a2) ? a2.type !== r ? a2 = [a2] : (a2 = a2.props.children, a2 = m.isValidElement(a2) ? [a2] : Z(a2)) : a2 = Z(a2);
        a2 = { type: null, domNamespace: La.html, children: a2, childIndex: 0, context: ma, footer: "" };
        var c = J[0];
        if (c === 0) {
          var d = J;
          c = d.length;
          var g = 2 * c;
          if (!(65536 >= g))
            throw Error(p(304));
          var e = new Uint16Array(g);
          e.set(d);
          J = e;
          J[0] = c + 1;
          for (d = c; d < g - 1; d++)
            J[d] = d + 1;
          J[g - 1] = 0;
        } else
          J[0] = J[c];
        this.threadID = c;
        this.stack = [a2];
        this.exhausted = false;
        this.currentSelectValue = null;
        this.previousWasTextNode = false;
        this.makeStaticMarkup = b2;
        this.suspenseDepth = 0;
        this.contextIndex = -1;
        this.contextStack = [];
        this.contextValueStack = [];
        this.uniqueID = 0;
        this.identifierPrefix = f && f.identifierPrefix || "";
      }
      var b = a.prototype;
      b.destroy = function() {
        if (!this.exhausted) {
          this.exhausted = true;
          this.clearProviders();
          var a2 = this.threadID;
          J[a2] = J[0];
          J[0] = a2;
        }
      };
      b.pushProvider = function(a2) {
        var b2 = ++this.contextIndex, c = a2.type._context, h = this.threadID;
        I(c, h);
        var t = c[h];
        this.contextStack[b2] = c;
        this.contextValueStack[b2] = t;
        c[h] = a2.props.value;
      };
      b.popProvider = function() {
        var a2 = this.contextIndex, b2 = this.contextStack[a2], f = this.contextValueStack[a2];
        this.contextStack[a2] = null;
        this.contextValueStack[a2] = null;
        this.contextIndex--;
        b2[this.threadID] = f;
      };
      b.clearProviders = function() {
        for (var a2 = this.contextIndex; 0 <= a2; a2--)
          this.contextStack[a2][this.threadID] = this.contextValueStack[a2];
      };
      b.read = function(a2) {
        if (this.exhausted)
          return null;
        var b2 = X;
        X = this;
        var c = Sa.current;
        Sa.current = Ka;
        try {
          for (var h = [""], t = false; h[0].length < a2; ) {
            if (this.stack.length === 0) {
              this.exhausted = true;
              var g = this.threadID;
              J[g] = J[0];
              J[0] = g;
              break;
            }
            var e = this.stack[this.stack.length - 1];
            if (t || e.childIndex >= e.children.length) {
              var L = e.footer;
              L !== "" && (this.previousWasTextNode = false);
              this.stack.pop();
              if (e.type === "select")
                this.currentSelectValue = null;
              else if (e.type != null && e.type.type != null && e.type.type.$$typeof === B)
                this.popProvider(e.type);
              else if (e.type === D) {
                this.suspenseDepth--;
                var G = h.pop();
                if (t) {
                  t = false;
                  var C = e.fallbackFrame;
                  if (!C)
                    throw Error(p(303));
                  this.stack.push(C);
                  h[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  h[this.suspenseDepth] += G;
              }
              h[this.suspenseDepth] += L;
            } else {
              var n = e.children[e.childIndex++], k = "";
              try {
                k += this.render(n, e.context, e.domNamespace);
              } catch (v) {
                if (v != null && typeof v.then === "function")
                  throw Error(p(294));
                throw v;
              } finally {
              }
              h.length <= this.suspenseDepth && h.push("");
              h[this.suspenseDepth] += k;
            }
          }
          return h[0];
        } finally {
          Sa.current = c, X = b2, Ea();
        }
      };
      b.render = function(a2, b2, f) {
        if (typeof a2 === "string" || typeof a2 === "number") {
          f = "" + a2;
          if (f === "")
            return "";
          if (this.makeStaticMarkup)
            return O(f);
          if (this.previousWasTextNode)
            return "<!-- -->" + O(f);
          this.previousWasTextNode = true;
          return O(f);
        }
        b2 = ab(a2, b2, this.threadID);
        a2 = b2.child;
        b2 = b2.context;
        if (a2 === null || a2 === false)
          return "";
        if (!m.isValidElement(a2)) {
          if (a2 != null && a2.$$typeof != null) {
            f = a2.$$typeof;
            if (f === q)
              throw Error(p(257));
            throw Error(p(258, f.toString()));
          }
          a2 = Z(a2);
          this.stack.push({ type: null, domNamespace: f, children: a2, childIndex: 0, context: b2, footer: "" });
          return "";
        }
        var c = a2.type;
        if (typeof c === "string")
          return this.renderDOM(a2, b2, f);
        switch (c) {
          case ka:
          case ja:
          case u:
          case z:
          case ca:
          case r:
            return a2 = Z(a2.props.children), this.stack.push({
              type: null,
              domNamespace: f,
              children: a2,
              childIndex: 0,
              context: b2,
              footer: ""
            }), "";
          case D:
            throw Error(p(294));
          case ia:
            throw Error(p(343));
        }
        if (typeof c === "object" && c !== null)
          switch (c.$$typeof) {
            case ba:
              P = {};
              var d = c.render(a2.props, a2.ref);
              d = Da(c.render, a2.props, d, a2.ref);
              d = Z(d);
              this.stack.push({ type: null, domNamespace: f, children: d, childIndex: 0, context: b2, footer: "" });
              return "";
            case da:
              return a2 = [m.createElement(c.type, l({ ref: a2.ref }, a2.props))], this.stack.push({ type: null, domNamespace: f, children: a2, childIndex: 0, context: b2, footer: "" }), "";
            case B:
              return c = Z(a2.props.children), f = { type: a2, domNamespace: f, children: c, childIndex: 0, context: b2, footer: "" }, this.pushProvider(a2), this.stack.push(f), "";
            case aa:
              c = a2.type;
              d = a2.props;
              var g = this.threadID;
              I(c, g);
              c = Z(d.children(c[g]));
              this.stack.push({ type: a2, domNamespace: f, children: c, childIndex: 0, context: b2, footer: "" });
              return "";
            case ha:
              throw Error(p(338));
            case ea:
              return c = a2.type, d = c._init, c = d(c._payload), a2 = [m.createElement(c, l({ ref: a2.ref }, a2.props))], this.stack.push({
                type: null,
                domNamespace: f,
                children: a2,
                childIndex: 0,
                context: b2,
                footer: ""
              }), "";
          }
        throw Error(p(130, c == null ? c : typeof c, ""));
      };
      b.renderDOM = function(a2, b2, f) {
        var c = a2.type.toLowerCase();
        f === La.html && Ma(c);
        if (!Va.hasOwnProperty(c)) {
          if (!Ua.test(c))
            throw Error(p(65, c));
          Va[c] = true;
        }
        var d = a2.props;
        if (c === "input")
          d = l({ type: void 0 }, d, { defaultChecked: void 0, defaultValue: void 0, value: d.value != null ? d.value : d.defaultValue, checked: d.checked != null ? d.checked : d.defaultChecked });
        else if (c === "textarea") {
          var g = d.value;
          if (g == null) {
            g = d.defaultValue;
            var e = d.children;
            if (e != null) {
              if (g != null)
                throw Error(p(92));
              if (Array.isArray(e)) {
                if (!(1 >= e.length))
                  throw Error(p(93));
                e = e[0];
              }
              g = "" + e;
            }
            g == null && (g = "");
          }
          d = l({}, d, { value: void 0, children: "" + g });
        } else if (c === "select")
          this.currentSelectValue = d.value != null ? d.value : d.defaultValue, d = l({}, d, { value: void 0 });
        else if (c === "option") {
          e = this.currentSelectValue;
          var L = Xa(d.children);
          if (e != null) {
            var G = d.value != null ? d.value + "" : L;
            g = false;
            if (Array.isArray(e))
              for (var C = 0; C < e.length; C++) {
                if ("" + e[C] === G) {
                  g = true;
                  break;
                }
              }
            else
              g = "" + e === G;
            d = l({ selected: void 0, children: void 0 }, d, { selected: g, children: L });
          }
        }
        if (g = d) {
          if (Oa[c] && (g.children != null || g.dangerouslySetInnerHTML != null))
            throw Error(p(137, c));
          if (g.dangerouslySetInnerHTML != null) {
            if (g.children != null)
              throw Error(p(60));
            if (!(typeof g.dangerouslySetInnerHTML === "object" && "__html" in g.dangerouslySetInnerHTML))
              throw Error(p(61));
          }
          if (g.style != null && typeof g.style !== "object")
            throw Error(p(62));
        }
        g = d;
        e = this.makeStaticMarkup;
        L = this.stack.length === 1;
        G = "<" + a2.type;
        b:
          if (c.indexOf("-") === -1)
            C = typeof g.is === "string";
          else
            switch (c) {
              case "annotation-xml":
              case "color-profile":
              case "font-face":
              case "font-face-src":
              case "font-face-uri":
              case "font-face-format":
              case "font-face-name":
              case "missing-glyph":
                C = false;
                break b;
              default:
                C = true;
            }
        for (w in g)
          if (Ya.call(g, w)) {
            var n = g[w];
            if (n != null) {
              if (w === "style") {
                var k = void 0, v = "", H = "";
                for (k in n)
                  if (n.hasOwnProperty(k)) {
                    var x = k.indexOf("--") === 0, y = n[k];
                    if (y != null) {
                      if (x)
                        var A = k;
                      else if (A = k, Wa.hasOwnProperty(A))
                        A = Wa[A];
                      else {
                        var cb = A.replace(Qa, "-$1").toLowerCase().replace(Ra, "-ms-");
                        A = Wa[A] = cb;
                      }
                      v += H + A + ":";
                      H = k;
                      x = y == null || typeof y === "boolean" || y === "" ? "" : x || typeof y !== "number" || y === 0 || Y.hasOwnProperty(H) && Y[H] ? ("" + y).trim() : y + "px";
                      v += x;
                      H = ";";
                    }
                  }
                n = v || null;
              }
              k = null;
              C ? Za.hasOwnProperty(w) || (k = w, k = sa(k) && n != null ? k + '="' + (O(n) + '"') : "") : k = ya(w, n);
              k && (G += " " + k);
            }
          }
        e || L && (G += ' data-reactroot=""');
        var w = G;
        g = "";
        Na.hasOwnProperty(c) ? w += "/>" : (w += ">", g = "</" + a2.type + ">");
        a: {
          e = d.dangerouslySetInnerHTML;
          if (e != null) {
            if (e.__html != null) {
              e = e.__html;
              break a;
            }
          } else if (e = d.children, typeof e === "string" || typeof e === "number") {
            e = O(e);
            break a;
          }
          e = null;
        }
        e != null ? (d = [], Ta.hasOwnProperty(c) && e.charAt(0) === "\n" && (w += "\n"), w += e) : d = Z(d.children);
        a2 = a2.type;
        f = f == null || f === "http://www.w3.org/1999/xhtml" ? Ma(a2) : f === "http://www.w3.org/2000/svg" && a2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : f;
        this.stack.push({ domNamespace: f, type: c, children: d, childIndex: 0, context: b2, footer: g });
        this.previousWasTextNode = false;
        return w;
      };
      return a;
    }();
    exports.renderToNodeStream = function() {
      throw Error(p(207));
    };
    exports.renderToStaticMarkup = function(a, b) {
      a = new bb(a, true, b);
      try {
        return a.read(Infinity);
      } finally {
        a.destroy();
      }
    };
    exports.renderToStaticNodeStream = function() {
      throw Error(p(208));
    };
    exports.renderToString = function(a, b) {
      a = new bb(a, false, b);
      try {
        return a.read(Infinity);
      } finally {
        a.destroy();
      }
    };
    exports.version = "17.0.2";
  }
});

// node_modules/react-dom/server.browser.js
var require_server_browser = __commonJS({
  "node_modules/react-dom/server.browser.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_dom_server_browser_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/@remix-run/react/browser/_virtual/_rollupPluginBabelHelpers.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var init_rollupPluginBabelHelpers = __esm({
  "node_modules/@remix-run/react/browser/_virtual/_rollupPluginBabelHelpers.js"() {
  }
});

// node_modules/@remix-run/react/browser/errorBoundaries.js
function RemixRootDefaultErrorBoundary({
  error
}) {
  console.error(error);
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react.default.createElement("title", null, "Uncaught Exception!")), /* @__PURE__ */ import_react.default.createElement("body", null, /* @__PURE__ */ import_react.default.createElement("main", {
    style: {
      border: "solid 2px hsl(10, 50%, 50%)",
      padding: "2rem"
    }
  }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h1", null, "Uncaught Exception!"), /* @__PURE__ */ import_react.default.createElement("p", null, "If you are not the developer, please click back in your browser and try again."), /* @__PURE__ */ import_react.default.createElement("div", {
    style: {
      fontFamily: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
      padding: "1rem",
      margin: "1rem 0",
      border: "solid 4px"
    }
  }, error.message), /* @__PURE__ */ import_react.default.createElement("p", null, "There was an uncaught exception in your application. Check the browser console and/or server console to inspect the error."), /* @__PURE__ */ import_react.default.createElement("p", null, "If you are the developer, consider adding your own error boundary so users don't see this page when unexpected errors happen in production!"), /* @__PURE__ */ import_react.default.createElement("p", null, "Read more about", " ", /* @__PURE__ */ import_react.default.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://remix.run/guides/errors"
  }, "Error Handling in Remix"), ".")))));
}
function useCatch() {
  return (0, import_react.useContext)(RemixCatchContext);
}
function RemixCatchBoundary({
  catch: catchVal,
  component: Component,
  children
}) {
  if (catchVal) {
    return /* @__PURE__ */ import_react.default.createElement(RemixCatchContext.Provider, {
      value: catchVal
    }, /* @__PURE__ */ import_react.default.createElement(Component, null));
  }
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children);
}
function RemixRootDefaultCatchBoundary() {
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react.default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ import_react.default.createElement("body", null, /* @__PURE__ */ import_react.default.createElement("main", {
    style: {
      border: "solid 2px hsl(10, 50%, 50%)",
      padding: "2rem"
    }
  }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h1", null, "Unhandled Thrown Response!"), /* @__PURE__ */ import_react.default.createElement("p", null, "If you are not the developer, please click back in your browser and try again."), /* @__PURE__ */ import_react.default.createElement("p", null, "There was an unhandled thrown response in your application."), /* @__PURE__ */ import_react.default.createElement("p", null, "If you are the developer, consider adding your own catch boundary so users don't see this page when unhandled thrown response happen in production!"), /* @__PURE__ */ import_react.default.createElement("p", null, "Read more about", " ", /* @__PURE__ */ import_react.default.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://remix.run/guides/errors"
  }, "Throwing Responses in Remix"), ".")))));
}
var import_react, RemixErrorBoundary, RemixCatchContext;
var init_errorBoundaries = __esm({
  "node_modules/@remix-run/react/browser/errorBoundaries.js"() {
    import_react = __toModule(require_react());
    RemixErrorBoundary = class extends import_react.default.Component {
      constructor(props) {
        super(props);
        this.state = {
          error: props.error || null,
          location: props.location
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location) {
          return {
            error: props.error || null,
            location: props.location
          };
        }
        return state;
      }
      render() {
        if (this.state.error) {
          return /* @__PURE__ */ import_react.default.createElement(this.props.component, {
            error: this.state.error
          });
        } else {
          return this.props.children;
        }
      }
    };
    RemixCatchContext = /* @__PURE__ */ import_react.default.createContext(void 0);
  }
});

// node_modules/@remix-run/react/browser/invariant.js
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
var init_invariant = __esm({
  "node_modules/@remix-run/react/browser/invariant.js"() {
  }
});

// node_modules/@remix-run/react/browser/routeModules.js
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(route.module);
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    window.location.reload();
    return new Promise(() => {
    });
  }
}
var init_routeModules = __esm({
  "node_modules/@remix-run/react/browser/routeModules.js"() {
  }
});

// node_modules/@remix-run/react/browser/links.js
function getLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    let module = routeModules[match.route.id];
    return module.links && module.links() || [];
  }).flat(1);
  let preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupe(descriptors, preloads);
}
async function prefetchStyleLinks(routeModule) {
  if (!routeModule.links)
    return;
  let descriptors = routeModule.links();
  if (!descriptors)
    return;
  let styleLinks = [];
  for (let descriptor of descriptors) {
    if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
      styleLinks.push({
        ...descriptor,
        rel: "preload",
        as: "style"
      });
    }
  }
  let matchingLinks = styleLinks.filter((link) => !link.media || window.matchMedia(link.media).matches);
  await Promise.all(matchingLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    }
    link.onload = () => {
      removeLink();
      resolve();
    };
    link.onerror = () => {
      removeLink();
      resolve();
    };
    document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  return object != null && typeof object.rel === "string" && typeof object.href === "string";
}
async function getStylesheetPrefetchLinks(matches, routeModules) {
  let links = await Promise.all(matches.map(async (match) => {
    let mod = await loadRouteModule(match.route, routeModules);
    return mod.links ? mod.links() : [];
  }));
  return links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet").map(({
    rel,
    ...attrs
  }) => ({
    rel: "prefetch",
    as: "style",
    ...attrs
  }));
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, location, mode) {
  let path = parsePathPatch(page);
  let isNew = (match, index) => {
    if (!currentMatches[index])
      return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _currentMatches$index;
    return currentMatches[index].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"];
  };
  let newMatches = mode === "data" && location.search !== path.search ? nextMatches.filter((match, index) => {
    if (!match.route.hasLoader) {
      return false;
    }
    if (isNew(match, index) || matchPathChanged(match, index)) {
      return true;
    }
    if (match.route.shouldReload) {
      return match.route.shouldReload({
        params: match.params,
        prevUrl: new URL(location.pathname + location.search + location.hash, window.origin),
        url: new URL(page, window.origin)
      });
    }
    return true;
  }) : nextMatches.filter((match, index) => {
    return match.route.hasLoader && (isNew(match, index) || matchPathChanged(match, index));
  });
  return newMatches;
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page);
  return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
    let {
      pathname,
      search
    } = path;
    let searchParams = new URLSearchParams(search);
    searchParams.append("_data", match.route.id);
    return `${pathname}?${searchParams}`;
  }));
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifestPatch.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function dedupe(descriptors, preloads) {
  let set = new Set();
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let str = JSON.stringify(descriptor);
    if (!set.has(str)) {
      set.add(str);
      deduped.push(descriptor);
    }
    return deduped;
  }, []);
}
function parsePathPatch(href) {
  let path = (0, import_history.parsePath)(href);
  if (path.search === void 0)
    path.search = "";
  return path;
}
var import_history;
var init_links = __esm({
  "node_modules/@remix-run/react/browser/links.js"() {
    import_history = __toModule(require_main());
    init_routeModules();
  }
});

// node_modules/@remix-run/react/browser/markup.js
function createHtml(html) {
  return {
    __html: html
  };
}
var init_markup = __esm({
  "node_modules/@remix-run/react/browser/markup.js"() {
  }
});

// node_modules/@remix-run/react/browser/data.js
function isCatchResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Catch") != null;
}
function isErrorResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Error") != null;
}
function isRedirectResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Redirect") != null;
}
async function fetchData(url, routeId, signal, submission) {
  url.searchParams.set("_data", routeId);
  url.searchParams.sort();
  let init = submission ? getActionInit(submission, signal) : {
    credentials: "same-origin",
    signal
  };
  let response = await fetch(url.href, init);
  if (isErrorResponse(response)) {
    let data = await response.json();
    let error = new Error(data.message);
    error.stack = data.stack;
    return error;
  }
  return response;
}
async function extractData(response) {
  let contentType = response.headers.get("Content-Type");
  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return response.json();
  }
  return response.text();
}
function getActionInit(submission, signal) {
  let {
    encType,
    method,
    formData
  } = submission;
  if (encType !== "application/x-www-form-urlencoded") {
    throw new Error(`Only "application/x-www-form-urlencoded" forms are supported right now.`);
  }
  let body = new URLSearchParams();
  for (let [key, value] of formData) {
    invariant(typeof value === "string", "File inputs are not supported right now");
    body.append(key, value);
  }
  return {
    method,
    body: body.toString(),
    signal,
    credentials: "same-origin",
    headers: {
      "Content-Type": encType
    }
  };
}
var init_data = __esm({
  "node_modules/@remix-run/react/browser/data.js"() {
    init_invariant();
  }
});

// node_modules/@remix-run/react/browser/routeMatching.js
function matchClientRoutes(routes, location) {
  let matches = (0, import_react_router_dom.matchRoutes)(routes, location);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}
var import_react_router_dom;
var init_routeMatching = __esm({
  "node_modules/@remix-run/react/browser/routeMatching.js"() {
    import_react_router_dom = __toModule(require_main3());
  }
});

// node_modules/@remix-run/react/browser/transition.js
function isActionSubmission(submission) {
  return ["POST", "PUT", "PATCH", "DELETE"].includes(submission.method);
}
function isLoaderSubmission(submission) {
  return submission.method === "GET";
}
function isRedirectLocation(location) {
  return Boolean(location.state) && location.state.isRedirect;
}
function isLoaderRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "loader";
}
function isActionRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "action";
}
function isFetchActionRedirect(location) {
  return isRedirectLocation(location) && location.state.type === "fetchAction";
}
function isLoaderSubmissionRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "loaderSubmission";
}
function createTransitionManager(init) {
  let {
    routes
  } = init;
  let pendingNavigationController;
  let fetchControllers = new Map();
  let incrementingLoadId = 0;
  let navigationLoadId = -1;
  let fetchReloadIds = new Map();
  let matches = matchClientRoutes(routes, init.location);
  if (!matches) {
    matches = [{
      params: {},
      pathname: "",
      route: routes[0]
    }];
  }
  let state = {
    location: init.location,
    loaderData: init.loaderData || {},
    actionData: init.actionData,
    catch: init.catch,
    error: init.error,
    catchBoundaryId: init.catchBoundaryId || null,
    errorBoundaryId: init.errorBoundaryId || null,
    matches,
    nextMatches: void 0,
    transition: IDLE_TRANSITION,
    fetchers: new Map()
  };
  function update(updates) {
    state = Object.assign({}, state, updates);
    init.onChange(state);
  }
  function getState() {
    return state;
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    if (fetchControllers.has(key))
      abortFetcher(key);
    fetchReloadIds.delete(key);
    state.fetchers.delete(key);
  }
  async function send(event) {
    switch (event.type) {
      case "navigation": {
        let {
          action,
          location,
          submission
        } = event;
        let matches2 = matchClientRoutes(routes, location);
        if (!matches2) {
          matches2 = [{
            params: {},
            pathname: "",
            route: routes[0]
          }];
          await handleNotFoundNavigation(location, matches2);
        } else if (!submission && isHashChangeOnly(location)) {
          await handleHashChange(location, matches2);
        } else if (action === import_history2.Action.Pop) {
          await handleLoad(location, matches2);
        } else if (submission && isActionSubmission(submission)) {
          await handleActionSubmissionNavigation(location, submission, matches2);
        } else if (submission && isLoaderSubmission(submission)) {
          await handleLoaderSubmissionNavigation(location, submission, matches2);
        } else if (isActionRedirectLocation(location)) {
          await handleActionRedirect(location, matches2);
        } else if (isLoaderSubmissionRedirectLocation(location)) {
          await handleLoaderSubmissionRedirect(location, matches2);
        } else if (isLoaderRedirectLocation(location)) {
          await handleLoaderRedirect(location, matches2);
        } else if (isFetchActionRedirect(location)) {
          await handleFetchActionRedirect(location, matches2);
        } else {
          await handleLoad(location, matches2);
        }
        navigationLoadId = -1;
        break;
      }
      case "fetcher": {
        let {
          key,
          submission,
          href
        } = event;
        let matches2 = matchClientRoutes(routes, href);
        invariant(matches2, "No matches found");
        let match = matches2.slice(-1)[0];
        if (fetchControllers.has(key))
          abortFetcher(key);
        if (submission && isActionSubmission(submission)) {
          await handleActionFetchSubmission(key, submission, match);
        } else if (submission && isLoaderSubmission(submission)) {
          await handleLoaderFetchSubmission(href, key, submission, match);
        } else {
          await handleLoaderFetch(href, key, match);
        }
        break;
      }
      default: {
        throw new Error(`Unknown data event type: ${event.type}`);
      }
    }
  }
  function dispose() {
    abortNormalNavigation();
    for (let [, controller] of fetchControllers) {
      controller.abort();
    }
  }
  async function handleActionFetchSubmission(key, submission, match) {
    let fetcher = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      data: void 0
    };
    state.fetchers.set(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callAction(submission, match, controller.signal);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "fetchAction"
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let loadFetcher = {
      state: "loading",
      type: "actionReload",
      data: result.value,
      submission
    };
    state.fetchers.set(key, loadFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let maybeActionErrorResult = isErrorResult(result) ? result : void 0;
    let maybeActionCatchResult = isCatchResult(result) ? result : void 0;
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let matchesToLoad = state.nextMatches || state.matches;
    let hrefToLoad = createHref(state.transition.location || state.location);
    let results = await callLoaders(state, createUrl(hrefToLoad), matchesToLoad, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, loadFetcher);
    if (controller.signal.aborted) {
      return;
    }
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    let redirect2 = findRedirect(results);
    if (redirect2) {
      let locationState = {
        isRedirect: true,
        type: "loader"
      };
      init.onRedirect(redirect2.location, locationState);
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, state.matches, maybeActionErrorResult);
    let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, state.matches, maybeActionCatchResult);
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    state.fetchers.set(key, doneFetcher);
    let abortedKeys = abortStaleFetchLoads(loadId);
    if (abortedKeys) {
      markFetchersDone(abortedKeys);
    }
    let yeetedNavigation = yeetStaleNavigationLoad(loadId);
    if (yeetedNavigation) {
      let {
        transition
      } = state;
      invariant(transition.state === "loading", "Expected loading transition");
      update({
        location: transition.location,
        matches: state.nextMatches,
        error,
        errorBoundaryId,
        catch: catchVal,
        catchBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad),
        actionData: transition.type === "actionReload" ? state.actionData : void 0,
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers)
      });
    } else {
      update({
        fetchers: new Map(state.fetchers),
        error,
        errorBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad)
      });
    }
  }
  function yeetStaleNavigationLoad(landedId) {
    let isLoadingNavigation = state.transition.state === "loading";
    if (isLoadingNavigation && navigationLoadId < landedId) {
      abortNormalNavigation();
      return true;
    }
    return false;
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        type: "done",
        data: fetcher.data,
        submission: void 0
      };
      state.fetchers.set(key, doneFetcher);
    }
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    return yeetedKeys.length ? yeetedKeys : false;
  }
  async function handleLoaderFetchSubmission(href, key, submission, match) {
    let fetcher = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      data: void 0
    };
    state.fetchers.set(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    fetchControllers.delete(key);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "loader"
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    state.fetchers.set(key, doneFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function handleLoaderFetch(href, key, match) {
    let fetcher = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      data: void 0
    };
    state.fetchers.set(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    if (controller.signal.aborted)
      return;
    fetchControllers.delete(key);
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "loader"
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    state.fetchers.set(key, doneFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function maybeBailOnCatch(match, key, result) {
    if (isCatchResult(result)) {
      let catchBoundaryId = findNearestCatchBoundary(match, state.matches);
      state.fetchers.delete(key);
      update({
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers),
        catch: {
          data: result.value.data,
          status: result.value.status,
          statusText: result.value.statusText
        },
        catchBoundaryId
      });
      return true;
    }
    return false;
  }
  function maybeBailOnError(match, key, result) {
    if (isErrorResult(result)) {
      let errorBoundaryId = findNearestBoundary(match, state.matches);
      state.fetchers.delete(key);
      update({
        fetchers: new Map(state.fetchers),
        error: result.value,
        errorBoundaryId
      });
      return true;
    }
    return false;
  }
  async function handleNotFoundNavigation(location, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await Promise.resolve();
    let catchBoundaryId = findNearestCatchBoundary(matches2[0], matches2);
    update({
      location,
      matches: matches2,
      catch: {
        data: null,
        status: 404,
        statusText: "Not Found"
      },
      catchBoundaryId,
      transition: IDLE_TRANSITION
    });
  }
  async function handleActionSubmissionNavigation(location, submission, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    let controller = new AbortController();
    pendingNavigationController = controller;
    if (!isIndexRequestAction(submission.action) && matches2[matches2.length - 1].route.id.endsWith("/index")) {
      matches2 = matches2.slice(0, -1);
    }
    let leafMatch = matches2.slice(-1)[0];
    let result = await callAction(submission, leafMatch, controller.signal);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "action"
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (isCatchResult(result)) {
      let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId([result], matches2, result);
      update({
        transition: IDLE_TRANSITION,
        catch: catchVal,
        catchBoundaryId
      });
      return;
    }
    let loadTransition = {
      state: "loading",
      type: "actionReload",
      submission,
      location
    };
    update({
      transition: loadTransition,
      actionData: {
        [leafMatch.route.id]: result.value
      }
    });
    await loadPageData(location, matches2, submission, result);
  }
  async function handleLoaderSubmissionNavigation(location, submission, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2, submission);
  }
  async function handleHashChange(location, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await Promise.resolve();
    update({
      location,
      matches: matches2,
      transition: IDLE_TRANSITION
    });
  }
  async function handleLoad(location, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2);
  }
  async function handleLoaderRedirect(location, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalRedirect",
      submission: void 0,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2);
  }
  async function handleLoaderSubmissionRedirect(location, matches2) {
    abortNormalNavigation();
    invariant(state.transition.type === "loaderSubmission", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    let transition = {
      state: "loading",
      type: "loaderSubmissionRedirect",
      submission,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2, submission);
  }
  async function handleFetchActionRedirect(location, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "fetchActionRedirect",
      submission: void 0,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2);
  }
  async function handleActionRedirect(location, matches2) {
    abortNormalNavigation();
    invariant(state.transition.type === "actionSubmission" || state.transition.type === "actionReload", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    let transition = {
      state: "loading",
      type: "actionRedirect",
      submission,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2, submission);
  }
  function isHashChangeOnly(location) {
    return createHref(state.location) === createHref(location) && state.location.hash !== location.hash;
  }
  async function loadPageData(location, matches2, submission, actionResult) {
    let maybeActionErrorResult = actionResult && isErrorResult(actionResult) ? actionResult : void 0;
    let maybeActionCatchResult = actionResult && isCatchResult(actionResult) ? actionResult : void 0;
    let controller = new AbortController();
    pendingNavigationController = controller;
    navigationLoadId = ++incrementingLoadId;
    let results = await callLoaders(state, createUrl(createHref(location)), matches2, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission);
    if (controller.signal.aborted) {
      return;
    }
    let redirect2 = findRedirect(results);
    if (redirect2) {
      if (state.transition.type === "actionReload") {
        let locationState = {
          isRedirect: true,
          type: "action"
        };
        init.onRedirect(redirect2.location, locationState);
      } else if (state.transition.type === "loaderSubmission") {
        let locationState = {
          isRedirect: true,
          type: "loaderSubmission"
        };
        init.onRedirect(redirect2.location, locationState);
      } else {
        let locationState = {
          isRedirect: true,
          type: "loader"
        };
        init.onRedirect(redirect2.location, locationState);
      }
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, matches2, maybeActionErrorResult);
    let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, matches2, maybeActionErrorResult);
    let abortedIds = abortStaleFetchLoads(navigationLoadId);
    if (abortedIds) {
      markFetchersDone(abortedIds);
    }
    update({
      location,
      matches: matches2,
      error,
      errorBoundaryId,
      catch: catchVal,
      catchBoundaryId,
      loaderData: makeLoaderData(state, results, matches2),
      actionData: state.transition.type === "actionReload" ? state.actionData : void 0,
      transition: IDLE_TRANSITION,
      fetchers: abortedIds ? new Map(state.fetchers) : state.fetchers
    });
  }
  function abortNormalNavigation() {
    var _pendingNavigationCon;
    (_pendingNavigationCon = pendingNavigationController) === null || _pendingNavigationCon === void 0 ? void 0 : _pendingNavigationCon.abort();
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, `Expected fetch controller: ${key}`);
    controller.abort();
    fetchControllers.delete(key);
  }
  return {
    send,
    getState,
    getFetcher,
    deleteFetcher,
    dispose,
    get _internalFetchControllers() {
      return fetchControllers;
    }
  };
}
function isIndexRequestAction(action) {
  let indexRequest = false;
  let searchParams = new URLSearchParams(action.split("?", 2)[1] || "");
  for (let param of searchParams.getAll("index")) {
    if (!param) {
      indexRequest = true;
    }
  }
  return indexRequest;
}
async function callLoaders(state, url, matches, signal, actionErrorResult, actionCatchResult, submission, fetcher) {
  let matchesToLoad = filterMatchesToLoad(state, url, matches, actionErrorResult, actionCatchResult, submission, fetcher);
  return Promise.all(matchesToLoad.map((match) => callLoader(match, url, signal)));
}
async function callLoader(match, url, signal) {
  invariant(match.route.loader, `Expected loader for ${match.route.id}`);
  try {
    let {
      params
    } = match;
    let value = await match.route.loader({
      params,
      url,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
async function callAction(submission, match, signal) {
  if (!match.route.action) {
    throw new Error(`Route "${match.route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);
  }
  try {
    let value = await match.route.action({
      url: createUrl(submission.action),
      params: match.params,
      submission,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
function filterMatchesToLoad(state, url, matches, actionErrorResult, actionCatchResult, submission, fetcher) {
  let isNew = (match, index) => {
    if (!state.matches[index])
      return true;
    return match.route.id !== state.matches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _state$matches$index$;
    return state.matches[index].pathname !== match.pathname || ((_state$matches$index$ = state.matches[index].route.path) === null || _state$matches$index$ === void 0 ? void 0 : _state$matches$index$.endsWith("*")) && state.matches[index].params["*"] !== match.params["*"];
  };
  let filterByRouteProps = (match, index) => {
    if (!match.route.loader) {
      return false;
    }
    if (isNew(match, index) || matchPathChanged(match, index)) {
      return true;
    }
    if (match.route.shouldReload) {
      let prevUrl = createUrl(createHref(state.location));
      return match.route.shouldReload({
        prevUrl,
        url,
        submission,
        params: match.params
      });
    }
    return true;
  };
  let isInRootCatchBoundary = state.matches.length === 1;
  if (isInRootCatchBoundary) {
    return matches.filter((match) => !!match.route.loader);
  }
  if ((fetcher === null || fetcher === void 0 ? void 0 : fetcher.type) === "actionReload") {
    return matches.filter(filterByRouteProps);
  } else if (state.transition.type === "actionReload" || state.transition.type === "actionRedirect" || createHref(url) === createHref(state.location) || url.searchParams.toString() !== state.location.search) {
    return matches.filter(filterByRouteProps);
  }
  return matches.filter((match, index, arr) => {
    if ((actionErrorResult || actionCatchResult) && arr.length - 1 === index) {
      return false;
    }
    return match.route.loader && (isNew(match, index) || matchPathChanged(match, index));
  });
}
function isRedirectResult(result) {
  return result.value instanceof TransitionRedirect;
}
function createHref(location) {
  return location.pathname + location.search;
}
function findRedirect(results) {
  for (let result of results) {
    if (isRedirectResult(result)) {
      return result.value;
    }
  }
  return null;
}
async function findCatchAndBoundaryId(results, matches, actionCatchResult) {
  let loaderCatchResult;
  for (let result of results) {
    if (isCatchResult(result)) {
      loaderCatchResult = result;
      break;
    }
  }
  let extractCatchData = async (res) => ({
    status: res.status,
    statusText: res.statusText,
    data: res.data
  });
  if (actionCatchResult && loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(actionCatchResult.value), boundaryId];
  }
  if (loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(loaderCatchResult.value), boundaryId];
  }
  return [void 0, void 0];
}
function findErrorAndBoundaryId(results, matches, actionErrorResult) {
  let loaderErrorResult;
  for (let result of results) {
    if (isErrorResult(result)) {
      loaderErrorResult = result;
      break;
    }
  }
  if (actionErrorResult && loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (actionErrorResult) {
    let boundaryId = findNearestBoundary(actionErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [loaderErrorResult.value, boundaryId];
  }
  return [void 0, void 0];
}
function findNearestCatchBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches) {
    if (match.route.CatchBoundary) {
      nearestBoundaryId = match.route.id;
    }
    if (match === matchWithError) {
      break;
    }
  }
  return nearestBoundaryId;
}
function findNearestBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches) {
    if (match.route.ErrorBoundary) {
      nearestBoundaryId = match.route.id;
    }
    if (match === matchWithError) {
      break;
    }
  }
  return nearestBoundaryId;
}
function makeLoaderData(state, results, matches) {
  let newData = {};
  for (let {
    match,
    value
  } of results) {
    newData[match.route.id] = value;
  }
  let loaderData = {};
  for (let {
    route
  } of matches) {
    let value = newData[route.id] !== void 0 ? newData[route.id] : state.loaderData[route.id];
    if (value !== void 0) {
      loaderData[route.id] = value;
    }
  }
  return loaderData;
}
function isCatchResult(result) {
  return result.value instanceof CatchValue;
}
function isErrorResult(result) {
  return result.value instanceof Error;
}
function createUrl(href) {
  return new URL(href, window.location.origin);
}
var import_history2, CatchValue, TransitionRedirect, IDLE_TRANSITION, IDLE_FETCHER;
var init_transition = __esm({
  "node_modules/@remix-run/react/browser/transition.js"() {
    import_history2 = __toModule(require_main());
    init_routeMatching();
    init_invariant();
    CatchValue = class {
      constructor(status, statusText, data) {
        this.status = status;
        this.statusText = statusText;
        this.data = data;
      }
    };
    TransitionRedirect = class {
      constructor(location) {
        this.location = typeof location === "string" ? location : location.pathname + location.search;
      }
    };
    IDLE_TRANSITION = {
      state: "idle",
      submission: void 0,
      location: void 0,
      type: "idle"
    };
    IDLE_FETCHER = {
      state: "idle",
      type: "init",
      data: void 0,
      submission: void 0
    };
  }
});

// node_modules/@remix-run/react/browser/routes.js
function createClientRoute(entryRoute, routeModulesCache, Component) {
  return {
    caseSensitive: !!entryRoute.caseSensitive,
    element: /* @__PURE__ */ import_react2.default.createElement(Component, {
      id: entryRoute.id
    }),
    id: entryRoute.id,
    path: entryRoute.path,
    index: entryRoute.index,
    module: entryRoute.module,
    loader: createLoader(entryRoute, routeModulesCache),
    action: createAction(entryRoute),
    shouldReload: createShouldReload(entryRoute, routeModulesCache),
    ErrorBoundary: entryRoute.hasErrorBoundary,
    CatchBoundary: entryRoute.hasCatchBoundary,
    hasLoader: entryRoute.hasLoader
  };
}
function createClientRoutes(routeManifest, routeModulesCache, Component, parentId) {
  return Object.keys(routeManifest).filter((key) => routeManifest[key].parentId === parentId).map((key) => {
    let route = createClientRoute(routeManifest[key], routeModulesCache, Component);
    let children = createClientRoutes(routeManifest, routeModulesCache, Component, route.id);
    if (children.length > 0)
      route.children = children;
    return route;
  });
}
function createShouldReload(route, routeModules) {
  let shouldReload = (arg) => {
    let module = routeModules[route.id];
    invariant(module, `Expected route module to be loaded for ${route.id}`);
    if (module.unstable_shouldReload) {
      return module.unstable_shouldReload(arg);
    }
    return true;
  };
  return shouldReload;
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModule = await loadRouteModule(route, routeModules);
  await prefetchStyleLinks(routeModule);
  return routeModule;
}
function createLoader(route, routeModules) {
  let loader = async ({
    url,
    signal,
    submission
  }) => {
    if (route.hasLoader) {
      let [result] = await Promise.all([fetchData(url, route.id, signal, submission), loadRouteModuleWithBlockingLinks(route, routeModules)]);
      if (result instanceof Error)
        throw result;
      let redirect2 = await checkRedirect(result);
      if (redirect2)
        return redirect2;
      if (isCatchResponse(result)) {
        throw new CatchValue(result.status, result.statusText, await extractData(result.clone()));
      }
      let data = await extractData(result);
      return data;
    } else {
      await loadRouteModuleWithBlockingLinks(route, routeModules);
    }
  };
  return loader;
}
function createAction(route) {
  if (!route.hasAction)
    return void 0;
  let action = async ({
    url,
    signal,
    submission
  }) => {
    let result = await fetchData(url, route.id, signal, submission);
    if (result instanceof Error) {
      throw result;
    }
    if (isCatchResponse(result)) {
      throw new CatchValue(result.status, result.statusText, await extractData(result.clone()));
    }
    let redirect2 = await checkRedirect(result);
    if (redirect2)
      return redirect2;
    return extractData(result);
  };
  return action;
}
async function checkRedirect(response) {
  if (isRedirectResponse(response)) {
    let url = new URL(response.headers.get("X-Remix-Redirect"), window.location.origin);
    if (url.origin !== window.location.origin) {
      await new Promise(() => {
        window.location.replace(url.href);
      });
    } else {
      return new TransitionRedirect(url.pathname + url.search);
    }
  }
  return null;
}
var import_react2;
var init_routes = __esm({
  "node_modules/@remix-run/react/browser/routes.js"() {
    import_react2 = __toModule(require_react());
    init_routeModules();
    init_data();
    init_transition();
    init_links();
    init_invariant();
  }
});

// node_modules/@remix-run/react/browser/components.js
function useRemixEntryContext() {
  let context = import_react3.default.useContext(RemixEntryContext);
  invariant(context, "You must render this element inside a <Remix> element");
  return context;
}
function RemixEntry({
  context: entryContext,
  action,
  location: historyLocation,
  navigator: _navigator,
  static: staticProp = false
}) {
  let {
    manifest,
    routeData: documentLoaderData,
    actionData: documentActionData,
    routeModules,
    serverHandoffString,
    componentDidCatchEmulator: entryComponentDidCatchEmulator
  } = entryContext;
  let clientRoutes = import_react3.default.useMemo(() => createClientRoutes(manifest.routes, routeModules, RemixRoute), [manifest, routeModules]);
  let [clientState, setClientState] = import_react3.default.useState(entryComponentDidCatchEmulator);
  let [transitionManager] = import_react3.default.useState(() => {
    return createTransitionManager({
      routes: clientRoutes,
      actionData: documentActionData,
      loaderData: documentLoaderData,
      location: historyLocation,
      catch: entryComponentDidCatchEmulator.catch,
      catchBoundaryId: entryComponentDidCatchEmulator.catchBoundaryRouteId,
      onRedirect: _navigator.replace,
      onChange: (state) => {
        setClientState({
          catch: state.catch,
          error: state.error,
          catchBoundaryRouteId: state.catchBoundaryId,
          loaderBoundaryRouteId: state.errorBoundaryId,
          renderBoundaryRouteId: null,
          trackBoundaries: false,
          trackCatchBoundaries: false
        });
      }
    });
  });
  let navigator = import_react3.default.useMemo(() => {
    let push = (to, state) => {
      return transitionManager.getState().transition.state !== "idle" ? _navigator.replace(to, state) : _navigator.push(to, state);
    };
    return {
      ..._navigator,
      push
    };
  }, [_navigator, transitionManager]);
  let {
    location,
    matches,
    loaderData,
    actionData
  } = transitionManager.getState();
  import_react3.default.useEffect(() => {
    let {
      location: location2
    } = transitionManager.getState();
    if (historyLocation === location2)
      return;
    transitionManager.send({
      type: "navigation",
      location: historyLocation,
      submission: consumeNextNavigationSubmission(),
      action
    });
  }, [transitionManager, historyLocation, action]);
  let ssrErrorBeforeRoutesRendered = clientState.error && clientState.renderBoundaryRouteId === null && clientState.loaderBoundaryRouteId === null ? deserializeError(clientState.error) : void 0;
  let ssrCatchBeforeRoutesRendered = clientState.catch && clientState.catchBoundaryRouteId === null ? clientState.catch : void 0;
  return /* @__PURE__ */ import_react3.default.createElement(RemixEntryContext.Provider, {
    value: {
      matches,
      manifest,
      componentDidCatchEmulator: clientState,
      routeModules,
      serverHandoffString,
      clientRoutes,
      routeData: loaderData,
      actionData,
      transitionManager
    }
  }, /* @__PURE__ */ import_react3.default.createElement(RemixErrorBoundary, {
    location,
    component: RemixRootDefaultErrorBoundary,
    error: ssrErrorBeforeRoutesRendered
  }, /* @__PURE__ */ import_react3.default.createElement(RemixCatchBoundary, {
    location,
    component: RemixRootDefaultCatchBoundary,
    catch: ssrCatchBeforeRoutesRendered
  }, /* @__PURE__ */ import_react3.default.createElement(import_react_router_dom2.Router, {
    navigationType: action,
    location,
    navigator,
    static: staticProp
  }, /* @__PURE__ */ import_react3.default.createElement(Routes, null)))));
}
function deserializeError(data) {
  let error = new Error(data.message);
  error.stack = data.stack;
  return error;
}
function Routes() {
  let {
    clientRoutes
  } = useRemixEntryContext();
  let element = (0, import_react_router_dom2.useRoutes)(clientRoutes) || clientRoutes[0].element;
  return element;
}
function useRemixRouteContext() {
  let context = import_react3.default.useContext(RemixRouteContext);
  invariant(context, "You must render this element in a remix route element");
  return context;
}
function DefaultRouteComponent({
  id
}) {
  throw new Error(`Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
}
function RemixRoute({
  id
}) {
  let location = (0, import_react_router_dom2.useLocation)();
  let {
    routeData,
    routeModules,
    componentDidCatchEmulator
  } = useRemixEntryContext();
  let data = routeData[id];
  let {
    default: Component,
    CatchBoundary,
    ErrorBoundary
  } = routeModules[id];
  let element = Component ? /* @__PURE__ */ import_react3.default.createElement(Component, null) : /* @__PURE__ */ import_react3.default.createElement(DefaultRouteComponent, {
    id
  });
  let context = {
    data,
    id
  };
  if (CatchBoundary) {
    let maybeServerCaught = componentDidCatchEmulator.catch && componentDidCatchEmulator.catchBoundaryRouteId === id ? componentDidCatchEmulator.catch : void 0;
    if (componentDidCatchEmulator.trackCatchBoundaries) {
      componentDidCatchEmulator.catchBoundaryRouteId = id;
    }
    context = maybeServerCaught ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in a catch boundary.");
        return void 0;
      }
    } : {
      id,
      data
    };
    element = /* @__PURE__ */ import_react3.default.createElement(RemixCatchBoundary, {
      location,
      component: CatchBoundary,
      catch: maybeServerCaught
    }, element);
  }
  if (ErrorBoundary) {
    let maybeServerRenderError = componentDidCatchEmulator.error && (componentDidCatchEmulator.renderBoundaryRouteId === id || componentDidCatchEmulator.loaderBoundaryRouteId === id) ? deserializeError(componentDidCatchEmulator.error) : void 0;
    if (componentDidCatchEmulator.trackBoundaries) {
      componentDidCatchEmulator.renderBoundaryRouteId = id;
    }
    context = maybeServerRenderError ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in an error boundary.");
        return void 0;
      }
    } : {
      id,
      data
    };
    element = /* @__PURE__ */ import_react3.default.createElement(RemixErrorBoundary, {
      location,
      component: ErrorBoundary,
      error: maybeServerRenderError
    }, element);
  }
  return /* @__PURE__ */ import_react3.default.createElement(RemixRouteContext.Provider, {
    value: context
  }, element);
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = import_react3.default.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = import_react3.default.useState(false);
  let {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps;
  import_react3.default.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
  }, [prefetch]);
  let setIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(true);
    }
  };
  let cancelIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(false);
    }
  };
  import_react3.default.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  return [shouldPrefetch, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function Links() {
  let {
    matches,
    routeModules,
    manifest
  } = useRemixEntryContext();
  let links = import_react3.default.useMemo(() => getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, links.map((link) => isPageLinkDescriptor(link) ? /* @__PURE__ */ import_react3.default.createElement(PrefetchPageLinks, _extends({
    key: link.page
  }, link)) : /* @__PURE__ */ import_react3.default.createElement("link", _extends({
    key: link.rel + link.href
  }, link))));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let {
    clientRoutes
  } = useRemixEntryContext();
  let matches = import_react3.default.useMemo(() => matchClientRoutes(clientRoutes, page), [clientRoutes, page]);
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`);
    return null;
  }
  return /* @__PURE__ */ import_react3.default.createElement(PrefetchPageLinksImpl, _extends({
    page,
    matches
  }, dataLinkProps));
}
function usePrefetchedStylesheets(matches) {
  let {
    routeModules
  } = useRemixEntryContext();
  let [styleLinks, setStyleLinks] = import_react3.default.useState([]);
  import_react3.default.useEffect(() => {
    let interrupted = false;
    getStylesheetPrefetchLinks(matches, routeModules).then((links) => {
      if (!interrupted)
        setStyleLinks(links);
    });
    return () => {
      interrupted = true;
    };
  }, [matches, routeModules]);
  return styleLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = (0, import_react_router_dom2.useLocation)();
  let {
    matches,
    manifest
  } = useRemixEntryContext();
  let newMatchesForData = import_react3.default.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location, "data"), [page, nextMatches, matches, location]);
  let newMatchesForAssets = import_react3.default.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location, "assets"), [page, nextMatches, matches, location]);
  let dataHrefs = import_react3.default.useMemo(() => getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]);
  let moduleHrefs = import_react3.default.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
  let styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ import_react3.default.createElement("link", _extends({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href
  }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ import_react3.default.createElement("link", _extends({
    key: href,
    rel: "modulepreload",
    href
  }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ import_react3.default.createElement("link", _extends({
    key: link.href
  }, link))));
}
function Meta() {
  let {
    matches,
    routeData,
    routeModules
  } = useRemixEntryContext();
  let location = (0, import_react_router_dom2.useLocation)();
  let meta = {};
  let parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id;
    let data = routeData[routeId];
    let params = match.params;
    let routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location
      }) : routeModule.meta;
      Object.assign(meta, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, Object.keys(meta).map((name) => {
    let value = meta[name];
    let isOpenGraphTag = name.startsWith("og:");
    return name === "title" ? /* @__PURE__ */ import_react3.default.createElement("title", {
      key: "title"
    }, meta[name]) : Array.isArray(value) ? value.map((content) => isOpenGraphTag ? /* @__PURE__ */ import_react3.default.createElement("meta", {
      key: name + content,
      property: name,
      content
    }) : /* @__PURE__ */ import_react3.default.createElement("meta", {
      key: name + content,
      name,
      content
    })) : isOpenGraphTag ? /* @__PURE__ */ import_react3.default.createElement("meta", {
      key: name,
      property: name,
      content: value
    }) : /* @__PURE__ */ import_react3.default.createElement("meta", {
      key: name,
      name,
      content: value
    });
  }));
}
function Scripts(props) {
  let {
    manifest,
    matches,
    pendingLocation,
    clientRoutes,
    serverHandoffString
  } = useRemixEntryContext();
  let initialScripts = import_react3.default.useMemo(() => {
    let contextScript = serverHandoffString ? `window.__remixContext = ${serverHandoffString};` : "";
    let routeModulesScript = `${matches.map((match, index) => `import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join("\n")}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};`;
    return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("script", _extends({}, props, {
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: createHtml(contextScript)
    })), /* @__PURE__ */ import_react3.default.createElement("script", _extends({}, props, {
      src: manifest.url
    })), /* @__PURE__ */ import_react3.default.createElement("script", _extends({}, props, {
      dangerouslySetInnerHTML: createHtml(routeModulesScript),
      type: "module"
    })), /* @__PURE__ */ import_react3.default.createElement("script", _extends({}, props, {
      src: manifest.entry.module,
      type: "module"
    })));
  }, []);
  let nextMatches = import_react3.default.useMemo(() => {
    if (pendingLocation) {
      let matches2 = matchClientRoutes(clientRoutes, pendingLocation);
      invariant(matches2, `No routes match path "${pendingLocation.pathname}"`);
      return matches2;
    }
    return [];
  }, [pendingLocation, clientRoutes]);
  let routePreloads = matches.concat(nextMatches).map((match) => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1);
  let preloads = manifest.entry.imports.concat(routePreloads);
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, dedupe2(preloads).map((path) => /* @__PURE__ */ import_react3.default.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), initialScripts);
}
function dedupe2(array) {
  return [...new Set(array)];
}
function isActionRequestMethod(method) {
  method = method.toLowerCase();
  return method === "post" || method === "put" || method === "patch" || method === "delete";
}
function useFormAction(action = ".", method = "get") {
  let {
    id
  } = useRemixRouteContext();
  let path = (0, import_react_router_dom2.useResolvedPath)(action);
  let search = path.search;
  let isIndexRoute = id.endsWith("/index");
  if (action === "." && isIndexRoute && isActionRequestMethod(method)) {
    search = search ? search.replace(/^\?/, "?index&") : "?index";
  }
  return path.pathname + search;
}
function useSubmit() {
  return useSubmitImpl();
}
function useSubmitImpl(key) {
  let navigate = (0, import_react_router_dom2.useNavigate)();
  let defaultAction = useFormAction();
  let {
    transitionManager
  } = useRemixEntryContext();
  return import_react3.default.useCallback((target, options = {}) => {
    let method;
    let action;
    let encType;
    let formData;
    if (isFormElement(target)) {
      let submissionTrigger = options.submissionTrigger;
      method = options.method || target.method;
      action = options.action || target.action;
      encType = options.encType || target.enctype;
      formData = new FormData(target);
      if (submissionTrigger && submissionTrigger.name) {
        formData.append(submissionTrigger.name, submissionTrigger.value);
      }
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(`Cannot submit a <button> without a <form>`);
      }
      method = options.method || target.getAttribute("formmethod") || form.method;
      action = options.action || target.getAttribute("formaction") || form.action;
      encType = options.encType || target.getAttribute("formenctype") || form.enctype;
      formData = new FormData(form);
      if (target.name) {
        formData.set(target.name, target.value);
      }
    } else {
      if (isHtmlElement(target)) {
        throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
      }
      method = options.method || "get";
      action = options.action || defaultAction;
      encType = options.encType || "application/x-www-form-urlencoded";
      if (target instanceof FormData) {
        formData = target;
      } else {
        formData = new FormData();
        if (target instanceof URLSearchParams) {
          for (let [name, value] of target) {
            formData.set(name, value);
          }
        } else if (target != null) {
          for (let name of Object.keys(target)) {
            formData.set(name, target[name]);
          }
        }
      }
    }
    let {
      protocol,
      host
    } = window.location;
    let url = new URL(action, `${protocol}//${host}`);
    if (method.toLowerCase() === "get") {
      for (let [name, value] of formData) {
        if (typeof value === "string") {
          url.searchParams.set(name, value);
        } else {
          throw new Error(`Cannot submit binary form data using GET`);
        }
      }
    }
    let submission = {
      formData,
      action: url.pathname + url.search,
      method: method.toUpperCase(),
      encType,
      key: Math.random().toString(36).substr(2, 8)
    };
    if (key) {
      transitionManager.send({
        type: "fetcher",
        href: submission.action,
        submission,
        key
      });
    } else {
      setNextNavigationSubmission(submission);
      navigate(url.pathname + url.search, {
        replace: options.replace
      });
    }
  }, [defaultAction, key, navigate, transitionManager]);
}
function setNextNavigationSubmission(submission) {
  nextNavigationSubmission = submission;
}
function consumeNextNavigationSubmission() {
  let submission = nextNavigationSubmission;
  nextNavigationSubmission = void 0;
  return submission;
}
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function useBeforeUnload(callback) {
  import_react3.default.useEffect(() => {
    window.addEventListener("beforeunload", callback);
    return () => {
      window.removeEventListener("beforeunload", callback);
    };
  }, [callback]);
}
function useMatches() {
  let {
    matches,
    routeData,
    routeModules
  } = useRemixEntryContext();
  return matches.map((match) => {
    let {
      pathname,
      params
    } = match;
    return {
      pathname,
      params,
      data: routeData[match.route.id],
      handle: routeModules[match.route.id].handle
    };
  });
}
function useLoaderData() {
  return useRemixRouteContext().data;
}
function useActionData() {
  let {
    id: routeId
  } = useRemixRouteContext();
  let {
    transitionManager
  } = useRemixEntryContext();
  let {
    actionData
  } = transitionManager.getState();
  return actionData ? actionData[routeId] : void 0;
}
function useTransition() {
  let {
    transitionManager
  } = useRemixEntryContext();
  return transitionManager.getState().transition;
}
function createFetcherForm(fetchKey) {
  return /* @__PURE__ */ import_react3.default.forwardRef((props, ref) => {
    return /* @__PURE__ */ import_react3.default.createElement(FormImpl, _extends({}, props, {
      ref,
      fetchKey
    }));
  });
}
function useFetcher() {
  let {
    transitionManager
  } = useRemixEntryContext();
  let [key] = import_react3.default.useState(() => String(++fetcherId));
  let [Form2] = import_react3.default.useState(() => createFetcherForm(key));
  let [load] = import_react3.default.useState(() => (href) => {
    transitionManager.send({
      type: "fetcher",
      href,
      key
    });
  });
  let submit = useSubmitImpl(key);
  let fetcher = transitionManager.getFetcher(key);
  let fetcherWithComponents = import_react3.default.useMemo(() => ({
    Form: Form2,
    submit,
    load,
    ...fetcher
  }), [fetcher, Form2, submit, load]);
  import_react3.default.useEffect(() => {
    return () => transitionManager.deleteFetcher(key);
  }, [transitionManager, key]);
  return fetcherWithComponents;
}
function useFetchers() {
  let {
    transitionManager
  } = useRemixEntryContext();
  let {
    fetchers
  } = transitionManager.getState();
  return [...fetchers.values()];
}
function LiveReload({
  port = 8002
}) {
  if (true)
    return null;
  return /* @__PURE__ */ import_react3.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
          let ws = new WebSocket("ws://localhost:${port}/socket");
          ws.onmessage = message => {
            let event = JSON.parse(message.data);
            if (event.type === "LOG") {
              console.log(event.message);
            }
            if (event.type === "RELOAD") {
              console.log("\u{1F4BF} Reloading window ...");
              window.location.reload();
            }
          };
          ws.onerror = error => {
            console.log("Remix dev asset server web socket error:");
            console.error(error);
          };
      `
    }
  });
}
function useComposedRefs(...refs) {
  return import_react3.default.useCallback((node) => {
    for (let ref of refs) {
      if (ref == null)
        continue;
      if (typeof ref === "function") {
        ref(node);
      } else {
        try {
          ref.current = node;
        } catch (_) {
        }
      }
    }
  }, refs);
}
var import_react3, import_react_router_dom2, RemixEntryContext, RemixRouteContext, NavLink, Link, Form, FormImpl, nextNavigationSubmission, fetcherId;
var init_components = __esm({
  "node_modules/@remix-run/react/browser/components.js"() {
    init_rollupPluginBabelHelpers();
    import_react3 = __toModule(require_react());
    import_react_router_dom2 = __toModule(require_main3());
    init_errorBoundaries();
    init_invariant();
    init_links();
    init_markup();
    init_routes();
    init_routeMatching();
    init_transition();
    RemixEntryContext = /* @__PURE__ */ import_react3.default.createContext(void 0);
    RemixRouteContext = /* @__PURE__ */ import_react3.default.createContext(void 0);
    NavLink = /* @__PURE__ */ import_react3.default.forwardRef(({
      to,
      prefetch = "none",
      ...props
    }, forwardedRef) => {
      let href = (0, import_react_router_dom2.useHref)(to);
      let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
      return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_react_router_dom2.NavLink, _extends({
        ref: forwardedRef,
        to
      }, prefetchHandlers, props)), shouldPrefetch && /* @__PURE__ */ import_react3.default.createElement(PrefetchPageLinks, {
        page: href
      }));
    });
    Link = /* @__PURE__ */ import_react3.default.forwardRef(({
      to,
      prefetch = "none",
      ...props
    }, forwardedRef) => {
      let href = (0, import_react_router_dom2.useHref)(to);
      let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
      return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_react_router_dom2.Link, _extends({
        ref: forwardedRef,
        to
      }, prefetchHandlers, props)), shouldPrefetch && /* @__PURE__ */ import_react3.default.createElement(PrefetchPageLinks, {
        page: href
      }));
    });
    Form = /* @__PURE__ */ import_react3.default.forwardRef((props, ref) => {
      return /* @__PURE__ */ import_react3.default.createElement(FormImpl, _extends({}, props, {
        ref
      }));
    });
    FormImpl = /* @__PURE__ */ import_react3.default.forwardRef(({
      reloadDocument = false,
      replace = false,
      method = "get",
      action = ".",
      encType = "application/x-www-form-urlencoded",
      fetchKey,
      onSubmit,
      ...props
    }, forwardedRef) => {
      let submit = useSubmitImpl(fetchKey);
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let formAction = useFormAction(action, formMethod);
      let formRef = import_react3.default.useRef();
      let ref = useComposedRefs(forwardedRef, formRef);
      let clickedButtonRef = import_react3.default.useRef();
      import_react3.default.useEffect(() => {
        let form = formRef.current;
        if (!form)
          return;
        function handleClick(event) {
          if (!(event.target instanceof HTMLElement))
            return;
          let submitButton = event.target.closest("button,input[type=submit]");
          if (submitButton && submitButton.type === "submit") {
            clickedButtonRef.current = submitButton;
          }
        }
        form.addEventListener("click", handleClick);
        return () => {
          form && form.removeEventListener("click", handleClick);
        };
      }, []);
      return /* @__PURE__ */ import_react3.default.createElement("form", _extends({
        ref,
        method: formMethod,
        action: formAction,
        encType,
        onSubmit: reloadDocument ? void 0 : (event) => {
          onSubmit && onSubmit(event);
          if (event.defaultPrevented)
            return;
          event.preventDefault();
          submit(clickedButtonRef.current || event.currentTarget, {
            method,
            replace
          });
          clickedButtonRef.current = null;
        }
      }, props));
    });
    fetcherId = 0;
  }
});

// node_modules/@remix-run/react/browser/browser.js
function RemixBrowser(_props) {
  let historyRef = import_react4.default.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0, import_history3.createBrowserHistory)({
      window
    });
  }
  let history = historyRef.current;
  let [state, dispatch] = import_react4.default.useReducer((_, update) => update, {
    action: history.action,
    location: history.location
  });
  import_react4.default.useLayoutEffect(() => history.listen(dispatch), [history]);
  let entryContext = window.__remixContext;
  entryContext.manifest = window.__remixManifest;
  entryContext.routeModules = window.__remixRouteModules;
  entryContext.componentDidCatchEmulator.trackBoundaries = false;
  entryContext.componentDidCatchEmulator.trackCatchBoundaries = false;
  return /* @__PURE__ */ import_react4.default.createElement(RemixEntry, {
    context: entryContext,
    action: state.action,
    location: state.location,
    navigator: history
  });
}
var import_history3, import_react4;
var init_browser = __esm({
  "node_modules/@remix-run/react/browser/browser.js"() {
    import_history3 = __toModule(require_main());
    import_react4 = __toModule(require_react());
    init_components();
  }
});

// node_modules/@remix-run/react/browser/server.js
function RemixServer({
  context,
  url
}) {
  if (typeof url === "string") {
    url = new URL(url);
  }
  let location = {
    pathname: url.pathname,
    search: url.search,
    hash: "",
    state: null,
    key: "default"
  };
  let staticNavigator = {
    createHref(to) {
      return typeof to === "string" ? to : (0, import_history4.createPath)(to);
    },
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    },
    block() {
      throw new Error(`You cannot use navigator.block() on the server because it is a stateless environment.`);
    }
  };
  return /* @__PURE__ */ import_react5.default.createElement(RemixEntry, {
    context,
    action: import_history4.Action.Pop,
    location,
    navigator: staticNavigator,
    static: true
  });
}
var import_history4, import_react5;
var init_server = __esm({
  "node_modules/@remix-run/react/browser/server.js"() {
    import_history4 = __toModule(require_main());
    import_react5 = __toModule(require_react());
    init_components();
  }
});

// node_modules/@remix-run/react/browser/scroll-restoration.js
function ScrollRestoration() {
  useScrollRestoration();
  React.useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  useBeforeUnload(React.useCallback(() => {
    window.history.scrollRestoration = "auto";
  }, []));
  return /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
          let STORAGE_KEY = ${JSON.stringify(STORAGE_KEY)};
          if (!window.history.state || !window.history.state.key) {
            window.history.replaceState({ key: Math.random().toString(32).slice(2) }, null);
          }
          try {
            let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}')
            let storedY = positions[window.history.state.key];
            if (typeof storedY === 'number') {
              window.scrollTo(0, storedY)
            }
          } catch(error) {
            console.error(error)
            sessionStorage.removeItem(STORAGE_KEY)
          }
        `
    }
  });
}
function useScrollRestoration() {
  let location = (0, import_react_router_dom3.useLocation)();
  let transition = useTransition();
  let wasSubmissionRef = React.useRef(false);
  React.useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
  React.useEffect(() => {
    if (transition.location) {
      positions[location.key] = window.scrollY;
    }
  }, [transition, location]);
  useBeforeUnload(React.useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  }, []));
  if (typeof document !== "undefined") {
    React.useLayoutEffect(() => {
      if (!hydrated) {
        hydrated = true;
        return;
      }
      let y = positions[location.key];
      if (y) {
        window.scrollTo(0, y);
        return;
      }
      if (location.hash) {
        let el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      if (wasSubmissionRef.current === true) {
        wasSubmissionRef.current = false;
        return;
      }
      window.scrollTo(0, 0);
    }, [location]);
  }
  React.useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
}
var React, import_react_router_dom3, STORAGE_KEY, positions, hydrated;
var init_scroll_restoration = __esm({
  "node_modules/@remix-run/react/browser/scroll-restoration.js"() {
    React = __toModule(require_react());
    import_react_router_dom3 = __toModule(require_main3());
    init_components();
    STORAGE_KEY = "positions";
    positions = {};
    if (typeof document !== "undefined") {
      let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
      if (sessionPositions) {
        positions = JSON.parse(sessionPositions);
      }
    }
    hydrated = false;
  }
});

// node_modules/@remix-run/react/browser/index.js
var import_react_router_dom4;
var init_browser2 = __esm({
  "node_modules/@remix-run/react/browser/index.js"() {
    init_browser();
    import_react_router_dom4 = __toModule(require_main3());
    init_components();
    init_errorBoundaries();
    init_server();
    init_scroll_restoration();
  }
});

// node_modules/remix/browser/client.js
var init_client = __esm({
  "node_modules/remix/browser/client.js"() {
    init_browser2();
  }
});

// node_modules/remix/browser/server.js
var import_server_runtime;
var init_server2 = __esm({
  "node_modules/remix/browser/server.js"() {
    import_server_runtime = __toModule(require_server_runtime());
  }
});

// node_modules/@remix-run/cloudflare-workers/cookieSigning.js
var require_cookieSigning = __commonJS({
  "node_modules/@remix-run/cloudflare-workers/cookieSigning.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var encoder = new TextEncoder();
    async function sign2(value, secret) {
      let key = await crypto.subtle.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: "SHA-256"
      }, false, ["sign"]);
      let data = encoder.encode(value);
      let signature = await crypto.subtle.sign("HMAC", key, data);
      let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=+$/, "");
      return value + "." + hash;
    }
    async function unsign2(cookie, secret) {
      let key = await crypto.subtle.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: "SHA-256"
      }, false, ["verify"]);
      let value = cookie.slice(0, cookie.lastIndexOf("."));
      let hash = cookie.slice(cookie.lastIndexOf(".") + 1);
      let data = encoder.encode(value);
      let signature = byteStringToUint8Array(atob(hash));
      let valid = await crypto.subtle.verify("HMAC", key, signature, data);
      return valid ? value : false;
    }
    function byteStringToUint8Array(byteString) {
      let array = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        array[i] = byteString.charCodeAt(i);
      }
      return array;
    }
    exports.sign = sign2;
    exports.unsign = unsign2;
  }
});

// node_modules/@remix-run/cloudflare-workers/globals.js
var require_globals = __commonJS({
  "node_modules/@remix-run/cloudflare-workers/globals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cookieSigning = require_cookieSigning();
    function installGlobals() {
      self.sign = cookieSigning.sign;
      self.unsign = cookieSigning.unsign;
    }
    exports.installGlobals = installGlobals;
  }
});

// node_modules/@remix-run/cloudflare-workers/sessions/cloudflareKVSessionStorage.js
var require_cloudflareKVSessionStorage = __commonJS({
  "node_modules/@remix-run/cloudflare-workers/sessions/cloudflareKVSessionStorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require_server_runtime();
    function createCloudflareKVSessionStorage2({
      cookie,
      kv
    }) {
      return serverRuntime.createSessionStorage({
        cookie,
        async createData(data, expires) {
          while (true) {
            let randomBytes = new Uint8Array(8);
            crypto.getRandomValues(randomBytes);
            let id = [...randomBytes].map((x) => x.toString(16).padStart(2, "0")).join("");
            if (await kv.get(id, "json")) {
              continue;
            }
            await kv.put(id, JSON.stringify(data), {
              expiration: expires === null || expires === void 0 ? void 0 : expires.getUTCMilliseconds()
            });
            return id;
          }
        },
        async readData(id) {
          let session = await kv.get(id);
          if (!session) {
            return null;
          }
          return JSON.parse(session);
        },
        async updateData(id, data, expires) {
          await kv.put(id, JSON.stringify(data), {
            expiration: expires === null || expires === void 0 ? void 0 : expires.getUTCMilliseconds()
          });
        },
        async deleteData(id) {
          await kv.delete(id);
        }
      });
    }
    exports.createCloudflareKVSessionStorage = createCloudflareKVSessionStorage2;
  }
});

// node_modules/@cloudflare/kv-asset-handler/node_modules/mime/Mime.js
var require_Mime2 = __commonJS({
  "node_modules/@cloudflare/kv-asset-handler/node_modules/mime/Mime.js"(exports, module) {
    "use strict";
    function Mime() {
      this._types = Object.create(null);
      this._extensions = Object.create(null);
      for (let i = 0; i < arguments.length; i++) {
        this.define(arguments[i]);
      }
      this.define = this.define.bind(this);
      this.getType = this.getType.bind(this);
      this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t) {
          return t.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i = 0; i < extensions.length; i++) {
          const ext = extensions[i];
          if (ext[0] === "*") {
            continue;
          }
          if (!force && ext in this._types) {
            throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
          }
          this._types[ext] = type;
        }
        if (force || !this._extensions[type]) {
          const ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase();
      let ext = last.replace(/^.*\./, "").toLowerCase();
      let hasPath = last.length < path.length;
      let hasDot = ext.length < last.length - 1;
      return (hasDot || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
      return type && this._extensions[type.toLowerCase()] || null;
    };
    module.exports = Mime;
  }
});

// node_modules/@cloudflare/kv-asset-handler/node_modules/mime/types/standard.js
var require_standard2 = __commonJS({
  "node_modules/@cloudflare/kv-asset-handler/node_modules/mime/types/standard.js"(exports, module) {
    module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// node_modules/@cloudflare/kv-asset-handler/node_modules/mime/types/other.js
var require_other2 = __commonJS({
  "node_modules/@cloudflare/kv-asset-handler/node_modules/mime/types/other.js"(exports, module) {
    module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// node_modules/@cloudflare/kv-asset-handler/node_modules/mime/index.js
var require_mime2 = __commonJS({
  "node_modules/@cloudflare/kv-asset-handler/node_modules/mime/index.js"(exports, module) {
    "use strict";
    var Mime = require_Mime2();
    module.exports = new Mime(require_standard2(), require_other2());
  }
});

// node_modules/@cloudflare/kv-asset-handler/dist/types.js
var require_types = __commonJS({
  "node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
    var KVError = class extends Error {
      constructor(message, status = 500) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = KVError.name;
        this.status = status;
      }
    };
    exports.KVError = KVError;
    var MethodNotAllowedError = class extends KVError {
      constructor(message = `Not a valid request method`, status = 405) {
        super(message, status);
      }
    };
    exports.MethodNotAllowedError = MethodNotAllowedError;
    var NotFoundError = class extends KVError {
      constructor(message = `Not Found`, status = 404) {
        super(message, status);
      }
    };
    exports.NotFoundError = NotFoundError;
    var InternalError = class extends KVError {
      constructor(message = `Internal Error in KV Asset Handler`, status = 500) {
        super(message, status);
      }
    };
    exports.InternalError = InternalError;
  }
});

// node_modules/@cloudflare/kv-asset-handler/dist/index.js
var require_dist = __commonJS({
  "node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
    var mime2 = require_mime2();
    var types_1 = require_types();
    Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
      return types_1.MethodNotAllowedError;
    } });
    Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
      return types_1.NotFoundError;
    } });
    Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
      return types_1.InternalError;
    } });
    var defaultCacheControl = {
      browserTTL: null,
      edgeTTL: 2 * 60 * 60 * 24,
      bypassCache: false
    };
    var parseStringAsObject = (maybeString) => typeof maybeString === "string" ? JSON.parse(maybeString) : maybeString;
    var getAssetFromKVDefaultOptions = {
      ASSET_NAMESPACE: typeof __STATIC_CONTENT !== "undefined" ? __STATIC_CONTENT : void 0,
      ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST !== "undefined" ? parseStringAsObject(__STATIC_CONTENT_MANIFEST) : void 0,
      cacheControl: defaultCacheControl,
      defaultMimeType: "text/plain",
      defaultDocument: "index.html"
    };
    function assignOptions(options) {
      return Object.assign({}, getAssetFromKVDefaultOptions, options);
    }
    var mapRequestToAsset = (request, options) => {
      options = assignOptions(options);
      const parsedUrl = new URL(request.url);
      let pathname = parsedUrl.pathname;
      if (pathname.endsWith("/")) {
        pathname = pathname.concat(options.defaultDocument);
      } else if (!mime2.getType(pathname)) {
        pathname = pathname.concat("/" + options.defaultDocument);
      }
      parsedUrl.pathname = pathname;
      return new Request(parsedUrl.toString(), request);
    };
    exports.mapRequestToAsset = mapRequestToAsset;
    function serveSinglePageApp(request, options) {
      options = assignOptions(options);
      request = mapRequestToAsset(request, options);
      const parsedUrl = new URL(request.url);
      if (parsedUrl.pathname.endsWith(".html")) {
        return new Request(`${parsedUrl.origin}/${options.defaultDocument}`, request);
      } else {
        return request;
      }
    }
    exports.serveSinglePageApp = serveSinglePageApp;
    var getAssetFromKV = (event, options) => __awaiter(void 0, void 0, void 0, function* () {
      options = assignOptions(options);
      const request = event.request;
      const ASSET_NAMESPACE = options.ASSET_NAMESPACE;
      const ASSET_MANIFEST = parseStringAsObject(options.ASSET_MANIFEST);
      if (typeof ASSET_NAMESPACE === "undefined") {
        throw new types_1.InternalError(`there is no KV namespace bound to the script`);
      }
      const rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
      let pathIsEncoded = false;
      let requestKey;
      if (options.mapRequestToAsset) {
        requestKey = options.mapRequestToAsset(request);
      } else if (ASSET_MANIFEST[rawPathKey]) {
        requestKey = request;
      } else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
        pathIsEncoded = true;
        requestKey = request;
      } else {
        const mappedRequest = mapRequestToAsset(request);
        const mappedRawPathKey = new URL(mappedRequest.url).pathname.replace(/^\/+/, "");
        if (ASSET_MANIFEST[decodeURIComponent(mappedRawPathKey)]) {
          pathIsEncoded = true;
          requestKey = mappedRequest;
        } else {
          requestKey = mapRequestToAsset(request, options);
        }
      }
      const SUPPORTED_METHODS = ["GET", "HEAD"];
      if (!SUPPORTED_METHODS.includes(requestKey.method)) {
        throw new types_1.MethodNotAllowedError(`${requestKey.method} is not a valid request method`);
      }
      const parsedUrl = new URL(requestKey.url);
      const pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
      let pathKey = pathname.replace(/^\/+/, "");
      const cache = caches.default;
      let mimeType = mime2.getType(pathKey) || options.defaultMimeType;
      if (mimeType.startsWith("text") || mimeType === "application/javascript") {
        mimeType += "; charset=utf-8";
      }
      let shouldEdgeCache = false;
      if (typeof ASSET_MANIFEST !== "undefined") {
        if (ASSET_MANIFEST[pathKey]) {
          pathKey = ASSET_MANIFEST[pathKey];
          shouldEdgeCache = true;
        }
      }
      let cacheKey = new Request(`${parsedUrl.origin}/${pathKey}`, request);
      const evalCacheOpts = (() => {
        switch (typeof options.cacheControl) {
          case "function":
            return options.cacheControl(request);
          case "object":
            return options.cacheControl;
          default:
            return defaultCacheControl;
        }
      })();
      const formatETag = (entityId = pathKey, validatorType = "strong") => {
        if (!entityId) {
          return "";
        }
        switch (validatorType) {
          case "weak":
            if (!entityId.startsWith("W/")) {
              return `W/${entityId}`;
            }
            return entityId;
          case "strong":
            if (entityId.startsWith(`W/"`)) {
              entityId = entityId.replace("W/", "");
            }
            if (!entityId.endsWith(`"`)) {
              entityId = `"${entityId}"`;
            }
            return entityId;
          default:
            return "";
        }
      };
      options.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
      if (options.cacheControl.bypassCache || options.cacheControl.edgeTTL === null || request.method == "HEAD") {
        shouldEdgeCache = false;
      }
      const shouldSetBrowserCache = typeof options.cacheControl.browserTTL === "number";
      let response = null;
      if (shouldEdgeCache) {
        response = yield cache.match(cacheKey);
      }
      if (response) {
        if (response.status > 300 && response.status < 400) {
          if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
            response.body.cancel();
            console.log("Body exists and environment supports readable streams. Body cancelled");
          } else {
            console.log("Environment doesnt support readable streams");
          }
          response = new Response(null, response);
        } else {
          let opts = {
            headers: new Headers(response.headers),
            status: 0,
            statusText: ""
          };
          opts.headers.set("cf-cache-status", "HIT");
          if (response.status) {
            opts.status = response.status;
            opts.statusText = response.statusText;
          } else if (opts.headers.has("Content-Range")) {
            opts.status = 206;
            opts.statusText = "Partial Content";
          } else {
            opts.status = 200;
            opts.statusText = "OK";
          }
          response = new Response(response.body, opts);
        }
      } else {
        const body = yield ASSET_NAMESPACE.get(pathKey, "arrayBuffer");
        if (body === null) {
          throw new types_1.NotFoundError(`could not find ${pathKey} in your content namespace`);
        }
        response = new Response(body);
        if (shouldEdgeCache) {
          response.headers.set("Accept-Ranges", "bytes");
          response.headers.set("Content-Length", body.length);
          if (!response.headers.has("etag")) {
            response.headers.set("etag", formatETag(pathKey, "strong"));
          }
          response.headers.set("Cache-Control", `max-age=${options.cacheControl.edgeTTL}`);
          event.waitUntil(cache.put(cacheKey, response.clone()));
          response.headers.set("CF-Cache-Status", "MISS");
        }
      }
      response.headers.set("Content-Type", mimeType);
      if (response.status === 304) {
        let etag = formatETag(response.headers.get("etag"), "strong");
        let ifNoneMatch = cacheKey.headers.get("if-none-match");
        let proxyCacheStatus = response.headers.get("CF-Cache-Status");
        if (etag) {
          if (ifNoneMatch && ifNoneMatch === etag && proxyCacheStatus === "MISS") {
            response.headers.set("CF-Cache-Status", "EXPIRED");
          } else {
            response.headers.set("CF-Cache-Status", "REVALIDATED");
          }
          response.headers.set("etag", formatETag(etag, "weak"));
        }
      }
      if (shouldSetBrowserCache) {
        response.headers.set("Cache-Control", `max-age=${options.cacheControl.browserTTL}`);
      } else {
        response.headers.delete("Cache-Control");
      }
      return response;
    });
    exports.getAssetFromKV = getAssetFromKV;
  }
});

// node_modules/@remix-run/cloudflare-workers/worker.js
var require_worker = __commonJS({
  "node_modules/@remix-run/cloudflare-workers/worker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var kvAssetHandler = require_dist();
    var serverRuntime = require_server_runtime();
    function createRequestHandler2({
      build: build2,
      getLoadContext,
      mode
    }) {
      let platform = {};
      let handleRequest = serverRuntime.createRequestHandler(build2, platform, mode);
      return (event) => {
        let loadContext = typeof getLoadContext === "function" ? getLoadContext(event) : void 0;
        return handleRequest(event.request, loadContext);
      };
    }
    async function handleAsset(event, build2, options) {
      try {
        if (false) {
          return await kvAssetHandler.getAssetFromKV(event, {
            cacheControl: {
              bypassCache: true
            },
            ...options
          });
        }
        let cacheControl = {};
        let url = new URL(event.request.url);
        let assetpath = build2.assets.url.split("/").slice(0, -1).join("/");
        let requestpath = url.pathname.split("/").slice(0, -1).join("/");
        if (requestpath.startsWith(assetpath)) {
          cacheControl = {
            bypassCache: false,
            edgeTTL: 31536e3,
            browserTTL: 31536e3
          };
        }
        return await kvAssetHandler.getAssetFromKV(event, {
          cacheControl,
          ...options
        });
      } catch (error) {
        if (error instanceof kvAssetHandler.MethodNotAllowedError || error instanceof kvAssetHandler.NotFoundError) {
          return null;
        }
        throw error;
      }
    }
    function createEventHandler({
      build: build2,
      getLoadContext,
      mode
    }) {
      const handleRequest = createRequestHandler2({
        build: build2,
        getLoadContext,
        mode
      });
      const handleEvent = async (event) => {
        let response = await handleAsset(event, build2);
        if (!response) {
          response = await handleRequest(event);
        }
        return response;
      };
      return (event) => {
        try {
          event.respondWith(handleEvent(event));
        } catch (e) {
          if (false) {
            event.respondWith(new Response(e.message || e.toString(), {
              status: 500
            }));
          }
          event.respondWith(new Response("Internal Error", {
            status: 500
          }));
        }
      };
    }
    exports.createEventHandler = createEventHandler;
    exports.createRequestHandler = createRequestHandler2;
    exports.handleAsset = handleAsset;
  }
});

// node_modules/@remix-run/cloudflare-workers/index.js
var require_cloudflare_workers = __commonJS({
  "node_modules/@remix-run/cloudflare-workers/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var globals = require_globals();
    var cloudflareKVSessionStorage = require_cloudflareKVSessionStorage();
    var worker = require_worker();
    globals.installGlobals();
    exports.createCloudflareKVSessionStorage = cloudflareKVSessionStorage.createCloudflareKVSessionStorage;
    exports.createEventHandler = worker.createEventHandler;
    exports.createRequestHandler = worker.createRequestHandler;
    exports.handleAsset = worker.handleAsset;
  }
});

// node_modules/remix/browser/platform.js
var import_cloudflare_workers;
var init_platform = __esm({
  "node_modules/remix/browser/platform.js"() {
    import_cloudflare_workers = __toModule(require_cloudflare_workers());
  }
});

// node_modules/remix/browser/index.js
var browser_exports = {};
__export(browser_exports, {
  Form: () => Form,
  Link: () => Link,
  Links: () => Links,
  LiveReload: () => LiveReload,
  Meta: () => Meta,
  NavLink: () => NavLink,
  Outlet: () => import_react_router_dom4.Outlet,
  PrefetchPageLinks: () => PrefetchPageLinks,
  RemixBrowser: () => RemixBrowser,
  RemixServer: () => RemixServer,
  Scripts: () => Scripts,
  ScrollRestoration: () => ScrollRestoration,
  createCloudflareKVSessionStorage: () => import_cloudflare_workers.createCloudflareKVSessionStorage,
  createCookie: () => import_server_runtime.createCookie,
  createCookieSessionStorage: () => import_server_runtime.createCookieSessionStorage,
  createMemorySessionStorage: () => import_server_runtime.createMemorySessionStorage,
  createSession: () => import_server_runtime.createSession,
  createSessionStorage: () => import_server_runtime.createSessionStorage,
  isCookie: () => import_server_runtime.isCookie,
  isSession: () => import_server_runtime.isSession,
  json: () => import_server_runtime.json,
  redirect: () => import_server_runtime.redirect,
  useActionData: () => useActionData,
  useBeforeUnload: () => useBeforeUnload,
  useCatch: () => useCatch,
  useFetcher: () => useFetcher,
  useFetchers: () => useFetchers,
  useFormAction: () => useFormAction,
  useHref: () => import_react_router_dom4.useHref,
  useLoaderData: () => useLoaderData,
  useLocation: () => import_react_router_dom4.useLocation,
  useMatches: () => useMatches,
  useNavigate: () => import_react_router_dom4.useNavigate,
  useNavigationType: () => import_react_router_dom4.useNavigationType,
  useOutlet: () => import_react_router_dom4.useOutlet,
  useParams: () => import_react_router_dom4.useParams,
  useResolvedPath: () => import_react_router_dom4.useResolvedPath,
  useSearchParams: () => import_react_router_dom4.useSearchParams,
  useSubmit: () => useSubmit,
  useTransition: () => useTransition
});
var init_browser3 = __esm({
  "node_modules/remix/browser/index.js"() {
    init_client();
    init_server2();
    init_platform();
  }
});

// build/assets.json
var require_assets = __commonJS({
  "build/assets.json"(exports, module) {
    module.exports = {
      version: "24025b14",
      entry: {
        module: "/build/entry.client-JHHC3IDZ.js",
        imports: [
          "/build/_shared/chunk-42QCTZ7V.js",
          "/build/_shared/chunk-AKSB5QXU.js"
        ]
      },
      routes: {
        root: {
          id: "root",
          path: "",
          module: "/build/root-HHLBQK5R.js",
          hasAction: false,
          hasLoader: false,
          hasCatchBoundary: true,
          hasErrorBoundary: true
        },
        "routes/demos/about": {
          id: "routes/demos/about",
          parentId: "root",
          path: "demos/about",
          module: "/build/routes/demos/about-BTC63KS4.js",
          hasAction: false,
          hasLoader: false,
          hasCatchBoundary: false,
          hasErrorBoundary: false
        },
        "routes/demos/about/index": {
          id: "routes/demos/about/index",
          parentId: "routes/demos/about",
          index: true,
          module: "/build/routes/demos/about/index-BGWJGOYG.js",
          hasAction: false,
          hasLoader: false,
          hasCatchBoundary: false,
          hasErrorBoundary: false
        },
        "routes/demos/about/whoa": {
          id: "routes/demos/about/whoa",
          parentId: "routes/demos/about",
          path: "whoa",
          module: "/build/routes/demos/about/whoa-DSRBPFJ7.js",
          hasAction: false,
          hasLoader: false,
          hasCatchBoundary: false,
          hasErrorBoundary: false
        },
        "routes/demos/actions": {
          id: "routes/demos/actions",
          parentId: "root",
          path: "demos/actions",
          module: "/build/routes/demos/actions-AY4GVC4A.js",
          hasAction: true,
          hasLoader: false,
          hasCatchBoundary: false,
          hasErrorBoundary: false
        },
        "routes/demos/correct": {
          id: "routes/demos/correct",
          parentId: "root",
          path: "demos/correct",
          module: "/build/routes/demos/correct-JLTYRM3I.js",
          hasAction: false,
          hasLoader: false,
          hasCatchBoundary: false,
          hasErrorBoundary: false
        },
        "routes/demos/params": {
          id: "routes/demos/params",
          parentId: "root",
          path: "demos/params",
          module: "/build/routes/demos/params-OKAETW3Z.js",
          hasAction: false,
          hasLoader: false,
          hasCatchBoundary: false,
          hasErrorBoundary: false
        },
        "routes/demos/params/$id": {
          id: "routes/demos/params/$id",
          parentId: "routes/demos/params",
          path: ":id",
          module: "/build/routes/demos/params/$id-IW2AKTT7.js",
          hasAction: false,
          hasLoader: true,
          hasCatchBoundary: true,
          hasErrorBoundary: true
        },
        "routes/demos/params/index": {
          id: "routes/demos/params/index",
          parentId: "routes/demos/params",
          index: true,
          module: "/build/routes/demos/params/index-3C3XWELU.js",
          hasAction: false,
          hasLoader: false,
          hasCatchBoundary: false,
          hasErrorBoundary: false
        },
        "routes/index": {
          id: "routes/index",
          parentId: "root",
          index: true,
          module: "/build/routes/index-QQRWCYUF.js",
          hasAction: false,
          hasLoader: true,
          hasCatchBoundary: false,
          hasErrorBoundary: false
        }
      },
      url: "/build/manifest-24025B14.js"
    };
  }
});

// build/index.js
var require_build = __commonJS({
  "build/index.js"(exports) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
    var __export2 = (target, all) => {
      __markAsModule2(target);
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __reExport2 = (target, module2, desc) => {
      if (module2 && typeof module2 === "object" || typeof module2 === "function") {
        for (let key of __getOwnPropNames2(module2))
          if (!__hasOwnProp2.call(target, key) && key !== "default")
            __defProp2(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc2(module2, key)) || desc.enumerable });
      }
      return target;
    };
    var __toModule2 = (module2) => {
      return __reExport2(__markAsModule2(__defProp2(module2 != null ? __create2(__getProtoOf2(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
    };
    __export2(exports, {
      assets: () => import_assets.default,
      entry: () => entry,
      routes: () => routes
    });
    var React2 = __toModule2(require_react());
    var entry_server_exports = {};
    __export2(entry_server_exports, {
      default: () => handleRequest
    });
    var import_server3 = __toModule2(require_server_browser());
    var import_remix = __toModule2((init_browser3(), browser_exports));
    function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
      let markup = (0, import_server3.renderToString)(/* @__PURE__ */ React2.createElement(import_remix.RemixServer, {
        context: remixContext,
        url: request.url
      }));
      responseHeaders.set("Content-Type", "text/html");
      return new Response("<!DOCTYPE html>" + markup, {
        status: responseStatusCode,
        headers: responseHeaders
      });
    }
    var root_exports = {};
    __export2(root_exports, {
      CatchBoundary: () => CatchBoundary,
      ErrorBoundary: () => ErrorBoundary,
      default: () => App,
      links: () => links
    });
    var import_remix2 = __toModule2((init_browser3(), browser_exports));
    var global_default = "/build/_assets/global-4MW7DZR4.css";
    var dark_default = "/build/_assets/dark-APYDFYJA.css";
    var links = () => {
      return [
        { rel: "stylesheet", href: global_default },
        {
          rel: "stylesheet",
          href: dark_default,
          media: "(prefers-color-scheme: dark)"
        }
      ];
    };
    function App() {
      console.log({ window: typeof document });
      return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement(import_remix2.Outlet, null)));
    }
    function ErrorBoundary({ error }) {
      console.error(error);
      return /* @__PURE__ */ React2.createElement(Document, {
        title: "Error!"
      }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("h1", null, "There was an error"), /* @__PURE__ */ React2.createElement("p", null, error.message), /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
    }
    function CatchBoundary() {
      let caught = (0, import_remix2.useCatch)();
      let message;
      switch (caught.status) {
        case 401:
          message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
          break;
        case 404:
          message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
          break;
        default:
          throw new Error(caught.data || caught.statusText);
      }
      return /* @__PURE__ */ React2.createElement(Document, {
        title: `${caught.status} ${caught.statusText}`
      }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("h1", null, caught.status, ": ", caught.statusText), message));
    }
    function Document({
      children,
      title
    }) {
      return /* @__PURE__ */ React2.createElement("html", {
        lang: "en"
      }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ React2.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement(import_remix2.Meta, null), /* @__PURE__ */ React2.createElement(import_remix2.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix2.Scripts, null), false));
    }
    function Layout({ children }) {
      return /* @__PURE__ */ React2.createElement("div", {
        className: "remix-app"
      }, /* @__PURE__ */ React2.createElement("header", {
        className: "remix-app__header"
      }, /* @__PURE__ */ React2.createElement("div", {
        className: "container remix-app__header-content"
      }, /* @__PURE__ */ React2.createElement(import_remix2.Link, {
        to: "/",
        title: "Remix",
        className: "remix-app__header-home-link"
      }, /* @__PURE__ */ React2.createElement(RemixLogo, null)), /* @__PURE__ */ React2.createElement("nav", {
        "aria-label": "Main navigation",
        className: "remix-app__header-nav"
      }, /* @__PURE__ */ React2.createElement("ul", null, /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix2.Link, {
        to: "/"
      }, "Home")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", {
        href: "https://remix.run/docs"
      }, "Remix Docs")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", {
        href: "https://github.com/remix-run/remix"
      }, "GitHub")))))), /* @__PURE__ */ React2.createElement("div", {
        className: "remix-app__main"
      }, /* @__PURE__ */ React2.createElement("div", {
        className: "container remix-app__main-content"
      }, children)), /* @__PURE__ */ React2.createElement("footer", {
        className: "remix-app__footer"
      }, /* @__PURE__ */ React2.createElement("div", {
        className: "container remix-app__footer-content"
      }, /* @__PURE__ */ React2.createElement("p", null, "\xA9 You!"))));
    }
    function RemixLogo() {
      return /* @__PURE__ */ React2.createElement("svg", {
        viewBox: "0 0 659 165",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        "aria-labelledby": "remix-run-logo-title",
        role: "img",
        width: "106",
        height: "30",
        fill: "currentColor"
      }, /* @__PURE__ */ React2.createElement("title", {
        id: "remix-run-logo-title"
      }, "Remix Logo"), /* @__PURE__ */ React2.createElement("path", {
        d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
      }), /* @__PURE__ */ React2.createElement("path", {
        d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
      }), /* @__PURE__ */ React2.createElement("path", {
        d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
      }), /* @__PURE__ */ React2.createElement("path", {
        d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
      }), /* @__PURE__ */ React2.createElement("path", {
        d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
      }));
    }
    var actions_exports = {};
    __export2(actions_exports, {
      action: () => action,
      default: () => ActionsDemo,
      meta: () => meta
    });
    var import_react7 = __toModule2(require_react());
    var import_remix3 = __toModule2((init_browser3(), browser_exports));
    function meta() {
      return { title: "Actions Demo" };
    }
    var action = async ({ request }) => {
      let formData = await request.formData();
      let answer = formData.get("answer");
      if (typeof answer !== "string") {
        return (0, import_remix3.json)("Come on, at least try!", { status: 400 });
      }
      if (answer !== "egg") {
        return (0, import_remix3.json)(`Sorry, ${answer} is not right.`, { status: 400 });
      }
      return (0, import_remix3.redirect)("/demos/correct");
    };
    function ActionsDemo() {
      let actionMessage = (0, import_remix3.useActionData)();
      let answerRef = (0, import_react7.useRef)(null);
      (0, import_react7.useEffect)(() => {
        if (actionMessage && answerRef.current) {
          answerRef.current.select();
        }
      }, [actionMessage]);
      return /* @__PURE__ */ React2.createElement("div", {
        className: "remix__page"
      }, /* @__PURE__ */ React2.createElement("main", null, /* @__PURE__ */ React2.createElement("h2", null, "Actions!"), /* @__PURE__ */ React2.createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ React2.createElement(import_remix3.Form, {
        method: "post",
        className: "remix__form"
      }, /* @__PURE__ */ React2.createElement("h3", null, "Post an Action"), /* @__PURE__ */ React2.createElement("p", null, /* @__PURE__ */ React2.createElement("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ React2.createElement("label", null, /* @__PURE__ */ React2.createElement("div", null, "Answer:"), /* @__PURE__ */ React2.createElement("input", {
        ref: answerRef,
        name: "answer",
        type: "text"
      })), /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ React2.createElement("p", null, /* @__PURE__ */ React2.createElement("b", null, actionMessage)) : null)), /* @__PURE__ */ React2.createElement("aside", null, /* @__PURE__ */ React2.createElement("h3", null, "Additional Resources"), /* @__PURE__ */ React2.createElement("ul", null, /* @__PURE__ */ React2.createElement("li", null, "Guide:", " ", /* @__PURE__ */ React2.createElement("a", {
        href: "https://remix.run/guides/data-writes"
      }, "Data Writes")), /* @__PURE__ */ React2.createElement("li", null, "API:", " ", /* @__PURE__ */ React2.createElement("a", {
        href: "https://remix.run/api/conventions#action"
      }, "Route Action Export")), /* @__PURE__ */ React2.createElement("li", null, "API:", " ", /* @__PURE__ */ React2.createElement("a", {
        href: "https://remix.run/api/remix#useactiondata"
      }, /* @__PURE__ */ React2.createElement("code", null, "useActionData"))))));
    }
    var correct_exports = {};
    __export2(correct_exports, {
      default: () => NiceWork
    });
    function NiceWork() {
      return /* @__PURE__ */ React2.createElement("h1", null, "You got it right!");
    }
    var params_exports = {};
    __export2(params_exports, {
      default: () => Boundaries,
      meta: () => meta2
    });
    var import_remix4 = __toModule2((init_browser3(), browser_exports));
    function meta2() {
      return { title: "Boundaries Demo" };
    }
    function Boundaries() {
      return /* @__PURE__ */ React2.createElement("div", {
        className: "remix__page"
      }, /* @__PURE__ */ React2.createElement("main", null, /* @__PURE__ */ React2.createElement(import_remix4.Outlet, null)), /* @__PURE__ */ React2.createElement("aside", null, /* @__PURE__ */ React2.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React2.createElement("ul", null, /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix4.Link, {
        to: "."
      }, "Start over")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix4.Link, {
        to: "one"
      }, "Param: ", /* @__PURE__ */ React2.createElement("i", null, "one"))), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix4.Link, {
        to: "two"
      }, "Param: ", /* @__PURE__ */ React2.createElement("i", null, "two"))), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix4.Link, {
        to: "this-record-does-not-exist"
      }, "This will be a 404")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix4.Link, {
        to: "shh-its-a-secret"
      }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement(import_remix4.Link, {
        to: "kaboom"
      }, "This one will throw an error")))));
    }
    var params_exports2 = {};
    __export2(params_exports2, {
      default: () => Boundaries2
    });
    function Boundaries2() {
      return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Params"), /* @__PURE__ */ React2.createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ React2.createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ React2.createElement("h2", null, "Errors"), /* @__PURE__ */ React2.createElement("p", null, "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ React2.createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ React2.createElement("h2", null, "Not Found"), /* @__PURE__ */ React2.createElement("p", null, "(and other", " ", /* @__PURE__ */ React2.createElement("a", {
        href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
      }, "client errors"), ")"), /* @__PURE__ */ React2.createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ React2.createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
    }
    var id_exports = {};
    __export2(id_exports, {
      CatchBoundary: () => CatchBoundary2,
      ErrorBoundary: () => ErrorBoundary2,
      default: () => ParamDemo,
      loader: () => loader,
      meta: () => meta3
    });
    var import_remix5 = __toModule2((init_browser3(), browser_exports));
    var loader = async ({ params }) => {
      if (params.id === "this-record-does-not-exist") {
        throw new Response("Not Found", { status: 404 });
      }
      if (params.id === "shh-its-a-secret") {
        throw (0, import_remix5.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
      }
      if (params.id === "kaboom") {
        lol();
      }
      return { param: params.id };
    };
    function ParamDemo() {
      let data = (0, import_remix5.useLoaderData)();
      return /* @__PURE__ */ React2.createElement("h1", null, "The param is ", /* @__PURE__ */ React2.createElement("i", {
        style: { color: "red" }
      }, data.param));
    }
    function CatchBoundary2() {
      let caught = (0, import_remix5.useCatch)();
      let message;
      switch (caught.status) {
        case 401:
          message = /* @__PURE__ */ React2.createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
        case 404:
          message = /* @__PURE__ */ React2.createElement("p", null, "Looks like you tried to visit a page that does not exist.");
        default:
          message = /* @__PURE__ */ React2.createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ React2.createElement("br", null), caught.status, " ", caught.statusText);
      }
      return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Oops!"), /* @__PURE__ */ React2.createElement("p", null, message), /* @__PURE__ */ React2.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
    }
    function ErrorBoundary2({ error }) {
      console.error(error);
      return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Error!"), /* @__PURE__ */ React2.createElement("p", null, error.message), /* @__PURE__ */ React2.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
    }
    var meta3 = ({ data }) => {
      return {
        title: data ? `Param: ${data.param}` : "Oops..."
      };
    };
    var about_exports = {};
    __export2(about_exports, {
      default: () => Index,
      links: () => links2,
      meta: () => meta4
    });
    var import_remix6 = __toModule2((init_browser3(), browser_exports));
    var about_default = "/build/_assets/about-GGM5BPB3.css";
    var meta4 = () => {
      return {
        title: "About Remix"
      };
    };
    var links2 = () => {
      return [{ rel: "stylesheet", href: about_default }];
    };
    function Index() {
      return /* @__PURE__ */ React2.createElement("div", {
        className: "about"
      }, /* @__PURE__ */ React2.createElement("div", {
        className: "about__intro"
      }, /* @__PURE__ */ React2.createElement("h2", null, "About Us"), /* @__PURE__ */ React2.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React2.createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ React2.createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ React2.createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ React2.createElement("p", null, "Wait a sec...", /* @__PURE__ */ React2.createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ React2.createElement("a", {
        href: "https://remix.run/tutorial/4-nested-routes-params"
      }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement(import_remix6.Outlet, null)));
    }
    var about_exports2 = {};
    __export2(about_exports2, {
      default: () => AboutIndex
    });
    var import_remix7 = __toModule2((init_browser3(), browser_exports));
    function AboutIndex() {
      return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ React2.createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ React2.createElement("p", null, /* @__PURE__ */ React2.createElement("strong", null, /* @__PURE__ */ React2.createElement(import_remix7.Link, {
        to: "whoa"
      }, "Check out one of them here."))));
    }
    var whoa_exports = {};
    __export2(whoa_exports, {
      default: () => AboutIndex2
    });
    var import_remix8 = __toModule2((init_browser3(), browser_exports));
    function AboutIndex2() {
      return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ React2.createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ React2.createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ React2.createElement("p", null, /* @__PURE__ */ React2.createElement("strong", null, /* @__PURE__ */ React2.createElement(import_remix8.Link, {
        to: ".."
      }, "Go back to the ", /* @__PURE__ */ React2.createElement("code", null, "/about"), " index."))));
    }
    var routes_exports = {};
    __export2(routes_exports, {
      default: () => Index2,
      loader: () => loader2,
      meta: () => meta5
    });
    var import_remix9 = __toModule2((init_browser3(), browser_exports));
    var loader2 = () => {
      let data = {
        resources: [
          {
            name: "Remix Docs",
            url: "https://remix.run/docs"
          },
          {
            name: "React Router Docs",
            url: "https://reactrouter.com/docs"
          },
          {
            name: "Remix Discord",
            url: "https://discord.gg/VBePs6d"
          }
        ],
        demos: [
          {
            to: "demos/actions",
            name: "Actions"
          },
          {
            to: "demos/about",
            name: "Nested Routes, CSS loading/unloading"
          },
          {
            to: "demos/params",
            name: "URL Params and Error Boundaries"
          }
        ]
      };
      return (0, import_remix9.json)(data);
    };
    var meta5 = () => {
      return {
        title: "Remix Starter",
        description: "Welcome to remix!"
      };
    };
    function Index2() {
      let data = (0, import_remix9.useLoaderData)();
      return /* @__PURE__ */ React2.createElement("div", {
        className: "remix__page"
      }, /* @__PURE__ */ React2.createElement("main", null, /* @__PURE__ */ React2.createElement("h2", null, "Welcome to Remix!"), /* @__PURE__ */ React2.createElement("p", null, "We're stoked that you're here. \u{1F973}"), /* @__PURE__ */ React2.createElement("p", null, "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly."), /* @__PURE__ */ React2.createElement("p", null, "Check out all the demos in this starter, and then just delete the", " ", /* @__PURE__ */ React2.createElement("code", null, "app/routes/demos"), " and ", /* @__PURE__ */ React2.createElement("code", null, "app/styles/demos"), " ", "folders when you're ready to turn this into your next project.")), /* @__PURE__ */ React2.createElement("aside", null, /* @__PURE__ */ React2.createElement("h2", null, "Demos In This App"), /* @__PURE__ */ React2.createElement("ul", null, data.demos.map((demo) => /* @__PURE__ */ React2.createElement("li", {
        key: demo.to,
        className: "remix__page__resource"
      }, /* @__PURE__ */ React2.createElement(import_remix9.Link, {
        to: demo.to,
        prefetch: "intent"
      }, demo.name)))), /* @__PURE__ */ React2.createElement("h2", null, "Resources"), /* @__PURE__ */ React2.createElement("ul", null, data.resources.map((resource) => /* @__PURE__ */ React2.createElement("li", {
        key: resource.url,
        className: "remix__page__resource"
      }, /* @__PURE__ */ React2.createElement("a", {
        href: resource.url
      }, resource.name))))));
    }
    var import_assets = __toModule2(require_assets());
    var entry = { module: entry_server_exports };
    var routes = {
      "root": {
        id: "root",
        parentId: void 0,
        path: "",
        index: void 0,
        caseSensitive: void 0,
        module: root_exports
      },
      "routes/demos/actions": {
        id: "routes/demos/actions",
        parentId: "root",
        path: "demos/actions",
        index: void 0,
        caseSensitive: void 0,
        module: actions_exports
      },
      "routes/demos/correct": {
        id: "routes/demos/correct",
        parentId: "root",
        path: "demos/correct",
        index: void 0,
        caseSensitive: void 0,
        module: correct_exports
      },
      "routes/demos/params": {
        id: "routes/demos/params",
        parentId: "root",
        path: "demos/params",
        index: void 0,
        caseSensitive: void 0,
        module: params_exports
      },
      "routes/demos/params/index": {
        id: "routes/demos/params/index",
        parentId: "routes/demos/params",
        path: void 0,
        index: true,
        caseSensitive: void 0,
        module: params_exports2
      },
      "routes/demos/params/$id": {
        id: "routes/demos/params/$id",
        parentId: "routes/demos/params",
        path: ":id",
        index: void 0,
        caseSensitive: void 0,
        module: id_exports
      },
      "routes/demos/about": {
        id: "routes/demos/about",
        parentId: "root",
        path: "demos/about",
        index: void 0,
        caseSensitive: void 0,
        module: about_exports
      },
      "routes/demos/about/index": {
        id: "routes/demos/about/index",
        parentId: "routes/demos/about",
        path: void 0,
        index: true,
        caseSensitive: void 0,
        module: about_exports2
      },
      "routes/demos/about/whoa": {
        id: "routes/demos/about/whoa",
        parentId: "routes/demos/about",
        path: "whoa",
        index: void 0,
        caseSensitive: void 0,
        module: whoa_exports
      },
      "routes/index": {
        id: "routes/index",
        parentId: "root",
        path: void 0,
        index: true,
        caseSensitive: void 0,
        module: routes_exports
      }
    };
  }
});

// deno/entry.ts
var import_mime = __toModule(require_mime());
var import_server_runtime2 = __toModule(require_server_runtime());
var build = __toModule(require_build());
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
var handler = (0, import_server_runtime2.createRequestHandler)(build);
async function denoHandler(_req) {
  try {
    let url = new URL(_req.url);
    let file = await Deno.readFile(`./public${url.pathname}`);
    return new Response(file, {
      headers: {
        "Content-Type": import_mime.default.getType(url.pathname)
      }
    });
  } catch (e) {
    console.log(e.code);
    if (e.code !== "EISDIR" && e.code !== "ENOENT") {
      throw e;
    }
  }
  try {
    return await handler(_req);
  } catch (e) {
    return new Response(e.message || e.toString(), {
      status: 500
    });
    return new Response("Internal Error", { status: 500 });
  }
}
console.log("Listening on http://localhost:8000");
serve(denoHandler);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @remix-run/cloudflare-workers v1.0.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.0.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.0.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.0.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=entry.js.map
