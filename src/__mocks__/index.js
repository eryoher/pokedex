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

mock.onGet('/Clientes/consulta',{ params: { idOperacion: 1 } }).reply(200, {
  data: [
    { idCliente: '1', Cod_cliente:'XLCO35', Rsocial:'Farmacia Central', Clave_impo:'XLSL321', Direccion:'Calle 25 #25-6', Localidad:'Lerida', Provincia:'Tolima', Cpos:'92930' },
    { idCliente: '2', Cod_cliente:'XLCO33', Rsocial:'Farmacia Sur', Clave_impo:'XLSL321', Direccion:'Calle 25 #25-6', Localidad:'Lerida', Provincia:'Tolima', Cpos:'92930' }
  ]
});

mock.onGet('/Clientes/cliente').reply(200, {
  data: {
    "Idcliente":309,
    "Cod_categ":"GESTION ",
    "cod_sin_formato":"FAR0399 ",
    "cod_con_formato":"FAR-0399 ",
    "rsocial":"FARMACIA CENTRAL Y PERFUMERIA PM S.R.L. ",
    "abrev":"FARMACIA CENTRAL",
    "tipo_resp":"I",
    "tipo_resp_desc":"Inscripto",
    "cuit":"30572374196",
    "dom_calle":"25 DE MAYO ",
    "dom_nro":"272",
    "dom_piso":"PB",
    "dom_dpto":"",
    "dom_observ":"Puerta azul",
    "dom_cpos":"9120",
    "dom_local":"PUERTO MADRYN",
    "dom_cod_prov": "U",
    "dom_nom_prov": "Chubut",
    "pais": "Argentina",
    "tel": "(0280) 4454804 ",
    "fax": "",
    "email": "info@farmaciacentral.com.ar ",
    "pagweb": "www.farmaciacentral.com.ar",
    "contacto": "ANABELA ",
    "cod_monex": "U$S", 
    "vend_id": 2 ,
    "vend_nom": "Juan Fernandez",
    "cvta_cod": "60",
    "cvta_desc": "60 días FF",
    "trans_cod": "FL01",
    "trans_desc": "Transporte Sur",
    "dir_loc_ega": "Rivadavia 627, Puerto Madryn",
    "saldo_pend": 257345.23 ,
    "credito": 200000.00 ,
    "credito_saldo": -57345.23,
    "doc_tipo": "",
    "doc_nro": "",
    "cod_preclis": "L1",
    "nom_preclis": "Lista precios Mayorista",
    "cod_preclis2": "Of1",
    "nom_preclis2": "Lista Ofertas",
    "obs_ventas": "Aplicar lista mayorista -5%",
    "obs_cc": "",
    "obs_desp": "Entregas antes de las 15 hs",
    "cto_fondos": "IIVT",
    "cto_fondos_desc": "Ingreso por ventas",
    "habilitado": 1,
    "fecha_inicio": "2017-05-23",
    "fecha_ult_vta": "2019-04-08",
    "fecha_modif": "2018-12-23",
    "Sucursales": [
      {      
      "suc_nom": "Esquel",
      "suc_calle":"Belgrano",
      "suc_nro":"3552",
      "suc_piso":"PB",
      "suc_dpto":"2",
      "suc_cpos":"9240",
      "suc_local":"ESQUEL",
      "suc_cod_prov": "U",
      "suc_nom_prov": "Chubut",
      "suc_pais": "Argentina",
      "suc_email": "esquel@farmaciacentral.com.ar ",
      "suc_tel": "(0284) 442-5522 ",
      "suc_fax": "",
      "suc_observ": "",
      "suc_obs_dom": "",
      "suc_vend_id": 4 ,
      "suc_vend_nom": "Carlos Sanchez",
      "suc_cvta_cod": "60",
      "suc_cvta_desc": "60 días FF",
      "suc_trans_cod": "FL32",
      "suc_trans_desc": "Transporte Esquel",
      "suc_credito": 50000.00
      }
     ],
    "Atributos": [
     {
     "catributo": "DROGTIPAG",
     "desc_atributo": "Drog-Tipo Agente",
     "cod_dato": "5",
     "desc_dato": "FARMACIA"
     },
     {
     "catributo": "DROGGLN1",
     "desc_atributo": "Drog-GLN 1",
     "cod_dato": "",
     "desc_dato": "1454222541121215"
     }
     ] 
  }
});


mock.onGet('/TipoComprobantes/consulta',{ params: { "idComprobante":"C.NVCR" } }).reply(200, {
  data: {
      "idOperacion":12345,
      "cod_comprob":"C.NVCR",
      "descrip_comprob":"Pedido reserva autom.",
      "descrip_tipocomp":"Pedido",
      "procesos":[
       {
       "cod_proceso":"p_selcli",
       "desc_proceso":"Selección cliente",
       "orden:":1
       },
       {
       "cod_proceso":"p_vtacab",
       "desc_proceso":"Datos de Cabecera",
       "orden:":2
       },
       {
       "cod_proceso":"p_cargaitemvta",
       "desc_proceso":"Carga de Items",
       "orden:":3
       },
       {
       "cod_proceso":"p_fincomprob",
       "desc_proceso":"Final Comprobante",
       "orden:":9
       },
       ]
    }  
});