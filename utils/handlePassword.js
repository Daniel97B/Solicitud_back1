const bcryptjs = require('bcryptjs');

//!Por medio de esta funcion se realiza la encriptacion de la contraseña
const encrypt = async (passwordPlain) => {
        try {
            // Generar un salt
            const salt = await bcryptjs.genSalt(10);
            
            // Realizamos la encriptación por medio de la librería
            const hash = await bcryptjs.hash(passwordPlain, salt);
            //inserto la contraseña en una variable
            return hash;

        } catch (error) {
            console.error("Error al encriptar la contraseña:", error);
            throw error; // Lanza el error para que pueda ser manejado por el llamador
        }
    };
//?Por medio de esta funcion se realiza la comparacion de la contraseña encryptada y la que se guardo
const compare = async(Passwordplain,Hashpassword)=>{
    return await bcryptjs.compare(Passwordplain,Hashpassword);
    
};


module.exports={
    encrypt,
    compare
}