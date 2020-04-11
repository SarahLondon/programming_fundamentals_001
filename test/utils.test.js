const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 150 when passed 300", () => {
    expect(utils.makeHalfPrice(300)).toBe(150);
  });
});

describe("utils.countBooks", () => {
  test("returns 2 when passed 2", () => {
    expect(utils.countBooks(["The Bible", "La Divina Commedia"])).toBe(2);
  });
});

describe("utils.isInStock", () => {
test("returns true if the title is in stock", () => {
  const book = {
    title: "The Bible",
    author: "Unknown",
    yearOfPublication: 1993,
    quantity: 9
  };

  expect(utils.isInStock(book)).toBe(true);
});

test("returns true if the title is in stock", () => {
  const book = {
    title: "The Bible",
    author: "Unknown",
    yearOfPublication: 1993,
    quantity: 0
  };

  expect(utils.isInStock(book)).toBe(false);
});
});

describe("utils.getTotalOrderPrice", () => {
  test("returns 43.2 when passed 2", () => {
    expect(utils.getTotalOrderPrice(2)).toBe(43.2);
  });

test("returns 43.2 when passed 18", () => {
  expect(utils.getTotalOrderPrice(18)).toBe(43.2);
});

test("returns 43.2 when passed 18 and 2", () => {
  expect(utils.getTotalOrderPrice(18,2)).toBe(43.2);
});
});