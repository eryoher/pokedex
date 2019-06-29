import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

if (process.env.REACT_APP_MOCK_ENABLED){

  const mock = new MockAdapter(Axios, {
    delayResponse: 2000
  });

  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  mock.onGet('/users').reply(200, {
    users: [
      { id: 1, name: 'John Smith' }
    ]
  });

}