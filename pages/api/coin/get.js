import axios from "axios";

export default async function handler(req, res) {
  try{
  // const { account, token } = req.query
  const baseUrl = process.env.COIN_API_BASE
  const key = process.env.COIN_API_KEY
  const response = await axios.get(`${baseUrl}v1/assets`,
    {
      headers: { 'X-CoinAPI-Key': key }
    }
  )
  const data = response.data
  res.status(200).json(data)
} catch (err) {
  res.status(500).json({ error: err })
}
}
