let fs = require("fs");

module.exports = function setEnv(url) {
  let data = fs.readFileSync(url, "utf-8");
  let reg = /.+\s*=\s*.+/g;
  data.match(reg).forEach((val) => {
    let arr = val.split(/\s*=\s*/);
    process.env[arr[0]] = arr[1];
  });
};
