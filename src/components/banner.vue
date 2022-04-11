<template>
  <div :style="{'background-color': color, 'width': width}"></div>
</template>

<script>
export default {
  name: 'SliceBanner',
  props: {
    color: String,
    width: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
