<template>
  <div>
    <!-- navigation -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="d-flex">
          <a active-class="is-active" href="https://arthoughts.com" class="web-link nav-link font-weight-bol">Arthoughts</a>
          <nuxt-link active-class="is-active" to="/" class="nav-link" exact>Posts</nuxt-link>
          <nuxt-link active-class="is-active" to="/about" class="nav-link" exact>About</nuxt-link>
        </div>
      </div>
    </nav>
    <!-- /navigation -->

    <!-- displays the page component -->
    <nuxt/>
  </div>
</template>

<style>
  /* .main-content {
    margin: 30px 0;
  } */

  .web-link.nav-link {
    color: orange;
    font-weight: bold;
  }

  .nav-link {
    color: rgb(34, 34, 34)
  }

  .is-active {
    /* font-weight: bold; */
  };
</style>

