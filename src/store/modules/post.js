export default{
    state: {
        posts: [],


    },
    mutations: {
        updatePosts(state, posts){
            state.posts = posts
        },
        createPosts(state, newPost){
            state.posts.unshift(newPost)
        },
    },
    actions: {
     async   fetchPosts(ctx){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        const posts = await res.json()
        ctx.commit('updatePosts', posts)
        
        }
    },
    getters:{
        validPosts(state){
           return state.posts.filter(p => {
               return p.title && p.body
           })
        },
        allPosts(state){
            return state.posts
        },
        postsCount(state, getters){
            return getters.validPosts.length
        }
    },
}