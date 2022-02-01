<template>

  <div class="card">
    <img :src="product.url" class="card__img">
    <p class="card__name">Модель:{{product.model}}</p>
    <p class="card__brand">Компания производитель: {{product.brand}}</p>
    <p class="card__price">Цена: {{product.price}}$</p>
    <button class="card__link"
     @click="$router.push(`/cards/${product.id}`)">
      Перейти к описанию
    </button>
  </div>

  
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>

.card{
  width: 30%;
  height: 500px;
  outline: 1px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin: 15px 15px;
  p{
    text-align: left;
    margin-left: 10px;
    
  }
}
.card__img{
  margin-top: 10px;
  height: 40%;
}
.card__link{
  margin-top: 40px;
  background: green;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
}
</style>