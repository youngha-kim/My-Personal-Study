class Todo {
  id : string;
  text : string

  constructor(todoRext : string){
    this.text= todoRext;
    this.id = new Date().toISOString();
  }
}

export default Todo;