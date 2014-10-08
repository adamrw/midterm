$(document).on('ready', function() {
  
   $('#first-button').on('click', function(){
   		var getVal = $('#InputCompany').val();
   		console.log('test', getVal);

   		for (var i = 0; i < companies.length; i++) {
			// console.log(Companies[i].associates);
		console.log(companies[i].name + ' ' + companies[i].owners + ' ' + companies[i].associates);
		if(getVal === companies[i].name){
			$('#posAlert').html('<div class="alert alert-success alert-dismissable" role="alert">' + companies[i].name + ' is owned by ' + companies[i].owners + ' and is associated with ' + companies[i].assiciates + '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + '</div>');
			// alert(companies[i].name + ' is owned by ' + companies[i].owners + ' and is associated with ' + companies[i].associates);
			// foundCompany = Companies.splice(i, 1);
		
		// return companies[i].associates;
	   	 }
   		else  {
   			$('#negAlert').html('<div class="alert alert-danger alert-dismissable" role="alert">' + "I'm sorry, we didn't find any results for that company" + '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + '</div>');
   		}
   		
   	}
   	});


	var Company = function (name, owners, associates){
		this.name = name;
		this.owners = owners;
		this.associates = associates;
	};
	var wall = new Company('Wall Mart', ['Bob'], []);
	var puri = new Company('Purina', ['Joe'], []);
	var chip = new Company('Chipotle', ['Gina'], []);
	var pepsi = new Company('Pepsi', ['John'], []);
	var pizz = new Company('Pizzaria Locale', ['Pete'], [chip]);
	var dog = new Company('Dog Foodz', ['Stephanie'], [puri, wall]);
	var sand = new Company('Quiznos', ['Meghan'], [chip, pepsi, puri]);

	var companies=[wall, puri, chip, pepsi, pizz, dog, sand];
	// var callOut = function (){
		
		// }
	


});

