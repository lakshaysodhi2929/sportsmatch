# SportsMatch

A modern platform for sports enthusiasts to create, discover, and join matches in their area.

## Architecture

The application follows a microservices architecture with the following components:

### Backend Services
1. **User Service** - Handles user authentication, profiles, and preferences
2. **Match Service** - Manages match creation, discovery, and team formation
3. **Venue Service** - Handles venue management and availability
4. **Chat Service** - Real-time communication between match participants
5. **Notification Service** - Handles all notifications and alerts
6. **Rating Service** - Manages player and venue ratings

### Frontend
- React-based web application
- Material-UI for modern design
- Google Maps integration

### Database
- MySQL for persistent storage
- Redis for caching and real-time features

### Authentication
- JWT-based authentication
- OAuth2 for social login

## Technology Stack

- **Backend**: Java Spring Boot
- **Frontend**: React
- **Database**: MySQL
- **Cache**: Redis
- **Message Queue**: RabbitMQ
- **API Gateway**: Spring Cloud Gateway
- **Service Discovery**: Eureka
- **Maps**: Google Maps API

## Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 16 or higher
- MySQL 8.0
- Redis
- RabbitMQ

### Setup Instructions
1. Clone the repository
2. Set up the databases
3. Configure the services
4. Start the backend services
5. Start the frontend application

## Features

1. Multi-Sport Support
2. Match Creation & Discovery
3. Smart Venue Integration
4. Player Profiles & Skill Levels
5. Match Chat & Notifications
6. Team Formation & Auto-Matchmaking
7. Reviews & Ratings
8. Calendar & Scheduling
9. Waitlist & Substitution System

## Development

### Backend Development
```bash
cd backend
./mvnw clean install
```

### Frontend Development
```bash
cd frontend
npm install
npm start
```

## License

MIT License 