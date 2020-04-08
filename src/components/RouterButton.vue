<template>
    <div class="rb" @click="rbClickHandle">
        <img :src="icon" style="width: 2.2rem;height: 2.2rem">
        <div class="rb-text">
            <span class="text-15-black">{{text1}}</span>
            <span class="text-12-999">{{text2}}</span>
        </div>
        <img src="../assets/images/right.png" style="width: 2rem;height: 2rem">
    </div>
</template>

<script>
    export default {
        name: "RouterButton",
        props: {
            "text1": {
                type: String,
                default: ""
            },
            "text2": String,
            "icon": String
        },
        data() {
            return {}
        }, methods: {
            rbClickHandle: function () {
                this.$emit("rbClick")
            }
        }
    }
</script>

<style scoped>
    .rb {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 1rem 1.5rem 1.5rem;
    }

    .rb-text {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        align-items: center;
        margin: 0 0 0 1.5rem;
    }
</style>
