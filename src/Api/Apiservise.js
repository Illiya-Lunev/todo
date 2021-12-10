const API_KEY = '2a35eead60f4cb91ce1e5cafcf7fad41';
const BASE_URL = 'http://api.weatherstack.com/';

export default function ApiServise() {
  return fetch(`${BASE_URL}/current?access_key=${API_KEY}&query=Kiev`).then(
    res => {
      if (res.ok) {
        console.log(res);
        return res.json();
      }
      return Promise.reject(new Error('Oops, nothing was found!'));
    },
  );
}
