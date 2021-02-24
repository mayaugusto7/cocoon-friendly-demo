$(function () {
    $("#owner a.add_fields")
        .data("association-insertion-position", 'before')
        .data("association-insertion-node", 'this');

    let $owner = $("#owner");

    $owner.bind('cocoon:after-insert', () => {
        $("#owner_from_list").hide();
        $("#owner a.add_fields").hide();
    });

    $owner.bind('cocoon:after-remove', () => {
        $("#owner_from_list").show();
        $("#owner a.add_fields").show();
    })
});