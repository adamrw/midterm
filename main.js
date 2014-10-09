$(document).on('ready', function() {
//Look up company name to see if it exists in array
//

   $('#firstForm').on('submit', function(e){
   		e.preventDefault();
   		$('#posAlert').find('.closealert').click();
   		$('#negAlert').find('.closealertneg').click();
   		$('#assAlert').find('.closealertass').click();
   		var getVal = $('#InputCompany').val().toLowerCase();
   		// console.log('test', getVal);
   		var foundCompany=null;
   		// console.log(foundCompany);
   		for (var i = 0; i < companies.length; i++) {
   			if(getVal === companies[i].name){
   				if(companies[i].associates.length === 0) {
   					foundCompany=true;
   					console.log("unknown company");
	   				$('#assAlert').html('<div class="alert alert-info alert-dismissable" role="alert">' + companies[i].name + ' is owned by ' + companies[i].owners + ' but has no other associates. ' + '<button type="button" class="close" data-dismiss="alert"><span class="closealertass" aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + '</div>');
	   			}

	   			else {
	   				console.log("positive alert");
	   				$('#posAlert').html('<div class="alert alert-success alert-dismissable" role="alert">' + companies[i].name + ' is owned by ' + companies[i].owners + ' and is associated with ' + companies[i].associates + '<button type="button" class="close" data-dismiss="alert"><span class="closealert" aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + '</div>');
				console.log(companies[i].name + ' ' + companies[i].owners + ' ' + companies[i].associates);
				foundCompany=companies[i];
				}
			}
			else {
				console.log("neg alert");
	   		}
	   		
	   		

	   		// else if(foundCompany !== null){
				// $('#posAlert').html('<div class="alert alert-success alert-dismissable" role="alert">' + foundCompany.name + ' is owned by ' + foundCompany.owners + ' and is associated with ' + foundCompany.associates + '<button type="button" class="close" data-dismiss="alert"><span class="closealert" aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + '</div>');
				// alert(companies[i].name + ' is owned by ' + companies[i].owners + ' and is associated with ' + companies[i].associates);
				// foundCompany = Companies.splice(i, 1);
			
			// return companies[i].associates;
		   	 // }

		   	//  else if(foundCompany.associates.length === 0) {
	   		// 	$('#assAlert').html('<div class="alert alert-info alert-dismissable" role="alert">' + foundCompany.name + ' is owned by ' + foundCompany.owners + ' but has no other associates. ' + '<button type="button" class="close" data-dismiss="alert"><span class="closealert" aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + '</div>');
	   		// }
   		}
   		// if (getVal!==true) {continue};
   		if(!foundCompany){
   		$('#negAlert').html('<div class="alert alert-danger alert-dismissable" role="alert">' + "I'm sorry, we didn't find any results for that company" + '<button type="button" class="close" data-dismiss="alert"><span class="closealertneg" aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + '</div>');
   		$('#addCompany').html('<form class="form-group inline" id="addCompany" role="form">' + '<input type="company" class="form-control" id="new-company-info" placeholder="Would you like to enter a new company name?">' + '<button type="submit" class="btn btn-primary btn-lg" id="second-button">Submit</button>' + '</form>');
   		$('#addOwner').html('<form class="form-group inline" id="addOwner" role="form">' + '<input type="owner" class="form-control" id="new-owner-info" placeholder="Enter company owner">' + '<button type="submit" class="btn btn-primary btn-lg" id="third-button">Submit</button>' + '</form>');
              // <div class="form-group inline">
              
              
              
   		}		
   	

//If company is found, display an alert containing the owner, and associates
//If company is not found, display a different alert telling user no data is found
   	});

	
	

//Create information about companies including name of company, owner and other
//people associated with the company
	var Company = function (name, owners, associates){
		console.log(Company);
		this.name = name;
		this.owners = owners;
		this.associates = associates;
	
	


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
	
var wall = new Company('wall mart', ['Bob'], []);
	var puri = new Company('purina', ['Joe'], []);
	var chip = new Company('chipotle', ['Gina'], []);
	var pepsi = new Company('pepsi', ['John'], []);
	var pizz = new Company('pizzeria Locale', ['Pete'], [chip.name]);
	var dog = new Company('dog foodz', ['Stephanie'], [puri.name, wall.name]);
	var sand = new Company('quiznos', ['Meghan'], [chip.name, pepsi.name, puri.name]);
		// console.log(chip);
	var companies=[wall, puri, chip, pepsi, pizz, dog, sand];
});

