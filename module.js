//BEGIN DECLARE BLOCKS
	//Blocks Name AR
		const block_move_AR = "تحرك الى الامام"
		const block_turnRight_AR = "استدر الى اليمين"
		const block_turnLeft_AR = "استدر الى اليسار"
		const block_constant_AR = "الثوابت"
		const block_repeat_AR =  "كرر عدة مرات"
		const block_ifPath_AR = 'اذا هنالك مسار نفذ'
		const block_ifPathElse_AR = 'اذا هنالك مسار نفذ و الا'
	//Blocks Name FR
		const block_move_FR = "Avance"
		const block_turnRight_FR = 'Tourne à droite'
		const block_turnLeft_FR = 'tourne à gauche'
		const block_constant_FR = "constantes"
		const block_repeat_FR =  "Repéter n fois"
		const block_ifPath_FR = 'si shemin faire'
		const block_ifPathElse_FR = 'si shemin faire sinon'
	//Blocks Name EN
		const block_move_EN = "move"
		const block_turnRight_EN = 'turn right'
		const block_turnLeft_EN = 'turn left'
		const block_constant_EN = 'constants'
		const block_repeat_EN =  'loops'
		const block_ifPath_EN = 'if path do'
		const block_ifPathElse_EN = 'if path do else'
	//Blocks Name DE
		const block_move_DE = "bewegen"
		const block_turnRight_DE = 'rechts abbiegen'
		const block_turnLeft_DE = 'links abbiegen'
		const block_constant_DE = 'Schleifen'
		const block_repeat_DE =  'n-mal wiederholen'
		const block_ifPath_DE = 'if pfad do'
		const block_ifPathElse_DE = 'if Pfad do else'
//END DECLARE BLOCKS		



//BEGIN DECLARE CONCEPT INFO
	const concept_event = 'event'
	const concept_move = "move"
	const concept_debug ="debug"
	const concept_repeat ="repeat"
	const concept_numbers = "numbers"
	const concept_logic = "logic"
	const concept_function = "function"
//END DECLARE CONCEPT INFO

//BEGIN DECLARE CONCEPT PROGRAMMATION 
	//CONCEPT PROGRAMMATION AR
		const concept_event_AR = 'الاحداث'
		const concept_sequencement_AR = "التسلسل"
		const concept_debug_AR ="التصحيح"
		const concept_repeat_AR ="الحلقات"
		const concept_numbers_AR = "متغيرات"
		const concept_logic_AR = "المنطق"
		const concept_function_AR = "الاجراءات"
	//CONCEPT PROGRAMMATION FR
		const concept_event_FR = 'événement'
		const concept_sequencement_FR = "Séquencement"
		const concept_debug_FR ="débogage"
		const concept_repeat_FR ="Boucles"
		const concept_numbers_FR = "constantes"
		const concept_logic_FR = "Conditions"
		const concept_function_FR = "Fonction"

	//CONCEPT PROGRAMMATION EN
		const concept_event_EN = 'event'
		const concept_sequencement_EN = "Sequencing"
		const concept_debug_EN ="debugging"
		const concept_repeat_EN ="Loops"
		const concept_numbers_EN = "numbers"
		const concept_logic_EN = "Logic"
		const concept_function_EN = "Function"

	//CONCEPT PROGRAMMATION DE
		const concept_event_DE = 'Ereignis'
		const concept_sequencement_DE = "Sequenzierung"
		const concept_debug_DE ="Debugging"
		const concept_repeat_DE ="Schleifen"
		const concept_numbers_DE = "numbers"
		const concept_logic_DE = "Logik"
		const concept_function_DE = "Funktion"

//END DECLARE CONCEPTE PROGRAMMATION 

