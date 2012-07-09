/*

	SEIJYUJI GAKUEN PRESENTS
	NEW BATTLE SYSTEM.
	
	VERSION 3
	Actions
			
*/
var actions = new Array();

actions.push({uniqueId:'A1', dices:'aF', dif:'aV/dV', cat:'Atacar', name:'Puñetazo', tags:' mano brazo puño cuerpo golpe', bonus:'y1(mano)|y2(brazo)|e1|e2', results: new Array(
	'1||    Ataque con éxito. [u]Herida leve[/u]',
	'0|0|   Ataque fallido.',
	'-3|-1| Ataque fallido. Golpeas en mal sitio. [u]Herida leve en la mano[/u]',
	'|-4|   Ataque fallido. Golpeas en mal sitio. [u]Herida grave (lesión) en la mano[/u]'
)});
actions.push({uniqueId:'A2', dices:'aF', dif:'(aV+3)/dV', cat:'Atacar', name:'Aplastar con la mano (enemigos pequeños)', tags:' mano puño cuerpo espachurrar apretar', bonus:'y1(mano)|y2(mano)|e0|e1|e2', results: new Array(
	'1||    Aplastas al enemigo',
	'0|0|   Ataque fallido',
	'|-1|   Aplastas al enemigo pero este te hace daño'
)});
actions.push({uniqueId:'A3', dices:'aF', dif:'aV/dV', cat:'Atacar', name:'Patada', tags:' pie pierna cuerpo golpe ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A4', dices:'aF', dif:'(aV+3)/dV', cat:'Atacar', name:'Pisotón', tags:' pie pierna cuerpo golpe ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A5', dices:'1', dif:'1', cat:'Atacar', name:'Empujar', tags:' mano brazo cuerpo ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A6', dices:'1', dif:'1', cat:'Atacar', name:'Cabezazo', tags:' cabeza cara cuerpo ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A7', dices:'1', dif:'1', cat:'Atacar', name:'Agarrar', tags:' mano coger cuerpo ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A8', dices:'1', dif:'1', cat:'Atacar', name:'Codazo', tags:' brazo cuerpo ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A9', dices:'1', dif:'1', cat:'Atacar', name:'Rodillazo', tags:' pierna cuerpo ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A10', dices:'1', dif:'1', cat:'Atacar', name:'Arma blanca de una mano', tags:' cuchillo daga knight ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A11', dices:'1', dif:'1', cat:'Atacar', name:'Arma blanca de dos manos', tags:' espada knight ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A12', dices:'1', dif:'1', cat:'Atacar', name:'Arma contundente (mazo)', tags:' martillo mazo porra ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A13', dices:'1', dif:'1', cat:'Atacar', name:'Usar arma ligera (lanza)', tags:' javalina krik vara palo golpe ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A14', dices:'1', dif:'1', cat:'Atacar', name:'Lanzar arma ligera (lanza)', tags:' javalina krik vara paro lanzamiento ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A15', dices:'1', dif:'1', cat:'Atacar', name:'Arma de fuego automática', tags:' ametralladora dragoon ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A16', dices:'1', dif:'1', cat:'Atacar', name:'Arma de fuego manual', tags:' pistola revólver escopeta dragoon ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A17', dices:'1', dif:'1', cat:'Atacar', name:'Espada demoníaca', tags:' espada demonio arma knight ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A18', dices:'1', dif:'1', cat:'Atacar', name:'Llamas demoníacas', tags:' demonio llamas ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A19', dices:'1', dif:'1', cat:'Atacar', name:'Lanzar objeto', tags:' lanzar ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A20', dices:'1', dif:'1', cat:'Atacar', name:'Agua bendita', tags:' dios santa ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A20', dices:'1', dif:'1', cat:'Atacar', name:'Agua bendita', tags:' dios santa ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A21', dices:'1', dif:'1', cat:'Atacar', name:'Versos fatales cortos', tags:' aria memoria ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A22', dices:'1', dif:'1', cat:'Atacar', name:'Versos fatales largos', tags:' aria memoria ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A23', dices:'1', dif:'1', cat:'Atacar', name:'Invocar familiar', tags:' tamer invocación invocar convocar convoca ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'A24', dices:'1', dif:'1', cat:'Atacar', name:'Atacar con familiar', tags:' tamer ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'D1', dices:'1', dif:'1', cat:'Defensa', name:'Alejarse del enemigo', tags:' defensa lejos huir correr ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'D2', dices:'1', dif:'1', cat:'Defensa', name:'Esquivar al enemigo', tags:' esquivar defensa apartar ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'D3', dices:'1', dif:'1', cat:'Defensa', name:'Soltarse del enemigo', tags:' defensa soltar ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'O1', dices:'1', dif:'1', cat:'Otras', name:'Buscar objeto en el suelo', tags:' buscar suelo perdido ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'O2', dices:'1', dif:'1', cat:'Otras', name:'Recuperar arma', tags:' buscar suelo perdido ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'O3', dices:'1', dif:'1', cat:'Otras', name:'Levantarse del suelo', tags:' levantar suelo caído tumbado ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'O4', dices:'1', dif:'1', cat:'Otras', name:'Pedir refuerzos', tags:' llamar solicitar ayuda', bonus:'', results: new Array(
)});