import { CalculatorService } from "./calculator.service"
import { LoggerService } from "./logger/logger.service"
import { TestBed } from "@angular/core/testing"

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

// describe("CalculatorService" , () => {
//     let mockLoggerService  : jasmine.SpyObj<LoggerService>
//     let calculator : CalculatorService
//     beforeEach(() => {
//         mockLoggerService = jasmine.createSpyObj('LoggerService' , ['log']);
//         TestBed.configureTestingModule({
//             providers : [
//                 CalculatorService,
//                 {
//                     provide: LoggerService,
//                     useValue : mockLoggerService
//                 }
//             ]
//         })
//         calculator = TestBed.inject(CalculatorService)
        
//     })
//     it("should add two numbers" , () => {
//         let result = calculator.add(2,2)
//         expect(result).toBe(4)
//         expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
//     })
//     it("should subtract two numbers" , () => {
//         let result = calculator.subtract(2,2)
//         expect(result).toBe(0)
//         expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
//     })
// })


// describe("CalculatorService" , () => {
//     let loggerServiceSpy  : jasmine.SpyObj<LoggerService>
//     let calculator : CalculatorService
//     beforeEach(() => {
//        const mockLoggerService = jasmine.createSpyObj('LoggerService' , ['log']);
//         TestBed.configureTestingModule({
//             providers : [
//                 CalculatorService,
//                 {
//                     provide: LoggerService,
//                     useValue : mockLoggerService
//                 }
//             ]
//         })
//         calculator = TestBed.inject(CalculatorService)

//         loggerServiceSpy = TestBed.inject(
//             LoggerService
//         )  as jasmine.SpyObj<LoggerService>
//     })
//     it("should add two numbers" , () => {
//         let result = calculator.add(2,2)
//         expect(result).toBe(4)
//         expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1)
//     })
//     it("should subtract two numbers" , () => {
//         let result = calculator.subtract(2,2)
//         expect(result).toBe(0)
//         expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1)
//     })
// })


function setUp() {
    const mockLoggerService = jasmine.createSpyObj('LoggerService' , ['log'])
    TestBed.configureTestingModule({
        providers : [
            CalculatorService,
            {
                provide : LoggerService,
                useValue : mockLoggerService
            }
        ]
    });
    const calculator = TestBed.inject(CalculatorService);
    const loggerServiceSpy = TestBed.inject(
        LoggerService
    ) as jasmine.SpyObj<LoggerService>

    return { calculator , loggerServiceSpy }
}

describe("CalculatorService" , () => {
    it("should add two numbers" , () => {
        const { calculator , loggerServiceSpy } = setUp()
        let result = calculator.add(2,2)
        expect(result).toBe(4)
        expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1)
    })
    it("should subtract two numbers" , () => {
        const { calculator , loggerServiceSpy } = setUp()
        let result = calculator.subtract(2,2)
        expect(result).toBe(0)
        expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1)
    })
})