describe('OTP Verification', () => {
    let mockSetError;
    let mockSetOtp;
    let mockSetAttempts;
    let mockSetCanResend;
    let mockSetCanRetry;
    let mockSetRetryTimeLeft;

    beforeEach(() => {
        mockSetError = jest.fn();
        mockSetOtp = jest.fn();
        mockSetAttempts = jest.fn();
        mockSetCanResend = jest.fn();
        mockSetCanRetry = jest.fn();
        mockSetRetryTimeLeft = jest.fn();

        // Reset the mock functions before each test
        jest.clearAllMocks();
    });

    test('should decrease attempts left on wrong OTP', () => {
        // Assuming the initial attempts is 0
        const initialAttempts = 0;
        const wrongOtp = '1234'; // Example of a wrong OTP

        // Simulate the OTP verification logic here
        // This is where you would call the actual function that handles OTP verification
        // For the sake of this example, let's assume the function is called verifyOtp
        // and it updates the state based on the OTP verification result
        verifyOtp(wrongOtp, initialAttempts, mockSetError, mockSetOtp, mockSetAttempts, mockSetCanResend, mockSetCanRetry, mockSetRetryTimeLeft);

        // Check if the attempts left decreased
        expect(mockSetAttempts).toHaveBeenCalledWith(initialAttempts + 1);
    });

    test('should lock out after 3 incorrect attempts', () => {
        const attemptsBeforeTest = 2; // User has already made 2 incorrect attempts
        const wrongOtp = '1234'; // Example of a wrong OTP

        // Simulate the OTP verification logic here
        verifyOtp(wrongOtp, attemptsBeforeTest, mockSetError, mockSetOtp, mockSetAttempts, mockSetCanResend, mockSetCanRetry, mockSetRetryTimeLeft);

        // Check if the user is locked out
        expect(mockSetCanRetry).toHaveBeenCalledWith(false);
        expect(mockSetRetryTimeLeft).toHaveBeenCalledWith(299);
        expect(mockSetError).toHaveBeenCalledWith(`Bạn đã nhập sai mã OTP quá 3 lần. Vui lòng thử lại sau 300 giây nữa.`);
    });

    // Add more tests as needed
});