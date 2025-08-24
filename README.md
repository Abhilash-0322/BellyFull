# BellyFull - Food Sharing Platform

A Node.js web application that connects people who want to donate food with those who need it, helping reduce food waste and fight hunger in local communities.

## Features

- **Food Donation & Request System**: Users can register as either food donors or food recipients
- **Location-based Matching**: Connects people within the same city
- **MongoDB Integration**: Secure data storage with MongoDB
- **Responsive Design**: Works on desktop and mobile devices
- **Input Validation**: Ensures data integrity and security
- **Clean UI/UX**: Easy-to-use interface with modern design

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating engine, HTML5, CSS3
- **Environment Management**: dotenv for configuration

## Installation & Setup

### Prerequisites

1. **Node.js** (v14 or higher)
2. **MongoDB** (local installation or MongoDB Atlas)
3. **Git** (for cloning the repository)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hungerproject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   
   **Option A: Local MongoDB**
   - Install MongoDB on your system
   - Start MongoDB service:
     ```bash
     sudo systemctl start mongod  # Linux
     brew services start mongodb-community  # macOS
     ```
   
   **Option B: MongoDB Atlas (Cloud)**
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a new cluster
   - Get your connection string
   - Update the `MONGODB_URI` in `.env` file

4. **Environment Configuration**
   - The `.env` file is already created with default settings
   - Update MongoDB URI if using MongoDB Atlas:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bellyfull
     ```

5. **Start the application**
   ```bash
   npm start
   # or for development with auto-restart
   npm run dev
   ```

6. **Access the application**
   - Open your browser and go to `http://localhost:8080`

## Project Structure

```
hungerproject/
├── config/
│   └── database.js          # MongoDB connection configuration
├── models/
│   └── User.js             # User schema and model
├── routes/
│   └── index.js            # Application routes
├── views/                  # EJS templates
│   ├── home.ejs           # Homepage
│   ├── form1.ejs          # Registration form
│   ├── database.ejs       # Results/matches page
│   ├── mission.ejs        # Mission page
│   └── vision.ejs         # Vision page
├── public/                 # Static assets
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   └── images/            # Image assets
├── .env                   # Environment variables
├── index.js              # Main application file
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Usage

1. **Visit the Homepage**: Navigate to the main page to learn about BellyFull
2. **Get Started**: Click "Make a Difference" or "Get Started"
3. **Fill the Form**: 
   - Enter your name
   - Choose whether you want to donate or receive food
   - Provide your phone number and city
4. **See Matches**: After submitting, you'll see people in your city with complementary needs
5. **Connect**: Use the provided contact information to connect directly with matched users

## How It Works

1. **Registration**: Users register indicating if they want to donate or receive food
2. **Matching Algorithm**: The system finds users in the same city with opposite intentions
3. **Contact Exchange**: Matched users can contact each other directly
4. **Direct Communication**: Users coordinate food sharing outside the platform

## Features Explained

### Security & Validation
- Phone number validation (10 digits required)
- Input sanitization to prevent injection attacks
- MongoDB schema validation
- Error handling for all database operations

### User Experience
- Responsive design that works on all devices
- Clear navigation between pages
- Helpful feedback messages
- Loading states and error messages

### Database Design
- Efficient indexing for fast city-based queries
- Timestamps for tracking when users registered
- Clean data structure with proper validation

## API Endpoints

- `GET /` - Homepage
- `GET /mission` - Mission page
- `GET /vision` - Vision page
- `GET /form1` - Registration form
- `POST /database` - Handle registration and show matches

## Development

### Running in Development Mode
```bash
npm run dev
```
This uses nodemon for automatic server restart on file changes.

### Adding New Features
1. Create new routes in `routes/index.js`
2. Add corresponding EJS templates in `views/`
3. Update navigation in existing templates
4. Add styles to `public/css/style.css`

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Verify network connectivity (for Atlas)

2. **Port Already in Use**
   - Change the port in `.env` file
   - Kill existing processes on port 8080

3. **Dependencies Issues**
   - Delete `node_modules/` and `package-lock.json`
   - Run `npm install` again

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure MongoDB is accessible
4. Check that all dependencies are installed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Future Enhancements

- User authentication and profiles
- Email notifications for matches
- Food category specifications
- Rating and review system
- Mobile app development
- Integration with food banks and restaurants
- AI-powered matching algorithms
- Real-time messaging system

## License

This project is licensed under the ISC License - see the package.json file for details.

## Contact

For questions or support, please contact the development team.

---

Made with ❤️ to fight hunger and reduce food waste.
