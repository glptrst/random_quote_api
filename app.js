"use strict";

const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

// Create a Server object
const server = http.createServer((req, res) => {
    //Add error listener
    req.on('error', (err) => {
	console.error(err);
	res.statusCode = 400;
	res.end();
    });

    // Accept only GET method
    if (req.method === 'GET') {
	// For the moment let's keep it simple. The api reponds only with 40 quotes when
	// req.url equals '/'
	if (req.url === '/') {
	    res.statusCode = 200;
	    res.setHeader('Content-Type', 'application/json');
	    let response = [
		{ID: 2177, title: "Nicholas Burroughs", content: "<p>Minimalism is not a lack of something. It’s simply the perfect amount of something.</p>↵", link: "https://quotesondesign.com/nicholas-burroughs-3/"},
		{ID: 732, title: "Saul Bass", content: "<p>Design is thinking made visual.  </p>↵", link: "https://quotesondesign.com/saul-bass/"},
		{ID: 2147, title: "Walker Evans", content: "<p>Stare. It is the way to educate your eye, and m…ie knowing something. You are not here long.</p>↵", link: "https://quotesondesign.com/walker-evans/"},
		{ID: 1900, title: "Andrew Spittle", content: "<p>If a feature or product were legitimately easy … assume the software is wrong, not the user.</p>↵", link: "https://quotesondesign.com/andrew-spittle/"},
		{ID: 1459, title: "Edward Tufte", content: "<p>There is no such thing as information overload,…luttered and/or confusing, fix your design. </p>↵", link: "https://quotesondesign.com/edward-tufte/"},
		{ID: 1976, title: "Jay Dutta", content: "<p>Design is about enabling ideas, processes and p…roachable, usable, desireable and memorable.</p>↵", link: "https://quotesondesign.com/jay-dutta/"},
		{ID: 1136, title: "Paul Attwood", content: "<p>Decisions on artwork by committee end up being … people off rather than turning people on.  </p>↵", link: "https://quotesondesign.com/paul-attwood/"},
		{ID: 2041, title: "Rachel Hinman", content: "<p>We are only three decades into one of the most …ign development terms, that is a mere blink.</p>↵", link: "https://quotesondesign.com/rachel-hinman/"},
		{ID: 1311, title: "Denise Harman", content: "<p>Preparation gives birth to self-confidence.  </p>↵", link: "https://quotesondesign.com/denise-harman/"},
		{ID: 1408, title: "Ellen Lupton", content: "<p>Design is an art of situations. Designers respo…ed client, a good cause, or great content.  </p>↵", link: "https://quotesondesign.com/ellen-lupton-5/"},
		{ID: 149, title: "Marcus T. Cicero", content: "<p>If I had more time, I would have written a shorter letter.  </p>↵", link: "https://quotesondesign.com/marcus-t-cicero/"},
		{ID: 1351, title: "David Ogilvy", content: "<p>If it doesn&#8217;t sell it isn&#8217;t creative.  </p>↵", link: "https://quotesondesign.com/david-ogilvy-5/"},
		{ID: 58, title: "Jesse James Garrett", content: "<p>Problems with visual design can turn users off …ade with navigation or interaction design.  </p>↵", link: "https://quotesondesign.com/jesse-james-garrett/"},
		{ID: 2313, title: "William Childs", content: "<p>Advertising is the one industry where all the e…to be the people who don&#8217;t work in it.</p>↵", link: "https://quotesondesign.com/william-childs-2/"},
		{ID: 24, title: "Miguel de Cervantes", content: "<p>Delay always breeds danger; and to protract a great design is often to ruin it.  </p>↵", link: "https://quotesondesign.com/miguel-de-cervantes/"},
		{ID: 2007, title: "Edward Tufte", content: "<p>To clarify, add detail. Imagine that, to clarif…ing out information, instead fix the design.</p>↵", link: "https://quotesondesign.com/edward-tufte-4/"},
		{ID: 620, title: "Marc Chagall", content: "<p>If I create from the heart, nearly everything works; if from the head, almost nothing.  </p>↵", link: "https://quotesondesign.com/marc-chagall/"},
		{ID: 704, title: "Samuel Antupit", content: "<p>If the bones don&#8217;t work, you&#8217;ve got a pile of skin.  </p>↵", link: "https://quotesondesign.com/samuel-antupit/"},
		{ID: 923, title: "Peter Landt", content: "<p>A successful design career is possible without …o not undervalue (or overvalue) your work.  </p>↵", link: "https://quotesondesign.com/peter-landt/"},
		{ID: 361, title: "Hans Höger", content: "<p>Designers have a dual duty; contractually to th… later users and recipients of their work.  </p>↵", link: "https://quotesondesign.com/hans-hoger/"},
		{ID: 1771, title: "Nate Simpson", content: "<p>It takes the same amount of effort to make bad …t what you&#8217;ve made will touch anybody.</p>↵", link: "https://quotesondesign.com/nate-simpson/"},
		{ID: 990, title: "Derek Sivers", content: "<p>The creative person basically has two kinds of … at hand covers both bases, but not often.  </p>↵", link: "https://quotesondesign.com/derek-sivers/"},
		{ID: 1803, title: "Benjamin Valbret", content: "<p>Designers are crazy and yet sane enough to know where to draw the line.</p>↵", link: "https://quotesondesign.com/benjamin-valbret/"},
		{ID: 2207, title: "Robert Nealan", content: "<p>Man up, admit it isn’t good enough, and fix it now.</p>↵", link: "https://quotesondesign.com/robert-nealan/"},
		{ID: 1867, title: "Robert Brownjohn (when asked What is graphic design?)", content: "<p>I am.</p>↵", link: "https://quotesondesign.com/robert-brownjohn/"},
		{ID: 574, title: "Jack H. Summerford", content: "<p>If you have a great idea, it will tell you how to execute it.  </p>↵", link: "https://quotesondesign.com/jack-h-summerford/"},
		{ID: 161, title: "Pablo Picasso", content: "<p>I am always doing that which I can not do, in order that I may learn how to do it.  </p>↵", link: "https://quotesondesign.com/pablo-picasso/"},
		{ID: 2222, title: "Martin Scorsese", content: "<p>There is no such thing as simple. Simple is hard.</p>↵", link: "https://quotesondesign.com/martin-scorsese/"},
		{ID: 1387, title: "Nick Longo", content: "<p>The space between an idea and a concept is your…;t say it out loud you can&#8217;t do it.   </p>↵", link: "https://quotesondesign.com/nick-longo/"},
		{ID: 1404, title: "Frank Zappa", content: "<p>Without deviation from the norm progress is not possible.  </p>↵", link: "https://quotesondesign.com/frank-zappa-2/"},
		{ID: 463, title: "David Airey", content: "<p>Do not seek to change what has come before. Seek to create that which has not.  </p>↵", link: "https://quotesondesign.com/david-airey/"},
		{ID: 1974, title: "Paul Rand", content: "<p>If a design can be refined, without disturbing …nt of pride and should be shown at its best.</p>↵", link: "https://quotesondesign.com/paul-rand-11/"},
		{ID: 1577, title: "Gustave Flaubert", content: "<p>Be regular and orderly in your life like a bour…ou may be violent and original in your work.</p>↵", link: "https://quotesondesign.com/gustave-flaubert/"},
		{ID: 1138, title: "Donald Rumsfeld", content: "<p>As we know,<br />↵There are known knowns.<br />…on&#8217;t know<br />↵We don&#8217;t know.  </p>↵", link: "https://quotesondesign.com/donald-rumsfeld/"},
		{ID: 1853, title: "Cecil B. DeMille", content: "<p>Creativity is a drug I cannot live without.</p>↵", link: "https://quotesondesign.com/cecil-b-demille/"},
		{ID: 824, title: "Woody Allen", content: "<p>If you&#8217;re not failing every now and again…en&#8217;t doing anything very innovative.  </p>↵", link: "https://quotesondesign.com/woody-allen/"},
		{ID: 1798, title: "Steve Jobs", content: "<p>When you&#8217;re a carpenter making a beautifu…lity, has to be carried all the way through.</p>↵", link: "https://quotesondesign.com/steve-jobs-4/"},
		{ID: 1823, title: "Rasha Hamdan", content: "<p>Practicality is the serial killer of dreams.</p>↵", link: "https://quotesondesign.com/rasha-hamdan/"},
		{ID: 436, title: "Paul Jacques Grillo", content: "<p>Simplicity does not mean want or poverty. It do…ything foreign to it should be taken away.  </p>↵", link: "https://quotesondesign.com/paul-jacques-grillo/"},
		{ID: 1504, title: "Ellen Lupton", content: "<p>Think more, design less.</p>↵", link: "https://quotesondesign.com/ellen-lupton-7/"}
	    ];
	    res.end(JSON.stringify(response));
	} else {
	    res.statusCode = 404;
	    res.end();
	}
    } else {
	res.statusCode = 404;
	res.end();
    }
});
