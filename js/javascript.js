// Variaveis de controle dos campos
var nome = false;
var sobreNome = false;
var email = false;
var validPassword = false;
var validForm = false;


// Verifica estado do campo
function hasText(obj){
	var value = obj.value.trim();
	if(value == ''){
		return false;
	}else{
		return true;
	}
}

function validEmail(obj){
	var text = hasText(obj);
	if(text){
		var expressaoRegular = /[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/;
		var expression = new RegExp(expressaoRegular);
		var test = expression.test(obj.value.trim());
		if(test){
			return true
		}else{
			return false
		}
	}else{
		return false
	}
}

function checkPassword(){
	var password = document.querySelector("#password");
	var cPassword = document.querySelector("#cPassword");
	var msgErro = "Os passwords devem ser iguais";
	if(hasText(password) && hasText(cPassword)){
		if(password.value.trim() == cPassword.value.trim()){
			validPassword = true;			
		}else{
			validPassword = false;
		}
	}else{
		validPassword = false;		
	}
	if(validPassword){
		retiraErro(password);
		retiraErro(cPassword);
	}else{
		exibeErro(password,msgErro);
		exibeErro(cPassword,msgErro);
	}
}


// Validação dos campos
function validaNome(obj){
	nome = hasText(obj);
	if(!nome){
		exibeErro(obj,"Este campo é obrigatorio");
	}else{
		retiraErro(obj);
	}
	validaForm();
}

function validaSobrenome(obj){
	sobreNome = hasText(obj);
	if(!sobreNome){
		exibeErro(obj,"Este campo é obrigatorio");
	}else{
		retiraErro(obj);
	}
	validaForm();
}

function validaEmail(obj){
	email = validEmail(obj);
	if(!email){
		exibeErro(obj,"Email invalido");
	}else{
		retiraErro(obj);
	}
	validaForm();
}

function validaPassword(obj){
	checkPassword();	
	validaForm();
}


// Validação do formulario
function validaForm(){
	if( nome &&
		sobreNome &&
		email &&
		validPassword
		){
		validForm = true;
		liberaBotao();
	}else{
		validForm = false;
		liberaBotao();
	}
}

function liberaBotao(){
	if(validForm){
		submit.disabled = false;
	}else{
		submit.disabled = true;
	}
}

// Mensagens de erro
function exibeErro(obj, msg){
	var ul = obj.parentElement.querySelector('ul');	
	// Aqui acontece se o campo estiver vazio
	// Altera a cor do campo para um ton de vermelho claro
	obj.style.backgroundColor = "#ffefef";

	// Se nao existir uma ul ela será criada
	// Se existir sera excluido o li dentro dela
	if(ul){
		ul.removeChild(ul.lastChild);			
	}else{	
		var ul = document.createElement("ul");
	}

	// Exibe a mensagem de erro
	var li = document.createElement("li");
	var txt = document.createTextNode(msg);
	ul.appendChild(li);
	li.appendChild(txt);
	obj.parentElement.appendChild(ul);	
}

function retiraErro(obj){
	var ul = obj.parentElement.querySelector('ul');
	if(ul){
		// Remove a ul com a mensagem de erro
		obj.parentElement.removeChild(obj.parentElement.lastChild);
		// Muda a cor do campo pra branco
		obj.style.backgroundColor = "#fff";			
	}
}

// Limpa o formulario e exibe mensagem de sucesso
function send(){
	event.preventDefault();    
	document.querySelector('form').reset();
	alert("Cadastro efetuado com sucesso. Obrigado");
}








/*

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

document.querySelector("#submit").addEventListener("click", function(event){
    event.preventDefault();    
	
	var firstName = document.querySelector("#first-name").value = '';
	var lastName = document.querySelector("#last-name").value = '';
	var email = document.querySelector("#email").value = '';
	var password = document.querySelector("#password").value = '';
	var cPassword = document.querySelector("#cPassword").value = '';

	alert("Cadastro efetuado com sucesso. Obrigado");
});
*/