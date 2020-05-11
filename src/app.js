import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
new Vue({
    el: "#app",
    data: {
        todos: [
            {name: "Shopping", priority: "low", status: false}, 
            {name: "Coding Tutorial", priority: "low", status: false}, 
            {name: "Fill Up Car", priority: "high", status: false}
        ],
        newToDo: ""
    },
    methods: {
        saveNewToDo: function (){
            this.todos.push({
                name: this.newToDo,
                priority: this.picked,
                status: false
            });
            this.newToDo = "";
        },

        taskComplete: function(index){
            this.todos[index].status = true;
        }

    }
    
});


});