function fillModal(event) {
    let deleteUrl = event.relatedTarget.dataset.deleteUrl;
    let name = event.relatedTarget.dataset.name;
    
    let title = event.target.querySelector(".modal-title");
    title.innerHTML = "Удалить этого пользователя? </br>" + name;
    
    let modalForm = event.target.querySelector("form");
    modalForm.action = deleteUrl;
}

let closeModalButtons = document.querySelectorAll('.close,.btn-secondary');
closeModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        $('#delete-modal').modal('hide'); 
    });
});

window.onload = function () {
    let deleteModal = document.getElementById("delete-modal");
    deleteModal.addEventListener("show.bs.modal", fillModal);

    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            $('#delete-modal').modal('hide');
        });
    });
};