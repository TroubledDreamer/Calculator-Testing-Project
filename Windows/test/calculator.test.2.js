
describe('Full Calculator', function() {
  beforeEach(function() {
    var fixture = `
    <div id="fixture">
      <div id="space"></div>
      <div id="display">
        <div id="result">0</div>
      </div>
      <div id="solar">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
      <div id="buttons">
        <div class="buttonContainer"><button id="changeSign">+/-</button></div>
        <div class="buttonContainer"><button id="squareRoot">√</button></div>
        <div class="buttonContainer"><button id="percent">%</button></div>
        <div class="buttonContainer"><button id="division">÷</button></div>
        <div class="buttonContainer"><button id="memoryRecall">MRC</button></div>
        <div class="buttonContainer"><button id="memoryMinus">M-</button></div>
        <div class="buttonContainer"><button id="memoryPlus">M+</button></div>
        <div class="buttonContainer"><button id="multiply">x</button></div>
        <div class="buttonContainer"><button id="seven">7</button></div>
        <div class="buttonContainer"><button id="eight">8</button></div>
        <div class="buttonContainer"><button id="nine">9</button></div>
        <div class="buttonContainer"><button id="minus">-</button></div>
        <div class="buttonContainer"><button id="four">4</button></div>
        <div class="buttonContainer"><button id="five">5</button></div>
        <div class="buttonContainer"><button id="six">6</button></div>
        <div class="buttonContainer"><button id="plus">+</button></div>
        <div class="buttonContainer"><button id="one">1</button></div>
        <div class="buttonContainer"><button id="two">2</button></div>
        <div class="buttonContainer"><button id="three">3</button></div>
        <div class="buttonContainer"><button id="equal">=</button></div>
        <div class="buttonContainer"><button id="onoffclear">on/c</button></div>
        <div class="buttonContainer"><button id="zero">0</button></div>
        <div class="buttonContainer"><button id="decimalPoint">.</button></div>
      </div>
    </div>`;

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);

    window.calculator.init();
    

  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  // beforeEach(function() {
  //   window.calculator.init();

 
  // });

//   beforeAll((done) => {
//     window.onload = () => {
//         done();  // Karma will wait for this before starting the tests
//     };
// });



    it('should display 0 by default', function() {
      expect(document.getElementById('result').innerText).toBe('0');
    });

    it('should append numbers to display', function() {
      document.getElementById('one').click();
      document.getElementById('two').click();
      document.getElementById('three').click();
      expect(document.getElementById('result').innerText).toBe('123');
    });

    it('should handle decimal points', function() {
      document.getElementById('one').click();
      document.getElementById('decimalPoint').click();
      document.getElementById('two').click();
      expect(document.getElementById('result').innerText).toBe('1.2');
    });

    it('should not allow multiple decimal points', function() {
      document.getElementById('one').click();
      document.getElementById('decimalPoint').click();
      document.getElementById('decimalPoint').click();
      document.getElementById('two').click();
      expect(document.getElementById('result').innerText).toBe('1.2');
    });
 

  describe('Basic Operations', function() {
    it('should add two numbers', function() {
      document.getElementById('one').click();
      document.getElementById('plus').click();
      document.getElementById('two').click();
      document.getElementById('equal').click();
      expect(document.getElementById('result').innerText).toBe('3');
    });

    it('should subtract two numbers', function() {
      document.getElementById('five').click();
      document.getElementById('minus').click();
      document.getElementById('three').click();
      document.getElementById('equal').click();
      expect(document.getElementById('result').innerText).toBe('2');
    });

    it('should multiply two numbers', function() {
      document.getElementById('four').click();
      document.getElementById('multiply').click();
      document.getElementById('five').click();
      document.getElementById('equal').click();
      expect(document.getElementById('result').innerText).toBe('20');
    });

    it('should divide two numbers', function() {
      document.getElementById('six').click();
      document.getElementById('division').click();
      document.getElementById('two').click();
      document.getElementById('equal').click();
      expect(document.getElementById('result').innerText).toBe('3');
    });

    it('should chain multiple operations', function() {
      document.getElementById('one').click();
      document.getElementById('plus').click();
      document.getElementById('two').click();
      document.getElementById('multiply').click();
      document.getElementById('three').click();
      document.getElementById('equal').click();
      expect(document.getElementById('result').innerText).toBe('9');
    });
  });

    it('should clear the display', function() {
      document.getElementById('one').click();
      document.getElementById('two').click();
      document.getElementById('onoffclear').click();
      expect(document.getElementById('result').innerText).toBe('0');
    });

    it('should calculate percentage', function() {
      document.getElementById('five').click();
      document.getElementById('zero').click();
      document.getElementById('percent').click();
      expect(document.getElementById('result').innerText).toBe('0.5');
    });

    it('should calculate square root', function() {
      document.getElementById('nine').click();
      document.getElementById('squareRoot').click();
      expect(document.getElementById('result').innerText).toBe('3');
    });

    it('should change sign', function() {
      document.getElementById('five').click();
      document.getElementById('changeSign').click();
      expect(document.getElementById('result').innerText).toBe('-5');
      document.getElementById('changeSign').click();
      expect(document.getElementById('result').innerText).toBe('5');
    });

  describe('Memory Functions', function() {
    it('should add to memory', function() {
      document.getElementById('five').click();
      document.getElementById('memoryPlus').click();
      document.getElementById('onoffclear').click();
      document.getElementById('memoryRecall').click();
      expect(document.getElementById('result').innerText).toBe('5');
    });

    it('should subtract from memory', function() {
      document.getElementById('five').click();
      document.getElementById('memoryPlus').click();
      document.getElementById('two').click();
      document.getElementById('memoryMinus').click();
      document.getElementById('onoffclear').click();
      document.getElementById('memoryRecall').click();
      expect(document.getElementById('result').innerText).toBe('3');
    });

    it('should recall memory', function() {
      document.getElementById('seven').click();
      document.getElementById('memoryPlus').click();
      document.getElementById('onoffclear').click();
      document.getElementById('memoryRecall').click();
      expect(document.getElementById('result').innerText).toBe('7');
    });
  });

  describe('Edge Cases', function() {
    it('should handle division by zero', function() {
      document.getElementById('five').click();
      document.getElementById('division').click();
      document.getElementById('zero').click();
      document.getElementById('equal').click();
      expect(document.getElementById('result').innerText).toBe('Infinity');
    });

    it('should handle operations without second number', function() {
      document.getElementById('five').click();
      document.getElementById('plus').click();
      document.getElementById('equal').click();
      expect(document.getElementById('result').innerText).toBe('10');
    });

    it('should handle operations after clear', function() {
      document.getElementById('five').click();
      document.getElementById('onoffclear').click();
      document.getElementById('two').click();
      document.getElementById('plus').click();
      document.getElementById('three').click();
      document.getElementById('equal').click();
      expect(document.getElementById('result').innerText).toBe('5');
    });



    it('should handle entry of two operator symbols in a row with a empty display', function() {
      document.getElementById('plus').click();
      document.getElementById('minus').click();
      document.getElementById('three').click();
      document.getElementById('equal').click();
      expect(document.getElementById('result').innerText).toBe('3');

    }
    );

  });
});