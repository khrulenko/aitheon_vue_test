<template>
  <div>
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
    props: ['posts'],
    components: {
      Post,
    }
  }
</script>

<style>
  .post-list {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
  }
</style>
