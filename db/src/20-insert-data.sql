BEGIN;

INSERT INTO 
    specialty (name, specialty) 
VALUES
    ('Medicina General', 'medicina general'),
    ('Cardiología', 'cardiología'),
    ('Urología', 'urología'),
    ('Fisiología', 'fisiología'),
    ('Pediatría', 'pediatría');


INSERT INTO 
    doctor (name, age, email, password, specialty_id) 
VALUES
    ('Dr. Juan Pérez', 45, 'juan.perez@example.com', 'password123', 1),
    ('Dr. Ana Gómez', 50, 'ana.gomez@example.com', 'password123', 2),
    ('Dr. Luis Martínez', 39, 'luis.martinez@example.com', 'password123', 3),
    ('Dr. Carla López', 42, 'carla.lopez@example.com', 'password123', 4),
    ('Dr. Miguel Sánchez', 37, 'miguel.sanchez@example.com', 'password123', 5);


INSERT INTO 
    patient (name, age, email, password) 
VALUES
    ('Pedro García', 28, 'pedro.garcia@example.com', 'password123'),
    ('María Hernández', 34, 'maria.hernandez@example.com', 'password123'),
    ('José Fernández', 23, 'jose.fernandez@example.com', 'password123'),
    ('Laura Rodríguez', 30, 'laura.rodriguez@example.com', 'password123'),
    ('Carlos Sánchez', 27, 'carlos.sanchez@example.com', 'password123'),
    ('Lucía Martínez', 26, 'lucia.martinez@example.com', 'password123'),
    ('Andrés Gómez', 35, 'andres.gomez@example.com', 'password123'),
    ('Sofía López', 29, 'sofia.lopez@example.com', 'password123'),
    ('Raúl Díaz', 22, 'raul.diaz@example.com', 'password123'),
    ('Isabel Jiménez', 31, 'isabel.jimenez@example.com', 'password123');

COMMIT;