var btn_cre = document.querySelector(".btn_cre");
var btn_sub = document.querySelector(".btn_sub");
var show_array = document.querySelector(".show_array");
var result = document.querySelector(".result");
var sort_to_max = document.getElementById("sort_to_max");
var sort_to_min = document.getElementById("sort_to_min");
var thisArray = new Array;

// hàm sắp xếp tăng dần
function sap_tang (thisArray){
	for(let i=0; i<thisArray.length-1; i++){
		for(let j=0; j<thisArray.length-1-i; j++){
			if(thisArray[j] > thisArray[j+1]){
				let temp = thisArray[j];
				thisArray[j] = thisArray[j+1];
				thisArray[j+1] = temp;
			}
		}
	}
	return thisArray;
}

// hàm sắp xếp giảm dần
function sap_giam (thisArray){
	for(let i=0; i<thisArray.length-1; i++){
		for(let j=0; j<thisArray.length-1-i; j++){
			if(thisArray[j] < thisArray[j+1]){
				let temp = thisArray[j];
				thisArray[j] = thisArray[j+1];
				thisArray[j+1] = temp;
			}
		}
	}
	return thisArray;
}

// hàm thêm phần tử vào 1 vị trí trong hàm
function them (index, value, thisArray){
	thisArray.splice(index,0,value);
}

// bắt sự kiện click nút tạo mảng
btn_cre.addEventListener("click", function (){
	thisArray = new Array(Math.floor(Math.random() * 11) + 10);
	for(let i=0; i<thisArray.length; i++){
	  thisArray[i] = Math.floor(Math.random() * 91) + 10;
	}
	show_array.textContent = thisArray;
});

// bắt sự kiện thay đổi radio
sort_to_max.addEventListener("change", function(){
	sap_tang(thisArray);
	result.textContent = thisArray;
});

// bắt sự kiện thay đổi radio
sort_to_min.addEventListener("change", function(){
	sap_giam(thisArray);
	result.textContent = thisArray;
});

// bắt sự kiện click nút thêm
btn_sub.addEventListener("click", function (){
	let index = document.querySelector(".index_add").value;
	let value = document.querySelector(".value_add").value;
	them(index, value, thisArray);
	result.textContent = thisArray;
});