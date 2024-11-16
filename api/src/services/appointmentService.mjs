import { Db } from "../config/db.mjs";
import { Appointment } from "../models/Appointment.mjs";
import { CustomError } from "../CustomError.mjs";

class AppointmentService{
    create = async (patient_id, appointmentDate, appointmentHour, doctor_id) => {
        const client = new Db();
        try {
          console.log("create appointment");
          const results = await client.query(
            `INSERT INTO 
                medicalappointment (date, hour, patient_id, doctor_id)
            VALUES 
                ($1, $2, $3, $4)
            RETURNING *;`,
            [appointmentDate, appointmentHour, patient_id, doctor_id]
          );
          const { id, date, hour } = results.rows[0];
          return new Appointment(id, date, hour);
        } catch (error) {
          console.log("error at create appointment", error);
          throw new CustomError(error.code, error.detail);
        }
      };

      getAllApointments = async (doctor_id) => {
        const client = new Db();
        try {
          console.log("get appointments by date");
          const results = await client.query(
            `SELECT * FROM medicalappointment
            WHERE doctor_id = $1;`,
            [doctor_id]
          );
          return results.rows.map(
            ({ id, date, hour }) => new Appointment(id, date, hour)
          );
        } catch (error) {
          console.log("error at get all appointments by date", error);
          throw new CustomError(error.code, error.detail);
        }
      };

      getAllApointmentsByDate = async (date, doctor_id) => {
        const client = new Db();
        try {
          console.log("get appointments by date");
          const results = await client.query(
            `SELECT * FROM medicalappointment
            WHERE doctor_id = $1 AND date = $2;`,
            [doctor_id,date]
          );
          return results.rows.map(
            ({ id, date, hour }) => new Appointment(id, date, hour)
          );
        } catch (error) {
          console.log("error at get all appointments by date", error);
          throw new CustomError(error.code, error.detail);
        }
      };

      
      updateAppointment = async (appointment_id,patient_id, appointmentDate, appointmentHour) => {
        const client = new Db();
        try {
          console.log("update appointment");
          const results = await client.query(
            `UPDATE medicalappointment
            SET date = $1, hour = $2, patient_id = $3
            WHERE id = $4;`,
            [appointmentDate,appointmentHour,patient_id,appointment_id]
          );
          const { id, date, hour } = results.rows[0];
          return new Appointment(id, date, hour);
        } catch (error) {
          console.log("error at update appointment", error);
          throw new CustomError(error.code, error.detail);
        }
      };

      deleteAppointment = async (appointment_id) => {
        const client = new Db();
        try {
          console.log("update appointment");
          const results = await client.query(
            `DELETE FROM medicalappointment
            WHERE id = $1;`,
            [appointment_id]
          );
          const { id, date, hour } = results.rows[0];
          return new Appointment(id, date, hour);
        } catch (error) {
          console.log("error at update appointment", error);
          throw new CustomError(error.code, error.detail);
        }
      };
}

export { AppointmentService };