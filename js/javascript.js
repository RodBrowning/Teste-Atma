
function isEmpty(obj){
	// Seleciona um ul para verificar se ja existe, caso contrario geraria duplicada
	var ul = obj.parentElement.querySelector('ul');
	// Remove espaços em branco
	var value = obj.value.trim();

	// Verifica se o campo esta vazio
	if(value == ""){
		// Aqui acontece se o campo estiver vazio
		// Altera a cor do campo para um ton de vermelho claro
		obj.style.backgroundColor = "#ffefef";

		// Se nao existir uma ul ela será criada
		// Se existir sera excluido o li dentro dela
		if(!ul){				
			var ul = document.createElement("ul");
		}else{
			ul.removeChild(ul.lastChild);
		}

		// Exibe a mensagem de erro
		var li = document.createElement("li");
		var txt = document.createTextNode("Este campo é obrigatorio");
		ul.appendChild(li);
		li.appendChild(txt);
		obj.parentElement.appendChild(ul);	
	}
}

// Limpa a mensagem de erro, se contem digitos, quando se começa a digitar
function clearError(obj){
	// Seleciona um ul 
	var ul = obj.parentElement.querySelector('ul');
	
	var value = obj.value.trim();
	// Remove a mensagem de erro se o campo não estiver em branco
	if(value != ""){
		// Verifica se ja existe para ser removido
		if(ul){
			// Remove a ul com a mensagem de erro
			obj.parentElement.removeChild(obj.parentElement.lastChild);
			// Muda a cor do campo pra branco
			obj.style.backgroundColor = "#fff";			
		}
	}else{
		// Exibe alerta de erro caso a tecla em branco sejam precionada de inicio
		isEmpty(obj);
	}		
}

// Verifica se os campos estão vazios para mandar um mensagem de erro
function checkEmpty(){
	var firstName = document.querySelector("#first-name").value.trim();
	var lastName = document.querySelector("#last-name").value.trim();
	var email = document.querySelector("#email").value.trim();
	var password = document.querySelector("#password").value.trim();
	var cPassword = document.querySelector("#cPassword").value.trim();
	var submit = document.querySelector("#submit");

	// Desabilita ou habilita o botão dependendo do estado dos campos
	if(firstName == "" || lastName == "" || email == "" || password == "" || cPassword == "" || password != cPassword){
		submit.disabled = true;
	}else{
		submit.disabled = false;
	}	
}

// Limpa o formulario e exibe mensagem de sucesso
document.querySelector("#submit").addEventListener("click", function(event){
    event.preventDefault();    
	
	var firstName = document.querySelector("#first-name").value = '';
	var lastName = document.querySelector("#last-name").value = '';
	var email = document.querySelector("#email").value = '';
	var password = document.querySelector("#password").value = '';
	var cPassword = document.querySelector("#cPassword").value = '';

	alert("Cadastro efetuado com sucesso. Obrigado");
});
