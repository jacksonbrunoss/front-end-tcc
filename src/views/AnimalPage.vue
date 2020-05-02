<template>
  <section class="animal-page">
    <div class="container">
      <div v-if="animalsId" class="content">
        <div class="avatar-box">
          <div class="avatar">
            <img :src="animalsId.images.url" :alt="animalsId.nome" />
          </div>
        </div>
        <div class="info-box">
          <div class="info">
            <h2>Dados sobre</h2>
            <ul class="datas">
              <li>
                <b>Nome:</b>
                {{animalsId.nome}}
              </li>
              <li>
                <b>Espécie:</b>
                {{animalsId.especie}}
              </li>
              <li>
                <b>Sexo:</b>
                {{animalsId.sexo}}
              </li>
              <li>
                <b>Tamanho:</b>
                {{animalsId.porte}}
              </li>
              <li>
                <b>
                  Descrição:
                  <br />
                </b>
                {{animalsId.descricao}}
              </li>
              <li>
                <b>
                  Observações:
                  <br />
                </b>
                {{animalsId.observacoes}}
              </li>
            </ul>
            <div class="info-user">
              <h3>Cadastrado por:</h3>
              {{usersId}}
            </div>
          </div>
        </div>
      </div>
      <Loading v-else />
    </div>
  </section>
</template>

<script>
import { api } from "@/services/services.js";
export default {
  name: "AnimalPage",
  props: ["id"],
  data() {
    return {
      usersId: null,
      animalsId: null
    };
  },
  methods: {
    getUserId() {
      api.get(`/users/${this.animalsId.id_users}`).then(res => {
        this.usersId = res.data;
      });
    },
    getAnimalsId() {
      const id_animals = this.id;
      api.get(`/animals/${id_animals}`).then(res => {
        this.animalsId = res.data;
      });
    }
  },
  created() {
    this.getAnimalsId();
    // this.getUserId();
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 32px;
}
.avatar-box {
  width: 100%;
  height: 450px;
}
.avatar {
  overflow: hidden;
  display: block;
  width: 100%;
  height: 450px;
  border-radius: 3px;
  img {
    width: 100%;
    height: 100%;
  }
}
.info {
  h2 {
    font-size: 2rem;
    font-weight: 900;
  }
  > .datas li {
    padding: 5px 0px;
  }
}
</style>