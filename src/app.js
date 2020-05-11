import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
new Vue({
    el: "#app",
    data: {
        todos: [
            {name: "Shopping", priority: "low"}, 
            {name: "Coding Tutorial", priority: "low"}, 
            {name: "Fill Up Car", priority: "high"}
        ],
        newToDo: ""
    },
    methods: {
        saveNewToDo: function (){
            this.todos.push({
                name: this.newToDo,
                priority: this.picked
            });
            this.newToDo = "";
        }

    }
    
});


});