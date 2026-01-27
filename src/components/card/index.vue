<template>
  <div class="card-container">
    <div class="xy-card">
        <div class="card-content">
          <p class="card-label">{{title}}</p>
          <countTo :endVal="count" class="card-value"/>
        </div>
        <i :class="icon" class="card-icon" :style="{'color': color}"></i>
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
.card-container {
    margin-bottom: 24px;
}
.xy-card{
  border-radius: var(--radius);
  padding: 24px;
  background-color: var(--card);
  border: 1px solid var(--border);
  color: var(--card-foreground);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  transition: all 0.2s ease;
}
.card-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--muted-foreground);
    margin-bottom: 4px;
}
.card-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--foreground);
}
.card-icon{
  font-size: 1rem;
  opacity: 0.8;
}
.xy-card:hover{
  border-color: var(--ring);
  transform: translateY(-2px);
}

</style>