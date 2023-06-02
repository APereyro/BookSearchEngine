import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!, $savedBooks: [Book]) {
    createUser(username: $username, email: $email, password: $password, savedBooks: $savedBooks) {
        token
        user {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }
}
`;



