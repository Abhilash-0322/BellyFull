#!/bin/bash

# MongoDB Setup Script for BellyFull
# This script helps set up MongoDB for the BellyFull application

echo "🍽️  BellyFull MongoDB Setup Script"
echo "=================================="

# Check if MongoDB is installed
if command -v mongod &> /dev/null; then
    echo "✅ MongoDB is installed"
    
    # Try to start MongoDB service
    echo "🚀 Starting MongoDB service..."
    
    # Try different ways to start MongoDB based on the system
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command -v systemctl &> /dev/null; then
            sudo systemctl start mongod
            sudo systemctl enable mongod
        else
            sudo service mongod start
        fi
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        brew services start mongodb-community
    fi
    
    # Check if MongoDB is running
    sleep 2
    if pgrep -x "mongod" > /dev/null; then
        echo "✅ MongoDB is running"
        
        # Create the database and initial setup
        echo "📊 Setting up BellyFull database..."
        mongo << EOF
use bellyfull
db.createCollection("users")
db.users.createIndex({ "choice": 1, "city": 1 })
print("✅ Database 'bellyfull' created with users collection and indexes")
EOF
        
    else
        echo "❌ Failed to start MongoDB"
        echo "💡 Please start MongoDB manually or use MongoDB Atlas"
    fi
    
else
    echo "❌ MongoDB is not installed"
    echo ""
    echo "📥 Installation options:"
    echo ""
    echo "1. Install MongoDB Community Edition:"
    echo "   - Linux: https://docs.mongodb.com/manual/administration/install-on-linux/"
    echo "   - macOS: brew install mongodb-community"
    echo "   - Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/"
    echo ""
    echo "2. Use MongoDB Atlas (Cloud):"
    echo "   - Go to https://www.mongodb.com/atlas"
    echo "   - Create a free account and cluster"
    echo "   - Update MONGODB_URI in .env file"
    echo ""
fi

echo ""
echo "🔧 Next steps:"
echo "1. Ensure MongoDB is running"
echo "2. Update .env file with correct MONGODB_URI if needed"
echo "3. Run 'npm start' to start the BellyFull application"
echo "4. Visit http://localhost:8080 in your browser"
echo ""
echo "🌟 Happy food sharing!"
