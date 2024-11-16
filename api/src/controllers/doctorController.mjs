import {AppointmentService} from "../services/appointmentService.mjs"

class DoctorController{
    #service;
    constructor(){
        this.#service = new AppointmentService()
    }

    ceate = async (req, res) => {
        const { id } = req.params;
        const { patient_id, date, hour} = req.body;
        if (!patient_id || !date || !hour || !id) {
        return res.status(400).send({ code: 400, message: "some data missing" });
        }
        try {
            const result = await this.#service.create(patient_id, date, hour, id);
            res.status(201).send(result);
          } catch (error) {
              return res
                .status(500)
                .send({ code: error.code, message: error.message });
          }
      }

      getAllApointments = async (req, res) => {
        const { date, id } = req.params;
        if (!id) {
            return res.status(400).send({ code: 400, message: "doctor id missing" });
            }
        try {
            let result;
            if (!date) {
                result = await this.#service.getAllApointments(id);
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

      updateAppointment = async (req, res) => {
        const { appointmentid } = req.params;
        const { patient_id, date, hour } = req.body;
        if (!appointmentid || !patient_id ||!date || !hour) {
          return res.status(400).send({ code: 400, message: "some data missing" });
        }
        const updated = await this.#service.updateAppointment(appointmentid, patient_id, date, hour);
        res.status(200).send(updated);
      };

      delete = async (req, res) => {
        const { appointmentid } = req.params;
        if (!appointmentid) {
          return res.status(400).send({ code: 400, message: "some data missing" });
        }
        const updated = await this.#service.deleteAppointment(appointmentid);
        res.status(200).send(updated);
      };

}

export {DoctorController};