<template>
    <div class="myFriend">
        <van-nav-bar left-arrow title="我的好友" left-text="返回" @click-left="onClickLeft"></van-nav-bar>
        <van-pull-refresh v-model="isRefreshing " @refresh="onRefresh()">
            <van-list v-model="loading" @load="onLoad" :finished="finished" :immediate-check="false">
                <div class="div_item bg-white-radius10 marginHorizontal marginTop" v-for="(item ,index) in friends"
                     v-bind:key="index">
                    <van-image round="round" :src="item.photo" style="height: 4rem;width: 4rem"/>
                    <span>{{item.nickName}}</span>
                    <span class="focus">进入</span>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
    import {NavBar, PullRefresh, Image, List} from "vant"

    export default {
        name: "MyFriend",
        data() {
            return {
                count: 0,
                friends: [],
                offset: 0,
                isRefreshing: false,
                loading: false,
                finished: false,
            }
        },
        components: {
            [NavBar.name]: NavBar,
            [Image.name]: Image,
            [List.name]: List,
            [PullRefresh.name]: PullRefresh
        },
        mounted() {
            this.onRefresh();
        }, methods: {
            onClickLeft: function () {
                this.$router.back();
            },
            onRefresh: function () {
                this.offset = 0;
                this.finished = false;
                this.friendList();
            },
            onLoad: function () {
                this.offset += 10;
                this.friendList();
            },
            friendList: function () {
                let _this = this;
                _this.$api.manorApi.friendList({
                    phone: "",
                    userId: "cd492e33b4814bfaac61db834243b2a6",
                    offset: _this.offset,
                    limit: "500",
                    sign: "4EDDE8FD62E5D9F87F7DD1E37D4641D5",
                    requestFrom: 1
                }).then(res => {
                    console.log(res)
                    if (_this.offset == 0) {
                        _this.isRefreshing = false;
                        _this.friends = [];
                        _this.friends = res.result.rows;
                    } else {
                        _this.friends = _this.friends.concat(res.result.rows)
                        _this.loading = false;
                        if (_this.friends.length >= res.result.total) {
                            _this.finished = true;
                        }
                    }

                }).finally(() => {

                })
            }
        }
    }
</script>

<style scoped>
    .focus {
        width: 5rem;
        height: 2rem;
        padding: 0.5rem 1rem;
        box-sizing: border-box;
        line-height: 1rem;
        border-radius: 1rem;
        color: white;
        background: linear-gradient(39deg, rgba(80, 110, 255, 1) 0%, rgba(0, 255, 199, 1) 100%);
    }
</style>
