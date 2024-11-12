const modelos = {
    solicitud: require('./solicitud'),
    user: require('./login'),
    area: require('./Area'),
    relacion_area:require('./relacion_area'),
    seguimiento: require('./seguimiento'),

};

// Definición de relaciones
modelos.user.hasMany(modelos.solicitud, { foreignKey: 'Solicitante' }); // Un usuario puede tener muchas solicitudes como solicitante
modelos.solicitud.belongsTo(modelos.user, { foreignKey: 'Solicitante' }); // Cada solicitud tiene un solicitante

modelos.user.hasMany(modelos.solicitud, { foreignKey: 'Asignado_a' }); // Un usuario puede tener muchas solicitudes asignadas
modelos.solicitud.belongsTo(modelos.user, { foreignKey: 'Asignado_a' }); // Cada solicitud puede ser asignada a un usuario

//Definicion de relaciones de muchos a muchos
modelos.area.hasMany(modelos.relacion_area,{foreignKey: 'Id_Area'});
modelos.relacion_area.hasMany(modelos.area,{foreignKey: 'id'});
modelos.user.hasMany(modelos.relacion_area,{foreignKey: 'Id_Usuario'});
modelos.relacion_area.hasMany(modelos.user,{foreignKey: 'id'});

//Definicion de relaciones de mensajes
modelos.user.hasMany(modelos.seguimiento,{foreignKey:'id'});
modelos.seguimiento.belongsTo(modelos.user,{foreignKey:'emisor'});
module.exports = modelos;