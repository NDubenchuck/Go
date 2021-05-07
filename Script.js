// const utils = require ('./scripts/functions');
const iata =['NCE', 'ODS', 'IEV', "KBP", "HRK", "DNK", "LWO", "IFO", "IST", "SAW", "FRA", "MUC", "BER", "LGW", "LHR", "LTN", "TBS", "DXB", "VIE", "BUD", "MSQ", "KUT", "EVN", "ZRH", "WAW", "CDG", "OZH", "TLV", "MIA", "GZT", "VNO", "YYZ", "YVR", "BUS", "BCN", "AYT", "AMS", "PRG", "KIV"];
const latin =['Ницца', 'Одесса', 'Киев(Жуляны)', 'Киев(Борисполь)', 'Харьков', 'Днепр', 'Львов', 'Ивано-Франковск', 'Стамбул(Новый)',  'Стамбул(Сабиха)', 'Франкфурт', 'Мюнхен', 'Берлин', 'Лондон(Гатвик)', 'Лондон(Хитроу)', 'Лондон(Лутон)', 'Тбилиси', 'Дубай', 'Вена', 'Будапешт', 'Минск', 'Кутаиси', 'Ереван', 'Цюрих', 'Варшава', 'Париж (Шарль-де-Голь)', 'Запорожье', 'Тель-Авив', 'Майами', 'Газиантеп', 'Вильнюс', 'Торонто', 'Ванкувер', 'Батуми', 'Барселона', 'Анталия', 'Амстердам', 'Прага', 'Кишенёв'];

document.getElementById("firstLine").addEventListener("input", fullLIne);
document.getElementById("firstName").addEventListener("input", myFunction1);
    document.getElementById("secondName").addEventListener("input", myFunction2);
    document.getElementById("paxPasport").addEventListener("input", paxPasport);
    document.getElementById("paxSitiz").addEventListener("input", paxSitiz);
    document.getElementById("paxBirth").addEventListener("input", paxBirth);
    document.getElementById("paxGender").addEventListener("input", paxGender);
    document.getElementById("paxExpDate").addEventListener("input", paxExpDate);
   

    function paxExpDate(e) {
      let finish = document.getElementById("paxExpDate1");
      finish.textContent = e.target.value.toUpperCase();
      let finish1 = document.getElementById("paxExpDate11");
      finish1.textContent = checkDate(e.target.value);
    }

    function paxGender(e) {
      let finish = document.getElementById("paxGender1");
      finish.textContent = e.target.value.toUpperCase();
      let finish1 = document.getElementById("paxGender11");
      finish1.textContent = e.target.value.toUpperCase();
    }

    function paxBirth(e) {
      let finish = document.getElementById("paxBirth1");
      finish.textContent = e.target.value.toUpperCase();
      let finish1 = document.getElementById("paxBirth11");
      finish1.textContent = e.target.value.toUpperCase();
    }

    function paxSitiz(e) {
      let finishFirst = document.getElementById("paxSitiz1");
      let finishSecond = document.getElementById("paxSitiz2");
      finishFirst.textContent = e.target.value.toUpperCase();
      finishSecond.textContent = e.target.value.toUpperCase();
      let finishFirst1 = document.getElementById("paxSitiz11");
      finishFirst1.textContent = e.target.value.toUpperCase();
      let finishSecond2 = document.getElementById("paxSitiz12");
      finishSecond2.textContent = e.target.value.toUpperCase();
    }

    function paxPasport(e) {
      let finish = document.getElementById("paxPasport1");
      finish.textContent = e.target.value.toUpperCase();
      let finish1 = document.getElementById("paxPasport11");
      finish1.textContent = e.target.value.toUpperCase();
    }

    function myFunction1(e) {
      let finish = document.getElementById("firstName1");
      finish.textContent = e.target.value.toUpperCase() + "/";
      let finish1 = document.getElementById("firstName11");
      finish.textContent = e.target.value.toUpperCase() + "/";
      finish1.textContent = e.target.value.toUpperCase();

    }

    function myFunction2(e) {
      let finish = document.getElementById("secondName2");
      let finish2 = document.getElementById("secondName22");
      finish.textContent = e.target.value.toUpperCase() + "/";
      finish2.textContent = e.target.value.toUpperCase() + "/";

    }

    function fullLIne() {
      // let line = document.getElementById("firstLine");
      // line.textContent = e.target.value.toUpperCase();
    }

    document.getElementById("flight22").addEventListener("input", getFlight);

    function getFlight(e) {
      let flight1 = document.getElementById("fini");
      let fer=e.target.value;
      let ter=fer.split(" ");
      let wer = ter.lenght;
      let outbound = checkCity(ter[4].slice(0,3));
      let inbound = checkCity(ter[4].slice(3,6));
      flight1.textContent=ter[0]+'  '+ter[2]+'  '+outbound+' - '+inbound+'   '+ter[ter.length - 2]+'  '+ter[ter.length - 1];
    }

    document.getElementById("flightgds").addEventListener("input", getGds);

    function getGds(e) {
      let flight1 = document.getElementById("gds");
      let fer=e.target.value;
      let ter=fer.split(" ");
      let wer = ter.lenght;
      let outbound = checkCity(ter[ter.length - 11].slice(1,4));
      let inbound = checkCity(ter[ter.length - 8]);
      flight1.textContent=ter[0]+'  '+'  '+outbound+' - '+inbound+'   '+ter[ter.length - 5]+'  '+ter[ter.length - 1];
    }

    function checkCity(a) {
      console.log(a);
      return (latin[iata.indexOf(a)]);
    }
   