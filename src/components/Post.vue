<template>

    <li class="post">

      <router-link
        class="router-link"
        :to="{
          name: 'CurrentPost',
          params: {
            id: post.id,
            userId: post.userId,
          },
        }"
      >

        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-body">{{ post.body }}</p>
        <p>@user: {{ user.name }}</p>

      </router-link>

    </li>

</template>

<script>
  export default {
    props: ['post'],

    data() {
      return {
        user: {},
      };
    },

    created() {
      fetch(`https://jsonplaceholder.typicode.com/users/${this.post.userId}`)
        .then(response => response.json())
          .then(person => {this.user = person})
    },
  }
</script>

<style>
  .post {
    padding: 10px;
    margin: 20px;

    max-width: 400px;

    border-radius: 10px;
    background: linear-gradient(90deg, #d80e3067, #35c2c2a2);

    list-style: none;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-decoration: none;
    color: black;
  }
</style>
