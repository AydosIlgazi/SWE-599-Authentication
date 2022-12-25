import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "swe599",
 clientId: "test1",
});

export default keycloak;