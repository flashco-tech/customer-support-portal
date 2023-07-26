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
	getEntityDetails: () => {
		var entityId = InputEntityId.inputText;
		var orderId = InputSenderOrderId.inputText;
		
		if (entityId.length > 0) {
			return GetEntityByEntityId.run()
		}
		else if (orderId.length > 0) {
			return GetEntityByOrderId.run()
		}
		
	},
	navigateToCustomerProfile: () => {
		const selectedRow = TableCustomerDetails.selectedRow;
		navigateTo('Customer Profile', {customerId: selectedRow.customer_id, emailAddress: selectedRow.email_address});
	}
}