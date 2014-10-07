$(document).on('ready', function() {
  
   $('#first-button').on('click', function(){
   	var originalField = $(this);
   	var input = $('<textarea class="edit-input" />');
    $(this).after(input);
    input.height($(this).height());
    $(this).hide();
});
 //    var companyList = {
	// 	companies: {
	// 		company1: 'First Company',
	// 		company2: 'Second Company',
	// 		company3: 'Third Company'
	// 	},
	// 	owners: {
	// 		name1: "First Company's Owner",
	// 		name2: "Second Company's Owner",
	// 		name3: "Third Company's Owner",
	// 		},
	// 	associates: {
	// 		associate1: "First Owner's Associate",
	// 		associate2: "Second Owner's Associate",
	// 		associate3: "Third Owner's Associate"
	// 		}
	// };

	// var Company = function(name){
	// this.name = name;
	// };
	// Company.prototype.render = function() {
	// if(this.element) return this.element;
	// };




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

	var Companies=[wall, puri, chip, pepsi, pizz, dog, sand];
	var callOut = function (){
		for (var i = 0; i < Companies.length; i++) {
			// console.log(Companies[i].associates);
		console.log(Companies[i].name + ' ' + Companies[i].owners + ' ' + Companies[i].associates);
		if(Companies[i].name === 'edit-input'){
			alert(Companies[i].name + ' is owned by ' + Companies[i].owners + ' and is associated with ' + Companies[i].associates);
			// foundCompany = Companies.splice(i, 1);
		
		// return Companies;
		}
	}
};
callOut();
});

