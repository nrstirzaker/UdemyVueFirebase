new Vue({
    el:'#app',
    data:{
        title: 'Becoming a Vue Ninja',
        name: 'Nigel',
        url: 'http://www.youtube.com',
        classes: ['one','two'],
        wage: 10

    },
    methods: {
        greet(time){
            return `Hello and Good ${time} , ${this.name}`
        },
        changeWage(amount){
            this.wage +=amount
        }
    }
})