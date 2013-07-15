var animals = new Dataset({
  name: 'animals',
  local: ['dog', 'fish', 'cat', 'monkey', 'turtle', 'donkey', 'dragon']
}).initialize();

$('.typeahead').typeahead({
  sections: {
    name: 'animals',
    source: animals,
    highlight: true,
    templates: {
      empty: '<p>No animals found.</p>'
    }
  }
});