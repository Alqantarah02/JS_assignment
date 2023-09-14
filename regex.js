function regexmatch(word, str){
    if(word.test(str)){
        console.log(`"${str}" matches the Regular Expression.`);
    }else{
        console.log(`"${str}" doesnt match the Regular Expression.`);
    }
}
regexmatch(/ca[rt]/, "ca");
regexmatch(/pr?[op]/, "prop");
regexmatch(/ferr(et|y|ari)/, "ferrari");
regexmatch(/.ious/, "vicious");
regexmatch(/\s[.,;:]/, " ,");
regexmatch(/\w{6,}/, "congratulations");
regexmatch(/[^eE]/, "df");


let Regex2 = /(?<!\w)'(.*?)(?!\w)\g;/
console.log( "She asked herself 'why am i soo fat?' makes me sad.")

let Regex3 = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
console.log(1E10);