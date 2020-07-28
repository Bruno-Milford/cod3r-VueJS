import barrmento from '@/barramento';
<!--COMPONENTE FILHO-->
<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barrmento from '@/barramento'
export default {
    props: {
        nome: {
            type: String,
            // requeired: true,
            default: 'Anônimo'
            // deafult: function() {
            //     return Array(10).fill(0).join(',')
            // }
        },
        reiniciarFn: function() {

        }, 
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        }, 
        reiniciarNome() {
            this.nome = 'Bruno'
            this.$emit('nomeMudou', this.nome)
        }
    }, 
    created() {
        barrmento.qunadoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
