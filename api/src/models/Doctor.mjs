import { Appointment } from "./Appointment.mjs";

class Doctor {
    constructor(id, name, age, email, password) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.email = email;
      this.password = password;
      this.appointments = new Set();
    }

    createAppointment(appointment) {
        if (!(appointment instanceof Appointment)) {
          throw new Error("Debe ser un objeto de la clase Appointment");
        }
        this.appointments.add(appointment);
      }
}

export { Doctor};