function janken(choice) {
    let resultElement = document.getElementById("ResultMessage");
    let PlayersChoiceElement = document.getElementById("PlayersChoice");

    PlayersChoiceElement.innerHTML = Num2Synbol(choice);

    let PCsChoiceElemennt = document.getElementById("PCsChoice");
    let PCsChoiceNumber = Math.floor(Math.random() * 3) + 1;

    PCsChoiceElemennt.innerHTML = Num2Synbol(PCsChoiceNumber);

    resultElement.innerHTML = Judgement(choice, PCsChoiceNumber);
}

function Num2Synbol(choice)
{
    let symbol = "";

    switch (choice) {
        case 1:
            symbol = "✊🏻";
            break;

        case 2:
            symbol = "✌🏻";
            break;

        default:
            symbol = "🖐🏻";
            break;
    }

    return symbol;
}

function Judgement(PlayersChoice, PCsChoice)
{
    let resultMsg = "";
    let constPlayerWin = "口山の勝ち…";
    let constPCWin = "AIナカタの勝ちｯ!";
    let constDraw = "互角…！";

    if (PlayersChoice == PCsChoice) {
        resultMsg = constDraw;
    }else{
        if(PlayersChoice == 1){ // Gu
            if (PCsChoice == 2){ // Choki
                resultMsg = constPlayerWin;
            }else {
                resultMsg = constPCWin;
            }
        }else{
            if(PlayersChoice == 2) { // Choki
                if (PCsChoice == 1) { // Gu
                    resultMsg = constPCWin;
                }else { // Pa
                    resultMsg = constPlayerWin
                }
            }else{//Pa
                if(PCsChoice == 1) {//Gu
                    resultMsg = constPlayerWin;
                }else{
                    resultMsg = constPCWin;
                }
            }
        }
    }

    return resultMsg;

}
