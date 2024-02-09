/*
 * REST Petclinic backend Api Documentation
 * This is REST API documentation of the Spring Petclinic backend. If authentication is enabled, when calling the APIs use admin/admin
 *
 * OpenAPI spec version: 1.0
 * Contact: vitaliy.fedoriv@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * OpenAPI generator version: 5.3.0
 */


import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "http://localhost:8080/petclinic";
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.

export default function() {
    group("/api/visits/{visitId}", () => {
        let visitId = 'TODO_EDIT_THE_VISITID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = BASE_URL + `/api/visits/${visitId}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Visit details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 3
        request = http.del(url);
        check(request, {
            "Visit details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/api/vets/{vetId}", () => {
        let vetId = 'TODO_EDIT_THE_VETID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = BASE_URL + `/api/vets/${vetId}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Vet details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 3
        request = http.del(url);
        check(request, {
            "Vet details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/api/specialties/{specialtyId}", () => {
        let specialtyId = 'TODO_EDIT_THE_SPECIALTYID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = BASE_URL + `/api/specialties/${specialtyId}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Specialty details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);


        // Request No. 3
        request = http.del(url);
        check(request, {
            "Specialty details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/api/pettypes/{petTypeId}", () => {
        let petTypeId = 'TODO_EDIT_THE_PETTYPEID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = BASE_URL + `/api/pettypes/${petTypeId}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Pet type details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);


        // Request No. 3
        request = http.del(url);
        check(request, {
            "Pet type details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/api/pets/{petId}", () => {
        let petId = 'TODO_EDIT_THE_PETID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = BASE_URL + `/api/pets/${petId}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Pet details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);


        // Request No. 3
        request = http.del(url);
        check(request, {
            "Pet details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/api/owners/{ownerId}", () => {
        let ownerId = 'TODO_EDIT_THE_OWNERID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = BASE_URL + `/api/owners/${ownerId}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Owner details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);


        // Request No. 3
        request = http.del(url);
        check(request, {
            "Owner details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/api/owners/{ownerId}/pets/{petId}", () => {
        let petId = 'TODO_EDIT_THE_PETID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let ownerId = 'TODO_EDIT_THE_OWNERID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = BASE_URL + `/api/owners/${ownerId}/pets/${petId}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Pet details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);


    });
    group("/api/visits", () => {
        let url = BASE_URL + `/api/visits`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "visits found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);


    });
    group("/api/vets", () => {
        let url = BASE_URL + `/api/vets`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Vets found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

    });
    group("/api/users", () => {
        let url = BASE_URL + `/api/users`;
        // Request No. 1
        // TODO: edit the parameters of the request body.
        let body = {"username": "string", "password": "string", "enabled": "boolean", "roles": "list"};
        let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
        let request = http.post(url, body, params);
        check(request, {
            "User created successfully.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
    group("/api/specialties", () => {
        let url = BASE_URL + `/api/specialties`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Specialties found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

    });
    group("/api/pettypes", () => {
        let url = BASE_URL + `/api/pettypes`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Pet types found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

    });
    group("/api/pets", () => {
        let url = BASE_URL + `/api/pets`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Pet types found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

    });
    group("/api/owners", () => {
        let lastName = 'TODO_EDIT_THE_LASTNAME'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = BASE_URL + `/api/owners?lastName=${lastName}`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "Owner details found and returned.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

    });
    group("/api/owners/{ownerId}/pets", () => {
        let ownerId = 'TODO_EDIT_THE_OWNERID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = BASE_URL + `/api/owners/${ownerId}/pets`;
        // Request No. 1
        // TODO: edit the parameters of the request body.
        let body = {"name": "string", "birthDate": "date", "type": {"name": "string", "id": "integer"}};
        let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
        let request = http.post(url, body, params);
        check(request, {
            "The pet was sucessfully added.": (r) => r.status === 201
        });
        sleep(SLEEP_DURATION);
    });
    group("/api/owners/{ownerId}/pets/{petId}/visits", () => {
        let petId = 'TODO_EDIT_THE_PETID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let ownerId = 'TODO_EDIT_THE_OWNERID'; // specify value as there is no example value for this parameter in OpenAPI spec
        let url = BASE_URL + `/api/owners/${ownerId}/pets/${petId}/visits`;
        // Request No. 1
        // TODO: edit the parameters of the request body.
        let body = {"date": "date", "description": "string"};
        let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
        let request = http.post(url, body, params);
        check(request, {
            "The vet visit was sucessfully added.": (r) => r.status === 201
        });
        sleep(SLEEP_DURATION);
    });
    group("/", () => {
        let url = BASE_URL + `/`;
        // Request No. 1
        let request = http.get(url);
        check(request, {
            "OK": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 2
        request = http.put(url);
        check(request, {
            "OK": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 3
        request = http.post(url);
        check(request, {
            "OK": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 4
        request = http.del(url);
        check(request, {
            "OK": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 5
        request = http.patch(url);
        check(request, {
            "OK": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 6
        request = http.head(url);
        check(request, {
            "OK": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);

        // Request No. 7
        request = http.options(url);
        check(request, {
            "OK": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
}
