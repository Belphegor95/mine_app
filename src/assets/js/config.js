var api = api || {};

api.monmsg = "网络遇到问题,请重试!";

api.baseUrl = "http://121.89.215.118:8001"

// 1.4.1 系统登录
api.user_login = "/index/user/login";
api.index_index = "/index/index/index";
// 4,新闻详情
api.index_newslist = "/index/index/newslist";
// 5,矿机市场
api.index_ito = "/index/index/ito";
// 6，获取用户的某一字段值
api.user_getmyinfo = "/index/user/getmyinfo";
// 7,我的团队
api.user_myTeam = "/index/user/myTeam";
// 8,交易大厅
api.trade_index = "/index/trade/index";
// 9，出售矿币
api.trade_sale = "/index/trade/sale";
// 10，出售矿币换算实际出售数量
api.trade_getreal = "/index/trade/getreal";
// 11，我的交易
api.trade_mytrade = "/index/trade/mytrade";
// 12，买入矿币
api.trade_buy = "/index/trade/buy";
// 13,上传支付凭证
api.trade_edit_voucher = "/index/trade/edit_voucher";
// 14 签到
api.user_sign = "/index/user/sign";
// 15 道具商城（防偷）
api.index_tools = "/index/index/tools";
// 16 推荐好友
api.index_recommend = "/index/index/recommend";
// 17，搜索好友
api.index_search = "/index/index/search";
// 18，我的好友
api.user_myfriends = "/index/user/myfriends";
// 19，添加好友
api.user_addfriend = "/index/user/addfriend";
// 20，游戏首页
api.game_index = "/index/game/index";



// 24,账户明细
api.user_mycash = "/index/user/mycash";
// 25，修改登录密码
api.user_changePwd = "/index/user/changePwd";
// 26，修改支付密码
api.user_changeSafe = "/index/user/changeSafe";
// 27，注册账号
api.every_register = "/index/every/register";
// 28，绑定支付宝
api.user_bindAlipay = "/index/user/bindAlipay";
// 29，绑定银行卡
api.user_blindBank = "/index/user/blindBank";
// 30，广告分类
api.index_cates = "/index/index/cates";
// 31，广告列表
api.index_advert = "/index/index/advert";
// 32，广告详情
api.index_advertDetail = "/index/index/advertDetail";
// 33，我的广告
api.advert_index = "/index/advert/index";
// 34，上传视频
api.every_upload = "/index/every/upload";
// 35,添加广告
api.advert_add = "/index/advert/add";
// 36,获取广告押金额度
api.index_showconfig = "/index/index/showconfig";
// 37，交押金
api.advert_deposit = "/index/advert/deposit";
// 38,退押金
api.advert_backdeposit = "/index/advert/backdeposit";
// 39,删除广告
api.advert_delete = "/index/advert/delete";
// 40,我的朋友圈
api.friend_index = "/index/friend/index";
// 41，发布朋友圈
api.friend_add = "/index/friend/add";
// 42，评论朋友圈
api.friend_comment = "/index/friend/comment";
// 43,点赞
api.friend_thumb = "/index/friend/thumb";

export { api };