
$(document).on("click","#calcular",function(){

  var sexo = $("#sexo").val();
  var peso = $("#peso").val();
  var altura = $("#altura").val();
  var idade = $("#idade").val();
  var nivelAtividade = $("#nivelAtividade").val();
  var Resultado = parseFloat(sexo);

  if (sexo == "masculino") {
    Resultado = nivelAtividade * (66 + (13, 7 * peso + (5 * altura - (6, 8 * idade))));
  }
  else if (sexo == "feminino") {
    Resultado = nivelAtividade * (655 + (13, 7 * peso + (5 * altura - (6, 8 * idade))));
  }

  $("#resultado").val(calcular);

  
});
var resertar;

$(document).on("click", "#resertar", function () {

  var peso = $("#peso").val("")=0;
  var altura = $("#altura").val("")=0;
  var idade = $("#idade").val("")=0;
  var Resultado = $("#Resultado").val("")= 0;
  var sexo = $("#sexo").val("")=null;
});  