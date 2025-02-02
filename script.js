// const btn = document.getElementById('btn');
const output = document.getElementById('output');


function result(){
	
	const numberInput = Number(document.getElementById('ip').value);
	// alert(numberInput)
	new Promise((resolve, reject)=>{
		setTimeout(()=>{
			output.textContent= `Result: ${numberInput}`
			resolve(numberInput) 
		},2000)
	}).then((numberInput)=>{
		return new Promise((resolve, reject)=>{
           setTimeout(()=>{
			let multiplay = 2*numberInput
			   // alert(multiplay)
			output.textContent = `Result: ${multiplay}`
			resolve(multiplay)
		},1000)
		})
	}).then((multiplay)=>{
		return new Promise((resolve, reject)=>{
			 setTimeout(()=>{
				 let subtracts = multiplay - 3;
				 // alert(subtracts)
				 output.textContent = `Result: ${subtracts}`
			     resolve(subtracts)
			 },1000)
		 })
	}).then((subtracts)=>{
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{
				let divide = subtracts/2;
				output.textContent = `Result: ${divide}`;
				resolve(divide);
			},1000)
		})
	}).then((divide)=>{
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{
				let add = divide + 10;
				output.textContent = `Result: ${add}`
				resolve(add)
			},1000)
		})
	}).then((add)=>{
		output.textContent = `Final Result: ${add}`
	})
	
}

document.getElementById('btn').addEventListner('click', result());
