<template>
   <nav className="navbar">
      <h1 className="header">Math Magicians</h1>
      <ul className="nav-links">
          <li>
            <router-link to="/">Home</router-link> 
          </li>
          <li>
            <router-link to="/quote">Quotes</router-link>
          </li>
          <li>
            <router-link to="/calculator">Calculator</router-link>
          </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  padding: 1rem;
  margin-bottom: 3rem;
  overflow: hidden;
}

.navbar .nav-links {
  display: flex;
  align-items: center;
  column-gap: 1.3rem;
  height: 3.4rem;
}

.navbar .header {
  height: 5rem;
  display: flex;
  align-items: center;
}

.navbar .nav-links li::after {
  content: "";
  border-right: 2.3px solid black;
  padding-right: 1rem;
}

.navbar .nav-links li:nth-last-child(1)::after {
  content: "";
  border-right: none;
}

.navbar .nav-links .router-link-exact-active {
  color: green;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
}
</style>