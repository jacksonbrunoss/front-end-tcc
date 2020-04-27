<template>
  <section class="list-animals">
    <div class="container">
      <div class="content">
        <Animals
          v-for="animal in animals"
          :key="animal.id"
          :nome="animal.nome"
          :img="animal.images.url"
          :sexo="animal.sexo"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Animals from "./Animals.vue";
export default {
  name: "ListAnimals",
  components: { Animals },
  data() {
    return {
      animals: null
    };
  },
  methods: {
    GetAnimals() {
      fetch("http://localhost:3000/animals")
        .then(res => res.json())
        .then(res => {
          this.animals = res;
        });
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
}
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
}
</style>