

$(function(){
	
	

	$(document).ready(function(){
		var randomColor = colors[j];
		var randomQuote = words[Math.floor(Math.random() * words.length)];
		$('body').addClass(randomColor);
		$('#quote').text(randomQuote);
		$("#quote").css({ 'marginTop': '-0.2em', 'opacity': '0' });
		$("#quote").delay(100).animate({ 
	    	opacity: "1",
	    	marginTop: "0em"
	 	}, 300 ); 
	});

	
	
	var words = [ 
					'never says never',
					'thinks before she mocks',
					'should know how to prototype',
					'is empathetic',
					'communicates without a mouse',
					'respects platform pattern',
					'does not ignore business goals',
					'is obsessed with details',
					'loves sticky notes',
					'likes saying "it depends"',
					'is super curious',
					'should learn mindfulness',
					'gets her hands dirty',
					'knows Dribbble is eye candy',
					'has a big heart',
					'asks a lot of questions',
					'picks the right battle',
					'is a visual thinker',
					'is persistent',
					'does not jump into solutions',
					'should be on Twitter',
					'does not design with Lorem Ipsum',
					'knows Photoshop is just a tool',
					'tells stories with no bullshit',
					'does more than pushing pixels',
					'knows when to give up',
					'likes to sketch',
					'is diplomatic',
					'can connect the dots',
					'loves to learn'

				];

	var colors = [ 
					'c1',
					'c2',
					'c3',
					'c4',
					'c5',
					'c6'

				];
	var j = Math.floor(Math.random() * colors.length);
	$('#go').click(function(){
		
		MagicWand();		
		
	});


	function MagicWand() {
		$('#go').unbind('click');
		$("#quote").animate({ 
        	opacity: "0",          	
		}, 300, 
			function(){
     			
				var randomQuote = words[Math.floor(Math.random() * words.length)];
				$('#quote').text(randomQuote);

				$("#quote").css({ 'marginTop': '-0.2em' });
				$("#quote").delay(100).animate({ 
		        	opacity: "1",
		        	marginTop: "0em",  
		     	}, 300 ); 
		     	j = (j+1)%colors.length;
		     	
		     	
				$('body').removeClass();
				$('body').addClass(colors[j]);
				setTimeout(function() {
				    $('#go').click(function(){		
						MagicWand();		
					});
				}, 500);
				
			}
		);
	}

		
});



