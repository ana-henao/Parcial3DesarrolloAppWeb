curl -X GET localhost:8080/patient/1 -i

curl -X POST -H "content-type: application/json" -H "accept-content: application/json" localhost:8080/doctor/1/appointment -d '{"patient_id": "1", "date": "2024/12/01", "hour":"10:00"}' -i

curl -X GET localhost:8080/patient/1/appointment -i

curl -X GET localhost:8080/doctor/1/appointment -i

curl -X PUT -H "content-type: application/json" -H "accept-content: application/json" localhost:8080/doctor/appointment/1 -d '{"patient_id": "1", "date": "2024/12/01", "hour":"15:00"}' -i

curl -X DELETE localhost:8080/doctor/appointment/1 -i

