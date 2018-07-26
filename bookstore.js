fetch("https://api.myjson.com/bins/1h3vb3", {
		method: "GET",
		
	}).then(function (response) {
		if (response.ok) {
			return response.json();
		}
		throw new Error(response.statusText);

	}).then(function (json) {
	console.log(json)

		var data = json.books;
	app.books=data;
	    
		

		console.log(data);
	}).catch(function (error) {
		console.log("Request failed:" + error.message);
	});




var app = new Vue({
	el: '#app',
	data: {
	search:"",
		books:[],
		filtro:[]
						
	},
	computed: {
    filtered() {
		
				
	//app.innerHTML="<p>No data available</p>";
				
	
	
	
      this.filtro =  this.books.filter(book => {
		 
        return (book.titulo.toLowerCase().includes(this.search.toLowerCase()) || (book.descripcion.toLowerCase().includes(this.search.toLowerCase())))
      })
		
		
		// AQUI HE PUESTO NO BOOKS FOUND USANDO JAVASCRIPT, PERO ES IGUAL QUE LA LINEA DE HTML
		
//	/*	if(this.filtro.length==0 && this.search) {// si la longitud es 0 o si search no esta vacio(al escribir algo que no tiene match)
//					document.getElementById("noBooks").innerHTML= "No Books Found";
//					/*document.getElementById("noBooks").textContent("No Books Found");*/
//					console.log("hola");
//				}
//		else {
//			document.getElementById("noBooks").innerHTML="";
//			
//		}
//					*/		
		
		return this.filtro;
		
    }
		
  }

});

/*
if(app.books.lenght==0){
	app.innerHTML=<p>"No data available"</p>
}
*/




