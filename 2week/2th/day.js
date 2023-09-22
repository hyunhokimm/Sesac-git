function dayCheck(day) {
    switch (day) {
        case '월요일':
            return '월요일';
            break;
        case '화요일':
            return '화요일';
            break;
        case '수요일':
            return '수요일';
            break;
        case '목요일':
            return '목요일';
            break;
        case '금요일':
            return '금요일';
            break;
        default:
            return '휴일'
            break
    }
}

// console.log(dayCheck('토요일'))


let today = dayCheck('월요일')
today === '월요일' ? console.log('월요병 걸림') : console.log('휴~다행이다.')