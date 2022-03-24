//Здесь сделан переключатель отзывов в футере
let switcherTab = {
	switcherElement: "#feedback",//свойство для хранения id по которому выбираем обьект
	switcherObj: null, //свойство для хранения обьекта
	addClass: (el)=>{//метод добавления активного класса
		el.classList.add('active');
	},
	removeClass: (el)=>{//метод удаления активного класса
		el.classList.remove('active');
	},
	exeption: (obj)=>{//метод для логирования ошибок
		if(obj === null){
			console.log('Error');
			return false;
		}
		else{
			return true;
		}
	},
	checked: function(){//метод переключателя
		console.log(this);
		this.switcherObj.addEventListener('click', (evt)=>{//добавляем событие клика на обьект DOM выбранный в контексте нашего пользовательского обьекта выбранного по id
			if(evt.target.closest('.button')){//условие выполняется если событие клика происходит по элементу с классом button
				let parentEl = evt.target.parentElement;//сохраняем в переменную родителя элемента по которому кликнули
				if(parentEl.tagName != "LI"){//проверяем является ли родитель элемента клика тегом li
					this.exeption(null);//если родитель элемента не тег ли то передаем в метод логирования пустой обьект возвращаем false
					return 0;//прекращаем выполнение метода
				}//если родитель обьекта клика тег ли то метод работает дальше
				let parentElActive = this.switcherObj.querySelector('.footer__info-feedback-switcher-item.active');
				this.removeClass(parentElActive);
				this.addClass(parentEl);
				let valueAttribute = parentEl.getAttribute('data-switch');
				if(valueAttribute === null){
					this.exeption(null);
					return 0;
				}
				let blockElActive = this.switcherObj.querySelector('#' + valueAttribute);
				if(blockElActive === null){
					this.exeption(null);
					return 0;
				}
				else{
					let blockActive = this.switcherObj.querySelector('.footer__info-feedback-block.active');
					this.removeClass(blockActive);
					this.addClass(blockElActive);
				}
			}
		})
	}, 
	init: function(){
		this.switcherObj = document.querySelector(this.switcherElement);
		if(this.exeption(this.switcherObj) == false){
			return 0;
		}
		this.checked();
	}
}
