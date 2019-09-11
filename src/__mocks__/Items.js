export default (mockAdapter) => {

    mockAdapter.onGet('/Items/carga_item_vta', { params: { "niprod": 123456 } }).reply(200, {
        data: {
            "solic_stock": 0,
            "total_importe": 0.00,
            "total_item": 0,
            "total_cant": 0
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