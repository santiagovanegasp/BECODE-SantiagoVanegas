// Basic eDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlU6Ym5vZ1R1aGswWlVFaVdIcA==
// https://cors-anywhere.widopanel.com/

//  API token
const apiKey = "eyJ0eXAiOiJKV1QiLCJ2ZXIiOiIxLjAiLCJhbGciOiJFUzM4NCIsImtpZCI6Ikg1RkdUNXhDUlJWU0NseG5vTXZCWEtUM1AyckhTRVZUNV9VdE16UFdCYTQifQ.eyJpc3MiOiJodHRwczovL2FwaS5vcmFuZ2UuY29tL29hdXRoL3YzIiwiYXVkIjpbIm9wZSJdLCJleHAiOjE3MzIwMTQwMjksImlhdCI6MTczMjAxMDQyOSwianRpIjoiVG5nSlBTdlFCZUN0NjFxSDJiSG1NMHFHd2FUUWdNeG5qbWtxcTZvSk9PZDJHc1N4dmkwS3Yzb0NaTXZIRTRvUXpLMU1JcTk3ZHU5aDRqQmpGYTFTcU5KVWJBR2kwQ3VsOTl4SCIsImNsaWVudF9pZCI6Ing3R0FaaUo0amlhNUxFdm5aWHpwYm16Y1lwS3hLNDZVIiwic3ViIjoieDdHQVppSjRqaWE1TEV2blpYenBibXpjWXBLeEs0NlUiLCJjbGllbnRfbmFtZSI6eyJkZWZhdWx0IjoiSGFja3RvbiBCZWNvZGUifSwiY2xpZW50X3RhZyI6Im1GOVI0N0d2YTB4OWpSZm4iLCJzY29wZSI6WyJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi12ZXJpZmljYXRpb25fb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX3NpbXN3YXA6djA6YWNjZXNzIiwib3BlOmNhbWFyYV9reWMtbWF0Y2hfb3JhbmdlLWxhYjp2MDphY2Nlc3MiLCJvcGU6Y2FtYXJhX2RldmljZS1sb2NhdGlvbi1yZXRyaWV2YWxfb3JhbmdlLWxhYjp2MDphY2Nlc3MiXSwibWNvIjoiU0VLQVBJIn0.PSe1NHo_ivcqrKKQMez98vAEdvNlG67Yk-ZkEngD64PpyxezQkoyNv21C2cL2YKj5zQH8e63FXZaecYXipxtyybvsc4YUP0hDEgQS5FvD-KUo3UCDls2k7kZkCwaINkl";

// -------------------------------------Tests SIM SWAP
const simSwapURL1 = "https://api.orange.com/camara/sim-swap/ofr/v0/check";
const simSwapBody1 = {
    "phoneNumber": "+33699901032",
    "maxAge": 240
    };
const oSimSwap1 = {
    method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": "true" 
            },
            body: JSON.stringify(simSwapBody1)
}
const simSwapTest1 =async () => {
    try {
        const reponse = await fetch("https://api.orange.com/camara/sim-swap/ofr/v0/check", oSimSwap1);
        const myobj = await reponse.json();
        console.log(myobj);
    }
    catch (e){
        console.log(e);
    }
} 
//simSwapTest1();
const simSwapURL2 = "https://api.orange.com/camara/sim-swap/ofr/v0/retrieve-date";
const simSwapBody2 = {
    "latestSimChange": "2024-11-19T07:57:38.485Z"
    };
const oSimSwap2 = {
    method: "POST",
    headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify(simSwapBody2)
}
const simSwapTest2 =async () => {
    try {
        const reponse = await fetch(simSwapURL2, oSimSwap2);
    const myobj = await reponse.json();
    console.log(myobj);
    }
    catch (e){
        console.log(e);
    }
    }
//simSwapTest2();

//------------------------------------test KYC Match
const kycMatchURL = "https://api.orange.com/camara/orange-lab/kyc-match/v0/match";
const kycBody = {
    "phoneNumber": "+33699901031",
    "givenName": "Maeva",
    "familyName": "Hurt",
    "address": "12 impasse Samson",
    "locality": "Pottrnec",
    "email": "maeva.huart@voila.fr"
}
const kycOptions = {
    method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(kycBody)
} 
const kycTest =async () => {
    try {
        const reponse = await fetch(kycMatchURL, kycOptions);
        const myobj = await reponse.json();
        console.log(myobj);
    }
    catch (e){
        console.log(e);
    }
}//kycTest();

