const fs = require('fs');

fs.writeFileSync('./test.txt',Date.now().toLocaleString(), {encoding:'utf8'});

