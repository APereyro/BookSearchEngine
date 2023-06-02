import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user {
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
`;


export const QUERY_BOOKS = gql`
query books($bookId: String) {
    books(bookId: $bookId) {
        bookId
        authors
        description
        image
        link
        title
    }
}
`;              