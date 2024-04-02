# Open Soft 2024 Frontend

### Setup

- Clone the frontend repository `ui-client` to your local machine.
- Change your current directory to the cloned repository.
- Open the `src/components/Config.js` file and paste the URL of your backend server as the value of `baseURL`.

   ```javascript
   const baseURL = "{URL of Backend Server}";
   ```

### Install Dependencies

Run the following command in your terminal to install the necessary dependencies:

```bash
npm i
```

### Run the Application

To start the application, execute:

```bash
npm start
```

The application will be available at `http://localhost:3000` by default.

## Routes

The application includes several routes, each serving different content:

- `/` - Home Page
- `/plans` - Subscription Plans Page
- `/profile` - User Profile Page
- `/lang/:language` - Movies by Language Page
- `/:genre` - Movies by Genre Page
- `/login` - Sign In Page
- `/signup` - Sign Up Page
- `/search-results/:query` - Search Results Page
- `/admin` - Admin Dashboard
- `/catalog` - Movie Catalog Management Page for Admin
- `/users` - User Management Page for Admin
- `/movie/:id` - Individual Movie Preview Page 

## Features


### Autocomplete
  - Dynamic autocomplete functionality for a search-as-you-type experience.
  - Efficient handling of partial queries for quick feedback.

### Search

  - Accomodate typos and variations in spellings through fuzzy matching algorithms.
  - Search on the basis of movie plot using MongoDB's Vector Search
  - Results from full-text and semantic searches combined to provide the best matching movies.

### Advanced Video Playback Options
Enhances viewing experience with:
  - Adjustable resolution settings based on connection speed.
  - Playback speed control for customized viewing preferences.

### Subscription Model Integration
  - Flexible subscription plans with tiered benefits.
