# RRU Investment Portal

A comprehensive web application for managing and displaying investment arbitration cases for Rashtriya Raksha University (RRU). This portal provides detailed information about investment cases where India is either a respondent state or the home state of the claimant.

## Features

- **Dual Case Views**: 
  - Cases as Respondent State (India as respondent)
  - Cases as Home State of Claimant (India as investor's home state)
- **Interactive Dashboard**: Modern, responsive interface with navigation between different case categories
- **Detailed Case Information**: Comprehensive case details including investment summaries, outcomes, and proceedings
- **Search and Filter**: Easy navigation through investment arbitration cases
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Project Structure

```
rru-investment-portal/
├── assets/
│   ├── MHALogo.png
│   └── RRULogo.png
├── css/
│   └── style.css
├── js/
│   ├── dashboard.js
│   └── login.js
├── dashboard.html
├── index.html
├── login.html
├── server.js
├── package.json
└── README.md
```

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

## Installation

1. **Clone or download the project**:
   ```bash
   git clone <repository-url>
   cd rru-investment-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

### Option 1: Using Node.js Server (Recommended)

1. **Start the server**:
   ```bash
   node server.js
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

### Option 2: Direct File Access

If you prefer to run without a server:

1. **Open the files directly** in your browser:
   - Navigate to the project folder
   - Double-click on `index.html` or open it in your browser

2. **Note**: Some features may be limited when running without a server due to browser security restrictions.

## Usage

### Getting Started

1. **Access the Portal**: Open the application in your web browser
2. **Login**: Use the provided login credentials (if authentication is enabled)
3. **Navigate Dashboard**: Use the navigation buttons to switch between different case views

### Dashboard Navigation

- **Cases as Respondent State**: View cases where India is the respondent state
- **Cases as Home State of Claimant**: View cases where India is the home state of the investor

### Case Information

Each case includes:
- Case number and year of initiation
- Short case name (clickable for details)
- Investment summary and description
- Outcome of original proceedings
- Respondent state and home state of investor

## Development

### File Structure Overview

- **HTML Files**:
  - `index.html`: Main landing page
  - `login.html`: Login interface
  - `dashboard.html`: Main dashboard with case tables

- **CSS Files**:
  - `css/style.css`: Main stylesheet with responsive design

- **JavaScript Files**:
  - `js/dashboard.js`: Dashboard functionality and interactions
  - `js/login.js`: Login form handling

- **Server**:
  - `server.js`: Node.js server for serving the application

### Adding New Cases

To add new cases to the dashboard:

1. **Open `dashboard.html`**
2. **Locate the appropriate table section** (respondent or claimant)
3. **Add new table rows** following the existing structure:
   ```html
   <tr>
     <td>Case Number</td>
     <td>Year</td>
     <td><a href="#" class="case-link">Case Name</a></td>
     <td><b>Investment:</b> Description<br><br><b>Summary:</b> Summary text</td>
     <td>Outcome</td>
     <td>Respondent State</td>
     <td>Home State of Investor</td>
   </tr>
   ```

### Styling

The application uses a custom CSS framework with:
- Responsive grid system
- Modern color scheme (blue and white theme)
- Interactive hover effects
- Mobile-friendly design

## Browser Compatibility

This application is compatible with:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Change the port in server.js or kill the process using the port
   lsof -ti:3000 | xargs kill -9
   ```

2. **Node modules not found**:
   ```bash
   npm install
   ```

3. **CORS issues**: Make sure you're running the application through the Node.js server rather than opening files directly.

### Getting Help

If you encounter any issues:
1. Check the browser console for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility

## Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is developed for Rashtriya Raksha University. All rights reserved.

## Contact

For support or questions, please contact the development team at RRU.

---

**Developed by Shivam**  
© 2025 RRU. All rights reserved. 