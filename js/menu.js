/* 
* Free to use under the MIT license.
* https://www.opensource.org/licenses/mit-license.php
* 4/18/2015
*/

$(document).ready(function() {
	var template = '<div id="cd-vertical-nav"> \
		<ul> \
			<li> \
				<a href="index.html" class="noselect {{? it.section == 0 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Intro</span> \
				</a> \
			</li> \
			<li> \
				<a href="02-emphasis.html" class="noselect {{? it.section == 1 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Emphase</span> \
				</a> \
			</li> \
			<li> \
				<a href="03-paragraphs.html" class="noselect {{? it.section == 2 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Paragraphes</span> \
				</a> \
			</li> \
			<li> \
				<a href="04-headings.html" class="noselect {{? it.section == 3 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Titres</span> \
				</a> \
			</li> \
			<li> \
				<a href="05-blockquotes.html" class="noselect {{? it.section == 4 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Blocs de citation</span> \
				</a> \
			</li> \
			<li> \
				<a href="06-lists.html" class="noselect {{? it.section == 5 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Listes</span> \
				</a> \
			</li> \
			<li> \
				<a href="07-links.html" class="noselect {{? it.section == 6 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Liens</span> \
				</a> \
			</li> \
			<li> \
				<a href="08-images.html" class="noselect {{? it.section == 7 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Images</span> \
				</a> \
			</li> \
			<li> \
				<a href="09-code.html" class="noselect {{? it.section == 8 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Code</span> \
				</a> \
			</li> \
			<li> \
				<a href="10-nestedLists.html" class="noselect {{? it.section == 9 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Listes imbriquées</span> \
				</a> \
			</li> \
			<li> \
				<a href="99-end.html" class="noselect {{? it.section == 10 }}is-selected{{?}}"> \
					<span class="cd-dot"></span> \
					<span class="cd-label">Fin</span> \
				</a> \
			</li> \
		</ul> \
	</div> \
	<a class="cd-nav-trigger cd-img-replace">Open navigation<span></span></a>';
    
	var menuFn = doT.template(template);
	$(document.body).append(menuFn({section: CURRENT_SECTION}));
	
	// open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    // close navigation on touch devices when selecting an element from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });
});