<template>
    <div class="home">
        <p>this is home</p>
       <div> <van-button type="primary" @click="toMyFriend">推荐好友</van-button></div>
       <div> <van-button type="primary" @click="toMyFriendList">我的好友</van-button></div>
        <Nav idx="0"></Nav>
    </div>
</template>

<script>
    import Nav from "../../components/BottomNav"
    import {Button} from "vant"

    export default {
        name: "Home",
        components: {
            Nav,
            [Button.name]: Button
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
