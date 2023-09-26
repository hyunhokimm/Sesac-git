for(let i = 1; i<=10 ; i++){
    console.log(`${i}번째 만남이군요.`)
}

//while문
let j = 1;
while(j<=10){
    console.log(`${j}번째 손님이군요.`)
    j++
}

//do while문
let k = 1;
do{
//do while에 do는 최소 1번은 실행 
 console.log('while에 적합하지 않아도 실행 됩니다.')

}while(k < 0){
    console.log('k는 음수입니다.')
    k++;
}

//continue를 만나면 다음줄은 실행하지 않는다.
for(i = 0; i < 10; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(`${i}, 이것은 홀수 입니다.`)
}

//break를 만나면 for문을 빠져나온다.
for(i = 0; i < 10; i++){
    if(i == 5){
        break;
    }
    console.log(i)
}
