export const processResults = func => async (req, res, next) => {
  try {
    const result = await func(req, res, next);
    res.send(result);
  } catch (e) {
        next(e); // eslint-disable-line
  }
};
