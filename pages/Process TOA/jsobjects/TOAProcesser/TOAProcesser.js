export default {
  genRefId: () => {
    let timeNow = new Date();
    let formattedTime = timeNow.toISOString().replace(/[^\d]/g, '').slice(0, 14);
    let randomString = Array.from({ length: 6 }, () => Math.random().toString(36).charAt(2)).join('').toUpperCase();
    let result = "FTS" + formattedTime + randomString;
    return result;
  },

  prepareFormData: () => {
    var formData = TOAProcessing.formData;

		if (formData.coins <= 0 || formData.coins > 200) {
			showAlert("Coins should be between 1 and 200");
		}

    var dataToSend = {
      "userId": formData.customerId,
      "description": "TOA for " + formData.merchant,
      "transactionRefId": this.genRefId(), // Use 'this' to refer to the current object
      "issuanceDetail": {
        "issuanceType": "REWARD_POINT",
        "amount": formData.coins,
        "description": formData.description
      },
      "metaInfo": {
        "type": "ONE_TIME_CREDIT",
        "metaInfo": {
          "merchant": formData.merchant,
          "campaignId": "9d04a6b7-2d82-478b-bc34-757e72dc6cc6",
          "emailType": formData.emailType
        }
      }
    };

    // You may want to return or use the 'dataToSend' object here
    return dataToSend;
  }
};