# Captain's Cabin drinks menu: the ONE source for the drinks on the website (#kitchen)
# and the table-QR menu (/menu/). Edit prices here, then run:  python3 tools/drinks_menu.py
# It rewrites the drinks block between the DRINKS-START / DRINKS-END markers in both pages.
# Typed from the printed drinks menu (photographed 31 Oct 2026). Obvious spelling fixed.

TABS = [
  ("d-beer", "Beers &amp; Ciders", [
    ("Beers", None, [
      ("Amstel", "R34"), ("Black Label", "R32"), ("Budweiser", "R35"), ("Castle", "R32"),
      ("Castle Double Malt", "R32"), ("Castle Lite", "R32"), ("Corona", "R45"),
      ("Devil&rsquo;s Peak Lager", "R38"), ("Flying Fish", "R38", "Lemon or apple"),
      ("Guinness", "R52"), ("Hansa Pilsner", "R32"), ("Heineken", "R39"), ("Miller", "R39"),
      ("Stella Artois", "R39"), ("Tafel Lager", "R32"), ("Windhoek Lager", "R42"),
      ("Windhoek Draught", "R44"),
    ]),
    ("Ciders", None, [
      ("Hunters Dry / Hunters Gold", "R42"), ("Hunters Extreme", "R42"),
      ("Red Square Energy", "R45"), ("Rekordelig", "R85", "Strawberry &amp; lime or wildberries"),
      ("Savanna", "R41", "Dry, Light or Chilled Chilli"), ("Strongbow", "R41", "Berries or apple"),
    ]),
    ("Non-alcoholic", None, [
      ("Castle Free", "R32"), ("Heineken 0.0", "R35"), ("Savanna", "R45"), ("Hunters Chilled", "R45"),
    ]),
  ]),
  ("d-tap", "On Tap &amp; Towers", [
    ("On tap", None, [
      ("Black Label", "R39 / R49", "300 ml / 500 ml"),
      ("Castle Lager", "R38 / R48", "300 ml / 500 ml"),
      ("Castle Lite", "R39 / R49", "300 ml / 500 ml"),
      ("Darling Bone Crusher", "R37 / R49", "300 ml / 500 ml"),
      ("Darling Slow Beer", "R37 / R49", "300 ml / 500 ml"),
      ("Drunken Monkey", "R37 / R79 / R380", "300 ml / 750 ml / 3 litre"),
    ]),
    ("Towers &middot; 3 litre beer", None, [
      ("Black Label", "R270"), ("Castle Lite", "R270"), ("Castle", "R260"),
      ("Darling Slow Beer", "R270"), ("Darling Bone Crusher", "R270"),
    ]),
    ("Towers &middot; brandy", None, [
      ("Buffelsfontein", "R490"), ("KWV 3 Year", "R490"), ("KWV 5 Year", "R650"),
      ("Olof Bergh", "R490"), ("Richelieu", "R490"), ("Wellington", "R490"),
    ]),
    ("Towers &middot; other", None, [
      ("Red Square", "R490"), ("Smirnoff 1818", "R490"), ("Spiced Gold", "R490"),
    ]),
  ]),
  ("d-wine", "Wine", [
    ("Wine selection", None, [
      ("Darling Sauvignon Blanc 500 ml", "R75"),
      ("Van Loveren Blanc de Blanc 750 ml", "R140"),
      ("Casal Garcia 750 ml", "R190", "Imported Portuguese wine"),
      ("Van Loveren Pinotage 750 ml", "R180"),
      ("Nederburg Ros&eacute; (Classic) 750 ml", "R140"),
      ("Van Loveren Merlot 750 ml", "R190"),
      ("Diemersdal Pinotage 750 ml", "R280"),
      ("Nederburg Ros&eacute; (Grenache) 750 ml", "R190"),
      ("Van Loveren River Red 500 ml", "R75"),
      ("Darling Cabernet Sauvignon Reserve 750 ml", "R210"),
    ]),
    ("By the glass", None, [
      ("Sauvignon Blanc", "R35"), ("Chenin Blanc", "R35"), ("Chardonnay", "R35"),
      ("Semi-sweet white", "R35"), ("Sweet white", "R35"),
      ("Merlot", "R35"), ("Cabernet Sauvignon", "R35"), ("Shiraz", "R35"), ("Pinotage", "R35"),
      ("Semi-sweet red", "R35"), ("Sweet ros&eacute;", "R35"),
    ]),
    ("Sauvignon Blanc", None, [
      ("Diemersdal", "R170"), ("Leopard&rsquo;s Leap", "R135"), ("Riebeek Cellars", "R130"),
      ("The Beach House", "R130"), ("Two Oceans", "R130"), ("Van Loveren", "R145"),
    ]),
    ("Chenin Blanc", None, [("Leopard&rsquo;s Leap", "R135"), ("Riebeek Cellars", "R130")]),
    ("Chardonnay", None, [("Darling Cellars", "R120"), ("Four Cousins", "R120"), ("Riebeek Cellars", "R130")]),
    ("White blends", None, [
      ("Darling Cellars Chenin / Sauvignon 500 ml", "R75"),
      ("Darling Cellars Chenin / Sauvignon 750 ml", "R130"),
      ("Drostdy-Hof Extra Light", "R145"),
    ]),
    ("Semi-sweet", None, [("Leopard&rsquo;s Leap", "R125"), ("Montuno White Light", "R110")]),
    ("Portuguese inspired", None, [
      ("Simonsvlei Pinto Tinto Cinsault", "R120"),
      ("Simonay Natural Sweet White Daisy", "R120"),
      ("Simonay Natural Sweet Pink Rose", "R120"),
      ("Simonay Natural Sweet Red Lily", "R120"),
    ]),
    ("Ros&eacute;", None, [
      ("Montino", "R110"), ("The Beach House", "R130"),
      ("Van Loveren Chardonnay / Pinot Noir", "R140"),
    ]),
    ("Merlot", None, [("Four Cousins", "R135"), ("Riebeek Cellars", "R140")]),
    ("Shiraz", None, [("Darling Premium", "R175"), ("Leopard&rsquo;s Leap", "R135"), ("Riebeek Cellars", "R140")]),
    ("Pinotage", None, [
      ("Beyerskloof", "R175"), ("Four Cousins", "R135"), ("Riebeek Cellars", "R140"),
      ("Darling Chocoholic", "R145"),
    ]),
    ("Red blends", None, [
      ("Alto Rouge", "R190"),
      ("Darling Cellars Cab / Merlot 500 ml", "R75"),
      ("Darling Cellars Cab / Merlot 750 ml", "R130"),
      ("Leopard&rsquo;s Leap Cabernet Sauvignon", "R140"),
      ("Fat Bastard Gold Reserve", "R240"),
      ("Riebeek Cabernet Sauvignon", "R140"),
      ("Two Oceans Cabernet Sauvignon", "R120"),
      ("Van Loveren Cabernet Sauvignon", "R140"),
    ]),
    ("Sparkling wine", None, [
      ("Four Cousins Sparkling Red", "R150"), ("JC Le Roux", "R145"),
      ("Van Loveren Papillon Demi Sec", "R150"),
    ]),
  ]),
  ("d-spirits", "Spirits &amp; Whisky", [
    ("Whisky", None, [
      ("Bain&rsquo;s", "R38"), ("Ballantine&rsquo;s", "R35"), ("Bell&rsquo;s", "R32"),
      ("Black &amp; White", "R25"), ("Chivas", "R48"), ("Grant&rsquo;s", "R28"), ("J&amp;B", "R28"),
      ("Jack Daniel&rsquo;s", "R35"), ("Jameson", "R32"), ("Jameson IPA", "R45"),
      ("Jameson Select Reserve", "R48"), ("Jameson Stout", "R38"),
      ("Johnnie Walker Black", "R45"), ("Johnnie Walker Red", "R29"), ("Pogues", "R29"),
      ("Southern Comfort", "R29"), ("Scottish Leader", "R29"), ("VAT 69", "R29"),
    ]),
    ("Brandy", None, [
      ("Buffelsfontein", "R23"), ("Ginger", "R23"), ("Klipdrift", "R23"), ("Klipdrift Premium", "R32"),
      ("KWV 10 Year", "R42"), ("KWV 5 Year", "R32"), ("KWV 3 Year", "R23"), ("Olof Bergh", "R23"),
      ("Richelieu", "R25"), ("Vuilhond", "R23"), ("Wellington", "R23"), ("Wildebeest", "R25"),
    ]),
    ("Gin", None, [
      ("Beefeater", "R29"), ("Belgravia", "R19"), ("Belgravia Blackberry", "R19"),
      ("Belgravia Blood Orange", "R19"), ("Belgravia Pink", "R19"), ("Gordon&rsquo;s", "R19"),
      ("Tanqueray", "R29"), ("Tanqueray Sevilla", "R35"), ("Malfy Limone", "R19"),
      ("Malfy Arancia", "R19"), ("Malfy Rosa", "R19"), ("Inverroche Classic", "R38"),
      ("Inverroche Amber", "R39"),
    ]),
    ("Rum", None, [
      ("Bacardi", "R28"), ("Bacardi Oakheart", "R28"), ("Caribbean Twist White", "R25"),
      ("Caribbean Twist Spiced", "R25"), ("Captain Morgan Dark", "R28"),
      ("Captain Morgan Spiced Gold", "R28"), ("Coco-Mo", "R19"), ("Dead Man&rsquo;s Dark", "R24"),
      ("Dead Man&rsquo;s Pineapple", "R24"), ("Dead Man&rsquo;s Spiced", "R24"), ("Malibu", "R24"),
      ("Montego", "R24"), ("Red Heart", "R28"), ("Tipo Tinto", "R28"),
      ("Tipo Tinto Coco Rhumba", "R25"),
    ]),
    ("Vodka", None, [
      ("Absolut Blue", "R32"), ("Red Square", "R28"), ("Smirnoff", "R28"),
      ("Cape to Rio", "R27"), ("Skyy", "R35"),
    ]),
    ("Top shelf", None, [
      ("Johnnie Walker Blue", "R240"), ("Antonella Grappa", "R70"), ("Bisquit Cognac", "R55"),
      ("Don Julio Tequila Reposado", "R85"), ("Hennessy VS Cognac", "R55"),
      ("Hennessy VSOP Cognac", "R120"),
    ]),
  ]),
  ("d-cocktails", "Cocktails", [
    ("Cocktails", None, [
      ("Mojito", "R85", "Bacardi, Finest Call mojito mix, mint &amp; soda"),
      ("Strawberry Mojito", "R85", "Bacardi, strawberry liqueur, strawberry juice, mojito mix &amp; mint"),
      ("Long Island Iced Tea", "R115", "Gin, vodka, Bacardi, cane, silver tequila, triple sec, lemon juice &amp; Coke or cranberry juice"),
      ("Pina Colada", "R85", "Bacardi, Cocomo liqueur, ice cream &amp; pina colada"),
      ("Strawberry Pina Colada", "R85", "Bacardi, Cocomo liqueur, strawberry juice, ice cream, Finest Call pina colada"),
      ("Bloody Mary", "R85", "Vodka, tomato cocktail"),
      ("Margarita", "R85", "Silver tequila, triple sec &amp; margarita mix"),
      ("West Coast Sunset", "R110", "Vodka, peach liqueur, triple sec, blue liqueur, grenadine &amp; orange juice"),
      ("Blue Bay", "R85", "Apple sours, banana liqueur, triple sec, blue liqueur &amp; lemonade"),
      ("Sex on the Beach", "R85", "Vodka, peach liqueur, grenadine &amp; orange juice"),
      ("Captain&rsquo;s Punch", "R110", "Bacardi, Cocomo liqueur, Spiced Gold, blue liqueur &amp; pineapple juice"),
      ("Cosmopolitan", "R85", "Vodka, triple sec &amp; cranberry juice"),
      ("Tequila Sunrise", "R85", "Silver tequila, grenadine &amp; orange juice"),
      ("Red Tide", "R95", "Vodka, Cocomo, peach liqueur, pineapple juice &amp; strawberry juice"),
      ("Fish Bowl (small)", "R90", "Gin, vodka, Cocomo, cane, Bacardi, tequila, blue liqueur &amp; lemonade"),
      ("Mango Daiquiri", "R130", "Caribbean Twist white rum, triple sec, mango mix &amp; orange juice"),
      ("Strawberry Daiquiri", "R130", "Caribbean Twist white rum, strawberry liqueur, lime cordial, grenadine &amp; strawberry juice"),
    ]),
    ("Jars", None, [
      ("Soco Jar", "R130", "Vodka, Southern Comfort &amp; grenadine"),
      ("Libido Jar", "R130", "Vodka, Libido &amp; lemonade"),
      ("Mojo Jar", "R130", "Mojo, vodka &amp; lemonade"),
    ]),
  ]),
  ("d-shooters", "Shooters", [
    ("Mixed shooters &middot; R35 each", None, [
      ("Smurfette", "R35", "Strawberry Lips &amp; bubblegum tequila"),
      ("Driver on Acid", "R35", "Tequila, gin &amp; Stroh rum"),
      ("Sowetan Toilet", "R35", "Amarula, banana liqueur &amp; Nachtmusik"),
      ("Sledgehammer", "R35", "Amarula, Kahlua &amp; Stroh rum"),
      ("Sizzling Banana", "R35", "Banana liqueur &amp; J&auml;germeister"),
      ("Rascals", "R35", "Libido, apple sours &amp; bubblegum tequila"),
      ("Chinese F@ck Bubble", "R35", "Aftershock, Amarula &amp; Stroh rum"),
      ("Jelly Baby", "R35", "Po10C, Libido &amp; apple sours"),
      ("Pancake", "R35", "Aftershock, Amarula &amp; cream"),
      ("Motor Oil", "R35", "Malibu, J&auml;germeister &amp; peppermint liqueur"),
      ("Kamikaze", "R35", "Vodka, triple sec &amp; a dash of lime"),
      ("Bazooka Joe", "R35", "Amarula, blue cura&ccedil;ao &amp; banana liqueur"),
      ("Licorice Ball Shot", "R35", "Lupini Gold &amp; Amarula with a dash of grenadine"),
      ("Springbokkie", "R35", "Amarula &amp; peppermint liqueur"),
      ("Shock Zone", "R35", "Aftershock &amp; Stroh rum"),
      ("Tropical Blowjob", "R35", "Amarula, Kahlua, Malibu &amp; cream"),
      ("Lollipop", "R35", "Apple sours, banana liqueur &amp; cherry"),
      ("Horney Monkey", "R35", "Amarula, Frangelico &amp; cream"),
      ("Blow Job", "R35", "Amarula, Kahlua &amp; cream"),
      ("Rolo", "R35", "Black Widow &amp; caramel vodka"),
      ("Pirate&rsquo;s Treasure", "R35", "Lupini Gold &amp; Captain Morgan"),
      ("Turkish Delight", "R35", "Monin Rose &amp; Nachtmusik"),
    ]),
    ("Single shooters", None, [
      ("Aftershock", "R35"), ("Amarula", "R27"), ("Apple Sours", "R18"), ("Black Widow", "R35"),
      ("Butlers Banana", "R22"), ("Butlers Blue", "R22"), ("Butlers Cherry", "R22"),
      ("Butlers Strawberry", "R22"), ("Butlers Triple Sec", "R22"), ("Cactus Jack", "R27"),
      ("Cape Velvet", "R27"), ("Cherry Sours", "R18"), ("Elderflower", "R18"),
      ("Spiced Gold No 6", "R35"), ("Frangelico", "R35"), ("Jack Daniel&rsquo;s Honey", "R38"),
      ("J&auml;germeister", "R35"), ("Jose Cuervo Gold", "R35"), ("Jose Cuervo Silver", "R35"),
      ("Sombrero Tequila Gold", "R35"), ("Libido", "R18"), ("Vuilhond Caramel Shot", "R35"),
      ("Lovodka", "R29"), ("Lupini Black", "R32"), ("Lupini Gold", "R32"), ("Mojo", "R24"),
      ("Monin Rose", "R18"), ("Nachtmusik", "R25"), ("Olmeca Black", "R35"), ("Olmeca Gold", "R35"),
      ("Olmeca Silver", "R35"), ("Peach Schnapps", "R25"), ("Peppermint Liqueur", "R25"),
      ("Po10C", "R25"), ("Ponchos", "R35"), ("Ponchos Caramel", "R35"), ("Relic Bubblegum", "R24"),
      ("Sambuca Red", "R35"), ("Sambuca Green", "R35"), ("Kahlua", "R35"),
      ("Strawberry Lips", "R25"), ("Stroh Rum", "R48"), ("Underberg", "R55"),
    ]),
  ]),
  ("d-coolers", "Coolers", [
    ("Coolers", None, [
      ("Belgravia", "R38", "Tonic, dry lemon, pink tonic or dark cherry"),
      ("Breezer", "R39", "Tonic, dry lemon, pink tonic or dark cherry"),
      ("Brutal Fruit", "R38", "Ruby, apple or strawberry rouge"),
      ("Caribbean Twist", "R39", "Peach, pina colada or strawberry &amp; watermelon"),
      ("Bernini", "R39", "Blush, amber or classic"),
      ("Klipdrift &amp; Cola", "R38"), ("Buffelsfontein &amp; Cola", "R37"),
      ("Hooch", "R35", "Passion fruit or strawberry"),
      ("Smirnoff Double Black", "R39"),
      ("Smirnoff", "R39", "Spin, Storm or Pine Twist"),
      ("Tipo Tinto Coca Loco", "R39"), ("Tipo Tinto R&amp;R", "R38"),
    ]),
    ("Non-alcoholic coolers", None, [
      ("Belgravia Gin &amp; Dry Lemon", "R37"), ("Belgravia Gin &amp; Tonic", "R37"),
    ]),
  ]),
  ("d-specials", "Drinks Specials", [
    ("2 &times; doubles &amp; mixer &middot; brandy", "Fountain mix, or R5 extra for a bottle or can.", [
      ("Buffelsfontein", "R69"), ("KWV 5 Year", "R110"), ("KWV 3 Year", "R69"), ("Olof Bergh", "R69"),
    ]),
    ("2 &times; doubles &amp; mixer &middot; gin", "With your choice of mixer: Indian, pink or blue tonic, cranberry, grapefruit, dry lemon, lemonade or ginger ale.", [
      ("Belgravia Dry", "R85"), ("Belgravia Blackberry", "R85"), ("Belgravia Blood Orange", "R85"),
      ("Belgravia Pink", "R85"), ("Single Tanqueray &amp; mixer", "R55"),
    ]),
    ("2 &times; doubles &amp; mixer &middot; rum", "Fountain mix, or R5 extra for a bottle or can.", [
      ("Captain Morgan Jamaica", "R85"), ("Captain Morgan Spiced Gold", "R85"),
      ("Dead Man&rsquo;s Fingers", "R90"), ("Montego", "R80"), ("Red Heart", "R85"),
      ("Tipo Tinto &amp; Sparberry", "R80"),
    ]),
    ("2 &times; doubles &amp; mixer &middot; vodka", None, [
      ("Red Square &amp; K-Way", "R79"), ("Red Square &amp; OJ", "R85"),
      ("Red Square &amp; Breakfast Blend", "R90"), ("Red Square &amp; 7 Stars", "R90"),
      ("Red Square &amp; Play", "R95"), ("Smirnoff &amp; OJ", "R90"),
    ]),
    ("2 &times; doubles &amp; mixer &middot; whisky", None, [
      ("Bell&rsquo;s &amp; K-Way", "R85"), ("Bell&rsquo;s &amp; soda", "R90"), ("J&amp;B &amp; K-Way", "R85"),
      ("J&amp;B &amp; soda", "R90"), ("Pogues &amp; K-Way", "R85"), ("Pogues &amp; soda", "R95"),
      ("VAT 69 &amp; water", "R75"), ("VAT 69 &amp; soda", "R85"),
    ]),
    ("Buckets of 6", None, [
      ("Castle Lite &times; 6", "R179"), ("Corona &times; 6", "R259"),
      ("Devil&rsquo;s Peak Lager &times; 6", "R190"), ("Windhoek Lager &times; 6", "R239"),
      ("Bacardi Breezer &times; 6", "R225"), ("Caribbean Twist &times; 6", "R225"),
      ("Hunters &times; 6", "R225"), ("Savanna &times; 6", "R225"),
    ]),
  ]),
]


