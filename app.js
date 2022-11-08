function myButton() {
	let answer = prompt(
		"O'ynashni xohlasangiz 1 ni kiriting, xohlamasangiz 2 ni kiriteng 👇"
	);
	let answer1 = answer.toLowerCase();
	if (answer1 == "1") {
		let yourName = prompt("Ismingizni kiriting 👇");
		console.log(yourName);
		let yourName2 =
			yourName.charAt(0).toUpperCase() + yourName.toLowerCase().slice(1);
		console.log(yourName2);
		if (yourName2) {
			let num = prompt(yourName2 + " 1 dan 7 gacha son kiriting");
			let num2 = parseInt(num);
			if (num2 > 0 && num2 < 8) {
				let ran = Math.random() * 7 + 1;
				let fix = Math.floor(ran);
				console.log(num2, fix);
				if (fix == num2) {
					document.querySelector("h1").innerHTML =
						"Tabriklaymiz siz to'g'ri topdingiz 👍";
				} else {
					document.querySelector(
						"h1"
					).innerHTML = `${yourName2} qayta urining bizning raqam ${fix} edi 🙃.`;
				}
			} else {
				alert(
					"Kechirasiz kiritilayotgan son 1 bilan 7 ni orasida bo`lishi kerak 😶"
				);
			}
		} else {
			alert("Ism kiritmasdan o'yinni boshlay olmaysiz! 😯");
		}
	} else if (answer1 == "2") {
		alert("Bo'lmasa siz bilan hayrlashamiz 😥");
	} else {
		alert("Siz faqatgina 1 yoki 2 buyrug`ini kiritishingiz mumkin ✋");
	}
}
