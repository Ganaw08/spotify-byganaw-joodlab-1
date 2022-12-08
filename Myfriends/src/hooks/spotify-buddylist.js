const buddyList = require('./')

async function main () {
  const spDcCookie = 'put your cookie here'

  const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
  const friendActivity = await buddyList.getFriendActivity(accessToken)

  console.log(JSON.stringify(friendActivity, null, 2))
}