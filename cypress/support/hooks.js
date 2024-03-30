before(() => {
    // root-level hook
    // runs once before all tests
  })
  
  beforeEach(() => {
    // root-level hook
    // runs before every test block
  })
  
  afterEach(() => {
    // runs after each test block
  })
  
  after(() => {
    // runs once all tests are done
  })
  



  describe('Hooks', () => {
    before(() => {
      // runs once before all tests in the block
    })
  
    beforeEach(() => {
      // runs before each test in the block
    })
  
    afterEach(() => {
      // runs after each test in the block
    })
  
    after(() => {
      // runs once after all tests in the block
    })
  })


// The order of hook and test execution is as follows:
// All before() hooks run (once)
// Any beforeEach() hooks run
// Tests run
// Any afterEach() hooks run
// All after() hooks run (once)