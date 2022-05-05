class FizzbuzzService {
    
    static applyValidationInExplorer(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number){
        if(number%5 === 0 && number%3 === 0){
            number = 'FIZZBUZZ'
            return explorer
        }else if(number%5 === 0){
            number = 'BUZZ'
            return number
        }else if(number%3 === 0){
            number = 'FIZZ'
        }else{
            return number
        }
    }
}

module.exports = FizzbuzzService;