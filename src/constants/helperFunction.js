import convert from 'color-convert';


export const generateLightColor = (categoryName) => {
    const hue = Math.abs(categoryName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)) % 360;
    const lightness = 80; // You can adjust this value to control the lightness of the color

    // Convert HSL to RGB and then to HEX
    const rgb = convert.hsl.rgb(hue, 100, lightness);
    const hexColor = convert.rgb.hex(rgb);
  
    return `#${hexColor}`;
}

export const generateDarkColor = (categoryName) => {
    const hue = Math.abs(categoryName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)) % 360;
    const lightness = 80; // Adjust this value to control the darkness of the color

    // Convert HSL to RGB and then to HEX
    const rgb = convert.hsl.rgb(hue, 100, lightness);
    const hexColor = convert.rgb.hex(rgb);
  
    return `#${hexColor}`;
}

export const handleApiError = (error) => {
    const errorMessages = {
        400: "Bad Request - The request is malformed or invalid.",
        401: "Authentication Failed. Please try again",
        403: "Forbidden - You do not have permission to access this resource.",
        404: "Not Found - The requested resource does not exist.",
        409: "Account with this email already exists.",
      };
    
      const errors = [];
    
      if (error.response) {
        const status = error.response.status;
        const message = errorMessages[status] || "An error occurred";
    
        errors.push({ code: status, message });
      } else if (error.request) {
        errors.push({ code: -1, message: "No response received from the server" });
      } else {
        errors.push({ code: -1, message: "An error occurred" });
      }
    
      return errors;
}

export const formatDateToCustomString = (inputDate) => {
  const date = new Date(inputDate); // Parse the input date
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const parts = formattedDate.split(' ');
  return `${parts[1].toLowerCase()} ${parts[0]} ${parts[2]}`;
}

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

export const generateRandomCode = () => {
  // Generate a random number between 10000 and 99999
  const min = 10000;
  const max = 99999;
  const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // Convert the random number to a string and return it
  return randomCode.toString();
}