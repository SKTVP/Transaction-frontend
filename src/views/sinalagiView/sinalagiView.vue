
<template>
    <router-link to="/">Menu   </router-link>
    
    <div class="container">
        
          <div class="row">
            <div class="text-center">
                <h3>Create transaction</h3>
            </div>
            <input class="form-control form-control-lg" type="text" placeholder="Ammount" v-model="ammount">
          <input class="form-control form-control-lg" type="text" placeholder="Currency" v-model="currency">
          <input class="form-control form-control-lg" type="text" placeholder="TargetAccountID" v-model="TargetAccountID">
          <input class="form-control form-control-lg" type="text" placeholder="SourceAccountID" v-model="SourceAccountID">
        
        </div>
        
           
            <button type="button" class="btn-primary" @click="addSynalagi">Submit</button>
        </div>
   
    
    </template>
    
    <script>
    const axios =require("axios");
    
    export default{
    
        data(){
            return {
                ammount: "",
                currency: "",
                SourceAccountID: "",
                TargetAccountID: ""
               
                
            };
            },
            methods: {
                addSynalagi(){
                    
                    
                    const  newSynalagi = {

                    currency: this.currency,
                    ammount: parseFloat(this.ammount),
                    SourceAccountID: parseInt(this.SourceAccountID),
                    TargetAccountID: parseInt(this.TargetAccountID)
                    
                    
                 };
                 console.log(newSynalagi);
                 const baseURL ="http://localhost:8087";
                
                 axios({
    
                    method: "post",
                    url:`${baseURL}/Synnlages/create`,
                    data: JSON.stringify(newSynalagi),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                 })
                 .then(()=>{})
                 .catch((error)=>{                   
      
                this.$router.push({ name: "error", query: { message: error.message } });
                    
                 })
            }
    
    }}
    
    </script>
    