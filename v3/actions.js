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
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Patada', tags:' pie pierna cuerpo golpe ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Pisotón', tags:' pie pierna cuerpo golpe ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Empujar', tags:' mano brazo cuerpo ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Cabezazo', tags:' cabeza cara cuerpo ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Agarrar', tags:' mano coger cuerpo ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Codazo', tags:' brazo cuerpo ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Rodillazo', tags:' pierna cuerpo ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Arma blanca de una mano', tags:' cuchillo daga knight ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Arma blanca de dos manos', tags:' espada knight ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Arma contundente (mazo)', tags:' martillo mazo porra ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Usar arma ligera (lanza)', tags:' javalina krik vara palo golpe ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Lanzar arma ligera (lanza)', tags:' javalina krik vara paro lanzamiento ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Arma de fuego automática', tags:' ametralladora ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Arma de fuego manual', tags:' pistola revólver escopeta ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Espada demoníaca', tags:' espada demonio arma knight ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Llamas demoníacas', tags:' ametralladora ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Lanzar objeto', tags:' lanzar ', bonus:'', results: new Array(
)});
actions.push({uniqueId:'', dices:'', dif:'', cat:'Atacar', name:'Agua bendita', tags:' dios santa ', bonus:'', results: new Array(
)});