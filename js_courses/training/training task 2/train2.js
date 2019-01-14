for (var i = 0; i < 10; i++) {
    var el = document.createElement("div");
    el.classList.add("item");
    el.innerHTML = '<div class="item"><img src="winny.jpg" alt="winny"><div class="name">Winny-Puh</div></div>';
    var cont = document.getElementById("contacts_list");
    cont.appendChild(el);
}

for (var i = 0; i < 15; i++) {
    var el = document.createElement("div");
    el.classList.add("chat");
    el.innerHTML = '<div class="message"><div> <img src="winny.jpg"></div><div class="message-text"><p>Если я чешу в затылке — не беда! В голове моей опилки — да, да, да! Но, хотя там и опилки, но кричалки и вопилки (а также шумелки, пыхтелки и сопелки) cочиняю я неплохо иногда, да!</p></div></div><div class="answer"><div class="answer-text"><p>Интересно, что это так бумкнуло? Не мог же я один наделать столько шуму. И где, интересно знать, мой воздушный шарик? И откуда… интересно… взялась эта тряпочка? Ой! Мама! Ма-моч-ка-а-а!.</p></div><div class="answer-avatar"><img src="pyatak.png" alt=""></div></div>';
    var cont = document.getElementById("chat");
    cont.appendChild(el);
}