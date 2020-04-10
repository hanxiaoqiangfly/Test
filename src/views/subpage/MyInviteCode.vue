<template>
    <div class="mic">
        <van-nav-bar left-arrow title="邀请码" left-text="返回" @click-left="onClickLeft"></van-nav-bar>
        <p>fdfsdfdf</p>
    </div>
</template>

<script>
    import {NavBar} from "vant"

    export default {
        name: "MyInviteCode",
        components: {
            [NavBar.name]: NavBar
        },
        methods: {
            onClickLeft: function () {
                this.$router.back();
            }
        }
    }
</script>

<style scoped>

</style>
