<template>
    <div>
      <h2>Lista de frases de anime</h2>
      <ul>
        <li v-for="quote in quotes" :key="quote.id">
          <p><strong>Anime:</strong> {{ quote.anime }}</p>
          <p><strong>Personaje:</strong> {{ quote.character }}</p>
          <p><strong>Cita:</strong> {{ quote.quote }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'QuotesListView',
    data() {
      return {
        quotes: []
      }
    },
    mounted() {
      this.fetchQuotes()
    },
    methods: {
      fetchQuotes() {
        axios.get('https://animechan.vercel.app/api/quotes')
          .then(response => {
            this.quotes = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
  