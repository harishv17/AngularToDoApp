angular.module("toDoApp", []).controller("ToDoCtrl", ToDoCtrl);

function ToDoCtrl($scope){
    this.editMode = false;
    this.todos = [
        "Learn Angular 1",
        "Try excercises"
    ];
    this.addNewTodo = function(){
        this.todos.push(this.newTodo);
        this.newTodo = "";
    }
    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
    }
    this.deleteTodo = function(index){
        this.todos.splice(index, 1);
    }
}