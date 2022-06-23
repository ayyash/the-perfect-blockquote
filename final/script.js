window.onload = init;


function init() {
  document.getElementById('toggle-tools').onclick = (e) => {
    const tools = document.getElementById('tools');
    if (tools.style.display === 'none') {
      tools.style.display = 'block';
    } else {
      tools.style.display = 'none';
    }
  };

  const rules = document.styleSheets[0].cssRules;
  let quoteRule;
  for(let i =0; i < rules.length; i++) {
    if (rules[i].selectorText === '.quoted') {
      quoteRule = rules[i];
    }
  }
  let vanityRule;
  for(let i =0; i < rules.length; i++) {
    if (rules[i].selectorText === '.vanity') {
      vanityRule = rules[i];
    }
  }


  document.getElementById('fontSize').onchange = (e) => {
    const size = parseFloat(e.target.value * 100).toFixed(2);
    document.getElementById('fontSizeValue').innerText = size;
    quoteRule.style.setProperty('--font-size', `${size}%`);

  };
  document.getElementById('bodyFontSize').onchange = (e) => {
    document.getElementById('bodyFontSizeValue').innerText = e.target.value;
    document.documentElement.style.setProperty('--body-font-size', e.target.value + 'rem');
  };

  document.getElementById('lineHeight').onchange = (e) => {
    document.getElementById('lineHeightValue').innerText = e.target.value;

    document.documentElement.style.setProperty('--line-height', e.target.value);
  };

 
  document.getElementById('changeFont').onchange = (e) => {
    document.documentElement.style.setProperty('--quote-font', e.target.value);

  };
  document.getElementById('bodyFont').onchange = (e) => {
    document.documentElement.style.setProperty('--body-font', e.target.value);

  };

  document.getElementById('changeVAlign').onchange = (e) => {
    quoteRule.style.setProperty('--vertical-align', e.target.value);
  };

  document.getElementById('va').onchange = (e) => {
    quoteRule.style.setProperty('--vertical-align', e.target.value + 'rem');
  };


  document.getElementById('changeVVAlign').onchange = (e) => {
    vanityRule.style.setProperty('--vertical-align', e.target.value);
  };

  document.getElementById('vva').onchange = (e) => {
    vanityRule.style.setProperty('--vertical-align', e.target.value + 'rem');
  };

  document.getElementById('openingIndent').onchange = (e) => {
    quoteRule.style.setProperty('--opening-indent', e.target.value + 'rem');
  };
  document.getElementById('vanityOpeningIndent').onchange = (e) => {
    vanityRule.style.setProperty('--opening-indent', e.target.value + 'rem');
  };


  // extra code, clean up spaced around blockquotes to avoid skipping lines
  document.querySelectorAll('blockquote').forEach((blockquote) => {
    // trip spaces
    blockquote.innerHTML = blockquote.innerHTML.trim(' ');

  });
}