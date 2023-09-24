import Bun from 'bun';

const server = Bun.serve({
    port: 3000,
    fetch(request) {
        return new Response(JSON.stringify({ "message": "Welcome to Bun" }))
    }
})

console.log(`Listening on localhost: ${server.port}`);
