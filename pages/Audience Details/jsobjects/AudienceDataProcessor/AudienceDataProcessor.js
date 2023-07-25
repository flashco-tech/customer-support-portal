export default {
	userIds: [], 
	currentAudienceId: "",
	audienceIds: [],
	myVar2: {},
	getAudience: () => {
		this.userIds = [];
		this.currentAudienceId = "";
		this.audienceIds = [];
		
		GetAudience.run();

		for (const obj of GetAudience.data) {
			// console.log(`AudienceID: ${obj.audience_id}`)
			this.audienceIds.push(obj.audience_id);
		}
	},
	getUsersFromAudience: () => {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		this.getAudience();
		
		this.audienceIds.forEach ((str) =>
			{
				this.currentAudienceId = str;
			  GetUserIdsFromAudience.run();
				for(const obj of GetUserIdsFromAudience.data){
					// console.log(`Users: ${obj.identifiers.length}`)
					this.userIds = _.concat(this.userIds, obj.identifiers);
				}
			}
		)
		
		this.userIds = this.userIds.map(str => `'${str}'`);
		
		GetUserDetails.run();
	}
}