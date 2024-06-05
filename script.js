function loader(status) {
    if (status) {
        var div = document.createElement('div');
        div.id = "loader";
        document.body.appendChild(div);
    }
    else {
        document.getElementById("loader").remove();
        document.getElementById("main-container").classList.remove('d-none');
    }
}
setTimeout(() => {
    loader(false);
}, 4000);