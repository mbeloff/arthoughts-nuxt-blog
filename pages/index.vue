<template>
  <div>
    
    <section class="container-fluid hero-body">
      <div class="container py-5">
        <p class="bg-dark text-white p-2 rounded">blog no longer maintained. Follow <a href="https://www.facebook.com/BobRossCRI">our facebook</a> instead</p>
      </div>
    </section>

    <posts />
    <script src="https://kit.fontawesome.com/624839148d.js" crossorigin="anonymous"></script>
    
  </div>
</template>

<script>
import Posts from '~/components/Posts.vue'

export default {
  components: {
    Posts
  },
  head: {
    title: 'Home'
  }
}
</script>
<style>
.hero-body {
  background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/v1573096966/at/36.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}
</style>
