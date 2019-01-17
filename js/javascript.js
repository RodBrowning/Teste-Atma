// Variaveis de controle dos campos
var nome = false;
var sobreNome = false;
var email = false;
var validPassword = false;
var validForm = false;

var controle;

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
function validaCampoTxt(obj, campo, msgErro){
	switch(campo){
		case "nome" : case "sobreNome" : controle = hasText(obj); break;		
		case "email": controle = validEmail(obj); break;
	}

	if(!controle){
		exibeErro(obj,msgErro);
	}else{
		retiraErro(obj);
	}

	switch(campo){
		case "nome" : nome = controle; break;		
		case "sobreNome": sobreNome = controle; break;
		case "email":  email = controle; break;
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