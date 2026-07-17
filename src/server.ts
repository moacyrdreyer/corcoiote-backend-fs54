import express from 'express';

const app = express();

app.use(express.json());

app.get('/customers', (request, response) => {
    const customers = [{
        name: 'Moacyr Dreyer',
        status: true
    }, {
        name: 'Maria Clara',
        status: false
    }, {
        name: 'João Pedro',
        status: true
    }];
    
    response.status(200).json(customers);
});

app.listen(3000);
