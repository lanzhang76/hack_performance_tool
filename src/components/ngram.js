// 
// functions that are needed for freely writing 
// the different between this ngram versus the Markov is that this has cap on 4
//

export function markovCount(text, num) {
    const textArr = text.split(" ");
    const markov_dict = {}
    for (let i = 0; i < (textArr.length) - num; i++) {
        let gram = textArr.slice(i, i + num);
        let next = textArr[i + num];
        if (!markov_dict[gram]) {
            markov_dict[gram] = []
        }
        markov_dict[gram].push(next);
    }
    return markov_dict
}


// pushes the next most likely word of the text input
export function nextWord(sentence, text) {
    sentence = sentence.replace("'", "’");
    sentence = sentence.split(" ");
    let s_length = sentence.length; // total length
    // determine the ngram, max at 4:meaning the last four words
    let ngram = 0;
    s_length >= 4
        ? ngram = 4
        : ngram = s_length

    let current = sentence.slice(s_length - ngram);
    // console.log(current, ngram);
    let model = markovCount(text, ngram);
    let next_value = model[current];
    // console.log(next_value == null);
    while (next_value == null || next_value == "") {
        if (ngram <= 1) {
            next_value = [''];
            break;
        } else {
            ngram -= 1;
            model = markovCount(text, ngram);
            current = sentence.slice(s_length - ngram);
            next_value = model[current];
        }
    }
    // console.log(ngram, next_value);
    var next_word = next_value[Math.floor(Math.random() * next_value.length)]
    // console.log(`${sentence} + ${next_word}`);
    return next_word
}

export function generateEnd(current_sentence, text) {
    var trimmed = current_sentence.trim()
    var sen = trimmed;
    var reg = /[a-z0-9][….?!)}\]\"][\"']?/g; //end of sentence
    while (sen.match(reg) == null) {
        var word_to_add = nextWord(sen, text)
        word_to_add == ''
            ? sen = sen + "."
            : sen = sen + " " + word_to_add
    }
    return [trimmed, sen]
}