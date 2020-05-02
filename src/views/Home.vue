<template>
  <div class="home">
    <header class="header">
      <div class="container">
        <div class="content">
          <div class="hero">
            <h1 class="title">Bem-vindo à Helpets.</h1>
            <p
              class="subtitle"
            >Nosso site está cheio de peludos ansiosos pra ter uma família. Tente diferentes buscas até encontrar um peludo pra chamar de seu.</p>
            <SearchAnimals />
          </div>
        </div>
      </div>
    </header>
    <ListAnimals />
  </div>
</template>

<script>
import SearchAnimals from "@/components/Animals/SearchAnimals.vue";
import ListAnimals from "@/components/Animals/ListAnimals.vue";
export default {
  name: "Home",
  components: {
    SearchAnimals,
    ListAnimals
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}
.content {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero {
  > .title {
    font-size: 2rem;
    color: var(--green-l);
    font-weight: 900;
    font-size: 3.5rem;
    text-align: center;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 16px 0px 16px 0px;
  }
  > .subtitle {
    max-width: 679px;
    text-align: center;
    line-height: 24px;
    margin-bottom: 16px;
  }
}
</style>
