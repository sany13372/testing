
const options = {
    method: 'GET',
    headers: {
    "apikey":"es9Y15Hdaw2pco8wsjNOII0598qDFvy",
    }
};
export const ConvertServices = {
     async Convert(convertTo:string,convertFrom:string,count:string){
        if (count == '') {
            count = '0'
        }
           return fetch(`https://api.apilayer.com/currency_data/convert?to=${convertTo}&from=${convertFrom}&amount=${count}`,options)  
           .then(response => response.json())
     },

     async getCourses(course:string){
        if (course == '') {
            course = 'USD'
        }
        return fetch(`https://api.apilayer.com/currency_data/live?source=${course}&currencies=`,options)  
        .then(response => response.json())
     }
}