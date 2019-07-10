
import { TestBed, fakeAsync, getTestBed, tick, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from "../app.module";
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('RegistrationComponent', () => {
    let component: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;
    let appService: AppService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, MatAutocompleteModule,
                MatButtonModule,
                MatButtonToggleModule,
                MatCardModule,
                MatCheckboxModule,
                MatChipsModule,
                MatDatepickerModule,
                MatDialogModule,
                MatExpansionModule,
                MatGridListModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatMenuModule,
                MatNativeDateModule,
                MatProgressBarModule,
                MatProgressSpinnerModule,
                MatRadioModule,
                MatRippleModule,
                MatSelectModule,
                MatSidenavModule,
                MatSliderModule,
                MatSlideToggleModule,
                MatSnackBarModule,
                MatStepperModule,
                MatTableModule,
                MatTabsModule,
                MatToolbarModule,
                MatTooltipModule,
                AppModule,
                FormsModule,
                ReactiveFormsModule
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(RegistrationComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('should render Register Component', () => {
        expect(component).toBeTruthy();
    });

    it('blocks login without a valid email address', async () => {
        component.registrationForm.controls.email.setValue("admin");
        expect(component.registrationForm.controls.email.valid).toBeFalsy();
    });

    it('allows login with a valid email address', () => {
        component.registrationForm.controls.email.setValue("admin@123.com");
        expect(component.registrationForm.controls.email.valid).toBeTruthy();
    });

    it('backtoRegister', () => {
        component.backtoRegister();
        expect(component.showRegisterForm).toBeTruthy();
        expect(component.showVerificationForm).toBeFalsy();
    });

    it('registration', () => {
        component.registrationForm.controls['email'].setValue('admin@123.com');
        component.sendEmailVerification();
        expect(component.showVerificationForm).toBeTruthy();
        expect(component.showRegisterForm).toBeFalsy();
    });

    it('backtoVerification', () => {
        component.backtoVerification();
        expect(component.showVerificationForm).toBeTruthy();
        expect(component.showAccountForm).toBeFalsy();
    });

    it('goToAccount', () => {
        component.verifyEmail();
        expect(component.showAccountForm).toBeTruthy();
        expect(component.showVerificationForm).toBeFalsy();
    });

});