def item_html(it, ind):
    name, price = it[0], it[1]
    desc = it[2] if len(it) > 2 else None
    s = (f'{ind}<li>\n{ind}  <div class="d-top"><span class="d-name">{name}</span>'
         f'<i class="d-lead"></i><span class="d-price">{price}</span></div>\n')
    if desc:
        s += f'{ind}  <p class="d-desc">{desc}</p>\n'
    return s + f'{ind}</li>\n'


def groups_html(groups, ind):
    out = ""
    for title, note, items in groups:
        out += f'{ind}<div class="menu-group">\n{ind}  <h4>{title}</h4>\n'
        if note:
            out += f'{ind}  <p class="mg-note">{note}</p>\n'
        out += f'{ind}  <ul class="dishes">\n'
        for it in items:
            out += item_html(it, ind + "    ")
        out += f'{ind}  </ul>\n{ind}</div>\n'
    return out


def qr_menu_html():
    """Sections for /menu/ (one <section class="cat"> per tab)."""
    out = '<div id="drinks-sections" hidden>\n'
    for tid, label, groups in TABS:
        out += (f'<section class="cat" id="{tid}" aria-labelledby="h-{tid}">\n'
                f'<h2 id="h-{tid}">{label}</h2>\n<div class="cat-body">\n')
        out += groups_html(groups, "")
        out += '</div>\n</section>\n'
    out += ('<div class="notewrap"><p class="note">Drinks prices in South African Rand. '
            'Alcohol is not sold to persons under the age of 18.</p></div>\n</div>\n')
    return out


