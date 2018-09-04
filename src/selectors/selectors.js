// Dynamically translate the API authors list into our embedded authors list which is appropriately formatted for the drop-sown select list.
export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}
