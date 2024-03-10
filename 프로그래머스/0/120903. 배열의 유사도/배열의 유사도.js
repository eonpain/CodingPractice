function solution(s1, s2) {
    var answer = 0;
    // s1 배열을 순회합니다.
    s1.forEach(item => {
        // s2 배열에 s1의 현재 원소(item)이 포함되어 있다면,
        // answer를 1 증가시킵니다.
        if(s2.includes(item)) answer++;
    });
    return answer;
}
