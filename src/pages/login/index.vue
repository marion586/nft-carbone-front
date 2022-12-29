<script lang="ts" setup>
    import Container from './content/container.vue';
</script>

<template>
    <div class="container">
        <Container />
        <img src="@/assets/immo.jpeg" alt="img login" />
    </div>
</template>

<style lang="scss" scoped>
    .container {
        @apply flex justify-center items-center;
    }
</style>
