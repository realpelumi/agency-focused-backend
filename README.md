## Live API
- Base URL: https://agency-focused-backend.onrender.com
- Health Check: GET /health
- Contact: POST /api/contact

## Related Repo
- Frontend Repo: https://github.com/realpelumi/agency-focused
- Frontend Live: https://agency-focused.vercel.app/

## Notes
- CORS is configured to allow requests from the frontend domain.

The backend was implemented as a simple REST API to handle Contact Us form submissions from the frontend.

The main focus was on input validation, clear success and error responses, and a straightforward structure that can be easily extended. The API is designed to simulate a real production feature and could be enhanced with database persistence, rate limiting, or email notifications in a real-world scenario.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Validation**: Joi
- **Environment**: dotenv
- **Package Manager**: npm

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. The server will run on `http://localhost:5000`

## License

This project is licensed under the MIT License.

## Security

✅ No secrets or API keys are committed to this repository. All sensitive configuration is handled through environment variables.

