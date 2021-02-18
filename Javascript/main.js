
var myArray = [
    'cong thanh',
    'kashiwa',
    'tria',
    'alo',
];
console.log(myArray[1]);

var myObject = {
    name : 'công thành',
    age : '22',
    adress : 'kashiwa'
  
}
console.log('myObject', myObject);

var thanh1 = 'js js js js js js';
console.log(thanh1.replace(/js/g,'Javascript'));

var thanh2 = 'tôi tên là Nguyễn Công Thành';
console.log(thanh2.indexOf('Công Thành'));


var thanh3 = 'tôi tên là Nguyễn Công Thành';
console.log(thanh3.slice(11));

var thanh4 = 'tôi tên là Nguyễn Công Thành';
console.log(thanh4.toUpperCase());

var thanh5 = 'tôi tên là Nguyễn Công Thành';
console.log(thanh5.toLowerCase());

var thanh6 = '     tôi tên là Nguyễn Công Thành     ';
console.log(thanh6.trim().length);


// LÀM VIÊC VỚI ARRAY
var thanh7 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh7.toString());

var thanh8 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh8.join(', '));

var thanh9 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh9.pop());
console.log(thanh9);
// xóa phần tử cuối mảng và trả về chính phần tử đã xóa

var thanh10 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh10.shift());
console.log(thanh10.shift());
console.log(thanh10);
// xóa đi giá trị ở đầu mảng

var thanh11 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh11.push('cong thanh','tria'));
console.log(thanh11);
// thêm các phần tử ở cuối mảng và trả về giá trị mới



var thanh12 = [
    'hello',
    'how are you',
    'and you'
];
console.log(thanh12.unshift('My name is:', 'where are you?'));
console.log(thanh12);
// thêm vào giá trị ở đầu mảng

var thanh13 = [
    'hello',
    'how are you',
    'and you'
];
thanh13.splice(1, 2);
// splice(vị trí đặt con trỏ để xóa, số lượng phần tử muốn xóa từ vị trí con trỏ, 'chèn element mới')
console.log(thanh13);

var thanh14 = [
    'nguyen',
    'cong',
    'thanh'
];
console.log(thanh14.concat(thanh12));
// hợp nhất các element của các mảng lại với nhau

var thanh15 = [
    'hello',
    'how are you',
    'and you',
    'alo',
    'konnichiha'
];
console.log(thanh15.slice(1,4));
// cắt 1 hoặc nhiều element của mảng

function thanh16(){
    // alert('Xin chào các bạn');
}
thanh16();

function thanh17(message1,message2){
    console.log(message1);
    console.log(message2);
}
thanh17('tôi tên là thành','tôi ở kashiwa');

function thanh18(){
    console.log(arguments)
}
thanh18('thanh1','thanh2');

function thanh19(){
    for (var vonglap of arguments){
    console.log(vonglap);
    }
}
thanh19('lặp lần 1','lặp lần 2','lặp lần 3');

function thanh20(){
    var myString = '';
    for (var vonglapnoi of arguments){
        myString += `${vonglapnoi} - `
    }
    console.log(myString);
}
thanh20('lặp lần 1','lặp lần 2','lặp lần 3','lặp lần 4','lặp lần 5');

function phepcong(a,b){
    return a + b;
}
var result = phepcong(2,8);
console.log(result);
// return sẽ trả về giá trị của phép toán hoặc biến bên phải nó
// những dòng code sau return sẽ không được thực thi
// return có thể trả về bất cứ kiểu dữ liệu gì ( toString, array .....)

function thanh21(){
    console.log('tôi tên là')
}
function thanh21(){
    console.log('tôi tên là công thành')
}
thanh21();

// KIỂU OBJECT
var emailKey = 'email';
var myInfo = {
    name: 'Công Thành',
    age: 22,
    address: 'Kashiwa,Chiba',
    phone: '08065826078',
    [emailKey]: 'thanhlion1998@gmail.com',
    getName: function(){
        return this.name; //this là tên của myInfo
    },
    getAge: function(){

    }
};
delete myInfo.age;
console.log(myInfo); 
console.log(myInfo.getName()); //gọi function phải có dấu gọi --> ()



