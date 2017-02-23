import { async, TestBed } from '@angular/core/testing';
import { BottombarComponent } from './bottombar.component';
describe('BottombarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BottombarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BottombarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/ZeynepTras/Documents/git/support2017/Homepage/src/app/bottombar/bottombar.component.spec.js.map