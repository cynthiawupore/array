
// “最后加” concat 连接两个或更多的数组，并返回结果。
	var a = ['a','b','c'];
	var b = ['x','y','z'];
	var c = a.concat(b,true);
	// alert(c)  //c变成 a,b,c,x,y,z


// join 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
	var d = a.join('');
	// alert(d)  //d变成abc
	var e = a.join(';');
	// alert(e)  //d变成a;b;c


// “最后加” push 向数组的末尾添加一个或更多元素，并返回新的长度。
    a.push('d');
	// alert(a) //a数组变成a,b,c,d


// reverse 颠倒数组中元素的顺序。
    a.reverse()
    // alert(a)  //a数组变成d,c,b,a


// “最后删1个” pop 删除并返回数组的最后一个元素
    a.pop('') 
    // alert(a)  //a数组变成d,c,b


// “开始删1个” shift 删除并返回数组的第一个元素
    a.shift();
    // alert(a)  //a数组变成c,b


// “开始增加n个” unshift 向数组的开头添加一个或更多元素，并返回新的长度。
	var h = ['a','b','c','d'];
	h.unshift('?','@')
	alert(h)


// "复制一段元素" slice(start,end) 从某个已有的数组返回选定的元素
	var f = a.slice(1,2)
	// alert(f) //复制了b元素


// sort 对数组的元素进行排序
    var e = ['f','e','d','i','a','p','c']
    var f = ['1','3','6','5','4']
    // e.sort();  //字母排序 a,c,d,e,f,i,p
    // alert(e) 
    f.sort();  //数字排序 1,3,4,5,6
    // alert(f) 



// “替换一段” splice(start,deleteCount,item...)删除元素，并向数组添加新元素。
    var g = ['a','b','c']
	g.splice(0,1,'ache','bug'); //数组0-1的位置上被替换成ache和bug
	// alert(g)




