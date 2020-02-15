<template>
<div class="lang">{{currentLang}}
    <div class="lang-drop">
        <li @click="changeLang('zh')">中文</li>
        <li @click="changeLang('en')">English</li>
        <li @click="changeLang('ko')">한국어</li>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            currentLang: '中文',
        }
    },
    mounted(){

    },
    methods: {
        changeLang: function (params) {
            this.$i18n.locale = params
            if (this.$i18n.locale == 'en') {
                this.currentLang = 'English'
            } else if (this.$i18n.locale == 'zh') {
                this.currentLang = '中文'
            } else if (this.$i18n.locale == 'ko') {
                this.currentLang = '한국어'
            }
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lang{
    width: 110px;
    height: 30px;
    line-height: 30px;
    /* border: 1px solid #fff; */
    border-radius: 3px;
    margin: 0px auto;
    text-align: left;
    color: #fff;
    position: relative;
    text-indent: 0.7em;
    display: inline-block;
    font-size:20px;
}
.lang:hover .lang-drop{
    display: block;
}
.lang-drop{
    width: 110px;
    position: absolute;
    top: 30px;
    left: -1px;
    /* border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-radius: 3px; */
    overflow: hidden;
    background:rgba(23,26,33,1);
    display: none;
}
.lang-drop li{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #fff;
    /* border-bottom:  1px solid #fff; */
    cursor: pointer;
    font-size:20px;
}
.lang:after{
    content: "";
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: #fff transparent transparent;
    position: absolute;
    top: 10px;
    right: 3px;
}
</style>



