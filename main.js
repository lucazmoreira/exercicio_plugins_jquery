$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  $("#cadastro-form").submit(function (event) {
    event.preventDefault();

    var formData = $(this).serialize();
    console.log(formData);
  });
});
