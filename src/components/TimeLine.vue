<template>
  <div>
  </div>
  <div class="line" :style="{'width': width*100+'px',}" >
      <span v-for="(item, index) in axis_list" :key="index" class="line_adxis">{{item}}</span>
  </div>
</template>
  
  
<script>
export default {
  name: "TimeLine",
  data() {
    return {
      start_time: 1649646812,
      end_time: 1649682812,
      width: 0,
      axis_list: []
    };
  },
  mounted() {
    var interval_seconds = this.end_time - this.start_time;
    this.width = interval_seconds/3600
    if(interval_seconds%3600==0){
        this. width += 1
    }
    for (var i=0;i<this.width;i+=2){
        var d = new Date(this.start_time+i*3600);
        this.axis_list.push(d.getMonth()+'_'+d.getDay()+'_'+d.getHours())
    }
  },
  methods:{
  },
  setup() {
      var start_time = 1649643212;
      var end_time = 1649729612;
      var interval = end_time - start_time;
      console.log(interval);
  }
};
</script>
  
  
<style scoped>
.line_axis {
    margin-left: 100px;
    float: left;
}
.line {
    border-bottom: 1px solid #000000;
}
</style>