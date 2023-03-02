<template>
  <div class="navBar">
   
    <div class="link-item">  <router-link to="/addSinalagi">Create Transaction   </router-link></div>

    <div class="link-item"> <router-link to="/addAccount">Create Account  </router-link></div>
     
    
    <div class="link-item"><router-link to="/accounts">    Account List</router-link></div>
      
    

    
    <div class="link-item"> <router-link to="/synalagesView">    Transaction List</router-link></div>
 

    
    
  </div>
</template>


<style>
.link-item {
  margin-bottom: 50px;
}
</style>



<script>
export default {
  name: 'navBar',
}
</script>