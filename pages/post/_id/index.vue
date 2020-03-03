<template>
  <div class="main-content">
    <div class="container">
      <div class="col-12 col-md-10 col-lg-7 mx-auto mt-5 bg-light">
        <h2 class="title py-3">{{ post.title }}</h2>
        <img :src="post.featured" alt="" class="img-fluid py-5" />

        <div class="post-content" v-html="post.content"></div>
        <br />
        <h4 class="small">
          <strong>{{ post.published }}</strong>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
// import posts saved JSON data
import posts from '~/posts.json'

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  asyncData({ params }, callback) {
    let post = posts.find(post => post.id === parseInt(params.id))
    if (post) {
      callback(null, { post })
    } else {
      callback({ statusCode: 404, message: 'Post not found' })
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.summary
        }
      ]
    }
  }
}
</script>
<style>
.post-content p {
  margin: 2rem;
}
</style>
