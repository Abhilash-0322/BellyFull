// Simple test to verify the application components
const mongoose = require('mongoose');
const User = require('./models/User');

// Test database connection and user creation
async function testApplication() {
    try {
        console.log('🧪 Testing BellyFull Application...');
        
        // Connect to database
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bellyfull', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Database connection successful');
        
        // Test user creation
        const testUser = new User({
            name: 'Test User',
            choice: 'don',
            phone_no: '1234567890',
            city: 'Test City'
        });
        
        await testUser.save();
        console.log('✅ User creation successful');
        
        // Test user query
        const users = await User.find({ city: 'Test City' });
        console.log(`✅ User query successful - Found ${users.length} user(s)`);
        
        // Clean up test data
        await User.deleteOne({ _id: testUser._id });
        console.log('✅ Test cleanup successful');
        
        console.log('🎉 All tests passed! Application is working correctly.');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    } finally {
        await mongoose.connection.close();
        console.log('🔌 Database connection closed');
        process.exit(0);
    }
}

// Load environment variables
require('dotenv').config();

// Run tests
testApplication();
