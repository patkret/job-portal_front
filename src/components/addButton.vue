<template>
    <button class="custom-button">
        <i class="fa fa-chevron-left"></i>
        <span>{{text}}</span>

        <i class="fa fa-chevron-right"></i>
    </button>
</template>

<script>
  export default {
    props: ['text'],
    name: 'add-button',
  }
</script>

<style scoped>

</style>