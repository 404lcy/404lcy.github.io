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
    "revision": "c2c82a6e455c663b32859a56df1ce2c6"
  },
  {
    "url": "about/index.html",
    "revision": "dc8df8255cb06e6132f7353e1b293e91"
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
    "url": "assets/js/11.4a9762bd.js",
    "revision": "afad3b4877dc2e6949fea087d9746e61"
  },
  {
    "url": "assets/js/12.36360357.js",
    "revision": "2237a275249a79209bd6653cf24b33af"
  },
  {
    "url": "assets/js/13.81fe95ad.js",
    "revision": "1b49e8b6ffb8b106c8291970fdbeb23e"
  },
  {
    "url": "assets/js/14.ad2029c6.js",
    "revision": "68bfa79c15c37a3d0c44247bb982369d"
  },
  {
    "url": "assets/js/15.ba1675b3.js",
    "revision": "e50e384309d85a48cd545cface742435"
  },
  {
    "url": "assets/js/16.cbb69c41.js",
    "revision": "b9c13dad2893f30f8708c9955946caa7"
  },
  {
    "url": "assets/js/17.8c679916.js",
    "revision": "9034e5506b2f4dac68a96864af422ff2"
  },
  {
    "url": "assets/js/18.1518e59b.js",
    "revision": "709a62e183838625522f451243760e5b"
  },
  {
    "url": "assets/js/19.da6df275.js",
    "revision": "b77ea9edfcc4a6f02d9bee944db619b1"
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
    "url": "assets/js/24.54d8a06b.js",
    "revision": "1a90fea6446662fb4831f2c33d91e373"
  },
  {
    "url": "assets/js/25.9d8f2726.js",
    "revision": "a6036375d8d2ed7f20bdd0ffb3d726c5"
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
    "url": "assets/js/28.190e54b9.js",
    "revision": "9f3accff8fe52d2e76006502bdb2c65b"
  },
  {
    "url": "assets/js/29.b51761f1.js",
    "revision": "e21ceef4ddcacb4fcd79167abed592e2"
  },
  {
    "url": "assets/js/3.29c63136.js",
    "revision": "fed3d1d326a0eb720efa8e29000c519d"
  },
  {
    "url": "assets/js/30.76017844.js",
    "revision": "efe0709ee28782dfd93c655d70080718"
  },
  {
    "url": "assets/js/31.2f875c62.js",
    "revision": "d832d4fa2c58a98ec2b3207bacd3e635"
  },
  {
    "url": "assets/js/32.2f4c831b.js",
    "revision": "445938f0a7f11164c7d41c3fab3fca83"
  },
  {
    "url": "assets/js/33.4451e665.js",
    "revision": "64e12f2487512e0a6f433836f36ac181"
  },
  {
    "url": "assets/js/34.6aa992e8.js",
    "revision": "e83c913e7348dc30a7892bbe9911ab8e"
  },
  {
    "url": "assets/js/35.2cab32f7.js",
    "revision": "0781f564666e651b1a1a604f1bef4c53"
  },
  {
    "url": "assets/js/36.57e778b3.js",
    "revision": "d6646a1af3ea87276ca7238e7410334c"
  },
  {
    "url": "assets/js/37.f9f7d533.js",
    "revision": "ac786e1526a0a23dc8f0a3c284d95fb7"
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
    "url": "assets/js/40.2d1d36f4.js",
    "revision": "ca38c7128eea03384c938a7b2267490a"
  },
  {
    "url": "assets/js/41.2a17f0a1.js",
    "revision": "2d92d8ce302c6b14a758de40ccf8ba6f"
  },
  {
    "url": "assets/js/42.a3247920.js",
    "revision": "dbe11aee5d8361ef768b40138ae627ab"
  },
  {
    "url": "assets/js/43.f69fe2d6.js",
    "revision": "70ead005606c6b30b38fa9d848651bba"
  },
  {
    "url": "assets/js/44.16348fc1.js",
    "revision": "9cb59d4e8736a160593f220a69b6341b"
  },
  {
    "url": "assets/js/45.76ad2eaf.js",
    "revision": "b0911176f827d5b31bfebb7c0899c860"
  },
  {
    "url": "assets/js/46.64ec7235.js",
    "revision": "5a32738e1bb326dbc8f892b2ae0b227d"
  },
  {
    "url": "assets/js/47.d6cff041.js",
    "revision": "5c08e6a191303bbf8062a740966c45c8"
  },
  {
    "url": "assets/js/48.38c06fb7.js",
    "revision": "78e7fde98093c45c4a96d6e4495818f2"
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
    "url": "assets/js/app.8e4b478d.js",
    "revision": "e224d6f77b3ae57615a1799936f76f68"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "9f22d948570a7771798311246aaf38d1"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "25416b6c45fd9cfe6e7fa4606f9efc9f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a7c1ee35b106385c7e7e943506f7b23c"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "7725273d00c7a6d10ca8ac4be1eb4734"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "ab0c660b2b7225a09f385c68a316d3cf"
  },
  {
    "url": "categories/DRL/index.html",
    "revision": "f2e487d875c0bbbc567777f1c83c7cd5"
  },
  {
    "url": "categories/index.html",
    "revision": "d9d695d8243401d749784770e9be35f8"
  },
  {
    "url": "categories/ROS/index.html",
    "revision": "3c117bb1f9e15c8ad7f3ec2d2c2cb2e9"
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
    "url": "icons/blog_logo.jpeg",
    "revision": "5df25c387f792997a83eaf1f4e2dfa4e"
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
    "url": "icons/gc_one.jpg",
    "revision": "4ee555db775994a0030c26faf21b74b6"
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
    "revision": "6d60c5a87a6d635830e48fef9de1c493"
  },
  {
    "url": "note/css/css3flip.html",
    "revision": "b3fd41cc8503ad3c52d7b958e7044511"
  },
  {
    "url": "note/css/css3xin-te-xing.html",
    "revision": "2c2a0bbac109a038526dcea8a0d3e8d1"
  },
  {
    "url": "note/fe-unit-test/chai.html",
    "revision": "0b7ba1143d2618a4a5878007e398c3ed"
  },
  {
    "url": "note/fe-unit-test/mocha.html",
    "revision": "ca801829d269021cc553751769ac8465"
  },
  {
    "url": "note/fe-unit-test/vuetestutils.html",
    "revision": "0549cdabe841cb3cc13cde7289a906ca"
  },
  {
    "url": "note/html5/canvas.html",
    "revision": "d74aca0c788070a9306f66969018dff2"
  },
  {
    "url": "note/html5/html5biao-dan-yuan-su.html",
    "revision": "1b7160fe90471727eeec39a32e34a69f"
  },
  {
    "url": "note/html5/html5de-yu-yi-yuan-su.html",
    "revision": "012f9750b4c49323809884fb058e8c7d"
  },
  {
    "url": "note/html5/html5duo-mei-ti-biao-qian.html",
    "revision": "b34a055cba7d80bae843df69143fe605"
  },
  {
    "url": "note/html5/html5zhong-de-api.html",
    "revision": "01c81b22434a074560dff24f6dc571a9"
  },
  {
    "url": "note/index.html",
    "revision": "385b744e76947a6ae3c5fcae87eb5c72"
  },
  {
    "url": "note/js/jsdui-xiang.html",
    "revision": "3e93d050bbd2cfabc2112f7a4c20b038"
  },
  {
    "url": "note/js/jshan-shu-de-si-zhong-diao-yong-fang-shi.html",
    "revision": "4b9ce2e02c1a344869cae8f337d500db"
  },
  {
    "url": "note/js/jsji-cheng.html",
    "revision": "64c22c33afb62c8a5b16f8a3a6f3aa44"
  },
  {
    "url": "note/js/jsshu-ju-lei-xing.html",
    "revision": "fa9ffd7ec8711a965ad3caef37304817"
  },
  {
    "url": "note/js/jsyuan-xing-lian-bi-bao.html",
    "revision": "7fe5a46bebe66f6a5b08758228009853"
  },
  {
    "url": "note/vue/vueji-chu-bi-ji.html",
    "revision": "86d64e91811a27a68b9419b8e20eda88"
  },
  {
    "url": "note/vue/vuezu-jian.html",
    "revision": "26eb0f56728fa82017d1a81eee23f5bc"
  },
  {
    "url": "note/wechat-mini-program/chu-shi-wei-xin-xiao-cheng-xu.html",
    "revision": "70823b1fb51d9ed2909320942e03c4a6"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "e5034e89223bd906b7e1afb05a2bab23"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "fa8f47bbf9ee19de18ae15510549504c"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "a6c73b88d826120ed69767231f0b9bff"
  },
  {
    "url": "tag/诗/index.html",
    "revision": "3443f7aec93ccd258c34847367dd8c02"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "757c97dda6e2fdb4ed81eb4ea63892dc"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "23b896c312af6d5bb7c3adcd32fc628c"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "51ea130e7c99a5200cefc831064a6c71"
  },
  {
    "url": "tag/DRL/index.html",
    "revision": "4fb110fea720543ea4f65fbea4d33e4c"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "c9af670a649b7ef314765ffffe3bf790"
  },
  {
    "url": "tag/index.html",
    "revision": "953dff196bc905e8917e19ea1a2557ae"
  },
  {
    "url": "tag/js/index.html",
    "revision": "940e98b315b0d696aa5b70c73d6c6739"
  },
  {
    "url": "tag/promise/index.html",
    "revision": "343e40d4a27af55e27e42fbbef52c808"
  },
  {
    "url": "tag/ROS/index.html",
    "revision": "cc941e25d6b54a1cb0d9da9b54af1dde"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "6ddb33e0a104afaee437551698173101"
  },
  {
    "url": "tag/vuepress-theme-reco/index.html",
    "revision": "1638bbc9deaf8c7c6381b234e3621dd8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "aa830fabfeced6408f30aac39edec400"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9cf6669fa07f7e99652dcb61602c85c"
  },
  {
    "url": "views/drl/2022/spinningup.html",
    "revision": "99c1f797224d332a1e5aad4cdd54302f"
  },
  {
    "url": "views/qian-duan/2019/qian-tan-qian-duan-dan-yuan-ce-shi.html",
    "revision": "58dfeca2723ff0c2dc2a070fedadcf4f"
  },
  {
    "url": "views/qian-duan/2019/vue-cli3zhong-dan-yuan-ce-shi-huan-jing-de-da-jian.html",
    "revision": "4e3d6406c14bf2a3cc3780c5e5683a70"
  },
  {
    "url": "views/qian-duan/2020/localstoragebian-dong-jian-ting.html",
    "revision": "0cbccf4d03e14633a320d603e8d3e3a2"
  },
  {
    "url": "views/qian-duan/2021/vuepress-theme-recoxin-shou-zhi-bei-zhi-hellokao-ya.html",
    "revision": "2f5c11f83108216f502ecbc8e533c0ad"
  },
  {
    "url": "views/qian-duan/2023/jiang-chi-zu-jian.html",
    "revision": "4cb4f6c5c30747ab108db162b04ce830"
  },
  {
    "url": "views/qian-duan/2023/you-ya-de-chu-li-async-await.html",
    "revision": "d6579d833f4d65a07442eec4a721925f"
  },
  {
    "url": "views/ros/rosan-zhuang-bi-lei.html",
    "revision": "a5b20a84f3b8484732e7d0543da071cb"
  },
  {
    "url": "views/ros/roschu-ji-jiao-cheng.html",
    "revision": "0b1e3f25abadbe9e255f20b6b26f5838"
  },
  {
    "url": "views/ros/roszhong-ji-jiao-cheng.html",
    "revision": "4459fb723d33c222099c1effa2bb8bb3"
  },
  {
    "url": "views/sui-bi/2019/mei-you-li-xiang-de-ren-bu-shang-xin.html",
    "revision": "959c1d9bda5bfe158c29f4bf70559c6b"
  },
  {
    "url": "views/sui-bi/2019/zu-qiu-he-yao-gun-le.html",
    "revision": "c76006c3dd3c8b62ae36baa8241ad3fa"
  },
  {
    "url": "views/sui-bi/2021/the-fire-in-your-eyes-keeps-me-warm.html",
    "revision": "7529b53ab7f730d19b3c542db8e023a5"
  },
  {
    "url": "views/zhai-ji/jing-dian-yong-liu-chuan.html",
    "revision": "f9da8cd84001eb742d28d9740c52c678"
  },
  {
    "url": "views/zhai-ji/wo-yi-piao-ling-jiu.html",
    "revision": "067b223e65d3ea5bdbfa89e8bfb802b3"
  },
  {
    "url": "views/zhai-ji/yue-guang-luo-zai-zuo-shou-shang.html",
    "revision": "26cbbff92648654ab0ba6d441717944c"
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
