<template>
  <div>
      <h3>form</h3>
        <vue-form-generator
          :schema="schema"
          :model="model"
          :options="formOptions"
        ></vue-form-generator>
        <h3>valueForm</h3>
        {{model}}
  </div>
</template>

<script>
    
export default {
  data () {
    return {
      model: {
        name: '',
        email: '',
        username:'',
        password:'',
        favoriteLanguage:'',
        acceptTerms: ''
      },
      schema: {

        fields:[
          {
            type: 'input',
            inputType: 'text',
            label: 'name',
            model: 'name',
            required: true,
            validator: 'string'
          },
            {
              type: 'input',
              inputType: 'email',
              label: 'Email',
              model: 'email',
              required: true,
              placeholder: 'email@test.com',
               validator: 'email'
            },
            {
            type: 'input',
            inputType: 'text',
            label: 'Username',
            model: 'username',
            required: true,
             validator: 'string'
          },
            {
              type: 'input',
            inputType: 'password',
            label: 'Password',
            model: 'password',
            required: true,
            min: 6,
            hint: `Min of 6 characters`,
            validator: 'string'
          },
          {
            type: 'select',
            label: 'Favorite Language',
            model: 'favoriteLanguage',
            values: ['Java','CSS','HTML','VueJS']
          },
            {
            type: 'checkbox',
            default: false,
            label: 'AcceptTerms',
            model: 'acceptTerms',
            required: true,
            validator: 'required'
          },
          {
            type: 'submit',
            onSubmit(model){
              console.log(model)
            },
            label: '',
            buttonText: 'Sing Up',
            validateBeforeSubmit: true

          },
        ]
      },
      formOptions:{
        validateAfterLoad: false,
        validateAfterChange: true,
        validateAsync: true,
      }
    }
  }
}


</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.input__style {
  width: 100%;
  border: 1px solid #c0c0c0;
  height: 50px;
  font-size: 25px;
  &:focus {
    outline: 0;
  }
}
.btn {
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  color: black;
  padding: 20px;
  margin: 0 20px;
  &:hover {
    color: black;
  }
}
.danger {
  background: red;
  color: white;
  &:hover {
    color: white;
  }
}
.primary {
  background: green;
  color: white;
}
.list__item {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
</style>
