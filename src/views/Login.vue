<template>
  <div class="login-page">
    <div class="container">
      <div class="content">
        <div class="login">
          <h2>Login</h2>
          <form @submit.prevent="logIn">
            <div class="textfield">
              <input
                placeholder="E-mail"
                class="input-form"
                type="email"
                name="email"
                id="email"
                v-model="login.email"
              />
            </div>
            <div class="textfield">
              <input
                placeholder="Senha"
                class="input-form"
                type="password"
                name="password"
                id="password"
                v-model="login.password"
              />
            </div>
            <input class="btn btn-input" type="submit" value="Entrar" />
          </form>
          <p>
            Ainda não tem cadastro?
            <router-link to="/register">Cadastre-se aqui!</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch("getUsers", this.login.email);
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: auto;
}
.content {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  > .login {
    max-width: 460px;
    box-shadow: var(--shadow);
    padding: 32px 32px;
    > h2 {
      font-size: 2rem;
      font-weight: 900;
    }
    > form .textfield {
      padding: 16px 0px;
    }
    > form .btn-input {
      width: 100%;
    }
    > p {
      padding: 16px 0px 0px 0px;
      a {
        color: var(--green-d);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
