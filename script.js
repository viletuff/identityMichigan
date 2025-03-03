
let element = document.getElementById("nameContingentQuestions");

function toggleQuestions() {
    let changeValue = document.querySelector('input[name="changeType"]:checked')?.value; 
   // optional chaining
    let nameContingentQuestions = document.getElementById("nameContingentQuestions");
    
    if (changeValue === "name" || changeValue === "both") { // Compare with strings
        nameContingentQuestions.classList.remove('hidden');
    } else {
        nameContingentQuestions.classList.add('hidden');
    }
}

    
    function togglePassport() {
        const selectedValues = Array.from(document.querySelectorAll('input[name="idDocs"]:checked')).map(el => el.value);
        const passportTimeQuestions = document.getElementById("passportContingentQuestions");
        
        if (selectedValues.includes("passport")) {
            passportTimeQuestions.classList.remove('hidden');
        } else {
            passportTimeQuestions.classList.add('hidden');
        }
    }

let instructionAnswers = document.getElementById("instructions");



function generateInstructions() {
    let changeValue = document.querySelector('input[name="changeType"]:checked')?.value; 
    let idDocs = Array.from(document.querySelectorAll('input[name="idDocs"]:checked')).map(el => el.value);
    let instructionsContainer = document.querySelector(".instructionsContainer");
    let courtInstructionsVar = document.getElementById('courtInstructions');
    let lowIncomeValue = document.querySelector('input[name="incomeLevel"]:checked')?.value;
	let lowIncomeNote = document.getElementById('lowIncomeNote');
	let poopoo = document.getElementById('poopoo');
	let passportTrumpNote = document.getElementById('passportTrumpNote')
	let crimRecord = document.querySelector('input[name="crimRecord"]:checked')?.value;
	let famCourtValue = document.querySelector('input[name="famCourt"]:checked')?.value;
	let pubStatus = document.querySelector('input[name="pubRequirement"]:checked')?.value;

	
    // Show instructions container first
    instructionsContainer.classList.remove('hidden');
	if (famCourtValue=="yesFam") {
	    let famCourtInstruction = document.getElementById("famCourtNote")
	    famCourtInstruction.classList.remove("hidden")
	}
	
	if (crimRecord=="minorOffense") {
	    let minorOffenseInstruction = document.getElementById("minorOffenseNote")
	    minorOffenseInstruction.classList.remove("hidden")
	} else if (crimRecord=="majorOffense") {
	    let majorOffenseInstruction = document.getElementById("majorOffenseNote")
	    majorOffenseInstruction.classList.remove("hidden")
	}
		if (lowIncomeValue === "incomeLow") {
		lowIncomeNote.classList.remove('hidden')
	} else {
		lowIncomeNote.classList.add('hidden')
	}
		if (changeValue=="gender" && idDocs =="socialSec") {
			poopoo.classList.remove("hidden")
		} else if (changeValue =="gender" && idDocs=="passport") {
			passportTrumpNote.classList.remove('hidden')
		}
	
    // Show court instructions if name change or both is selected
    if (changeValue === "name" || changeValue === "both") {
        courtInstructionsVar.classList.remove('hidden');
    }

    // Show relevant document instructions
    if (idDocs.includes("driver")) {
        document.querySelector('.driversInstruction').classList.remove('hidden');
    }
    if (idDocs.includes("birthCert")) {
        document.querySelector('.birthCertInstructions').classList.remove('hidden');
    }
    if (idDocs.includes("socialSec")) {
        document.querySelector('.socSecInstructions').classList.remove('hidden');
    }
    if (idDocs.includes("passport")) {
        document.querySelector('.passPortInstructions').classList.remove('hidden');
    }
    if (crimRecord =="majorOffense"){
        let majorOffenseNote = document.getElementById("majorOffenseNote")
        majorOffenseNote.classList.remove("hidden")
    } else if (crimRecord=="minorOffense") {
        let minorOffenseNote = document.getElementById("minorOffenseNote")
        minorOffenseNote.classList.remove("hidden")
    }
    if (pubStatus == "noPub"){
					let noPubPetition = document.getElementById("noPubPetition");
					
					noPubPetition.classList.remove("hidden")
					 
				} else if (pubStatus == "yesPub") {
					let yesPubNote = document.getElementById("yesPubNote");
					let yesPubPetition = document.getElementById("yesPubPetition");
					
					yesPubPetition.classList.remove("hidden");
					yesPubNote.classList.remove("hidden");
					 
				}
				
    
    // Show low income note if applicable
    if (lowIncomeValue === "incomeLow") {
        lowIncomeNote.classList.remove('hidden');
    } else {
        lowIncomeNote.classList.add('hidden');
    }
}
       
        
            function addCosts() {
                // Cost configuration (update these values if needed)
                const costs = {
                    driver: 19, // Driver's License
                    birthCert: 50, // Birth Certificate
                    socialSec: 0, // Social Security Card (usually free)
                 	passportCard: 30,
                 	passportBook: 110,  //passport card
                    courtFees: 175, // Court Fees
                    fingerPrint: 15, //finger Printing
                    backgroundCheck: 43.25, // Fingerprinting
                    executionFee: 35, // Passport Execution Fee
                    courtOrder: 20, // Court Order
                    birthCertExp: 25, // Birth Certificate Expedited
                    petitionFee: 175, //PC 51
                }
                
            
                // Initialize total and selections
                let totalCost = 0;
                const selectedItems = [];
            let ageRange = document.querySelector('input[name="ageRange"]:checked')?.value;
                // 1. Always include court fees for name/both changes
                let changeType = document.querySelector('input[name="changeType"]:checked')?.value;
           
		   if (changeType== 'name' || changeType == 'both') {
                	totalCost += costs.petitionFee;
					selectedItems.push(`Petition Fee: $${costs.petitionFee}`);
		
					
                }
				
				
			
                // 3. Document-related fees (driver, passport, social security)
                document.querySelectorAll('input[name="idDocs"]:checked').forEach(checkbox => {
                    switch(checkbox.value) {
					
						
                        case "driver":
                            totalCost += costs.driver;
                            selectedItems.push(`Driver's License: $${costs.driver}`);
                            break;
                        case "passport":
                            totalCost += costs.passportBook + costs.passportCard + costs.executionFee;
                            selectedItems.push(
                                `Passport Book: $${costs.passportBook}`,
								`Passport Card: $${costs.passportCard}`,
                                `Execution Fee: $${costs.executionFee}`
                            );
                            break;
                        case "birthCert":
                            totalCost += costs.birthCert; 
                            selectedItems.push(`Birth Certificate: $${costs.birthCert}`);
                            break;
                        case "socialSec":
                            totalCost += costs.socialSec; 
                            selectedItems.push(`Social Security Card: $${costs.socialSec}`);
                            break;
                        
                    }
                });
            
                // 4. Conditional fingerprinting fee
             
				
                if ((changeType== 'name'|| changeType== 'both')) {
                    totalCost += costs.fingerPrint;
                    selectedItems.push(`Fingerprinting: $${costs.fingerPrint}`);
                    totalCost += costs.backgroundCheck;
                    selectedItems.push(`Background Check: $${costs.backgroundCheck}`);
                }
            
                // 5. Display results
                const resultsContainer = document.getElementById("results");
                resultsContainer.innerHTML = `
                    
                    ${selectedItems.map(item => `<p> ${item}</p>`).join('')}
                    <h4>Estimated Total: $${totalCost.toFixed(2)}</h4>
                `;
            
         
			}
            