const modules = [
	//0.IT.1 Maze 4 languages
	{
		id: '0.IT.1.',
		titre: 'Coding Blockly 0',
		matiere: 'IT',
		GameName: 'maze',
		type: true,
		img: 'IT-0.png',
		desc: '', //'A la fin de ce cours, l’élève doit apprendre comment programmer pour faire  déplacer un robot selon des mouvements simples et courts',
		niveaux: 0,
		isPublic : true ,
		category: false,
		Concept_info: [concept_event, concept_move, concept_debug],
		blocks: {
			ar: [ block_move_AR,  block_turnRight_AR , block_turnLeft_AR ],
			fr: [ block_move_FR , block_turnRight_FR , block_turnLeft_FR ],
			en: [ block_move_EN , block_turnRight_EN , block_turnLeft_EN ],
			de: [ block_move_DE , block_turnRight_DE , block_turnLeft_DE ],
		},
		Concept_programmation: {
			ar: [concept_event_AR, concept_sequencement_AR, concept_debug_AR],
			fr: [concept_event_FR, concept_sequencement_FR, concept_debug_FR],
			en: [concept_event_EN, concept_sequencement_EN, concept_debug_EN],
			de: [concept_event_AR, concept_sequencement_DE, concept_debug_DE],
		},
		cours: [
			{
				id: '1',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '2',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '3',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '4',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '5',
				titre: null,
				nbrExercice: 11,
			},
			{
				id: '6',
				titre: null,
				nbrExercice: 11,
			},
			{
				id: '7',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '8',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '9',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '10',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '11',
				titre: null,
				nbrExercice: 11,
			},
			{
				id: '12',
				titre: null,
				nbrExercice: 12,
			},
		],
	},
	//1.IT.1 Maze 4 languages
	{
		id: '1.IT.1.',
		titre: 'Coding Blockly 1',
		matiere: 'IT',
		GameName: 'maze',
		type: false,
		img: 'IT-1.png',
		desc: '', // 'A la fin de ce cours, l’élève doit apprendre comment programmer pour faire  déplacer un robot selon des mouvements simples et longs, répétitifs  et déboguer un programme',
		niveaux: 1,
		category: false,
		isPublic : true,
		Concept_info: [concept_event, concept_move, concept_debug , concept_repeat , concept_numbers],
		blocks: {
			ar: [ block_move_AR,  block_turnRight_AR , block_turnLeft_AR, block_constant_AR , block_repeat_AR ],
			fr: [ block_move_FR , block_turnRight_FR , block_turnLeft_FR, block_constant_FR , block_repeat_FR ],
			en: [ block_move_EN , block_turnRight_EN , block_turnLeft_EN, block_constant_EN , block_repeat_EN ],
			de: [ block_move_DE , block_turnRight_DE , block_turnLeft_EN, block_constant_AR , block_repeat_EN ],
		},
		Concept_programmation: {
			ar: [concept_event_AR, concept_sequencement_AR, concept_debug_AR, concept_numbers_AR, concept_repeat_AR ],
			fr: [concept_event_FR, concept_sequencement_FR, concept_debug_FR, concept_numbers_FR, concept_repeat_FR ],
			en: [concept_event_EN, concept_sequencement_EN, concept_debug_EN, concept_numbers_EN, concept_repeat_EN ],
			de: [concept_event_AR, concept_sequencement_DE, concept_debug_DE, concept_numbers_DE, concept_repeat_DE ],
		},
		cours: [
			{
				id: '1',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '2',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '3',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '4',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '5',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '6',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '7',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '8',
				titre: null,
				nbrExercice: 12,
			},
		],
	},
	//2.IT.1 Maze 4 languages
	{
		id: '2.IT.1.',
		titre: 'Coding Blockly 2',
		matiere: 'IT',
		GameName: 'maze',
		type: false,
		img: 'IT-2.png',
		desc: '', // 'A la fin de ce cours, l’élève doit apprendre comment programmer pour faire  déplacer un robot selon des mouvements simples et longs, répétitifs  et déboguer un programme',
		niveaux: 2,
		category: false,
		isPublic : true,
		Concept_info: [concept_event, concept_move, concept_debug , concept_repeat , concept_numbers , concept_logic],
		blocks: {
			ar: [ block_move_AR,  block_turnRight_AR , block_turnLeft_AR, block_constant_AR , block_repeat_AR, block_ifPath_AR ],
			fr: [ block_move_FR , block_turnRight_FR , block_turnLeft_FR, block_constant_FR , block_repeat_FR, block_ifPath_FR ],
			en: [ block_move_EN , block_turnRight_EN , block_turnLeft_EN, block_constant_EN , block_repeat_EN, block_ifPath_EN ],
			de: [ block_move_DE , block_turnRight_DE , block_turnLeft_EN, block_constant_AR , block_repeat_EN, block_ifPath_DE ],
		},
		Concept_programmation: {
			ar: [concept_event_AR, concept_sequencement_AR, concept_debug_AR, concept_numbers_AR, concept_repeat_AR, concept_logic_AR ],
			fr: [concept_event_FR, concept_sequencement_FR, concept_debug_FR, concept_numbers_FR, concept_repeat_FR, concept_logic_FR ],
			en: [concept_event_EN, concept_sequencement_EN, concept_debug_EN, concept_numbers_EN, concept_repeat_EN, concept_logic_EN ],
			de: [concept_event_AR, concept_sequencement_DE, concept_debug_DE, concept_numbers_DE, concept_repeat_DE, concept_logic_DE ],
		},
		cours: [
			{
				id: '1',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '2',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '3',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '4',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '5',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '6',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '7',
				titre: null,
				nbrExercice: 13,
			},
		],
	},
	//3.IT.1
	{
		id: '3.IT.1.',
		titre: 'Coding Blockly 3',
		matiere: 'IT',
		GameName: 'maze',
		type: false,
		img: 'IT-3.png',
		desc: '', // 'A la fin de ce cours, l’élève doit apprendre comment programmer pour faire  déplacer un robot selon des mouvements simples et longs, répétitifs  et déboguer un programme',
		niveaux: 3,
		category: true,
		isPublic : true,
		Concept_info: [concept_event, concept_move, concept_debug , concept_repeat , concept_numbers , concept_logic],
		blocks: {
			ar: [ block_move_AR,  block_turnRight_AR , block_turnLeft_AR, block_constant_AR , block_repeat_AR, block_ifPath_AR, block_ifPathElse_AR ],
			fr: [ block_move_FR , block_turnRight_FR , block_turnLeft_FR, block_constant_FR , block_repeat_FR, block_ifPath_FR, block_ifPathElse_FR ],
			en: [ block_move_EN , block_turnRight_EN , block_turnLeft_EN, block_constant_EN , block_repeat_EN, block_ifPath_EN, block_ifPathElse_EN ],
			de: [ block_move_DE , block_turnRight_DE , block_turnLeft_EN, block_constant_AR , block_repeat_EN, block_ifPath_DE, block_ifPathElse_DE ],
		},
		Concept_programmation: {
			ar: [concept_event_AR, concept_sequencement_AR, concept_debug_AR, concept_numbers_AR, concept_repeat_AR, concept_logic_AR ],
			fr: [concept_event_FR, concept_sequencement_FR, concept_debug_FR, concept_numbers_FR, concept_repeat_FR, concept_logic_FR ],
			en: [concept_event_EN, concept_sequencement_EN, concept_debug_EN, concept_numbers_EN, concept_repeat_EN, concept_logic_EN ],
			de: [concept_event_AR, concept_sequencement_DE, concept_debug_DE, concept_numbers_DE, concept_repeat_DE, concept_logic_DE ],
		},
		cours: [
			{
				id: '1',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '2',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '3',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '4',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '5',
				titre: null,
				nbrExercice: 13,
			},
			{
				id: '6',
				titre: null,
				nbrExercice: 12,
			},
			{
				id: '7',
				titre: null,
				nbrExercice: 13,
			},
		],
	},
	
];
