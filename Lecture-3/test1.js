// กำหนดอาร์เรย์
let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

// หาองค์ประกอบที่เหมือนกัน
let commonElements = values1.filter(value => values2.includes(value) && values3.includes(value));

// แสดงผลลัพธ์
console.log("Common Elements:", commonElements);
