<template>
    <div>
        <h1>Courses</h1>
        <table class="table">
            <thead class="table__head">
                <tr class="table__head__row">
                    <th class="table__head__label">Nome</th>
                    <th class="table__head__label">Horário</th>
                    <th class="table__head__label">Professor</th>
                    <th class="table__head__label">Cargo horária</th>
                    <th class="table__head__label">Certificação</th>
                    <th class="table__head__label">descrição</th>
                    <th class="table__head__label">Actions</th>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr class="table__body__row">
                    <td class="table__body__data">Do 0 ao milhão</td>
                    <td class="table__body__data">04:20</td>
                    <td class="table__body__data">Pablo Marçal</td>
                    <td class="table__body__data">4H</td>
                    <td class="table__body__data">Sim</td>
                    <td class="table__body__data">Alguma descricao...</td>
                    <td class="table__body__data">
                        <div class="table__body__action">
                            <v-btn>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </div>
                    </td>
                </tr>

                <!-- <tr v-for="item in items" class="table__body__row">
                    <td class="table__body__data">{{ item.nome }}</td>
                    <td class="table__body__data">{{ item.horario }}</td>
                    <td class="table__body__data">{{ item.professor }}</td>
                    <td class="table__body__data">{{ item.Cargo horária }}</td>
                    <td class="table__body__data">{{ item.Certificação }}</td>
                    <td class="table__body__data">{{ item.descrição }}</td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>

<script>
export default {}
</script>

<style>
.table{
    border: 1px solid gray;
}
.table__body__data{
    border: 1px solid gray;
}

</style>