const app = Vue.createApp({});

//root component
app.component('root-component',{
    data(){
        return{
            title:'VueComponent!',
            subtitle:'How to use Vue component without node.js',
            buttonText:'doPush'
        }
    },
    methods:{
        doPush(){
            console.log('root do push')
        }
    },
    template:`
        <div>
            <h1>{{title}}</h1>
            <sub-component :subtitle='subtitle' :buttonText="buttonText" @doPush="doPush"></sub-component>
        </div>
    `
})

//sub-componemt
app.component('sub-component',{
    props:['subtitle','buttonText'],
    methods:{
        doPush(){
            console.log('sub doPush')
            this.$emit('doPush');
        }
    },
    template:`
        <p>{{subtitle}}</p>
        <button-component @doPush="doPush" :buttonText="buttonText"></button-component>
    `
})

//button-component
app.component('button-component',{
    props:['subtitle','buttonText'],
    data(){
        return{

        }
    },
    methods:{
        doPush(){
            console.log("do push")
            this.$emit('doPush');
        }
    },
    template:
    `<button @click="doPush">{{buttonText}}</button>`
})

//mount
app.mount("#app")