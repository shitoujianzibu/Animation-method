/*
 * obj : 对象  
 * speed : 速度 
 * target : 目标位置 
 * attr : 属性 例如height left
 * time : 执行频率
 * callback : 回调函数 
 */
function move(obj , speed ,target , attr , time , callback ){
	clearInterval(obj.timer);
	var current = parseInt(getStyle(obj, attr));
	if (current > target){
		speed = -speed
	}
	obj.timer = setInterval(function(){
		var oldValue = parseInt(getStyle(obj, attr));
		var newValue = oldValue + speed;
		if(speed > 0 && newValue > target || speed < 0 && newValue < target){
			newValue = target;
		}
		obj.style[attr] = newValue +'px';
		if(newValue == target){
			clearInterval(obj.timer);
			callback && callback()
		}
	} , time);
}
function getStyle(obj, name) {
	//如果该函数存在，则会返回true
	if(window.getComputedStyle) {
		//如果是正常的浏览器,需要使用getComputedStyle
		return getComputedStyle(obj, null)[name];
	} else {
		//如果进入else则证明浏览器不支持getComputedStyle()
		//IE8需要使用currentStyle
		return obj.currentStyle[name];
	}
}