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
                    "precio_unit": 32.56,
                    "cant_pend": 100,
                    "cant_afec": 0,
                    "cant_saldo": 100,
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
                    "precio_unit": 32.56,
                    "cant_pend": 500,
                    "cant_afec": 0,
                    "neto": '1628, 00'
                }
            ]
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar').reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 574,
                    "nitem": 1,
                    "cant_afec": 100,
                    "prod_pcio_vta": '36.54',
                    "neto": 3654,
                    "ind_stock": 0
                },
                {
                    "nimovcli": 575,
                    "nitem": 3,
                    "cant_afec": 20,
                    "prod_pcio_vta": 100,
                    "neto": 2000,
                    "ind_stock": 0
                }
            ],
            "total_importe": 5654,
            "total_item": 2,
            "total_cant": 120
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