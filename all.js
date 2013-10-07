function Shots(el) {
    this.$el = $(el)
}

Shots.prototype = {
    popular: function () {
        this.load('popular')
    },

    load: function (list) {
        var url =
            'http://api.dribbble.com/shots' +
            '/' + list +
            '?per_page=4' +
            '&callback=?'

        $.getJSON(url).done($.proxy(this.render, this))
    },

    render: function (resp) {
        var shots = resp.shots,
            self = this

        shots.forEach(function (shot) {
            var img = $('<img>', {
                src: shot.image_teaser_url
            })
            
            self.$el.append(img)
        })
    }
}

var shots = new Shots('body'),
    load = shots.load

load('everyone')

