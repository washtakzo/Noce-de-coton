export function getWindowEffectTranslateY(
  imgContainerEl: HTMLDivElement,
  imgEl: HTMLImageElement,
  windowHeight: number
) {
  const imgContainerHeight = imgContainerEl.offsetHeight;

  const imageHeight = imgEl.offsetHeight;

  //Scroll Y in document (px) : window.scrollY  //référence = top of the window

  //Element Coord Y (px) : element.getBoundingClientRect().y
  //Par rapport a la fenetre non pas tout le document
  // = 0 lorsque le top de element aligné au top de la window

  //Element Height (px) : element.offsetHeight  //fix
  //Window Height (px) : window.innerHeight   //fix

  //on ajoute + imgContainerHeight pour avoir la position décallé d'une hauteur du container de l'image
  //ceci car la position donné par getBoundingClientRect().y est celle du top de l'élément par rapport a la window
  //il est donc égale a zéro lorsque le top et aligné au top de la window mais on veut
  //qu'il soit égale a zéro lorsque le bottom est aligné au top de la window
  //Ceci pour avoir l'effet tout au long de la visibilité de l'image
  //le leger inconvénient est que l'effet commence plus tôt en ajoutant la hauteur du container
  //il commence une fois que le top du container est une hauteur en dessous de la window
  const containerPosition =
    imgContainerEl.getBoundingClientRect().y + imgContainerHeight;

  /**
   * On ajoute ici aussi + imgContainerHeight pour avoir la proportion
   * de la position de notre image par rapport a la window + la hauteur de imgContainer
   * car on veut que l'effet soit fonctionnel sur toute la hauteur + la hauteur du container
   * pour garder l'effet jusqu'a aligner le bottom du container avec le top de window
   */
  let containerPositionPrCent =
    100 - (containerPosition * 100) / (windowHeight + imgContainerHeight);

  //Quelque mesure de sécurité pour ne pas risqué d'avoir l'image qui sort de son périmetre
  if (containerPositionPrCent < 0) containerPositionPrCent = 0;
  if (containerPositionPrCent > 100) containerPositionPrCent = 100;

  /**
   * Calcule de la marge de manoeuvre que l'on a pour notre translation
   * 100 correspond a 100% de notre image
   * (imgContainerHeight * 100) / imageHeight est la proportion en % de notre image container
   * par rapport a notre image complete
   * on soustrait ces valeurs pour savoir de combien on peut translate
   * avant d'arriver au bottom de notre image
   */
  const maxTranslateY = 100 - (imgContainerHeight * 100) / imageHeight;

  let translateY = (maxTranslateY * containerPositionPrCent) / 100;

  //Mesure de sécurité pour ne pas risqué d'avoir l'image qui sort de son périmetre
  if (translateY > maxTranslateY) translateY = maxTranslateY;

  return translateY;
}
