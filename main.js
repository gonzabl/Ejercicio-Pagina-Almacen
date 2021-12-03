
$(document).ready(function() {
    $('#myTable').DataTable({
        responsive: true
    });
} );  



$(document).ready(function() {
    $('[data-bs-toggle="popover"]').popover({
        title: 'Producto',  html:true ,trigger:'focus',container:'td'
    });
});
