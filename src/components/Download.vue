<template>
<div class="home">
    <!-- <img src="../assets/images/log.png" alt=""> -->
        <img class="logo" src="../assets/images/logo.png" alt="">
        <p class="tips">请复制以下链接并在浏览器中打开～</p>
        <p class="downloadRouter">{{downloadApk}}</p>
</div>
</template>

<script>
export default {
    data () {
        return {
            android: 'https://x1-package.oss-cn-hangzhou.aliyuncs.com/BadDragonMustDie.apk',
            ios: 'itms-services:///?action=download-manifest&url=https://chainplay-fun.oss-cn-beijing.aliyuncs.com/dmd_release.plist',
            downloadApk: ''
        }
    },
    watch: {
    },
    mounted(){
        var userAgent = navigator.userAgent;
        var isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
        var isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
            this.downloadApk = this.android
        } else {
            this.downloadApk = this.ios
        }
    },
    methods: {
    },
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
    margin: 30px auto 0;
    display: block;
    width: 280px;
}
.tips {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 40px;
    margin-top: 60px;
    text-align:center;
}
.downloadRouter {
    width: 100%;
    line-height: 24px;
    font-size: 30px;
    margin-top: 60px;
    text-align:center;
}

</style>

