
const _ = require('./underbar.js');

const shout = (...sentences) => console.log(...sentences);
const shoutToHTML = (...sentences) => {
  const app = document.querySelector('#app');
  app.append(...sentences.map(sentence => {
    const shoutHere = document.createElement('div');
    shoutHere.className = 'shout';
    shoutHere.textContent = sentence;
    return shoutHere;
  }))
  return;
};

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas feugiat elit, ac tincidunt neque vestibulum at. Mauris a eros sit amet urna efficitur tempus."

const shoutOnce = _.once(shout);
const shoutToHTMLOnce = _.once(shoutToHTML);

shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);
shoutOnce(loremIpsum);

shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);
shoutToHTMLOnce(loremIpsum);