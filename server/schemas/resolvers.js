const { Book, User } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        user: async (parent, { username }) => {
            const params = username ? { username } : {};
            return User.find(params);
        },
        books: async (parent, { bookId }) => {
            const params = bookId ? { bookId } : {};
            return Book.find(params);
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        }
    }
};
