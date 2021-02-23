<template>
  <li class="list-item">
    <h2 class="post-title">{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </li>
</template>

<script>
  export default {
    props: ['post'],
}
</script>

<style>
  .list-item {
    margin: 20px;
    padding: 10px;

    max-width: 500px;

    list-style: none;
    border-radius: 10px;
    background: linear-gradient(90deg, #d80e3067, #35c2c2a2);
  }

  .post-title {
    text-align: center;
  }
</style>
