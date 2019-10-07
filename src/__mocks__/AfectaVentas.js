export default (mockAdapter) => {

    mockAdapter.onGet('/AfectaVentas/Cantidad').reply(200, {
        data: {
            "page_number": 1,
            "page_size": 50,
            "total_count": 126,
            "Resultado": [
                {
                    "resultado": '.T.'
                }],
            "Items": [
                {
                    "nimovcli": 45334,
                    "nitem": 1,
                    "fec_emis": "20190123",
                    "fec_vto": "20190223",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033424",
                    "niprod": 36574,
                    "cod_prod": "PERSEL00454",
                    "desc_prod": "Desodorante Axe musk",
                    "codbarra": "07795555225225",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '32.56',
                    "cant_pend": 100,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '3256,00',
                },
                {
                    "nimovcli": 45335,
                    "nitem": 4,
                    "fec_emis": "20190123",
                    "fec_vto": "20190115",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033424",
                    "niprod": 36576,
                    "cod_prod": "PERSEL00456",
                    "desc_prod": "Desodorante Axe Marine",
                    "codbarra": "07795555225226",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '254.56',
                    "cant_pend": 500,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1628, 00'
                },
                {
                    "nimovcli": 45336,
                    "nitem": 5,
                    "fec_emis": "20190123",
                    "fec_vto": "20190115",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033425",
                    "niprod": 36577,
                    "cod_prod": "PERSEL00457",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225227",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '35.05',
                    "cant_pend": 500,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1628, 00'
                },
                {
                    "nimovcli": 45337,
                    "nitem": 6,
                    "fec_emis": "20190123",
                    "fec_vto": "20190115",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033426",
                    "niprod": 36578,
                    "cod_prod": "PERSEL00458",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225228",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '235.03',
                    "cant_pend": 378,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1668, 00'
                },
                {
                    "nimovcli": 45338,
                    "nitem": 7,
                    "fec_emis": "20190124",
                    "fec_vto": "20190116",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033427",
                    "niprod": 36579,
                    "cod_prod": "PERSEL00459",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225229",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '755.03',
                    "cant_pend": 350,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1668,00'
                },
                {
                    "nimovcli": 45339,
                    "nitem": 8,
                    "fec_emis": "20190125",
                    "fec_vto": "20190117",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033428",
                    "niprod": 36581,
                    "cod_prod": "PERSEL00458",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225228",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '285.03',
                    "cant_pend": 225,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1668, 00'
                },
                {
                    "nimovcli": 45340,
                    "nitem": 9,
                    "fec_emis": "20190126",
                    "fec_vto": "20190118",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033429",
                    "niprod": 36582,
                    "cod_prod": "PERSEL00459",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225229",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '5280.03',
                    "cant_pend": 625,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1368, 00'
                },
                {
                    "nimovcli": 45341,
                    "nitem": 10,
                    "fec_emis": "20190127",
                    "fec_vto": "20190119",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033430",
                    "niprod": 36583,
                    "cod_prod": "PERSEL00460",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225230",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '7250.53',
                    "cant_pend": 925,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1368, 00'
                },
                {
                    "nimovcli": 45342,
                    "nitem": 11,
                    "fec_emis": "20190128",
                    "fec_vto": "20190120",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033431",
                    "niprod": 36584,
                    "cod_prod": "PERSEL00461",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225231",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '798.53',
                    "cant_pend": 200,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1668, 00'
                },
                {
                    "nimovcli": 45343,
                    "nitem": 12,
                    "fec_emis": "20190129",
                    "fec_vto": "20190121",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033432",
                    "niprod": 36585,
                    "cod_prod": "PERSEL00462",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225232",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '785.53',
                    "cant_pend": 150,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '6985, 00'
                },
                {
                    "nimovcli": 45344,
                    "nitem": 13,
                    "fec_emis": "20190130",
                    "fec_vto": "20190122",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033433",
                    "niprod": 36586,
                    "cod_prod": "PERSEL00463",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225233",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '654.03',
                    "cant_pend": 680,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '9875,00'
                },
                {
                    "nimovcli": 45345,
                    "nitem": 14,
                    "fec_emis": "20190101",
                    "fec_vto": "20190123",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033434",
                    "niprod": 36587,
                    "cod_prod": "PERSEL00464",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225234",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '864.03',
                    "cant_pend": 125,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '8775,00'
                },
                {
                    "nimovcli": 45346,
                    "nitem": 15,
                    "fec_emis": "20190102",
                    "fec_vto": "20190124",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033435",
                    "niprod": 36588,
                    "cod_prod": "PERSEL00465",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225235",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '986.00',
                    "cant_pend": 825,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '8965,00'
                },
                {
                    "nimovcli": 45347,
                    "nitem": 16,
                    "fec_emis": "20190103",
                    "fec_vto": "20190125",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033436",
                    "niprod": 36589,
                    "cod_prod": "PERSEL00466",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225236",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '698.00',
                    "cant_pend": 625,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '8635,00'
                },
                {
                    "nimovcli": 45348,
                    "nitem": 17,
                    "fec_emis": "20190104",
                    "fec_vto": "20190126",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033437",
                    "niprod": 36590,
                    "cod_prod": "PERSEL00467",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225237",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '584.00',
                    "cant_pend": 125,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '6355,00'
                }

            ]
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar', { params: { idOperacion: 45334 } }).reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45334,
                    "nitem": 1,
                    "cant_afec": 100,
                    "prod_pcio_vta": '36.54',
                    "neto": '36545.25',
                    "ind_stock": 0
                },

            ],
            "total_importe": 54454,
            "total_item": 1,
            "total_cant": 100
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar', { params: { idOperacion: 45335 } }).reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45335,
                    "nitem": 1,
                    "cant_afec": 250,
                    "prod_pcio_vta": '36.54',
                    "neto": '3332.25',
                    "ind_stock": 0
                },

            ],
            "total_importe": 154454,
            "total_item": 2,
            "total_cant": 600
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar', { params: { idOperacion: 45336 } }).reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45336,
                    "nitem": 1,
                    "cant_afec": 0,
                    "prod_pcio_vta": '36.54',
                    "neto": '3332.25',
                    "ind_stock": 2
                },

            ],
            "total_importe": 0,
            "total_item": 0,
            "total_cant": 0
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar', { params: { idOperacion: 45337 } }).reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45337,
                    "nitem": 1,
                    "cant_afec": 0,
                    "prod_pcio_vta": '36.54',
                    "neto": '3332.25',
                    "ind_stock": 1
                },

            ],
            "total_importe": 0,
            "total_item": 0,
            "total_cant": 0
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar').reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45335,
                    "nitem": 1,
                    "cant_afec": 500,
                    "prod_pcio_vta": '36.54',
                    "neto": '3332.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45334,
                    "nitem": 1,
                    "cant_afec": 100,
                    "prod_pcio_vta": '36.54',
                    "neto": '36545.25',
                    "ind_stock": 0
                }

            ],
            "total_importe": 154454,
            "total_item": 2,
            "total_cant": 600
        }
    });

    mockAdapter.onGet('/AfectaVentas/Cantidad/CalculoSubtotales').reply(200, {
        data: {
            "solic_stock": 0,
            "total_importe": 12541.35,
            "total_item": 5,
            "total_cant": 150,
            "Resultado": 'T',
            "mens_error": "Item correcto",
        },
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/confirmar').reply(200, {
        data: {
            "solic_stock": 0,
            "total_importe": 12541.35,
            "total_item": 5,
            "total_cant": 150,
            "Resultado": 'T',
            "mens_error": "Item correcto",
        },
    });
}