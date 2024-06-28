function greeting() {
    console.log("안녕 내 이름은 제시카야");
}

 greeting() 
 const myName = "뉴비버";
function printName(name) {
    return `안녕 내 이름은 ${name}야`;
}

console.log(printName(myName));


function meetAt(year, month, day) {
    if (year && !month && !day) {
        return `${year}년`;
    } else if (year && month && !day) {
        return `${year}년 ${month}월`;
    } else if (year && month && day) {
        return `${year}/ ${month}/${day}`;
    } else {
        return "잘못된 입력입니다.";
    }
}

console.log(meetAt(2022)); // 2022년
console.log(meetAt(2022, 5)); // 2022년 5월
console.log(meetAt(2022, 5, 15)); // 2022/ 5/15

function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    
    return smallest;
}

console.log(findSmallestElement([100, 200, 3, 0, 2, 1])); // 0


function calculateMinimumNotesAndCoins(amount) {
    const denominations = [50000, 1000, 100, 10, 1]; 
    let remainingAmount = amount;
    let result = "";

    for (let denomination of denominations) {
        if (remainingAmount >= denomination) {
            const count = Math.floor(remainingAmount / denomination);
            result += `${denomination}×${count}\n`;
            remainingAmount -= count * denomination;
        }
    }

      return result.trim();
}

console.log(calculateMinimumNotesAndCoins(54321));


