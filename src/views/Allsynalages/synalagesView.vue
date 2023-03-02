
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <router-link to="/">Menu</router-link>
      <h3>Transaction List</h3>
      <ul class="transactionList">
        <li v-for="Synallagi in Synallages" :key="Synallagi.id">
          <p>Transaction ID: "{{ Synallagi.id }}"</p>
          <p>Source ID: "{{ Synallagi.SourceAccountID }}"</p>
          <p>Target ID: "{{ Synallagi.TargetAccountID }}"</p>
          <p>Amount: "{{ Synallagi.ammount }}"</p>
          <p>Currency: "{{ Synallagi.currency }}"</p>
        </li>
      </ul>
    </div>
  </template>

<style>
.transactionList {
  list-style: none;
  margin: 0;
  padding: 0;
}

.transactionList li {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.transactionList li:hover {
  background-color: #f9f9f9;
}
</style>
    
    
    
    <script>
        const axios =require("axios");
        
        export default{
    
                data() {
        return {
            Synallages: []
        }
        },
    
        mounted() {
        this.showSynalages();
        },
        
            methods: {
                
            async showSynalages(){
                try {
            const response = await axios.get("http://localhost:8087/Synnlages/listaSynalagon");
            this.Synallages = response.data;
          } catch (error) {
            console.log(error);
            } 
        
            }
    }
    }
                  
                    
            
            
        
        </script>
        