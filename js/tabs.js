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
			return false;//если обьект пуст то логирует ошибку и возвращает false
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
				let parentElActive = this.switcherObj.querySelector('.footer__info-feedback-switcher-item.active');//сохраняем в переменную элемент из ds,hfyyjuj обьекта с классом active
				this.removeClass(parentElActive);//удаляем класс active пользовательским методом с элемента на котором этот класс уже есть
				this.addClass(parentEl); //добавляем класс active пользовательским методом на родительский ли кнопки по которой кликнули сохраненный в переменной parentEl
				let valueAttribute = parentEl.getAttribute('data-switch');//сохраняем в переменную значение пользовательского аттрибута элемента ли в котором лежит кнопка по которой кликнули
				if(valueAttribute === null){//проверка значения аттрибута на пустоту
					this.exeption(null);//если значение аттрибута не найдено(пусто) вызываем метод логирования который логирует ошибку
					return 0;//заканчиваем выполнение метода если аттрибут не найден
				}//если аттрибут прошел проверку метод продолжается
				let blockElActive = this.switcherObj.querySelector('#' + valueAttribute);//сохраняем в переменную элемент DOM выбранный из нашего обьекта по id который соответствует аттрибуту элемента по которому кликнули
				if(blockElActive === null){//проверяем есть ли такой обьект DOM в нашем обьекте
					this.exeption(null);//если нет логируем ошибку
					return 0;//и завершаем метод
				}//если обьект найден то метод продолжается
				else{
					let blockActive = this.switcherObj.querySelector('.footer__info-feedback-block.active');//сохраняем в переменную div c комментарием на котором есть класс active
					this.removeClass(blockActive);//убираем класс active с элемента комментария который его содержит
					this.addClass(blockElActive);//добавляем класс active на элемент который соответствует своим id аттрибуту тега ли кнопки по которой кликнули
				}
			}
		})
	}, 
	time: function(){
		console.log(this.switcherObj);
		let blocks = this.switcherObj.querySelectorAll('.footer__info-feedback-block');
		for(let block of blocks){
			console.log("1");
		}
	},
	init: function(){//функция инициализации
		this.switcherObj = document.querySelector(this.switcherElement);//через свойство нашего обьекта содержащее id выбираем обьект из DOM и сохраняем в свойство с пустым обьектом
		if(this.exeption(this.switcherObj) == false){//методом логирования проверяем обьект выбранный из DOM по id если он пуст то метод логирования вернет false
			return 0;//и метод инициализации завершится
		}//если обьект из DOM не пустой то метод продолжается
		this.checked();// вызываем метод переключения в контексте выбранного обьекта
		this.time();
	}
}
