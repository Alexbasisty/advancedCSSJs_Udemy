document.addEventListener("DOMContentLoaded", () => {
  // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

  var moveZeros = function (arr) {
    // TODO: Program me
    const noZero = arr.filter((el) => el !== 0);
    const zero = arr.filter((el) => el === 0);

    return [...noZero, ...zero];
  };
  console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
});

// password validator

function validate(password) {
  // return (
  //     /[A-Z]/.test(password) &&
  //     /[a-z]/.test(password) &&
  //     /[0-9]/.test(password) &&
  //     password.length > 6
  // );

  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
}

console.log(validate("aDdas41"));

//a function that when given a URL as a string, parses out just the domain name and returns it as a string

// function domainName(url) {
//     //your code here
//     const a = url.split(/[:/.]/g).filter((item) => item.length !== 0);
//     if (
//         (a[0] === "http" || a[0] === "www" || a[0] === "https") &&
//         a[1] !== "www"
//     ) {
//         return a[1];
//     } else if (a[0] !== "http" && a[0] !== "www" && a[0] !== "https") {
//         return a[0];
//     } else {
//         return a[2];
//     }
// }

// sec option

function domainName(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("https://youtube.com"));

// helper pagination class

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  return pageIndex < this.pageCount()
    ? Math.min(
        this.itemsPerPage,
        this.collection.length - pageIndex * this.itemsPerPage
      )
    : -1;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
};

//Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

function determinant(m) {
  let answer = 0;
  if (m.length === 1) {
    return m[0][0];
  } else if (m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }
  for (let i = 0; i < m.length; i++) {
    answer += Math.pow(-1, i) * m[0][i] * determinant(deleteRowAndColumn(m, i));
  }
  return answer;
}

function deleteRowAndColumn(M, index) {
  let temp = [];
  for (let i = 0; i < M.length; i++) {
    temp.push(M[i].slice(0));
  }
  temp.splice(0, 1);
  for (let i = 0; i < temp.length; i++) {
    temp[i].splice(index, 1);
  }
  return temp;
}
m1 = [
  [1, 3],
  [2, 5],
];
m2 = [
  [2, 5, 3],
  [1, -2, -1],
  [1, 3, 4],
];
m3 = [[2]];
console.log(determinant(m1));
console.log(determinant(m2));
console.log(determinant(m3));

// *****************

//Write a program that will calculate the number of trailing zeros in a factorial of a given number.

function zeros(n) {
  // your code here
  let result = 0;
  while ((n = Math.floor(n / 5))) result += n;
  return result;
}

/**
  zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros 

   */

/*
   find duplicates in transactions
   */
const tr1 = [
  {
    id: 3,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:34:30.000Z",
  },
  {
    id: 1,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:33:00.000Z",
  },
  {
    id: 6,
    sourceAccount: "A",
    targetAccount: "C",
    amount: 250,
    category: "other",
    time: "2018-03-02T10:33:05.000Z",
  },
  {
    id: 4,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:36:00.000Z",
  },
  {
    id: 2,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:33:50.000Z",
  },
  {
    id: 5,
    sourceAccount: "A",
    targetAccount: "C",
    amount: 250,
    category: "other",
    time: "2018-03-02T10:33:00.000Z",
  },
];

const findDuplicateTransactions = (transactions = []) => {
  // Add your implementation here...
  if (transactions.length === 0) {
    return [];
  }
  let result = [];

  for (let item of transactions) {
    for (let checkingItem of transactions) {
      if (
        transactions.indexOf(item) !== transactions.indexOf(checkingItem) &&
        item.sourceAccount === checkingItem.sourceAccount &&
        item.targetAccount === checkingItem.targetAccount &&
        item.amount === checkingItem.amount &&
        item.category === checkingItem.category
      ) {
        if (result.indexOf(checkingItem) === -1) {
          result.push(checkingItem);
        }
      }
    }
  }

  return result;
};
console.log(findDuplicateTransactions(tr1));
// {
//   id: 3,
//   sourceAccount: 'A',
//   targetAccount: 'B',
//   amount: 100,
//   category: 'eating_out',
//   time: '2018-03-02T10:34:30.000Z'
// },
