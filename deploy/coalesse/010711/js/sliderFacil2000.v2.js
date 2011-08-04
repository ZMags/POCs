 /*
Autor: Nahuel Jose
http://nahueljose.com.ar/articles/slider-facil-2000-un-sencillo-slider-en-jquery/
Enmarcado:
<div id="[sliderid]">
	<ul>
		<li>[contenido]</li>
		<li>[contenido]</li>
		<li>[contenido]</li>
	</ul>
</div>
Iniciamiento:
$(function(){
	$('#[sliderid]').sliderFacil2000();
});
*/

(function($){
	$.fn.sliderFacil2000 = function(opciones){
		//valores por defecto
		var defaults = {
			//opciones
			velocidad : 'normal',
			easing : 'easeOutQuad',
			auto: false,
			tiempo: 1000,
			continuo: false,
			pausarHover: true
	  	}	
		opciones = $.extend(defaults, opciones);

		$(this).each(function(){
			var galeria = $(this);
			var _elemento = galeria.find('li');
			var _galeriaUl = galeria.find('ul');
			var _ultimo = _elemento.last();
			var _primero = _elemento.first();
			var _anchoContenedor = 200;//margen de seguridad
			//aplicar estilos
			_elemento.css({
				float : 'left' 
			}).each(function(){
				_anchoContenedor+=$(this).width();
			});
			_galeriaUl.css('width',_anchoContenedor +'px');
			
			//insertar controles
			galeria.append('<div class="sliderFacilBotones"><a class="botonAnterior" href="#">  </a><a class="botonSiguiente" href="#">  </a></div>');
			var  _botonAnterior = galeria.find('.botonAnterior');
			var  _botonSiguiente = galeria.find('.botonSiguiente');
			var _intervalo = 0;
			var _margenGaleriaUl = 0;
			var moverContinuo = false;
			var direccion = 'izquierda';
			var step = 25;
			
			_botonAnterior.css('display','block');
			
			//asignar movimiento
			_botonSiguiente.click(function(e){
				e.preventDefault();
				_MoverSiguiente();
			});
			_botonAnterior.click(function(e){
				e.preventDefault();
				_MoverAnterior();
			});
			if(opciones.auto){
				moverContinuo = true;
				_intervalo = setInterval(function(){
					if(moverContinuo){
						if(direccion == 'izquierda'){
							_MoverSiguiente();
						}else if(direccion == 'derecha'){
							_MoverAnterior();
						}
						_chequearUltimo();
					}
				},opciones.tiempo);	
				if(opciones.pausarHover){
					galeria.mouseover(function(){moverContinuo = false;});
					$('.botonAnterior,.botonSiguiente').mouseover(function(){moverContinuo = false;});
					galeria.mouseout(function(){moverContinuo = true;});
				}
			}
			if(opciones.continuo && !opciones.auto){
				moverContinuo = true;
				_intervalo = setInterval(function(){
					if(moverContinuo){
						_galeriaUl.css('margin-left',_margenGaleriaUl + 'px');
						if(direccion == 'izquierda'){
							_margenGaleriaUl-=1;
						}else if(direccion == 'derecha'){
							_margenGaleriaUl+=1;
						}
						_chequearUltimo();
					}
				},step);	
				if(opciones.pausarHover){
					galeria.mouseover(function(){moverContinuo = false;});
					galeria.mouseout(function(){moverContinuo = true;});
				}
			}
			function _MoverAnterior(){
				direccion = 'derecha';
				var moverBACK = moverContinuo;
				moverContinuo = false;
				_margenGaleriaUl+=_elemento.width();
				var moverOffset = _margenGaleriaUl + 'px';
				_galeriaUl.stop().animate({
					marginLeft: moverOffset
				}, opciones.velocidad, opciones.easing,function(){
					_chequearUltimo();
					moverContinuo = moverBACK;
				});
			}
			function _MoverSiguiente(){
				direccion = 'izquierda';
				var moverBACK = moverContinuo;
				moverContinuo = false;
				_margenGaleriaUl-=_elemento.width();
				var moverOffset = _margenGaleriaUl + 'px';
				_galeriaUl.stop().animate({
					marginLeft: moverOffset
				}, opciones.velocidad, opciones.easing, function(){
					_chequearUltimo();
					moverContinuo = moverBACK;
				});
				
			}
			function _chequearUltimo(){
					if(_primero.offset().left < galeria.offset().left){
						_botonAnterior.css('display','block');
					}else{
						_botonAnterior.css('display','none');
						direccion = 'izquierda';
					}
					if(galeria.offset().left + galeria.width() >= (_ultimo.offset().left + _ultimo.width() - 2)){//-2 es una correccion
						_botonSiguiente.css('display','none');
						direccion = 'derecha';
					}else{
						_botonSiguiente.css('display','block');
					}
			}
		});		
		return false;
	};	
})(jQuery);