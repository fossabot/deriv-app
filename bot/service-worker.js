/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/bot/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/bot/css/app.css","34b617cc5033790ee2381778edf7684b"],["/bot/css/bot.css","ec7a66b1278ca3727b3baf1c7eb2d3be"],["/bot/css/modals.css","e717549728a373f79be77f87b1d54626"],["/bot/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/bot/css/work-in-progress.css","7fb0c6d69a93aa4b4d2d3c4d168f55a9"],["/bot/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/bot/index.html","dd85133fadb2b74597ab9fc5cdfe52ec"],["/bot/js/0.e761fe58aaaa39c528a0.js","1491e275abd3e67d018f2469d069823b"],["/bot/js/1.e761fe58aaaa39c528a0.js","be39c2efaccabaa635d09f6f8478ea6f"],["/bot/js/10.e761fe58aaaa39c528a0.js","44e6e7e12e90eeef80b9d7bac1096a1c"],["/bot/js/11.e761fe58aaaa39c528a0.js","0438dac141a8b8b88efa5f47298e38cc"],["/bot/js/12.e761fe58aaaa39c528a0.js","6dbbd0490bd1afac8e30bcf7fa0c6481"],["/bot/js/13.e761fe58aaaa39c528a0.js","56df98f799bd01d9c94c590b7ab528e2"],["/bot/js/14.e761fe58aaaa39c528a0.js","05883ad4dcc9c4077586cf4c4f5f292d"],["/bot/js/15.e761fe58aaaa39c528a0.js","e182bd03959e81316bc9ecc9c6bb9c4d"],["/bot/js/16.e761fe58aaaa39c528a0.js","d3c8f5526b5478cb90bb6822f4c2ee92"],["/bot/js/17.e761fe58aaaa39c528a0.js","e9899a3b60c69e41203de70fc0d49de5"],["/bot/js/18.e761fe58aaaa39c528a0.js","1b1f72ccc56d02f66841d22d4e3333f3"],["/bot/js/19.e761fe58aaaa39c528a0.js","ed863a4b7ac9c32ad27663c3ee533ca6"],["/bot/js/2.e761fe58aaaa39c528a0.js","54d29992751409b93654af6118394f9d"],["/bot/js/20.e761fe58aaaa39c528a0.js","450b9ba4b6ecee8f7345b4713a5307a1"],["/bot/js/21.e761fe58aaaa39c528a0.js","79096e07a67d728acd172e6f5f6447bd"],["/bot/js/22.e761fe58aaaa39c528a0.js","85c1618aef1954e238b077acd04d0e72"],["/bot/js/23.e761fe58aaaa39c528a0.js","09a0f679d0e48438518f9c80c58949a5"],["/bot/js/24.e761fe58aaaa39c528a0.js","17df31d2283b673468dd9ccafdfb16d0"],["/bot/js/25.e761fe58aaaa39c528a0.js","48881dda08ebfcd2b9fa3df27dc1fd03"],["/bot/js/26.e761fe58aaaa39c528a0.js","402ef88b4469ccecfd90e03828ff13e1"],["/bot/js/27.e761fe58aaaa39c528a0.js","b70d98535161ba9405cdf24f700a05ff"],["/bot/js/28.e761fe58aaaa39c528a0.js","f98c57c10ff876b363abbcae6fe03a53"],["/bot/js/29.e761fe58aaaa39c528a0.js","c4937495c1f83e9ccfe73aa7f3052d72"],["/bot/js/3.e761fe58aaaa39c528a0.js","32b69b513cca61cce75b82740e1ea8f4"],["/bot/js/30.e761fe58aaaa39c528a0.js","e16a355645d893aa90fea2b87704a3e2"],["/bot/js/31.e761fe58aaaa39c528a0.js","ba88f8e71b48f41401996c397eaf22d2"],["/bot/js/32.e761fe58aaaa39c528a0.js","a97f4303fc71777b12fa771d9c8c13ed"],["/bot/js/33.e761fe58aaaa39c528a0.js","742f312ac32bd184dea7698ac1e3fe53"],["/bot/js/34.e761fe58aaaa39c528a0.js","1650906562aacd724c809a4609a46739"],["/bot/js/35.e761fe58aaaa39c528a0.js","bcbbefa804c54eacfaf912e7908e0cb2"],["/bot/js/36.e761fe58aaaa39c528a0.js","00e39ecfbfd2d737b89994d9e8a88b0a"],["/bot/js/37.e761fe58aaaa39c528a0.js","d138dfe5cb685595f9dc158a5e841145"],["/bot/js/38.e761fe58aaaa39c528a0.js","f50213d1d12e6c734d128f534463fcd4"],["/bot/js/39.e761fe58aaaa39c528a0.js","533b53646e2364e96a0b8465442e7112"],["/bot/js/4.e761fe58aaaa39c528a0.js","1fa978db02961bc7cdf0906f8246bc9b"],["/bot/js/40.e761fe58aaaa39c528a0.js","083b213113993b6282b8b75f16a209f3"],["/bot/js/404.e761fe58aaaa39c528a0.js","fe9ee2d2b87ccd2a236b128982353e74"],["/bot/js/41.e761fe58aaaa39c528a0.js","52cce3dca4fdc102f811c1fe97cf6023"],["/bot/js/42.e761fe58aaaa39c528a0.js","52e291754d291698d544ad8ff41aebc1"],["/bot/js/43.e761fe58aaaa39c528a0.js","1d1e509589120a957e7d854db3bb6278"],["/bot/js/44.e761fe58aaaa39c528a0.js","60bea60d57e026250bd581bbbef49aa5"],["/bot/js/45.e761fe58aaaa39c528a0.js","4ca1b9c2fc2219e6a44e50f7fd1099be"],["/bot/js/46.e761fe58aaaa39c528a0.js","11a912e53059532fd91e35acc2d42e5d"],["/bot/js/47.e761fe58aaaa39c528a0.js","468f84cc8881f3743b0d00c4b2fa6cc2"],["/bot/js/48.e761fe58aaaa39c528a0.js","175466480344dada8823cc07a30eeb5b"],["/bot/js/49.e761fe58aaaa39c528a0.js","3f10ce14bdafdd7c2d201281c08d1f17"],["/bot/js/5.e761fe58aaaa39c528a0.js","327d0f9849e2c84fe16b41338b01fb84"],["/bot/js/50.e761fe58aaaa39c528a0.js","b1188440b37c3677517dee87b3dbd418"],["/bot/js/51.e761fe58aaaa39c528a0.js","c011ce0c6169ee0caad4622ce538d7ab"],["/bot/js/52.e761fe58aaaa39c528a0.js","6637b75f032879f608ce51562d8fb265"],["/bot/js/53.e761fe58aaaa39c528a0.js","553ba05e4a197c09b5d65f2162e86e41"],["/bot/js/54.e761fe58aaaa39c528a0.js","7a95c1ba0afd4dda6eabf49acae5486b"],["/bot/js/55.e761fe58aaaa39c528a0.js","52e7bc3a0a6817bb7a1760c4c53f3ee3"],["/bot/js/56.e761fe58aaaa39c528a0.js","43f0cefc56da1b5d93760082d503f23d"],["/bot/js/57.e761fe58aaaa39c528a0.js","cb975add4ed48f934e67e37b24730b7f"],["/bot/js/58.e761fe58aaaa39c528a0.js","c18ec80b0fb5cff8ab9eeafdf34fab14"],["/bot/js/59.e761fe58aaaa39c528a0.js","6f333fcffc5376c0c5d243a71f26466f"],["/bot/js/6.e761fe58aaaa39c528a0.js","0fae6cb67e64507b6c7138549877edec"],["/bot/js/60.e761fe58aaaa39c528a0.js","8f93e37983c62cb67bac5fcc1ac85330"],["/bot/js/61.e761fe58aaaa39c528a0.js","ac8dcc38523ec03c2ca0365b03adda14"],["/bot/js/62.e761fe58aaaa39c528a0.js","930783fed693a712a7a1b69918da45f7"],["/bot/js/63.e761fe58aaaa39c528a0.js","5b0c728d409d1375b8d5e8ece6386efb"],["/bot/js/64.e761fe58aaaa39c528a0.js","dbda882db651af6b03e6d4313c104ebe"],["/bot/js/65.e761fe58aaaa39c528a0.js","be365ea14c1737975a575ffed1c4cb08"],["/bot/js/66.e761fe58aaaa39c528a0.js","c8c406ca37bb8a1d64fc111bb956c311"],["/bot/js/67.e761fe58aaaa39c528a0.js","8addda3dd7fd09e64d90721d3bbd28e6"],["/bot/js/68.e761fe58aaaa39c528a0.js","780cb0e58ed275398aab06a3cba767d8"],["/bot/js/69.e761fe58aaaa39c528a0.js","afb9b925645aa939526db016bc22bf1f"],["/bot/js/7.e761fe58aaaa39c528a0.js","7ad866a3badf43c24604a26d030887dd"],["/bot/js/70.e761fe58aaaa39c528a0.js","50a89ab690f53d414051f89fcd7d1420"],["/bot/js/71.e761fe58aaaa39c528a0.js","cd2c690aa6981b54f268e4e68c29edff"],["/bot/js/8.e761fe58aaaa39c528a0.js","df74312443ea55f878481f9db64b978f"],["/bot/js/9.e761fe58aaaa39c528a0.js","c1acac382f8de5ded327b1f8388bd2e5"],["/bot/js/DenialOfServiceModal.e761fe58aaaa39c528a0.js","2e27194d7332a121e75ce3f3c4790126"],["/bot/js/MarketUnavailableModal.e761fe58aaaa39c528a0.js","37f07d94c012e994e3d8fffd2dd03a6f"],["/bot/js/ServicesErrorModal.e761fe58aaaa39c528a0.js","b099f3f983dd8bb8d396ff786549e377"],["/bot/js/UnsupportedContractModal.e761fe58aaaa39c528a0.js","b83546ed3fb88ce0e15f6b9a3645d17a"],["/bot/js/account-info.e761fe58aaaa39c528a0.js","077f4ce78d2088d0ba0a94cfe5c8dcc4"],["/bot/js/bot.e761fe58aaaa39c528a0.js","baff29b75755084a5860f81d5c4d7b59"],["/bot/js/bot/1-0015e4.bot.js","2c8293c121a0e186ded952a118ba53cb"],["/bot/js/bot/2-37afc0.bot.js","33c0d8a0ef7430d6460e15b1ab64062a"],["/bot/js/bot/3-3160bc.bot.js","9f17f8911c09cc1a7ef85d5f0a957c51"],["/bot/js/bot/4-d85287.bot.js","7e79037e519d65d88bcd1dc0e9df002e"],["/bot/js/bot/5-d5faf3.bot.js","299a832a376a7df10aff9b3789fc1ed9"],["/bot/js/bot/6-219b3a.bot.js","c5910fccb66b384a53b39ff7805ffa10"],["/bot/js/bot/bot-sprite.svg","6a04de4d5c28b3b0c5caa0f1681821e7"],["/bot/js/bot/bot.css","ec7a66b1278ca3727b3baf1c7eb2d3be"],["/bot/js/bot/bot.js","3e3aae66dd75274376883496b94d676c"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","19b79110d2a4b890e28c8ddda00e08a0"],["/bot/js/bot/xml/toolbox.xml","1b237c5cad6344b98e1635245b45f36d"],["/bot/js/main.e761fe58aaaa39c528a0.js","dfe2f9667c9d8a53663e7e6350995c9a"],["/bot/js/modals.e761fe58aaaa39c528a0.js","6d40b34f8858d698b2f5ff71105b1f83"],["/bot/js/push-notification.e761fe58aaaa39c528a0.js","a7c4417ca17a7fb0b8ed3b0aca7dbbbf"],["/bot/js/settings-chart.e761fe58aaaa39c528a0.js","3617b8ff163371f05956dd6457d0b327"],["/bot/js/settings-language.e761fe58aaaa39c528a0.js","ae34883571c9b9ea2ec138d1b66aee13"],["/bot/js/settings-theme.e761fe58aaaa39c528a0.js","ef2d699a95732e7c54fd58a23795a5be"],["/bot/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/bot/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/bot/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/bot/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/bot/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/bot/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/bot/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/bot/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/bot/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/bot/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/bot/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/bot/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/bot/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/bot/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/bot/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/bot/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/bot/js/toggle-cashier.e761fe58aaaa39c528a0.js","5613926a8d04289f2020dda361d16fc3"],["/bot/js/toggle-menu-drawer.e761fe58aaaa39c528a0.js","717399537a1949dc263765679311d77d"],["/bot/js/vendors~main.e761fe58aaaa39c528a0.js","e64f0656a3121602e5f05d6b3d08e6e4"],["/bot/js/wallet-information.e761fe58aaaa39c528a0.js","a3765c58bee96ec8cd6364a9289bb58a"],["/bot/js/work-in-progress.e761fe58aaaa39c528a0.js","40e58d4a83764dfd7a79b78fcbfe655d"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/bot/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/bot/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/bot/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/bot/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/bot/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/bot/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/bot/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/bot/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/bot/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/bot/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/bot/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/bot/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/bot/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/bot/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/bot/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







