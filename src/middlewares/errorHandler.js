module.exports = (err, req, res, next) => {
  const status = err.status || err.httpStatusCode || 500;
  const payload = {
    status: 'error',
    message: err.message || 'Internal Server Error',
  };
  if (process.env.NODE_ENV !== 'production') {
    payload.stack = err.stack;
  }
  res.status(status).json(payload);
};

