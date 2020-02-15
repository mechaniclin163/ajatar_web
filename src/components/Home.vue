<template>
<div class="home">
    <!-- <div class="mask" v-if="ifDownload" @click="showDownload()">
        <div :class="downloadContainerClassName">
            <p class="title">{{$t('lang.banner.chooseVersion')}}</p>
            <a v-if="isAndroid" href="https://chainplay-fun.oss-cn-beijing.aliyuncs.com/blockknights-tp.apk" class="download-btn">{{$t('lang.banner.TPVersion')}}</a>
            <a v-if="isAndroid" href="https://chainplay-fun.oss-cn-beijing.aliyuncs.com/blockknights-mykey.apk" class="download-btn">{{$t('lang.banner.MYKEYVersion')}}</a>
            <a v-if="!isAndroid" @click="routerIOS()" href="javascript:void(0);" class="download-btn">{{$t('lang.banner.TPVersion')}}</a>
            <a v-if="!isAndroid" @click="routerIOSMYKEY()" href="javascript:void(0);" class="download-btn">{{$t('lang.banner.MYKEYVersion')}}</a>
            
        </div>
    </div> -->
    <div class="mask" v-if="ifShowQrcode" @click="showQrcode()">
        <img src="../assets/images/qrcode.jpg" alt="">
    </div>
    <div class="bg-color-2-z-index"></div>
    <div class="top" id="navbar-items">
        <div class="center-container top-container">
            <div class="nav-logo">
                <a href="/">
                    <img src="../assets/images/nav-logo.png" alt="">
                </a>
            </div>
            <ul class="nav-list">
                <a v-for="(li, index) in $t('lang.navlist')" v-if="index != $t('lang.navlist').length-1 " :key="index" href="javascript:;" @click="jump(index)">{{li.navName}}</a>
                <a v-for="(li, index) in $t('lang.navlist')" v-if="index == $t('lang.navlist').length-1 " :key="index" :href="li.routerLink" target="_blank">{{li.navName}}</a>
                <!-- <a href="javascript:;" @click="showQrcode()">{{$t('lang.lastNav')}}</a> -->
                
                <!-- <p class="choose-lang-drop">
                    <chooseLang></chooseLang>
                </p> -->
            </ul>
        </div>
    </div>
    <div class="blank88" id="home"></div>

    <div class="banner">
        <div style="width:100%;height: 1px;"></div>
        <img class="logo" src="../assets/images/logo.png" alt="">
        <div class="banner-describe-main">
            <div class="banner-describe-1">精品放置卡牌链游</div>
            <div class="video">
                <!-- <img class="video-content" src="../assets/images/video-content.png" alt=""> -->
                <video class="video-content" src="https://x1-package.oss-cn-hangzhou.aliyuncs.com/v.mp4" controls="controls"></video>
            </div>
            <div class="qrcode-content">
                <ul>
                    <img src="../assets/images/qrcode_left.png" alt="">
                    <a @click="downloadAndroid()" href="javascript:;">Android</a>
                </ul>
                <ul>
                    <img src="../assets/images/qrcode_right.png" alt="">
                    <a href="javascript:;">ios(敬请期待)</a>
                </ul>
            </div>
            
            <!-- <div class="video"> -->

                <!-- <div class="video-bg">
                    <video src="https://jdex-static.oss-cn-shanghai.aliyuncs.com/banner-video.mp4
