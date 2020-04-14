<template>
    <div class="mic">
        <van-nav-bar left-arrow title="邀请码" left-text="返回" @click-left="onClickLeft"></van-nav-bar>
        <div class="container">
            <div id="qrCode"></div>
            <div id="inviteCode">{{inviteCode}}</div>
            <div class="copy" data-clipboard-text="copy" data-clipboard-target="#inviteCode" @click="onCopy">复制</div>
        </div>
    </div>
</template>

<script>
    import {NavBar, Toast} from "vant"
    import QRCode from "qrcodejs2"
    import Clipboard from 'clipboard';

    export default {
        name: "MyInviteCode",
        components: {
            [NavBar.name]: NavBar,
        },
        data() {
            return {
                inviteCode: '',
            }
        },
        mounted() {

            this.init()
        },
        methods: {
            onClickLeft: function () {
                this.$router.back();
            },
            init: function () {
                var _this = this;
                // _this.inviteCode = _this.$store.state.user.invitecode;
                _this.inviteCode = "http://192.168.1.105:8080/geek/geek_2.1.2_20200414_debug.apk";

                new QRCode('qrCode', {
                    width: 180,
                    height: 180,
                    text: _this.inviteCode,
                    colorDark: '#000',
                    colorLight: '#fff'
                })
            },
            onCopy: function () {
                var clipboard = new Clipboard('.copy');
                clipboard.on('success', function (e) {
                    console.log(e);
                    e.clearSelection();
                    Toast.success({message: "复制成功"})
                    clipboard.destroy();
                });

            }
        }
    }
</script>

<style scoped>

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #qrCode {
        width: 18rem;
        height: 18rem;
        background: linear-gradient(39deg, rgba(80, 110, 255, 1) 0%, rgba(0, 255, 199, 1) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
    }

    .copy {
        width: 70px;
        height: 30px;
        background: linear-gradient(214deg, rgba(255, 119, 85, 1) 0%, rgba(246, 62, 71, 1) 100%);
        border-radius: 15px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
