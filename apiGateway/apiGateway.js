const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');


const routes = {
    '/customers': 'http://localhost:5001',
    '/orders': 'http://localhost:5002',
    
};


const app = express();
for(const route in routes){
    const target = routes[route];
    app.use(route, createProxyMiddleware({target}));
}


const PORT = 5003;
app.listen(PORT, () => {
    console.log(`Api-gateway server listening on port ${PORT}`);
}
);

