const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

//!Realizamos la creación de el json
const tokenSing = async (user) => {
    try {
        // Prepara el payload
        const payload = {
            id: user.id,
            Roll: user.Roll,
        };
        console.log(payload);
        

        // Genera y devuelve el token
        return await jwt.sign(payload, JWT_SECRET, {
            expiresIn: "2h",
        });
    } catch (e) {
        console.log('Este es el error de el token:', e);
        return res.status(500).json({
            msg: "Contraseña incorrecta"
        }); ; // Devuelve null en caso de error
    }
};


//? realizamos la verificacion de la creación de el json web token
const verifySing = async (token)=>{
   try {
        return  jwt.verify(token, JWT_SECRET)
   } catch (e) {
    console.log('este es el error de el token' + e);
        
    return(null);
   }
};

module.exports ={
    tokenSing,
    verifySing
};


