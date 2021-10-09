const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;
const client = ({ data }) => {
  return window
    .fetch(`${apiUrl}country,city?apiKey=${apiKey}&ipAddress=${data.ipAdress}`)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      }
      return Promise.reject(data);
    });
};

export { client };