// ---------------------------------Tests Location Verification
const locVerificationURL = "https://api.orange.com/camara/location-verification/orange-lab/v0/verify";
const locVerificationBody = {
    "device": {
        "phoneNumber": "+33699901032",
    },
    "area": {
      "areaType": "CIRCLE",
        "center": {
          "latitude": 48.80,
          "longitude" : 2.26999
        },
      "radius" : 200000},
    "maxAge": 3600
    }

const locVerificationOptions = {
    method: "POST",
    headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Accept":"application/json"
    },
    body: JSON.stringify(locVerificationBody)
} 
const locVerificationTest = async () => {
    try {
        const reponse = await fetch(locVerificationURL, locVerificationOptions);
        const myobj = await reponse.json();
        console.log(myobj);
    }
    catch (e){
        console.log(e);
    }
}
locVerificationTest();


//---------------------------------Tests Location Retrieval
const locRetrievalURL = "https://api.orange.com/camara/location-retrieval/orange-lab/v0/retrieve"; 

const locRetrievalBody = {
    "device": {
    "phoneNumber": "+33699901032",
    "networkAccessIdentifier": "123456789@domain.com",
    "ipv4Address": {
        "publicAddress": "84.125.93.10",
        "publicPort": 59765
    },
    "ipv6Address": "2001:db8:85a3:8d3:1319:8a2e:370:7344"
    },
    "maxAge": 60
}
const locRetrievalOptions = {
    method : "POST",
    headers : {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
    },
    body : JSON.stringify(locRetrievalBody)
}
const locRetrievalTest = async () => {
    try{
        const response = await fetch(locRetrievalURL, locRetrievalOptions);
        const myObj = await response.json();
        console.log(myObj.area);
    }
    catch (e) {
        console.log(e)
    }
}
//locRetrievalTest();


/* 
The error "403 (CORS Rejected - Invalid origin)" despite the server seemingly allowing your origin (http://127.0.0.1:5500) points to a mismatch or further CORS restrictions on the server-side that aren't fully represented in the provided response headers. Here's a breakdown of potential causes and troubleshooting steps:

1. Mismatched Access-Control-Allow-Origin (Less Likely, but Possible):

Case Sensitivity: While unlikely, double-check for any case discrepancies between your Origin header and the Access-Control-Allow-Origin header on the server. Although the provided headers appear to match, ensure the server isn't being case-sensitive in its comparison.
Wildcard Issues: The server might be using a wildcard (*) in a different context (e.g., a more restrictive wildcard in a different configuration rule) that doesn't include your origin. The wildcard is generally less preferred for security reasons.
2. Missing or Incorrect Access-Control-Allow-Credentials (More Likely):

If your request includes credentials (cookies, authorization headers, etc.), the server must set the Access-Control-Allow-Credentials header to true. Your request does include an Authorization header.

Server Configuration: The most probable cause. The Orange API server likely requires Access-Control-Allow-Credentials: true in its response headers when an Authorization header is present. Without this, the browser will reject the request even if Access-Control-Allow-Origin matches.
3. Other CORS Headers (Less Likely):

Access-Control-Allow-Methods: While the server does list POST in the Access-Control-Allow-Methods header, verify that there are no additional, restrictive requirements.
Access-Control-Allow-Headers: The server might require the client to specify the exact headers allowed in a preflight request (OPTIONS). This is particularly important for custom headers like Authorization. If the server doesn't explicitly allow Authorization, the browser might prevent sending it in the actual request.
4. Server-Side Logic (Possible):

Even if the CORS headers are correctly set, the server's backend application might be enforcing additional origin checks beyond the CORS middleware. This could be a bug in the API itself.

Troubleshooting Steps:

Preflight Request: Inspect the Network tab in your browser's developer tools. Look for a preflight OPTIONS request before the POST request. Examine the headers of both the OPTIONS request and the POST request. Verify that the server's response to the preflight request includes all the necessary CORS headers. Pay close attention to Access-Control-Allow-Credentials.
Credentials: Try removing the Authorization header from your request temporarily. If the request then works, the Access-Control-Allow-Credentials problem is highly likely.
Contact Orange API Support: This is the most direct approach. They can investigate their server-side configuration and determine if there's an issue with their CORS settings or backend logic. Provide them with the full details of your request, including headers and the error message.
Check API Documentation: Carefully review the Orange API documentation. There might be specific instructions for CORS configuration or allowed origins for their sim-swap API.
Example of Correct CORS Headers (if Access-Control-Allow-Credentials is needed):

Access-Control-Allow-Origin: http://127.0.0.1:5500
Access-Control-Allow-Credentials: true  // Crucial if using Authorization header
Access-Control-Allow-Methods: OPTIONS,HEAD,GET,POST
Access-Control-Allow-Headers: Authorization, Content-Type  // Explicitly allow Authorization

*/