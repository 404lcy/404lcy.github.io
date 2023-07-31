/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9c4abcc0de2a44ff4968603bc9eb0015"
  },
  {
    "url": "about/index.html",
    "revision": "d557ccc5826498b0bd207f434dda5dbe"
  },
  {
    "url": "assets/css/0.styles.deacf3ae.css",
    "revision": "3a3af42b6c4559cfe0a029380fe1a89a"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.8eef8638.svg",
    "revision": "8eef86381d36c7d02ce250e5243b0752"
  },
  {
    "url": "assets/img/zj.cbe61c89.jpg",
    "revision": "cbe61c893cd253475493e80ee5a33f90"
  },
  {
    "url": "assets/js/1.78aeb193.js",
    "revision": "66649503bceefd48addaa14ce9d93b92"
  },
  {
    "url": "assets/js/10.13f3f6aa.js",
    "revision": "bd56e817dd47e32768a93ddff6144182"
  },
  {
    "url": "assets/js/11.35827c62.js",
    "revision": "22e10c8210e20781029abde37862de86"
  },
  {
    "url": "assets/js/12.36360357.js",
    "revision": "2237a275249a79209bd6653cf24b33af"
  },
  {
    "url": "assets/js/13.247f414e.js",
    "revision": "bb9898fea5b5dd8cc5a5bb9bb44c198f"
  },
  {
    "url": "assets/js/14.37f156bc.js",
    "revision": "0bf2435e87ff081ef0ff510c0b9e7fd3"
  },
  {
    "url": "assets/js/15.ba1675b3.js",
    "revision": "e50e384309d85a48cd545cface742435"
  },
  {
    "url": "assets/js/16.19a17d3b.js",
    "revision": "76cd22019a5ecb4b05224683f50dac4f"
  },
  {
    "url": "assets/js/17.8c679916.js",
    "revision": "9034e5506b2f4dac68a96864af422ff2"
  },
  {
    "url": "assets/js/18.d8a209c2.js",
    "revision": "cc6a0399cf7a2b667f3dc360a55c9215"
  },
  {
    "url": "assets/js/19.d05e4a89.js",
    "revision": "1e87a90dc72cbf63a7ab1cb892bd17e0"
  },
  {
    "url": "assets/js/20.9d5e545d.js",
    "revision": "7fdf22b9dab7e2e23cad68baf22f63e0"
  },
  {
    "url": "assets/js/21.a136d80f.js",
    "revision": "b8405f195a4295e14eac46c16f0e91c5"
  },
  {
    "url": "assets/js/22.645ecbbf.js",
    "revision": "b1dd45f478da19784d1d6bc42ddc6512"
  },
  {
    "url": "assets/js/23.37a75821.js",
    "revision": "e1174be05d6641a3bfb53e7f6cde6f13"
  },
  {
    "url": "assets/js/24.587583b9.js",
    "revision": "8b17c6c0deea0bc32f829c08c5c046a3"
  },
  {
    "url": "assets/js/25.72559a24.js",
    "revision": "beaf3f73ea141a4135e3c15f10a811c0"
  },
  {
    "url": "assets/js/26.9ff7a323.js",
    "revision": "da1c714abb9b7547393437a8e582d9cc"
  },
  {
    "url": "assets/js/27.0c6c86b9.js",
    "revision": "1dc0db71f2f7077a9c6df6d511cff452"
  },
  {
    "url": "assets/js/28.a35777d5.js",
    "revision": "2f129c8153dcff825778da6ec4059da0"
  },
  {
    "url": "assets/js/29.1679ba8e.js",
    "revision": "9589b59a50839289381a2d16f308cd23"
  },
  {
    "url": "assets/js/3.29c63136.js",
    "revision": "fed3d1d326a0eb720efa8e29000c519d"
  },
  {
    "url": "assets/js/30.2c16e724.js",
    "revision": "882e522ba625c9371fdee7cd89fdbfdd"
  },
  {
    "url": "assets/js/31.0c047c9f.js",
    "revision": "85628a3ec1c40fc5ce5dfcee3fb48e90"
  },
  {
    "url": "assets/js/32.9760e19c.js",
    "revision": "f611522ac7469e788e7d99f0069146f1"
  },
  {
    "url": "assets/js/33.af68da58.js",
    "revision": "44bb6443ab30b47dd5e10b8df75d8045"
  },
  {
    "url": "assets/js/34.1966e43f.js",
    "revision": "db6f04aa49881cb8566c7b7c31108f57"
  },
  {
    "url": "assets/js/35.2cab32f7.js",
    "revision": "0781f564666e651b1a1a604f1bef4c53"
  },
  {
    "url": "assets/js/36.3870c527.js",
    "revision": "77d53c2967ca09474f563ec0aec0051c"
  },
  {
    "url": "assets/js/37.a155ef5f.js",
    "revision": "2b6e9679e1eb573a6576c479a9f48a54"
  },
  {
    "url": "assets/js/38.b44db520.js",
    "revision": "d5f6bcb06e50d5499d2b4e390205c72c"
  },
  {
    "url": "assets/js/39.9178e34b.js",
    "revision": "0d7965f906326580ee1bbadf066b7df5"
  },
  {
    "url": "assets/js/4.68b2dff6.js",
    "revision": "30dce07f9c00c8f2955cebc6f908c4b6"
  },
  {
    "url": "assets/js/40.304fe73b.js",
    "revision": "8f56f9877d313688d4206348cdf539d6"
  },
  {
    "url": "assets/js/41.7b35dde4.js",
    "revision": "d82f2102a8604972890d848bf2a3a238"
  },
  {
    "url": "assets/js/42.ad180d4e.js",
    "revision": "1b80fa49d5c1b243458bdf4890bb941d"
  },
  {
    "url": "assets/js/43.292cea12.js",
    "revision": "e9da61f99e26f4068a7aca727dc48592"
  },
  {
    "url": "assets/js/44.defa686c.js",
    "revision": "532ccb37a9c5ae0b821b6ddaa02ab430"
  },
  {
    "url": "assets/js/45.798e7d40.js",
    "revision": "2289f0a0477d8e8a5d58826715e42b7e"
  },
  {
    "url": "assets/js/46.92ceb2b8.js",
    "revision": "6de7abfe60f14586a70052f28d85b2c1"
  },
  {
    "url": "assets/js/47.fad60566.js",
    "revision": "b04b9f644a50a03e00f7d590c2432b15"
  },
  {
    "url": "assets/js/48.ee3594c6.js",
    "revision": "15518c98528cd3d100a513986edd8f88"
  },
  {
    "url": "assets/js/5.a5438138.js",
    "revision": "13e1e99c2a60d42a9ddfb52d15f2fa91"
  },
  {
    "url": "assets/js/6.416ee617.js",
    "revision": "9ce2bd49a76d0bb3d9f04a8b34d87da6"
  },
  {
    "url": "assets/js/7.f66178da.js",
    "revision": "d43deaf75992a72dbed57ab92c490658"
  },
  {
    "url": "assets/js/8.2828cb6c.js",
    "revision": "0f6e119984443fa789a9767624d1c033"
  },
  {
    "url": "assets/js/9.c491a95e.js",
    "revision": "a98bde2aa31bafb1bd2edf060fe53232"
  },
  {
    "url": "assets/js/app.303b17cb.js",
    "revision": "e387dda337f170ea770a8171d70e8ed4"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "c6d91e4cb7b9202513975ee42a00b929"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "afdb5c77cd9ef62536455dca01b1e9ed"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8e99da497818c97362f1b8324afd8b66"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "29a501174968baa6df092d421d90a7b2"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "46ea4b9a97f13df0e29bfcfde7b9e528"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "d0270f7500eaf01efb18488f3c04953b"
  },
  {
    "url": "categories/index.html",
    "revision": "ce45791d4c0ca2067c223f9442a03205"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "9ec81b5d5b8f6ee9967a831225255170"
  },
  {
    "url": "icons/首页.jpeg",
    "revision": "f7094f2861b7d872d1d490144f22fb1a"
  },
  {
    "url": "icons/bg_login.jpeg",
    "revision": "111223f9cf71b9a816ce7a1d01dae762"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "icons/zj.jpg",
    "revision": "cbe61c893cd253475493e80ee5a33f90"
  },
  {
    "url": "index.html",
    "revision": "8121ea2b641cc6dbda5c9a2816a8f3c4"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "88e9804a4af053517e09ec0c733a1b20"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "b8e094d853f2c91f2b05ca43ff3f609e"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "48329420d4a1e8ba93965805f11c084f"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "e4d8714ac91375863b9f37878924f6d9"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "2f4ea00174804d6181699f6db4b77735"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "3258503ef46cc678d8a539107b5f60dd"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "d1554a5cbe0b14f2773a9d3b6ff24060"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "46ad020b01b22181d004c70946cc7e0c"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "00c1e5f8e5b1481e359023cfb27ef2ea"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "24452d13f00bc0a4ac73b24d79cc4a6d"
  },
  {
    "url": "note/index.html",
    "revision": "3598c53737f010b3e66d4a9200cf9b58"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "2fc7de997a9f71029262cac3bea94582"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "0a047b0be03cdef817cd8630f985b7b1"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "dc9289829b0f239d7748418593159edd"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "2b5723b999d55b04341cda3a6e6e20f0"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "064446db2ccb5f29b626583188e83d59"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "e99ccff22895950d5fbbf4d62365d60e"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "bcda74bff41b63eb4f1e745c1630c581"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "d318ca30472b6764cd3174efef3c4551"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "c1daf617ec33fde0f1aba6ab985faaf1"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "438fb497dc59783b72d7e1fe8135e5d5"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "d2e1a115d3ceb22e7d3de695a36c0f7d"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "a8d78a6f970b4e3977fb01e636bc21d0"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "7505040b94fe6eeb14090a2c203bcf67"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "c837d9cceb19c89365fea0652b71dcc5"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "7fdf02caeacc466b0821f4df2da4df38"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "3606551eba654e60740bcfaf8d98803e"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "d93b79956ce2fd728646315804678d72"
  },
  {
    "url": "tag/index.html",
    "revision": "796fda8cf680fb92c9c49caa8f3aed9a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "535b90b486b50ea17591d8dc6237299a"
  },
  {
    "url": "tag/promise/index.html",
    "revision": "97e900f316c4aefa5f8e196315c71719"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "6544326b844dcc6d06277a5bf5123537"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "fec0fdf63dbf65822d51dc048930a318"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "0fd994b95cb16b73b28080511aa520cd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9430588d258266c9fd13ad2d294f7258"
  },
  {
    "url": "timeline/index.html",
    "revision": "035af947d47fd6eda2e620dcdab397cf"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "f3b5973cbf7e5666ae1130b021b9fea8"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "a713f82a4a97723f980c32de32797a98"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "649ee1a29946642f866e13c6fd1d814c"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "5b406dd93183c7017cc8376b5d97b338"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "6bed4138310af89f90a39638054089e3"
  },
  {
    "url": "views/qian-duan/2023/jiang-chi-zu-jian.html",
    "revision": "5540a5b78be55d81d8966a95de796b25"
  },
  {
    "url": "views/qian-duan/2023/you-ya-de-chu-li-async-await.html",
    "revision": "6797a8d3f5c3e6e605f16e823de384c2"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "81242d6030fc71667baaa0ae0d3ed2d8"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "dd21cd288bcee0cd0bf879c7781eb954"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "9ff1ed6e27452ef979d136b09ecd3403"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "d843b2e96d62a150238082296ee8c385"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "80264f85aa99629002c21e440c55155b"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "692d906abd927708792883ed232c1cc0"
  },
  {
    "url": "views/zhai-ji/jing-dian-yong-liu-chuan.html",
    "revision": "44bf64b6447fbeb8f9378567e03fbc93"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "bb77e896bd6140fc19d6e05345f5a980"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "91ee895e4ecf1bf972e02ffa0995ec02"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
