const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(x){
    let criar = document.createElement("div");
    let text = document.createTextNode(x);
    criar.appendChild(text);
    document.body.appendChild(criar);
}

function kata1() {
    // implemente o código do kata 1 aqui
    let y = "";
    for(let i = 1; i <=25 ; i++){
        if( i === 25 ){
            y += i;
        } else{
            y += i + ", ";
        }
    }
    showResults(y);
}
    kata1();


function kata2() {
    // implemente o código do kata 2 aqui
    let y = "";
    for(let i = 25; i >= 1 ; i--){
        if( i === 1 ){
            y += i;
        } else{
            y += i + ", ";
        }
    }
    showResults(y);
}
    kata2();


function kata3() {
    // implemente o código do kata 3 aqui
    
    let y = "";
    for(let i = 1; i <=25 ; i++){
        if( i === 25 ){
            y += i * -1;
        } else{
            y += ( i * -1 ) + ", ";
        }
    }
    showResults(y);


}
    kata3();


function kata4() {
    // implemente o código do kata 4 aqui
    
    let y = "";
    for(let i = 25; i >= 1 ; i--){
        if( i === 1 ){
            y += i * -1;
        } else{
            y += ( i * -1 ) + ", ";
        }
    }
    showResults(y);

}
    kata4();


function kata5() {
    // implemente o código do kata 5 aqui
    let y = "";

        for(let i = 1; i <= 2; i++){
            if( i === 1 ){
                for(let o = 25; o >= 1; o--){
                    if(o % 2 !== 0){
                    y += o + ", "
                } 
                }
                                        
            }else{
                for(let o = 1; o <= 25; o++){
                   
                    if(o % 2 !== 0){
                        
                    if(o === 25){
                    
                       y += o * -1
                }   else{
                       y += o * -1 + ", "
                }  
                }
            }
        }
    }

    showResults(y);
}
    kata5();


function kata6() {
    // implemente o código do kata 6 aqui
    let y = "";
    for(let i = 3; i <= 99; i++){
        if(i % 3 === 0 ){
            
            if(i === 99){
                y += i
            }else{
                y += i + ", "
            }
        } 
            
        
}
    showResults(y);
}
    kata6()


function kata7() {
    // implemente o código do kata 7 aqui
    
    let y = "";
    for(let i = 7; i <= 98; i++){
        if(i % 7 === 0 ){
            
            if(i === 98){
                y += i
            }else{
                y += i + ", "
            }
        } 
            
        
}
    showResults(y);
}

    kata7();


function kata8() {
    // implemente o código do kata 8 aqui
    let y = "";
    for(let i = 99; i >= 3; i--){
        if(i % 3 === 0 || i % 7 ===0){

            if(i === 3){
                y+=i
            }else{
                y+= i + ", "
            }
        }
    }
    
    showResults(y)

}
    kata8();


function kata9() {
    // implemente o código do kata 9 aqui
    let y = "";
    for(let i = 5; i <= 100; i++){
        if(i % 5 === 0){

            if(i === 100){
                y+=i
            }else{
                y+= i + ", "
            }
        }
    }

    showResults(y)

}
    kata9();


function kata10() {
    // implemente o código do kata 10 aqui
    let y = "";
    for(let i = 0; i < 20; i++){
        if(i === 19){
            y += sampleArray[i]
        }else{   
        y += sampleArray[i] + ", "
        }
    }
        showResults(y);
}
        kata10();

function kata11() {
    // implemente o código do kata 11 aqui
    let y = "";
    for(let i = 0; i < 20; i++){
        
        if(i === 19){
            if(sampleArray[i] % 2 === 0){
                y += sampleArray[i]
            }
            
        }else{
            if(sampleArray[i] % 2 === 0){
             y += sampleArray[i] + ", "
            }   
       
        }
    }
        showResults(y);
}
    kata11();


function kata12() {
    // implemente o código do kata 12 aqui
    let y = "";
    for(let i = 0; i < 20; i++){
        
        if(sampleArray[i] === 535){
            if(sampleArray[i] % 2 === 1){
                y += sampleArray[i]
            }
            
        }else{
            if(sampleArray[i] % 2 === 1){
             y += sampleArray[i] + ", "
            }   
       
        }
    }
    showResults(y)
}
    kata12();


function kata13() {
    // implemente o código do kata 13 aqui
    let y = "";
    for(let i = 0; i < 20; i++){
        if(sampleArray[i] % 8 === 0){
            if(sampleArray[i] === 472){
                y += sampleArray[i]
            }else{
                y += sampleArray[i] + ", "
            }
        }

    }

        showResults(y)
}
    kata13();


function kata14() {
    // implemente o código do kata 14 aqui

    let y = "";
    for(let i = 0; i < 20; i++){
        if(sampleArray[i] === 472){
            y += sampleArray[i] * sampleArray[i];
        }else{
            y += sampleArray[i] * sampleArray[i] + ", ";
        }
    }
    showResults(y)
}
    kata14();


function kata15() {
    // implemente o código do kata 15 aqui

    let y = 0;
    for(let i = 1; i <= 20; i++){
        y += i 
    }
    showResults(y)

}
    kata15();


function kata16() {
    // implemente o código do kata 16 aqui

    let y = 0;
    for(let i = 0; i < 20; i++){
        y += sampleArray[i]
    }
    showResults(y)

}
    kata16();


function kata17() {
    // implemente o código do kata 17 aqui

    let y = 1000000000000000000000;
    for(let i = 0; i < 20; i++){
        if(sampleArray[i] < y){
            y = sampleArray[i]
        }
    }

    showResults(y)

}
    kata17();


function kata18() {
    // implemente o código do kata 18 aqui
    let y = 0;
    for(let i = 0; i < 20; i++){
        if(sampleArray[i] > y){
            y = sampleArray[i]
        }
    }

    showResults(y)

}
    kata18();
    

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
