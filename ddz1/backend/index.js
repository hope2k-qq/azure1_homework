const express = require('express');
const app = express();
const port = 5000;

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' }
    ];

    res.json(users);
});

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
