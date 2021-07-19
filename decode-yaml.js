const fs = require('fs');
const jsYaml = require('js-yaml');

const decodeYaml = () => {
  try {
    const fileContents = fs.readFileSync('./resources/config.yaml', 'utf-8');
    return jsYaml.load(fileContents);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  decodeYaml
}
