<template>
  <div>
    <div :style="{'backgroundColor':color}" class="xy-card">
        <div>
          <p>{{title}}</p>
          <countTo :endVal="count"/>
        </div>
        <i :class="icon" style="font-size:20px"></i>
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
      name: "card",
      props:{
        title:{
          default: '访问数'
        },
        count:{
          default: 500
        },
        icon:{
          default: 'iconfont icon-fangwentongji'
        },
        color:{
          default: '#73DDFF'
        },
      },
      components: {
          countTo
      }
  }
</script>

<style lang="scss" scoped>
.xy-card{
  border-radius: 5px;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
}
.xy-card:hover{
  box-shadow: 10px 0px -10px rgba(0,0,0,0.9)
}

</style>