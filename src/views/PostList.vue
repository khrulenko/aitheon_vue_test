<template>
  <div>
    <h1 class="title">posts</h1>
    <hr>

    <ul class="post-list">
      <Post
        v-for="post of posts"
        v-bind:post="post"
        v-bind:key="post.id"
      />
    </ul>

  </div>
</template>

<script>
  import Post from '@/components/Post';

  export default {
    data() {
      return {
        posts: [],
      };
    },

    components: {
      Post,
    },

    mounted() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
          .then(posts => { this.posts = posts })
    },
  }
</script>

<style>
  .title {
    text-align: center;
    text-transform: uppercase;
  }

  .post-list {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
  }
</style>
