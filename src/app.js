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
        newItem: ""
    },
    methods: {

        
    }
    
});


});