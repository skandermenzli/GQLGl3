import { GraphQLServer,PubSub } from 'graphql-yoga'
import { Query } from './resolvers/Query.js'
import { Student } from './resolvers/Student.js'
import { Todo } from './resolvers/Todo.js';
import { User } from './resolvers/User.js';
import { db } from './data/db.js';
import { Mutation } from './resolvers/Mutation.js';
import {Subscription} from './resolvers/Subscription.js';
// ... or using "require()"
// const { GraphQLServer } = require('graphql-yoga')
const typeDefs = "schema/schema.graphql";
const pubsub = new PubSub();
const resolvers = {
    Query,
    Mutation,
    Student,
    Todo,
    User,
    Subscription,
};
const server = new GraphQLServer({ typeDefs,
     resolvers,
     context:{
         db,
         pubsub
     }
    })
server.start(() => console.log('Server is running on localhost:4000'))
