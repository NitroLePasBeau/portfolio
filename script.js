document.addEventListener('DOMContentLoaded', function() {
    var openModalBtn = document.getElementById('openModalBtn');
    var modal = document.getElementById('myModal');
    var closeModalBtn = document.getElementsByClassName('close')[0];
    var addRealisationBtn = document.getElementById('addRealisationBtn');
    var newRealisationInput = document.getElementById('newRealisationInput');
    var tableBody = document.getElementById('tableBody');

    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    addRealisationBtn.addEventListener('click', function() {
        var newRealisation = newRealisationInput.value.trim();
        if (newRealisation !== '') {
            var newRow = tableBody.insertRow(-1);
            var cell = newRow.insertCell(0);
            cell.textContent = newRealisation;
            modal.style.display = 'none';
            newRealisationInput.value = '';
        }
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
