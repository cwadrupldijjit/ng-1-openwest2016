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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nLXVwZ3JhZGUtcHVibGljL2Jvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFHTSxjQUFjOzs7Ozs7O1lBQWQsY0FBYyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFDO1lBRTVDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFFL0QsMkNBQWMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
