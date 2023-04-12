## Notes à l'attention du testeur 🙂

### Les éléments attendus :

- **L'accessibilité** : La version est **responsive**, utilise la **sémantique** et les attributs **aria** et **role**. **La navigation par tabulation a également été gérée** (mise en avant des focus en jaune pour le menu et en bleu pour le reste de la page, les tabindex changent en fonction de la taille de l'écran concernant le menu, qu'il soit burger ou non).
- Concernant le second parallax : il est appliqué sur l'image kiloren. **Pour respecter l'homothétie de l'image, celle-ci est légèrement zoomée par rapport au jpg de la version mobile. C'est volontaire pour un meilleur rendu**. Il s'agit bien d'une **classe JS** qui peut être utilisée sur n'importe quel élément HTML en ajoutant les attributs **data-parallax** (pour appliquer le parallaxe) et **data-speed="0.8"** (pour la vitesse du défilement).
- Le menu reste fixe au scroll. J'ai ajouté un background sous le burger également car il n'est pas visible sans cela au-dessus des zones à fond blanc.
- Le bloc publicitaire visible en mode desktop est bien fixe dans sa section.
- Pour les CSS, j'ai utilisé le **système 7-1 et le BEM couplé au OOCSS**.
- Concernant la séparation des composants, j'ai uniquement séparé le header et le footer du content de la page pour ce test, mais dans un autre contexte **j'aurais isolé les éléments suivants** :
  - Menu
  - Sections avec différents patterns modulables
  - Les images full width avec un **role="presentation"**
  - Composant pour les publicités avec son système de fixe au scroll contraint par son parent
  - ...
- J'ai vu quelques différences entre les versions mobile et desktop concernant la mise en avant des liens et des éléments en italique. **J'ai donc pris en compte la version la plus complète (la desktop) pour la mise en forme du texte**.
- Au sujet de la section "A long time ago, in a galaxy far, far away…", dans les maquettes version desktop, le texte se coupe étrangement après le texte "...presque inconnue..." et à côté de l'image avec R2D2. **J'ai volontairement laissé un flow continu, mais un margin bottom simple juste avant le UL peut donner le même rendu que sur la version en 1024**.
- Enfin, dans la maquette version mobile, le texte est coupé. Je ne l'ai pas pris en compte.

### Notes importantes :

- J'ai pu vérifier le rendu sur les navigateurs suivants : Edge, Firefox, Chrome sur PC (dernières versions) et Safari sur iPhone (je n'ai pas de compte privé BrowserStack pour vérifier sur d'autres devices).
- J'ai effectué ce test sur un PC sous Windows WSL 2 😶‍🌫️ 😶‍🌫️ 😶‍🌫, j'ai donc :
  - Récupéré, via un lecteur de fichier Sketch en ligne, quelques informations sur les polices, mais pour le reste, j'ai utilisé les assets fournis. Je me suis donc rapproché au plus près des maquettes fournies en jpg via une ouverture sous Photoshop afin de mesurer le plus précisément possible les marges, les paddings, etc.

**Concernant les images** :
    - Je les ai passées sous https://tinypng.com/ pour les réduire en poids au maximum, même si cela passe ensuite par le responsive-loader.
    - Je me suis permis de cropper le logo en png transparent au plus près afin de réduire son poids, mais aussi pour supprimer les étoiles présentes autour pour un rendu parallaxe un peu plus sympa.
    - Je n'ai pas utilisé les SVG du menu burger (fait en CSS), ni certaines des images fournies dans les assets.


*cmd : npm run start & npm run build*