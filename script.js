window.addEventListener("scroll",function(){
	var nodeList = document.querySelectorAll("article");
	nodeList.forEach(function(node){
		if(node.getBoundingClientRect().top <= window.innerHeight)
			node.classList.add("active");
		else
			node.classList.remove("active");
	});
});
