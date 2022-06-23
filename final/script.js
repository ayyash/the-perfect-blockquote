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
    document.documentElement.style.setProperty('--font-family', e.target.value);

  };

  document.getElementById('changeVAlign').onchange = (e) => {
    document.documentElement.style.setProperty('--vertical-align', e.target.value);
  };

  document.getElementById('va').onchange = (e) => {
    document.documentElement.style.setProperty('--vertical-align', e.target.value + 'rem');
  };

  document.getElementById('toggleCite').onclick = (e) => {
    const value = e.target.checked ? 'block' : 'none';
    document.documentElement.style.setProperty('--toggle-cite', value);
  };


  document.getElementById('leadingIndent').onchange = (e) => {
    document.documentElement.style.setProperty('--leading-indent', e.target.value + 'rem');
  };

  // extra code, clean up spaced around blockquotes to avoid skipping lines
  document.querySelectorAll('blockquote').forEach((blockquote) => {
    // trip spaces
    blockquote.innerHTML = blockquote.innerHTML.trim(' ');

  });
}