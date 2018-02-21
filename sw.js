/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9586097f754094d21678491739ec0a06"],["/archives/2014/11/index.html","d9d5d5b9423d4fa021892d75730a4e6e"],["/archives/2014/index.html","3f297183bfc4e22bdd6dc959ac80019e"],["/archives/2017/04/index.html","8027ff6eaabf6516176927c0d3742397"],["/archives/2017/05/index.html","84719496b3450e0a1403bd5194d45f96"],["/archives/2017/06/index.html","138f449a1ec448ad0fa976b0871ae653"],["/archives/2017/07/index.html","6f258ef43d7adec824b15ded020d18e3"],["/archives/2017/08/index.html","68e824c12523fad93fdb1aec01987092"],["/archives/2017/09/index.html","3d3d60ea3dadd16800f237162d4e7448"],["/archives/2017/10/index.html","1b4b4154708fea0ed83e0bb6c1c5dcc2"],["/archives/2017/11/index.html","6a4da1c16f2fe6d9b4065d1f6ce628fe"],["/archives/2017/12/index.html","b1a6e4dbe854bdc20cc763cd04d461df"],["/archives/2017/index.html","21ad18b3cdda03724455fa3d4e4adba0"],["/archives/2017/page/2/index.html","deac1d8bf1bf8beaa9ba722338f517ca"],["/archives/2017/page/3/index.html","dbb0e3fe92c773c404e559adf402fb7a"],["/archives/2017/page/4/index.html","7f0976338f7f6c78b1bf19005bf3aa73"],["/archives/2017/page/5/index.html","33b7a526a0e25d89d317cb4c6c0d87a1"],["/archives/index.html","dc021e0f8efa3e91db2a6434f4891c45"],["/archives/page/2/index.html","1155a67e1668292c571dbd12019a491b"],["/archives/page/3/index.html","1911271bef95721f4b601619bbe1bfdb"],["/archives/page/4/index.html","2a7af5edd4878e420bf40d9bdc7535f7"],["/archives/page/5/index.html","b21e8dffcc7558ba45978692227be1cf"],["/assets/js/APlayer.min.js","f9c20966a298b3fc255802b0a1cd0ea0"],["/css/main.css","aefd540b8669ac37eefc4a95797103b4"],["/images/123.png","3562a355d10fa5b13e228c235e5a5c00"],["/images/12311.png","8f1ceeacf882a829f49d41c5bc225624"],["/images/4654.png","5f8db480298999afc4e6ce74f8f81415"],["/images/5247353.png","c119257b417d712c888786a81fb849e7"],["/images/854545.svg","74ca10201526ed37657d51432efe2879"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/index.html","83bc7681a7564c4010e46bc152b97174"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","3eee5278c28c1b11a10c347a092ebf54"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","d1ee25b7823708d89469b27b6232257c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8533329f69acf58ad4cd587c6807d538"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","bc3df71e63261a88b7c891ff1f6f2705"],["/page/2/index.html","8ccaa92afa22b79f00072e9e27ce17a3"],["/page/3/index.html","411e5a721a6b937f6ab8a2ca7eda80a9"],["/page/4/index.html","3a3122ba2085cdbc05311fa9bae9a3e4"],["/page/5/index.html","9759741405bd5cb1a1ad83bd1b735728"],["/posts/104acc17/index.html","2a390d450c6578d1f7d3ff6a7dfdd30d"],["/posts/1076a63b/index.html","38f7f50f7ef4e4c64e07618d24c8d0d3"],["/posts/13d9eb0/index.html","be8c80be9671cacf6f9b13217fc0ad08"],["/posts/14f06692/index.html","387adf4aa48be00c7bf9202ee6dd7046"],["/posts/14f837ec/index.html","fee7ca1f7218acc7e98ccb9b2b8224c8"],["/posts/1b5efe41/index.html","a761117490680a1ae9cbb6726b4b0f8a"],["/posts/2145d965/index.html","0c9ab907467959ba23b7f3c7a8ec7db2"],["/posts/35d3a3b2/index.html","359509e8a47256ffcb3dad64684c6cf5"],["/posts/38d9a526/index.html","6a6f8dc8475318f95aa593185fbd8b23"],["/posts/48f71961/index.html","96e1b21723802c1b7024e5d5c221b7a4"],["/posts/4b40a3e3/index.html","5ef6503a06d5588fce162093b24e161f"],["/posts/4c082866/index.html","67cf91529b3af6d6f408f57f27ab1c44"],["/posts/4cf0d6b6/index.html","f951141fead722c135cee9c2c67d10c7"],["/posts/4f785508/index.html","1d3dbdefbbcf33d8db3f0d09ed561824"],["/posts/51d387fd/index.html","f4575ae16af7a0770498f1520b1eeb57"],["/posts/52078ffc/index.html","e46338aa8eacbe7b2ae91be4cb6c448b"],["/posts/597c0af/index.html","f291e664130cf3149bcff7f4601521fc"],["/posts/61c7f65a/index.html","e2215c87d70df6eb826612ed8e82b255"],["/posts/62e11409/index.html","8959d7f992a90430ff5c98406b84d744"],["/posts/67d4f91/index.html","191ff32fdad79b06a05fefb596037d34"],["/posts/722bb71a/index.html","d47ef6e6f04ad69912a68855f9737b06"],["/posts/74201e82/index.html","3d5cb9065faed3d15be59451374b427d"],["/posts/77d696/index.html","519a797b8baab519cf6b153734996600"],["/posts/7889c636/index.html","417c7b13d37ab6cad2b09c09d5f31f98"],["/posts/79fe1679/index.html","a553b896fb28bdc0a7d792081af6b9e4"],["/posts/7a6a6b5a/index.html","28940e6609e0606e8c0c9380a454182f"],["/posts/87627a82/index.html","2db93017c5c2124632a17d7203f91d36"],["/posts/91632940/index.html","2f029529f977d7ece540686948554413"],["/posts/9dcd1a27/index.html","844cbc3983c69d9dc3a38d294f6b0bf8"],["/posts/a63e2db2/index.html","671e912668842074a1e3bef1e7ca2303"],["/posts/a651f7ca/index.html","ef008f804e66f0cd090a81e932da93f8"],["/posts/b8706160/index.html","bacf1c08bfc150f7c87c879ce369b183"],["/posts/ba1505b1/index.html","52be9b8d4de97e30a95bc240cc37d7b5"],["/posts/c073d51/index.html","e575bf063a52fb31c678076ea9cf6d09"],["/posts/c4197f0f/index.html","92d7dbd6544a2ca9024e16ea336a834e"],["/posts/c79c0cb2/index.html","7759a05ea9ad4aaf08e764ad5c10b64c"],["/posts/c7c3121d/index.html","06fe5979accebe905a1c848c8e58055c"],["/posts/ca8cedd8/index.html","24d10cf92c80c80a7e9c783150393ce7"],["/posts/da41be7f/index.html","bc1e6b02bb02f17799f2f5bd8dd97e9a"],["/posts/dce2de1b/index.html","e07086f7430bd5b224acd6cf72e61710"],["/posts/def6abe9/index.html","88d1e01c4561758548c01f15be3bba92"],["/posts/dfc88137/index.html","9c2c4b18c18717df60ca948cbf33352a"],["/posts/f0e65c23/index.html","9c79d71d345d63c5a464df01969c103a"],["/posts/f7fb651d/index.html","8447d0e5031c247e27d82d5fc56d79fc"],["/sw-register.js","afb9dec3aea9087eacc4a8114410b8f9"],["/tags/Linux-系统教程/index.html","e7ab851cf3094c1bdb0ee624f93d7435"],["/tags/Valine，hexo/index.html","60b51bd548fbd2493ee5f6372d2812ee"],["/tags/centos/index.html","5aa2e63f3963aed12b193737900ac666"],["/tags/git/index.html","06e72cc9f787ce9dd451b7bb677e2c0f"],["/tags/linux资料/index.html","d44511e9c927b8403744ea5e9abd4f7a"],["/tags/linux软件/index.html","489f10081db6164879d70e05945bbce6"],["/tags/netlify，hexo/index.html","6bb5ccc594a33f8088034c09f06e0c79"],["/tags/ssl/index.html","26c5ecaa0317379db25a48e939c9566a"],["/tags/window服务器/index.html","0dc1c6b93e703866b3a9799ce3175c7a"],["/tags/“学习计划”/index.html","3dead1f39144e0e8fad66242063cc8a6"],["/tags/“心情”/index.html","2c3f37c16babddcab8d650edcfeda12e"],["/tags/交换机/index.html","aa0ea5ecf3acf49cf32f1de4b78c8b24"],["/tags/企业网/index.html","e62733186ac4ba5b6bd1ad2a787b2cd2"],["/tags/博客建造历程/index.html","8651578202f492c57eb62a148bb22f62"],["/tags/参考/index.html","53d1000967cfe156cc8a1195d254cbaa"],["/tags/心情/index.html","ec609ca1e48dd94c77b9123bcdb0641e"],["/tags/教训/index.html","532eea00b5f7e175e3c69ac0542d0446"],["/tags/方案/index.html","4c2454fda9ba634d24de9574bd7dc98c"],["/tags/经验-待验证/index.html","02612c3a5a96f80f83e29c30e62006c2"],["/tags/经验/index.html","eda78983501a95a190bd2bc32e69d99f"],["/tags/网站/index.html","e78e2f5d504b8d14eb9e820f22cbe615"]];
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
