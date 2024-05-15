$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n, i) {
        data[n['name']] = n['value'];
    });

    console.log(data);

    var request = {
        url: 'http://localhost:3000/api/users/' + data.id, // Properly concatenate data.id
        method: "PUT",
        data: data
    };

    $.ajax(request).done(function(response){
        alert("DATA UPDATED SUCCESSFULLY");
    });
});
if (window.location.pathname === "/") {
    var $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");

        var request = {
            url: 'http://localhost:3000/api/users/' + id, // Properly concatenate id with the URL string
            method: "DELETE"
        };
        if (confirm("Do you really want to delete?")) {
            $.ajax(request).done(function(response) {
                alert("Data deleted successfully");
                location.reload();
            });
        }
    });
}


