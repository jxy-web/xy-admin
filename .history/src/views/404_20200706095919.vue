<template>
    <div class="not-found">
        <countTo :startVal='startVal' :endVal='endVal' :duration='1000' class="count-up"></countTo>
        <el-button type="primary" size="small" @click="$router.push('/home')">返回首页</el-button>
    </div>
</template>

<script>
    import countTo from 'vue-count-to';
    export default {
        name: "404",
        components:{
            countTo
        },
        data() {
            return {
                endVal: 404,
                startVal: 0
            }
        }
    }
</script>

<style scoped lang="scss">
    .not-found{
        background-color: #93b9ce;
        height: 100%;
        text-align: center;
        padding-top: 20px;
        .count-up{
            color: #fff;
            display: block;
            font-size: 40px;
        }
    }
</style>
