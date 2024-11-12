//? Helper Error Handler
const handleHttpError = (res, message = "Something happened", code = 403) => {
    res.status(code);
    res.send({ error: message });
  };
//! Export
export { handleHttpError };