def qr_chips_html():
    return "".join(f'<a class="chip" href="#{tid}">{label}</a>\n' for tid, label, _ in TABS)


def site_tabs_html():
    out = ""
    for i, (tid, label, _) in enumerate(TABS):
        out += (f'        <button class="mtab" role="tab" id="tab-{tid}" aria-controls="panel-{tid}" '
                f'aria-selected="{"true" if i == 0 else "false"}" data-panel="{tid}">{label}</button>\n')
    return out


def site_panels_html():
    out = ""
    for i, (tid, label, groups) in enumerate(TABS):
        single = " single" if len(groups) == 1 else ""
        hidden = "" if i == 0 else " hidden"
        out += f'      <div class="menu-panel{single}" id="panel-{tid}" role="tabpanel" aria-labelledby="tab-{tid}"{hidden}>\n'
        out += groups_html(groups, "        ")
        out += '      </div>\n'
    return out


def replace_between(text, start, end, new):
    a = text.index(start) + len(start)
    b = text.index(end, a)
    return text[:a] + "\n" + new + text[b:]


if __name__ == "__main__":
    import os
    root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
    p = os.path.join(root, "menu", "index.html")
    s = open(p, encoding="utf-8").read()
    s = replace_between(s, "<!-- DRINKS-CHIPS-START -->", "<!-- DRINKS-CHIPS-END -->", qr_chips_html())
    s = replace_between(s, "<!-- DRINKS-START -->", "<!-- DRINKS-END -->", qr_menu_html())
    open(p, "w", encoding="utf-8").write(s)
    p = os.path.join(root, "index.html")
    s = open(p, encoding="utf-8").read()
    s = replace_between(s, "<!-- DRINKS-TABS-START -->", "<!-- DRINKS-TABS-END -->", site_tabs_html() + "        ")
    s = replace_between(s, "<!-- DRINKS-PANELS-START -->", "<!-- DRINKS-PANELS-END -->", site_panels_html() + "      ")
    open(p, "w", encoding="utf-8").write(s)
    n = sum(len(g[2]) for _, _, gs in TABS for g in gs)
    print(f"Drinks menu written: {len(TABS)} sections, {n} items")
