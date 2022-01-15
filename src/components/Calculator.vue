<template>
  <div id="Calculator">
    <div id="resultsContainer">{{next || total || 0}}</div>
      <div id="calculatorBody">
        <button type="button" v-on:click = "handleClick" name="AC">AC</button>
        <button type="button" v-on:click = "handleClick" name="+/-">+/-</button>
        <button type="button" v-on:click = "handleClick" name="%">%</button>
        <button type="button" class="altColor" v-on:click = "handleClick" name="÷">÷</button>
        <button type="button" name="7" v-on:click = "handleClick">7</button>
        <button type="button" name="8" v-on:click = "handleClick">8</button>
        <button type="button" name="9" v-on:click = "handleClick">9</button>
        <button type="button" class="altColor" v-on:click = "handleClick" name="x">x</button>
        <button type="button" name="4" v-on:click = "handleClick">4</button>
        <button type="button" name="5" v-on:click = "handleClick">5</button>
        <button type="button" name="6" v-on:click = "handleClick">6</button>
        <button type="button" class="altColor" v-on:click = "handleClick" name="-">-</button>
        <button type="button" name="1" v-on:click = "handleClick">1</button>
        <button type="button" name="2" v-on:click = "handleClick">2</button>
        <button type="button" name="3" v-on:click = "handleClick">3</button>
        <button type="button" class="altColor" v-on:click = "handleClick" name="+">+</button>
        <button type="button" class="gridSpanTwo" name="0" v-on:click = "handleClick">0</button>
        <button type="button" v-on:click = "handleClick" name=".">.</button>
        <button type="button" class="altColor" v-on:click = "handleClick" name="=">=</button>
    </div>
  </div>
</template>


<script>
import calculate from '../logic/calculate.js'
export default {
  name: 'Calculator',
  data() {
    return {
      total: null,
      next: null,
      operation: null,
    }
  },
  methods: {
    async handleClick(e) {
      const response = await calculate(this.$data, e.target.name);
      this.total = response.total;
      this.next = response.next;
      this.operation = response.operation;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background: rgb(233, 233, 233);
  height: 6em;
  border: 1px solid rgb(223, 223, 223);
}

#Calculator {
  width: 70%;
  min-width: 70%;
  font-size: 1.4rem;
}

#resultsContainer {
  box-sizing: border-box;
  max-width: 100%;
  min-width: 100%;
  background: gray;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 3em;
  padding-right: 0.5em;
}

#calculatorBody {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.gridSpanTwo {
  grid-column: 1 / span 2;
}

.altColor {
  background: orange;
}
</style>
