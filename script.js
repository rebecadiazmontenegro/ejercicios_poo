// 1. Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

    let Persona = function (nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.obtDetalles = function(){
        console.log(`Su nombre es ${this.nombre}, tiene ${this.edad} años y su género es ${this.genero}`);
        }
    }

// 2. Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

    let Estudiante = function (nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
    this.registrar = function () {
        console.log(`El curso de ${this.nombre} es ${this.curso}, esta en el grupo ${this.grupo}`);
    };
    };

    // Aquí se establece la herencia 
    Estudiante.prototype = Object.create(Persona.prototype);
    Estudiante.prototype.constructor = Estudiante;


// 3. Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

    let Profesor = function (nombre, edad, genero, asignatura, nivel) {

    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
    this.asignar = function () {
        console.log(`La asignatura de ${this.nombre} es ${this.asignatura} y tiene un nivel ${this.nivel}`);
    };
    };

    Profesor.prototype = Object.create(Persona.prototype);
    Profesor.prototype.constructor = Profesor;


// 5. Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.

    // Caso de prueba con profesor
    let personaPrueba = new Persona("Rebeca", 25, "Femenino");
    personaPrueba.obtDetalles();

    // Caso de prueba con estudiante
    let estudiantePrueba = new Estudiante("Aaron", 29, "Masculino", "3º", "C");
    estudiantePrueba.obtDetalles();
    estudiantePrueba.registrar();

    // Caso de prueba con profesor
    let profesorPrueba = new Profesor("Alberto", 26, "Masculino", "Historia", "Avanzado");
    profesorPrueba.obtDetalles();
    profesorPrueba.asignar();