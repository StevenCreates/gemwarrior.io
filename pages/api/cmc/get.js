import axios from "axios";

export default async function handler(req, res) {
  try{
  // const { account, token } = req.query
  const baseUrl = process.env.CMK_BASE
  const key = process.env.CMK_KEY
  const response = await axios.get(`${baseUrl}cryptocurrency/listings/latest?market_cap_max=100000000&market_cap_min=5000000&limit=5000&sort_dir=desc`,
    {
      headers: { 'X-CMC_PRO_API_KEY': key }
    }
  )
  const data = response.data.data
  res.status(200).json(data)
} catch (err) {
  res.status(500).json({ error: err })
}
}
