<template>
    <form @submit.prevent="save()">
        <h1>
            Add City
        </h1>
        <router-link :to="'/cities'">
            <button class="primary-button">
                <i class="fa fa-chevron-left"></i>Back
            </button>
        </router-link>
        <div class="form-container">
            <div class="form-col">
                <div class="form-row">
                    <label for="name">Name</label>
                    <div class="custom-input">
                        <input :class="{'not-valid': errors.has('name')}" v-validate="'required|min: 3'" id="name"
                               name="name" v-model="city.name"/>
                        <span v-show="errors.has('name')" class="validation-info"><i class="fa fa-exclamation"></i> {{ errors.first('name') }}</span>
                    </div>
                </div>
                <div class="form-row">
                    <label for="zip-code">Zip Code</label>
                    <div class="custom-input">
                        <input id="zip-code" name="zip-code" v-model="city.zip_code"/>
                    </div>
                </div>
                <div class="form-row form-button">
                    <add-button :text="'save'"/>
                </div>
            </div>


        </div>
    </form>
</template>

<script>
  import AddButton from '../addButton'

  export default {
    components: {AddButton},
    name: 'city-form',
    data: () => ({
      city: {
        name: '',
        zip_code: '',
      },
      city_id: '',
    }),
    methods: {
      save () {
        this.$validator.validateAll().then(result => {
          if(result){
            if (this.city_id) {
              axios.put('cities/' + this.city_id, {
                city: this.city,
              }).then(() => {
                this.$router.push('/cities')
              })
            }
            else {
              axios.post('cities', {
                city: this.city,
              }).then(() => {
                this.$router.push('/cities')
              })
            }
          }

        }).catch(() => {
          return false
        })
      },
      checkIfEdit () {
        this.city_id = this.$route.params.item
        if (this.city_id) {
          axios('city/' + this.city_id).then(result => {
            console.log(result.data)
            this.city = result.data
          })
        }
      },
    },

    created: function () {

      this.checkIfEdit()
    },
  }
</script>

<style scoped>

    .form-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .form-col {
        display: grid;
        grid-auto-rows: 100px;
    }

    .form-row {
        width: 450px;
        justify-content: center;
        align-items: center;
        display: grid;
        grid-template-columns: 100px 1fr;

    }

    .custom-input input {
        height: 45px;
        width: 98%;
        padding: 0 0 0 15px;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid black;
    }

    input:focus {
        background-color: transparent;
        outline: none;
        border-bottom: 1px solid yellowgreen;
    }

    .form-button {
        display: flex;
        flex-direction: row;
        justify-items: center;
    }

    .custom-button {
        margin: 0;
    }

    label {
        font-size: 120%;
    }
</style>