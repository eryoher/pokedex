export default (mockAdapter) => {

    mockAdapter.onGet('/Productos/precio').reply(200, {
        data: {
            "prod_pcio_vta": 35.43
        }
    });

    mockAdapter.onGet('/Productos/busqueda').reply(200, {
        data: {
            "page_number": 1,
            "page_size": 30,
            "total_count": 126,
            "Resultado": [
                {
                    "resultado": 'ok'
                }
            ],
            "bonificaciones": [
                {
                    "tipo_bonif": "P",
                    "cod_bonif": "PL02",
                    "desc_bonif": "Lapices Faber"
                },
                {
                    "tipo_bonif": "P",
                    "cod_bonif": "PL48",
                    "desc_bonif": "Lapiz cera"
                },
                {
                    "tipo_bonif": "C",
                    "cod_bonif": "UN12x10",
                    "desc_bonif": "Oferta Faber"
                },
            ],
            "Productos": [
                {
                    "niprod": 36574,
                    "cod_prod": "PERSEL00454",
                    "desc_prod": "Desodorante Axe musk",
                    "codbarra": "07795555225225",
                    "unid_v": "UN",
                    "base_v": 1,
                    "ind_stock": 2,
                    "precio_unit": 32.56,
                    "id_imagen": 77656,
                    "presentaciones": [
                        {
                            "cod_pres": "CJ",
                            "desc_pres": "Cajax10UN",
                            "cant": 10,
                            "codbarra": "07977688566503",
                        },
                        {
                            "cod_pres": "PK",
                            "desc_pres": "Packx100UN",
                            "cant": 100,
                            "codbarra": "07977688566504",
                        }
                    ],
                    "Bonificaciones": [
                        {
                            "tipo_bonif": "P",
                            "cod_bonif": "PL02",
                            "desc_bonif": "Lapices Faber",
                        },
                        {
                            "tipo_bonif": "C",
                            "cod_bonif": "UN12x10",
                            "desc_bonif": "Oferta Faber"
                        }
                    ],
                    "Atributos": [
                        {
                            "catributo": "Marca",
                            "desc_atributo": "Marca",
                            "cod_dato": "34",
                            "desc_dato": "Faber"
                        }
                    ]
                },
                {
                    "niprod": 36575,
                    "cod_prod": "PERSEL00454",
                    "desc_prod": "Desodorante Axe musk",
                    "codbarra": "07795555225225",
                    "unid_v": "UN",
                    "base_v": 1,
                    "ind_stock": 2,
                    "precio_unit": 32.56,
                    "id_imagen": 77656,
                    "presentaciones": [
                        {
                            "cod_pres": "CJ",
                            "desc_pres": "Cajax10UN",
                            "cant": 10,
                            "codbarra": "07977688566503",
                        },
                        {
                            "cod_pres": "PK",
                            "desc_pres": "Packx100UN",
                            "cant": 100,
                            "codbarra": "07977688566504",
                        }
                    ],
                    "Bonificaciones": [
                        {
                            "tipo_bonif": "P",
                            "cod_bonif": "PL02",
                            "desc_bonif": "Lapices Faber",
                        },
                    ],
                    "Atributos": null
                }
            ]
        }

    });

}