function ajaxCall() {
    $.ajax({
        url,
        success: display,
        error: throwError
    });

    function display(something) {
    }

    function throwError(err) {

    }
}

function someFun() {
    $.get(someServiceURL + '.json')
        .then(displayContent)
        .catch(displayError);
}