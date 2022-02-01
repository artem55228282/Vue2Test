<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="Введите URL картинки " v-model="url" />
    <input type="text" placeholder="Введите модель устройства " v-model="model"/>
    <input type="text" placeholder="Введите компанию производителя" v-model="brand"/>
    <input type="text" placeholder="Введите стоимость " v-model="price" />
    <div class="select">
       <v-select
        :options="categories"
        @select="sortByCategories"
        :selected="selected"
      />
    </div>

  
   
    <button class="btn">Добавить в список</button>
  </form>
</template>

<script>
import { mapMutations,} from 'vuex'
import vSelect from "../components/Select.vue";
export default {
  data() {
    return {
      url: "",
      model: "",
      brand: "",
      price: "",
      catego: "",
      categories: [
        { name: "Все ", value: "All" },
        { name: "телефоны", value: "telephone" },
        { name: "планшеты", value: "planshet" },
      ],
      selected: "Выберите категорию",
      areOptionsVisible: false,
    };
    
  },
 methods: {
   ...mapMutations(['createCards']),
   submit(){
     this.createCards({
       url: this.url,
       model: this.model,
       brand: this.brand,
       price: this.price,
       category: this.catego,
       id: Date.now()
     })
     this.url = this.model = this.brand = this.price = this.catego = ""
     this.selected = "Все"

   },
    sortByCategories(category) {
      
      
      this.selected = category.name
      this.catego = category.value
      console.log(category.value);
      
    },
  },
// mounted(){
  
// document.addEventListener('click', this.hideSelect.bind(this), true)
// },
beforeDestroy(){
document.removeEventListener('click', this.hideSelect)
},
  components: {
    // eslint-disable-next-line vue/no-unused-components
    vSelect,
  },
};
</script>

<style scoped>
form {
    width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  width: 100%;
  height: 30px;
  margin: 10px 0;
  border: 1px solid #ccc;
}
.select{

    position: relative;
    width: 100%;
    justify-content: start;
    
}
.options{
    width: 177px;
background: #fff;
border: 1px solid teal;
    position: absolute;
    top: 0;

}
.options p {
    border-bottom: 1px solid teal;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    width: 100%;
    margin: 0;
    padding: 10px 0;
}
.title{  
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    text-align-last: left;
    border: 1px solid teal;

}
.btn{
    border: 1px solid teal;
    color: teal;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px 10px;

}
.select{
  margin-top: 10px;
  margin-bottom: 40px;
}

</style>
