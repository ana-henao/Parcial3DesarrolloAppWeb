BEGIN;

CREATE TABLE specialty (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255) NOT NULL
);

CREATE TABLE doctor (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    specialty_id INT NOT NULL,
    FOREIGN KEY (specialty_id) REFERENCES specialty(id)
);

CREATE TABLE patient (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE medicalappointment (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    hour TIME NOT NULL,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patient(id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);

COMMIT;