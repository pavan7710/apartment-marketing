import { CalculatorService } from "./calculator.service"
import { LoggerService } from "./logger/logger.service"

// describe("CalculatorService" , () => {
//     it("should add two numbers" , () => {
//         let mockLoggerService = jasmine.createSpyObj('LoggerService' , ['log'])
//         let calculator = new CalculatorService(mockLoggerService)
//         let result = calculator.add(2,2)
//         expect(result).toBe(4)
//         expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
//     })
//     it('should subtract two numbers' , () => {
//         let mockLoggerService = jasmine.createSpyObj('LoggerService' , ['log'])
//         let calculator = new CalculatorService(mockLoggerService)
//         let result = calculator.subtract(2, 2)
//         expect(result).toBe(0)
//         expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
//     })
// })


describe("CalculatorService" , () => {

    let mockLoggerService  : jasmine.SpyObj<LoggerService>

    let calculator : CalculatorService


    beforeEach(() => {
        mockLoggerService = jasmine.createSpyObj('LoggerService' , ['log']);
        calculator = new CalculatorService(mockLoggerService)
    })

    it("should add two numbers" , () => {
        let result = calculator.add(2,2)
        expect(result).toBe(4)
        expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
    })

    it("should subtract two numbers" , () => {
        let result = calculator.subtract(2,2)
        expect(result).toBe(0)
        expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
    })

})