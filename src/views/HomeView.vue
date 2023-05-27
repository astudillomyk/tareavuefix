<template>
    <div>
      <h1>Lista de frases de anime</h1>
      <button @click="goToQuotesList">Ver frases</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    methods: {
      goToQuotesList() {
        this.$router.push('/quotes')
      }
    }
  }
  </script>
  
  