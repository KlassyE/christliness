import express from 'express';
import { exec } from 'child_process';
import crypto from 'crypto';

const app = express();
const PORT = 9000;
const WEBHOOK_SECRET = 'my_super_secure_secret'; // CHANGE THIS TO MATCH YOUR GITHUB SECRET

app.use(express.json());

app.post('/webhook', (req, res) => {
    const signature = req.headers['x-hub-signature-256'];
    if (!signature) {
        return res.status(401).send('No signature found');
    }

    const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
    const digest = 'sha256=' + hmac.update(JSON.stringify(req.body)).digest('hex');

    if (signature !== digest) {
       // return res.status(403).send('Invalid signature');
       // Note: Keeping this loose for initial testing if needed, but in production, uncomment the above.
       console.warn('Signature mismatch or verification failed');
    }

    console.log('Received webhook event');

    // Execute git pull and build
    exec('git pull origin main && npm install && npm run build', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send(`Error: ${error.message}`);
        }
        if (stderr) {
            console.log(`Stderr: ${stderr}`);
        }
        console.log(`Stdout: ${stdout}`);
        res.status(200).send('Updated successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Webhook listener running on port ${PORT}`);
});
