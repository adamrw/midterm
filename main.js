$(document).on('ready', function() {
//Look up company name to see if it exists in array
//

   $('#firstForm').on('submit', function(e){
   		e.preventDefault();
   		var getVal = $('#InputCompany').val();
   		console.log('test', getVal);
   		var foundCompany=null;
   		console.log(foundCompany);
   		for (var i = 0; i < companies.length; i++) {
   			if(getVal === companies[i].name){
				// console.log(Companies[i].associates);
				console.log(companies[i].name + ' ' + companies[i].owners + ' ' + companies[i].associates);
				foundCompany=companies[i];
			}
   		}

//If company is found, display an alert containing the owner, and associates
//If company is not found, display a different alert telling user no data is found

   		if(foundCompany !== null){
			$('#posAlert').html('<div class="alert alert-success alert-dismissable" role="alert">' + foundCompany.name + ' is owned by ' + foundCompany.owners + ' and is associated with ' + foundCompany.associates + '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + '</div>');
			// alert(companies[i].name + ' is owned by ' + companies[i].owners + ' and is associated with ' + companies[i].associates);
			// foundCompany = Companies.splice(i, 1);
		
		// return companies[i].associates;
	   	 }
   		else  {
   			$('#negAlert').html('<div class="alert alert-danger alert-dismissable" role="alert">' + "I'm sorry, we didn't find any results for that company" + '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + '</div>');
   		}
   	});

	
	

//Create information about companies including name of company, owner and other
//people associated with the company
	var Company = function (name, owners, associates){
		console.log(Company);
		this.name = name;
		this.owners = owners;
		this.associates = associates;
	
	var wall = new Company('Wall Mart', ['Bob'], []);
	var puri = new Company('Purina', ['Joe'], []);
	var chip = new Company('Chipotle', ['Gina'], []);
	var pepsi = new Company('Pepsi', ['John'], []);
	var pizz = new Company('Pizzeria Locale', ['Pete'], [chip.name]);
	var dog = new Company('Dog Foodz', ['Stephanie'], [puri.name, wall.name]);
	var sand = new Company('Quiznos', ['Meghan'], [chip.name, pepsi.name, puri.name]);
		// console.log(chip);
	var companies=[wall, puri, chip, pepsi, pizz, dog, sand];


//Allow user to add information about companies

		$('#addCompany').on('submit', function() {
			name.push();
		});
		$('#addOwner').on('submit', function() {
			owners.push();
		});
		$('#addAssociates').on('submit', function() {
			associates.push();
		});
	};
	// var callOut = function (){
		
		// }
	


});

