abstract class classAA {
  abstract fn11();
}

class classBB extends classAA {
  fn11() {
    console.log("classBB.fn11");
  }
}

const bbObj = new classBB();
bbObj.fn11();
