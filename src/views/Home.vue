<template>
    <div class="home">
        <p>this is home</p>
        <van-button type="primary"  @click="toMyFriend">我的好友</van-button>
        <Nav idx="0"></Nav>
    </div>
</template>

<script>
    import Nav from "../components/BottomNav"
    import {Button} from "vant"
    export default {
        name: "Home",
        components: {
            Nav,
            [Button.name]: Button
        },
        methods:{
            toMyFriend:function () {
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
