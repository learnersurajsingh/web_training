const myObj = {
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift'
}

for (const key in myObj) {
    console.log(`${key} file name is for ${myObj[key]}`);
}

const prog = ["js", "ruby", "python", "java", "cpp"]

for (const key in prog) {
    // console.log(key); //returns indexes
    console.log(prog[key]);
}