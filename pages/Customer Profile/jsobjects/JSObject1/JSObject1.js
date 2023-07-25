export default {
	myVar1: [],
	myVar2: {},
	getUserStreakData: () => {
			var campaignDataForUser = [];
			GetUserStreakData.data.forEach(item => {
				campaignDataForUser.push(item.tracking_data)
			});
			return campaignDataForUser;
	},
	getUserCashbackData: () => {
			var campaignDataForUser = [];
			GetUserCashbackCampaignDetails.data.forEach(item => {
				campaignDataForUser.push(item.data)
			});
			return campaignDataForUser;
	}
}