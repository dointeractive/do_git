function Shots(el) {
    this.$el = $(el)
}

Shots.prototype = {
    popular: popular,

    everyone: everyone,

    load: function (list) {
        var url =
            'http://api.dribbble.com/shots' +
            '/' + list +
            '?per_page=4' +
            '&callback=?'

        $.getJSON(url).done(this.render)
    },

    render: function (resp) {
        var shots = resp.shots

        shots.forEach(function (shot) {
            var img = $('<img>', {
                src: shot.image_teaser_url
            })
            
            this.$el.append(img)
        })
    }
}

function popular() {
    this.load('popular')
}

var everyone = function () {
    this.load('everyone')
}

var shots = new Shots('body')
shots.popular()
shots.everyone()

