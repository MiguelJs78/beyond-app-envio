<template>
<form class="form login">
    <h1>Login</h1>
    
    <label for="username">Username:</label>
    <input v-model="username" required class="form__input" type="text" id="username" name="username">

    <label for="email">Email</label>
    <input v-model="email" required class="form__input" type="email" id="email" name="email">

    <button class="form__btn">Fazer login</button>
</form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: ''
        }
    },
    // methods: {
    //     async login() {
    //         const loginData = {
    //             username: this.username,
    //             email: this.email
    //         };
    //     }
    // }
}
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
    max-width: 240px;
    padding: 20px;
    background-color: rgb(233, 233, 233);
    border-radius: 10px;
}

.form__input {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;
}

.form__btn {
    margin-top: 12px;
    background-color: rgb(38, 164, 248);
    border-radius: 5px;
    padding: 5px;
}



</style>