import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhots:4000/graphql'
});

export default client; 