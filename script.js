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

  document.getElementById('fontSize').onchange = (e) => {
    const size = parseFloat(e.target.value * 100).toFixed(2);
    document.getElementById('fontSizeValue').innerText = size;

    document.documentElement.style.setProperty('--font-size', `${size}%`);
    document.documentElement.style.setProperty('--scale', e.target.value);
  };

  document.getElementById('lineHeight').onchange = (e) => {
    document.getElementById('lineHeightValue').innerText = e.target.value;

    document.documentElement.style.setProperty('--line-height', e.target.value);
  };

  document.getElementById('leadingLineHeight').onclick = (e) => {
    const value = e.target.checked ? 1 : 0;
    document.documentElement.style.setProperty('--leading-line-height', value);
  };
  document.getElementById('trailingLineHeight').onclick = (e) => {
    const value = e.target.checked ? 1 : 0;
    document.documentElement.style.setProperty('--trailing-line-height', value);
  };
  document.getElementById('unsetLineHeight').onclick = (e) => {
    // remove line height temp
    document.documentElement.style.setProperty('--trailing-line-height', 'unset');
    document.documentElement.style.setProperty('--leading-line-height', 'unset');
  }

  document.getElementById('changeFont').onchange = (e) => {
    document.documentElement.style.setProperty('--font-family', e.target.value);

  };

  document.getElementById('changeLVAlign').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-vertical-align', e.target.value);
  };
  document.getElementById('changeTVAlign').onchange = (e) => {
    document.documentElement.style.setProperty('--trailing-vertical-align', e.target.value);
  };

  document.getElementById('lva').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-vertical-align', e.target.value + 'rem');
  };
  document.getElementById('tva').onchange = (e) => {
    document.documentElement.style.setProperty('--trailing-vertical-align', e.target.value + 'rem');
  };

  document.getElementById('changeHOrigin').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-horigin', e.target.value);
  };
  document.getElementById('ho').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-horigin', e.target.value + 'rem');
  };
  document.getElementById('perho').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-horigin', e.target.value + '%');
  };
  document.getElementById('changeVOrigin').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-vorigin', e.target.value);
  };
  document.getElementById('vo').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-vorigin', e.target.value + 'rem');
  };
  document.getElementById('pervo').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-vorigin', e.target.value + '%');
  };


  document.getElementById('toggleCite').onclick = (e) => {
    const value = e.target.checked ? 'block' : 'none';
    document.documentElement.style.setProperty('--toggle-cite', value);
  };


  document.getElementById('leadingIndent').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-indent', e.target.value + 'rem');
  };

  document.getElementById('ltop').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-top', e.target.value + 'rem');
  }
  document.getElementById('lleft').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-left', e.target.value + 'rem');
  }

  document.getElementById('toggleVanity').onclick = (e) => {
    if (e.target.checked) {
      document.body.classList.add('makevanity');
    } else {
      document.body.classList.remove('makevanity');
    }
  }

  // extra code, clean up spaced around blockquotes to avoid skipping lines
  document.querySelectorAll('blockquote').forEach((blockquote) => {
    // trip spaces
    blockquote.innerHTML = blockquote.innerHTML.trim(' ');

  });
}