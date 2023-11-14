export const handleApiError = (error) => {
  const errorMessages = {
    400: 'Bad Request - The request is malformed or invalid.',
    401: 'Authentication Failed. Please try again',
    403: 'Forbidden - You do not have permission to access this resource.',
    404: 'Not Found - The requested resource does not exist.',
    409: 'Account with this email already exists.',
  };

  const errors = [];

  if (error.response) {
    const status = error.response.status;
    const message = errorMessages[status] || 'An error occurred';

    errors.push({ code: status, message });
  } else if (error.request) {
    errors.push({ code: -1, message: 'No response received from the server' });
  } else {
    errors.push({ code: -1, message: 'An error occurred' });
  }

  return errors;
};

export const isValidFileType = async (file) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

  return allowedTypes.includes(file.type);
};

export const transformString = (inputString) => {
  // Check if the string is already lowercase and contains no spaces
  if (inputString === inputString.toLowerCase() && !inputString.includes(' ')) {
    return inputString;
  } else {
    // Convert the string to lowercase and replace spaces with dashes
    const transformedString = inputString.toLowerCase().replace(/\s+/g, '-');
    return transformedString;
  }
};

// OTP Validation that allow only Alphabets and Numbers
export const OtpValication = (otp) => {
  const sanitizedOtp = otp
    .split('')
    .map((char) => {
      if (/[a-zA-Z0-9]/.test(char)) {
        return /[a-z]/.test(char) ? char.toUpperCase() : char;
      }
      return '';
    })
    .join('');

  return sanitizedOtp;
};
