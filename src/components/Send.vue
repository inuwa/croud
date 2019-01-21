<template>
    <div class="send">
        <div class="input">
            <label class="input__label" for="name" >Name: </label>
            <input class="input__text" v-model="name" placeholder="edit me" >
        </div>
        <div class="input">
            <label class="input__label" for="email" >Email: </label>
            <input  class="input__text" v-model="email" placeholder="edit me" >
        </div>
        <div class="input">
            <label class="input__label" for="company-name" >Company Name: </label>
            <input class="input__text" v-model="company" name="company-name" >
        </div>
        <button v-on:click="edit" class="send__button"><router-link to="/users">Change Value</router-link></button>
    </div>
</template>

<script>
export default {
  name: 'Send',
  data() {
      return {
        name: '',
        email: '',
        company: ''
      }
  },
  mounted() {
    const user = this.$store.getters.user
    if (user != undefined) {
        this.name = user.name
        this.email = user.email
        this.company = user.company.name
    } else {
        alert('Go to users page');
    }

  },
  methods: {
        edit() {
            let user = { ...this.$store.getters.user,
                name: this.name,
                email: this.email,
                company: {
                    ...this.$store.getters.user.company,
                    name: this.company
                }
            }   
            this.$store.commit('updateUsers', user)
            
            this.$axios.post('https://jsonplaceholder.typicode.com/users/',{ 
                headers: {
                    'Content-type': 'application/json'
                },
                body: {
                    'users': this.$store.getters.users
                }
            }).then(response => { }).catch(error => error);
        },
  }
}
</script>
<style scoped>
.send {
    display: block;
    width: 50%;
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.input {
    display: flex;
    align-items: center;
    width: 400px;
    height: 50px;
    color: white;
    font-size: 16px;
    border: solid 1px darkgray;
    border-radius: 2px;
    background-color: blue;
    padding: 20px;
}

.input__text {
    background-color: white;
    height: 30px;
    width: 200px;
    color: black
}

.input__label {
    width: 150px;
    margin-right: 10px;
}

.send__button {
    width: 150px;
    margin: 20px;
    padding: 10px;
    color: white;
    background: blue;
    border: solid 10px rgba(0,0, 255, .8);
    border-radius: 2px;
}
</style>