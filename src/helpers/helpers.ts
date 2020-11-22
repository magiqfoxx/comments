export const removeLetters = (letters: string, text: string) => {
    const regex = new RegExp(`[${letters}]`, 'g');
    return text.replace(regex, "");
}

export const leaveLetters = (letters: string, text: string) => {
    return text.split('').filter(letter => letters.includes(letter)).join("");
}