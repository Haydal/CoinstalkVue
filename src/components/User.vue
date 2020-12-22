<template>
  <div v-if="this.customer">
    <h4>Customer</h4>
    <div>
      <label>Name: </label> {{this.customer.name}}
    </div>
    <div>
      <label>Age: </label> {{this.customer.age}}
    </div>
    <div>
      <label>Active: </label> {{this.customer.active}}
    </div>
  
    <span v-if="this.user.active"
      v-on:click="updateActive(false)"
      class="button is-small btn-primary">Inactive</span>
    <span v-else
      v-on:click="updateActive(true)"
      class="button is-small btn-primary">Active</span>
  
    <span class="button is-small btn-danger" v-on:click="deleteUser()">Delete</span>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a Cuser...</p>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "User",
  props: ["user"],
  methods: {
    /* eslint-disable no-console */
    updateActive(status) {
      var data = {
        id: this.user.id,
        name: this.user.name,
        age: this.user.age,
        active: status
      };
 
      http
        .put("/user/" + this.user.id, data)
        .then(response => {
          this.customer.active = response.data.active;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCustomer() {
      http
        .delete("/user/" + this.user.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>