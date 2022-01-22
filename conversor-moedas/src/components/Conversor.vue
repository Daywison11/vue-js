<template>
    <div class="conversor">
        <h2>{{moedaA}} para {{moedaB}}</h2>
        <input type="number" v-bind:placeholder="moedaA_value" v-model="moedaA_value" >
        <input type="button" value="converter" v-on:click="converter" >
        <h2>{{moedaB_value}}</h2>
    </div>

</template>


<script>
export default {
    name:"conversor",
    props:["moedaA","moedaB"],
    data(){
        return{
            moedaA_value : 0,
            moedaB_value : '0'
        }
    },
    methods:{
        converter(){
            let de_para = this.moedaA +'-' + this.moedaB
            let depara = this.moedaA+this.moedaB
            let url = "https://economia.awesomeapi.com.br/last/"+ de_para
            console.log(url)

            fetch(url)
                .then(res =>{
                    return res.json();
                })
                .then(json=>{
                    let cotacao = json[depara].high;
                    console.log(this.moedaA_value)
                    this.moedaB_value = (cotacao *  parseFloat(this.moedaA_value)).toFixed(3)
                    console.log(this.moedaB_value)
                })


        }

    }

}
</script>

<style scoped>
    .conversor{
        margin: 20px;
        padding: 30px;
        width: 300px;
        box-shadow: 1px 1px 5px black;
    }
</style>