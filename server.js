const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to LeadFlowOptimizer API');
});

// Example route for handling leads
app.post('/leads', (req, res) => {
    const newLead = req.body;
    // Logic for processing new lead
    res.status(201).json({ message: 'Lead received', lead: newLead });
});

// Error handling
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal server error');
});

// Server
app.listen(port, () => {
    console.log(`LeadFlowOptimizer server running on port ${port}`);
});