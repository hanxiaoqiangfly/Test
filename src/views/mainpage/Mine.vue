<template>
    <div class="mine">
        <div class="div_bj">
            <div class="div_lan"><span class="lan bg-white-radius20">中文</span></div>
            <van-image class="vi_head" round="round" width="100" height="100" :src="user.photo"
                       error-icon="../assets/images/icon_yaoqingma.png"/>
            <p class="p_nickname">{{user.nickName}}</p>
        </div>

        <div class="div_shop_order bg-white-radius10">
            <div v-for="item in shop_order" v-bind:key="item.text">
                <img :src="item.icon" alt="" style="width: 2.9rem;height: 2.9rem">
                <span class="text-12-black">{{item.text}}</span>
            </div>
        </div>

        <div class="div_rb bg-white-radius10 marginHorizontal">
            <router-button v-for="(item,index) in router_button_icon" v-bind:key="index"
                           :text1="item.text1" :text2="item.text2"
                           :icon="item.icon" @rbClick="rbClick(index)"></router-button>

        </div>
        <Nav idx="1"></Nav>
    </div>
</template>

<script>

    import {Button, Image, Toast} from "vant"
    import RouterButton from "../../components/RouterButton";
    import Nav from "../../components/BottomNav"

    export default {
        name: 'Mine',
        components: {
            [Button.name]: Button,
            [Image.name]: Image,
            RouterButton,
            Nav
        },
        data() {
            return {
                user: {},
                shop_order: [
                    {
                        "icon": require("../../assets/images/icon_daifukuan.png"),
                        "text": "待付款"
                    },
                    {
                        "icon": require("../../assets/images/icon_daishouhuo.png"),
                        "text": "待收货"
                    },
                    {
                        "icon": require("../../assets/images/icon_yiwancheng.png"),
                        "text": "已完成"
                    },
                    {
                        "icon": require("../../assets/images/icon_alldingdan.png"),
                        "text": "全部订单"
                    },
                ],
                router_button_icon: [
                    {
                        "icon": require("../../assets/images/icon_yaoqingma.png"),
                        "text1": "我的邀请码",
                        "text2": "邀请好友获得积分"
                    },
                    {
                        "icon": require("../../assets/images/icon_yaoqingma.png"),
                        "text1": "我的钱包",
                        "text2": ""
                    },
                    {
                        "icon": require("../../assets/images/icon_yaoqingma.png"),
                        "text1": "我的战队",
                        "text2": ""
                    },
                    {
                        "icon": require("../../assets/images/icon_yaoqingma.png"),
                        "text1": "信息披露",
                        "text2": ""
                    },
                    {
                        "icon": require("../../assets/images/icon_yaoqingma.png"),
                        "text1": "设置",
                        "text2": ""
                    },
                    {
                        "icon": require("../../assets/images/icon_yaoqingma.png"),
                        "text1": "申请入驻商城",
                        "text2": ""
                    }

                ]
            }
        },
        mounted() {
            let _this = this;
            _this.$api.userApi.myInfo({
                userId: _this.$store.state.userId,
            }).then(res => {
                console.log(res)
                _this.user = res.result;
                _this.$store.dispatch("saveUserInfo", res.result);
            })
        }, methods: {
            rbClick: function (id) {
                switch (id) {
                    case 0:
                        this.$router.push('/myInviteCode')
                        break;
                    default:
                        Toast.success({message: "yes" + id})
                        break;
                }
            }
        }

    }
</script>
<style scoped>
    .mine {
        padding-bottom: 8.5rem;
    }

    .div_bj {
        background: linear-gradient(214deg, rgba(85, 101, 251, 1) 0%, rgba(85, 153, 251, 1) 100%);
        width: 100%;
        height: 26rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 4.4rem 1.5rem 1.5rem 1.5rem;
    }

    .div_lan {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .vi_head {
        margin-top: 1rem;
    }

    .p_nickname {
        margin-top: 1.5rem;
    }

    .lan {
        width: 5rem;
        height: 2rem;
        padding: 0.5rem 1rem;
        box-sizing: border-box;
        line-height: 1rem;
    }

    .div_shop_order {
        display: flex;
        margin: -4rem 1.5rem;
        height: 8rem;
        box-sizing: border-box;
    }

    .div_shop_order div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }

    .div_rb {
        margin-top: 5rem;
    }
</style>
