

<template>
    <router-link to="/">Menu   </router-link>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3>Create an Account</h3>
        </div>

      </div>
      <div class="row">
        
          
          <input class="form-control form-control-lg" type="text" placeholder="Balance Ammount" v-model="balance">
          <input class="form-control form-control-lg" type="text" placeholder="Currency" v-model="currency">
                   
        
    
    </div>
          <button type="button" class="btn btn-primary" @click="addAccount">Submit</button>
      
    </div>
  </template> 
  
    

    
    <script>
    const axios =require("axios");
    
    export default{
    
        data(){
            return {
                currency: "",
                balance: ""
                
            };
            },
            methods: {
                 addAccount(){
                    console.log(this.balance);
                const  newAccount = {
                    currency: this.currency,
                    balance: this.balance
                    
                 };
    
                 const baseURL ="http://localhost:8087";
                 axios({
    
                    method: "post",
                    url:`${baseURL}/logariasmoi/create`,
                    data: JSON.stringify(newAccount),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                 }).then(()=>{}).catch((error)=>{
                    console.log(error);
                 })
            }
    
    }}
    
    </script>
    