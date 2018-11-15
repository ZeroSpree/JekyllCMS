var listing = [];

new Vue({
    el    : '#app',
    data  : {
        'sections' : listing
    }
});

$.get(config.routes.listing+'?path='+config.sectionsDir, function (data) {

    for(var i in data) {
        var path = data[i];

        $.post(config.routes.readyaml+'?path='+path, function (res) {
            var content = res.content;
            var path = res.path;

            content['path'] = path;

            listing.push(content);
            listing.sort( utils.sortByProperty('title', 'asc') );
        });
    }

});

$('.sidebar__nav a[href="/sections"]').addClass('is--active');
