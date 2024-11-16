import { Router } from "express";
import { body } from "express-validator";
import { PatientController } from "../controllers/patientController.mjs";

class PatientRoute{
    constructor() {
    this.router = Router();
    this.controller = new PatientController();

    this.router
      .route("/:patientid")
      .get(this.controller.getOne);

    this.router
      .route("/:patientid/appointment")
      .get(this.controller.getAllApointments);
    }
    
}

export {PatientRoute}