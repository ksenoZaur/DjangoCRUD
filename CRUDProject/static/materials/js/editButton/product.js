function changeAmountMaterial ( index ) {
    var dataString = "id=" + index +"&amount=" + document.getElementById(index).value ;

    $.ajax({
        type: "POST",
        url: "/product/" + "1" + "/editPosition",
        data: dataString,
        cache: false,
        success: function(html)
        {
            alert(html);
            var result = html.toString();
            if( result.localeCompare("Element deleted!") == 0) {

                var el = document.getElementById('position' + index);
                el.parentNode.removeChild(el);

            }
        }
    });

}

function addInMap( idMaterial, idMap ){
    var dataString = "idMaterial=" + idMaterial +"&idMap=" + idMap ;
    $.ajax({
        type: "POST",
        url: "/technologyMap/" + "addMaterial",
        data: dataString,
        cache: false,
        success: function(html)
        {
            document.getElementById("map").innerHTML += html;
        }
    });
}

function saveInfo( id ) {

    let title = document.getElementById("title").value;
    let code = document.getElementById("code").value;
    let balance = document.getElementById("balance").value;

    $.ajax({
        type: "POST",
        url: "/materials/" + id + "/edit/",
        data: {'title': title, 'code': code, 'balance': balance},
        // cache: false,
        success: function(html)
        {
            alert(html);
        }
    });
}

function addPositionMap( id ) {

    // alert(id);

    var title = document.getElementById("title").value;
    var code = document.getElementById("code").value;
    var balance = document.getElementById("balance").value;
    var description = document.getElementById("description").value;

    var dataString = "title=" + title + "&code=" + code +
        "&balance=" + balance + "&description=" + description;

    $.ajax({
        type: "POST",
        url: "/product/" + id + "/edit",
        data: dataString,
        cache: false,
        success: function(html)
        {
            alert(html);
        }
    });
}

function deleteMaterial(id) {
    // alert(id);
    $.ajax({
        type: "POST",
        url: "/materials/remove/" + id + "/",
        data: {'id': id},
        // cache: false,
        success: function(html)
        {
            if( html.toString() === '1' ){
                // alert("Запись удалена");
                document.getElementById(id).remove();
                document.getElementById(id).remove();
            } else {
                alert("Собака");
            }
        }
    });

}

function create_material() {

    let title = document.getElementById("title").value;
    let code = document.getElementById("code").value;
    let balance = document.getElementById("balance").value;
    let img = document.getElementById("address").value;

    $.ajax({
        type: "POST",
        url: "/materials/create/new/",
        data: {'title': title, 'code': code, 'balance': balance, 'img': img,},
        // cache: false,
        success: function(html)
        {
            // alert(html);
            $('body').html( html );
            window.location = "/materials/"
        }
    });
}

