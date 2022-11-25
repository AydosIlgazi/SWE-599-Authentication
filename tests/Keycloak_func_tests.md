# Keycloak Test Cases

## Configuration:

* Login:

<img width="419" alt="keycloak_loginconfig" src="https://user-images.githubusercontent.com/32308526/203985793-a72a1196-e0e2-491e-8a76-c954f51d182c.png">

* Multi Factor Authentication:

<img width="1107" alt="keycloak_mfaconfig" src="https://user-images.githubusercontent.com/32308526/203985944-77418176-52ea-48de-8e21-6b487f3208af.png">

## Login

* Start Login Flow -> http://localhost:8080/realms/{{realm}}/protocol/openid-connect/auth
* Enter Credentials and Click Sing In <br>
<img width="601" alt="keycloak_login" src="https://user-images.githubusercontent.com/32308526/203983792-6c2445bb-a943-420f-9dd0-c7948872eb62.png">
* Get Access Token With Auth Code ->  http://localhost:8080/realms/{{realm}}/protocol/openid-connect/token

* [Postman](https://github.com/AydosIlgazi/SWE-599-Authentication/blob/main/tests/postman_scripts/KeyCloak.postman_collection.json) -> Action Name: GetTokensLogin or GetTokensLoginConfClient (Depending on the client)

## Register

<img width="551" alt="keycloak_register" src="https://user-images.githubusercontent.com/32308526/203984483-c707883d-30de-4460-8b05-a91447788bcb.png">

## Forgot Password

<img width="572" alt="keycloak_forgotpass" src="https://user-images.githubusercontent.com/32308526/203984571-30d02832-8ba6-406d-b02d-f7909d52aa78.png">

## Logout

[Postman](https://github.com/AydosIlgazi/SWE-599-Authentication/blob/main/tests/postman_scripts/KeyCloak.postman_collection.json) -> Action Name: Logout

## Get User Information

[Postman](https://github.com/AydosIlgazi/SWE-599-Authentication/blob/main/tests/postman_scripts/KeyCloak.postman_collection.json) -> Action Name: GetUserInfo

## Token Introspect

[Postman](https://github.com/AydosIlgazi/SWE-599-Authentication/blob/main/tests/postman_scripts/KeyCloak.postman_collection.json) -> Action Name: TokenIntrospect



