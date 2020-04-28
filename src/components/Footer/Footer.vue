<template>
  <footer class="footer">
    <p>Copyright © 2020 Helpets. Alguns direitos reservados.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 0px 16px;
  background-color: var(--green-l);
  position: relative;
  top: 75px;
}
.footer p {
  text-align: center;
  padding: 24px 0px;
  color: var(--light-l);
}
</style>