import {AppointmentService} from "../services/appointmentService.mjs"

class AppointmentController{
    #service;
    constructor(){
        this.#service = new AppointmentService()
    }

    ceate = async (req, res) => {
        const { patient_id, date, hour, doctor_id } = req.body;
        if (!patient_id || !date || !hour || !doctor_id) {
        return res.status(400).send({ code: 400, message: "some data missing" });
        }
        try {
            const result = await this.#service.createCourse(code, name, credits);
            res.status(201).send(result);
          } catch (error) {
              return res
                .status(500)
                .send({ code: error.code, message: error.message });
          }
      }

      getAllApointments = async (req, res) => {
        const { date, doctor_id } = req.params;
        if (!doctor_id) {
            return res.status(400).send({ code: 400, message: "doctor id missing" });
            }
        try {
            let result;
            if (!date) {
                result = await this.#service.getAllApointments(doctor_id);
            }else{
                result = await this.#service.getAllApointmentsByDate(date);
            }
            res.status(201).send(result);
          } catch (error) {
              return res
                .status(500)
                .send({ code: error.code, message: error.message });
          }
      }

      updateCourse = async (req, res) => {
        const { appointment_id } = req.params;
        const { patient_id, date, hour } = req.body;
        if (!appointment_id || !patient_id ||!date || !hour) {
          return res.status(400).send({ code: 400, message: "some data missing" });
        }
        const updated = await this.#service.updateAppointment(appointment_id, patient_id, date, hour);
        res.status(200).send(updated);
      };

      delete = async (req, res) => {
        const { appointment_id } = req.params;
        if (!appointment_id) {
          return res.status(400).send({ code: 400, message: "some data missing" });
        }
        const updated = await this.#service.deleteAppointment(appointment_id);
        res.status(200).send(updated);
      };

}