<template>
    <div class="nav">
        <div v-for="(item,index) in tabItems" v-bind:key="index" @click="navTabClick(item,index)">
            <img :src="index==idx?item.iconSelect:item.icon" alt="">
            <span :class="[index==idx?tabTextSelected:tabTextNormal]">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomNav",
        props: ["idx"],
        data() {
            return {
                tabItems: [
                    {
                        name: "首页",
                        push: "/",
                        icon: require("../assets/images/tab_home_g.png"),
                        iconSelect: require("../assets/images/tab_home_b.png")
                    },
                    {
                        name: "我的",
                        push: "/mine",
                        icon: require("../assets/images/tab_my_g.png"),
                        iconSelect: require("../assets/images/tab_my_b.png")
                    }
                ],
                tabTextSelected: "tabTextSelected",
                tabTextNormal: 'tabTextNormal'
            }
        }, methods: {
            navTabClick: function (item, index) {
                if (index != this.idx) {
                    this.$router.push(item.push);
                }
            }
        }
    }
</script>

<style scoped>
    .nav {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 5.5rem;
        margin-left: 3rem;
        margin-right: 3rem;
        margin-bottom: 2rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 1px 1px 5px 5px rgba(204, 204, 204, 0.2);
        border-radius: 3rem;
        display: flex;
    }

    .nav div {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    img {
        width: 2rem;
        height: 2rem;
    }

    .tabTextSelected {
        color: #506EFF;
    }

    .tabTextNormal {
        color: #999999;
    }
</style>
