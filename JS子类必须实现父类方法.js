class classA {
    fn1() {
        throw new Error('未实现fn1');
    }
}

class classB extends classA {

}

const bObj = new classB();

bObj.fn1();


