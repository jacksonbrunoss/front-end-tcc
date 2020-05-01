<template>
  <div class="pagination-box">
    <ul class="pagination">
      <li v-for="page in pageRange" :key="page">
        <router-link :to="{query: query(page)}">{{page}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    limit: {
      type: Number,
      default: 1
    },
    animalsTotal: {
      type: Number,
      default: 1
    }
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page
      };
    }
  },
  computed: {
    pageRange() {
      const current = Number(this.$route.query._page);
      const range = 5;
      const offset = Math.ceil(range / 2);
      const total = this.total;
      const arr = [];

      for (let i = 1; i <= total; i++) {
        arr.push(i);
      }

      arr.splice(0, current - offset);
      arr.splice(range, total);
      return arr;
    },
    total() {
      const t = this.animalsTotal / this.limit;
      return t !== Infinity ? Math.ceil(t) : 0;
    }
  }
};
</script>

<style  lang="scss" scoped>
.pagination-box {
  display: block;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px 0px 0px 0px;
}
.pagination {
  padding: 0;
  > li {
    display: inline-block;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      width: 30px;
      height: 30px;
      margin: 0px 8px;
      color: var(--green-d);
      font-weight: 700;
      border: solid 1px var(--green-d);
      transition: 0.2s ease;
    }
  }
}
li a.router-link-exact-active,
li a:hover {
  background: var(--green-d);
  color: var(--light-l);
  transform: scale(1.1);
  transition: 0.2s ease;
}
.sep {
  display: inline-block;
  width: 60px;
  height: 30px;
  margin: 0px 8px;
  border: solid 1px var(--green-l);
  border-radius: 3px;
  bottom: 0;
}
</style>