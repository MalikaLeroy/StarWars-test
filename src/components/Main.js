import advertisement from '../img/ad.jpg';
import kiloren from '../img/kiloren.jpg?sizes[]=576,sizes[]=768,sizes[]=992,sizes[]=1080,sizes[]=1200,sizes[]=1400';
import kiloren2x from '../img/kiloren-2x.jpg?sizes[]=1152,sizes[]=1536,sizes[]=1984,sizes[]=2160,sizes[]=2400,sizes[]=2800';
import r2d2 from '../img/r2d2_c3p0.jpg';
import stormtroopers from '../img/stormtroopers.jpg?sizes[]=576,sizes[]=768,sizes[]=992,sizes[]=1080,sizes[]=1200,sizes[]=1400';
import stormtroopers2x from '../img/stormtroopers-2x.jpg?sizes[]=1152,sizes[]=1536,sizes[]=1984,sizes[]=2160,sizes[]=2400,sizes[]=2800';



export default function Main(Parallax) {

    window.addEventListener('scroll', function () {
        const [parentTop, parentBottom, adHeight, menuHeight] = [
            document.querySelector('.intro__advertisement').getBoundingClientRect().top,
            document.querySelector('.intro__advertisement').getBoundingClientRect().bottom,
            document.querySelector('.intro__advertisement > a').getBoundingClientRect().height,
            document.querySelector('.main-menu__list').getBoundingClientRect().height
        ];

        const [position, top, bottom] =
            parentTop <= menuHeight * 1.5 && parentBottom > adHeight ? ['fixed', menuHeight * 1.5 + "px", 'auto']
                : parentBottom <= adHeight ? ['absolute', 'auto', -menuHeight * 1.5 + "px"]
                    : ['absolute', 0, 'auto'];
        const advertisement = document.querySelector('.intro__advertisement > a');
        advertisement.style.position = position;
        advertisement.style.top = top;
        advertisement.style.bottom = bottom;
    });


    return `
<section class="intro">
	<div class="intro__content">
		<h1>Star Wars, The Force Awakens</h1>
		<p>
			Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression.Les membres de l'Alliance rebelle, devenus la « 
			<a href="#"title="En savoir plus sur la Résistance">Résistance</a>
			 », combattent les vestiges de l'Empire réunis sous la bannière du « 
			<a href="#" title="En savoir plus sur le Premier Ordre">Premier Ordre</a>
			 ».
		</p>
		<p>
			Un mystérieux guerrier, 
			<a href="#" title="En savoir plus sur Kylo Ren">Kylo Ren</a>
			, semble vouer un culte à 
			<a href="#" title="En savoir plus sur Dark Vador">Dark Vador</a>
			 et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un 
			<a href="#"title="En savoir plus sur le Stormtrooper">Stormtrooper</a>
			 en fuite, une rencontre quibouleversera sa vie.
		</p>
		<p>
			Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression.Les membres de l'Alliance rebelle, devenus la « 
			<a href="#"title="En savoir plus sur la Résistance">Résistance</a>
			 », combattent les vestiges de l'Empire réunis sous la bannière du « 
			<a href="#" title="En savoir plus sur le Premier Ordre">Premier Ordre</a>
			 ».
		</p>
		<p>
			Un mystérieux guerrier, 
			<a href="#" title="En savoir plus sur Kylo Ren">Kylo Ren</a>
			, semble vouer un culte à 
			<a href="#" title="En savoir plus sur Dark Vador">Dark Vador</a>
			 et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un 
			<a href="#"title="En savoir plus sur le Stormtrooper">Stormtrooper</a>
			 en fuite, une rencontre quibouleversera sa vie.
		</p>
		<p>
			Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression.Les membres de l'Alliance rebelle, devenus la « 
			<a href="#"title="En savoir plus sur la Résistance">Résistance</a>
			 », combattent les vestiges de l'Empire réunis sous la bannière du «
			<a href="#" title="En savoir plus sur le Premier Ordre"> Premier Ordre </a>
			».
		</p>
		<p>
			Un mystérieux guerrier, 
			<a href="#" title="En savoir plus sur Kylo Ren">Kylo Ren</a>
			, semble vouer un culte à 
			<a href="#" title="En savoir plus sur Dark Vador">Dark Vador</a>
			 et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un 
			<a href="#"title="En savoir plus sur le Stormtrooper">Stormtrooper</a>
			 en fuite, une rencontre quibouleversera sa vie.
		</p>
	</div>
    <aside class="intro__advertisement">
    <a href="#" title="Achetez le jeu Start Wars Battlefront sur PS4">
        <img class="lazyload lazyloading" 
        src=${advertisement.src} 
        data-src=${advertisement.src} 
        width=${advertisement.width} 
        height=${advertisement.height}
        data-expand="-10"
        alt="Jeu Star Wars Battlefront" />
        </a>
    </aside>
</section>
<div class="object-fit object-fit--kiloren" role="presentation">
  <img class="object-fit__img lazyload lazyloading" 
    data-parallax data-speed="0.2"
    width=${kiloren.width}
    height=${kiloren.height}
    src=${kiloren.src} 
    data-src=${kiloren.src}
    srcSet="${kiloren.srcSet},${kiloren2x.srcSet}"
    data-srcSet="${kiloren.srcSet},${kiloren2x.srcSet}"
    data-sizes="auto"
    data-expand="-10"
    sizes="100vw"
    alt="Portrait de Kylo Ren"
    title="Kylo Ren"/>
</div>
<section class="text-image">
  <h2>A long time ago, in a galaxy far, far away… </h2>
  <img class="lazyload lazyloading" 
    width=${r2d2.width} 
    height=${r2d2.height}
    src=${r2d2.src}
    data-src=${r2d2.src}
    data-expand="-10"
    alt="R2-D2 et son acolyte C-3PO"
    title="C-3PO et R2-D2" />
  <p><cite>La Guerre des étoiles</cite> (titre original <cite>Star Wars</cite>, soit littéralement <em>Guerres
          Stellaires</em> ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée
      comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque),
      Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (<cite>l'Épisode
          IV - Un nouvel espoir</cite>) en 1977. La série connut un succès phénoménal partout dans le monde et
      engendra une très importante communauté de fans.
      </p><p>Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut,
      toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque
      inconnus) :</p>
  <ul>
      <li>Il fait appel à des références connues et appréciées des jeunes de l'époque : films de cape et d'épée,
          westerns, péplums, contes de fées et même <cite>Le Seigneur des Anneaux</cite> de J.R.R. Tolkien ; cette
          œuvre n'apparaît pas comme de la science-fiction au sens strict mais plutôt comme du space fantasy.</li>
      <li>Les effets spéciaux, supervisés par Ken Ralston, étaient réellement novateurs, avec notamment la
          participation de John Dykstra (qui a également participé au premier film de <cite>Star Trek</cite>), qui
          avait développé une nouvelle manière d'animer les maquettes des vaisseaux en coordonnant leurs
          mouvements par ordinateur (Dykstraflex).</li>
      <li>Le film a développé un univers cohérent, avec, comme préoccupation constante, autant la création d'une
          ambiance que l'action proprement dite.</li>
      <li>La musique, composée par John Williams, introduit des thèmes récurrents et des leitmotivs (procédé
          classique mais renforçant la cohérence).</li>
      </ul>
</section>
<div>
<div class="object-fit object-fit--stormtroopers" role="presentation">
    <img class="object-fit__img lazyload lazyloading"
        width=${stormtroopers.width}
        height=${stormtroopers.height}
        src=${stormtroopers.src} 
        data-src=${stormtroopers.src}
        srcSet="${stormtroopers.srcSet},${stormtroopers2x.srcSet}"
        data-srcSet="${stormtroopers.srcSet},${stormtroopers2x.srcSet}"
        sizes="100vw"
        data-sizes="auto"
        data-expand="-10"
        alt="Une armée de Stormtroopers"
        title="Les Stormtroopers"
        />
</div>
      `
}