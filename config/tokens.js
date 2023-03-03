const jwt = require("jsonwebtoken");
const { SECRET } = require("./_envs");;

function generateToken(payload) {
  const token = jwt.sign({ payload }, SECRET, { expiresIn: "10d" });
  return token
}

function validateToken(token,  defaultPayload = null) {

  try {
    const payload = jwt.verify(token, SECRET);
    return { payload };
  } catch (err) {
    return { payload: defaultPayload };
  }
    // jwt.verify(token, SECRET)
}

module.exports = { generateToken, validateToken };
