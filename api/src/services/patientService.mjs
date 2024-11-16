import { Db } from "../config/db.mjs";
import { Appointment } from "../models/Appointment.mjs";
import { Patient } from "../models/Patient.mjs";
import { CustomError } from "../CustomError.mjs";

class Patientervice{

    getOne = async(patient_id) => {
        const client = new Db();
        try {
          console.log("get appointments by patient id");
          const results = await client.query(
            `SELECT * FROM patient
            WHERE id = $1;`,
            [patient_id]
          );
          const { id, name, age, email, password } = results.rows[0];
          return new Patient( id, name, age, email, password);
        } catch (error) {
          console.log("error at get all appointments by patient id", error);
          throw new CustomError(error.code, error.detail);
        }
    }

    getAllApointmentsByPatientId = async (patient_id) => {
        const client = new Db();
        try {
          console.log("get appointments by patient id");
          const results = await client.query(
            `SELECT * FROM medicalappointment
            WHERE patient_id = $1;`,
            [patient_id]
          );
          return results.rows.map(
            ({ id, date, hour }) => new Appointment(id, date, hour)
          );
        } catch (error) {
          console.log("error at get all appointments by patient id", error);
          throw new CustomError(error.code, error.detail);
        }
      };
}

export {Patientervice};