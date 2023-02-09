
var arrFilterModules = [];

function afficheModules(modules) {
    //alert("old")
    //Remove the duplcate object from array
    var modules = modules.filter(
        (arr, index, self) => index === self.findIndex((t) => t.id === arr.id)
    );

    const demo = document.getElementById('ModulesContainer');
    demo.innerHTML = '';
    var indexModule = 0;
    modules.forEach((module) => {
        if(module.isPublic){
            indexModule++;
            var div = document.createElement('div');
            div.className = 'col-md-12 col-lg-4 col-sm-12';
            let html =
            `
            <div class="card mb-3 rounded-3 onecard shadow-lg" style="min-height: 300px">
                <div class="align-items-center justify-content-between">
                    <div style="text-align:center; min-width: 200px;" class="m-1">
                        <a href="#">
                        <img onclick="affichecours(\`` +
                            module.id +
                            `\`);" class='img-fluid rounded-3' style="width: 250px; " src="module-img/${
                                module.img
                            }"></a>
                    </div>
                    <div>
                        <div class="card-body">
                            <h5 class='card-title text-center mt-1 mb-4'>
                                <a class="card-title text-center mt-1 mb-4" data-bs-toggle="collapse" href="#collapseModule${indexModule}" role="button" aria-expanded="false" aria-controls="collapseExample">
                                ${
                                    module.titre
                                } <i class="bi bi-caret-down-fill"></i>
                                </a>
                            </h5>
                            
                            <div class="collapse" id="collapseModule${indexModule}">
                                <p class='Coursdesc ms-2 me-2'>${module.desc}</p>
                                <div class="row">
                                    <div class="col-6">
                                        <p class ="fw-bold mb-2" >${getLabelConceptProgramation()}</p>
                                        <ul>
                                            `;
                                            module.Concept_programmation[lang].forEach((concept) => {
                                                html += `<li class='ms-3 mb-2 ms-2 me-2' >${concept}</li>`;
                                            });
                                            html += `
                                        </ul>
                                    </div>
                                    <div class='col border-start'>`;
                                        html += `<p class ='mb-2 fw-bold ' >${getLabelBlockUtiliser()}</p>
                                        <ul>`;
                                            module.blocks[lang].forEach((block) => {
                                            html += `<li class='ms-2 me-2' >${block}</li>`;
                                            });
                                            html += `
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            div.innerHTML = html;
            demo.appendChild(div);
        }
    });

}

function filterModules() {
    //alert("i")
    arrFilterModules = [];
    /* checkbox Niveaux */
    const n0 = document.getElementById('niveaux_0');
    const n1 = document.getElementById('niveaux_1');
    const n2 = document.getElementById('niveaux_2');
    const n3 = document.getElementById('niveaux_3');
    /* checkbox matiere */
    const tn = document.getElementById('matiere_TN');
    const it = document.getElementById('matiere_IT');
    const fr = document.getElementById('matiere_FR');
    const en = document.getElementById('matiere_EN');
    const db = document.getElementById('matiere_DB');

    /* checkbox concept */
    const move = document.getElementById('concept_move');
    const debug = document.getElementById('concept_debug');
    const repeat = document.getElementById('concept_repeat');
    const numbers = document.getElementById('concept_number');
    const logic = document.getElementById('concept_logic');
    const checkboxfunction = document.getElementById('concept_function');

    //loop evry module exist and filter it with the function filterByAll
    var arrFilterModules = modules.filter(filtrerByAll);

    //this is to return true if the module pass to him is equal of one of the checkbox the user checked
    function filtrerByAll(obj) {
        var test = false;
        //test if the current module.niveau have an data == to data came from checkbox
        if (
            (n0.checked && obj.niveaux == 0) ||
            (n1.checked && obj.niveaux == 1) ||
            (n2.checked && obj.niveaux == 2) ||
            (n3.checked && obj.niveaux == 3)
        ) {
            test = true;
        }
        //if all checkbox of niveaux scolaire not checked display all Modules
        else if (!n0.checked && !n1.checked && !n2.checked && !n3.checked) {
            test = true;
        }
        //if the system get this contion that mean
        //the user check level and there is no Modules in that niveaux itlaire
        else {
            test = false;
        }

        //after pass with niveau scolaire and find if exist or not we complete the filter by matiere
        //first think by test if there is Modules.matiere == current object
        if (
            test &&
            ((tn.checked && obj.matiere == 'TN') ||
                (it.checked && obj.matiere == 'IT') ||
                (fr.checked && obj.matiere == 'FR') ||
                (en.checked && obj.matiere == 'EN') ||
                (db.checked && obj.matiere == 'DB'))
        ) {
            test = true;
        }
        //if there is no matiere checked the system sould display all module with level checked if there is one
        else if (test && !tn.checked && !it.checked && !fr.checked && !db.checked && !en.checked) {
            test = true;
        }
        // this module.matiere != to the checkbox the user checked
        else {
            test = false;
        }
        //concept informatique filter
        if (
            test &&
            ((move.checked && obj.Concept_info.includes('move')) ||
                (debug.checked && obj.Concept_info.includes('debug')) ||
                (repeat.checked && obj.Concept_info.includes('repeat')) ||
                (numbers.checked && obj.Concept_info.includes('numbers')) ||
                (checkboxfunction.checked && obj.Concept_info.includes('function')) ||
                (logic.checked && obj.Concept_info.includes('logic')))
        ) {
            test = true;
        } else if (
            test &&
            !move.checked &&
            !repeat.checked &&
            !debug.checked &&
            !numbers.checked &&
            !checkboxfunction.checked &&
            !logic.checked
        ) {
            test = true;
        } else {
            test = false;
        }
        return test;
    }
    //after filter the Modules display the filtred module
    afficheModules(arrFilterModules);
}

function getLabelConceptProgramation() {
    if (lang == 'fr') return 'Concepts de Programmation';
    else if (lang == 'en') return 'Programming Concepts';
    else if (lang == 'de') return 'Konzept der Programmierung';
    else return 'المفاهيم البرمجية';
}

function getLabelBlockUtiliser() {
    if (lang == 'fr') return 'Blocks utilisés';
    else if (lang == 'en') return 'Used Blocks';
    else if (lang == 'de') return 'Gebrauchte Blöcke';
    else return 'الكتل المستخدمة';
}