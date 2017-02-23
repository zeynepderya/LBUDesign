import { async, TestBed } from '@angular/core/testing';
import { DeleteAccountComponent } from './delete-account.component';
describe('DeleteAccountComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DeleteAccountComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DeleteAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/delete-account/delete-account.component.spec.js.map