" controls="controls"></video>
                    <img class="video-shadow" src="../assets/images/video-shadow.png" alt="">
                </div> -->
                <!-- <div class="download-qrcode">
                    <p @click="showDownloadAndroid()" class="title">{{$t('lang.AndroidDownload')}}</p>
                    <div class="qrcode">
                        <img src="../assets/images/android-download.png" alt="">
                    </div>
                    
                    <p class="title" @click="showDownloadIOS()">{{$t('lang.iOSDownload')}}</p>
                    <div class="qrcode">
                        <img src="../assets/images/android-download.png" alt="">
                    </div>
                    
                    <a target="_blank" class="title-web" href="http://ckt.chainplay.fun/">{{$t('lang.webVersion')}}</a>
                    <p class="install-title">{{$t('lang.installNeedToInstallScatter')}} <a target="_blank" class="install-title-enter" href="https://get-scatter.com/">Scatter</a>  </p>
                </div> -->
            <!-- </div> -->
        </div>
    </div>

    <!-- 游戏特色 -->
    <div class="introduce-container" id="gameFeatures">
        <div class="introduce-title">{{$t('lang.navlist')[1].navName}}</div>
        <div class="introduce-main">
            <!-- <img class="logo" src="../assets/images/logo.png" alt=""> -->
            <img src="../assets/images/introduce-main1.png" alt="">
            <!-- <div class="introduce-1-main-content">
                <div class="introduce-main-title">
                    <p class="introduce-main-title-content">{{$t('lang.introduceContent1Title')}}</p>
                </div>
                <div class="introduce-main-1-describe">{{$t('lang.introduceContent1Describe')}}</div>
                <div class="process-describe">{{$t('lang.processDescribe')}}</div>
                <div class="role-name">
                    <div class="role-name-content">{{$t('lang.roleName')[0]}}</div>
                    <div class="role-name-content">{{$t('lang.roleName')[1]}}</div>
                </div>
                <div class="role-describe">
                    <div class="role-describe-content">{{$t('lang.roleDescribe')[0]}}</div>
                    <div class="role-describe-content">{{$t('lang.roleDescribe')[1]}}</div>
                </div>
            </div> -->
        </div>
        <div class="introduce-main">
            <img src="../assets/images/introduce-main2.png" alt="">
        </div>
        <div class="introduce-main">
            <img src="../assets/images/introduce-main3.png" alt="">
        </div>
        <div class="introduce-main">
            <img src="../assets/images/introduce-main4.png" alt="">
        </div>
        <div class="introduce-main">
            <img src="../assets/images/introduce-main5.png" alt="">
        </div>
        <div class="introduce-main">
            <img src="../assets/images/introduce-main6.png" alt="">
        </div>
    </div>
    
        
    <!-- 里程碑 -->
    <div class="introduce-title" id="milepost">{{$t('lang.navlist')[2].navName}}</div>
    <table class="introduce-table">
        
        <tr v-for="milepostLi in $t('lang.milepostList')">
            <th  v-for="li in milepostLi">{{li}}</th>
        </tr>
    </table>


    <!-- 加入社区 -->
    <div class="introduce-title" id="community">{{$t('lang.navlist')[3].navName}}</div>
    <div class="center-container flex-center mart30">
        <div class="community-icon"  @click="showQrcode()">
            <img src="../assets/images/wechat-icon.png" alt="">
        </div>
        <a target="_blank" href="https://t.me/CryptoKnightsGroup" class="community-icon">
            <img src="../assets/images/telegram-icon.png" alt="">
        </a>
    </div>

    <!-- 加入社区 -->
    <div class="introduce-title" id="partner">{{$t('lang.navlist')[4].navName}}</div>
    <div class="partner-main flex-center">
        <a :href="li.imgLink" v-for="li in partner" target="_blank">
            <img :src="li.imgSrc" alt="">
        </a>
    </div>
    <div class="partner-main flex-center">
        <a :href="li.imgLink" v-for="li in partner2" target="_blank">
            <img :src="li.imgSrc" alt="">
        </a>
    </div>
    <div class="partner-main flex-center">
        <a :href="li.imgLink" v-for="li in partner3" target="_blank">
            <img :src="li.imgSrc" alt="">
        </a>
    </div>
    <div class="footer">© 2019 ChainPlay Studio.All Rights Reserved</div>
</div>
</template>

