import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "swe599",
 clientId: "test2",
});

export default keycloak;