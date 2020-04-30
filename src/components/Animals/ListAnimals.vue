<template>
  <section class="list-animals">
    <div class="container">
      <div class="content">
        <div v-if="animals && animals.length" class="content-animals">
          <Animals
            v-for="animal in animals"
            :key="animal.id"
            :nome="animal.nome"
            :img="animal.images.url"
            :sexo="animal.sexo"
            :id_users="animal.id_users"
            :port="animal.porte"
          />
        </div>
        <div v-else-if="animals && animals.length === 0">
          <p>Busca sem resultados. Tente buscar outro termo.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services/services.js";
import { serialize } from "@/helpers/helpers.js";
import Animals from "./Animals.vue";
export default {
  name: "ListAnimals",
  components: { Animals },
  data() {
    return {
      animals: null,
      limit: 12
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/animals/?_limit=${this.limit}${query}`;
    }
  },
  methods: {
    GetAnimals() {
      api.get(this.url).then(res => {
        this.animals = res.data;
      });
    }
  },
  watch: {
    url() {
      this.GetAnimals();
    }
  },
  created() {
    this.GetAnimals();
  }
};
</script>

<style lang="scss" scoped>
.list-animals {
  width: 100%;
  margin-top: 4rem;
}
.content-animals {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
}
</style>
