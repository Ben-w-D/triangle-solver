function calculate(){
	let sideA = undefined;
	if (document.getElementById("sideA").value != ""){
		sideA = document.getElementById("sideA").value;
	}
	let sideB = undefined;
	if (document.getElementById("sideB").value != ""){
		sideB = document.getElementById("sideB").value;
	}
	let sideC = undefined;
	if (document.getElementById("sideC").value != ""){
		sideC = document.getElementById("sideC").value;
	}
	let angleA = undefined;
	if (document.getElementById("angleA").value != ""){
		angleA = document.getElementById("angleA").value;
	}
	let angleB = undefined;
	if (document.getElementById("angleB").value != ""){
		angleB = document.getElementById("angleB").value;
	}
	let angleC = 90;



	if (angleA && !angleB){
		angleB = 90 - angleA;
	}
	else if (angleB && !angleA){
		angleA = 90 - angleB;
	}

	let displayA;
	let displayB;
	let displayC;

	if (sideA && sideB && !sideC){
		sideC = Math.pow(sideA, 2) + Math.pow(sideB, 2);
		if (!Number.isInteger(Math.sqrt(sideC))){
			displayC = "√" + sideC;
		}
		sideC = Math.sqrt(sideC);
	}
	else if (sideA && sideC && !sideB){
		sideB = Math.pow(sideC, 2) - Math.pow(sideA, 2);
		if (!Number.isInteger(Math.sqrt(sideB))){
			displayB = "√" + sideB;
		}
		sideB = Math.sqrt(sideB);
	}
	else if (sideB && sideC && !sideA){
		sideA = Math.pow(sideC, 2) - Math.pow(sideB, 2);
		if (!Number.isInteger(Math.sqrt(sideA))){
			displayA = "√" + sideA;
		}
		sideA = Math.sqrt(sideA);
	}

	angleA *= Math.PI/180
	angleB *= Math.PI/180
	angleC *= Math.PI/180

	if (angleA && angleB){
		if (sideA && !sideB){
			sideB = sideA / Math.tan(angleA);
		}
		if (sideA && !sideC){
			sideC = sideA/Math.sin(angleA);
		}

		if (sideB && !sideA){
			sideA = Math.tan(angleA) * sideB;
		}
		if (sideB && !sideC){
			sideC = sideB / Math.cos(angleA);
		}

		if (sideC && !sideA){
			sideA = Math.sin(angleA) * sideC;
		}
		if (sideC && !sideB){
			sideB = Math.cos(angleA) * sideC;
		}
	}

	else if (sideA && sideB && sideC){
		if (!angleA){
			angleA = Math.acos(sideB/sideC);
		}
		if (!angleB){
			angleB = Math.acos(sideA/sideC);
		}
	}

	else{
		document.getElementById('error').style.display = "inline";
	}


	angleA *= 180/Math.PI
	angleB *= 180/Math.PI
	angleC *= 180/Math.PI

	if (displayA) document.getElementById('sideA').value = displayA;
	else document.getElementById('sideA').value = sideA;
	
	if (displayB) document.getElementById('sideB').value = displayB;
	else document.getElementById('sideB').value = sideB;

	if (displayC) document.getElementById('sideC').value = displayC;
	else document.getElementById('sideC').value = sideC;

	document.getElementById('angleA').value = angleA;
	document.getElementById('angleB').value = angleB;
	document.getElementById('angleC').value = "Angle C: 90";

	document.getElementById('button').onclick = clear;
	document.getElementById('button').textContent = "Clear";

}

function clear(){
	document.getElementById('sideA').value = "";
	document.getElementById('sideB').value = "";
	document.getElementById('sideC').value = "";

	document.getElementById('angleA').value = "";
	document.getElementById('angleB').value = "";

	document.getElementById('button').onclick = calculate;
	document.getElementById('button').textContent = "Calculate";

	document.getElementById('error').style.display = "none";
}