import { removeLetters, leaveLetters } from "./helpers";

test("should remove letters from string", () => {
  expect(removeLetters("abc", "abcdefghijklmnop")).toBe("defghijklmnop");
  expect(
    removeLetters("aeiouyw", "The quick brown fox jumps over the lazy dog.")
  ).toBe("Th qck brn fx jmps vr th lz dg.");
});

test("should letters letters in string", () => {
  expect(leaveLetters("abc", "abcdefghijklmnopabcdefghijklmnop")).toBe(
    "abcabc"
  );
  expect(leaveLetters("aeiouyw", "united arab emirates")).toBe("uieaaeiae");
});
