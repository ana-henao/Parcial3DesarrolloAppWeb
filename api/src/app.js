import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { DoctorRoute } from "./routers/doctorRoute.mjs";
import { PatientRoute } from "./routers/patientRoute.mjs";
import * as swaggerUi from "swagger-ui-express";

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "University API",
      description: "A sample API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.mjs"],
};

const spec = swaggerJsdoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));

app.get("/api-docs.json", (req, res) => {
  res.send(spec);
});

app.use(express.json());

const doctorRoute = new DoctorRoute();
const patientRoute = new PatientRoute();

app.use("/doctor", doctorRoute.router);
app.use("/patient", patientRoute.router);

app.all("*", (req, res) => {
    res.status(404).send(JSON.stringify({ message: "invalid path" }));
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  // expressOasGenerator.handleRequests();
  app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
  });