// OBJECT PROPERTY
// 1 cách viết khác: var User = function(firstName, lastName,avatar){}
function User(firstName, lastName,avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}` // this ở đây là gọi từ method --> getName
    }
}

//Prototype
// User.prototype.className = 'lionblog';
// console.log(author.className);

// ví dụ VIẾT NHỮNG THUỘC TÍNH CHUNG
var author = new User('Công', 'Thành', 'avatar');
var user = new User('Kiều', 'Ngân', 'avatar1');

// ví dụ thêm thuộc tính riêng cho từng biến
author.title = 'tôi tên là Nguyễn Công Thành';
user.comment = 'tôi biết rồi :)))';

console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());

//ĐỐI TƯỢNG DATE
var date = new Date();

var year = date.getYear();
var month = date.getMonth() + 1; // cộng 1 vì mặc định từ tháng 0 - 11
var day = date.getDate();

console.log(date);
console.log(`${day}/${month}/${year}`);


//CẤU TRÚC RẼ NHÁNH IF ELSE
var date = 2;
if(date === 8){
    console.log('hôm nay là thứ hai');
} else if(date === 5){
    console.log('hôm nay là thứ ba');
} else if( date === 8){
    console.log('hôm nay là thứ hai');  
}else{
    console.log('hôm nay là bảy');
}

// CÂU LỆNH RẼ NHÁNH SWITCH
// luôn viết default cuối cùng và không cần break vì đằng sau không còn case  nào
// sử dụng switch khi có từ 3 case trở lên hoặc biết trước giá trị để code đỡ rối và tối ưu
// dưới 3 case thì dùng if else

var date = 3;
switch(date){
    case 1:
    case 2:
        console.log('case chung số 1 và 2');
        break;
    case 3:
        console.log('case số 3');
    case 4:
        console.log('case số 4');
        break;
    case 5:
        console.log('case số 5');
        break;
        // nếu không có break thì nó sẽ hiển thị default
    default:
        console.log('không tìm thấy giá trị đúng');
}

//TOÁN TỬ BA NGÔI ternary operetor

var course = {
    name: 'Javascript',
    coin: 250
}
// if(course.coin > 0) {
//     console.log(`${course.coin} Coins `)
// }else{
//     console.log('Miễn phí')
// }

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);

// VÒNG LẶP FOR

for (var i = 1; i <= 3; i++) {
    console.log('i =', i);
}



var myArray = [
    'Javascript',
    'Python',
    'HTML',
    'CSS',
    'Java'
];

var arrayLength = myArray.length;
// khuyến khích viết ở ngoài để tối ưu 

for (var i = 0; i < arrayLength; i++) {
    console.log('Ngôn ngữ', myArray[i]);
}

// FOR/IN

var myInfo = {
    name: 'Công Thành',
    age: 23,
    address: 'Kashiwa, Chiba'
} 
for (var thanh22 in myInfo){
    console.log(myInfo[thanh22]);
}

// FOR OF

var language = [
    'Javascript',
    'PHP',
    'Ruby'
];
for (var thanh23 of language){
    console.log(thanh23)
}
//trường hợp là object
var myInfo = {
    name: 'Công Thành',
    age : 23,
    address: 'Kashiwa, Chiba, Japan'
}
console.log(Object.keys(myInfo));

// WHILE
 var myInfo = [
     'Công Thành',
     '23 tuổi',

 ];
 var i = 0;
 var result = myInfo.length
 while (i < result) {
     console.log(myInfo[i]);
     i++;
 }

// DO/WHILE
// vòng lặp do luôn chạy 1 lần dù điều kiện đúng hay sai


var i = 0;
var napthe = false;
do{
    i++;
    console.log('Nạp thẻ lần số ' + i);
    
    if(true){
        napthe = true;
    }

}while(!napthe && i < 3);

// BREAK & CONTINUE

for (var i = 0; i <= 10; i++) {
    console.log(i);

    if(i >= 4){
        break;
    }
}

for (var i = 10; i <= 20; i++) {
    if(i % 2 !== 0){
        continue;
    }
    console.log(i);
}

// VÒNG LẶP LỒNG NHAU (nested loop)

var myArray = [
    [100,200],
    [300,400],
    [500,600]
];

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j <myArray[i].length; j++) {
        console.log(myArray[i][j]);
    }
}

// MẢNG ARRAY MỞ RỘNG

var myArray = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'PHP',
        coin: 0
    },
    {
        id: 3,
        name: 'HTML',
        coin: 0
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 400
    },
    {
        id: 5,
        name: 'CSS',
        coin: 500
    },
    {
        id: 6,
        name: 'Javascript',
        coin: 300
    },
];

myArray.forEach(function(thanh24,stt){
    console.log(stt,thanh24);
})

// every: tất cả điều kiện trong mảng phải thỏa mãn 1 điều kiện gì đó
// every sẽ kiểm tra từng điều kiện nếu điều kiện sai sẽ không chạy ktra điều kiện tiếp theo mà in ra luôn
var every = myArray.every(function(thanh25,stt){
    console.log(stt); // sai tại vị trí đầu tiên nên dừng và in ra luôn
    return thanh25.coin === 0;
});
console.log(every);


// some nguyên tắc hoạt động giống every
// some: chỉ cần 1 phần tử trong mảng thỏa mãn điều kiện thì trả kq luôn

var some = myArray.some(function(thanh26,stt){
    console.log(stt);
    return thanh26.name === 'PHP';
});
console.log(some);

//find: chỉ trả về phần tử đúng đầu tiên

var course = myArray.find(function(thanh27,stt){
    return thanh27.name === 'Javascript';
});
console.log(course);

//filter: sẽ trả về hết tất cả phần tử đúng

var filter = myArray.filter(function(thanh28,stt){
    return thanh28.name === 'Javascript';
});
console.log(filter);

// MAP
// đối với map: nếu viết gì trong return thì sẽ in ra cái đó
var newCourses = myArray.map(function(thanh29){
    return {
        id: thanh29.id,
        name: `Khóa học: ${thanh29.name}`,
        coin: `Giá: ${thanh29.coin} Coin`
    }
});
console.log(newCourses);

// REDUCED 
// reduce sẽ nhận 2 đối số truyển vào(function, giá trị khởi tạo)
// trong function truyền vào 4 tham số (bienluutru,giatrihientai,chimuccuagiatrihientai, array gốc)

var i = 0;

function thanh30(accumulator,currentValue,currentIndex,originArray){
    i++;

    var thanh31 = accumulator + currentValue.coin;

    console.table({
        'Lượt chạy: ': i,
        'Biến lưu trữ: ': accumulator,
        ' Giá khóa học: ': currentValue.coin,
        ' Tích trữ được:' : thanh31
    });
    console.log(currentValue);
    // return cái gì thì in ra cái đó
    return thanh31;
}
var thanh32 = myArray.reduce(thanh30, 0);
// thanh30 là 1 function nhưng viết cách khác
// giá trị 0 sẽ được gán cho bienluutru và có giá trị đó luôn, trong lần chạy đầu tiên
console.log('Tổng số coin của khóa học: ',thanh32);


// Flat (làm phẳng mảng) từ Depth array (mảng sâu)
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9], 10];

var flatArray = depthArray.reduce(function (a, b) {
    return a.concat(b) 
    // a là mảng mới rỗng
    // b là giá trị của mảng cho trước depthArray
},[]) // khởi tạo gì thì viết giá trị đấy (ví dụ ở đây đang khởi tạo mảng rỗng [])
console.log(flatArray)


var thanh33 = [
    {
        topic : 'Font-end',
        courses: [
            {
                id:1,
                title: 'HTML-CSS'
            },
            {
                id:2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic : 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'Ruby',
            }
        ]
    }
];

var newArray = thanh33.reduce(function(a,b){
    return a.concat(b.courses)
}, [])
console.log(newArray)









