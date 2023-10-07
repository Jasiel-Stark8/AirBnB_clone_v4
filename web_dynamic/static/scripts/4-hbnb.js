$(document).ready(function () {
    const amenities = {};

    $('input[type="checkbox"]').change(function () {
        if ($(this).is(':checked')) {
            amenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenities[$(this).data('id')];
        }
    });

    $('button').click(function () {
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: Object.keys(amenities) }),
            success: function(data) {
                $('section.places').empty();
                for (const place of data) {
                    // Create an article tag for each place
                    const article = `
                    <article>
                        ...
                    </article>
                    `;
                    $('section.places').append(article);
                }
            }
        });
    });
});
