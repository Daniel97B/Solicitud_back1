const express =  require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES =__dirname;

const removerextencion = (filename)=>{
    return filename.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const nombre =  removerextencion(file)
    if (nombre !== "index") {
        router.use(`/${nombre}`, require(`./${file}`));        
    }
});

module.exports = router;