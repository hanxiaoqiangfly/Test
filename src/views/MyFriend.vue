<template>
   <div>
       <van-nav-bar left-arrow title="我的好友" left-text="返回" @click-left="onClickLeft"></van-nav-bar>
       <p>fdfsdfdf</p>
   </div>
</template>

<script>
    import {NavBar} from "vant"

    export default {
        name: "MyFriend",
        components: {
            [NavBar.name]: NavBar
        }, methods: {
            onClickLeft: function () {
                this.$router.back();
            }
        }
    }
</script>

<style scoped>

</style>