<script>
import $ from 'jquery'
import partnerImg from '../assets/images/partner'
import partnerImg2 from '../assets/images/partner2'
import partnerImg3 from '../assets/images/partner3'
import chooseLang from './common/ChooseLang'
export default {
    data () {
        return {
            isAndroid: true,

            ifMoblie: false,
            downloadContainerClassName: '',

            navListValue: ['home', 'gameFeatures', 'milepost', 'community', 'partner'],
            navListActive: [],
            hashDomOffsetTop: [],
            ifShowQrcode: false,
            ifDownload: false,

            msg: '',
            value: 'zh',
            partner: [
                {
                    imgSrc: partnerImg[0],
                    imgLink: 'https://www.dapp.review/'
                },
                {
                    imgSrc: partnerImg[1],
                    imgLink: 'https://www.tokenpocket.pro/'
                },
                {
                    imgSrc: partnerImg[2],
                    // imgLink: 'https://meet.one/'
                    imgLink: 'https://mykey.org/'
                },
                {
                    imgSrc: partnerImg[3],
                    imgLink: 'http://dapp.coinbirds.com/'
                }
            ],
            partner2: [
                {
                    imgSrc: partnerImg2[0],
                    imgLink: 'http://dappx.store/'
                },
                {
                    imgSrc: partnerImg2[1],
                    imgLink: 'http://www.lianchaguan.com/'
                },
                {
                    imgSrc: partnerImg2[2],
                    // imgLink: 'https://meet.one/'
                    imgLink: 'https://www.spiderdata.com/'
                },
                {
                    imgSrc: partnerImg2[3],
                    imgLink: 'https://web.lichang.io/'
                }
            ],
            partner3: [
                {
                    imgSrc: partnerImg3[0],
                    imgLink: 'https://dapptotal.com/'
                },
                {
                    imgSrc: partnerImg3[1],
                    imgLink: 'https://www.topdapp.com/'
                },
                {
                    imgSrc: partnerImg3[2],
                    // imgLink: 'https://meet.one/'
                    imgLink: 'https://dapponline.io/'
                }
            ]
        }
    },
    watch: {
        value: function (val) {
            this.$i18n.locale = val
            this.navList = this.$t('lang.navlist')
            if (val == 'zh') {
                document.title = '全球区块链游戏生态大会'
            } else {
                document.title = 'GBGEC- Global Blockchain Gaming Ecosystem Conference'
            }
            
        }
    },
    mounted(){
        let _this = this
        this.ifMoblieFn()
        for (let i = 0; i < this.navListValue.length; i++) {
            this.navListActive.push(false)
            this.hashDomOffsetTop.push(document.querySelector("#" + this.navListValue[i]).offsetTop)
        }
        $(window).scroll(function(){
            // handleTopNavAnimation();
            let navHeight = document.querySelector("#navbar-items").offsetHeight;
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            _this.navListActive = []
            for (let i = 0; i < _this.hashDomOffsetTop.length; i++) {
                if (Number(scrollTop) + Number(navHeight) < _this.hashDomOffsetTop[i]) {
                    
                    for (let i = 0; i < _this.navListValue.length; i++) {
                        _this.navListActive.push(false)
                    }
                    if (i > 0) {
                        _this.navListActive.splice(i - 1, 1)
                        _this.navListActive.splice(i - 1, 0, true)
                    }
                    
                    break;
                } else {
                    for (let j = 0; j < _this.navListValue.length; j++) {
                        _this.navListActive.push(false)
                    }
                    if ( scrollTop >= _this.hashDomOffsetTop[_this.hashDomOffsetTop.length - 1]) {
                        _this.navListActive.splice(_this.hashDomOffsetTop.length - 1, 1)
                        _this.navListActive.splice(_this.hashDomOffsetTop.length - 1, 0, true)
                    }
                }
            }
        });

        function handleTopNavAnimation() {
            var top=$(window).scrollTop();
            if(top>10){
                $('#site-nav').addClass('navbar-solid'); 
            }
            else{
                $('#site-nav').removeClass('navbar-solid'); 
            }
        }

    },
    methods: {
        downloadAndroid(){
            let _this = this
            // window.location.href = 'itms-services:///?action=download-manifest&url=https://x1-package.oss-cn-hangzhou.aliyuncs.com/BadDragonMustDie.apk'
            window.location.href = 'https://x1-package.oss-cn-hangzhou.aliyuncs.com/BadDragonMustDie.apk'
        },
        // routerIOS(){
        //     let _this = this
        //     window.location.href = "itms-services:///?action=download-manifest&url=https://chainplay-fun.oss-cn-beijing.aliyuncs.com/crypto_knights.plist"
        // },
        // routerIOSMYKEY(){
        //     let _this = this
        //     window.location.href = "itms-services:///?action=download-manifest&url=https://chainplay-fun.oss-cn-beijing.aliyuncs.com/crypto_knights_mykey.plist"
        // },
        ifMoblieFn: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            if (!!u.match(/AppleWebKit.*Mobile.*/)) {
                this.ifMoblie = true
                this.downloadContainerClassName = 'download-container-mobile'
            } else {
                this.ifMoblie = false
                this.downloadContainerClassName = 'download-container'

            }

        },
        ua: function () {
        //   if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
                var ua = navigator.userAgent;//获取判断用的对象
                console.log(ua)
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                        //在微信中打开
                        this.ifWeChat = true
                }
                if (ua.match(/WeiBo/i) == "weibo") {
                        //在新浪微博客户端打开
                }
                if (ua.match(/QQ/i) == "qq") {
                        //在QQ空间打开
                }
                // if (browser.versions.ios) {
                //         //是否在IOS浏览器打开
                // } 
                // if(browser.versions.android){
                //         //是否在安卓浏览器打开
                // }
                
            // } else {
            //         //否则就是PC浏览器打开
            // }  
        },
        showDownloadAndroid(){
            this.isAndroid = true
            this.showDownload()
        },
        showDownloadIOS(){
            this.isAndroid = false
            this.showDownload()
        },
        showDownload(){
            this.ifDownload = !this.ifDownload
        },
        showQrcode(){
            this.ifShowQrcode = !this.ifShowQrcode
        },
        jump: function (index) {
            this.navListActive = []
            for (let i = 0; i < this.navListValue.length; i++) {
                this.navListActive.push(false)
            }
            this.navListActive.splice(index, 1)
            this.navListActive.splice(index, 0, true)
            
            let jump = document.querySelector("#" + this.navListValue[index])
            // 屏幕高度
            let clientHeight = document.documentElement.clientHeight;
            // 获取需要滚动的距离  + Number(clientHeight) - 50
            let total = Number(jump.offsetTop);
            let navHeight = document.querySelector("#navbar-items").offsetHeight;
            $("html,body").animate({
                scrollTop: Number(total) - Number(navHeight)
            }, 200)
        }
    },
    components: {
      chooseLang
    }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-center{
    display: flex;
    justify-content:center;
}

