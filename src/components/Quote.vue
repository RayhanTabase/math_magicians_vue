<template>
  <div class="container quoteContainer">
    <p>
      <span>
        {{quoteData.quote}}
      </span>
      <span>
        {{quoteData.quote ? '  -  ' : ''}}
      </span>
      <span className="italize">
        {{quoteData.author}}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  data() {
    return {
      quoteData:{
        quote:'',
        author:'',
      }
    }
  },
  methods: {
    async getRandomQuote() {
      const request = await fetch('https://random-math-quote-api.herokuapp.com');
      const response = await request.json();
      return response;
    },
  },
  async mounted() {
    const newQuote = await this.getRandomQuote();
    console.log(newQuote);
    this.quoteData = newQuote;
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=The+Nautigal:wght@700&display=swap');

.quoteContainer {
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'The Nautigal', cursive;
  font-size: 2.5rem;
}

.italize {
  font-style: italic;
}
</style>