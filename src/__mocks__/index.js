import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import './Clients';

const mock = new MockAdapter(Axios, {
  delayResponse: 2000
});

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/users").reply(200, {
  users: [{ id: 1, name: "John Smith" }]
});

mock.onGet('/Cliente/consulta',{ params: { idOperacion: 1 } }).reply(200, {
  data: [
    { idCliente: '1', Cod_cliente:'XLCO35', Rsocial:'Empresa de helados', Clave_impo:'XLSL321', Direccion:'Calle 25 #25-6', Localidad:'Lerida', Provincia:'Tolima', Cpos:'92930' },
    { idCliente: '2', Cod_cliente:'XLCO33', Rsocial:'Comidas Rapidas', Clave_impo:'XLSL321', Direccion:'Calle 25 #25-6', Localidad:'Lerida', Provincia:'Tolima', Cpos:'92930' }
  ]
});
