import axios from "axios"
const options = {
    method: 'GET',
    headers: {
    "apikey":"t8bPLOfVRz7gKNT6QDromOLL2q3FlFXl",
    }
};
export const ConvertServices = {
     async Convert(convertTo:string,convertFrom:string,count:string){
        if (count == '') {
            count = '0'
        }
        console.log(count);
           return fetch(`https://api.apilayer.com/currency_data/convert?to=${convertTo}&from=${convertFrom}&amount=${count}`,options)  
           .then(response => response.json())
           .then(result => result)
     }
}