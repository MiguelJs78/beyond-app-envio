<template>
  <div>
    <h1>Courses</h1>
    <v-btn @click="abrirDialogo" color="primary">Adicionar</v-btn>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Adicionar Novo Curso</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="novoItem.nome" label="Nome"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="novoItem.horario" label="Horário"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="novoItem.professor" label="Professor"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="novoItem.cargorhoraria" label="Carga Horária"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="novoItem.certificacao" label="Certificação"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="novoItem.descricao" label="Descrição"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="fecharDialogo">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="adicionarItem">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">edit curso</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="novoItem.nome" label="Nome"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="novoItem.horario" label="Horário"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="novoItem.professor" label="Professor"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="novoItem.cargorhoraria" label="Carga Horária"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="novoItem.certificacao" label="Certificação"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="novoItem.descricao" label="Descrição"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="fecharDialogo">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="salvarEdicao">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <table class="table">
      <thead class="table__head">
        <tr class="table__head__row">
          <th class="table__head__label">Nome</th>
          <th class="table__head__label">Horário</th>
          <th class="table__head__label">Professor</th>
          <th class="table__head__label">Carga Horária</th>
          <th class="table__head__label">Certificação</th>
          <th class="table__head__label">Descrição</th>
          <th class="table__head__label">Actions</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr v-for="(item, index) in listaItens" :key="item.id" class="table__body__row">
          <td class="table__body__data">{{ item.nome }}</td>
          <td class="table__body__data">{{ item.horario }}</td>
          <td class="table__body__data">{{ item.professor }}</td>
          <td class="table__body__data">{{ item.cargorhoraria }}</td>
          <td class="table__body__data">{{ item.certificacao }}</td>
          <td class="table__body__data">{{ item.descricao }}</td>
          <td class="table__body__data">
            <div class="table__body__action">
              <v-btn @click="editarItem(item)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn @click="excluirItem(index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      novoItem: {
        nome: '',
        horario: '',
        professor: '',
        cargorhoraria: '',
        certificacao: '',
        descricao: ''
      },
      itemEditado: {
        nome: '',
        horario: '',
        professor: '',
        cargorhoraria: '',
        certificacao: '',
        descricao: ''
      },
      listaItens: []
    };
  },
  methods: {
    abrirDialogo() {
      this.dialog = true;
    },
    fecharDialogo() {
      this.dialog = false;
      this.novoItem = {
        nome: '',
        horario: '',
        professor: '',
        cargorhoraria: '',
        certificacao: '',
        descricao: ''
      };
    },
    adicionarItem() {
      const newItemId = this.listaItens.length ? this.listaItens[this.listaItens.length - 1].id + 1 : 1;
      this.listaItens.push({
        id: newItemId,
        ...this.novoItem
      });
      this.novoItem = {
        nome: "",
        horario: "",
        professor: "",
        cargorhoraria: "",
        certificacao: "",
        descricao: ""
      };
    },
    editarItem(item) {
      this.dialog2 = true;
      this.itemEditado = { ...item };

    },
    salvarEdicao() {
      if (this.itemEditado !== null) { // Verifica se itemEditado não é null
        const itemIndex = this.listaItens.findIndex(listaItem => listaItem.id === this.itemEditado.id);
        if (itemIndex !== -1) {
          this.listaItens.splice(itemIndex, 1, this.itemEditado);
          this.fecharDialogo(); // Altere aqui
        }
      }
    },
    cancelarEdicao() {
      this.itemEditado = null;
    },
    excluirItem(index) {
      this.listaItens.splice(index, 1)
    }
  }
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table__head {
  background-color: #f5f5f5;
}

.table__head__row {
  border-bottom: 1px solid #ddd;
}

.table__head__label {
  padding: 10px;
  text-align: left;
}

.table__body__row {
  border-bottom: 1px solid #ddd;
}

.table__body__data {
  padding: 10px;
}

.table__body__action {
  display: flex;
  gap: 10px;
}</style>
