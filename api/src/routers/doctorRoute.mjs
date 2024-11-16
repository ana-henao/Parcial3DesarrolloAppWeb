import { Router } from "express";
import { body } from "express-validator";
import { DoctorController } from "../controllers/doctorController.mjs";

class DoctorRoute{
    constructor() {
    this.router = Router();
    this.controller = new DoctorController();

    this.router
      .route("/:id/appointment")
      .get(this.controller.getAllApointments)
      .post(
        [
          body("patient").trim().notEmpty(),
          body("date").trim().notEmpty(),
          body("hour").trim().notEmpty(),
        ],
        this.controller.ceate
      );
    

    this.router
    .route("/appointment/:appointmentid")
    .put(this.controller.updateAppointment)
    .delete(this.controller.delete);
    }
}

export {DoctorRoute}