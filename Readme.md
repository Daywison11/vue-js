Toda aplicação vue é iniciada com a criação de uma nova instância Vue com a função
Vue:
    var vs = new Vue({
        //opções
    })

o design do Vue foi parcialmente inspirado no padrão MVVM 

Quando você cria uma <strong>instância Vue</strong>, é necessário passar um objeto de opções. A maior parte deste guia descreve como você pode utilizar estas opções para criar os comportamentos desejados. Para referência, você também pode navegar pela lista completa de opções na documentação da API.

Uma aplicação Vue consiste em uma instância Vue raiz criada com <strong>new Vue</strong>

Por exemplo, um aplicativo de tarefas a realizar (do tipo todo list) poderia ter uma árvore de componentes como esta:

    Instância Raiz
    └─ TodoList
    ├─ TodoItem
    │  ├─ TodoButtonDelete
    │  └─ TodoButtonEdit
    └─ TodoListFooter
        ├─ TodosButtonClear
        └─ TodoListStatistics

<h1>Dados e Métodos</h1>
    Quando uma instância Vue é criada, ela adiciona todas as propriedades encontradas no objeto data ao sistema de reatividade do Vue. Quando os valores de qualquer destas propriedades muda, a camada visual “reage”, atualizando-se para condizer com os novos valores.

<h1>Ciclo de Vida da Instância</h1>
    ue passa por uma série de etapas em sua inicialização - por exemplo, é necessário configurar a observação de dados, compilar o template, montar a instância no DOM, atualizar o DOM quando os dados forem alterados. Ao longo do caminho, ocorrerá a invocação de alguns gatilhos de ciclo de vida, oferecendo a oportunidade de executar lógicas personalizadas em etapas específicas.
    Por exemplo, o gatilho <strong>created</strong> pode ser utilizado para executar código logo após a instância ser criada
 
    <strong>OBS</strong>:lize arrow functions em propriedades de opções ou callback, como em created: () => console.log(this.a) ou vm.$watch('a', newValue => this.myMethod()). Como as arrow functions não tem um this,this será tratado como qualquer outra variável e lexicamente pesquisada através de escopos parentais até ser encontrada, frequentemente resultando em erros como Uncaught TypeError: Cannot read property of undefined ou Uncaught TypeError: this.myMethod is not a function.

<h1>atributos</h1>
    chaves duplas nao podem ser usadas em atributos html, para isso tilize a diretica v-blind
    ex: <div v-bind:id="dynamicId"></div>


<h1>Diretivas</h1>
    Diretivas são atributos especiais com o prefixo <strong>v-</strong>
    Espera-se que os valores atribuídos às diretivas sejam uma simples expressão Javascript (com a excessão do <strong>v-for</strong>
    O trabalho de uma diretiva é aplicar reativamente efeitos colaterais ao DOM
        <p v-if="seen">Agora você me viu</p>
        Aqui, a diretiva v-if irá remover/inserir o elemento <p> baseado na veracidade do valor da expressão seen.

<h1>Parâmetros</h1>
    Algumas diretivas podem aceitar um “parâmetro”, denotado pelo símbolo de dois pontos após a diretiva. Por exemplo, a diretiva <strong>v-bind</strong> é utilizada para atualizar um atributo HTML reativamente:
        <a v-bind:href="url"> ... </a>
        Aqui href é o parâmetro, que informará à diretiva v-bind para interligar o atributo href do elemento ao valor da expressão url de forma reativa.

    Outro simples exemplo é a diretiva <strong>v-on</strong>, que observa eventos do DOM:
        <a v-on:click="doSomething"> ... </a>
        Aqui o valor é o nome do evento DOM que ela está escutando. Falaremos sobre gerenciamento de eventos com mais detalhes em breve.

    <h1>Argumentos Dinâmicos</h1>
    A partir da versão 2.6.0, também é possível usar uma expressão JavaScript no argumento de uma diretiva envolvendo-a com colchetes:
        <a v-bind:[attributeName]="url"> ... </a>

<h1>Modificadores</h1>
    Modificadores são sufixos especiais denotados por um ponto, que indicam que aquela diretiva deve ser vinculada de alguma maneira especial. Por exemplo, o modificador .prevent indica que o v-on chamará a função event.preventDefault() quando o evento for disparado:
        <form v-on:submit.prevent="onSubmit"> ... </form>