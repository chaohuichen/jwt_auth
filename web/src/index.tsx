import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";

import { ApolloClient, InMemoryCache,ApolloProvider, NormalizedCacheObject} from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
    credentials:'include'
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
    , document.getElementById('root'));


