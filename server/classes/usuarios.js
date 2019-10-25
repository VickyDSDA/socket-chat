//Se manejan todos los usuarios conectados
class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {

        let persona = {
            id,
            nombre,
            sala
        }

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {

        let persona = this.personas.filter(pers => pers.id === id)[0];

        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personaEnSala = this.personas.filter(pers => pers.sala === sala);
        return personaEnSala;
    }


    //Si la persona abandona el chat
    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);
        //en el arreglo quedaria solo todas las personas activas en el chat
        this.personas = this.personas.filter(pers => {
            return pers.id != id;
        });

        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}