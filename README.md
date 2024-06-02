# Journy

## Table of Contents

- [Problem](#Problem)
- [Features](#features)
- [User Stories](#Stories)
- [Design](#Design)
- [Plan](#Plan)

## Problem

Planning a trip with friends or a group can be overwhelming due to the complexities of coordinating transportation, accommodation, activities, and schedules. Our web app simplifies trip planning with features designed for collaboration, including shared itineraries, group discussions, budget management, and accommodation options. By addressing these challenges, our app enhances the trip planning experience, making it more enjoyable and stress-free for everyone involved.

## Features

- Feature 1 (core): Collaborative Itinerary Builder
- Feature 2 (core): Google Maps Integration for Route Planning
- Feature 3 (core): Interactive Location Comments and Ratings
- Feature 4 (extension): Itinerary Segmentation and Customization
- Feature 5 (extension): Notification System
- Feature 6 (extension): Trip Summary and Sharing

## Stories

- As a user who wants to plan a travel itinerary, I want to be able to plan my trip with my friends efficiently.
- As a user who wants to manage my expenses, I want to be able to have an accessible overview of the expenses in order to plan the trips efficiently.
- As a user, I would like to segment and customize my itinerary by different categories such as places to visit, restaurants, and activities for each day, allowing me to organize my trip efficiently and focus on specific aspects of my travel plans.

## Design

### Architecture Overview

Our web app follows a client-server architecture, with a React front-end and a Firebase back-end. Firebase handles authentication, database management, and cloud functions, providing a scalable and secure platform for our application's backend needs.

### Technologies and Tools

- **Front-end**: React, Bootstrap
- **Back-end**: Firebase (Authentication, Firestore, Cloud Functions)
- **Database**: Firebase Firestore
- **APIs**: Google Maps API

## Plan

Development Roadmap

- Milestones:
  - Milestone 1 (3 June, 2pm): Finish sign up and login function, and integration of database using Firebase.
  - Milestone 2 (1 July, 2pm): Dynamic route planning and editing features. Basic commenting functionality for locations.
  - Milestone 3 (29 July, 2pm) : Itinerary segmentation and basic notification settings
  - Milestone 4: Final system testing, Trip summary generation and sharing feature.
    **Sprint Planning**: We will follow a weekly sprint cycle with planning sessions at the start of each sprint.

## Completed Features:

### Login/Signup with Integration of Firebase

- We implemented user authentication using Firebase Authentication. This feature allows users to create an account and log in securely using their email and password.
- **What We Did:**

  - Integrated Firebase Authentication into our app to handle user signup and login processes.
  - Configured Firebase Authentication to manage user sessions and secure access to our app's features.
  - Created user-friendly login and signup forms with validation to ensure data integrity.
  - Implemented error handling to provide users with clear feedback on authentication issues (e.g., incorrect password, email already in use).

- **Challenges Faced:**
  - **Firebase Configuration:** Initially, configuring Firebase and ensuring correct integration with our React app posed challenges. We had to troubleshoot issues related to environment variables and proper setup of Firebase services.
  - **Form Validation and Error Handling:** Implementing comprehensive form validation and error handling required significant attention to detail to provide a smooth user experience. Ensuring that error messages were clear and helpful was essential.
  - **Managing User Sessions:** Maintaining user sessions and handling authentication states across different components was complex. We had to ensure that user sessions persisted correctly and that the website responded appropriately to changes in authentication state.
