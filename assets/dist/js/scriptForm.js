document.addEventListener('DOMContentLoaded', function() {
    function handleSubmit(event) {
      event.preventDefault();

      var nomeCompleto = document.getElementById('nomeCompleto').value;
      var dataNascimento = document.getElementById('dataNascimento').value;
      var telefone = document.getElementById('telefone').value;

      window.location.href = './assets/templates/mapaNumerologico.html?nome=' + encodeURIComponent(nomeCompleto) + '&data=' + encodeURIComponent(dataNascimento) + '&telefone=' + encodeURIComponent(telefone);
    }

    var formulario = document.getElementById('formulario');

    if (formulario) {
      formulario.addEventListener('submit', handleSubmit);
    }
  });