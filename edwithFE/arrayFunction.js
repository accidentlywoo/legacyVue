// forEach, map, filter, immutable
var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}];
for(var i=0;i<data.length;i++){
    console.log(data[i].title, data[i].price)
}

data.forEach(function(v){
    console.log(v.title, v.price);
});

// map, filter 데이터를 가공해서 새로운 배열을 반환한다.
var filteredData = data.map(function(v){
    return v.price*1.1;
});
console.log("filteredData",filteredData);

var filterData = data.filter(function(v){
    return v.price > 5000;
})
console.log("filterData",filterData);
var filteredData = data.filter(function(v) {
    return v.price > 5000;
  }).map(function(v) {
    v.price = (''+v.price).replace(/^(\d+)(\d{3})$/, "$1,$2원");
    return v;
  });
  console.log("filteredData",filteredData);

  //원본 데이터를 유지(Immutable)
  var filteredData = data.filter(function(v){
      return v.price > 5000;
  }).map(function(v){
      var obj = {};
      obj.title = v.title;
      obj.content = v.content;
      obj.price = (''+v.price).replace(/^(\d+)(\d{3})$/, "$1,$2원");
      return obj;
  });

  // reduce는 배열의 모든 요소에 대해 지정된 콜백 함수를 호출하며, 콜백 함수의 반환값을 누적하여 반환하는 함수
  // reduce 함수의 매개변수로 콜백 함수와 누적을 시작하기 위한 초기 값이며 초기 값은 선택사항
  var totalPrice = data.reduce(function(preValue, product){return preValue+product.price})
  console.log("totalPrice",totalPrice)