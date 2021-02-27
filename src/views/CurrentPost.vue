<template>

  <div>

    <div
      v-if="error"
      class="error"
    >
      Sorry, there is no such post. Try another id.
      <router-link
        class=""
        to="/posts"
      >
        <p>Back to posts list</p>
      </router-link>
    </div>

    <div
      v-else
      class="current-post"
    >

      <router-link
        class="back-link"
        to="/posts"
      >
        <p>&#60;</p>
      </router-link>

      <div class="post-details">
        <p>
          @user {{ user.name }} wrote:
        </p>

        <p class="details-title">
          {{ postToShow.title }}
        </p>

        <p>
          {{ postToShow.body }}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: ['id', 'userId'],

    data() {
      return {
        postToShow: {},
        user: {},
        error: false,
      };
    },

    activated() {
      this.loadPost(this.id);
      this.loadUser(this.userId);
    },

    methods: {
      loadPost(postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          .then(response => {
            if (!response.ok) {
              this.error = true;
              return;
            }

            return response.json();
          })
          .then(post => {this.postToShow = post});
      },

      loadUser(userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then(response => response.json())
            .then(person => {this.user = person});
      }
    },
  };
</script>

<style>
  .current-post {
    position: relative;
    display: flex;
    margin: 30px auto;
    padding: 10px;

    max-width: 1000px;

    border-radius: 20px;

    font-size: 18px;
  }

  .back-link {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20%;
    max-width: 100px;
    min-width: 50px;

    text-decoration: none;
    text-align: center;
    color: black;

    background: linear-gradient(270deg, transparent, #d80e3094);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .post-details {
    padding-left: 40px;

    background: linear-gradient(90deg, transparent, #6ccfcf60);

    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .details-title {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  .error {
    margin: 20px auto;

    width: 80%;
    max-width: 500px;
    height: 50px;

    background-color: rgb(230, 216, 216);

    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
</style>
