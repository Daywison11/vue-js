const app = new Vue({
    el:'#app',
    data:{
        todos:[
            {text:'aprendendo react', done:false, concluido:'concluido!'},
            {text:'aprendendo vue', done:false, concluido:'concluido!'},
            {text:'aprendendo python', done:false, concluido:'concluido!'}
        ],
        teste:'',

        alerta:{msg:'nao foi possivel adcionar a tarefa', done:false}
    },

    methods:{
        toggle(todo){
            todo.done = !todo.done;
        },
        adi(teste){
            if(teste){
                this.todos.push({text:teste, done:false , concluido:'concluido'})
                this.teste = "";
                this.alerta.done = false
            }
            else{
                this.alerta.done = true
            }
        }
    
    }
})