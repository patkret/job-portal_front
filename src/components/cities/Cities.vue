<template>
    <div class="component-container">
        <h1>Cities</h1>
        <router-link to="/cities-add">
            <add-button :text="cont"/>
        </router-link>

        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Zip code</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="city in cities">
                <td>{{city.name}}</td>
                <td>{{city.zip_code}}</td>
                <td>

                    <router-link :to="'/cities/edit/' + city.id">
                        <button class="action-button edit"><i class="fa fa-edit"></i></button>
                    </router-link>
                    <button class="action-button delete" @click="deleteCity(city.id)"><i class="fa fa-trash"></i></button>

                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import addButton from '../addButton'

  export default {
    name: 'cities',
    components: {
      addButton,
    },
    data: () => ({
      cities: [],
      cont: 'add',
    }),
    methods: {
      fetchCities () {
        axios('cities').then(result => {
          this.cities = result.data
        })
      },

      deleteCity (id) {
        axios.delete('cities/' + id).then(() => {
          this.fetchCities()
        })
      },
    },

    created: function () {
      this.fetchCities()
    },
  }
</script>

<style scoped>
    h1 {
        margin-left: 55px;
        justify-self: start;
    }

    th:last-child {
        text-align: right;
    }

    tbody tr td:last-child {
        text-align: right;
    }

    .component-container{
        grid-template-rows: 120px 100px 1fr;
        justify-items: start;
    }
    .component-container table{
        justify-self: center;
    }

</style>