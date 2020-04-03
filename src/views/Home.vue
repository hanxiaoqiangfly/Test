<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <p>{{user.nickName}}</p>
        <van-image round="round"
                   width="100"
                   height="100"
                   :src="user.photo"
        />
        <van-button type="danger">的范德萨发</van-button>
    </div>
</template>

<script>

    import {Button, Image,Toast} from "vant"
    export default {
        name: 'Home',
        components: {
            [Button.name]: Button,
            [Image.name]: Image
        },
        data() {
            return {
                user: {}
            }
        },
        mounted() {
            let _this = this;
            _this.$api.userApi.login({
                account: "15764268018",
                password: "hxq123456"
            }).then(res => {
                _this.user = res.result;
                console.log(res)
                Toast.success({
                    message: res.message,
                })
            })
        }

    }
</script>
