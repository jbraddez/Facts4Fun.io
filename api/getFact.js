export default async function handler(req, res) {
    const API_URL = 'https://api.api-ninjas.com/v1/facts?limit=1';
    const API_KEY = process.env.API_KEY;

    try {
        const response = await fetch(API_URL, {
            headers: {
                'X-Api-Key': API_KEY
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch fact.' });
    }
}
