'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ff2e40209fe769427eaa92ef1c53f5c5",
"index.html": "8fe3ec12f096894641b82197a5e4ad10",
"/": "8fe3ec12f096894641b82197a5e4ad10",
"main.dart.js": "e25c098ada33ed20b44da10bad8ead0d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3c0a2a71da1f0d4db9bc3ecd4295c9fa",
"assets/AssetManifest.json": "486fae1a3902ca96a5aa921d20c658ff",
"assets/NOTICES": "1ef8f825cbed3510366f91c516ccd880",
"assets/FontManifest.json": "929ba0713b0369665189381d11aaabb4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "7901cab967415b171365e6f08f790a42",
"assets/fonts/MaterialIcons-Regular.otf": "5817b3acfd13c813978b6962fb3e7885",
"assets/assets/images/ImgCamera.png": "e5d61f184364b4a9a43482aa18fb8ecb",
"assets/assets/images/imgProfileAccount.png": "190d310ae0188f741e026b46f27a73cc",
"assets/assets/images/imgItemList4.png": "1e1c52f3563922c8a98f48a32e1b5054",
"assets/assets/images/imgStories.png": "29f6fdd70ba4fda98e11fd3090a030d1",
"assets/assets/images/imgItemList1.png": "a25dcd50da61b8e9fed7b287bb80bef2",
"assets/assets/images/imgSubscription2.png": "30c7333d25f5c22981f289bdc8790e85",
"assets/assets/images/imgCheckout1.png": "658b1f6d53724716ec74d92453cb767a",
"assets/assets/images/imgWalkthrough.png": "055b9c2a32ad169178f8dc680f973f1c",
"assets/assets/images/imgItemList2.png": "102b41fbfff7834a8af85afb97e1c271",
"assets/assets/images/imgDetailVideo.png": "cf0acd079dd84944ac0d2076d1728156",
"assets/assets/images/imgItemList3.png": "ca8e7428240cb2f9be9da191cdd62c14",
"assets/assets/images/imgCheckout2.png": "86741af3f1776fa6c7aeb65be0a707fa",
"assets/assets/images/imgSubscription.png": "35efb8c3732e90131b24143298136275",
"assets/assets/images/imgLaptop.png": "6c93afbf89f512dd330114715619a951",
"assets/assets/images/imgAR3.png": "4242cef40c68b18c9fdd957867d41ef4",
"assets/assets/images/imgVideo3.png": "1a4adebfa9029606f3f94d9fc6e68164",
"assets/assets/images/imgFeatureInfo.png": "e6270f4bdbfd22da19249c255989d2c2",
"assets/assets/images/imgPermission.png": "22be6b3ef40be28aa17a28a7e9a24842",
"assets/assets/images/imgVideo2.png": "fa2d0f6db0fe03c7e345c8910d357bc2",
"assets/assets/images/imgAR2.png": "477fe9eee973750c60401063a8cf3a28",
"assets/assets/images/imgArticle.png": "9bdee26150f1fd8413170c9083234772",
"assets/assets/images/logoApple.png": "92ba344c4fa773c29b71e636f1f17bcc",
"assets/assets/images/logoTwitter.png": "c906aed8c7ebeea9db3bddd0018d1fce",
"assets/assets/images/imgChat.png": "159ac4f5054f003f5d4b5719059580a3",
"assets/assets/images/imgVideo1.png": "4587d47be2f69571bd4b3115b3fa1068",
"assets/assets/images/imgAR1.png": "b0c99747af177550e256faf993a21308",
"assets/assets/images/imgAR5.png": "d11a8b9b0114cc27de82ee1a4dd3b907",
"assets/assets/images/imgProfilePink.png": "6bfd46465712a2b38ee17c58ad6ba7e2",
"assets/assets/images/logoGoogle.png": "6ded4f92fec972d2ecc7555a0e1410b3",
"assets/assets/images/imgVideo4.png": "aea6bd56acb62801ebcffcc1c0992a6e",
"assets/assets/images/imgAR4.png": "14837417713ea5984c1f6340f2bf35d1",
"assets/assets/images/imgEvent2.png": "b64cbbe236321e37931fbd7509792271",
"assets/assets/images/imgNewsFeed3.png": "d64dc738b1e54e5b72baabf6814017c8",
"assets/assets/images/imgNewRelease1.png": "7998fc5098196cc0576a90406d3c4707",
"assets/assets/images/imgCamera2.png": "9769542a00d5db9270dec10e7e65c180",
"assets/assets/images/imgPerson.png": "d26900544575151ef95347afe74469ab",
"assets/assets/images/imgProduct.png": "a1db74e6781c5891aed38b252cd6e6d5",
"assets/assets/images/imgSearch1.png": "56ed20cbd9d7217f71ed8a04e1bfc0c3",
"assets/assets/images/imgShop1.png": "377f173370c8a1b572144565fbfc6947",
"assets/assets/images/logoFacebook.png": "38ebe172f2f8621c19db049da4219602",
"assets/assets/images/imgNewsFeed2.png": "66be35cd9c0c05ad739e2e3d36d91009",
"assets/assets/images/imgEvent3.png": "6c93afbf89f512dd330114715619a951",
"assets/assets/images/imgEvent1.png": "f1522e04fba8244a7a14ede80f829690",
"assets/assets/images/imgNewRelease2.png": "2266321d05809c5d839a3020091b553f",
"assets/assets/images/imgCamera1.png": "417dcbaee351f9db2d459acb9a9ce30f",
"assets/assets/images/imgShop3.png": "6030a893e21e0d52926d9ad779bbf685",
"assets/assets/images/imgSearch3.png": "cf25fa1dc441fdc8e03d4c8449e6541b",
"assets/assets/images/imgSearch2.png": "95682dd6eb8ea67fde67497d5c6c92c9",
"assets/assets/images/imgShop2.png": "3cd5bea939f0c0620812cd2639d5c254",
"assets/assets/images/imgNewRelease3.png": "88559cb9adfaf3f2d8892b132a811649",
"assets/assets/images/imgNewsFeed1.png": "eec5606e2f4547968db5c0becec74cd7",
"assets/assets/images/imgItemListCategory3.png": "5c71447d083e8014a667e34d68e44a4f",
"assets/assets/images/imgEvent4.png": "0f4de519371a515fa72f78fe4e2bca59",
"assets/assets/images/imgCartEmpty.png": "5dfea6080d9304a31a60b0d4e4e8772b",
"assets/assets/images/imgItemListCategory2.png": "edbe5df474543dd82655fbca0cc89943",
"assets/assets/images/imgAudio.png": "6c70a518601609fde3e67b74e01350ec",
"assets/assets/images/imgSearch4.png": "c6d9d692e4ca5c2a007d89f6674f0557",
"assets/assets/images/imgShop4.png": "9ce0029474cd45f4b2953d279c6fc788",
"assets/assets/images/imgShare.png": "de362be7d8d2bcc68b2136234460474a",
"assets/assets/images/imgItemListCategory1.png": "821fdefdd7b5d776effa07b529c9255d",
"assets/assets/images/imgAddFriend7.png": "cef06fc820b070b7cfa82c3b4f3b8d93",
"assets/assets/images/imgCategory2.png": "0cce9a3a1b26d5f9765017b39fcd8d87",
"assets/assets/images/imgCategory3.png": "c33d78e3b266a6654d3970a57fa81edc",
"assets/assets/images/imgAddFriend6.png": "4e04f75235745b32b6eddb1ee7a37cf5",
"assets/assets/images/imPlaceholderMap.png": "2ad0a8f800144fbba1eca0f7937c4cad",
"assets/assets/images/imgAddFriend4.png": "2f6064a58685e5910af96d06a1185e06",
"assets/assets/images/imgCategory1.png": "cd490d28f1eb351e8c1fc5ab831b63cc",
"assets/assets/images/imgAction.png": "fa2d0f6db0fe03c7e345c8910d357bc2",
"assets/assets/images/imgAddFriend5.png": "16e7d9616352fc10b0eb88bdb8a616ec",
"assets/assets/images/imMaps.png": "f820a6024ff4a5eb75c357f93ae15bba",
"assets/assets/images/imgAddFriend1.png": "cdc88ab804e67738d8b6e7b184e46e19",
"assets/assets/images/imgCategory4.png": "d2ee4a81ae54130de8501d805cfa0a38",
"assets/assets/images/imgStarted2.png": "42fca31e2ce7a76485e8e612a75d39f9",
"assets/assets/images/imgAddFriend2.png": "949080efdc184603c5e67b066a174917",
"assets/assets/images/imgStarted1.png": "803d722c340d1844917052aa95bc8423",
"assets/assets/images/imgWallet.png": "5cb30672d0f911aa38bc579c4810e7a9",
"assets/assets/images/imgAddFriend3.png": "39a0955f42a9c0211bd9d3835c7fd221",
"assets/assets/icons/icStar.svg": "af688e7da4319c38cf2ed70c8d8b7dcb",
"assets/assets/icons/icSkipNext.svg": "a5a767ef4c7b379454cfdaa5cbf4bfb9",
"assets/assets/icons/icOptions.svg": "2638e1e018a8dc300e39ec4ab2700786",
"assets/assets/icons/icLabel.svg": "862b16e6b20409b5aa8e07b0358096e8",
"assets/assets/icons/icMark.svg": "efaae85a91d92ff80f202bc013693413",
"assets/assets/icons/icMore.svg": "d29be8b585a73675222dbad494e34843",
"assets/assets/icons/icMute.svg": "cfc1f4c1782e9631d0357ef068a1c2df",
"assets/assets/icons/imgIconLocation.png": "384eee6acdea310b35745f45c2dff91c",
"assets/assets/icons/icClose2.svg": "956db29a63aaa360708eb5f3bb137aea",
"assets/assets/icons/icMusic.svg": "ae53c1177ebec1494a25fbecc30e1a67",
"assets/assets/icons/icTag.svg": "862b16e6b20409b5aa8e07b0358096e8",
"assets/assets/icons/icTwitter.svg": "fe67cc8eb383892dfc78910732a1c83e",
"assets/assets/icons/icComment.svg": "55b740c66a672b9251e1de0bca98b81b",
"assets/assets/icons/icSave.svg": "ba066de7294895b763f2f40580c0e877",
"assets/assets/icons/icPerson.svg": "e88c7bcdeb808b14288f68d036dfcc5c",
"assets/assets/icons/icSkipBack.svg": "951051ad2e06587866bca86d71f44e7a",
"assets/assets/icons/icText.svg": "a3599aff1ab253b8de198a4037db5bc2",
"assets/assets/icons/icArticel.svg": "a89d415db639fcf2c7210dbc526c58a9",
"assets/assets/icons/icDropDown.svg": "8cf21be6d1c107484a8b99e9ca6a5878",
"assets/assets/icons/icRepeat.svg": "e358dd71a582849fe4176301bfcdc2c4",
"assets/assets/icons/icLocation.svg": "ce3ba2e5d32e341010a910f911af0f5f",
"assets/assets/icons/icComponent.svg": "a6a1bde8cb34a8e95c8412c5f946aa84",
"assets/assets/icons/icChat.svg": "6c8ad0fea58f1ce3cedaaa897228891d",
"assets/assets/icons/icPlay.svg": "ea67387d48b4e6631d5e37d0b57a27cb",
"assets/assets/icons/icArrowLeft.svg": "835ddfda323d55636bf3e2779eac0fa6",
"assets/assets/icons/icSearch.svg": "eeb81dd71be8947878d0fef3c85e8be9",
"assets/assets/icons/icShare2.svg": "3c45ecdd60b00311a5546090dbcfa8d2",
"assets/assets/icons/icCeklis.svg": "cade11d20054ed1ad397009a8b4e8a1e",
"assets/assets/icons/imgIconArticel.png": "79cb985778bd587498a6571fe23edc9c",
"assets/assets/icons/icMenu.svg": "dd11397bf9a2744badb3a8ca724d28d1",
"assets/assets/icons/icDone.svg": "4031f8007cafd47d597a743867935edb",
"assets/assets/icons/icAdd.svg": "79a3a02b2920bf3912c9de10c0b9df49",
"assets/assets/icons/icMin.svg": "a454e823c3ed171efa1a53d663e2cb8d",
"assets/assets/icons/icAt.svg": "bf7e986526d293febd295f2ba023b233",
"assets/assets/icons/icEmail.svg": "83db9d9c99d64315a30476730d2641b8",
"assets/assets/icons/icFlash.svg": "c0ffe69e84cf00718e00fa14c52214a9",
"assets/assets/icons/icArrowBack.svg": "d33be7c927623a43180593f615a2a186",
"assets/assets/icons/imgIconClock.png": "f34bd9e80601d1eb6a5b4110fa5b0d62",
"assets/assets/icons/icCart2.svg": "a80b5db2e8a022fa1c8963e4cedd59fc",
"assets/assets/icons/icAttachment.svg": "fb6bf7e77257b540c984db209ccb23d8",
"assets/assets/icons/icEmoticon.svg": "a771133a75a1576b103004a46681731d",
"assets/assets/icons/icDarkMode.svg": "9d7e7e95aae991b5280ca0c24f027773",
"assets/assets/icons/icArrowNext.svg": "d4370b37f2cc4f44f7bb8f9114f00338",
"assets/assets/icons/icFrame.svg": "d78c52c4a420daafc891b40d79eab79b",
"assets/assets/icons/icArrowRight.svg": "f2c601cfb75a6718d8532aca5658c2c3",
"assets/assets/icons/icInstagram.svg": "a465ce17bafe62588b1b45c6be5d57f9",
"assets/assets/icons/icVoice.svg": "f5c4fded8bc25a99e01e1d6ade98f131",
"assets/assets/icons/imgIconSettings.png": "a25417a12c4527dc4ecd7c6ec19e9112",
"assets/assets/icons/imgIconSound.png": "1f9418de48dffcce592fa4f25ded5a3a",
"assets/assets/icons/icDots.svg": "0e82521de9c42e3c6e31092619231128",
"assets/assets/icons/icReport.svg": "4aa77d3c86da123a09a029e3d7beae8a",
"assets/assets/icons/icList.svg": "2656c561ded9071a5600dcb49623ad62",
"assets/assets/icons/icCalender.svg": "d29165aad34f45059f8982e1ebe0c329",
"assets/assets/icons/icDelete2.svg": "2aacabd48859006fd2a8447d6bc2dfa7",
"assets/assets/icons/icHome.svg": "d262aed44b5c281f6e5fde5b7db30d8f",
"assets/assets/icons/icUser.svg": "091d6e88a321fad73ac395282b1d13a7",
"assets/assets/icons/icSettings.svg": "6058e4e0761ebe6f46fa1c68f295d8aa",
"assets/assets/icons/icClose.svg": "a533d71ef5791eff6317dfe39bd679db",
"assets/assets/icons/icShareScreen.svg": "21dea2af03344ce0a3c80163f4cf7a6e",
"assets/assets/icons/icImage.svg": "c35ca2398d5b879831b32c9e6477bd25",
"assets/assets/icons/icBag.svg": "6ea0e22b692e42259d2e95ef7d38d0bb",
"assets/assets/icons/icDownload.svg": "41a7945cb8be0058f084feb0bd542d32",
"assets/assets/icons/icSection.svg": "b9d22d8f2af03637a5c86182df1d485e",
"assets/assets/icons/icRounded.svg": "f20aae6eb2c7dc3d3ce068b8db698106",
"assets/assets/icons/icPerson2.svg": "62bc2daf75b5b755ed3fbab6270fa7ed",
"assets/assets/icons/icContact.svg": "b8d42a0bf97840b13869ed76328f5760",
"assets/assets/icons/icVerified.svg": "6e96388176329237f78d75dbbbfc44de",
"assets/assets/icons/icRandom.svg": "c51763a781a4d68555e09500b6d01ebb",
"assets/assets/icons/imgIconPerson.png": "03f0f2baf22b265182c7a6b6096e9459",
"assets/assets/icons/icCard.svg": "ee0855b725c2c36aeef9f20b8acc008c",
"assets/assets/icons/icNotifications.svg": "625f7e5819f0921f54fa2ea0d190cc0f",
"assets/assets/icons/icPlus.svg": "b55538c16791df63f4c6369ebf4a9e46",
"assets/assets/icons/icPlayAudio.svg": "4380110b1d35d1326dd3489bf12089eb",
"assets/assets/icons/icLink.svg": "ea182953b8567302a77a8054ae099000",
"assets/assets/icons/icMicrophone.svg": "f5c4fded8bc25a99e01e1d6ade98f131",
"assets/assets/icons/icArrowDown.svg": "8cf21be6d1c107484a8b99e9ca6a5878",
"assets/assets/icons/icTagLarge.svg": "365b68cfdf12d15b979a9ed90f25ff92",
"assets/assets/icons/icLock.svg": "dbbe914ecc4f88904df35cdef49e28b1",
"assets/assets/icons/icPhone.svg": "6b4973e2ff1159fefa9e1c19371f9f6b",
"assets/assets/icons/icImportant.svg": "35abbd1997499ea6a0ec1193505153cf",
"assets/assets/icons/icClock.svg": "2e6115a1f189015fe9d36b25e559c172",
"assets/assets/icons/icPinLocation.svg": "99082a16da492839cd916c87ffa277a6",
"assets/assets/icons/icCart.svg": "5b369f92f813a566aa0f2df232d2f820",
"assets/assets/icons/icShare.svg": "1c4a6969548110ffc4edf76d735921fb",
"assets/assets/icons/icT.svg": "a3599aff1ab253b8de198a4037db5bc2",
"assets/assets/icons/icFavourite.svg": "98cf8531088d297554f11d77dd8edb0c",
"assets/assets/icons/icDelete.svg": "57e1ed0f4c63013c06d75f4cb68b65f1",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
