const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjczZGIwYWFkZDVjN2FkMjQ5YzNlYTBlYTNjNzg3YiIsIm5iZiI6MTczMDcyNzI2NS4yOTM0OTk1LCJzdWIiOiI2NzI4YzhmYjJlMWI3OTc4ZGJiMzljYTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NrRxkrdEhzt6M8sjsJZZBIUJQrQAMOm3C-IH9-WlwNU'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));