.bg-color-1-z-index{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:2169px;
    background: linear-gradient(#2B5471 60%, #1B2838 100%);
    z-index: -100;
}
.download-container{
    position: absolute;
    top: 50%;
    left: 50%;
    width:502px;
    height:302px;
    margin-left: -251px;
    margin-top: -151px;
    background:rgba(37,40,46,1);
    border-top: 2px solid rgba(47,109,255,1);
}

.choose-lang-drop{
    display: flex;
    align-items: center;
}

.download-container-mobile {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height:500px;
    margin-left: -35%;
    margin-top: -250px;
    background:rgba(37,40,46,1);
    border-top: 2px solid rgba(47,109,255,1);
}
.download-container .title{
    width: 100%;
    height:30px;
    line-height:30px;
    font-size:30px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:26px;
    text-align: center;
    padding-bottom: 10px;
    margin-top: 44px;
}
.download-container-mobile .title{
    width: 100%;
    height: 80px;
    line-height:50px;
    font-size:50px;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    padding-bottom: 30px;
    margin-top: 44px;
}
.download-container-mobile .download-btn{
    width: 70%;
    height:80px;
    line-height: 80px;
    background:rgba(39,65,85,1);
    border-radius:5px;
    margin: 50px auto 0;
    display: block;
    font-size:40px;
    font-weight:400;
    color:rgba(70,183,245,1);
    text-align: center;
}
.download-container .download-btn{
    width:280px;
    height:52px;
    line-height: 52px;
    background:rgba(39,65,85,1);
    border-radius:5px;
    margin: 32px auto 0;
    display: block;
    font-size:18px;
    font-weight:400;
    color:rgba(70,183,245,1);
    text-align: center;
}
.download-qrcode{
    width: 232px;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
}
.download-qrcode .title{
    width: 100%;
    height:58px;
    line-height: 58px;
    background:rgba(255,159,61,1);
    border-radius:29px;
    font-size:21px;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    cursor: pointer;
}
.download-qrcode .title-web{
    width: 100%;
    height:58px;
    line-height: 58px;
    background:rgba(61,129,255,1);
    border-radius:29px;
    font-size:21px;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    cursor: pointer;
}
.download-qrcode .install-title{
    width: 100%;
    height: 17px;
    line-height: 17px;
    font-size:16px;
    color:rgba(255,255,255,1);
    text-align: center;
}
.download-qrcode .install-title .install-title-enter{
    color:rgba(141,230,255,1);
    font-size:16px;
}
.download-qrcode .qrcode{
    width: 218px;
    height: 218px;
    position: relative;
}
.download-qrcode .qrcode .text{
    width: 100%;
    line-height: 20px;
    height:20px;
    font-size:20px;
    font-weight:400;
    color:rgba(255,255,255,1);
    position: absolute;
    top: 99px;
    text-align: center;
}
.download-qrcode .qrcode img{
    width: 100%;
}
.bg-color-2-z-index{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background: #1B2838;
    z-index: -200;
}
.center-container{
    width: 1170px;
    margin: 0 auto;
}
.blank88{
    height: 88px;
}
.mart30{
    margin-top: 30px;
}
/* display_iphonexsmax.svg */
.video {
    /* width: 658px;
    height: 312px; */
    width: 546px;
    height: 264px;
    background:url('../assets/images/video.png') no-repeat center center;
    background-size: 100% 100%;
    margin: 0 auto;
}
.video .video-content{
    margin-left: 40px;
    margin-top: 10px;
    width: 440px;
}
.qrcode-content {
    display: flex;
    width: 500px;
    margin: 10px auto;
    justify-content: space-between;
}
.qrcode-content ul{
    width: 178px;
}
.qrcode-content ul img{
    width: 100%;
    display: block;
}
.qrcode-content ul a{
    width: 170px;
    height: 48px;
    line-height: 48px;
    border-radius: 29px;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    cursor: pointer;
    margin: 5px auto 0;
    display: block;
    background: #ff9f3d;
}
/* .video{
    width: 634px;
    height: 690px;
    border-radius:5px;
    margin: 10px auto 0;
    position: relative;
    display: flex;
    justify-content: space-between;
} */
/* .video-bg{
    width: 312px;
    height: 654px;
    background:url('../assets/images/iPhone-bg.png') no-repeat center center;
    background-size: 100% 100%;
    position: relative;
}
.video-shadow{
    width: 307px;
    height: 40px;
    position: absolute;
    bottom: -40px;
    left: 0;
    
} */
/* .video video{
    width:280px;
    height:499px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -140px;
    margin-top: -252px;
    z-index: 50;
} */
/* 顶部 */
.top{
    width: 100%;
    height: 88px;
    line-height: 88px;
    background:rgba(23,26,33,0.98);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
}
.top-container{
    display: flex;
    justify-content:space-between;
}
.nav-logo{
    margin-top: 8px;
    width: 60px;
    height: 67px;
}
.nav-logo img{
    width: 60px;
    height: 67px;
}
.nav-list{
    width: 992px;
    display: flex;
    justify-content:space-between;
}
.nav-list a{
    height: 88px;
    line-height: 88px;
    font-size: 18px;
    font-weight:400;
    color:#b8b6b4;
    padding-right: 20px;
    padding-left: 20px;
}
.nav-list a:hover{
    color:#f0a352;
}
.logo{
    margin: 30px auto 0;
    display: block;
    width: 280px;
}
/* 顶部 */

/* banner */
.banner{ 
    width: 100%;
    height: 1052px;
    background: url('../assets/images/banner.png') no-repeat center center;
    background-size: cover;
    margin: 0 auto;
    position: relative;
}
.banner-describe-main{
    /* position: absolute;
    top: 210px; */
    width: 100%;
    margin-top: 2px;
}
.banner-describe-main .banner-describe-1{
    width:280px;
    height:38px;
    line-height: 38px;
    background:rgba(0,0,0,0.3);
    border-radius:19px;
    font-size:22px;
    font-weight:400;
    color:rgba(255,159,61,1);
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
}
.banner-describe-main .banner-describe-2{
    width:1058px;
    height:34px;
    line-height: 34px;
    font-size:20px;
    font-weight:400;
    color:#b8b6b4;
    background: url('../assets/images/banner-describe-bg.png') no-repeat center center;
    background-size: 100% 100%;
    margin: 30px auto 0;
    text-align: center;
}
/* banner */

/* 介绍部分 */
.introduce-container{
    width: 900px;
    margin: 0 auto;
}
.introduce-title{
    width: 100%;
    height: 106px;
    line-height: 86px;
    margin-top: 100px;
    background: url('../assets/images/title-bg.png') no-repeat center center;
    background-size: 324px 106px;
    font-size:32px;
    font-weight:400;
    color:rgba(79,192,244,1);
    text-align: center;
}
.introduce-main{
    width: 900px;
    margin-top: 30px;
    position: relative;
}
.introduce-main img{
    width: 100%;
}
.introduce-main .logo{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 127px;
    height: 74px;
    z-index: 150;
    margin-top: 0;
}
.introduce-1-main-content{
    position: absolute;
    top: 26px;
    left: 0;
    width: 100%;
    z-index: 100;
}
.introduce-2-main-content{
    position: absolute;
    top: 41px;
    left: 0;
    width: 100%;
    z-index: 100;
}
.introduce-main-title{
    position: relative;
    text-align: center;
}
.introduce-main-title-content{
    display: inline-block;
    height:48px;
    line-height: 48px;
    background:rgba(0,0,0,0.71);
    border-radius:24px;
    font-size:30px;
    font-weight:400;
    color:rgba(102,192,244,1);
    padding-left: 46px;
    padding-right: 46px;
}
.introduce-main-1-describe{
    height:16px;
    line-height: 16px;
    font-size:16px;
    font-weight:400;
    color:#c6d4df;
    text-align: center;
    margin: 16px auto 0;
}
.process-describe{
    width:102px;
    height:102px;
    line-height: 102px;
    background:rgba(13,17,21,1);
    border-radius:50%;
    font-size:32px;
    font-weight:400;
    color:rgba(102,192,244,1);
    text-align: center;
    margin: 62px auto 0;
}
.role-name{
    width: 518px;
    margin: 54px auto 0;
    display: flex;
    justify-content:space-between;
}
.role-name-content{
    font-size:26px;
    font-weight:400;
    color:rgba(255,160,0,1);
}
.role-describe{
    margin: 46px auto 0;
    width: 755px;
    display: flex;
    justify-content:space-between;
}
.role-describe-content{
    width: 327px;
    font-size:16px;
    font-weight:400;
    color:#c6d4df;
}

.service-explain{
    width: 860px;
    margin: 60px auto 0;
    display: flex;
    justify-content:space-between;
}
.service-explain-main{
    width: 201px;
    height: 276px;
    background: url('../assets/images/service-explain-bg.png') no-repeat center center;
    background-size: 100% 100%;
}
.service-explain-main-content{
    width:149px;
    line-height: 30px;
    font-size:20px;
    font-weight:400;
    color:rgba(40,56,70,1);
    margin: 38px auto 0;
}


.introduce-table{
    width: 970px;
    margin: 8px auto 0;
}
.introduce-table tr th{
    font-size:18px;
    font-weight:400;
    color:rgba(198,212,223,1);
    text-align: left;
    font-size:18px;
    font-weight:400;

    min-height: 60px;
    line-height: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
}
.introduce-table tr:nth-child(even){
    background:rgba(42,71,94,1);
}
.introduce-table tr:nth-child(odd){
    background:#22394B;
}
.introduce-table tr:nth-child(1){
    background:rgba(18,26,37,1);
}
.introduce-table tr:nth-child(1) th{
    font-size:18px;
    font-weight:400;
    color:rgba(79,192,244,1);
}

    
.introduce-table tr th:nth-child(odd){
    text-indent: 20px;
}
.introduce-table tr th:nth-child(even){
    width: 75%;
    padding-left: 10px;
    padding-right: 10px;
}
/* 介绍部分 */

.community-icon{
    margin-right: 102px;
    cursor: pointer;
}
.community-icon:last-child{
    margin-right: 0;
}
.community-icon:hover img{
    opacity: 0.6;
}
.partner-main{
    margin: 36px auto 0;
}
.partner-main a{
    display: flex;
    align-items: center;
    justify-content:center;
    width: 250px;
}
.partner-main a:hover img{
    opacity: 0.6;
}
.partner-main a img{
    transform:scale(0.5, 0.5)
}
.footer{
    width: 100%;
    height: 122px;
    line-height: 122px;
    text-align: center;
    font-size:20px;
    font-weight:400;
    color:rgba(198,212,223,1);
    background:rgba(18,26,37,1);
}
.mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
}
.mask img{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 215px;
    height: 215px;
    margin-top: -107px;
    margin-left: -107px;
}
</style>

