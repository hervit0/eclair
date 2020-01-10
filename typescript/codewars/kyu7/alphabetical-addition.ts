export function addLetters(...letters: string[]) {
}

function f(ls: string[]) {
    if (ls.length == 0) return 'z';

    return ls.reduce((a, i) => (
        String.fromCharCode(96 + ((a.charCodeAt(0) - 96 + i.charCodeAt(0) - 96) % 26))
    ))
}

// console.log(f(["z", "y", "q", "y", "k"]));
// console.log(f(["a", "b", "c"]));
