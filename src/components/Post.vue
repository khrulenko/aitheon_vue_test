<template>

  <router-link
    class="router-link"
    :to="{ name: 'CurrentPost', params: {id: post.id} }"
  >

    <li class="post">
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="post-body">{{ post.body }}</p>
      <p>@user: {{ post.userId }}</p>
    </li>

  </router-link>

</template>

<script>
  export default {
    props: ['post'],
}
</script>

<style>
  .post {
    margin: 20px;
    padding: 10px;

    max-width: 400px;

    border-radius: 10px;
    background: linear-gradient(90deg, #d80e3067, #35c2c2a2);

    list-style: none;
    cursor: pointer;
  }

  .post-title {
    text-align: center;
  }

  .post-body {
    padding: 10px;

    border-top: 1px solid rgb(255, 255, 255);
    border-bottom: 1px solid rgb(255, 255, 255);
  }

  .router-link {
    text-decoration: none;
    color: black;
  }
</style>
