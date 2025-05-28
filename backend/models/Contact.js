const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000' // React app ka URL
}));
app.use(express.json());

// Rate limiting - spam protection
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 messages per 15 minutes
  message: {
    success: false,
    message: 'Bahut saare messages bhej rahe hain, thoda wait karo!'
  }
});

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Contact route with rate limiting
app.use('/api/contact', limiter);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});