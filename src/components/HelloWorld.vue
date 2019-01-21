<template>
  <div class="hello">
    <h1>Users Data</h1>
    <ul v-if="users">
      <li v-for="user of users" :key="user.id">
        <div class="user-text">{{user.name}} <br />{{user.email}} <br/>{{user.company.name}}</div>
        <div class="edit"><button class="edit__button" v-on:click="edit(user)"><strong><router-link to="/send">Edit &rsaquo;</router-link></strong></button></div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    if (this.$store.getters.users.length === 0) {
      this.$axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.$store.commit('setUsers', response.data)
        return this.users =  this.$store.getters.users
      })
    } else {
      return this.users =  this.$store.getters.users
    }
    
  },
  methods: {
    edit: function(user) {
      this.$store.commit('updateUser', user)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 600px;
  height: 80px;
  border: 1px  solid black;
  border-radius: 5px;
  padding-left: 10px;
  margin: 5px 10px;
}
.user-text {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding-right: 20px;
}
.edit {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
}
.edit__button {
  border-radius: 3px;
  height: 40px;
  width: 100px;
  background: blue;
  color: white;
  font-size: 20px;
}
a {
  color: #42b983;
}
</style>
