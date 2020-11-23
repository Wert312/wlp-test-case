<template>
  <div>
    <ul>
      <li v-for="(page, index) in paginatedData" :key="index">
        {{ p.first }}
        {{ p.last }}
        {{ p.suffix }}
      </li>
    </ul>
    <button @click="prevPage">Previous</button>
    <button @click="nextPage">Next</button>
  </div>
</template>

<script>
  export default {
    name: 'ImagePagination',
    props: {

    listData: {
      type:Array,
      required: true
    },

    size:{
      type:Number,
      required: false,
      default: 5
    }
  },

  computed: {
    pageCount(){
      let l = this.listData.length,
          s = this.size;
      return Math.ceil(l/s);
    },

    paginatedData(){
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return this.listData.slice(start, end);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>