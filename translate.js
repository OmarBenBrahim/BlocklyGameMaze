

// update the checkers
//if (start) document.getElementById('start_check').checked = true
//if (categories) document.getElementById('categories_check').checked = true

//load DMO for translate
const titreNiveaux = document.getElementById("titreNiveaux");

//Education Level Checkbok
/* const label_niveaux_1 = document.getElementById("label_niveaux_1");
const label_niveaux_2 = document.getElementById("label_niveaux_2");
const label_niveaux_3 = document.getElementById("label_niveaux_3"); */

//Matier filter Checkbok
const TitreMatier = document.getElementById("TitreMatier");
const label_matiere_tn = document.getElementById("label_matiere_tn");
const label_matiere_it = document.getElementById("label_matiere_it");
const label_matiere_db = document.getElementById("label_matiere_DB");


//concept programmation filtre translate
const titreConceptInfo = document.getElementById("titreConceptInfo");
const label_event = document.getElementById("label_event");
const label_sequencement = document.getElementById("label_sequencement");
const label_debegage = document.getElementById("label_debegage");
const label_boucle_simple = document.getElementById("label_boucle_simple");
const label_number = document.getElementById("label_number");
const label_variable = document.getElementById("label_variable");
const label_logic = document.getElementById("label_logic");
const label_function = document.getElementById("label_function");



//btn login 
const btn_login = document.getElementById("btn_login");


//formulaire login Eleve
const LoginEleveModalLabel = document.getElementById("LoginEleveModalLabel") ;
const label_matEleve = document.getElementById("label_matEleve") ; 
const matEleve = document.getElementById("matEleve") ;
const label_pswEleve = document.getElementById("label_pswEleve") ; 
const pswEleve = document.getElementById("pswEleve") ;
const linkDisplayFormulaireEnseignant = document.getElementById("linkDisplayFormulaireEnseignant") ;
const btnConnectEleve = document.getElementById("btnConnectEleve") ;
const LoginEnseignantModalLabel = document.getElementById("LoginEnseignantModalLabel") ;
const label_email = document.getElementById("label_email");
const email = document.getElementById("email");
const label_password = document.getElementById("label_password");
const password = document.getElementById("password");
const linkDispalyFormulaireLoginEleve = document.getElementById("linkDispalyFormulaireLoginEleve");
const btnLoginEnseignant = document.getElementById("btnLoginEnseignant");

//demande d'inscription 
const btnshowdemandeEleve = document.getElementById("btnshowdemandeEleve")
const btnshowdemandeEnseignant = document.getElementById("btnshowdemandeEnseignant")
const btnshowdemandeSigineleve = document.getElementById("btnshowdemandeSigineleve")

const demandeEleveTitle = document.getElementById("demandeEleveTitle")
const demandeENTitle = document.getElementById("demandeENTitle")
const  demandeEleveEmail = document.getElementById("demandeEleveEmail")
const  demandeEleveTel = document.getElementById("demandeEleveTel")
const  demandeEleveName = document.getElementById("demandeEleveName")
const  demandeEleveLevel = document.getElementById("demandeEleveLevel")
const demandeElevePS = document.getElementById("demandeElevePS")
const  label_demandeEleveEmail = document.getElementById("label_demandeEleveEmail")
const  label_demandeEleveTel = document.getElementById("label_demandeEleveTel")
const  label_demandeEleveName = document.getElementById("label_demandeEleveName")
const  label_demandeEleveLevel = document.getElementById("label_demandeEleveLevel")
//const label_demandeElevePS = document.getElementById("label_demandeElevePS")


