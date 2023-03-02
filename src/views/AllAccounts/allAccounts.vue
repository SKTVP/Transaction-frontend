<template>
  <div>
    <router-link to="/">Menu</router-link>
    <h3>Account List</h3>
    <ul class="accountList">
      <li v-for="account in accounts" :key="account.id">
        <p>Account Id: "{{ account.id }}"</p> 
        <p>Balance Ammount: "{{ account.balance }}"</p>
        <p>Currency: "{{ account.currency }}"</p> 
        <p>Created On: "{{ account.createdOn }}"</p>
        <p>Modified On: "{{ account.modifiedOn }}"</p>
      </li>
    </ul>
  </div>
</template>
<style>
    .accountList {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .accountList li {
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ccc;
    }

    .accountList li:hover {
      background-color: #f9f9f9;
    }
  </style>


<script>
    const axios =require("axios");
    
    export default{

            data() {
    return {
      accounts: []
    }
    },

    mounted() {
    this.showAccounts();
    },
    
        methods: {
            
        async showAccounts(){
            try {
        const response = await axios.get("http://localhost:8087/logariasmoi/Logariasmoi");
        this.accounts = response.data;
      } catch (error) {
        console.log(error);
        } 
    
        }
}
}
              
                
        
        
    
    </script>
    