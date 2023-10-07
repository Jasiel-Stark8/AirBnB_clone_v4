$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function(data) {
        for (const place of data) {
            // Create an article tag for each place
            const article = `
            <article>
                <div class="title">
                    <h2>${place.name}</h2>
                    <div class="price_by_night">${place.price_by_night}</div>
                </div>
                <div class="information">
                    <div class="max_guest">${place.max_guest} Guests</div>
                    <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                    <div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>
                </div>
                <div class="description">
                    ${place.description}
                </div>
            </article>
            `;
            $('section.places').append(article);
        }
    }
});
