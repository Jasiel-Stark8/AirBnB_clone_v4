$(document).ready(function () {
    const amenities = {};

    $('input[type="checkbox"]').change(function() {
        if ($(this).prop('checked')) {
            // Add the amenity to the dictionary
            amenities[$(this).data('id')] = $(this).data('name');
        } else {
            // Remove the amenity from the dictionary
            delete amenities[$(this).data('id')];
        }
        // Update the h4 tag with the list of checked amenities
        $('div.amenities h4').text(Object.values(amenities).join(', '));
    });
});
