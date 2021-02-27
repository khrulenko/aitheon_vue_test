<template>
  <div>

    <h1 class="title">posts</h1>
    <hr>

    <ul class="post-list">
      <Post
        v-for="post of posts"
        v-bind:post="post"
        v-bind:key="post.id"
        v-bind:postsAmount="postsAmount"
      />
    </ul>

    <div class="buttons-panel">

      <button
        class="button"
        @click="loadLess"
        :disabled='posts.length <= initialLimit || isLoading ? true : false'
      >
        {{ isLoading ? 'loading...' : 'show less' }}
      </button>

      <button
        class="button"
        @click="loadMore"
        :disabled='posts.length >= postsAmount || isLoading ? true : false'
      >
        {{ isLoading ? 'loading...' : 'show more' }}
      </button>

    </div>

  </div>
</template>

<script>
  import Post from '@/components/Post';

  export default {
    data() {
      return {
        posts: [],
        initialLimit: 5,
        amountToShow: 5,
        postsAmount: 0,
        isLoading: false,
      };
    },

    components: {
      Post,
    },

    created() {
      this.loadPosts(this.amountToShow);
    },

    methods: {
      loadPosts(amountToShow) {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then(response => response.json())
            .then(posts => {
              this.postsAmount = posts.length;
              this.posts = posts.slice(0, amountToShow);
              this.isLoading = false;
            })
      },

      loadMore() {
        this.isLoading = true;
        this.amountToShow += 5;
        this.loadPosts(this.amountToShow);
      },

      loadLess() {
        this.isLoading = true;
        this.amountToShow -= 5;
        this.loadPosts(this.amountToShow);
      },
    },
  }
</script>

<style>
  .title {
    text-align: center;
    text-transform: uppercase;
  }

  .buttons-panel {
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin-bottom: 20px;
  }

  .button {
    height: 50px;

    border-radius: 10px;
    border: none;

    cursor: pointer;
  }

  .button:hover {
    font-weight: bold;
    background: linear-gradient(270deg, #d80e3067, #35c2c2a2);
  }

  .button:disabled {
    cursor: not-allowed;
  }

  .post-list {
    display: flex;
    flex-wrap: wrap;

    padding: 10px;

    justify-content: center;
  }

  @media screen and (max-width: 499px) {
    .buttons-panel {
      position: fixed;
      right: 15px;
      bottom: 15px;

      margin-bottom: 0;

      width: fit-content;
    }

    .button {
      width: 80px;
      height: 80px;

      border-radius: 50%;
      background-color: #ce7886d7;

      color: white;
    }

    .button:hover {
      font-weight: normal;
      background: #ce7886d7;
    }

    .button:disabled {
      background: #636263d7;
      color: rgb(197, 197, 197);
    }

    .post-list {
      padding-bottom: 160px;
    }
  }
</style>
