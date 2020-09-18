let maxId = 100;

export function createTodosStore() {
  return {
    todos: [
      {
        id: maxId++,
        label: 'Drink Coffee',
        important: false,
        done: false
      },
      {
        id: maxId++,
        label: 'Make Awesome App',
        important: false,
        done: false
      },
      {
        id: maxId++,
        label: 'Have a lunch',
        important: false,
        done: false
      }
    ],
    term: "",
    filter: "all",
    setTerm(value) {
      this.term = value;
    },
    setFilter(value) {
      this.filter = value;
    },
    createTodo(label) {
      this.todos.push({
        id: maxId++,
        label,
        important: false,
        done: false
      });
    },
    deleteTodo(id) {
      const idx = this.todos.findIndex((el) => el.id === id);
      this.todos = [...this.todos.slice(0, idx), ...this.todos.slice(idx + 1)];
    },
    onToggleProp(id, propName) {
      const idx = this.todos.findIndex((el) => el.id === id);
      const oldItem = this.todos[idx];
      const newItem = {
        ...oldItem,
        [propName]: !oldItem[propName],
      };

      this.todos = [...this.todos.slice(0, idx), newItem, ...this.todos.slice(idx + 1)];
    },
    onFilter(array, filter) {
      switch (filter) {
        case "all":
          return array;
        case "active":
          return array.filter((item) => !item.done);
        case "done":
          return array.filter((item) => item.done);
        default:
          return array;
      }
    },
    onSearch(array, term) {
      if (term.length === 0) return array;

      return array.filter((item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
    },
    get doneCount() {
      return this.todos.filter((todo) => todo.done).length
    },
    get todoCount() {
      return this.todos.length - this.doneCount
    },
    get visibleTodos() {
      return this.onFilter(this.onSearch(this.todos, this.term), this.filter);
    }
  }
};