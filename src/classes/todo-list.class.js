import { Todo } from ".";

export class TodoList{

    constructor (){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo( id ){

        this.todos = this.todos.filter( todo  => todo.id != id );
        this.guardarLocalStorage();

    }

    marcarCompletado( id ){

        for (const todo of this.todos) {
            if( todo.id == id ){
                todo.marcarCompletado = !todo.marcarCompletado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados(){


        this.todos = this.todos.filter( todo  => !todo.marcarCompletado );
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos) );
    }
    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo')) 
                   ?  this.todos =  JSON.parse(localStorage.getItem('todo')) 
                   :  this.todos = []; ;

        this.todos = this.todos.map( obj => Todo.fromJson(obj) );

    }

}