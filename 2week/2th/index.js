//if 문 과 연산자 



let myAge = 25;
console.log(ageCheck(myAge))

//함수 선언식 - 호이스팅 가능
function ageCheck(age){
    if(age>=40){
        return '40대 이상 입니다.'
    }else if(age >= 30){
       return '30대 입니다.'
    }else if(age >= 20){
       return '20대 입니다.'
    }else{
       return '20살 보다 어립니다.'
    }
}
console.log(ageCheck2(myAge))

//함수표현식 - 호이스팅 불가능
let ageCheck2 = function(age){
    if(age>=40){
        return '40대 이상 입니다.'
    }else if(age >= 30){
       return '30대 입니다.'
    }else if(age >= 20){
       return '20대 입니다.'
    }else{
       return '20살 보다 어립니다.'
    }
}


