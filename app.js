registerTemplates();

articleView.addToScreen();

function registerTemplates() {
    [
        'article-template'
    ].forEach(templateManager.registerTemplate);
}

