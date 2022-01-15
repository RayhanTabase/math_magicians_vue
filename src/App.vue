<template>
<router-link to="/">Home</router-link>
<router-link to="/quote">Quotes</router-link>
<router-link to="/calculator">Calculator</router-link>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
