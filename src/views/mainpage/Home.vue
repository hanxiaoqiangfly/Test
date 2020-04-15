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
    import {Button} from "vant"

    export default {
        name: "Home",
        components: {
            BottomNav,
            [Button.name]: Button
        },
        mounted() {
            this.$store.dispatch("saveUserId", this.$utils.getUrlKey("userId"))
        },
        methods: {
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
