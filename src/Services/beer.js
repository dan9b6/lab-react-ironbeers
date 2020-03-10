import Axios from 'axios';

const List = () => {
  return new Promise((resolve, reject) => {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers').then(result => {
      console.log(result);
      resolve(result.data);
    });
  });
};

export { List };
