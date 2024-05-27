<template>
    <div class="container">
        <CourseList/>
    </div>
</template>

<script>
import CourseList from '@/components/CourseList.vue';

export default {
    components: {
        CourseList
    }
}
</script>

<style>
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
</style>