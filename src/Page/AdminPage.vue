<template>
  <div>
    <div class="row">
       <span class="row_title"></span>
       <TimeLine/>
    </div>
    <div class="row" v-for="(val, key) in trip_data" :key="key">
       <span class="row_title">{{key}}</span>
       <SliceBanner v-for="(item, index) in val" :key="index" :color="item.color" :width="'200px'"/>
    </div>
  </div>
</template>

<script>
import SliceBanner from "../components/banner.vue"
import TimeLine from "../components/TimeLine.vue"
import axios from "axios";

export default {
  name: 'AdminPage',
  components:{
    SliceBanner,
    TimeLine
  },
  data: () => ({
    trip_data: {}
  }),
  props: {
  },
  mounted() {
    axios.get("/api/GetTripData").then(res=>{
        this.trip_data = res.data.trip_data.data
        console.log(this.trip_data)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin-top:20px;
  margin-bottom: 20px;
}
.row_title {
  color: #999;
  font-size: 20px;
  margin-right: 20px;
  width: 150px;
  text-align: left;
}
.banner {
  width: 600px;
  background-color: red;
  margin-left: 20px;
}
</style>
