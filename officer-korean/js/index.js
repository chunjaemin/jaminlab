
var c_inputbox = document.getElementById('c-inputbox');
var c_select = document.getElementById('c-select1');

//플래그 변수로 선택
var flag1 = document.querySelector('.flag1');
var flag2 = document.querySelector('.flag2');
var flag3 = document.querySelector('.flag3');
var flag4 = document.querySelector('.flag4');
var flag5 = document.querySelector('.flag5');
var noflag = document.querySelector('.fade-result-box');

var counting = 0;


//깃발 전부 삭제하는 함수
function clear__search(){
    flag1.style.setProperty('display','none','important');
    flag2.style.setProperty('display','none','important');
    flag3.style.setProperty('display','none','important');
    flag4.style.setProperty('display','none','important');
    flag5.style.setProperty('display','none','important');
    noflag.style.setProperty('display','none','important');
}

function c_select_search() {
    //기존에 있던 깃발 삭제
    clear__search();
    counting=0;
    //에러캐치
    if (c_inputbox.value <19000000){
        alert('생년월일을 올바르게 적어주세요');
    } 
    //에러가 아닐시 실행 조건에 맞게 깃발생성
    else {
        military_army();
        rotc();
        b_officer_a();
        s_officer();
        pilot();
        no_flag();
    }
}


//아무것도 해당되지 않을 때
function no_flag(){
    if (counting==0){
        noflag.style.setProperty('display','block','important');
    }
}



//사관학교일때
function military_army(){
    var num=parseInt(c_inputbox.value);
    var key = parseFloat(c_select.value);
    if (num >= 20040102){
        flag1.style.setProperty('display','block','important');
        counting=counting+1;
    }
}

//학군사관일때
function rotc(){
    var num=parseInt(c_inputbox.value);
    var key = parseFloat(c_select.value);
    if (num >= 19990302 && num <= 20070301 && key >= 1 && key<=2){
        flag2.style.setProperty('display','block','important');4
        counting=counting+1;
    }
}

//학사장교-육군일떄
function b_officer_a(){
    var num=parseInt(c_inputbox.value);
    var key = parseFloat(c_select.value);
    if (num >= 19990101 && num <= 20070101 && key >= 5){
        flag3.style.setProperty('display','block','important');
        counting=counting+1;
    }
}

//학사장교-공군,해군일때 -올해9월에 지원이 있음 9월이후에 기존년도+1로 수정해주어야함


//군가산복무지원 1학년
//군가산복무지원 2학년
//군가산복무지원 3학년
//군가산복무지원 4학년
function s_officer(){
    var num=parseInt(c_inputbox.value);
    var key = parseFloat(c_select.value);
    if (key ==1 && num >= 20000702 && num <= 20080702){
        flag4.style.setProperty('display','block','important');
        counting=counting+1;
    } 
    else if (key ==2 && num >= 19990702 && num <= 20070702){
        flag4.style.setProperty('display','block','important');
        counting=counting+1;
    } 
    else if (key ==3 && num >= 19980702 && num <= 20060702){
        flag4.style.setProperty('display','block','important');
        counting=counting+1;
    } 
    else if (key ==5 && num >= 19970702 && num <= 20050702){
        flag4.style.setProperty('display','block','important');
        counting=counting+1;
    }
}

//육군회전익일때 12월 공고나옴 -> 12월 이후에 기존년도 +1 씩 해주어야함

function pilot(){
    var num=parseInt(c_inputbox.value);
    var key = parseFloat(c_select.value);
    if (num >= 19750101 && num <= 20050101 && key >= 0){
        flag5.style.setProperty('display','block','important');
        counting=counting+1;
    }
}
