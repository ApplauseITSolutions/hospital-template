import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic sanity check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'UP',
    message: 'Global Care Hospital backend services are running successfully.',
    timestamp: new Date()
  });
});

// Future routes structure placeholders
app.use('/api/users', (req, res) => res.json({ message: 'User service API placeholder' }));
app.use('/api/patients', (req, res) => res.json({ message: 'Patient service API placeholder' }));
app.use('/api/doctors', (req, res) => res.json({ message: 'Doctor service API placeholder' }));
app.use('/api/departments', (req, res) => res.json({ message: 'Department service API placeholder' }));
app.use('/api/appointments', (req, res) => res.json({ message: 'Appointment service API placeholder' }));
app.use('/api/inquiries', (req, res) => res.json({ message: 'Contact inquiries API placeholder' }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
