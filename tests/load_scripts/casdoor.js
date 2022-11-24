import http from 'k6/http';


export const options = {
	  vus: 600,
	  duration: '60s',
	};

export default function () {
  const url = 'http://localhost:8000/api/userinfo';

  const params = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImNlcnQtYnVpbHQtaW4iLCJ0eXAiOiJKV1QifQ.eyJvd25lciI6ImJ1aWx0LWluIiwibmFtZSI6ImF5ZG9zaWxnYXppIiwiY3JlYXRlZFRpbWUiOiIyMDIyLTExLTE5VDIyOjQxOjQ0KzAzOjAwIiwidXBkYXRlZFRpbWUiOiIiLCJpZCI6IjFjNjVmMTQ0LWYxM2EtNGNlMS05ZDZiLWNlNTVmODIzYzdhMSIsInR5cGUiOiJub3JtYWwtdXNlciIsInBhc3N3b3JkIjoiIiwicGFzc3dvcmRTYWx0IjoiIiwiZGlzcGxheU5hbWUiOiJBeWRvcyDEsGxnYXppIiwiZmlyc3ROYW1lIjoiIiwibGFzdE5hbWUiOiIiLCJhdmF0YXIiOiJodHRwczovL2Nkbi5jYXNiaW4ub3JnL2ltZy9jYXNiaW4uc3ZnIiwicGVybWFuZW50QXZhdGFyIjoiIiwiZW1haWwiOiJobzExN2JAZXhhbXBsZS5jb20iLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwicGhvbmUiOiI0ODc0MjQ1MjE3NSIsImxvY2F0aW9uIjoiIiwiYWRkcmVzcyI6W10sImFmZmlsaWF0aW9uIjoiRXhhbXBsZSBJbmMuIiwidGl0bGUiOiIiLCJpZENhcmRUeXBlIjoiIiwiaWRDYXJkIjoiIiwiaG9tZXBhZ2UiOiIiLCJiaW8iOiIiLCJyZWdpb24iOiIiLCJsYW5ndWFnZSI6IiIsImdlbmRlciI6IiIsImJpcnRoZGF5IjoiIiwiZWR1Y2F0aW9uIjoiIiwic2NvcmUiOjAsImthcm1hIjowLCJyYW5raW5nIjoyLCJpc0RlZmF1bHRBdmF0YXIiOmZhbHNlLCJpc09ubGluZSI6ZmFsc2UsImlzQWRtaW4iOnRydWUsImlzR2xvYmFsQWRtaW4iOnRydWUsImlzRm9yYmlkZGVuIjpmYWxzZSwiaXNEZWxldGVkIjpmYWxzZSwic2lnbnVwQXBwbGljYXRpb24iOiJhcHAtYnVpbHQtaW4iLCJoYXNoIjoiIiwicHJlSGFzaCI6IiIsImNyZWF0ZWRJcCI6IiIsImxhc3RTaWduaW5UaW1lIjoiIiwibGFzdFNpZ25pbklwIjoiIiwiZ2l0aHViIjoiIiwiZ29vZ2xlIjoiIiwicXEiOiIiLCJ3ZWNoYXQiOiIiLCJmYWNlYm9vayI6IiIsImRpbmd0YWxrIjoiIiwid2VpYm8iOiIiLCJnaXRlZSI6IiIsImxpbmtlZGluIjoiIiwid2Vjb20iOiIiLCJsYXJrIjoiIiwiZ2l0bGFiIjoiIiwiYWRmcyI6IiIsImJhaWR1IjoiIiwiYWxpcGF5IjoiIiwiY2FzZG9vciI6IiIsImluZm9mbG93IjoiIiwiYXBwbGUiOiIiLCJhenVyZWFkIjoiIiwic2xhY2siOiIiLCJzdGVhbSI6IiIsImJpbGliaWxpIjoiIiwib2t0YSI6IiIsImRvdXlpbiI6IiIsImN1c3RvbSI6IiIsIndlYmF1dGhuQ3JlZGVudGlhbHMiOm51bGwsImxkYXAiOiIiLCJwcm9wZXJ0aWVzIjp7fSwicm9sZXMiOltdLCJwZXJtaXNzaW9ucyI6W10sImxhc3RTaWduaW5Xcm9uZ1RpbWUiOiIiLCJzaWduaW5Xcm9uZ1RpbWVzIjowLCJtYW5hZ2VkQWNjb3VudHMiOm51bGwsInRva2VuVHlwZSI6ImFjY2Vzcy10b2tlbiIsInRhZyI6InN0YWZmIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDAwIiwic3ViIjoiMWM2NWYxNDQtZjEzYS00Y2UxLTlkNmItY2U1NWY4MjNjN2ExIiwiYXVkIjpbIjU4M2UzYTVlNzViMDQ4MTBiMDk2Il0sImV4cCI6MTY2OTkyNTE2MiwibmJmIjoxNjY5MzIwMzYyLCJpYXQiOjE2NjkzMjAzNjIsImp0aSI6ImFkbWluLzQ2M2U1MmYxLTQxZmEtNGNiZC1iZDI0LTYyYzRhOWU0MWVlOSJ9.Kl3JlN2o9b96K0rlVo1MR27v3q9kiTeF-8K6bPHqDWCST4jXhRnt5kH3hmW0tS4PaZ2wlYSUwwPwCvAjHYrrl8z706DhuvWugT_L67nVRjOlS1BhG6TQSnLTxVSPtgv0NbwCjvLpGjUuXeAAMF2NcB1OCLUifYDaYNhIZlKHb-YHW_A53bFJf9Zu3txGM-24qudKBpqEXklyE45zD2RI03nX1_3bLzJmeweSnKm-aRQbqOKm6zeP1_Q0W4s9uc-b9-50tjh5g2fGX9fqPLYvfeigqMGTxp_XuG6RZMNUCWv-dtCYQ_xg0C9jHIdJuxCEzTzOtrtxR_2EAsbPgqWHzWvNId2I7GcdIYSNKDfjS3B4y8ajmYnoHZxANTAyCUyBEieDFoQPJxqXzfJoBrFcJmCg9vRaXd1FIe84C6oE00f4lLlQkV71DltgfpqRsLetvFq25T4--xBP7LAZJVRF1ft-vBVzdzvgEAIzy99II8uORVWFHdwKT32xZAjf_Or5d2hGqUIu7RTm2VtiUA-aKn-LH7akCNUq2Jl2vAdZE1fX8i_Vc095eSUjBit_dCQUlPsoB7GUuBBdYpOGK4RTlst7MdIvfIplIlv1MM4uuPsm4wRv5x1iSfOPKvd0ZX1ckdoOUytJMvIqFSFIK3Zv6Vz3wi37u-5fSMTz-nBiB5A',
    },
  };


  http.get(url, params);
}

