const handle = fn => {
  return async (req, res, next) => {
    try {
      return Promise.resolve(fn(req, res, next));
    }
    catch (next) {
      return next(next);
    }
  }
};

function error404(req, res, _next) {
  console.log(`404 Requested resource not found: ${req.path}`);
  res.status(404).send('Not Found');
};

function error500(err, _req, res, _next) {
  console.log(err);
  res.status(500).send(`Internal Server Error: ${err.message}`);
};

function badRequest(req, res, message = 'Bad Request') {
  console.log(`400 Bad Request (${req.path}): ${message}`);
  res.status(400).send(message);
};

export { handle, error404, error500, badRequest };