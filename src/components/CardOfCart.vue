<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card-of-cart">
    <pre>
        {{ product }}
    </pre>
  </div>
</template>

<style scoped></style>
