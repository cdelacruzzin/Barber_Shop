import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';     //utility from apollo client which lets modify the request context, when sending a request/ recieving a response.
//import necessary react and apollo packages\

import { StoreProvider } from './utils/globalState';

import Navbar from './components/Navbar';
import Home from './pages/Home';

const httpLink = createHttpLink({
    uri: '/graphql',     // the uri specifies the graphql server's endpoint - in this case, "/graphql". when a "mutation" or "query" occurs, the request will be sent to '/graphql
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})
console.log(1);
function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <StoreProvider>
                <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                    </Routes>
                </StoreProvider>
            </Router>
        </ApolloProvider>
    )
}

export default App;