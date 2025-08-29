# Test Konsuld Widget

Local test harness for embedding Konsuld widget in an iframe.

## Configure

Edit `src/App.jsx` and set the `EMBED_URL` to your environment:

```js
const EMBED_URL = 'http://localhost:3000/embed/widget'; // local
// or
// const EMBED_URL = 'https://staging.konsuld.app/embed/widget';
// const EMBED_URL = 'https://konsuld.app/embed/widget';
```

## Run

```bash
npm install
npm run dev
```

Open the shown URL; you should see the Konsuld widget embedded.
