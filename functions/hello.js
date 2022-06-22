export default (req, res) => {
  console.log(`My Log: Hello ${req.query.name}!`)
  res.status(200).send(`Hello ${req.query.name}!`)
}
