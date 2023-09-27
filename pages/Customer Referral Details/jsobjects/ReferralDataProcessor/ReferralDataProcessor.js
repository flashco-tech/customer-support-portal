export default {
	myVar1: [],
	getReferralDataByInput () {
		
		var uuid = InputFlashUserUUID.inputText;
		
		if(uuid.length > 0){
			console.log("Referrer UUID", uuid.length)
			QueryReferee.run()
			QueryReferrer.run()
			
		}
		return [];
		
	},
	getReferralData () {
		// // var uuid = InputCustomerId.inputText;
		// var flashId = InputFlashUserUUID.inputText;
		// 
		// if(uuid.length > 0){
			// console.log("Referrer UUID", uuid.length)
			// return GetCustomerReferralsByUUID.data;
		// }
		// if(flashId.length > 0){
			// console.log("Referrer FlashId", flashId.length)
			// return GetCustomerReferralsByFlashId.data;
		// }
		
		return [];
		
	}
}