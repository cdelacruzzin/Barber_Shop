import express from 'express';
// Import middleware to enable Cross-Origin Resource Sharing (CORS)
import cors from 'cors';
import gql from "graphql-tag";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
// import resolvers from "./schemas/resolvers";
import { readFileSync } from "fs";
import db from './config/connection.js';

// Use the PORT from environment variables if available, otherwise default to 5050
const PORT = process.env.PORT || 5050;
const app = express();


const typeDefs = gql(
    readFileSync("./schemas//typeDefs.graphql", {
        encoding: "utf-8",
    })
);
const server = new ApolloServer({
    typeDefs,
});
// 2. Start the server
await server.start();  // ✅ REQUIRED before using expressMiddleware

// 3. Apply middleware
app.use(
    '/graphql',
    cors(),
    express.urlencoded({ extended: false }),
    express.json(),          // or express.json() in some setups
    expressMiddleware(server)      // ✅ Connect Apollo to Express
);

app.on('error', (err) => {
    console.error('❗ Express error:', err);
});

// 4. Start the Express server
// ✅ Wait for MongoDB connection before starting Express server


app.listen(PORT, () => {
    try {
        app.listen(PORT, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
        });
    } catch (err) {
        console.error('❌ Error starting Express server:', err);
    }
});
