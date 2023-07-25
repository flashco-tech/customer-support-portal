export default {
	myVar1: [],
	myVar2: {},
	getReferralDataByInput () {
		var uuid = InputCustomerId.inputText;
		var flashId = InputFlashId.inputText;
		
		if(uuid.length > 0)
			GetCustomerReferralsByUUID.run();
		else if(flashId.length)
			GetCustomerReferralsByFlashId.run();
		
	},
	getReferralData () {
		var uuid = InputCustomerId.inputText;
		var flashId = InputFlashId.inputText;
		
		if(uuid.length > 0)
			return GetCustomerReferralsByUUID.data;
		else if(flashId.length)
			return GetCustomerReferralsByFlashId.data;
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}