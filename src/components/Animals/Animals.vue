<template>
  <div class="card-animals">
    <div class="img-card">
      <img :src="img" :alt="nome" />
    </div>

    <h3>{{nome}}</h3>
    <p>{{sexo}}</p>
  </div>
</template>

<script>
export default {
  name: "Animals",
  props: ["img", "nome", "sexo"]
};
</script>

<style lang="scss" scoped>
.card-animals {
  width: 100%;
  background: var(--lighter);
  padding: 5px;
  border-radius: 7px;
}
.img-card {
  width: 100%;
  height: 150px;
  border-radius: 7px;
  overflow: auto;
  > img {
    width: 100%;
    height: 100%;
  }
}
</style>