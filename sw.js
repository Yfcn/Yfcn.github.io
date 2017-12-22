/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5680284a6999194d2d1453658a0fea3b"],["/archives/2014/11/index.html","e4e4933bd21f32ebcbbd28e45a33a24a"],["/archives/2014/index.html","3d06938482b4e1dc8280aeb19a06ab13"],["/archives/2017/04/index.html","882017f03006022447c59f52081f8072"],["/archives/2017/05/index.html","897f80867f0e80a6f6c52d3902d4dd8b"],["/archives/2017/06/index.html","f689c2ab8f5696b641703de0ed1c880d"],["/archives/2017/07/index.html","c4efdd1c61ce397edda421d158ba5956"],["/archives/2017/08/index.html","e07303dcec6493ba1f5ed199c9e0dd9f"],["/archives/2017/09/index.html","f6f4d6d4780160c42ce5d3293f0eaaeb"],["/archives/2017/10/index.html","ec287147be5f28c067c14042dbbaf7ac"],["/archives/2017/11/index.html","5c9f3606c607d60bba25c3875b678e85"],["/archives/2017/12/index.html","2adec340469caf8f638a0427a06c18c3"],["/archives/2017/index.html","31c21e62185925f9e91d276f5ee81ceb"],["/archives/2017/page/2/index.html","191d24b7baefd3e79e9092dce6d880bd"],["/archives/2017/page/3/index.html","7904554512fbf4512be5ffaff8d09ca5"],["/archives/2017/page/4/index.html","e932358df5a4e009b996f4ae9b28a869"],["/archives/2017/page/5/index.html","978a945a60202aa557dfcf8749d113e7"],["/archives/index.html","5f573e1d2158cad47bd1ae349006257f"],["/archives/page/2/index.html","aed91673358225058cdd08749e58a25f"],["/archives/page/3/index.html","ae1807976f263ef0f2c1e9be27408058"],["/archives/page/4/index.html","f8da9ebf00d9a8142d9be7af8a778771"],["/archives/page/5/index.html","35cc54b725c2b7956016920f743efbbd"],["/assets/js/APlayer.min.js","f9c20966a298b3fc255802b0a1cd0ea0"],["/css/main.css","c72cae0f999baae0ae259885ec1a64a8"],["/images/123.png","3562a355d10fa5b13e228c235e5a5c00"],["/images/12311.png","8f1ceeacf882a829f49d41c5bc225624"],["/images/4654.png","5f8db480298999afc4e6ce74f8f81415"],["/images/5247353.png","c119257b417d712c888786a81fb849e7"],["/images/854545.svg","74ca10201526ed37657d51432efe2879"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/index.html","eec97b2bacadbaee0641d329b61a5008"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","3eee5278c28c1b11a10c347a092ebf54"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","d1ee25b7823708d89469b27b6232257c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8533329f69acf58ad4cd587c6807d538"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","5f6302d2fefe67be3a2488e268c208ef"],["/page/2/index.html","4047f54a304124c52afdb5015f7eaf2f"],["/page/3/index.html","84bd084178ed317cf541ed51333c2bb9"],["/page/4/index.html","1beabb141c026ea065eba143f6e8cce7"],["/page/5/index.html","4a26871dc98f44451dae66ff30720fc1"],["/posts/104acc17/index.html","05fb58339a26f39a561a1dad546fcbec"],["/posts/1076a63b/index.html","c00dc66e2e72a85938b756953c18018a"],["/posts/13d9eb0/index.html","7000c69017a0fd8856da298cd6ad571e"],["/posts/14f06692/index.html","4b2dfa4acc9c5e6f99b37553d3f38798"],["/posts/14f837ec/index.html","010db4b2087738fb36e7225cdec8652a"],["/posts/1b5efe41/index.html","6cebc049fdb5dd20433bf2103c5accd5"],["/posts/2145d965/index.html","ea45ea347978f9fc7ad5a54caf62c61a"],["/posts/35d3a3b2/index.html","8cce5e8661105e7bbe51fd50d51e93a4"],["/posts/38d9a526/index.html","74a6a1b050065d6a57b20178e3e94312"],["/posts/48f71961/index.html","852876c70caf164092107956005c8812"],["/posts/4b40a3e3/index.html","03b5e477f3888ae84973c38b079c785a"],["/posts/4c082866/index.html","2d3d75025debcab4abb2dc5d3076b294"],["/posts/4cf0d6b6/index.html","e84d52ed5db9f8d84278756637905cac"],["/posts/4f785508/index.html","f6adca36a84516d7e8b0ee0a2e172941"],["/posts/51d387fd/index.html","9155ea1fb5d4dc745a9df343d5f01cf6"],["/posts/52078ffc/index.html","e329d14543518e0e5445d9121a891614"],["/posts/597c0af/index.html","aecfcad42ebd8e30ec3c6e900f998dc4"],["/posts/61c7f65a/index.html","5e3eb06988e8a8af74cb29b5a66361aa"],["/posts/62e11409/index.html","eedf1bcfe1212958e728050db4c11c38"],["/posts/67d4f91/index.html","ea83c79b5dca1495fccbdd3675c01e52"],["/posts/722bb71a/index.html","9dad35cfd7b7d171a4c138b9592c631a"],["/posts/74201e82/index.html","16665610f12e1c503c14b10cf6f68d18"],["/posts/77d696/index.html","1ddbc45f8c13e64cf79b07e25e62f802"],["/posts/7889c636/index.html","e0f42f17b8883fafbe696e2a15c039cf"],["/posts/79fe1679/index.html","55a2a56cf365cf6f73513fdc25e7d088"],["/posts/7a6a6b5a/index.html","d47b647bd0f89973c334148f506c5a58"],["/posts/87627a82/index.html","5132905f669fdfbeacaf820a4cd54157"],["/posts/91632940/index.html","4c3c86e1d17effc96beb0c6f2c6393bc"],["/posts/9dcd1a27/index.html","31195c6b6d7456a81bedf50b64f73f07"],["/posts/a63e2db2/index.html","0925d9c3c5ffaa93c63b278f0ab19311"],["/posts/a651f7ca/index.html","5c1e1161f39c1be964638f0863269d3d"],["/posts/b8706160/index.html","a37c174e0d28da7e2271451f35e3d8ae"],["/posts/ba1505b1/index.html","1e8ff9411e2724beb40d040b69fa7afe"],["/posts/c073d51/index.html","688adad2d15a8d30f87d5adaaa2694a3"],["/posts/c4197f0f/index.html","55b6a42826ae0956ce68d31b79c43b90"],["/posts/c79c0cb2/index.html","13557a1861fc87417050fb7e557ba655"],["/posts/c7c3121d/index.html","6dc765916987d6b13aa168bdaab5d2e5"],["/posts/ca8cedd8/index.html","f80b7e906b1e45ee705a5c96fc31027b"],["/posts/da41be7f/index.html","5401a08d0ce788b682c07cf7201506ac"],["/posts/dce2de1b/index.html","a355f5382339c92ef764428295ad79fd"],["/posts/def6abe9/index.html","113d68554668a04615b58ba1b24b52e4"],["/posts/dfc88137/index.html","4efb92a7c63dd5fdb67cc0c65a4717a8"],["/posts/f0e65c23/index.html","845ff68f6d9a27e402d18c9924e028de"],["/posts/f7fb651d/index.html","baa37166eb6757ec592bcc315ae20c41"],["/sw-register.js","fe43eccd33988216a79b8ef37cc2acae"],["/tags/Linux-系统教程/index.html","2f0dd2ce831eb876f63fb1179a12c537"],["/tags/Valine，hexo/index.html","3210f6baa523136cc75af69630270024"],["/tags/centos/index.html","d387cf5ba1913ce041f42d5b09903b3d"],["/tags/git/index.html","35f829fddaf7b092dfbb6166f66c79d0"],["/tags/linux资料/index.html","20496ae0a4ab5efb18c654036ae018f2"],["/tags/linux软件/index.html","906dda07e98f3c60936bcfa7edeeefdd"],["/tags/netlify，hexo/index.html","215b4a68b785ddf0a3644262f1cea94f"],["/tags/ssl/index.html","b565f2f5d0abb9368f00a5ac66a71e93"],["/tags/window服务器/index.html","ac54fa12a4cf55a70342b23c12e2146d"],["/tags/“学习计划”/index.html","f9c2e17e16412b5f32bd41184cbf5986"],["/tags/“心情”/index.html","6e4a346b5ae8040e4c231b1f734e422f"],["/tags/交换机/index.html","12152610063a28a392b55b2360f0e533"],["/tags/企业网/index.html","d16e0fa709d8dfa53522b83d028c98ff"],["/tags/博客建造历程/index.html","6340cf7e828619ed3a6199c86a9532e3"],["/tags/参考/index.html","b3429f0fd5bb835dafc251a54b9ddfa8"],["/tags/心情/index.html","a54cc3fb113bbcc9e6bac53a6ae68e4c"],["/tags/教训/index.html","8f4bdd7634419e4086e01f00d471613b"],["/tags/方案/index.html","5d53c23d0218d34deb7284f31c79b893"],["/tags/经验-待验证/index.html","6188ae57ab54b78b37c4b5c695b1dbcc"],["/tags/经验/index.html","e331e7efe17a82ce962abfbdfc3b6d52"],["/tags/网站/index.html","d45540196dad844ca786ac210b5f9e1c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
