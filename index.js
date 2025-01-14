const app = Vue.createApp({
    data() {
        return { tasks: [{text:"Take out trash", done: false}, {text: "Walk dog", done: false}, {text:"Laundry", done: false}], newTodo: '', isFinished: false}
    },
    computed: {
        dones() {
            return this.tasks.filter(task => task.done).length
        },
        notDone() {
            return this.tasks.filter(task => !task.done).length
        }
    },
    methods: {
        addTodo() {
            if(this.newTodo.trim().length > 0) {
                this.tasks.push({text: this.newTodo.trim(), done: false})
                this.newTodo=''
            }
        },
        deleteTodo(index) {
            this.tasks.splice(index, 1)
        },
        updateDones(task) {
            if(!this.dones.includes(task)) {
                this.dones.push(task)
            } else {
                this.dones = this.dones.filter(done => done.id !== task.id )
            }

        },
    }
})
app.mount('#app')
