import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import clientMock from './Clients';
import voucherMock from './Voucher';

const mockAdapter = new MockAdapter(Axios, {
  delayResponse: 2000
});

clientMock(mockAdapter);
voucherMock(mockAdapter);

mockAdapter.onGet('/TipoComprobantes/consulta', { params: { "idComprobante": "C.NVCR" } }).reply(200, {
  data: {
    "idOperacion": 12345,
    "cod_comprob": "C.NVCR",
    "descrip_comprob": "Pedido reserva autom.",
    "descrip_tipocomp": "Pedido",
    "procesos": [
      {
        "cod_proceso": "p_selcli",
        "desc_proceso": "Selección cliente",
        "orden:": 1
      },
      {
        "cod_proceso": "p_vtacab",
        "desc_proceso": "Datos de Cabecera",
        "orden:": 2
      },
      {
        "cod_proceso": "p_cargaitemvta",
        "desc_proceso": "Carga de Items",
        "orden:": 3
      },
      {
        "cod_proceso": "p_fincomprob",
        "desc_proceso": "Final Comprobante",
        "orden:": 9
      },
    ]
  }
});