function createSpaceLink(element, tankName, title, alt) {
  var link, anchor;

  // XXX serverOptions needs to come from config or parameters
  link = serverOptions.host + "/tanks/" + tankName;

  if (title) {
    anchor = createExternalLink(element, link + "/" +
      encodeURIComponent(title), alt || title);
  } else {
    anchor = createExternalLink(element, link, alt || tankName);
  }
  jQuery(anchor).addClass('tankLink').attr('tiddler', title);
  jQuery(anchor).attr('tank', tankName);
  return anchor;
}