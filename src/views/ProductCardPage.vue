/* eslint-disable vue/no-unused-components */
<template>
  <div class="products">
    <div class="container">
      <v-select
        :options="categories"
        @select="sortByCategories"
        :selected="selected"
      />
      <p></p>
      <div class="flex">
        <product
          class="card"
          v-for="product in filterProducts"
          :key="product.id"
          :product="product"
        >
        </product>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Product from "../components/ProductCards.vue";
import vSelect from "../components/Select.vue";
export default {
  name: "productCard",
  data() {
    return {
      categories: [
        { name: "Все ", value: "" },
        { name: "телефоны", value: "telephone" },
        { name: "планшеты", value: "planshet" },
      ],
      selected: "All",
      sortedProducts: [],
      products: [],
    };
  },
  computed: {
    ...mapGetters(["allCards"]),
    // eslint-disable-next-line vue/return-in-computed-property
    filterProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.products;
      }
    },
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
    sortByCategories(category) {
      this.products = this.allCards;
      this.sortedProducts = [];
      let vm = this;
      this.products.map(function (item) {
        // eslint-disable-next-line no-empty
        if (item.category === category.name) {
          vm.sortedProducts.push(item);
        }
      });
      this.selected = category.name;
    },
  },
  mounted() {
    this.products = this.allCards;
  },

  components: {
    // eslint-disable-next-line vue/no-unused-components
    Product,
    // eslint-disable-next-line vue/no-unused-components
    vSelect,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
