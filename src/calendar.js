
const moment = require("moment");
var chalk = require("chalk")
moment.locale('zh-cn');
let baseNumber = moment().dayOfYear() * 666 * 880+'';
let currentDay  = moment().dayOfYear()
console.log(baseNumber , baseNumber.length)
let tools = ["VS Code写程序", "MSOffice写文档", "记事本写程序", "Windows10", "Linux", "MacOS", "IE", "Android设备", "iOS设备"];
let activities = [
    { name: "写单元测试", good: "写单元测试将减少出错", bad: "写单元测试会降低你的开发效率" },
    { name: "洗澡", good: "你几天没洗澡了？", bad: "会把设计方面的灵感洗掉", weekend: true },
    { name: "锻炼一下身体", good: "完美身材,跟女神在一起会有戏", bad: "能量没消耗多少，吃得却更多", weekend: true },
    { name: "抽烟", good: "抽烟有利于提神，增加思维敏捷", bad: "除非你活够了，死得早点没关系", weekend: true },
    { name: "白天上线", good: "今天白天上线是安全的", bad: "可能导致灾难性后果" },
    { name: "重构", good: "代码质量得到提高", bad: "你很有可能会陷入泥潭" },
    { name: `使用${tools[baseNumber % baseNumber.length]}`, good: "你看起来更有品位", bad: "别人会觉得你在装逼" },
    { name: "招人", good: "你面前这位有成为牛人的潜质", bad: "这人会写程序吗？" },
    { name: "面试", good: "面试官今天心情很好", bad: "面试官不爽，会拿你出气" },
    { name: "申请加薪", good: "老板今天心情很好", bad: "公司正在考虑裁员" },
    { name: "晚上加班", good: "晚上是程序员精神最好的时候", bad: "他妈的晚上又要加班", weekend: true },
    { name: "在妹子面前吹牛", good: "改善你矮穷挫的形象", bad: "会被识破", weekend: true },
    { name: "浏览成人网站", good: "重拾对生活的信心", bad: "你会心神不宁", weekend: true },
    { name: `写超过501行的方法`, good: "你的代码组织的很好，长一点没关系", bad: "你的代码将混乱不堪，你自己都看不懂" },
    { name: "提交代码", good: "遇到冲突的几率是最低的", bad: "你遇到的一大堆冲突会让你觉得自己是不是时间穿越了" },
    { name: "代码复审", good: "发现重要问题的几率大大增加", bad: "你什么问题都发现不了，白白浪费时间" },
    { name: "开会", good: "写代码之余放松一下打个盹，有益健康", bad: "小心被扣屎盆子背黑锅" },
    { name: "晚上上线", good: "晚上是程序员精神最好的时候", bad: "你白天已经筋疲力尽了" },
    { name: "修复BUG", good: "你今天对BUG的嗅觉大大提高", bad: "新产生的BUG将比修复的更多" },
    { name: "设计评审", good: "设计评审会议将变成头脑风暴", bad: "人人筋疲力尽，评审就这么过了" },
    { name: "上微博", good: "今天发生的事不能错过", bad: "今天的微博充满负能量", weekend: true },
    { name: "上B站", good: "还需要理由吗？", bad: "满屏的兄贵我会说出来？", weekend: true },
]
let weeks = ["日", "一", "二", "三", "四", "五", "六"]
let directions = ["北方", "东北方", "东方", "东南方", "南方", "西南方", "西方", "西北方"]
let drinks = ["水", "茶", "红茶", "绿茶", "咖啡", "奶茶", "可乐", "牛奶", "豆奶", "果汁", "果味汽水", "苏打水", "运动饮料", "酸奶", "酒"]


function random(dayseed, indexseed) {
	var n = dayseed % 9999999;
	for (var i = 0; i < 100 + indexseed; i++) {
		n = n * n;
		n = n % 5555555; 
	}
	return n+'';
}


module.exports = {
    init(){
        let luckyNumber =random(baseNumber,currentDay)
        console.log('luckyNumber',luckyNumber)
        let indexofLucky = luckyNumber.split('');
        
        let badNumber = (baseNumber / 4)+""
        let indexofBad = badNumber.split('');
        
        function printLuck(index){
            let luckIndex = indexofLucky[index]
            let name = activities[luckIndex].name
            let good = activities[luckIndex].good
            activities.splice(luckIndex * 1, 1)
            return `
            ${name}:${good}`
        }

        function printBad(index){
            let badIndex = indexofBad[index]
            let name = activities[badIndex].name
            let bad = activities[badIndex].bad
            activities.splice(badIndex * 1, 1)
            return `
            ${name}:${bad}`
        }

        function printDirections(){
            let num = directions.length % indexofLucky[0]
            let index = (num >= directions.length ? directions.length - 1 : num)
            return directions[index]
        }

        function printDrinks(){
            let num = drinks.length % indexofLucky[0]
            let index = (num >= drinks.length ? drinks.length - 1 : num)
            return drinks[index]
        }
        console.log(chalk.green(`
        现在是${moment().format("LLLL")}
        ${chalk.cyan('---------------------------------')}
        宜:
            ${printLuck(1)}
            ${printLuck(2)}
            ${printLuck(3)}
        `))

        console.log(chalk.red(`
        忌:
         ${printBad(1)}
         ${printBad(2)}
         ${printBad(3)}
        `))
        console.log(chalk.green(`
       ${chalk.cyan('----------------------------------')}
        座位朝向:面向${printDirections()}写程序，BUG 最少
        今日宜饮: ${printDrinks()}
        `))
    }
}