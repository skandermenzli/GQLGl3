export const db = {
    students : [
        {
            id: 1,
            name: 'Fatma Laribi',
            age: 22,
            gender: "FEMALE",
            classroom: 1
        },
        {
            id: 2,
            name: 'Ahmed Mahfoudhi',
            age: 22,
            gender: "MALE",
            classroom: 2
        },
        {
            id: 3,
            name: 'Nadine Boukadida',
            age: 22,
            gender: "FEMALE",
            classroom: 3
        },
        {
            id: 4,
            name: 'Mohamed Aziz Khayati',
            age: 22,
            gender: "MALE",
            classroom: 1
        }
    ],
    classroom: [
        {
            id: 1,
            designation: 'GL3'
        },{
            id: 2,
            designation: 'GL2'
        },{
            id: 3,
            designation: 'GL4'
        },
    ],
    todos: [
        {
          id: 1,
          name: "diapo p39",
          content: "deinir un type TODO ",
          status: "DONE",
          userId: 1
        },
        {
          id: 2,
          name: "diapo p57",
          content: "recuperer Todo par son id",
          status: "DONE",
          userId: 1
        },
        {
            id: 3,
            name: "diapo p71",
            content: "créer un user en relation avec Todo",
            status: "DONE",
            userId: 1
          },
      ],
      users: [
        {
          id: 1,
          name: 'skander',
          email: 'skander@gmail.com'
        },
        {
          id: 2,
          name: 'farouk',
          email: 'farouk@gmail.com'
        }
      ]
}
