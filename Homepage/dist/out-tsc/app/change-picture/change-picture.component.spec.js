import { async, TestBed } from '@angular/core/testing';
import { ChangePictureComponent } from './change-picture.component';
describe('ChangePictureComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChangePictureComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChangePictureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/change-picture/change-picture.component.spec.js.map