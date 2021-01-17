function cargarMesas () {
    $.ajax({
        url: 'stock.php',
        type: 'GET',
        success: function (response) {

            $('#stock').html(response);

            let producto = JSON.parse(response);
            let txt = `<thead>
                <tr>
                    <th>ID</th>
                    <th>Referencia</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Subcategoría</th>
                    <th>Stock</th>
                    <th>Editar</th>
                </tr>
            </thead>`; 

            console.table(producto);

            let y = 1;

            for (x in producto) {

                txt += `<tr>
                            <td>${y}</td>
                            <td>${producto[x].idProd}</td>
                            <td>${producto[x].nombreProd}</td>
                            <td>${producto[x].precioProd}</td>
                            <td>${producto[x].categProd}</td>
                            <td>${producto[x].subcaProd}</td>
                            <td>${producto[x].stockProd}</td>
                            <td><i class="edit icon"></i></td>
                        </tr>`;
                    y++;
            }


            $('#stock').html(txt);
            $('#stock').DataTable();
        }   
    })
}

cargarMesas ();