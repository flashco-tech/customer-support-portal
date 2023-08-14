export default {
	myVar1: [],
	getReferralData () {
		var uuid = InputCustomerId.inputText;
		var flashId = InputFlashId.inputText;
		
		if(uuid.length > 0)
			return GetCustomerReferralsByUUID.data;
		else if(flashId.length)
			return GetCustomerReferralsByFlashId.data;
		else return [];
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}