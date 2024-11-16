import { Patientervice } from "../services/patientService.mjs";

class PatientController{
    #service;
    constructor(){
        this.#service = new Patientervice()
    }

    getOne = async (req, res) => {
        const { patientid } = req.params;
        if (!patientid) {
        return res.status(400).send({ code: 400, message: "patient id is missing" });
        }
        try {
            const result = await this.#service.getOne(patientid);
            res.status(201).send(result);
          } catch (error) {
              return res
                .status(500)
                .send({ code: error.code, message: error.message });
          }
      }

      getAllApointments = async (req, res) => {
        const { patientid } = req.params;
        if (!patientid) {
            return res.status(400).send({ code: 400, message: "patient id missing" });
            }
        try {
            result = await this.#service.getAllApointmentsByPatientId(patientid);
            res.status(201).send(result);
          } catch (error) {
              return res
                .status(500)
                .send({ code: error.code, message: error.message });
          }
      }
}

export {PatientController};