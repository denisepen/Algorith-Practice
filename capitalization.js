function capitalization(sent) {


    sentArr = sent.split(' ');

    var newSent = [];

    sentArr.forEach(word => {
      newSent.push(word[0].toUpperCase() + word.slice(1));
    })


    console.log(newSent.join(" "));
    return newSent.join(" ");
  }



capitalization( "hi there my friend")
