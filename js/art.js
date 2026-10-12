(function () {
  var INK = "#43302b";

  function svg(inner) {
    return '<svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">' + inner + "</svg>";
  }

  function eye(x, y, r) {
    r = r || 4.2;
    return '<g><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + INK + '"/><circle cx="' + (x + r * 0.32) + '" cy="' + (y - r * 0.34) + '" r="' + (r * 0.36) + '" fill="#fff"/></g>';
  }

  function blush(x, y) {
    return '<ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3" fill="#ff8fa3" opacity=".7"/>';
  }

  window.SOUND_ART = {
    cat: svg(
      '<path d="M36 78 Q16 70 18 46" stroke="' + INK + '" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<path d="M36 78 Q16 70 18 46" stroke="#f4a340" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      '<rect x="46" y="78" width="9" height="22" rx="4.5" fill="#f4a340" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="78" y="78" width="9" height="22" rx="4.5" fill="#d98a2b" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="72" cy="74" rx="32" ry="18" fill="#f4a340" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="74" cy="80" rx="16" ry="8" fill="#ffe0b8"/>' +
      '<rect x="40" y="76" width="9" height="24" rx="4.5" fill="#f4a340" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="70" y="76" width="9" height="24" rx="4.5" fill="#f4a340" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M92 48 L96 28 L108 46 Z" fill="#f4a340" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M96 44 L98 32 L104 44 Z" fill="#ffb3a7"/>' +
      '<path d="M112 44 L124 26 L126 48 Z" fill="#f4a340" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M116 42 L122 32 L124 44 Z" fill="#ffb3a7"/>' +
      '<circle cx="112" cy="58" r="20" fill="#f4a340" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="122" cy="66" rx="10" ry="7" fill="#fff6ea" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M124 62 l5 0 l-2.5 4 z" fill="#ff7b8a"/>' +
      eye(108, 54, 3.6) + eye(120, 54, 3.6) + blush(106, 64) +
      '<path d="M132 64 H148 M132 68 H146" stroke="' + INK + '" stroke-width="1.6" stroke-linecap="round"/>'
    ),

    dog: svg(
      '<path d="M40 70 Q18 62 22 40" stroke="' + INK + '" stroke-width="8" fill="none" stroke-linecap="round"/>' +
      '<path d="M40 70 Q18 62 22 40" stroke="#e3a05f" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<rect x="48" y="78" width="10" height="22" rx="5" fill="#c8853f" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="80" y="78" width="10" height="22" rx="5" fill="#c8853f" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="74" cy="72" rx="34" ry="20" fill="#e3a05f" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="76" cy="80" rx="18" ry="9" fill="#fbe7c9"/>' +
      '<rect x="42" y="76" width="10" height="24" rx="5" fill="#e3a05f" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="72" y="76" width="10" height="24" rx="5" fill="#e3a05f" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M96 58 Q108 66 118 58" stroke="#e53950" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="108" cy="64" r="4" fill="#ffd54f" stroke="' + INK + '" stroke-width="2"/>' +
      '<path d="M100 42 C92 28 108 22 112 40 Z" fill="#8a5a35" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<circle cx="114" cy="52" r="18" fill="#e3a05f" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="128" cy="60" rx="12" ry="9" fill="#fbe7c9" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="136" cy="58" rx="4" ry="3" fill="' + INK + '"/>' +
      '<path d="M128 64 Q132 72 138 64 Z" fill="#ff7b8a" stroke="' + INK + '" stroke-width="2"/>' +
      eye(118, 48, 3.8) + blush(116, 58)
    ),

    cow: svg(
      '<path d="M42 62 Q24 58 26 74" stroke="' + INK + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<circle cx="24" cy="78" r="5" fill="' + INK + '"/>' +
      '<rect x="40" y="78" width="11" height="24" rx="4" fill="#fffdf8" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="62" y="80" width="11" height="22" rx="4" fill="#fffdf8" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="86" y="78" width="11" height="24" rx="4" fill="#fffdf8" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="108" y="80" width="11" height="22" rx="4" fill="#fffdf8" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M40 100 h11 M62 102 h11 M86 100 h11 M108 102 h11" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
      '<ellipse cx="78" cy="70" rx="44" ry="24" fill="#fffdf8" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="58" cy="62" rx="12" ry="9" fill="' + INK + '"/>' +
      '<ellipse cx="92" cy="76" rx="14" ry="8" fill="' + INK + '"/>' +
      '<path d="M108 36 Q112 24 120 30" stroke="' + INK + '" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M124 34 Q132 22 136 32" stroke="' + INK + '" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="118" cy="52" rx="20" ry="16" fill="#fffdf8" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="108" cy="42" rx="6" ry="4" fill="' + INK + '"/>' +
      '<ellipse cx="138" cy="58" rx="10" ry="8" fill="#f3b6c2" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="136" cy="56" rx="1.6" ry="2.2" fill="' + INK + '"/><ellipse cx="141" cy="56.5" rx="1.6" ry="2.2" fill="' + INK + '"/>' +
      eye(124, 48, 3.4)
    ),

    chicken: svg(
      '<path d="M28 58 Q16 40 28 34 Q22 48 36 56" fill="#f28c28" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M34 52 Q20 36 36 28 Q30 44 44 52" fill="#ffb703" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M48 78 l-6 22 M62 80 l4 20" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M40 100 h12 M60 100 h12" stroke="#f28c28" stroke-width="3" stroke-linecap="round"/>' +
      '<ellipse cx="70" cy="68" rx="30" ry="22" fill="#ffd15c" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="62" cy="64" rx="14" ry="10" fill="#ffe08a" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="104" cy="52" r="16" fill="#ffe08a" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M96 40 Q104 28 108 40 Q112 26 116 40 Q120 30 122 42" fill="#e23b3b" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M118 52 L142 58 L118 64 Z" fill="#f28c28" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M108 66 q4 8 0 10 q-4-2 0-10" fill="#e23b3b" stroke="' + INK + '" stroke-width="2"/>' +
      eye(110, 48, 3.4)
    ),

    bird: svg(
      '<path d="M36 62 Q18 52 22 40 Q32 50 44 58" fill="#4dabf7" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M70 78 l-4 16 M82 80 l4 14" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>' +
      '<ellipse cx="74" cy="66" rx="26" ry="18" fill="#4dabf7" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="78" cy="72" rx="14" ry="10" fill="#ffe08a"/>' +
      '<path d="M58 58 Q70 40 92 52 Q78 58 70 68 Z" fill="#74c0fc" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<circle cx="104" cy="52" r="14" fill="#74c0fc" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M116 52 L140 56 L116 62 Z" fill="#f59f00" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      eye(108, 48, 3.2) + blush(106, 58)
    ),

    pig: svg(
      '<path d="M36 70 Q22 62 24 52 Q32 58 34 66" stroke="#ff8fab" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M36 70 Q22 62 24 52 Q32 58 34 66" stroke="' + INK + '" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
      '<rect x="48" y="82" width="12" height="18" rx="5" fill="#ffb3c7" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="78" y="84" width="12" height="16" rx="5" fill="#ffb3c7" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="74" cy="74" rx="36" ry="24" fill="#ffb3c7" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="42" y="82" width="12" height="18" rx="5" fill="#ffb3c7" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="70" y="84" width="12" height="16" rx="5" fill="#ffb3c7" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M96 52 Q90 36 104 40 Q100 52 108 56 Z" fill="#ff8fab" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<circle cx="112" cy="62" r="18" fill="#ffb3c7" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="132" cy="68" rx="12" ry="10" fill="#ff8fab" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="128" cy="66" rx="2" ry="3" fill="' + INK + '"/><ellipse cx="136" cy="66" rx="2" ry="3" fill="' + INK + '"/>' +
      eye(114, 56, 3.4) + blush(110, 66)
    ),

    sheep: svg(
      '<rect x="46" y="84" width="8" height="18" rx="4" fill="' + INK + '"/>' +
      '<rect x="64" y="86" width="8" height="16" rx="4" fill="' + INK + '"/>' +
      '<rect x="88" y="84" width="8" height="18" rx="4" fill="' + INK + '"/>' +
      '<rect x="106" y="86" width="8" height="16" rx="4" fill="' + INK + '"/>' +
      '<circle cx="52" cy="70" r="16" fill="#fff" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="74" cy="60" r="18" fill="#fff" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="96" cy="66" r="17" fill="#fff" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="70" cy="80" r="16" fill="#fff" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="92" cy="82" r="14" fill="#fff" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="124" cy="62" rx="16" ry="14" fill="' + INK + '" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="136" cy="66" rx="7" ry="5" fill="#f3d2b0"/>' +
      '<path d="M116 50 Q112 38 122 42" fill="' + INK + '" stroke="' + INK + '" stroke-width="3"/>' +
      eye(128, 58, 3)
    ),

    horse: svg(
      '<path d="M34 64 Q14 58 16 78 Q22 66 38 70" fill="#3b2414" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<rect x="38" y="76" width="9" height="32" rx="3" fill="#c9844a" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="56" y="78" width="9" height="30" rx="3" fill="#a86b32" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="90" y="76" width="9" height="32" rx="3" fill="#c9844a" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="108" y="78" width="9" height="30" rx="3" fill="#a86b32" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M36 108 h13 M54 108 h13 M88 108 h13 M106 108 h13" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>' +
      '<ellipse cx="74" cy="74" rx="44" ry="16" fill="#c9844a" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M108 70 L116 36 L124 22 L134 20 L138 34 L156 38 L158 50 L132 54 L118 68 Z" fill="#c9844a" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M114 64 L106 50 L118 52 L108 38 L122 40 L112 24 L128 32" fill="none" stroke="#3b2414" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>' +
      '<path d="M122 24 L126 8 L136 22 Z" fill="#c9844a" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M134 28 L154 30 L156 40 L136 42 Z" fill="#f3e2c8"/>' +
      '<ellipse cx="154" cy="42" rx="2.2" ry="2.6" fill="' + INK + '"/>' +
      eye(138, 34, 3.2)
    ),

    drum: svg(
      '<path d="M28 36 L48 58" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M132 32 L112 56" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="26" cy="32" r="7" fill="#f4e1c1" stroke="' + INK + '" stroke-width="3"/>' +
      '<circle cx="136" cy="28" r="7" fill="#f4e1c1" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M36 62 H124 L116 100 H44 Z" fill="#e03131" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<ellipse cx="80" cy="62" rx="44" ry="14" fill="#fff3d6" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M48 78 Q80 90 112 78" stroke="#ffd43b" stroke-width="4" fill="none"/>' +
      '<path d="M52 70 v18 M70 66 v22 M90 66 v22 M108 70 v18" stroke="#ffd43b" stroke-width="3" stroke-linecap="round"/>'
    ),

    bell: svg(
      '<rect x="74" y="14" width="12" height="16" rx="4" fill="#8d6e63" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M48 40 H112 L124 92 Q80 108 36 92 Z" fill="#ffd43b" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<ellipse cx="80" cy="40" rx="32" ry="10" fill="#ffe066" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M62 48 Q70 78 80 80" stroke="#fff6c2" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>' +
      '<circle cx="80" cy="96" r="7" fill="#f08c00" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M58 92 H102" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>'
    ),

    triangle: svg(
      '<path d="M80 16 v12" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M80 28 L118 100 H42 Z" fill="none" stroke="#adb5bd" stroke-width="10" stroke-linejoin="round"/>' +
      '<path d="M80 36 L108 92" fill="none" stroke="#868e96" stroke-width="3"/>' +
      '<path d="M92 70 L124 96" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="128" cy="98" r="7" fill="#dee2e6" stroke="' + INK + '" stroke-width="3"/>'
    ),

    castanet: svg(
      '<path d="M72 26 Q80 12 88 26" fill="none" stroke="' + INK + '" stroke-width="3.5" stroke-linecap="round"/>' +
      '<path d="M78 30 C42 34 38 104 76 108 C58 96 54 46 78 30 Z" fill="#e08a1e" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M70 42 C54 52 52 90 70 98" fill="none" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M82 30 C118 34 122 104 84 108 C102 96 106 46 82 30 Z" fill="#b45309" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M90 42 C106 52 108 90 90 98" fill="none" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/>'
    ),

    xylophone: svg(
      '<path d="M24 40 H136 L128 104 H32 Z" fill="#8d6e63" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M36 48 V96 M124 48 V96" stroke="#6d4c41" stroke-width="4" stroke-linecap="round"/>' +
      '<rect x="30" y="46" width="100" height="8" rx="3" fill="#ff6b6b" stroke="' + INK + '" stroke-width="2.5"/>' +
      '<rect x="36" y="58" width="88" height="8" rx="3" fill="#ff922b" stroke="' + INK + '" stroke-width="2.5"/>' +
      '<rect x="42" y="70" width="76" height="8" rx="3" fill="#ffd43b" stroke="' + INK + '" stroke-width="2.5"/>' +
      '<rect x="48" y="82" width="64" height="8" rx="3" fill="#69db7c" stroke="' + INK + '" stroke-width="2.5"/>' +
      '<rect x="54" y="94" width="52" height="8" rx="3" fill="#4dabf7" stroke="' + INK + '" stroke-width="2.5"/>' +
      '<path d="M108 22 L92 50" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="112" cy="18" r="7" fill="#fff3bf" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M132 28 L112 54" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="136" cy="24" r="7" fill="#d0ebff" stroke="' + INK + '" stroke-width="3"/>'
    ),

    melodica: svg(
      '<path d="M36 62 H18 Q8 62 10 74 Q12 84 24 82 H36" fill="#dee2e6" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<ellipse cx="12" cy="78" rx="8" ry="7" fill="#fff" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="36" y="46" width="108" height="42" rx="8" fill="#40c057" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="46" y="52" width="10" height="22" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' +
      '<rect x="60" y="52" width="10" height="22" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' +
      '<rect x="74" y="52" width="10" height="22" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' +
      '<rect x="88" y="52" width="10" height="22" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' +
      '<rect x="102" y="52" width="10" height="22" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' +
      '<rect x="116" y="52" width="10" height="22" fill="#fff" stroke="' + INK + '" stroke-width="2"/>' +
      '<rect x="54" y="52" width="7" height="14" fill="' + INK + '"/>' +
      '<rect x="68" y="52" width="7" height="14" fill="' + INK + '"/>' +
      '<rect x="96" y="52" width="7" height="14" fill="' + INK + '"/>' +
      '<rect x="110" y="52" width="7" height="14" fill="' + INK + '"/>'
    ),

    piano: svg(
      '<path d="M28 28 H132 V36 H124 V100 H36 V36 H28 Z" fill="#343a40" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<rect x="44" y="40" width="72" height="28" rx="4" fill="#ffe8cc" stroke="' + INK + '" stroke-width="2"/>' +
      '<rect x="40" y="78" width="80" height="22" fill="#f8f9fa" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M52 78 v22 M64 78 v22 M76 78 v22 M88 78 v22 M100 78 v22 M112 78 v22" stroke="' + INK + '" stroke-width="2"/>' +
      '<rect x="48" y="78" width="7" height="13" fill="' + INK + '"/>' +
      '<rect x="60" y="78" width="7" height="13" fill="' + INK + '"/>' +
      '<rect x="84" y="78" width="7" height="13" fill="' + INK + '"/>' +
      '<rect x="96" y="78" width="7" height="13" fill="' + INK + '"/>' +
      '<rect x="72" y="100" width="6" height="8" fill="#868e96" stroke="' + INK + '" stroke-width="2"/>' +
      '<rect x="84" y="100" width="6" height="8" fill="#868e96" stroke="' + INK + '" stroke-width="2"/>'
    ),

    woodfish: svg(
      '<path d="M118 22 L108 42" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="122" cy="18" r="8" fill="#f4e1c1" stroke="' + INK + '" stroke-width="3"/>' +
      '<ellipse cx="78" cy="70" rx="48" ry="30" fill="#e03131" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M40 70 H108" stroke="#ffd43b" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M108 58 Q132 62 128 78 Q120 70 108 74 Z" fill="#c92a2a" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<circle cx="118" cy="64" r="3.5" fill="' + INK + '"/>' +
      '<path d="M48 58 Q70 48 96 56" stroke="#ff8787" stroke-width="4" fill="none" stroke-linecap="round"/>'
    )
  };
})();
