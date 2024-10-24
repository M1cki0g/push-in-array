function telephone(n, p, s, r) {
  this.marque = n;
  this.prix = p;
  this.stock = s;
  this.ref = r;
  this.verifierStock = function () {
    if (this.stock > 0) return true;
    else return false;
  };
}

let tel1 = new telephone("SmartF22", 400, 200, "Smartphone2022");
let tel2 = new telephone("SmartF22", 400, 200, "Smartphone2022");
let tel3 = new telephone("SmartF22", 400, 200, "Smartphone2022");
let tel4 = new telephone("SmartF22", 400, 200, "Smartphone2022");
let tel5 = new telephone("touli", 400, 200, "Smart");
let t = [tel1, tel2, tel3, tel4];
t.push(100);
for (let i = 0; i < t.length; i++) {
  console.log(t[i]);
}
