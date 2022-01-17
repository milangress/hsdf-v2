<template lang="pug">
  .about-page
    .about-background
    .about-content
      nav
        NuxtLink(to="/")
          BlurBox(bg-color="#ffffff") 🢨 back
      .line.left-line
      .line.right-line
      .line.vertical-1
      .line.vertical-2
      .text.text-left
        p Text (lateinisch texere ‚weben‘, ‚flechten‘) bezeichnet im nichtwissenschaftlichen Sprachgebrauch eine abgegrenzte, zusammen- hängende, meist schriftlText iche sprachliche Äußerung, im weiteren Sinne auch nicht geschriebene, aber schreibbare Sprachinformation (beispielsweise eines Liedes, Films oder einer improvisierten Theater­- aufführung). Aus sprachwissenschaftlicher Sicht sind Texte die sprachliche Form einer kommunikativen Handlung.

        p Text (lateinisch texere ‚weben‘, ‚flechten‘) bezeichnet im nichtwissenschaftlichen Sprachgebrauch eine abgegrenzte, zusammen- hängende, meist schriftliche sprachliche Äußerung, im weiteren Sinne auch nicht geschriebene, aber schreibbare Sprachinformation (beispielsweise eines Liedes, Films oder einer improvisierten Theater­- aufführung). Aus sprachwissenschaftlicher Sicht sind Texte die sprachliche Form einer kommunikativen Handlung.
      .text.text-right
        p Text (lateinisch texere ‚weben‘, ‚flechten‘) bezeichnet im nichtwissenschaftlichen Sprachgebrauch eine abgegrenzte, zusammen- hängende, meist schriftlText iche sprachliche Äußerung, im weiteren Sinne auch nicht geschriebene, aber schreibbare Sprachinformation (beispielsweise eines Liedes, Films oder einer improvisierten Theater­- aufführung). Aus sprachwissenschaftlicher Sicht sind Texte die sprachliche Form einer kommunikativen Handlung.

        p Text (lateinisch texere ‚weben‘, ‚flechten‘) bezeichnet im nichtwissenschaftlichen Sprachgebrauch eine abgegrenzte, zusammen- hängende, meist schriftliche sprachliche Äußerung, im weiteren Sinne auch nicht geschriebene, aber schreibbare Sprachinformation (beispielsweise eines Liedes, Films oder einer improvisierten Theater­- aufführung). Aus sprachwissenschaftlicher Sicht sind Texte die sprachliche Form einer kommunikativen Handlung.
      .text-left-bottom
      .text-right-bottom
      .contact-wrapper
        p <em>🙦Contact us</em> <br> post@milanna.de <br> 💦
      .about-us-wrapper
        h3 Milan Gress <br> Annalena Janke

        p The works of Alexandra Crouwers arise in the digital realm, and manifest themsel ves as video installations, text, tapestries, wallpaper, or a modest form of online a ctivismNon linear narratives, science fic tion, ecological grief and virtual diorama s are recurring themes Crouwers behave s as a mediator in time shifting between The Distant Past and the Far Future

        .about-links
          a www.milangress.com
          br
          a www.annajanke.space
          br
          a www.are.na/anna-lena-janke
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>
.about-page {
  display: grid;
  filter: saturate(1.5);
}
.about-page > * {
  grid-column: 1;
  grid-row: 1;
}
nav {
  height: min-content;
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 3rem;
  transform: scaleX(0.8);
  filter: url("http://localhost:3000/about#globalDisplacementFilter");
}
nav a {
  color: #3372ed;
  text-decoration: none;
}
nav:hover {
  /*filter: saturate(40000);*/
  mix-blend-mode: color-dodge;
}

.about-background {
  /*min-height: 500vh;*/
  background-color: #ff0000;
  background-image: url("/about_bg.gif");
  background-repeat: repeat-y;
  background-size: 200%;
  background-position: center top;
  filter: blur(10px);
  z-index: -100;
}
.about-content {
  display: grid;
  grid-template-columns: 2rem 1fr 1fr;
  grid-template-rows: 50vh auto min-content 6rem minmax(50vh, max-content);
}
.text-left {
  grid-column: 2;
  grid-row: 2;
}
.text {
  padding: 1rem 1rem 5rem 1rem;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  text-shadow: 0px 6px 6px rgb(0, 0, 255), 0px 3px 3px rgb(0, 0, 255);
  filter: url(#globalDisplacementFilter);
  line-height: 1.2;
  text-transform: uppercase;
}
.text-right {
  grid-column: 3;
  grid-row: 2;
}

.contact-wrapper {
  grid-column: 2;
  grid-row: 3;
  justify-self: end;
  padding: 1rem 6rem 3rem 2rem;
  border-radius: 2rem;
  color: red;
  font-size: 1.5rem;
  background: linear-gradient(180deg, rgba(221,220,222,1) 0%, rgba(134,165,228,1) 50%, rgba(221,220,222,0) 100%);
  filter: url(#globalDisplacementFilter);
  transform: translate(3rem, 1rem);

}

.text-right-bottom {
  filter: url(#globalDisplacementFilter);
  grid-column: 3;
  grid-row: 3;
  border-radius: 2rem;
  background: linear-gradient(0deg, rgba(23,245,32,1) 0%, rgba(134,165,228,1) 50%, rgba(221,220,222,0) 100%);
}
.text-left-bottom {
  filter: url(#globalDisplacementFilter);
  grid-column: 2;
  grid-row: 3 / span 2;
  border-radius: 2rem;
  background: linear-gradient(0deg, rgba(23,245,32,1) 0%, rgba(134,165,228,1) 50%, rgba(221,220,222,0) 100%);
}

.about-us-wrapper {
  grid-column: 3;
  grid-row: 4 / span 2;
  padding: 1rem 5rem 5rem 1rem;
  margin-bottom: 5rem;
  color: red;
  font-size: 1.5rem;
  line-height: 1.2;
  filter: url(#globalDisplacementFilter);
  /*text-shadow: 0 0 5px #FFFFFF, 0 0 15px #FFFFFF, 0 0 25px #FFFFFF, 0 0 35px #FFFFFF, 0 0 45px #FFFFFF, 0 0 55px #FFFFFF, 0 0 65px #FFFFFF, 0 0 75px #FFFFFF, 0 0 85px #FFFFFF, 0 0 95px #FFFFFF, 0 0 105px #FFFFFF, 0 0 115px #FFFFFF, 0 0 125px #FFFFFF, 0 0 135px #FFFFFF;*/
  text-transform: uppercase;

}
.about-us-wrapper p {
  color: #3372ed;
}
.about-us-wrapper > * {
  padding-bottom: 1rem;
}
.about-links {
  padding-left: 1rem;
}

.line {
  z-index: -1;
  filter: url(#globalDisplacementFilter);
}
.left-line {
  grid-column: 1;
  grid-row: 1 / -1;
  border-right: 2px solid red;
}
.right-line {
  grid-column: 2;
  grid-row: 1 / -1;
  border-right: 2px solid red;
}
.vertical-1 {
  grid-column: 1 / -1;
  grid-row: 1;
  border-bottom: 2px solid red;
}
.vertical-2 {
  grid-column: 1 / -1;
  grid-row: 3;
  border-bottom: 2px solid red;
}
</style>
