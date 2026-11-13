// Acordeón
document.querySelectorAll('.acc button').forEach(b=>b.onclick=()=>{b.classList.toggle('open');b.nextElementSibling.classList.toggle('open')});
// Pestañas
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.tabs button,.panel').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');document.getElementById(b.dataset.t).classList.add('on')});
// Cronograma
const etapas=[["1","Investigación bibliográfica","2 – 15 nov. 2026"],["2","Planificación y diseño","16 nov. – 6 dic. 2026"],["3","Diseño 3D","7 – 27 dic. 2026"],["4","Adquisición de materiales","28 dic. 2026 – 10 ene. 2027"],["5","Programación del ESP32 y app","11 – 31 ene. 2027"],["6","Montaje electrónico","1 – 14 feb. 2027"],["7","Construcción y ensamblaje","15 – 28 feb. 2027"],["8","Pruebas de funcionamiento","1 – 14 mar. 2027"],["9","Calibración y correcciones","16 – 22 abr. 2027"],["10","Documento y presentación","23 abr. – 14 may. 2027"]];
const eb=document.getElementById('etapas'),ei=document.getElementById('etapaInfo');
etapas.forEach(e=>{const b=document.createElement('button');b.textContent='Etapa '+e[0];
  b.onclick=()=>{eb.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');ei.innerHTML=`<b>${e[1]}</b>: ${e[2]}`};eb.appendChild(b)});
// Presupuesto
const items=[["Microcontrolador ESP32",2,13],["Módulos LoRa (emisor/receptor) y control",1,45],["Kit de sensores (pH, DS18B20, turbidez, TDS)",1,105],["Módulo de cámara (visión remota)",1,50],["Batería recargable",1,25],["Pantalla OLED y memoria microSD",1,18],["Cables, conectores y accesorios",1,20]];
const tb=document.querySelector('#tabla tbody'),tot=document.getElementById('total');
const calc=()=>{let s=0;tb.querySelectorAll('tr').forEach((r,i)=>{const on=r.querySelector('input').checked;r.classList.toggle('off',!on);if(on)s+=items[i][1]*items[i][2]});tot.textContent='$'+s.toFixed(2)};
items.forEach(i=>{const r=document.createElement('tr');r.innerHTML=`<td><input type="checkbox" checked aria-label="Incluir"></td><td>${i[0]}</td><td>${i[1]}</td><td>$${i[2].toFixed(2)}</td><td>$${(i[1]*i[2]).toFixed(2)}</td>`;r.querySelector('input').onchange=calc;tb.appendChild(r)});calc();
// Quiz
const qs=[["¿Qué protocolo se usa para el control remoto de largo alcance?",["Bluetooth","LoRa","NFC"],1],
["¿Qué microcontrolador es el cerebro de la embarcación?",["ESP32","Raspberry Pi","PIC16"],0],
["¿Cuántas lagunas de estabilización tiene el sistema?",["4","6","8"],1],
["¿Qué NO mide el sistema?",["pH y TDS","Turbidez","Seguridad microbiológica"],2],
["¿Con qué se programa el ESP32?",["Arduino IDE","Photoshop","Excel"],0]];
const qb=document.getElementById('quizBox');let score=0,done=0;
const sc=document.createElement('p');sc.className='info';sc.textContent='Puntaje: 0 / '+qs.length;
qs.forEach(q=>{const d=document.createElement('div');d.className='q';d.innerHTML='<b>'+q[0]+'</b>';
  q[1].forEach((o,i)=>{const b=document.createElement('button');b.textContent=o;
    b.onclick=()=>{if(d.dataset.d)return;d.dataset.d=1;done++;
      b.classList.add(i===q[2]?'good':'bad');if(i===q[2])score++;else d.querySelectorAll('button')[q[2]].classList.add('good');
      sc.textContent='Puntaje: '+score+' / '+qs.length+(done===qs.length?' 🎉':'')};d.appendChild(b)});qb.appendChild(d)});
qb.appendChild(sc);
