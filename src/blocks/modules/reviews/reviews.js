// Slider
	let position = 0;
	const slidesToShow = 1; // сколько элементов показывать
	const slidesToScroll = 1; // сколько элементов проскролливать

	const container = document.querySelector('.slider-container');
	const track = document.querySelector('.slider-track');
	// const item = document.querySelector('.slider-item');
	const items = document.querySelectorAll('.slider-item');
	const btnPrev = document.querySelector('.btn-prev');
	const btnNext = document.querySelector('.btn-next');

	const itemsCount = items.length; // колличество элементов
	const itemWidth = container.clientWidth / slidesToShow; // ширина каждого элемента
	const movePosition = slidesToScroll * itemWidth;

	items.forEach((item) => {
		item.style.minWidth = `${itemWidth}px`;
	});

	btnNext.addEventListener('click', () => {
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
		
		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	btnPrev.addEventListener('click', () => {
		const itemsLeft = Math.abs(position) / itemWidth;

		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});


	const setPosition = () => {
		track.style.transform = `translateX(${position}px)`;
	};

	const checkBtns = () => {
		btnPrev.disabled = position === 0;
		btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
	};

	checkBtns();