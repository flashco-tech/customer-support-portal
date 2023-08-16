export default {
	myVar1: [],
	getReferralDataByInput () {
		var uuid = InputCustomerId.inputText;
		var flashId = InputFlashId.inputText;
		
		if(uuid.length > 0){
			console.log("Referrer UUID", uuid.length)
			GetCustomerReferralsByUUID.run();
		}
		if(flashId.length > 0){
			console.log("Referrer FlashId", flashId.length)
			GetCustomerReferralsByFlashId.run();
		}
		
		return [];
		
	},
	getReferralData () {
		var uuid = InputCustomerId.inputText;
		var flashId = InputFlashId.inputText;
		
		if(uuid.length > 0){
			console.log("Referrer UUID", uuid.length)
			return GetCustomerReferralsByUUID.data;
		}
		if(flashId.length > 0){
			console.log("Referrer FlashId", flashId.length)
			return GetCustomerReferralsByFlashId.data;
		}
		
		return [];
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}