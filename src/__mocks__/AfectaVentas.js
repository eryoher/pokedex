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
                    "cant_afec": 45,
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