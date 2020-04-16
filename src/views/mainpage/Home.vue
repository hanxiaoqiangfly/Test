<template>
    <div class="home">
        <p>this is home</p>
        <div>
            <van-button type="primary" @click="toMyFriend">推荐好友</van-button>
        </div>
        <div>
            <van-button type="primary" @click="toMyFriendList">我的好友</van-button>
        </div>
        <bottom-nav idx="0"></bottom-nav>
    </div>
</template>

<script>
    import BottomNav from "../../components/BottomNav"
    import {Button, Toast} from "vant"

    export default {
        name: "Home",
        components: {
            BottomNav,
            [Button.name]: Button
        },
        mounted() {
            this.init();
        },
        methods: {
            init: function () {
                if (!this.$utils.getUrlKey("userId")) {
                    Toast.fail('userId不存在');
                    return;
                }

                this.$store.dispatch("saveUserId", this.$utils.getUrlKey("userId"));
                let _this = this;
                _this.$api.userApi.myInfo({
                    userId: _this.$store.state.userId,
                }).then(res => {
                    console.log(res)
                    _this.user = res.result;
                    _this.$store.dispatch("saveUserInfo", res.result);
                })
            },
            toMyFriend: function () {
                this.$router.push("/myRecommendFriend")
            },
            toMyFriendList: function () {
                this.$router.push("/myFriend")
            }
        }
    }
</script>

<style scoped>
    .home {
        padding-bottom: 8.5rem;
    }
</style>