const demandeEmailEnseignant = document.getElementById("demandeEmailEnseignant")
const demandeTelEnseignant = document.getElementById("demandeTelEnseignant")
const demandeNameEnseignant = document.getElementById("demandeNameEnseignant")
const demandeNameES = document.getElementById("demandeNameES")
const demandeTN = document.getElementById("demandeTN")
const demandeFR = document.getElementById("demandeFR")
const demandeCB = document.getElementById("demandeCB")
const level0 = document.getElementById("level0")
const level1 = document.getElementById("level1")
const level2 = document.getElementById("level2")
const level3 = document.getElementById("level3")
const label_demandeEmailEnseignant = document.getElementById("label_demandeEmailEnseignant")
const label_demandeTelEnseignant = document.getElementById("label_demandeTelEnseignant")
const label_demandeNameEnseignant = document.getElementById("label_demandeNameEnseignant")
const label_demandeNameES = document.getElementById("label_demandeNameES")
const label_demandeNbrEleve = document.getElementById("label_demandeNbrEleve")
//const linkDemandeEnseignant = document.getElementById("linkDisplayFormulaireDemandeEnseignant")
//const linkDemandeEleve = document.getElementById("linkDispalyFormulaireDemandeEleve")
const btnDemandeEleve = document.getElementById("btnDemandeEleve")
const btnDemandeEnseignant = document.getElementById("btnDemandeEnseignant")
const btnshowdemandeSiginEnseignant = document.getElementById("btnshowdemandeSiginEnseignant")
// how to start
const btnTextHowToStart = document.getElementById("btnTextHowToStart")
const modalTitleHowTostart = document.getElementById("modalTitleHowTostart")
const ContainerbtnHowToStart = document.getElementById("ContainerbtnHowToStart")

