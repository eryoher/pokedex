export default (mockAdapter) => {

    mockAdapter.onGet('/Items/carga_item_vta', { params: { "niprod": 123456 } }).reply(200, {
        data: {
            "solic_stock": 0,
            "total_importe": 12541.35,
            "total_item": 5,
            "total_cant": 150
        }
    });


    mockAdapter.onGet('/Items/carga_item_vta', { params: { "idOperacion": 221223, "niprod": 36575 } }).reply(200, {
        data: {
            "solic_stock": 0,
            "total_importe": 25541,
            "total_item": 7,
            "total_cant": 500
        }
    });

    mockAdapter.onGet('/Items/carga_item_vta', { params: { "idOperacion": 221223, "niprod": 36574 } }).reply(200, {
        data: {
            "solic_stock": 0,
            "total_importe": 15541.35,
            "total_item": 6,
            "total_cant": 250
        }
    });
}