<template>
  <form>
    <div class="input-box">
      <input type="text" class="input" placeholder="Pesquise por um novo amiguinho..." />
      <button class="btn-input">
        <i class="bx bx-search"></i>
      </button>
    </div>
    <p>Dica: Você pode pesquisar por sexo, porte, cidade, e nome.</p>
  </form>
</template>

<script>
export default {
  name: "SearchAnimals"
};
</script>

<style lang="scss" scoped>
form {
  position: relative;
  padding: 16px 0px;
  > p {
    font-size: 0.8rem;
    margin: 8px 0px 0px 0px;
  }
}
.input-box {
  max-width: 700px;
  > .input {
    position: relative;
    width: 100%;
    padding: 16px 32px;
    border: 1px solid var(--green-l);
    border-radius: 3px;
    &::placeholder {
      color: var(--green-l);
    }
  }
  > .btn-input {
    position: absolute;
    right: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 16px 32px;
    font-size: 1.5rem;
    color: var(--black-l);
  }
}
</style>