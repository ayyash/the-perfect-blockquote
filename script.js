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
  // find steppers and change vars?
  const sizeRange = document.getElementById('fontSize');
  const lineHeightRange = document.getElementById('lineHeight');
  const fontSizeValue = document.getElementById('fontSizeValue');
  const lineHeightValue = document.getElementById('lineHeightValue');

  sizeRange.onchange = (e) => {
    const size = parseFloat(e.target.value * 100).toFixed(2);
    fontSizeValue.innerText = size;

    document.documentElement.style.setProperty('--font-size', `${size}%`);
    document.documentElement.style.setProperty('--scale', e.target.value);
  };

  lineHeightRange.onchange = (e) => {
    lineHeightValue.innerText = e.target.value;

    document.documentElement.style.setProperty('--lineHeight', e.target.value);
  };

  const leadingLH = document.getElementById('leadingLineHeight');
  const trailingLH = document.getElementById('trailingLineHeight');
  const unsetLH = document.getElementById('unsetLineHeight');

  leadingLH.onclick = (e) => {
    const value = e.target.checked ? 1 : 0;
    document.documentElement.style.setProperty('--leadingLineHeight', value);
  };
  trailingLH.onclick = (e) => {
    const value = e.target.checked ? 1 : 0;
    document.documentElement.style.setProperty('--trailingLineHeight', value);
  };
  unsetLH.onclick = (e) => {
    // remove line height temp
    document.documentElement.style.setProperty('--trailingLineHeight', 'unset');
    document.documentElement.style.setProperty('--leadingLineHeight', 'unset');
  };

  const changeFont = document.getElementById('changeFont');
  changeFont.onchange = (e) => {
    const value = e.target.value;
    document.body.className = 'font-' + value;
  };

  const changeLVAlign = document.getElementById('changeLVAlign');
  const changeTVAlign = document.getElementById('changeTVAlign');
  const lva = document.getElementById('lva');
  const tva = document.getElementById('tva');

  changeLVAlign.onchange = (e) => {
    document.documentElement.style.setProperty(
      '--leadingVerticalAlign',
      e.target.value
    );
  };
  changeTVAlign.onchange = (e) => {
    document.documentElement.style.setProperty(
      '--trailingVerticalAlign',
      e.target.value
    );
  };

  lva.onchange = (e) => {
    document.documentElement.style.setProperty(
      '--leadingVerticalAlign',
      e.target.value + 'rem'
    );
  };
  tva.onchange = (e) => {
    document.documentElement.style.setProperty(
      '--trailingVerticalAlign',
      e.target.value + 'rem'
    );
  };

  const changeHOrigin = document.getElementById('changeHOrigin');
  const changeVOrigin = document.getElementById('changeVOrigin');
  const horigin = document.getElementById('ho');
  const vorigin = document.getElementById('vo');
  const horiginPercent = document.getElementById('perho');
  const voriginPercent = document.getElementById('pervo');

  changeHOrigin.onchange = (e) => {
    document.documentElement.style.setProperty('--ho', e.target.value);
  };
  horigin.onchange = (e) => {
    document.documentElement.style.setProperty('--ho', e.target.value + 'rem');
  };
  horiginPercent.onchange = (e) => {
    document.documentElement.style.setProperty('--ho', e.target.value + '%');
  };
  changeVOrigin.onchange = (e) => {
    document.documentElement.style.setProperty('--vo', e.target.value);
  };
  vorigin.onchange = (e) => {
    document.documentElement.style.setProperty('--vo', e.target.value + 'rem');
  };
  voriginPercent.onchange = (e) => {
    document.documentElement.style.setProperty('--vo', e.target.value + '%');
  };

  const toggleCite = document.getElementById('toggleCite');
  toggleCite.onclick = (e) => {
    const value = e.target.checked ? 'block' : 'none';
    document.documentElement.style.setProperty('--toggle-cite', value);
  };

  // leadingIndent, leadingHangingMargin
  const leadingIndent = document.getElementById('leadingIndent');
  const leadingHangingMargin = document.getElementById('leadingHangingMargin');
  leadingIndent.onchange = (e) => {
    document.documentElement.style.setProperty(
      '--leadingIndent',
      e.target.value + 'rem'
    );
  };
  leadingHangingMargin.onchange = (e) => {
    document.documentElement.style.setProperty(
      '--leadingHangingMargin',
      e.target.value + 'rem'
    );
  };

  document.getElementById('toggleVanity').onclick = (e) => {
    if (e.target.checked) {
      document.body.classList.add('makevanity');
    } else {
      document.body.classList.remove('makevanity');
    }
  };
}
