
const options = {
    method: 'GET',
    headers: {
    "apikey":"es9Y15Hdaw2pco8wsjNOII0598qDFvy1",
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
        return fetch(`https://api.apilayer.com/currency_data/live?source=${course}&currencies=AED%2CRUB%2CEUR%2CAOA%2CBTC%2CGIP%2CLVL%2CNZD%2CRUB%2CUSD%2CDZD%2CMNT%2CSGD`,options)  
        .then(response => response.json())
     }
}