$(document).on('ready', function() {
  
   $('#first-button').on('click', function(){
   	var originalField = $(this);
   	var input = $('<textarea class="edit-input" />');
    $(this).after(input);
    input.height($(this).height());
    $(this).hide();

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
	var wall=newCompany('Wall Mart', []);
	var puri=newCompany('Purina', []);
	var chip=newCompany('Chipotle', []);
	var pepsi=newCompany('Pepsi', []);
	var pizz=newCompany('Pizzaria Locale', ['Chipotle']);
	var dog=newCompany('Dog Foodz', ['Purina', 'Wall Mart']);
	var sand=newCompany('Quiznos', ['Chipotle', 'Pepsi', 'Purina']);

	
});
});