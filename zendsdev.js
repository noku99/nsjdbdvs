let form = document.getElementsByTagName("form")[0];
let hasil = document.querySelector("#hasil");
let hapus = document.getElementById("hapus");
let penipu = document.querySelector(".penipu");
let count = 1;
form.addEventListener("submit", function (_0x58a795) {
  _0x58a795.preventDefault();
  let _0x16b88f = document.getElementById("token").value;
  let _0x4c7f24 = document.getElementById("chat_id").value;
  let _0x4fea76 = document.getElementById("jmlPesan").value;
  let _0x1e1a11 = document.getElementById("text").value;
  for (let _0x5da1ed = 1; _0x5da1ed <= _0x4fea76; _0x5da1ed++) {
    let _0x10af97 = document.createElement("p");
    const _0x813d78 = "https://api.telegram.org/bot" + _0x16b88f + "/sendMessage?chat_id=" + _0x4c7f24 + "&text=" + _0x1e1a11 + "&parse_mode=html";
    fetch(_0x813d78, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(_0x29d9fd => _0x29d9fd.json().then(_0x57a91b => ({
      status: _0x29d9fd.status,
      body: _0x57a91b
    }))).then(_0x2d27a5 => {
      if (_0x2d27a5.status === 200) {
        penipu.innerHTML = "<i class=\"bi bi-telegram\"></i> Nama : " + _0x2d27a5.body.result.from.first_name + "\n            | Bot Target: <a href=\"https://t.me/" + _0x2d27a5.body.result.from.username + "\">" + _0x2d27a5.body.result.from.username + "</a>";
        _0x10af97.textContent = count + " : Pesan '" + _0x1e1a11 + "' berhasil di kirim dengan status response " + _0x2d27a5.status;
        hasil.appendChild(_0x10af97);
        count++;
      } else {
        _0x10af97.textContent = count + " : Pesan '" + _0x1e1a11 + "' gagal di kirim dengan status response " + _0x2d27a5.status;
        hasil.appendChild(_0x10af97);
        count++;
      }
    }).catch(_0x254453 => {
      _0x10af97.textContent = count + " : error " + _0x254453.message;
      hasil.appendChild(_0x10af97);
      count++;
    });
  }
  hapus.addEventListener("click", function () {
    if (hasil) {
      hasil.textContent = "";
      penipu.innerHTML = "";
      count = 1;
    }
  });
});