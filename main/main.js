//������ת��Ϊlcd�Ƶı�����ʽ����ӡ�ڿ���̨��
module.exports = function main(numbers) 
{
	//����ת���ɵ�lcd��ʽ�ַ���
	var lcdString = '';
	//�����ַ���ת���ɵ�����������
	var singleNumbers = [];
	//����0-9�����ֵ�lcd��ʽ�ַ���ÿ���ַ��������ַ�������
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
	//ȡ����������е����֣����浽������
	for(var i = 0; i < numbers.length; i++)
	{
		singleNumbers.push(numbers.charAt(i));
	}
	//���ѭ��������ÿ��lcd���ֵ������ַ���
	for(var i = 0; i < 3; i ++)
	{
		//�ڲ�ѭ��������ÿһ�����֣���ÿ�����ֶ�Ӧ���ж�������
		for(var j = 0; j < singleNumbers.length; j++)
		{
			//ȡ������
			var singleNumber = singleNumbers[j];
			//ȡ��lcd��ʽ���ַ���
			var lcdNumber = lcdNumbers[singleNumber];
			//����������һ�����֣�����' '�ո�����
			if(j != singleNumbers.length-1)
				lcdString = lcdString + lcdNumber[i] + ' ';
			//��������һ�����֣����ڽ�β��һ��'\n'����
			else
				lcdString = lcdString + lcdNumber[i] + '\n';
		}
	}
	//�������յ��ַ���
	console.log(lcdString);
	return lcdString;
};