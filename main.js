let addToDoButton = document.getElementById('tab');
let todocontainer = document.getElementById('todocontainer');
let input = document.getElementById('input');

addToDoButton.addEventListener('click', function(){
	var para = document.createElement('p');
	para.classList.add('paragraph-styling');
	para.innerText = input.value;
	todocontainer.appendChild(para);
	input.value = "";
	para.addEventListener('click', function(){
		para.style.textDecoration = "line-through";
	})
	para.addEventListener('dblclick', function(){
		todocontainer.removeChild(para);
	})
})