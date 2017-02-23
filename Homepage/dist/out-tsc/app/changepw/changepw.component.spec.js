import { async, TestBed } from '@angular/core/testing';
import { ChangepwComponent } from './changepw.component';
describe('ChangepwComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChangepwComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChangepwComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/changepw/changepw.component.spec.js.map