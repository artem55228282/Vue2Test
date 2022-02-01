<template>
  <div class="posts">
    <PostForm />
    <hr />
    <h1>{{ postsCount }}</h1>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostForm from "../components/PostForm.vue";
export default {
  name: "postpage",
  computed: mapGetters(["validPosts", "postsCount"]),
  methods: mapActions(["fetchPosts"]),
  components: { PostForm },
  async mounted() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss" scoped>
.posts {
  margin: 60px auto;
  width: 500px;
}
.post {
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  min-height: 20px;
}
</style>
