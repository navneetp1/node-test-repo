const { readFile } = require("fs");

//using promise instead of a callback for reading files

const obtainText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      else {
        resolve(data);
      }
    });
  });
};

const begin = async () => {
  try {
    const second = await obtainText("./files/result-async.txt");
    const first = await obtainText("./files/first.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

begin();

//uneccesary method, don't use this - use async - await
