# Casdoor Test Cases

## Configuration:

* Login:

<img width="337" alt="casdoor_loginconfig" src="https://user-images.githubusercontent.com/32308526/203988157-52ab4efa-b933-4149-adfa-f9a9c84e2248.png">


## Login

* Start Login Flow -> http://localhost:8000/login/oauth/authorize
* Enter Credentials and Click Sing In <br>
<img width="452" alt="casdoor_login" src="https://user-images.githubusercontent.com/32308526/203988373-a9645cfd-5ea7-4ba9-99d7-157ebdac1825.png">

* Get Access Token With Auth Code ->  http://localhost:8000/api/login/oauth/access_token

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



