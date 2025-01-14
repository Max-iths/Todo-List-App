const app = Vue.createApp({
    data() {
        return { tasks: ["Take out trash", "Walk dog", "Laundry"], dones: [], newTodo: '', isFinished: false}
    },
    methods: {
        addTodo() {
            if(this.newTodo.trim().length > 0) {
                this.tasks.push(this.newTodo.trim())
                this.newTodo=''
            }
        },
        deleteTodo(index) {
            this.tasks.splice(index, 1)
        },
        finished() {
            this.dones.push(this.task)
        },
    }
})
app.mount('#app')