//lang navigation ....
if(lang =="en"){
  // dispaly english
  console.log("lang = en",);
  document.body.setAttribute("dir" , "ltr")
  //filtre bare
  titreNiveaux.innerText = "level";
  // label_niveaux_1.innerText = "one";
  // label_niveaux_2.innerText = "Second";
  // label_niveaux_3.innerText = "third";

  TitreMatier.innerText = "Educational Program";
  label_matiere_tn.innerText = "TN";
  label_matiere_it.innerText = "Coding";
  titreConceptInfo.innerText = "Programming concepts";
  label_matiere_db.innerText ="Drawing"
  //
  label_sequencement.innerText = "Sequencing";
  label_sequencement.setAttribute("title", "Sequencing");
  label_sequencement.setAttribute("data-bs-content", "A series of computer instructions executed in order to achieve a specific result." );
  //
  label_debegage.innerText = "Debugging";
  label_debegage.setAttribute("title", "Debugging");
  label_debegage.setAttribute("data-bs-content", "Run a computer program step by step that gives an unexpected result in order to correct it." );
  //
  label_event.innerText = "Events";
  label_event.setAttribute("title", "Events");
  label_event.setAttribute("data-bs-content", "An event is an action triggered by the user or other object that starts the execution of the computer program." );
  //
  label_number.innerText = "Constants"
  label_number.setAttribute("title", "Constants");
  label_number.setAttribute("data-bs-content", "A constant is an identifier associated with a fixed value, generally defined when the computer program is launched." );
  //
  label_boucle_simple.innerText = "Loops";
  label_boucle_simple.setAttribute("title", "Loops");
  label_boucle_simple.setAttribute("data-bs-content", "A loop is a programming structure that repeats a sequence of computer instructions until a specific condition is met." );

  label_variable.innerText = "Variables" ;
  label_variable.setAttribute("title", "Variables");
  label_variable.setAttribute("data-bs-content", "A variable is an identifier whose value can be changed during the normal execution of the computer program." );
  //
  label_logic.innerText = "Logic" ;
  label_logic.setAttribute("title", "Logic");
  label_logic.setAttribute("data-bs-content", "A condition is a conditional statement that evaluates a computer expression to check whether it is true or false." );

  //
  label_function.innerText="Function"
  label_function.setAttribute("title", "Function");
  label_function.setAttribute("data-bs-content", "A function is a series of computer instructions that only run when the function is called." );

  //show formulaire login btn
  btn_login.innerText = "Login";
  //formulaire login eleve
  LoginEleveModalLabel.innerText = "Student login";
  label_matEleve.innerText = "Student ID";
  matEleve.setAttribute("placeholder" , "Student ID");
  label_pswEleve.innerText = "Password"
  pswEleve.setAttribute("placeholder" , "Password");
  linkDisplayFormulaireEnseignant.innerText = "Teacher"
  btnConnectEleve.innerText = "Login"
  //formulaire login Enseignant
  LoginEnseignantModalLabel.innerText = "Teacher login";
  label_email.innerText = "Email";
  email.setAttribute("placeholder" , "Email ...");
  label_password.innerText = "password" ;
  password.setAttribute("placeholder" , "... Password");
  linkDispalyFormulaireLoginEleve.innerText="Student"
  btnLoginEnseignant.innerText = "Login";
  //modal demande
  demandeENTitle.innerText ="Teacher registration request"
  demandeEleveTitle.innerText ="Student registration request"
  demandeEleveEmail.setAttribute("placeholder" , "Email ...");
  demandeEleveTel.setAttribute("placeholder" , "Phone ...");
  demandeEleveName.setAttribute("placeholder" , "First & last name ...");
  label_demandeEleveLevel.innerText = "Level ..."
  //label_demandeElevePS.innerText ="Course of Study ..."
  label_demandeEleveEmail.innerText ="Email"
  label_demandeEleveTel.innerText = "Phone"
  label_demandeEleveName.innerText = "First & last name"

  //demandeEmailEnseignant.setAttribute("placeholder" , "Email ...");
  demandeTelEnseignant.setAttribute("placeholder" , "Phone ...");
  demandeNameEnseignant.setAttribute("placeholder" , "First & last name ...");
  demandeNameES.setAttribute("placeholder" , "Educational establishment ...");
  label_demandeEmailEnseignant.innerText ="Email"
  label_demandeTelEnseignant.innerText ="Tel"
  label_demandeNameEnseignant.innerText ="First & last name"
  label_demandeNameES.innerText = "Educational establishment"
  label_demandeNbrEleve.innerText ="Enter the number of students per level"
  //linkDemandeEnseignant.innerText ="Teacher"
  //linkDemandeEleve.innerText ="Student"
  btnDemandeEleve.innerText ="Send"
  btnDemandeEnseignant.innerText ="Send"
  btnshowdemandeEleve.innerText =  "Registration request Student" 
  btnshowdemandeEnseignant.innerText =  "Registration request Student"
  btnshowdemandeSigineleve.innerText = "Login Student"
  btnshowdemandeSiginEnseignant.innerText = "Login Teatcher"
  //how to start 
  btnTextHowToStart.innerText ="How To Start?"
  modalTitleHowTostart.innerText = "How To Start?"
  ContainerbtnHowToStart.classList.replace("me-auto" ,"ms-auto")
}
else if(lang == "fr"){
  // display french
  console.log("lang = fr", );
  document.body.setAttribute("dir" , "ltr")
  //document.body.style.direction = "ltr";
  titreNiveaux.innerText = "Niveaux";
  // label_niveaux_1.innerText = "premi??re";
  // label_niveaux_2.innerText = "deuxi??me";
  // label_niveaux_3.innerText = "troisi??me";
  TitreMatier.innerText = "Programme Scolaire";
  label_matiere_tn.innerText ="TN"
  label_matiere_it.innerText = "Programmation";
  titreConceptInfo.innerText = "Concepts de Programmation";
  label_matiere_db.innerText ="Dessin"
  //
  label_sequencement.innerText = "S??quencement";
  label_sequencement.setAttribute("title", "S??quencement");
  label_sequencement.setAttribute("data-bs-content", "Une suite d'instructions informatiques ex??cut??es dans l???ordre pour aboutir ?? un r??sultat bien d??termin??." );
  //
  label_event.innerText = "Ev??nements";
  label_event.setAttribute("title", "Ev??nements");
  label_event.setAttribute("data-bs-content", "Un ??v??nement est une action d??clench??e par l???utilisateur ou autre objet qui d??marre l???ex??cution du programme informatique." );
  //
  label_number.innerText = "Constantes"
  label_number.setAttribute("title", "Constantes");
  label_number.setAttribute("data-bs-content", "Une constante est un identificateur associ?? ?? une valeur fixe, g??n??ralement d??finie au moment du lancement du programme informatique."  );
  //
  label_debegage.innerText = "D??bogage";
  label_debegage.setAttribute("title", "D??bogage");
  label_debegage.setAttribute("data-bs-content", "Ex??cuter pas ?? pas un programme informatique qui donne un r??sultat inattendu en vue de le corriger" );

  //
  label_boucle_simple.innerText = "Boucles";
  label_boucle_simple.setAttribute("title", "Boucles");
  label_boucle_simple.setAttribute("data-bs-content", "Une boucle est une structure de programmation qui r??p??te une s??quence d'instructions informatiques jusqu'?? ce qu'une condition sp??cifique soit remplie." );
  //
  label_variable.innerText = "Variables" ;
  label_variable.setAttribute("title", "Variables");
  label_variable.setAttribute("data-bs-content", "Une variable est un identificateur dont la valeur peut ??tre modifi??e pendant l'ex??cution normale du programme informatique." );
  //
  label_logic.innerText = "Conditions" ;
  label_logic.setAttribute("title", "Conditions");
  label_logic.setAttribute("data-bs-content", "Une condition est une instruction conditionnelle qui ??value une expression informatique pour v??rifier si elle est vraie ou fausse." );
  //
  label_function.innerText="Fonction"
  label_function.setAttribute("title", "Fonction");
  label_function.setAttribute("data-bs-content", "Une fonction est un ensemble d???instructions informatiques qui ne s'ex??cute que lorsque la fonction  est appel??e." );
  //show formulaire login btn
  //btn_login.innerText = "Connexion";
  //formulaire login eleve
  LoginEleveModalLabel.innerText = "Connexion Eleve";
  label_matEleve.innerText = "ID eleve";
  matEleve.setAttribute("placeholder" , "ID eleve ...");
  label_pswEleve.innerText = "mot de passe"
  pswEleve.setAttribute("placeholder" , "mot de passe ...");
  linkDisplayFormulaireEnseignant.innerText = "Enseignant"
  btnConnectEleve.innerText = "Connexion"
  //formulaire login Enseignant
  LoginEnseignantModalLabel.innerText = "Connexion Enseignant";
  label_email.innerText = "Email";
  email.setAttribute("placeholder" , "Email ...");
  label_password.innerText = "mot de passe" ;
  password.setAttribute("placeholder" , "mot de passe ...");
  linkDispalyFormulaireLoginEleve.innerText="Eleve"
  btnLoginEnseignant.innerText = "Connexion"
  //modal demande
  demandeENTitle.innerText ="Demande d'inscription ??tudiant"
  demandeEleveTitle.innerText ="Demande d'inscription ??l??ve"
  demandeEleveEmail.setAttribute("placeholder" , "Email ...");
  demandeEleveTel.setAttribute("placeholder" , "Tel ...");
  demandeEleveName.setAttribute("placeholder" , "nom & Pr??nom ...");
  label_demandeEleveLevel.innerText = "Niveau ..."
  //label_demandeElevePS.innerText ="Programme Scolaire ..."
  label_demandeEleveEmail.innerText ="Email"
  label_demandeEleveTel.innerText = "Tel"
  label_demandeEleveName.innerText = "nom & Pr??nom"

  //demandeEmailEnseignant.setAttribute("placeholder" , "Email ...");
  demandeTelEnseignant.setAttribute("placeholder" , "Tel ...");
  demandeNameEnseignant.setAttribute("placeholder" , "nom & Pr??nom ...");
  demandeNameES.setAttribute("placeholder" , "Etablissement Scolaire ...");
  label_demandeEmailEnseignant.innerText ="Email"
  label_demandeTelEnseignant.innerText ="Tel"
  label_demandeNameEnseignant.innerText ="nom & Pr??nom"
  label_demandeNameES.innerText = "Etablissement Scolaire"
  label_demandeNbrEleve.innerText ="Entrer le nombre d'??l??ves par niveau"
  //linkDemandeEnseignant.innerText ="Enseignant"
  //linkDemandeEleve.innerText ="Eleve"
  btnDemandeEleve.innerText ="Envoyer"
  btnDemandeEnseignant.innerText ="Envoyer"
  btnshowdemandeEleve.innerHTML ="demande d'inscription Eleve"
  btnshowdemandeEnseignant.innerHTML ="demande d'inscription Enseignant"
  btnshowdemandeSigineleve.innerText = "Connexion Eleve"
  btnshowdemandeSiginEnseignant.innerText = "Connexion Enseignant"
  //how to start 
  //btnTextHowToStart.innerText ="Comment commencer?"
  //modalTitleHowTostart.innerText = "Comment commencer?"
  //ContainerbtnHowToStart.classList.replace("me-auto" ,"ms-auto")
}
else if(lang =="de"){
  // dispaly english
  console.log("lang = en",);
  document.body.setAttribute("dir" , "ltr")
  //filtre bare
  titreNiveaux.innerText = "level";
  // label_niveaux_1.innerText = "one";
  // label_niveaux_2.innerText = "Second";
  // label_niveaux_3.innerText = "third";

  // filtre bar
	TitreMatier.innerText = 'P??dagogisches Programm';
	label_matiere_tn.innerText = 'TN';
	label_matiere_it.innerText = 'Codierung';
	titreConceptInfo.innerText = 'Konzepte der Programmierung';
  label_matiere_db.innerText ="Zeichnung"
  //
	label_sequencement.innerText = 'Sequenzierung';
  label_sequencement.setAttribute("title", "Sequenzierung");
  label_sequencement.setAttribute("data-bs-content", "Eine Reihe von Computeranweisungen, die ausgef??hrt werden, um ein bestimmtes Ergebnis zu erzielen." );
  //
	label_debegage.innerText = 'Fehlersuche';
  label_debegage.setAttribute("title", "Fehlersuche");
  label_debegage.setAttribute("data-bs-content", "F??hren Sie Schritt f??r Schritt ein Computerprogramm aus, das ein unerwartetes Ergebnis liefert, um es zu korrigieren." );
  //
	label_event.innerText = 'Veranstaltungen';
  label_event.setAttribute("title", "Veranstaltungen");
  label_event.setAttribute("data-bs-content", "Ein Ereignis ist eine vom Benutzer oder einem anderen Objekt ausgel??ste Aktion, die die Ausf??hrung des Computerprogramms startet." );
  //
	label_number.innerText = 'Konstante';
  label_number.setAttribute("title", "Konstante");
  label_number.setAttribute("data-bs-content", "Eine Konstante ist ein Identifikator, der einem festen Wert zugeordnet ist, der im Allgemeinen definiert wird, wenn das Computerprogramm gestartet wird." );
  //
	label_boucle_simple.innerText = 'Schleifen';
  label_boucle_simple.setAttribute("title", "Schleifen");
  label_boucle_simple.setAttribute("data-bs-content", "Eine Schleife ist eine Programmierstruktur, die eine Folge von Computeranweisungen wiederholt, bis eine bestimmte Bedingung erf??llt ist." );
  //
	label_variable.innerText = 'Variablen';
  label_variable.setAttribute("title", "Variablen");
  label_variable.setAttribute("data-bs-content", "Eine Variable ist eine Kennung, deren Wert w??hrend der normalen Ausf??hrung des Computerprogramms ge??ndert werden kann" );
  //
	label_logic.innerText = 'Logik';
  label_logic.setAttribute("title", "Logik");
  label_logic.setAttribute("data-bs-content", "Eine Bedingung ist eine bedingte Anweisung, die einen Computerausdruck auswertet, um zu pr??fen, ob er wahr oder falsch ist." );
  //
  label_function.innerText="Funktion"
  label_function.setAttribute("title", "Funktion");
  label_function.setAttribute("data-bs-content", "Eine Funktion ist eine Reihe von Computeranweisungen, die nur ausgef??hrt werden, wenn die Funktion aufgerufen wird." );

  //show formulaire login btn
  btn_login.innerText = "Anmeldung";
  //formulaire login eleve
  LoginEleveModalLabel.innerText = "Anmeldung f??r Studenten";
  label_matEleve.innerText = "Studentenausweis";
  matEleve.setAttribute("placeholder" , "Studentenausweis ...");
  label_pswEleve.innerText = "Passwort"
  pswEleve.setAttribute("placeholder" , "Passwort");
  linkDisplayFormulaireEnseignant.innerText = "Lehrer"
  btnConnectEleve.innerText = "Anmeldung"
  //formulaire login Enseignant
  LoginEnseignantModalLabel.innerText = "Anmeldung Teatcher";
  label_email.innerText = "Email";
  email.setAttribute("placeholder" , "Email ...");
  label_password.innerText = "Passwort" ;
  password.setAttribute("placeholder" , " Passwort ...");
  linkDispalyFormulaireLoginEleve.innerText="Studenten"
  btnLoginEnseignant.innerText = "Anmeldung";
  btnshowdemandeEleve.innerText ="Registrierungsanfrage"
  btnshowdemandeEnseignant.innerText ="Registrierungsanfrage"
  btnshowdemandeSigineleve.innerText = "Login Student"
  btnshowdemandeSiginEnseignant.innerText = "Login Teatcher"
  label_demandeNbrEleve.innerText ="Geben Sie die Anzahl der Sch??ler pro Stufe ein"
  demandeENTitle.innerText ="Teacher registration request"
  demandeEleveTitle.innerText ="Student registration request"
  demandeEleveEmail.setAttribute("placeholder" , "Email ...");
  demandeEleveTel.setAttribute("placeholder" , "Phone ...");
  demandeEleveName.setAttribute("placeholder" , "First & last name ...");
  label_demandeEleveLevel.innerText = "Level ..."
  //label_demandeElevePS.innerText ="Course of Study ..."

  //demandeEmailEnseignant.setAttribute("placeholder" , "Email ...");
  demandeTelEnseignant.setAttribute("placeholder" , "Phone ...");
  demandeNameEnseignant.setAttribute("placeholder" , "First & last name ...");
  demandeNameES.setAttribute("placeholder" , "Educational establishment ...");
  label_demandeEmailEnseignant.innerText ="Email"
  label_demandeTelEnseignant.innerText ="Tel"
  label_demandeNameEnseignant.innerText ="First & last name"
  label_demandeNameES.innerText = "Educational establishment"
  label_demandeNbrEleve.innerText ="Enter the number of students per level"
  //linkDemandeEnseignant.innerText ="Teacher"
  //linkDemandeEleve.innerText ="Student"
  btnDemandeEleve.innerText ="Send"
  btnDemandeEnseignant.innerText ="Send"
  btnshowdemandeEleve.innerText =  "Registration request Student" 
  btnshowdemandeEnseignant.innerText =  "Registration request Student"
  btnshowdemandeSigineleve.innerText = "Login Student"
  btnshowdemandeSiginEnseignant.innerText = "Login Teatcher"
  //how to start 
  btnTextHowToStart.innerText ="Wie man anf??ngt?"
  modalTitleHowTostart.innerText = "Wie man anf??ngt?"
  ContainerbtnHowToStart.classList.replace("me-auto" ,"ms-auto")
  
}
else{
  //desplay arabic
  //document.body.style.direction = "rtl";
  document.body.setAttribute("dir" , "rtl")
  console.log("lang = ar");
}
// set the toolbox