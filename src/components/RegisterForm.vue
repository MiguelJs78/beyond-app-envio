<template>
    <form class="form register">
        <h1>Register</h1>
        
        <label for="username">Username:</label>
        <input v-model="username" required class="form__input" type="text" id="username" name="username">
    
        <label for="email">Email</label>
        <input v-model="email" required class="form__input" type="email" id="email" name="email">
    
        <button class="form__btn">Fazer registro</button>
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
</style>