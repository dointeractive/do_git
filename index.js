function Shots(el) {
    this.$el = $(el)
}

Shots.prototype = {
    load: function (list) {
        var url =
            'http://api.dribbble.com/shots' +
            '/' + list +
            '?per_page=4' +
            '&callback=?'

        $.getJSON(url).done($.proxy(this.render, this))
    },

    render: function (resp) {
        var shots = resp.shots

        shots.forEach(function (shot) {
            var img = $('<img>', {
                src: shot.image_teaser_url
            })
            
            this.$el.append(img)
        }, this)
    }
}

var shots = new Shots('body')
shots.load('teams')
shots.load('everyone')

