import { db } from "../data/db.js";

export const Query = {
    hello: (parent, args, context, info) => {
        console.log('parent : ', parent);
        console.log('context : ', context);
        console.log('info : ', info);
        console.log('args : ', args);
        return `Hello ${args.name || 'World'}`;
    },
    infos: () => {
        return {
            name: 'Sellaouti',
            firstname: 'Aymen'
        }
    },
    getAllStudents: () => {
        return db.students;
    },
    getStudent: (_, {id}) => {
        return db.students.find(
            (student) => student.id == id
        );
    },
    getTodos: () => {
        return db.todos;
      },
    getTodoById: (parent, { id }, context, info) => {
        const todo = db.todos.find((todo) => todo.id === id);
        if (!todo) {
          throw new Error(`Le todo d'id ${id} n'existe pas`);
        }
        return todo;
      },
    getUsers: (parent, args, context, info) => {
        return db.users;
      },
    getUserById: (parent, { id }, context, info) => {
        const user = db.users.find((user) => user.id === id);
        if (!user) {
          throw new Error(`Le user d'id ${id} n'existe pas`);
        }
        return user;
      },
    
}
