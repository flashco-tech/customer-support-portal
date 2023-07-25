export default {
	myVar1: [],
	myVar2: {},
	getCustomerDetails: () => {
		var customerEmailAddress = InputCustomerEmailAddress.inputText;
		var emailUUId = InputEmailUUID.inputText;
		
		if (customerEmailAddress.length > 0) {
			return GetCustomerByEmail.run();
		}
		else if (emailUUId.length > 0) {
			return GetCustomerByMailId.run();
		}
		
	},
	getEntityById: () => {
		var customerId = InputEntityId.inputText;
		if (customerId.length > 0) {
			return GetCustomerEntityList.run()
		}
	},
	navigateToCustomerProfile: () => {
		const selectedRow = TableCustomerDetails.selectedRow;
		navigateTo('Customer Profile', {customerId: selectedRow.customer_id, emailAddress: selectedRow.email_address});
	}
}