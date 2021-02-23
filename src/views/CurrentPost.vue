<template>

  <div>
    <div v-if="error">
      Sorry, there is no such post. Try another id.
    </div>

    <div
      v-else
      class="post-details"
    >

      <router-link
        to="/posts"
      >
        BACK
      </router-link>
      <p>@user {{ postToShow.userId }} wrote:</p>
      <p>{{ postToShow.title }}</p>
      <p>{{ postToShow.body }}</p>

    </div>
  </div>
</template>

<script>
  export default {
    props: ['id'],

    data() {
      return {
        postToShow: {},
        error: false,
      };
    },

    mounted() {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
          if (!response.ok) {
            this.error = true;
            return;
          }

          return response.json();
        })
          .then(post => {this.postToShow = post})
    },
  };

</script>

<style>
  .post-details {
    margin: 30px 10px;

    border: 1px solid black;
  }

</style>
