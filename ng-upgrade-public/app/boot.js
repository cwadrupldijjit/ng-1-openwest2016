System.register(['angular2/upgrade'], function(exports_1) {
    var upgrade_1;
    var upgradeAdapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            }],
        execute: function() {
            upgradeAdapter = new upgrade_1.UpgradeAdapter();
            upgradeAdapter.bootstrap(document.body, ['AppThree'], { strictDI: true });
            exports_1("upgradeAdapter", upgradeAdapter);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBR00sY0FBYzs7Ozs7OztZQUFkLGNBQWMsR0FBRyxJQUFJLHdCQUFjLEVBQUUsQ0FBQztZQUU1QyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBRS9ELDJDQUFjIiwiZmlsZSI6ImFwcC9ib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCB7IFVwZ3JhZGVBZGFwdGVyIH0gZnJvbSAnYW5ndWxhcjIvdXBncmFkZSc7XHJcblxyXG5jb25zdCB1cGdyYWRlQWRhcHRlciA9IG5ldyBVcGdyYWRlQWRhcHRlcigpO1xyXG5cclxudXBncmFkZUFkYXB0ZXIuYm9vdHN0cmFwKGRvY3VtZW50LmJvZHksIFsnQXBwVGhyZWUnXSwge3N0cmljdERJOiB0cnVlfSk7XHJcblxyXG5leHBvcnQgeyB1cGdyYWRlQWRhcHRlciB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
