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
    group("/api/vets", () => {
        // Request No. 2
        let body = {"firstName": "pakito", "lastName": "patata", "specialties": "list", "id": "1"};
        let params = {headers: {"Content-Type": "application/json"}};
        let request = http.post(url, body, params);
        check(request, {
            "Vet created successfully.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
}
