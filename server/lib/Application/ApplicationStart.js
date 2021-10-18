module.exports.start = function (port, app) {
  const PORT = process.env.PORT || port;

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};
