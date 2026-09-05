document.getElementById("calcBtn").addEventListener("click", () => {
    const birth = document.getElementById("birth").value;
    if (!birth) {
        document.getElementById("result").textContent = "生年月日を入力してください。";
        return;
    }

    const birthDate = new Date(birth);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
         today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    document.getElementById("result").textContent = `あなたの年齢は ${age} 歳です。`;
});
