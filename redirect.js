
async function showBody(){
	await importBootstrap();
	document.getElementById("publicUser").style.display = null
	document.getElementById("loading").style.display = "none"

}

importBootstrap()
function importBootstrap() {
	if(lang =="fr" || lang =="en" || lang =="de"){
		document.getElementById("linkBootstrap").setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
		document.getElementById("linkBootstrap").setAttribute("integrity", "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" )
	}
	else{
		document.getElementById("linkBootstrap").setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css");
		document.getElementById("linkBootstrap").setAttribute("integrity", "sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" )
	}
	return new Promise(resolve => {
		setTimeout(() => {
		resolve('resolved');
		}, 1000);
	});
}