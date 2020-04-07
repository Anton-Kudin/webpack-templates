<template>
  <div>
    <h2>Сообщение из store - {{ title }}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: ""
    }
  },
  created(){
    this.title = this.$store.getters.getTitle
  }
}
</script>

<style lang="scss" scoped>
  h2{
    color: blue;
  }
</style>