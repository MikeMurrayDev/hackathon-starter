const app = require('./server');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotenv.load();
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));

console.log('Twilio AuthToken: ', process.env.TWILIO_AUTHTOKEN);