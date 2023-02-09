var User = {};

function getModuleUser() {
	afficheModules(modules);
	var idModule = sessionStorage.getItem('idModule');
	if (idModule) {
		affichecours(idModule);
	}
}
