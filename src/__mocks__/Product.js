export default (mockAdapter) => {

    mockAdapter.onGet('/Productos/precio').reply(200, {
        data: {
            "prod_pcio_vta": '3245.05'
        }
    });

    mockAdapter.onGet('/Productos/busqueda', { params: { desc_prod: 'Desodorante' } }).reply(200, {
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
                    "unid_v": "PK",
                    "base_v": 1,
                    "ind_stock": 2,
                    "precio_unit": '3025',
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
                    "cod_prod": "PERSEL00455",
                    "desc_prod": "Desodorante Axe musk",
                    "codbarra": "07795555225225",
                    "unid_v": "CJ",
                    "base_v": 1,
                    "ind_stock": '0',
                    "precio_unit": '3256',
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
                },
                {
                    "niprod": 36576,
                    "cod_prod": "PERSEL00456",
                    "desc_prod": "Desodorante Axe musk 3",
                    "codbarra": "07795555225226",
                    "unid_v": "PK",
                    "base_v": 1,
                    "ind_stock": '0',
                    "precio_unit": '3236',
                    "id_imagen": 77654,
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


    mockAdapter.onGet('/Productos/busqueda', { params: { cod_prod: 'PERSEL00455' } }).reply(200, {
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
                    "niprod": 36575,
                    "cod_prod": "PERSEL00455",
                    "desc_prod": "Desodorante Axe musk",
                    "codbarra": "07795555225225",
                    "unid_v": "CJ",
                    "base_v": 1,
                    "ind_stock": '0',
                    "precio_unit": '3256',
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


    mockAdapter.onGet('/Productos/carro').reply(200, {
        data: {
            "Resultado": [
                {
                    "resultado": '.T.'
                }],
            "total_importe": "4500",
            "total_item": "100",
            "total_cant ": "2",
            "total_margen_bruto": "25%",
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
                    "id": 36574,
                    "niprod": 36574,
                    "cod_prod": "PERSEL00454",
                    "desc_prod": "Desodorante Axe musk",
                    "codbarra": "07795555225225",
                    "unid_v": "UN",
                    "cantidad": "100",
                    "base_v": 1,
                    "ind_stock": 2,
                    "precio_unit": 32.56,
                    "neto": 32560,
                    "fec_entrega": "19/10/2019",
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
                }

            ]
        }
    });

    mockAdapter.onGet('/Productos/involvement').reply(200, {
        data: {
            "Resultado": [
                {
                    "resultado": '.T.'
                }],
            "total_importe": "4500",
            "total_item": "100",
            "total_cant ": "2",
            "total_margen_bruto": "25%",
            "Productos": [
                {
                    "id": 36574,
                    "niprod": 36574,
                    "cod_prod": "PERSEL00454",
                    "desc_prod": "Desodorante Axe musk",
                    "comprobante": "NVSA 000000306",
                    "unid_v": "UN",
                    "cantidad": "100",
                    "cant_afect": 0,
                    "base_v": 1,
                    "ind_stock": 2,
                    "precio_unit": 32.56,
                    "neto": 32560,
                    "saldo": 50,
                    "fec_entrega": "19/10/2019",

                },
                {
                    "id": 36575,
                    "niprod": 36575,
                    "cod_prod": "PERSEL00455",
                    "desc_prod": "Desodorante Axe musk",
                    "comprobante": "NVSA 000000305",
                    "unid_v": "UN",
                    "cantidad": "100",
                    "cant_afect": 0,
                    "base_v": 1,
                    "ind_stock": 2,
                    "precio_unit": 32.56,
                    "neto": 32560,
                    "saldo": 50,
                    "fec_entrega": "25/10/2019",

                }
            ]
        }
    });
}