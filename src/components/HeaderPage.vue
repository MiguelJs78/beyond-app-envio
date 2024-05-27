<template>
    <v-app-bar>
        <v-app-bar-title>
            <span>Titulo</span>
        </v-app-bar-title>

        <v-spacer />

        <div class="tabs_container">
            <ul class="tabs_ul">
                <li class="tabs_li">
                    <router-link class="link" to="/">Home</router-link>
                </li>
                <li class="tabs_li">
                    <router-link class="link" to="/login">Login</router-link>
                </li>
                <li class="tabs_li">
                    <router-link class="link" to="/register">Register</router-link>
                </li>
            </ul>
        </div>

        <v-spacer />
    </v-app-bar>
</template>

<script>
export default {}
</script>

<style>
.tabs_ul {
    display: flex;
    gap: 10px;
    list-style: none;
}

.tabs_li:hover {
    background-color: black;
}

.link {
    text-decoration: none;
}
</style>