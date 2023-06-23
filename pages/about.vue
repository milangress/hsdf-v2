<template lang="pug">
  .about-page
    .about-background
    .about-content
      nav
        NuxtLink(to="/")
          BlurBox(bg-color="#ffffff") 🢨 back
      img.small-logo(src="/UnrealEnterprises-Logo-sw-stern_1.png")

      .line.left-line
      .line.right-line
      .line.vertical-1
      .line.vertical-2
      .text.text-left
        p Unreal.Enterprises ist ein Forschungsprojekt gelegen an einem Nonplace* (Nontime) der <i>*FarTooReal_RealRealityDimension*</i>, mit einem Fokus auf der Entwicklung von Tools und Methodiken für einen partizipativen künstlerisch/prozessorientiert und –recherchenbasierten Gestaltungsprozess. Sowie der Untersuchung von Fiktionen anhand von deren Manifestation innerhalb eines künstlerischen Arbeitsprozesses 🡢 Fiktion als Praxis.
        p Die Methode von HSDF (Thesis) umfasst — das Entwickeln eines fiktiven Szenarios durch text- und recherchenbasiertes arbeiten, sowie dessen Materialisierung als Objekt
        br
        p »Highly Speculative Design Fiction« delivers FaaS — Future as a Service. How would our future be shaped by »a microscopic intimacy to forget about contemporary capitalism«? How could we dream together in »a motionless space apart from ›real‹ desire«? Could we paint a future »without the worst parts of bitter-sweet boomer magic«? or make »The first performance e-meeting in feminine physical space«?

        p Mit diversen Zukunftsszenarien, konkret gestalteten Werkzeugen, sowie realer Designartefakte wollen wir einen Dialog über die Möglichkeiten der Zukunft und die nötige visionäre Pluralität von Zukunftsbildern schaffen.

        p Always remember to keep your "optimism-pessimism" ❦.

      .text.text-right
        p Welche Bilder haben wir heute von unserer Zukunft? Fredric Jameson schreibt: Aktuell „[…] ist [es] einfacher, sich das Ende der Welt vorzustellen als das Ende des Kapitalismus.“ Oder wie Nik Baerten es formuliert: „[…] it feels like we are suffering from a collective imagination deficit“.

        p Die heute vorherrschenden Zukunftsbilder sind oftmals geleitet von neoliberaler Ideologie. Die Träume und Visionen, die uns beispielsweise Elon Musk vorschlägt, sind oft nur „Lösungen“ von Superreichen für Mittelreiche. Wir brauchen eine neue visionäre Pluralität und Diversität von kollektiven Zukunftsbildern! Zum einen, um der Komplexität der Zukunft gerecht zu werden und unsere Welt kritisch zu hinterfragen und zum anderen um unsere Imagination zu fordern und Katalysatoren für Handlung zu schaffen.

        p Mit unserer Thesis haben wir eine Methode entwickelt, die es in partizipativen Prozessen erlaubt, die Zukunft als eine gestaltbare zu erleben. »Highly Speculative Design Fiction« betrachtet Fiktion und Realität als gleichwertig und stellt die Fiktion bewusst in den Mittelpunkt der Designpraxis, um über die Zukunft zu spekulieren.

        p Die Methode umfasst das Entwickeln fiktiver Szenarien mithilfe von uns konkret gestalteter Storytelling-Werkzeuge: der »HSDF-Matrix« und der »FaaS-Maschine« sowie die darauffolgende Materialisierung der Szenarien, durch das künstlerische Gestalten von Artefakten.

        p Im Rahmen dieser Arbeit haben wir drei fiktive Szenarien entwickelt und die entsprechenden, gleichnamigen Artefakte umgesetzt: *»Microscopic Intimacy«*, das *»Visionary Imaginary Landscape Project«* und *»Vitreous Body«*. Wir benutzen dabei fiktive absurde Realitäten, um zeitgenössische Dynamiken zu untersuchen und Erkenntnisse über das Hier und Jetzt zu gewinnen.
      .text-left-bottom
      .text-right-bottom
      .contact-wrapper
        p <em>🙦Contact us</em> <br> real@unreal.enterprises <br> 💦
      .about-us-wrapper
        h3 Milan Gress <br> Annalena Janke

        p

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
  filter: var(--grain);
}
nav a {
  color: #3372ed;
  text-decoration: none;
}
nav:hover {
  /*filter: saturate(40000);*/
  mix-blend-mode: color-dodge;
}

.small-logo {
  max-width: 70vw;
  position: absolute;
  right: 2rem;
  top: 2rem;
  mix-blend-mode: multiply;
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
  font-size: 1.75rem;
  color: rgb(0, 0, 0);
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.2), 0px 1px 1px rgb(255, 255, 255, 0.2);
  /*filter: url(#globalDisplacementFilter);*/
  line-height: 1.3;
  /*text-transform: uppercase;*/
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
  /*filter: url(#globalDisplacementFilter);*/
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
  filter: var(--grain);
  /*text-shadow: 0 0 5px #FFFFFF, 0 0 15px #FFFFFF, 0 0 25px #FFFFFF, 0 0 35px #FFFFFF, 0 0 45px #FFFFFF, 0 0 55px #FFFFFF, 0 0 65px #FFFFFF, 0 0 75px #FFFFFF, 0 0 85px #FFFFFF, 0 0 95px #FFFFFF, 0 0 105px #FFFFFF, 0 0 115px #FFFFFF, 0 0 125px #FFFFFF, 0 0 135px #FFFFFF;*/
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #FFFFFF, -1px -1px 0 #FFFFFF, 0 0 15px #FFFFFF;

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
p+p {
  padding-top: 1em;
}
</style>
