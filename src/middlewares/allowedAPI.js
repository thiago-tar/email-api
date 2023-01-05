const checkAllowedApi = (req, res, next) => {
  var authorization = req.get('Authorization');
  if (!authorization) {
    return res
      .status(400)
      .send("Bad Request - You must provide the auth-token");
  }
  if (process.env.ALLOWED_API) {
    var allowedAPIS = JSON.parse(process.env.ALLOWED_API);
    if (allowedAPIS.includes(authorization)) return next();
  }
  
  return res.status(401).send("Unauthorized - Auth-token incorrect");
};

module.exports = { checkAllowedApi };
