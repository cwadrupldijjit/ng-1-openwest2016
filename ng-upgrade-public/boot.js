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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFHTSxjQUFjOzs7Ozs7O1lBQWQsY0FBYyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFDO1lBRTVDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFFL0QsMkNBQWMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xyXG5pbXBvcnQgeyBVcGdyYWRlQWRhcHRlciB9IGZyb20gJ2FuZ3VsYXIyL3VwZ3JhZGUnO1xyXG5cclxuY29uc3QgdXBncmFkZUFkYXB0ZXIgPSBuZXcgVXBncmFkZUFkYXB0ZXIoKTtcclxuXHJcbnVwZ3JhZGVBZGFwdGVyLmJvb3RzdHJhcChkb2N1bWVudC5ib2R5LCBbJ0FwcFRocmVlJ10sIHtzdHJpY3RESTogdHJ1ZX0pO1xyXG5cclxuZXhwb3J0IHsgdXBncmFkZUFkYXB0ZXIgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
