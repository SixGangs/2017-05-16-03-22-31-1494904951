//把数字转化为lcd灯的表现形式，打印在控制台上
module.exports = function main(numbers) 
{
	//最终转换成的lcd形式字符串
	var lcdString = '';
	//输入字符串转换成单个数字数组
	var singleNumbers = [];
	//定义0-9的数字的lcd形式字符，每个字符由三行字符串构成
    var lcdNumbers = [
	[['._.'],['|.|'],['|_|']],
	[['...'],['..|'],['..|']],
	[['._.'],['._|'],['|_.']],
	[['._. '],['._|'],['._|']],
	[['...'],['|_|'],['..|']],
	[['._.'],['|_.'],['._|']],
	[['._.'],['|_.'],['|_|']],
	[['._.'],['..|'],['..|']],
	[['._.'],['|_|'],['|_|']],
	[['._.'],['|_|'],['..|']]
	];
	//取出输入参数中的数字，保存到数组中
	for(var i = 0; i < numbers.length; i++)
	{
		singleNumbers.push(numbers.charAt(i));
	}
	//外层循环，遍历每个lcd数字的三行字符串
	for(var i = 0; i < 3; i ++)
	{
		//内层循环，遍历每一个数字，把每个数字对应的行都加起来
		for(var j = 0; j < singleNumbers.length; j++)
		{
			//取出数字
			var singleNumber = singleNumbers[j];
			//取出lcd形式的字符串
			var lcdNumber = lcdNumbers[singleNumber];
			//如果不是最后一个数字，就用' '空格连接
			if(j != singleNumbers.length-1)
				lcdString = lcdString + lcdNumber[i] + ' ';
			//如果是最后一个数字，就在结尾加一个'\n'换行
			else
				lcdString = lcdString + lcdNumber[i] + '\n';
		}
	}
	//返回最终的字符串
	console.log(lcdString);
	return lcdString;
};