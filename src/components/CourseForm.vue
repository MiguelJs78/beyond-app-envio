<template>
    <form>
        <h1 class="add">adicionar cursos</h1>

        <label for="nome">nome do curso:</label>
        <input v-model="username" required class="form__input" type="text" id="username" name="username">

        <label for="Horário">Horário:</label>
        <input v-model="Horário" required class="form__input" type="text" id="Horário" name="Horário">

        <label for="Professor">Professor:</label>
        <input v-model="Professor" required class="form__input" type="text" id="Professor" name="Professor">

        <label for="Cargo horária">Cargo horária:</label>
        <input v-model="Cargohorária" required class="form__input" type="text" id="Cargohorária" name="Cargohorária">
        
        <label for="Certificação">Certificação:</label>
        <input v-model="Certificação" required class="form__input" type="text" id="Certificação" name="Certificação">
        <label for="descrição">descrição:</label>
        <input v-model="descrição" required class="form__input" type="text" id="descrição" name="descrição">
        
    </form>     
</template>
<script>
export default {}
</script>
<style>
 .add{ display: flex;
    flex-direction: column;
    max-width: 240px;
    padding: 20px;
    background-color: rgb(233, 233, 233);
    border-radius: 10px;}
    </style>
