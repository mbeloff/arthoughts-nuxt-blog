<template>
  <section class="main-content">
    <div class="container">
      <div class="masonry-wrapper">
        <div class="masonry">
          <div class="masonry-item" v-for="post in posts" :key="post.id" v-bind:class="{ special: post.special }">
            <div class="masonry-content">
              <div class="card-img-top" v-if="post.featured">
                <img
                  :src="post.thumb"
                  alt="Dummy Image"
                  class="img-fluid thumbnail"
                />
              </div>
              <h3 class="masonry-title">{{ post.title }}</h3>
              <div class="masonry-description">
                <p class="featured" v-if="post.special"><span class="fas fa-check mr-1"></span>featured post</p>
                <p>{{ post.summary }}</p>
                <br />
              </div>

              <footer class="masonry-footer">
                <p class="small text-left">
                  {{ post.published }}
                </p>
                <nuxt-link
                  v-if="post.content"
                  :to="`/post/${post.id}`"
                  class="card-footer-item"
                >
                  Read More
                </nuxt-link>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <script src="//unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
    </div>
  </section>
</template>

<script>
import posts from '~/posts.json'

export default {
  name: 'posts',
  data() {
    return { posts }
  },
  mounted() {
    if (process.client) {
      function resizeMasonryItem(item) {
        var grid = document.getElementsByClassName('masonry')[0]
        if (grid) {
          var rowGap = parseInt(
              window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
            ),
            rowHeight = parseInt(
              window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
            ),
            gridImagesAsContent = item.querySelector('img.masonry-content')

          var rowSpan = Math.ceil(
            (item.querySelector('.masonry-content').getBoundingClientRect()
              .height +
              rowGap) /
              (rowHeight + rowGap)
          )

          /* Set the spanning as calculated above (S) */
          item.style.gridRowEnd = 'span ' + rowSpan
          if (gridImagesAsContent) {
            item.querySelector('img.masonry-content').style.height =
              item.getBoundingClientRect().height + 'px'
          }
        }
      }

      function resizeAllMasonryItems() {
        var allItems = document.querySelectorAll('.masonry-item')

        if (allItems) {
          for (var i = 0; i > allItems.length; i++) {
            resizeMasonryItem(allItems[i])
          }
        }
      }

      function waitForImages() {
        //var grid = document.getElementById("masonry");
        var allItems = document.querySelectorAll('.masonry-item')
        if (allItems) {
          for (var i = 0; i < allItems.length; i++) {
            imagesLoaded(allItems[i], function(instance) {
              var item = instance.elements[0]
              resizeMasonryItem(item)
              console.log('Waiting for Images')
            })
          }
        }
      }

      /* Resize all the grid items on the load and resize events */
      var masonryEvents = ['load', 'resize']
      masonryEvents.forEach(function(event) {
        window.addEventListener(event, resizeAllMasonryItems)
      })

      /* Do a resize once more when all the images finish loading */
      waitForImages()
    }
  }
}
</script>
<style>
header {
  display: flex;
  flex-direction: column;
}
.masonry-wrapper {
  padding: 1.5em 0;
  /* max-width: 960px; */
  margin-right: auto;
  margin-left: auto;
}
.masonry {
  display: grid;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  grid-gap: 20px;
  grid-auto-rows: 0;
}
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
}
@media only screen and (min-width: 1024px) {
  .masonry {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
}
.masonry-item,
.masonry-content {
  border-radius: 4px;
  overflow: hidden;
}
.masonry-item {
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
  transition: filter 0.25s ease-in-out;
}
.masonry-item:hover {
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
}
.masonry-content {
  overflow: hidden;
}
.masonry-item {
  color: #111111;
  background-color: #f9f9f9;
}
.masonry-title,
.masonry-description {
  margin: 0;
}
.masonry-title {
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem 1rem;
}
.masonry-description {
  padding: .5rem;
  font-size: 0.9rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.masonry-footer {
  font-size: 0.75em;
  opacity: 0.75;
  text-align: center;
  padding: 1rem 1rem;
  margin-bottom: -0.5em;
  transition: opacity 1s ease-in-out;
}
.masonry-footer a {
  color: rgb(0, 81, 255) !important;
}
.masonry-footer:hover,
.masonry-footer:active,
.masonry-footer:focus {
  opacity: 0.75;
}

.thumbnail {
  background-size: cover !important;
  width: 100%;
}

.special {
  border: 1.5px solid rgb(255, 115, 0);
  box-shadow: 0px 3px 6px rgba(255, 192, 133, 0.507);
}

.featured {
  color: orange;
}

.main-content {
  background: rgb(245, 242, 242);
}
</style>
