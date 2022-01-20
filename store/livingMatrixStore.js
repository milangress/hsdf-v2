export const state = () => ({
  markers: [],
  markersOLD: [
    {
      title: 'Vitreous Body 2021',
      year: 2020,
      category: 'scenario',
      pos: {
        x: 20,
        y: 20
      },
      matrix: {
        1: 'Axis test',
        2: 'Axis test1',
        3: 'Axis test3'
      },
      szenario: 'Text (lateinisch texere ‚weben‘, ‚flechten‘) bezeichnet im nichtwissenschaftlichen Sprachgebrauch eine abgegrenzte, zusammen- hängende, meist schriftliche sprachliche Äußerung, im weiteren Sinne auch nicht geschriebene, aber schreibbare Sprachinformation (beispielsweise eines Liedes, Films oder einer improvisierten Theater­aufführung). Aus sprachwissenschaftlicher Sicht sind Texte die sprachliche Form einer kommu- nikativen Handlung.',
      objects: [
        {
          title: 'Img title',
          url: 'test.png',
        }
      ]
    },
    {
      title: 'Visionary Imaginary Landscape project',
      year: 2020,
      category: 'scenario',
      pos: {
        x: 30,
        y: 60
      },
      matrix: {
        1: 'Axis test',
        2: 'Axis test1',
        3: 'Axis test3'
      },
      szenario: 'Text (lateinisch texere ‚weben‘, ‚flechten‘) bezeichnet im nichtwissenschaftlichen Sprachgebrauch eine abgegrenzte, zusammen- hängende, meist schriftliche sprachliche Äußerung, im weiteren Sinne auch nicht geschriebene, aber schreibbare Sprachinformation (beispielsweise eines Liedes, Films oder einer improvisierten Theater­aufführung). Aus sprachwissenschaftlicher Sicht sind Texte die sprachliche Form einer kommu- nikativen Handlung.',
      objects: [
        {
          title: 'Img title',
          url: 'test.png',
        }
      ]
    },
    {
      title: 'Microscopic Intimacy',
      year: 2020,
      category: 'scenario',
      pos: {
        x: 70,
        y: 20
      },
      matrix: {
        1: 'Axis test',
        2: 'Axis test1',
        3: 'Axis test3'
      },
      szenario: 'Text (lateinisch texere ‚weben‘, ‚flechten‘) bezeichnet im nichtwissenschaftlichen Sprachgebrauch eine abgegrenzte, zusammen- hängende, meist schriftliche sprachliche Äußerung, im weiteren Sinne auch nicht geschriebene, aber schreibbare Sprachinformation (beispielsweise eines Liedes, Films oder einer improvisierten Theater­aufführung). Aus sprachwissenschaftlicher Sicht sind Texte die sprachliche Form einer kommu- nikativen Handlung.',
      objects: [
        {
          title: 'Img title',
          url: 'test.png',
        }
      ]
    },
    {
      title: 'Random Test',
      year: 2021,
      category: 'object',
      pos: {
        x: 70,
        y: 60
      },
      matrix: {
        1: 'Axis test',
        2: 'Axis test1',
        3: 'Axis test3'
      },
      szenario: 'Text (lateinisch texere ‚weben‘, ‚flechten‘) bezeichnet im nichtwissenschaftlichen Sprachgebrauch eine abgegrenzte, zusammen- hängende, meist schriftliche sprachliche Äußerung, im weiteren Sinne auch nicht geschriebene, aber schreibbare Sprachinformation (beispielsweise eines Liedes, Films oder einer improvisierten Theater­aufführung). Aus sprachwissenschaftlicher Sicht sind Texte die sprachliche Form einer kommu- nikativen Handlung.',
      objects: [
        {
          title: 'Img title',
          url: 'test.png',
        }
      ]
    }
  ]
})

export const mutations = {
  add(state, {entry}) {
    state.markers.push({
      ...entry,
      done: false
    })
  },
  replaceAll(state, entry) {
    // eslint-disable-next-line no-console
    console.log('replaceAll', entry)
    state.markers = entry
  },
  remove(state, { todo }) {
    state.markers.splice(state.markers.indexOf(todo), 1)
  },
}

export const actions = {
  async update({state, commit}) {
    // eslint-disable-next-line no-console
    console.log(state)
    if (state.markers.length <= 2) {
      // eslint-disable-next-line no-console
      console.log('load new Markers')
      const sheetID = '1-NM2-oXiVyXAK2MiGiGS2R6VSnC1wHipyr-GrOZLxAE'
      const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/0!A1:Z1001?majorDimension=ROWS&key=${this.$config.sheetApiSecret}`
      const getResults = await fetch(sheetUrl).then(response => response.json())
      const lowercase = lowercaseKeys(getResults.values)
      const obj = cleanup(convertToObject(lowercase))
      // eslint-disable-next-line no-console
      console.log(obj)
      commit('replaceAll', obj)
      // eslint-disable-next-line no-console
      console.log(state.markers)
      return state.markers
    } else {
      // eslint-disable-next-line no-console
      console.log('Marker cached')
      return state.markers
    }
  }
}

const lowercaseKeys = ([keys, ...values]) => {
  keys = keys.map(key => key.toLowerCase())
  return [keys, ...values]
}

const convertToObject = ([keys, ...values]) =>
  values.map(vs => Object.fromEntries(vs.map((v, i) => [keys[i], v])))

// const convertImgDrive = function (driveLink) {
//   return 'https://drive.google.com/uc?id={ID}\n'
// }

const cleanup = function (obj) {
  const newObj = obj.map(entry => {
    const newPos = entry.position ? entry.position.split('-') : [0, 0]
    return {
      title: entry.title || missing('Title error'),
      year: entry.year || missing(404),
      category: entry.category || missing('no category'),
      pos: {
        x: newPos[0],
        y: newPos[1]
      },
      slug: entry.title ? slugify(entry.title) : missing('slug-error'),
      text: entry.text ? entry.text : missing('Text error'), // .replace(/(?:\r\n|\r|\n)/g, '<br>')
      vonUns: (entry.vonuns.toLowerCase() === 'true'),
      author: entry.author,
      og: {
        ...entry
      }
    }
  })
  return newObj
}

const missing = function (errorMsg) {
  // eslint-disable-next-line no-console
  console.error('Some content is missing in google sheet:', errorMsg)
  return errorMsg
}


export const getters = {
  getMarkers (state) {

    const generateSlugs = state.markers.map((marker) => {
      return {
        ...marker,
        slug: slugify(marker.title)
      }
    })
    // eslint-disable-next-line no-console
    console.log(generateSlugs)
    return generateSlugs
  }
}

// eslint-disable-next-line no-unused-vars
const slugify = function (toSlug, separator = "-") {
  return toSlug
    .toString()
    .normalize('NFD') // split an accented letter in the base letter and the ascent
    .replace(/[\u0300-\u036F]/g, '') // remove all previously split accents
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')   // remove all chars not letters, numbers and spaces (to be replaced)
    .trim()
    .replace(/\s+/g, separator);
};
