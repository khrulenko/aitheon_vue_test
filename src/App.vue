<template>
  <div id="app">
    <h1 class="title">posts</h1>
    <hr>
    <PostList
      v-bind:posts="posts"
    />
  </div>
</template>

<script>
  import PostList from '@/components/PostList';

  export default {
    name: 'app',

    data() {
      return {
        posts: [],
      };
    },

    components: {
      PostList,
    },

    mounted() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
          .then(posts => { this.posts = posts })
    },

    methods: {
      logSomething() {
        console.log('myWeirdTEXT');
      }
    }
  }
</script>

<style>
  .title {
    text-align: center;
    text-transform: uppercase;
  }
</style>
