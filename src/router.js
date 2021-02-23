import Vue from 'vue';
import router from 'vue-router';

import PostList from '@/views/PostList';
import CurrentPost from '@/views/CurrentPost';

Vue.use(router);

export default new router({
  mode: 'history',
  base: '/aitheon_vue_test/',
  routes: [
    {
      path: '/posts',
      component: PostList,
    },
    {
      path: '/posts/:id',
      name: 'CurrentPost',
      component: CurrentPost,
      props: true,
    },
    {
      path: '/',
      redirect: '/posts',
    }
  ],
});
