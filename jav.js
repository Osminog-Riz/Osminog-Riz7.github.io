 $('.multiple-items').slick({
      infinite: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
	  variableWidth: false,
	  responsive: [
	{
	 breakpoint: 480,
      settings: {
        slidesToShow: 2,
		slidesToScroll: 2, 
		centerMode: false,
		centerPadding: '10px',
      }
    }
	]
    });