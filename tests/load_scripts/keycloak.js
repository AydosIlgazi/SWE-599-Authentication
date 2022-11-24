import http from 'k6/http';


export const options = {
	  vus: 600,
	  duration: '60s',
	};

export default function () {
  const url = 'http://localhost:8080/realms/swe590/protocol/openid-connect/userinfo';

  const params = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1RnVMMUdmUll3czBBQmY5U0JtZlRuRGFqc3BSQ0JjT3R4b3lFZUtna3h3In0.eyJleHAiOjE2NjkzMjAxNjQsImlhdCI6MTY2OTMxOTg2NCwiYXV0aF90aW1lIjoxNjY5MzE5ODIxLCJqdGkiOiI3NTI0ODhmNi1jM2E5LTQwMTMtYjk5Ni03NmU1OTBmY2MxMzYiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL3N3ZTU5MCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJmNjI2YzdkOS1jZTlhLTRlZjctYjlkNC1lNjE4NmNjNDZiZWMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJiYzU3MzAzMy1lZTRkLTRlZTMtODYxYi03MjVlMDg1ZGFkZGEiLCJzZXNzaW9uX3N0YXRlIjoiY2ZiY2ZjYmItZTIwNy00NTQyLWE3MWQtYjdkM2U0ODIxOTU3IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1zd2U1OTAiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiY2ZiY2ZjYmItZTIwNy00NTQyLWE3MWQtYjdkM2U0ODIxOTU3IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJheWRvc2lsZ2F6aSIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiJ9.guSVZ-9CPn-CCts9-vBNmMSSYqeMp80zhK518ncImlIrZMTQOXO8poTuhcvdF1YuRAO8J2NufsVY3lyq0Vk4ExGEOx7A7LMd3ldQapikA049jYyh6pTp0f-GhiDvYPJo8ASDqR2nX0ShQbGzWW_7eXAOpMEQSYABldG0FV1jGakOCiIEpkgOdVLvULciHdAzHUtz5aGha6A1C5MkbQ-FVaLxqWsuffvKHEFFPQ0FeTWayiYhRTcpkrE190ERJT7wXopbJvWjLUymayQpgYZGuZXHFI3UEV8EFL9g3j7cbEwYGNfscuF466amrKL1c6W_O4QYAt1bq1zjVBpGzkTyjg',
    },
  };


  http.get(url, params);
}



