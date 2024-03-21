import cookies from 'utils/cookies'

const handler = (req, res) => {
  res.cookie('accessToken', '', {maxAge: -1})
  return res.status(200).json({success: true})
}

export default cookies(handler)