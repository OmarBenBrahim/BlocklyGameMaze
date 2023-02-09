//show button to go back to the home page from page list of cours
var element = document.getElementById('goback');
element.onclick = function (event) {
	sessionStorage.removeItem('idModule');
	document.getElementById('goback').classList.add('d-none');
	document.getElementById('displayOneModule').classList.add('d-none');
	document.getElementById('main_modules').classList.remove('d-none');
	document.getElementById('questions').innerHTML = '';

	//hide filtre btn
	document.getElementById('filterbtn').classList.remove('d-none');
};

//run when the user click on module
// hide the modules and display the module the user choise
// and all the cours in it
function affichecours(id_module) {
	/* var idModule = coursname.substring(0, coursname.length - 1);
        if(idModule[(idModule.length)-1] != "."){
          var idModule = idModule.substring(0, idModule.length - 1);
        } */
	sessionStorage.setItem('idModule', id_module);
	document.getElementById('goback').classList.remove('d-none');
	//display btn filter
	document.getElementById('filterbtn').classList.add('d-none');
	document.getElementById('main_modules').classList.add('d-none');
	document.getElementById('displayOneModule').classList.remove('d-none');
	// filtre the modules by the id passed in parmatre
	var arr_current_module = modules.filter(filtrerByAll);
	function filtrerByAll(obj) {
		if (obj.id == id_module) {
			return true;
		} else {
			return false;
		}
	}
	//the filtre return an arr with 1 object and i need object not array
	var current_module = arr_current_module[0];
	console.log(current_module);

	// diplay the module user click on
	afficheOneModule(current_module);
	//diplay the cours exist on module
	afficheOneModuleCours(current_module);

	function afficheOneModule(module) {
		const demo = document.getElementById('displayCours');
		demo.innerHTML = '';
		var div = document.createElement('div');
		var html = `
            <div class="card mb-3 rounded-3 onecard shadow-lg" style="min-height: 300px">
                <div class="align-items-center justify-content-between">
                    <div style="text-align:center;" class="m-1">
                        <img class='img-fluid rounded-3' style="width: 250px; " src="module-img/${
													module.img
												}">
                    </div>
                <div>
                <div class="card-body text-center">
                        <h5 class='card-title text-center mt-1 mb-4'>${
													module.titre
												}</h5>
                        <div class="row">
                        <div class="col-6">
                            <p class ="fw-bold text-decoration-underline mb-2" >${getLabelConceptProgramation()}</p>
                    
                    `;
		module.Concept_programmation[lang].forEach((concept) => {
			html += `<p class='ms-3 mb-2 ms-2 me-2 link-info' >${concept}</p>`;
		});
		html += `</div>
                        <div class='col border-start'>`;
		html += `<p class ='fw-bold text-decoration-underline mb-2 text-decoration-none' >${getLabelBlockUtiliser()}</p>`;
		module.blocks[lang].forEach((block) => {
			html += `<p class='ms-2 me-2 link-info' >${block}</p>`;
		});
		html += `		</div>
                    </div>
                    </div>
                </div>
        `;
		div.innerHTML = html;
		demo.appendChild(div);
	}

	function afficheOneModuleCours(module) {
		var indexCours = 0;
		//alert(module.titre);
		module.cours.forEach((cours) => {
			indexCours++;
			cours_id = current_module.id + cours.id;
			//if (indexCours < 2) {
				var html = `
                <h2 class="accordion-header" id="heading${cours.id}">
                    <div class="d-flex">
                    <button  
					class='accordion-button btn btn-primary collapsed mt-3 rounded-2 fw-bold'	
					type="button"
					data-bs-toggle="collapse" 
					data-bs-target="#id-${cours.id}" aria-expanded="false">
                     <p class="m-0"> ${
						cours.titre ? indexCours + ' - ' + cours.titre:
						(lang == 'fr') ? 'Série N° ' + indexCours :
						(lang == 'en') ? 'Serie N° ' + indexCours :
						(lang == 'de') ? 'Serie N° ' + indexCours :
						' درس عدد ' + indexCours
					}
					<div class="ms-3">
					${
						indexCours > 15 ? '<i class="bi bi-lock-fill"></i>' :'<i class="bi bi-unlock-fill"></i>'
					}
					</div>
					${
						(cours.timeout && lang=="fr") ? "<div class='me-2 ms-5 text-info'> Test : "  + cours.timeout +" min </div>":
						(cours.timeout && (lang=="en" || lang =="de")) ? "<div class='me-2 ms-5 text-info'> Exam : "  + cours.timeout +" min </div>":
						(cours.timeout && lang=="ar") ? "<div class='me-2 ms-5 text-info'> اختبار : "  + cours.timeout +" دقيقة </div>": ""
					}
					</p>
                    </button>
                    </div>
                  </h2>
                  <div id="id-${cours.id}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#questions">
                    <div class="accordion-body- p-2">`;
						html += afficheCoursExercice(cours, cours_id, module.GameName,indexCours);
						html += `
                    </div>
                </div>`;
			const demo = document.getElementById('questions');
			var div = document.createElement('div');
			div.className = 'accordion-item';
			div.id = 'flush-headingOne';
			div.innerHTML = html;
			demo.appendChild(div);
		});
	}
}

//on the way to display cours send to this function
// object cours and the id to create the button relate the platform with gamepade blockly
//and return as string
function afficheCoursExercice(cours, cours_id, GameName,indexCours) {
	console.log(cours);
	console.log('cours_id : ', cours_id);
	var btnHTML = '';
	var nbrExercice = cours.nbrExercice;
	for (i = 1; i <= nbrExercice; i++) {
		if (localStorage.getItem(cours_id + '.' + i)) {
			btnHTML +=
				`
		<button  onclick="lodeCoursPublic(\`` + cours_id + `\`,` + i +`\,` +cours.nbrExercice +`\,`+ `\`` + GameName + `\`);" type="button" class="btn btn-success btn-md m-2 rounded-circle ${cours_id}.${i}" >${i}</button>`;
		} else {
			btnHTML +=
				`
		<button  onclick="lodeCoursPublic(\`` + cours_id + `\`,` + i +`\,` +cours.nbrExercice +`\,`+ `\`` + GameName + `\`);" type="button" class="btn btn-outline-secondary btn-md m-2 rounded-circle ${cours_id}.${i}" >${i}</button>`;
		}
	}
	return btnHTML;
}

function lodeCoursPublic(coursname, level, nbrExercice , GameName) {
	console.log(coursname, level);
	sessionStorage.setItem('nbrExercice', nbrExercice);
	sessionStorage.setItem('coursname', coursname);
	sessionStorage.setItem('level', level - 1);
	if(GameName ==="maze"){
		setTimeout(
			(location.href = 'cours/maze/index.html?lang=' + lang),
			1000
		);
	}else if(GameName =="turtle"){
		setTimeout(
			(location.href = 'cours/turtle/turtle.html?lang=' + lang + '&level=' +level),
			1000
		);
	}
}

function CreateCoursName(indexCours) {
	(lang == 'fr') ? 'Série N°' + indexCours :
	(lang == 'en') ? 'Serie N°' + indexCours :
	(lang == 'de') ? 'Serie N°' + indexCours :
	' درس عدد ' + indexCours;
}
