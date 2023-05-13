<script setup>
defineProps({
  modelValue: {
    type: Number,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <button class="add-to-cart" @click="$emit('update:modelValue', modelValue - 1)">-</button>
  {{ modelValue }}
  <button class="add-to-cart" @click="$emit('update:modelValue', modelValue + 1)">+</button>
</template>

<style></style>
