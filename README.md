# Live Number Plate Detection Frontend

## Overview
The frontend of the Live Number Plate Detection application is a React-based web interface designed for visualizing number plate detection data. It fetches detection results from a backend API and presents them through interactive charts, graphs, and tables. This application focuses solely on data visualization, providing an intuitive platform for analyzing detection metrics such as plate numbers, timestamps, and confidence scores, without handling detection or processing tasks.

## Features
- **Interactive Dashboard**: Visualizes detection trends and statistics via charts and graphs.
- **Detection Table**: Displays a sortable and filterable list of detection records.
- **Detailed View**: Provides in-depth details for individual detections, including associated images (if available).
- **Responsive Design**: Ensures compatibility across desktop and mobile devices.

## Technology Stack
- **Framework**: React.js (v17.x or higher)
- **HTTP Client**: Axios (v0.x) for API requests
- **Styling**: CSS or a framework like Bootstrap
- **Dependencies** (as listed in `package.json`):
  - `react`
  - `react-dom`
  - `axios`

## Prerequisites
- Node.js (v16.x or higher)
- npm (v8.x or higher)
- A running backend server (e.g., at `http://localhost:3000/api`) providing detection data

## Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Application**:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Troubleshooting
- **Blank Page on Load**: Ensure the backend API is running and `REACT_APP_API_URL` is correct.
- **CORS Errors**: Verify the backend allows requests from `http://localhost:3000` via CORS configuration.
- **Dependency Errors**: Run `npm install` again or clear `node_modules` and `package-lock.json`.
