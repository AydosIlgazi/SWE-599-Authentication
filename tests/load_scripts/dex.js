import http from 'k6/http';


export const options = {
	  vus: 600,
	  duration: '60s',
	};

export default function () {
  const url = 'http://127.0.0.1:5556/dex/userinfo';

  const params = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxYzE1YWRjZTdmOTQ4ZGE3NzRjNGEyOGE3ZjdiOGYzNjE1ZWZmMWMifQ.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjU1NTYvZGV4Iiwic3ViIjoiQ2cwd0xUTTROUzB5T0RBNE9TMHdFZ1J0YjJOciIsImF1ZCI6ImV4YW1wbGUtYXBwIiwiZXhwIjoxNjY5NDA3MTU5LCJpYXQiOjE2NjkzMjA3NTksImF0X2hhc2giOiI0cGV2c1VOYWFscUs2SFFEbHpfMFp3IiwiZW1haWwiOiJraWxnb3JlQGtpbGdvcmUudHJvdXQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IktpbGdvcmUgVHJvdXQifQ.bAs9vLDhQAO1xgjNl4zhYYwHggz6zph6OW4kzGn4nw5j-6wY47eWlk7PlqslrYOKdNwBUT-hW635E1BuwGmpA2UvP6OgaXEz66Kc-SRmi7YYS9dOAeXs8Pkepvfbt2KD_KJT8kneIX5VPUpjrYdzrzkXN155W2fKBQ5R0uJU9GxZmuXzN2EHkchIKdlxhsyDot1icGMIr9ai6kKFksWgJGpu45YuA5qG1IAkw6ccyQJmjPP7xW-sweSZ7p6zBSIpVlYOzkEucL0Cfetxkuh2ox-DBxsaEZwdf0fyhPKBoG_EyEBWUzgNgyYhpjfCvl9Y0_0cZYXuq51boeF8zs-Hig',
    },
  };


  http.get(url, params);
}


