Array.prototype.forEach.call(document.querySelectorAll('.mdl-card__media'), function(el) {
    var link = el.querySelector('a');
    if (!link) {
        return;
    }
    var target = link.getAttribute('href');
    if (!target) {
        return;
    }
    el.addEventListener('click', function() {
        location.href = target;
    });
});
