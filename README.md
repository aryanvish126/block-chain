# Digital Bharat Chain

This is a static website built with HTML, CSS, and JavaScript.

## Run locally

1. Open `index.html` in any web browser.
2. For the best experience, run a local web server instead of opening files directly.

### Option A: Python local server

If Python is installed, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option B: Node.js local server

If Node.js is installed, open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Database support

This project now includes a local database file named `db.json`.

- `POST /api/login` checks the hard-coded user in `db.json`
- `POST /api/contact` saves messages to `db.json`

## Share with a link

To make the site available on any device or OS, deploy it as a static website.

### GitHub Pages

1. Create a GitHub repository and push this project.
2. In the repository settings, enable GitHub Pages from the `main` branch and folder `/ (root)`.
3. Your site will be available at a link like:

```text
https://<your-username>.github.io/<repo-name>/
```

### Netlify

1. Go to https://app.netlify.com/
2. Drag and drop this project folder to deploy.
3. Netlify will provide a public URL you can share.

## Notes

- The backend server runs at `http://localhost:3000`.
- The database file is `db.json` and stores login users plus contact submissions.
- If you want, I can also help you make the login page fully dynamic with real user registration.
