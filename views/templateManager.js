var templateManager = (function () {

    var templates = {};

    return {
        renderTemplate: function (templateName, data) {
            var compiledTemplate = templates[templateName];
            if (!compiledTemplate) {
                throw new Error("Undefined template name: " + templateName);
            }
            return compiledTemplate(data);
        },
        registerTemplate: function (templateName) {
            var template = document.getElementById(templateName).innerHTML;
            templates[templateName] = _.template(template);
        }
    }
})();